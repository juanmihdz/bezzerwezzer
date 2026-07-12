import { Injectable, signal, computed, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { WebsocketService } from './websocket.service';
import * as i0 from "@angular/core";
export class GameStateService {
    authService = inject(AuthService);
    // Core State Signals
    gamePhase = signal('HOME', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "gamePhase" }] : /* istanbul ignore next */ []));
    roomCode = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "roomCode" }] : /* istanbul ignore next */ []));
    players = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "players" }] : /* istanbul ignore next */ []));
    hostPlayerId = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "hostPlayerId" }] : /* istanbul ignore next */ []));
    // Game Play Signals
    currentQuestion = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "currentQuestion" }] : /* istanbul ignore next */ []));
    myCategories = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "myCategories" }] : /* istanbul ignore next */ []));
    boardPositions = signal({}, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "boardPositions" }] : /* istanbul ignore next */ []));
    currentTurnPlayerId = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "currentTurnPlayerId" }] : /* istanbul ignore next */ []));
    currentAnswerPlayerId = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "currentAnswerPlayerId" }] : /* istanbul ignore next */ []));
    currentRound = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "currentRound" }] : /* istanbul ignore next */ []));
    timer = signal(30, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "timer" }] : /* istanbul ignore next */ []));
    timerTotal = signal(30, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "timerTotal" }] : /* istanbul ignore next */ []));
    myTacticalTiles = signal({ zwap: 1, bezzerwizzer: 2 }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "myTacticalTiles" }] : /* istanbul ignore next */ []));
    lastAnswerResult = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "lastAnswerResult" }] : /* istanbul ignore next */ []));
    turnSequence = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "turnSequence" }] : /* istanbul ignore next */ []));
    bezzerwizzerResults = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "bezzerwizzerResults" }] : /* istanbul ignore next */ []));
    preparationSkipVotes = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "preparationSkipVotes" }] : /* istanbul ignore next */ []));
    reboundQueue = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "reboundQueue" }] : /* istanbul ignore next */ []));
    bezzerwizzerPlayers = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "bezzerwizzerPlayers" }] : /* istanbul ignore next */ []));
    bezzerwizzerAnswered = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "bezzerwizzerAnswered" }] : /* istanbul ignore next */ []));
    // Computed State
    isMyTurn = computed(() => this.currentTurnPlayerId() === this.authService.playerId(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isMyTurn" }] : /* istanbul ignore next */ []));
    isMyAnswer = computed(() => this.currentAnswerPlayerId() === this.authService.playerId(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isMyAnswer" }] : /* istanbul ignore next */ []));
    canSubmitPreparedBezzerwizzer = computed(() => this.gamePhase() === 'ANSWERING' &&
        !this.isMyAnswer() &&
        this.reboundQueue().includes(this.authService.playerId()), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "canSubmitPreparedBezzerwizzer" }] : /* istanbul ignore next */ []));
    isHost = computed(() => this.hostPlayerId() === this.authService.playerId(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isHost" }] : /* istanbul ignore next */ []));
    sortedPlayers = computed(() => {
        return [...this.players()].sort((a, b) => b.boardPosition - a.boardPosition);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "sortedPlayers" }] : /* istanbul ignore next */ []));
    canPlayBezzerwizzer = computed(() => {
        return this.myTacticalTiles().bezzerwizzer > 0 &&
            !this.isMyTurn() &&
            (this.gamePhase() === 'PLAYING' ||
                (this.gamePhase() === 'ANSWERING' && this.currentAnswerPlayerId() === this.currentTurnPlayerId()));
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "canPlayBezzerwizzer" }] : /* istanbul ignore next */ []));
    canPlayZwap = computed(() => {
        return this.myTacticalTiles().zwap > 0 &&
            this.isMyTurn() &&
            this.gamePhase() === 'PLAYING';
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "canPlayZwap" }] : /* istanbul ignore next */ []));
    timerInterval;
    roomSubscription = new Subscription();
    wsService = inject(WebsocketService);
    connectToRoom(roomCode) {
        console.log('GameStateService.connectToRoom called with code:', roomCode);
        this.roomSubscription.unsubscribe();
        this.roomSubscription = new Subscription();
        console.log('Calling wsService.subscribeToRoom...');
        this.roomSubscription.add(this.wsService.subscribeToRoom(roomCode).subscribe({
            next: (event) => {
                console.log('Received event from room subscription:', event);
                this.handleGameEvent(event);
            },
            error: (err) => console.error('Error in room subscription:', err),
            complete: () => console.log('Room subscription completed')
        }));
        this.roomSubscription.add(this.wsService.subscribeToGame(roomCode).subscribe({
            next: (event) => this.handleGameEvent(event),
            error: (err) => console.error('Error in game subscription:', err)
        }));
        console.log('Subscribed to room:', roomCode, this.roomSubscription);
    }
    handleGameEvent(event) {
        console.log('Game Event Received:', event.type, event.payload);
        switch (event.type) {
            case 'PLAYER_JOINED':
            case 'ROOM_STATE':
                this.updateRoom(event.payload);
                if (this.gamePhase() === 'HOME') {
                    this.gamePhase.set('LOBBY');
                }
                break;
            case 'GAME_STATE':
                this.updateFromGameState(event.payload);
                break;
            case 'TURN_READY': {
                const turn = event.payload;
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
                const turn = event.payload;
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
                const answering = event.payload;
                this.currentAnswerPlayerId.set(answering.playerId);
                this.gamePhase.set('ANSWERING');
                this.startTimer(answering.timeLimit ?? 30);
                this.timerTotal.set(answering.timeLimit ?? 30);
                break;
            }
            case 'BEZZERWIZZER_ANSWERED':
                break;
            case 'ANSWER_RESULT': {
                const result = event.payload;
                this.stopTimer();
                // Rebound results can arrive immediately after a failed answer. Keep
                // them in the board state, but do not restart the main result overlay.
                if (result.playerId === this.currentTurnPlayerId()) {
                    this.lastAnswerResult.set(result);
                }
                this.players.update(players => players.map(player => player.playerId === result.playerId
                    ? { ...player, boardPosition: Math.max(0, player.boardPosition + result.points) }
                    : player));
                this.gamePhase.set('TURN_RESULT');
                break;
            }
            case 'BEZZERWIZZER_RESULT': {
                const result = event.payload;
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
    updateRoom(room) {
        this.roomCode.set(room.roomCode);
        const playersArray = room.players
            ? (Array.isArray(room.players) ? room.players : Object.values(room.players))
            : [];
        this.players.set(playersArray);
        this.hostPlayerId.set(room.hostPlayerId || '');
    }
    updateFromGameState(state) {
        this.roomCode.set(state.roomCode);
        this.gamePhase.set(state.phase);
        if (state.players) {
            let playersArray = [];
            if (Array.isArray(state.players)) {
                playersArray = state.players;
            }
            else {
                playersArray = Object.values(state.players);
            }
            this.players.set(playersArray.map((p) => ({
                playerId: p.playerId,
                username: p.username,
                color: p.color,
                boardPosition: p.boardPosition,
                ready: p.ready,
                roundScore: p.roundScore,
                categorySlots: p.categorySlots ?? []
            })));
            const me = playersArray.find((p) => p.playerId === this.authService.playerId());
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
        this.reboundQueue.set(state.reboundQueue ?? []);
        this.bezzerwizzerPlayers.set(state.bezzerwizzerPlayers ?? []);
        this.bezzerwizzerAnswered.set(state.bezzerwizzerAnswered ?? []);
        this.currentRound.set(state.round);
        this.preparationSkipVotes.set(state.preparationSkipVotes ?? []);
        if (state.timer && state.timer > 0) {
            this.startTimer(state.timer);
        }
    }
    startTimer(seconds) {
        this.stopTimer();
        this.timerTotal.set(30);
        this.timer.set(seconds);
        this.timerInterval = setInterval(() => {
            const current = this.timer();
            if (current > 0) {
                this.timer.set(current - 1);
            }
            else {
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
    updateMyCategories(slots) {
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
        this.stopTimer();
    }
    static ɵfac = function GameStateService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GameStateService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GameStateService, factory: GameStateService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GameStateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
