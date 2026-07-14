import { Component, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameStateService } from '../../core/services/game-state.service';
import { AuthService } from '../../core/services/auth.service';
import { WebsocketService } from '../../core/services/websocket.service';
import { AudioService } from '../../core/services/audio.service';
import { SnackbarService } from '../../core/services/snackbar.service';

import { BoardComponent } from './components/board/board.component';
import { CategorySlotsComponent } from './components/category-slots/category-slots.component';
import { QuestionModalComponent } from './components/question-modal/question-modal.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { TacticalPanelComponent } from './components/tactical-panel/tactical-panel.component';
import { TurnIndicatorComponent } from './components/turn-indicator/turn-indicator.component';
import { CategoryBadgeComponent } from '../../shared/components/category-badge/category-badge.component';
import { RulesHelpComponent } from '../../shared/components/rules-help/rules-help.component';
import { AnswerPayload } from '../../shared/models/player.model';
import { AnswerResult, CategorySlot, PlayerInfo, ZwapAction } from '../../shared/models/game.model';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    BoardComponent,
    CategorySlotsComponent,
    QuestionModalComponent,
    ScoreboardComponent,
    TacticalPanelComponent,
    TurnIndicatorComponent,
    CategoryBadgeComponent,
    RulesHelpComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  gameState = inject(GameStateService);
  private authService = inject(AuthService);
  readonly playerId = this.authService.playerId;
  private wsService = inject(WebsocketService);
  readonly audioService = inject(AudioService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private snackbar = inject(SnackbarService);

  hasAnswered = false;
  showResultOverlay = false;
  lastResultCorrect = false;
  lastResultPoints = 0;
  lastResultAnswerText = '';
  lastResultPlayerId = '';
  bezzerwizzerResults: any[] = [];
  showZwapSelector = false;
  zwapSourceIndex: number | null = null;
  zwapTargetPlayerId: string | null = null;
  zwapTargetSlotIndex: number | null = null;
  private resultOverlayTimeout?: number;

  setAudioVolume(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.audioService.setVolume(Number(input.value));
  }

  // Temporary state for assignment
  tempAssignment: number[] = [];
  private submittedAssignmentRound = -1;
  private challengedTurn = -1;

  constructor() {
    void this.restoreGameState();

    effect(() => {
      // Handle Phase transitions to show/hide modals and play sounds
      const phase = this.gameState.gamePhase();

      if (phase === 'GAME_OVER') {
        this.router.navigate(['/results', this.gameState.roomCode()]);
      }

      if (phase === 'BEZZERWIZZER_WINDOW') {
        if (this.gameState.isMyTurn()) {
          this.audioService.playNotification();
        }
      }

      if (phase === 'ANSWERING') {
        this.hasAnswered = false;
      }

      if (phase === 'CATEGORY_ASSIGNMENT') {
        // The final answer of a cycle can transition straight into a new
        // assignment screen, so do not leave its result overlay on top.
        this.dismissResultOverlay();
      }

      if (phase === 'PLAYING' && this.showZwapSelector) {
        this.showZwapSelector = false;
      }
    });

    effect((onCleanup) => {
      this.gameState.turnSequence();
      this.hasAnswered = false;
      this.challengedTurn = -1;
      const slots = this.gameState.myCategories();
      this.tempAssignment = slots.map(slot => slot.pointValue);
      onCleanup(() => undefined);
    });

    effect(() => {
      const results = this.gameState.bezzerwizzerResults();
      this.bezzerwizzerResults = results.map(result => ({
        challengerId: result.playerId ?? result.challengerId,
        correct: result.correct,
        pointsGained: result.points ?? result.pointsGained ?? 0
      }));
    });

    effect(() => {
      const result = this.gameState.lastAnswerResult();
      if (!result) return;
      this.showAnswerResult(result);
    });

    effect(() => {
      const isInteractiveRebound = this.gameState.gamePhase() === 'ANSWERING'
        && this.gameState.currentAnswerPlayerId() !== this.gameState.currentTurnPlayerId();
      if (isInteractiveRebound) this.dismissResultOverlay();
    });
  }

  private async restoreGameState() {
    const roomCode = this.route.snapshot.paramMap.get('code')?.trim().toUpperCase();
    if (!roomCode || !this.authService.isAuthenticated()) {
      await this.router.navigate(['/']);
      return;
    }

    try {
      await this.wsService.connect(this.authService.token());
      this.gameState.connectToRoom(roomCode);
      this.wsService.send(`/app/game/${roomCode}/state`, {});
    } catch (error) {
      console.error('Unable to restore game state', error);
      this.snackbar.show('No se pudo recuperar la partida', 'error');
      await this.router.navigate(['/']);
    }
  }

  get isAssigningCategories(): boolean {
    return this.gameState.gamePhase() === 'CATEGORY_ASSIGNMENT'
      && this.submittedAssignmentRound !== this.gameState.currentRound();
  }

  get canChallengeWithBezzerwizzer(): boolean {
    return this.gameState.canPlayBezzerwizzer() && this.challengedTurn !== this.gameState.turnSequence();
  }

  get hasVotedToSkipPreparation(): boolean {
    return this.gameState.preparationSkipVotes().includes(this.authService.playerId());
  }

  get canSkipPreparation(): boolean {
    return this.gameState.gamePhase() === 'PLAYING' && !this.hasVotedToSkipPreparation;
  }

  get canAnswerQuestion(): boolean {
    if (this.hasAnswered) return false;
    return this.gameState.gamePhase() === 'ANSWERING' &&
      (this.gameState.isMyAnswer() || this.gameState.canSubmitPreparedBezzerwizzer());
  }

  get canChangePreparedAnswer(): boolean {
    return this.gameState.canSubmitPreparedBezzerwizzer() && !this.gameState.isMyAnswer();
  }

  get isMySelectionIncorrect(): boolean {
    return !this.lastResultCorrect && this.lastResultPlayerId === this.authService.playerId();
  }

  get showQuestionModal(): boolean {
    const phase = this.gameState.gamePhase();
    if (!this.gameState.currentQuestion()) return false;
    return phase === 'ANSWERING';
  }

  get currentTurnPlayerName(): string {
    const id = this.gameState.currentTurnPlayerId();
    const p = this.gameState.players().find(x => x.playerId === id);
    return p ? p.username : '';
  }

  get pendingZwapPlayerName(): string {
    const playerId = this.gameState.pendingZwapPlayerId();
    return this.gameState.players().find(player => player.playerId === playerId)?.username ?? 'Un jugador';
  }

  get currentTurnPlayerColor(): string {
    const id = this.gameState.currentTurnPlayerId();
    const p = this.gameState.players().find(x => x.playerId === id);
    return p ? p.color : 'var(--color-primary)';
  }

  get currentAnswerPlayerName(): string {
    return this.getPlayerName(this.gameState.currentAnswerPlayerId());
  }

  get isReboundTurn(): boolean {
    const active = this.gameState.currentAnswerPlayerId();
    return Boolean(active && active !== this.gameState.currentTurnPlayerId());
  }

  get reboundQueueNames(): string[] {
    return this.gameState.reboundQueue().map(id => this.getPlayerName(id));
  }

  get hasReboundStatus(): boolean {
    return this.isReboundTurn || this.reboundQueueNames.length > 0;
  }

  get phaseText(): string {
    switch(this.gameState.gamePhase()) {
      case 'CATEGORY_ASSIGNMENT': return 'ASIGNANDO PUNTOS';
      case 'PLAYING': return this.gameState.isMyTurn() ? 'PREPARA TU JUGADA' : 'PREPARANDO JUGADA';
      case 'ZWAP': return 'ZWAP EN CURSO';
      case 'BEZZERWIZZER_WINDOW': return '¡BEZZERWIZZER!';
      case 'ANSWERING': return 'RESPONDIENDO';
      default: return 'RONDA ' + this.gameState.currentRound();
    }
  }

  get currentSlotIndex(): number {
    // This requires tracking which slot the player is currently on.
    // Assuming backend sends it or we calculate it based on what's answered.
    const myCats = this.gameState.myCategories();
    return myCats.findIndex(c => !c.answered);
  }

  get currentTurnCategory(): CategorySlot | undefined {
    const currentPlayer = this.gameState.players().find(player =>
      player.playerId === this.gameState.currentTurnPlayerId());
    return currentPlayer?.categorySlots?.[this.currentSlotIndexFor(currentPlayer.categorySlots ?? [])];
  }

  skipPreparation() {
    if (!this.canSkipPreparation) return;
    this.wsService.send(`/app/game/${this.gameState.roomCode()}/skip-turn-preparation`, {});
  }

  onAssignmentChanged(slots: CategorySlot[]) {
    this.tempAssignment = slots.map(s => s.pointValue);
    this.gameState.updateMyCategories(slots);
  }

  submitAssignment() {
    const valid = this.tempAssignment.length === 4 &&
      new Set(this.tempAssignment).size === 4 &&
      this.tempAssignment.every(value => value >= 1 && value <= 4);
    if (!valid || this.submittedAssignmentRound === this.gameState.currentRound()) {
      this.snackbar.show('Asigna una vez cada valor del 1 al 4', 'warning');
      return;
    }
    this.submittedAssignmentRound = this.gameState.currentRound();
    this.wsService.send(`/app/game/${this.gameState.roomCode()}/assign-categories`, {
      pointValues: this.tempAssignment
    });
    this.snackbar.show('Asignación confirmada. Esperando al resto…', 'success');
  }

  handleAnswer(answer: AnswerPayload) {
    if (!this.canAnswerQuestion || !this.gameState.currentQuestion()) {
      return;
    }
    if (!this.canChangePreparedAnswer) this.hasAnswered = true;
    this.wsService.send(`/app/game/${this.gameState.roomCode()}/answer`, answer);
  }

  onZwapClick() {
    if (!this.gameState.canPlayZwap()) return;
    this.zwapSourceIndex = null;
    this.zwapTargetPlayerId = null;
    this.zwapTargetSlotIndex = null;
    this.wsService.send(`/app/game/${this.gameState.roomCode()}/zwap/start`, {});
    this.showZwapSelector = true;
  }

  cancelZwap(): void {
    this.showZwapSelector = false;
    this.wsService.send(`/app/game/${this.gameState.roomCode()}/zwap/cancel`, {});
  }

  getMyPlayer(): PlayerInfo | undefined {
    return this.gameState.players().find(player => player.playerId === this.authService.playerId());
  }

  getZwapTargetPlayer(): PlayerInfo | undefined {
    return this.gameState.players().find(player => player.playerId === this.zwapTargetPlayerId);
  }

  availableZwapSlots(player: PlayerInfo): Array<{ slot: CategorySlot; index: number }> {
    return (player.categorySlots ?? [])
      .map((slot, index) => ({ slot, index }))
      .filter(({ slot }) => !slot.answered);
  }

  selectZwapSource(index: number): void {
    this.zwapSourceIndex = index;
    if (this.zwapTargetPlayerId === this.authService.playerId() && this.zwapTargetSlotIndex === index) {
      this.zwapTargetSlotIndex = null;
    }
  }

  selectZwapTargetPlayer(playerId: string): void {
    this.zwapTargetPlayerId = playerId;
    this.zwapTargetSlotIndex = null;
  }

  confirmZwap(): void {
    if (this.zwapSourceIndex === null || !this.zwapTargetPlayerId || this.zwapTargetSlotIndex === null) return;
    if (this.zwapTargetPlayerId === this.authService.playerId() && this.zwapSourceIndex === this.zwapTargetSlotIndex) {
      this.snackbar.show('Elige dos categorías distintas para reordenarlas', 'warning');
      return;
    }
    const action: ZwapAction = {
      targetPlayerId: this.zwapTargetPlayerId,
      mySlotIndex: this.zwapSourceIndex,
      targetSlotIndex: this.zwapTargetSlotIndex
    };
    this.wsService.send(`/app/game/${this.gameState.roomCode()}/zwap`, action);
    this.showZwapSelector = false;
  }

  onBezzerwizzerClick() {
    const turn = this.gameState.turnSequence();
    if (this.gameState.canPlayBezzerwizzer() && this.challengedTurn !== turn) {
      this.challengedTurn = turn;
      this.wsService.send(`/app/game/${this.gameState.roomCode()}/bezzerwizzer`, {
        targetPlayerId: this.gameState.currentTurnPlayerId()
      });
      this.snackbar.show(`BEZZER activado: entrarás en la cola si ${this.currentTurnPlayerName} falla`, 'info');
    }
  }

  private showAnswerResult(result: AnswerResult) {
    window.clearTimeout(this.resultOverlayTimeout);
    this.lastResultCorrect = result.correct;
    this.lastResultPlayerId = result.playerId;
    this.lastResultPoints = result.points;
    this.lastResultAnswerText = this.resolveCorrectAnswerText(result);
    this.bezzerwizzerResults = result.bezzerwizzerResults ?? [];
    this.showResultOverlay = true;
    this.resultOverlayTimeout = window.setTimeout(
      () => this.clearAnswerResult(),
      result.correct ? 1600 : 4000
    );
    result.correct ? this.audioService.playCorrect() : this.audioService.playIncorrect();
  }

  private resolveCorrectAnswerText(result: AnswerResult): string {
    const answer = result.correctAnswer?.trim();
    const optionKey = result.correctOption?.trim().toUpperCase()
      || (answer?.match(/^[A-D]$/i) ? answer.toUpperCase() : undefined);
    if (optionKey && this.gameState.currentQuestion()?.options) {
      const index = optionKey.charCodeAt(0) - 65;
      return this.gameState.currentQuestion()?.options?.[index] || answer || optionKey;
    }
    return answer || 'Sin respuesta';
  }

  private dismissResultOverlay(): void {
    window.clearTimeout(this.resultOverlayTimeout);
    this.clearAnswerResult();
  }

  private clearAnswerResult(): void {
    this.showResultOverlay = false;
    this.lastResultPlayerId = '';
    this.lastResultCorrect = false;
  }

  getPlayerName(id: string): string {
    const p = this.gameState.players().find(x => x.playerId === id);
    return p ? p.username : 'Jugador';
  }

  orderedCategories(slots: CategorySlot[] | undefined): CategorySlot[] {
    return [...(slots ?? [])].sort((a, b) => a.pointValue - b.pointValue);
  }

  private currentSlotIndexFor(slots: CategorySlot[]): number {
    return slots.findIndex(slot => !slot.answered);
  }
}
