import { Injectable, signal, computed, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnswerResult, BezzerwizzerResult, BezzerwizzerPlayedPayload, GamePhase, GameEvent, GameStatePayload, PlayerEventPayload, PlayerInfo, PlayerStatePayload, CategorySlot, TacticalTiles, TurnStartPayload, ZwapAppliedPayload } from '../../shared/models/game.model';
import { Question } from '../../shared/models/player.model';
import { AuthService } from './auth.service';
import { WebsocketService } from './websocket.service';
import { SnackbarService } from './snackbar.service';
import { AudioService } from './audio.service';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private authService = inject(AuthService);
  private snackbar = inject(SnackbarService);
  private audioService = inject(AudioService);

  // Core State Signals
  gamePhase = signal<GamePhase>('HOME');
  roomCode = signal<string>('');
  players = signal<PlayerInfo[]>([]);
  hostPlayerId = signal<string>('');
  
  // Game Play Signals
  currentQuestion = signal<Question | null>(null);
  myCategories = signal<CategorySlot[]>([]);
  boardPositions = signal<Record<string, number>>({});
  currentTurnPlayerId = signal<string>('');
  currentAnswerPlayerId = signal<string>('');
  pendingZwapPlayerId = signal<string>('');
  currentRound = signal<number>(0);
  timer = signal<number>(30);
  timerTotal = signal<number>(30);
  myTacticalTiles = signal<TacticalTiles>({ zwap: 1, bezzerwizzer: 2 });
  lastAnswerResult = signal<AnswerResult | null>(null);
  turnSequence = signal<number>(0);
  bezzerwizzerResults = signal<BezzerwizzerResult[]>([]);
  preparationSkipVotes = signal<string[]>([]);
  reboundQueue = signal<string[]>([]);
  bezzerwizzerPlayers = signal<string[]>([]);
  bezzerwizzerAnswered = signal<string[]>([]);
  tacticalAnnouncement = signal<string | null>(null);
  private tacticalAnnouncementTimeout?: number;
  
  // Computed State
  isMyTurn = computed(() => this.currentTurnPlayerId() === this.authService.playerId());
  isMyAnswer = computed(() => this.currentAnswerPlayerId() === this.authService.playerId());
  canSubmitPreparedBezzerwizzer = computed(() =>
    this.gamePhase() === 'ANSWERING' &&
    !this.isMyAnswer() &&
    this.reboundQueue().includes(this.authService.playerId()));
  isHost = computed(() => this.hostPlayerId() === this.authService.playerId());
  
  sortedPlayers = computed(() => {
    return [...this.players()].sort((a, b) => b.boardPosition - a.boardPosition);
  });

  canPlayBezzerwizzer = computed(() => {
    return this.myTacticalTiles().bezzerwizzer > 0 && 
           !this.isMyTurn() && 
           (this.gamePhase() === 'PLAYING' ||
            (this.gamePhase() === 'ANSWERING' && this.currentAnswerPlayerId() === this.currentTurnPlayerId()));
  });

  canPlayZwap = computed(() => {
    return this.myTacticalTiles().zwap > 0 && 
           this.isMyTurn() && 
           this.gamePhase() === 'PLAYING';
  });

  private timerInterval: any;
  private roomSubscription = new Subscription();
  private wsService = inject(WebsocketService);

  connectToRoom(roomCode: string) {
    console.log('GameStateService.connectToRoom called with code:', roomCode);
    this.roomSubscription.unsubscribe();
    this.roomSubscription = new Subscription();
    
    console.log('Calling wsService.subscribeToRoom...');
    this.roomSubscription.add(this.wsService.subscribeToRoom<GameEvent>(roomCode).subscribe({
      next: (event: GameEvent) => {
        console.log('Received event from room subscription:', event);
        this.handleGameEvent(event);
      },
      error: (err) => console.error('Error in room subscription:', err),
      complete: () => console.log('Room subscription completed')
    }));
    this.roomSubscription.add(this.wsService.subscribeToGame<GameEvent>(roomCode).subscribe({
      next: (event: GameEvent) => this.handleGameEvent(event),
      error: (err) => console.error('Error in game subscription:', err)
    }));
    console.log('Subscribed to room:', roomCode, this.roomSubscription);
  }

  handleGameEvent(event: GameEvent) {
    console.log('Game Event Received:', event.type, event.payload);
    
    switch (event.type) {
      case 'PLAYER_JOINED':
      case 'ROOM_STATE':
        this.updateRoom(event.payload as any);
        
        if (this.gamePhase() === 'HOME') {
          this.gamePhase.set('LOBBY');
        }
        break;
        
      case 'GAME_STATE':
        this.updateFromGameState(event.payload as GameStatePayload);
        break;

      case 'ZWAP_APPLIED': {
        const zwap = event.payload as ZwapAppliedPayload;
        const target = zwap.playerId === zwap.targetPlayerId
          ? 'sus propias categorías'
          : `las categorías de ${zwap.targetPlayerName}`;
        const message = `${zwap.playerName} ha intercambiado ${zwap.sourceCategory} por ${zwap.targetCategory} (${target})`;
        this.snackbar.show(message, 'info');
        this.showTacticalAnnouncement(`↔ ZWAP · ${message}`);
        this.audioService.playZwap();
        break;
      }

      case 'BEZZERWIZZER_PLAYED': {
        const bezzer = event.payload as BezzerwizzerPlayedPayload;
        const message = `${bezzer.playerName} reta a ${bezzer.targetPlayerName}`;
        this.snackbar.show(`¡BEZZERWIZZER! ${message}`, 'warning');
        this.showTacticalAnnouncement(`★ BEZZERWIZZER · ${message}`);
        this.audioService.playBezzerwizzer();
        break;
      }

      case 'TURN_READY': {
        const turn = event.payload as PlayerEventPayload;
        this.currentTurnPlayerId.set(turn.playerId);
        this.currentAnswerPlayerId.set(turn.playerId);
        this.currentQuestion.set(null);
        this.lastAnswerResult.set(null);
        this.gamePhase.set('PLAYING');
        this.preparationSkipVotes.set([]);
        this.startTimer(turn.timeLimit ?? 10);
        this.timerTotal.set(turn.timeLimit ?? 10);
        break;
      }
        
      case 'TURN_START': {
        const turn = event.payload as TurnStartPayload;
        this.currentTurnPlayerId.set(turn.playerId);
        this.currentAnswerPlayerId.set(turn.playerId);
        this.currentQuestion.set(turn.question);
        this.startTimer(turn.timeLimit ?? 30);
        this.timerTotal.set(turn.timeLimit ?? 30);
        this.gamePhase.set('ANSWERING');
        this.bezzerwizzerResults.set([]);
        this.turnSequence.update(value => value + 1);
        break;
      }


      case 'ANSWERING_STARTED': {
        const answering = event.payload as PlayerEventPayload;
        this.currentAnswerPlayerId.set(answering.playerId);
        this.gamePhase.set('ANSWERING');
        this.startTimer(answering.timeLimit ?? 30);
        this.timerTotal.set(answering.timeLimit ?? 30);
        break;
      }

      case 'BEZZERWIZZER_ANSWERED':
        break;
        
      case 'ANSWER_RESULT': {
        const result = event.payload as AnswerResult;
        this.stopTimer();
        // Show the result for whoever is answering now, including a player
        // who receives a Bezzerwizzer rebound.
        if (result.playerId === this.currentAnswerPlayerId()) {
          this.lastAnswerResult.set(result);
        }
        this.players.update(players => players.map(player => player.playerId === result.playerId
          ? { ...player, boardPosition: Math.max(0, player.boardPosition + result.points) }
          : player));
        this.gamePhase.set('TURN_RESULT');
        break;
      }

      case 'BEZZERWIZZER_RESULT': {
        const result = event.payload as BezzerwizzerResult;
        this.bezzerwizzerResults.update(results => [...results, result]);
        const playerId = result.playerId ?? result.challengerId;
        const points = result.points ?? result.pointsGained ?? 0;
        this.players.update(players => players.map(player => player.playerId === playerId
          ? { ...player, boardPosition: Math.max(0, player.boardPosition + points) }
          : player));
        break;
      }
    }
  }

  private updateRoom(room: any) {
    this.roomCode.set(room.roomCode);
    const playersArray: PlayerInfo[] = room.players
      ? (Array.isArray(room.players) ? room.players : Object.values(room.players)) as PlayerInfo[]
      : [];
    this.players.set(playersArray);
    this.hostPlayerId.set(room.hostPlayerId || '');
  }

  private updateFromGameState(state: GameStatePayload) {
    this.roomCode.set(state.roomCode);
    this.gamePhase.set(state.phase);
    
    if (state.players) {
      let playersArray: PlayerStatePayload[] = [];
      if (Array.isArray(state.players)) {
        playersArray = state.players;
      } else {
        playersArray = Object.values(state.players) as PlayerStatePayload[];
      }
      
      this.players.set(playersArray.map((p: PlayerStatePayload) => ({
        playerId: p.playerId,
        username: p.username,
        color: p.color,
        boardPosition: p.boardPosition,
        ready: p.ready,
        roundScore: p.roundScore,
        categorySlots: p.categorySlots ?? []
      })));
      
      const me = playersArray.find((p: PlayerStatePayload) => p.playerId === this.authService.playerId());
      if (me) {
        this.myCategories.set(me.categorySlots || []);
        this.myTacticalTiles.set({
          zwap: me.zwapsRemaining ?? 0,
          bezzerwizzer: me.bezzerwizzersRemaining ?? 0
        });
      }
    }
    
    this.currentTurnPlayerId.set(state.currentTurnPlayerId ?? '');
    this.currentAnswerPlayerId.set(state.currentAnswerPlayerId ?? state.currentTurnPlayerId ?? '');
    this.pendingZwapPlayerId.set(state.pendingZwapPlayerId ?? '');
    this.reboundQueue.set(state.reboundQueue ?? []);
    this.bezzerwizzerPlayers.set(state.bezzerwizzerPlayers ?? []);
    this.bezzerwizzerAnswered.set(state.bezzerwizzerAnswered ?? []);
    this.currentRound.set(state.round);
    this.preparationSkipVotes.set(state.preparationSkipVotes ?? []);
    if (state.timer && state.timer > 0) {
      this.startTimer(state.timer);
    }
  }

  startTimer(seconds: number) {
    this.stopTimer();
    this.timerTotal.set(30);
    this.timer.set(seconds);
    this.timerInterval = setInterval(() => {
      const current = this.timer();
      if (current > 0) {
        this.timer.set(current - 1);
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  private showTacticalAnnouncement(message: string): void {
    window.clearTimeout(this.tacticalAnnouncementTimeout);
    this.tacticalAnnouncement.set(message);
    this.tacticalAnnouncementTimeout = window.setTimeout(
      () => this.tacticalAnnouncement.set(null),
      3500
    );
  }

  updateMyCategories(slots: CategorySlot[]) {
    this.myCategories.set(slots);
  }

  reset() {
    this.roomSubscription.unsubscribe();
    this.roomSubscription = new Subscription();
    this.gamePhase.set('HOME');
    this.roomCode.set('');
    this.players.set([]);
    this.hostPlayerId.set('');
    this.currentQuestion.set(null);
    this.myCategories.set([]);
    this.currentTurnPlayerId.set('');
    this.currentAnswerPlayerId.set('');
    this.currentRound.set(0);
    this.lastAnswerResult.set(null);
    this.turnSequence.set(0);
    this.bezzerwizzerResults.set([]);
    this.preparationSkipVotes.set([]);
    this.reboundQueue.set([]);
    this.bezzerwizzerPlayers.set([]);
    this.bezzerwizzerAnswered.set([]);
    this.tacticalAnnouncement.set(null);
    window.clearTimeout(this.tacticalAnnouncementTimeout);
    this.stopTimer();
  }
}
