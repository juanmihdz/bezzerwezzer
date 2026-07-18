import { Component, inject, computed, effect } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameStateService } from '../../core/services/game-state.service';
import { AuthService } from '../../core/services/auth.service';
import { WebsocketService } from '../../core/services/websocket.service';
import { PlayerAvatarComponent } from '../../shared/components/player-avatar/player-avatar.component';
import { SnackbarService } from '../../core/services/snackbar.service';
import { RulesHelpComponent } from '../../shared/components/rules-help/rules-help.component';
import * as i0 from "@angular/core";
const _c0 = () => [10, 15, 20, 25, 30];
const _forTrack0 = ($index, $item) => $item.playerId;
function LobbyComponent_For_36_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function LobbyComponent_For_36_Template_button_click_0_listener() { const position_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setWinningPosition(position_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const position_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-selected", ctx_r2.winningPosition() === position_r2);
    i0.ɵɵproperty("disabled", !ctx_r2.canManageLobby);
    i0.ɵɵattribute("aria-pressed", ctx_r2.winningPosition() === position_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", position_r2, " ");
} }
function LobbyComponent_For_39_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 32);
    i0.ɵɵelement(2, "path", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Anfitri\u00F3n ");
    i0.ɵɵelementEnd();
} }
function LobbyComponent_For_39_Conditional_10_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 32);
    i0.ɵɵelement(1, "path", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "No listo");
    i0.ɵɵelementEnd();
} }
function LobbyComponent_For_39_Conditional_10_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 32);
    i0.ɵɵelement(1, "path", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Estoy listo");
    i0.ɵɵelementEnd();
} }
function LobbyComponent_For_39_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 34);
    i0.ɵɵlistener("click", function LobbyComponent_For_39_Conditional_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const player_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setReady(!player_r5.ready)); });
    i0.ɵɵconditionalCreate(1, LobbyComponent_For_39_Conditional_10_Conditional_1_Template, 4, 0)(2, LobbyComponent_For_39_Conditional_10_Conditional_2_Template, 4, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const player_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("ready-button--active", player_r5.ready);
    i0.ɵɵattribute("aria-pressed", player_r5.ready)("aria-label", player_r5.ready ? "Marcar como no listo" : "Marcar como listo");
    i0.ɵɵadvance();
    i0.ɵɵconditional(player_r5.ready ? 1 : 2);
} }
function LobbyComponent_For_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 25);
    i0.ɵɵelement(1, "app-player-avatar", 26);
    i0.ɵɵelementStart(2, "div", 27)(3, "div", 28)(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, LobbyComponent_For_39_Conditional_6_Template, 4, 0, "span", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 30);
    i0.ɵɵelement(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(10, LobbyComponent_For_39_Conditional_10_Template, 3, 5, "button", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const player_r5 = ctx.$implicit;
    const ɵ$index_68_r6 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("animation-delay", ɵ$index_68_r6 * 80 + "ms");
    i0.ɵɵclassProp("player-card--ready", player_r5.ready);
    i0.ɵɵadvance();
    i0.ɵɵproperty("username", player_r5.username)("color", player_r5.color)("showName", false)("showCrown", false)("isActive", player_r5.ready);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(player_r5.username);
    i0.ɵɵadvance();
    i0.ɵɵconditional(player_r5.playerId === ctx_r2.hostId() ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("player-status--ready", player_r5.ready);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", player_r5.ready ? "Listo para jugar" : "Prepar\u00E1ndose", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.isCurrentPlayer(player_r5) ? 10 : -1);
} }
function LobbyComponent_For_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 20)(1, "div", 37);
    i0.ɵɵtext(2, "?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 27)(4, "h2");
    i0.ɵɵtext(5, "Plaza disponible");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Esperando jugador\u2026");
    i0.ɵɵelementEnd()()();
} }
function LobbyComponent_Conditional_43_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Comenzar partida");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 32);
    i0.ɵɵelement(3, "path", 39);
    i0.ɵɵelementEnd();
} }
function LobbyComponent_Conditional_43_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("Esperando a todos \u00B7 ", ctx_r2.readyPlayers(), "/", ctx_r2.players().length);
} }
function LobbyComponent_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function LobbyComponent_Conditional_43_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.startGame()); });
    i0.ɵɵconditionalCreate(1, LobbyComponent_Conditional_43_Conditional_1_Template, 4, 0)(2, LobbyComponent_Conditional_43_Conditional_2_Template, 2, 2, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r2.canStartGame());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.canStartGame() ? 1 : 2);
} }
function LobbyComponent_Conditional_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelement(1, "span", 40);
    i0.ɵɵtext(2, " El anfitri\u00F3n comenzar\u00E1 cuando todos est\u00E9n listos ");
    i0.ɵɵelementEnd();
} }
export class LobbyComponent {
    gameState = inject(GameStateService);
    authService = inject(AuthService);
    wsService = inject(WebsocketService);
    snackbarService = inject(SnackbarService);
    router = inject(Router);
    route = inject(ActivatedRoute);
    roomCode = this.gameState.roomCode;
    players = this.gameState.players;
    hostId = this.gameState.hostPlayerId;
    myId = this.authService.playerId;
    myUsername = this.authService.username;
    isHost = this.gameState.isHost;
    winningPosition = this.gameState.winningPosition;
    emptySlots = computed(() => {
        const count = Math.max(0, 4 - this.players().length);
        return Array(count).fill(0);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "emptySlots" }] : /* istanbul ignore next */ []));
    canStartGame = computed(() => {
        return this.players().length >= 2 && this.players().every((p) => p.ready);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "canStartGame" }] : /* istanbul ignore next */ []));
    readyPlayers = computed(() => this.players().filter((player) => player.ready).length, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "readyPlayers" }] : /* istanbul ignore next */ []));
    isCurrentPlayer(player) {
        return player.playerId === this.myId() || player.username === this.myUsername();
    }
    get canManageLobby() {
        return this.isHost() || this.players().some(player => player.playerId === this.hostId() && this.isCurrentPlayer(player));
    }
    constructor() {
        void this.joinRoomFromUrl();
        effect(() => {
            const phase = this.gameState.gamePhase();
            const code = this.roomCode();
            if (code && phase !== 'HOME' && phase !== 'LOBBY') {
                this.router.navigate(['/game', code]);
            }
        });
    }
    async joinRoomFromUrl() {
        const code = this.route.snapshot.paramMap.get('code')?.trim().toUpperCase();
        if (!code || !/^[A-Z0-9]{6}$/.test(code)) {
            this.snackbarService.show('El código de sala no es válido', 'warning');
            await this.router.navigate(['/']);
            return;
        }
        if (!this.authService.isAuthenticated()) {
            this.snackbarService.show('Introduce tu nombre para unirte a la sala', 'info');
            await this.router.navigate(['/'], { queryParams: { room: code } });
            return;
        }
        try {
            await this.wsService.connect(this.authService.token());
            this.gameState.connectToRoom(code);
            this.wsService.send(`/app/room/${code}/join`, {});
        }
        catch (error) {
            console.error('Unable to join room from URL', error);
            this.snackbarService.show('No se pudo conectar con la sala', 'error');
            await this.router.navigate(['/'], { queryParams: { room: code } });
        }
    }
    copyCode() {
        navigator.clipboard.writeText(this.roomCode());
        this.snackbarService.show('Código copiado al portapapeles', 'info');
    }
    setReady(ready) {
        this.wsService.send(`/app/room/${this.roomCode()}/ready`, { ready });
    }
    startGame() {
        if (this.canManageLobby && this.canStartGame()) {
            this.wsService.send(`/app/game/${this.roomCode()}/start`, {});
        }
    }
    setWinningPosition(position) {
        if (!this.canManageLobby || position === this.winningPosition())
            return;
        this.wsService.send(`/app/room/${this.roomCode()}/winning-position`, { winningPosition: position });
    }
    static ɵfac = function LobbyComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LobbyComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LobbyComponent, selectors: [["app-lobby"]], decls: 45, vars: 8, consts: [[1, "lobby-shell"], [1, "lobby-header"], [1, "lobby-help"], [1, "lobby-kicker"], ["type", "button", "title", "Copiar c\u00F3digo de sala", 1, "room-code", 3, "click"], [1, "room-code__label"], ["aria-hidden", "true", 1, "room-code__copy"], ["viewBox", "0 0 24 24"], ["x", "8", "y", "8", "width", "11", "height", "11", "rx", "2"], ["d", "M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"], [1, "lobby-subtitle"], ["aria-live", "polite", 1, "lobby-progress"], ["aria-hidden", "true", 1, "lobby-progress__track"], ["aria-labelledby", "round-settings-title", "aria-live", "polite", 1, "round-settings"], [1, "round-settings__eyebrow"], ["id", "round-settings-title"], ["role", "group", "aria-label", "Casilla final", 1, "round-settings__choices"], ["type", "button", 3, "is-selected", "disabled"], [1, "players-grid"], [1, "player-card", "animate-slide-up", 3, "player-card--ready", "animation-delay"], [1, "player-card", "player-card--empty"], [1, "lobby-actions", "animate-slide-up"], ["type", "button", 1, "btn-primary", "start-button", 3, "disabled"], [1, "host-waiting"], ["type", "button", 3, "click", "disabled"], [1, "player-card", "animate-slide-up"], ["size", "lg", 3, "username", "color", "showName", "showCrown", "isActive"], [1, "player-card__body"], [1, "player-card__name"], [1, "host-badge"], [1, "player-status"], ["type", "button", 1, "ready-button", 3, "ready-button--active"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "m3 7 4.5 4L12 4l4.5 7L21 7l-1.5 10h-15L3 7Z"], ["type", "button", 1, "ready-button", 3, "click"], ["d", "M6 6l12 12M18 6 6 18"], ["d", "m5 12.5 4.2 4L19 7"], [1, "empty-avatar"], ["type", "button", 1, "btn-primary", "start-button", 3, "click", "disabled"], ["d", "m9 18 6-6-6-6"], [1, "host-waiting__spinner"]], template: function LobbyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "div", 2);
            i0.ɵɵelement(3, "app-rules-help");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div")(5, "span", 3);
            i0.ɵɵtext(6, "Preparando partida");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "h1");
            i0.ɵɵtext(8, "Sala de espera");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "button", 4);
            i0.ɵɵlistener("click", function LobbyComponent_Template_button_click_9_listener() { return ctx.copyCode(); });
            i0.ɵɵelementStart(10, "span", 5);
            i0.ɵɵtext(11, "C\u00F3digo de sala");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "strong");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(15, "svg", 7);
            i0.ɵɵelement(16, "rect", 8)(17, "path", 9);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(18, "p", 10);
            i0.ɵɵtext(19, "Comparte el c\u00F3digo y espera a que cada jugador confirme que est\u00E1 listo.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 11)(21, "div")(22, "span");
            i0.ɵɵtext(23, "Jugadores preparados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "strong");
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "div", 12);
            i0.ɵɵelement(27, "span");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "section", 13)(29, "div")(30, "span", 14);
            i0.ɵɵtext(31, "Meta de la partida");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "h2", 15);
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 16);
            i0.ɵɵrepeaterCreate(35, LobbyComponent_For_36_Template, 2, 5, "button", 17, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div", 18);
            i0.ɵɵrepeaterCreate(38, LobbyComponent_For_39_Template, 11, 15, "article", 19, _forTrack0);
            i0.ɵɵrepeaterCreate(40, LobbyComponent_For_41_Template, 8, 0, "article", 20, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "footer", 21);
            i0.ɵɵconditionalCreate(43, LobbyComponent_Conditional_43_Template, 3, 2, "button", 22)(44, LobbyComponent_Conditional_44_Template, 3, 0, "div", 23);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate(ctx.roomCode());
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate2("", ctx.readyPlayers(), "/", ctx.players().length);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("width", ctx.players().length ? ctx.readyPlayers() / ctx.players().length * 100 : 0, "%");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("Casilla ", ctx.winningPosition());
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(i0.ɵɵpureFunction0(7, _c0));
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.players());
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.emptySlots());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.canManageLobby ? 43 : 44);
        } }, dependencies: [PlayerAvatarComponent, RulesHelpComponent], styles: ["[_nghost-%COMP%] { display: flex; width: 100%; min-height: 0; flex: 1; overflow: hidden; }\n\n.lobby-shell[_ngcontent-%COMP%] {\n  width: min(68rem, 100%);\n  height: 100%;\n  max-height: 100%;\n  margin: auto;\n  padding: clamp(.5rem, 2vh, 1.5rem) clamp(.35rem, 2vw, 1.25rem);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_lobby-fade-in .45s ease-out both;\n}\n\n@keyframes _ngcontent-%COMP%_lobby-fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.lobby-header[_ngcontent-%COMP%] { position: relative; z-index: 30; text-align: center; }\n.lobby-header[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_lobby-header-fade-in .55s ease-out both; }\n.lobby-help[_ngcontent-%COMP%] { position: absolute; z-index: 31; top: 0; right: 0; }\n.lobby-kicker[_ngcontent-%COMP%] { color: var(--color-primary-light); font-size: .72rem; font-weight: 900; letter-spacing: .18em; text-transform: uppercase; }\n.lobby-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin: .35rem 0 1.25rem; font-size: clamp(2rem, 5vw, 3.75rem); font-weight: 900; line-height: 1; text-transform: uppercase; }\n.lobby-subtitle[_ngcontent-%COMP%] { max-width: 38rem; margin: .9rem auto 0; color: var(--color-text-muted); font-size: clamp(.9rem, 2vw, 1.05rem); line-height: 1.5; }\n\n@keyframes _ngcontent-%COMP%_lobby-header-fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.room-code[_ngcontent-%COMP%] {\n  display: inline-grid; grid-template-columns: 1fr auto; align-items: center; column-gap: 1rem;\n  min-width: min(100%, 24rem); padding: .8rem 1rem .85rem 1.25rem; color: white;\n  border: 0.0625rem solid rgb(255 255 255 / .12); border-radius: 1.25rem;\n  background: linear-gradient(135deg, rgb(24 20 42 / .92), rgb(11 9 22 / .9));\n  box-shadow: 0 0.875rem 2.1875rem rgb(0 0 0 / .26), inset 0 0.0625rem 0 rgb(255 255 255 / .07); cursor: pointer;\n  transition: border-color 180ms ease, transform 180ms ease;\n}\n.room-code[_ngcontent-%COMP%]:hover { border-color: color-mix(in srgb, var(--color-primary-light) 55%, transparent); transform: translateY(-0.125rem); }\n.room-code__label[_ngcontent-%COMP%] { grid-column: 1; color: var(--color-text-muted); font-size: .65rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }\n.room-code[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { grid-column: 1; font-family: var(--font-display); font-size: clamp(2rem, 6vw, 3.35rem); letter-spacing: .16em; line-height: 1.05; background: linear-gradient(90deg, var(--color-primary-light), white, var(--color-accent)); color: transparent; background-clip: text; }\n.room-code__copy[_ngcontent-%COMP%] { grid-column: 2; grid-row: 1 / 3; display: grid; width: 2.75rem; height: 2.75rem; place-items: center; color: var(--color-primary-light); border-radius: .8rem; background: rgb(255 255 255 / .06); }\n.room-code[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: 1.3rem; fill: none; stroke: currentColor; stroke-width: 1.8; }\n\n.lobby-progress[_ngcontent-%COMP%] { width: min(34rem, 100%); margin: 1.75rem auto 1.4rem; }\n.lobby-progress[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child { display: flex; justify-content: space-between; margin-bottom: .5rem; color: var(--color-text-muted); font-size: .78rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }\n.lobby-progress[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: white; }\n.lobby-progress__track[_ngcontent-%COMP%] { height: .4rem; overflow: hidden; border-radius: 1rem; background: rgb(255 255 255 / .07); }\n.lobby-progress__track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--color-primary), var(--color-accent)); transition: width 240ms ease; }\n\n.round-settings[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 1rem; width: min(34rem, 100%); margin: 0 auto 1.4rem; padding: .9rem 1rem; border: .0625rem solid rgb(183 141 255 / .24); border-radius: 1rem; background: rgb(91 52 156 / .12); }\n.round-settings__eyebrow[_ngcontent-%COMP%] { display: block; color: var(--color-text-muted); font-size: .62rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }\n.round-settings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin-top: .15rem; color: white; font-size: 1rem; font-weight: 850; }\n.round-settings__choices[_ngcontent-%COMP%] { display: flex; gap: .5rem; }\n.round-settings__choices[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { display: grid; width: 3rem; height: 2.75rem; place-items: center; color: var(--color-text-muted); border: .0625rem solid rgb(255 255 255 / .12); border-radius: .75rem; background: rgb(0 0 0 / .2); cursor: pointer; font-size: .95rem; font-weight: 850; transition: transform 160ms ease, border-color 160ms ease, background 160ms ease; }\n.round-settings__choices[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover { transform: translateY(-.1rem); border-color: var(--color-primary-light); color: white; }\n.round-settings__choices[_ngcontent-%COMP%]   button.is-selected[_ngcontent-%COMP%] { color: white; border-color: var(--color-primary-light); background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); box-shadow: 0 .3rem .8rem rgb(123 44 255 / .28); }\n.round-settings__choices[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled { cursor: not-allowed; opacity: .55; }\n\n.players-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem 1.25rem; width: 100%; }\n.player-card[_ngcontent-%COMP%] { display: flex; min-width: 0; min-height: 7rem; align-items: center; gap: 1rem; padding: 1rem 1.1rem; border: 0.0625rem solid rgb(255 255 255 / .09); border-radius: 1.4rem; background: linear-gradient(145deg, rgb(27 23 45 / .78), rgb(12 10 23 / .72)); box-shadow: 0 0.875rem 2.125rem rgb(0 0 0 / .22), inset 0 0.0625rem 0 rgb(255 255 255 / .05); }\n.player-card--ready[_ngcontent-%COMP%] { border-color: color-mix(in srgb, var(--color-correct) 36%, transparent); box-shadow: 0 0.875rem 2.125rem rgb(0 0 0 / .22), 0 0 1.375rem color-mix(in srgb, var(--color-correct) 10%, transparent); }\n.player-card__body[_ngcontent-%COMP%] { min-width: 0; flex: 1; }\n.player-card__name[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; align-items: center; gap: .4rem .65rem; }\n.player-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { overflow: hidden; color: white; font-size: clamp(1.2rem, 3vw, 1.7rem); font-weight: 800; line-height: 1.15; text-overflow: ellipsis; white-space: nowrap; }\n.host-badge[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: .3rem; padding: .25rem .45rem; color: var(--color-accent); border-radius: .55rem; background: color-mix(in srgb, var(--color-accent) 10%, transparent); font-size: .62rem; font-weight: 850; letter-spacing: .07em; text-transform: uppercase; }\n.host-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: .8rem; height: .8rem; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linejoin: round; }\n.player-status[_ngcontent-%COMP%] { display: flex; align-items: center; gap: .5rem; margin-top: .55rem; color: var(--color-warning); font-size: .72rem; font-weight: 850; letter-spacing: .08em; text-transform: uppercase; }\n.player-status[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { width: .55rem; height: .55rem; border-radius: 50%; background: currentColor; box-shadow: 0 0 0.625rem currentColor; }\n.player-status--ready[_ngcontent-%COMP%] { color: var(--color-correct); }\n\n.ready-button[_ngcontent-%COMP%] { display: grid; flex: 0 0 auto; min-width: 5.5rem; min-height: 4.6rem; place-items: center; gap: .15rem; padding: .55rem .7rem; color: white; border: 0.0625rem solid color-mix(in srgb, var(--color-correct) 40%, transparent); border-radius: 1rem; background: color-mix(in srgb, var(--color-correct) 72%, #07140d); box-shadow: 0 0.625rem 1.5rem color-mix(in srgb, var(--color-correct) 17%, transparent); cursor: pointer; transition: transform 180ms ease, background 180ms ease; }\n.ready-button[_ngcontent-%COMP%]:hover { transform: translateY(-0.125rem); }\n.ready-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: 1.45rem; height: 1.45rem; fill: none; stroke: currentColor; stroke-width: 2.4; stroke-linecap: round; }\n.ready-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: .62rem; font-weight: 850; letter-spacing: .05em; text-transform: uppercase; }\n.ready-button--active[_ngcontent-%COMP%] { color: var(--color-text-muted); border-color: rgb(255 255 255 / .09); background: rgb(255 255 255 / .045); box-shadow: none; }\n\n.player-card--empty[_ngcontent-%COMP%] { opacity: .45; border-style: dashed; background: rgb(5 4 12 / .22); box-shadow: none; }\n.empty-avatar[_ngcontent-%COMP%] { display: grid; width: 4.6rem; height: 4.6rem; flex: 0 0 4.6rem; place-items: center; color: var(--color-text-muted); border: 0.125rem dashed rgb(255 255 255 / .18); border-radius: 50%; font-size: 1.8rem; font-weight: 800; }\n.player-card--empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin-top: .4rem; color: var(--color-text-muted); font-size: .82rem; }\n\n.lobby-actions[_ngcontent-%COMP%] { display: flex; justify-content: center; margin-top: 1.4rem; }\n.start-button[_ngcontent-%COMP%] { width: min(31rem, 100%); min-height: 3.7rem; gap: .65rem; border-radius: 1rem; font-size: .9rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }\n.start-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: 1.2rem; height: 1.2rem; fill: none; stroke: currentColor; stroke-width: 2.2; }\n.host-waiting[_ngcontent-%COMP%] { display: flex; align-items: center; gap: .75rem; padding: .85rem 1.15rem; color: var(--color-text-muted); border: 0.0625rem solid rgb(255 255 255 / .07); border-radius: 1rem; background: rgb(0 0 0 / .2); font-size: .85rem; font-weight: 700; text-align: center; }\n.host-waiting__spinner[_ngcontent-%COMP%] { width: .75rem; height: .75rem; flex: 0 0 auto; border: 0.125rem solid rgb(255 255 255 / .2); border-top-color: var(--color-primary-light); border-radius: 50%; animation: _ngcontent-%COMP%_spin 900ms linear infinite; }\n@keyframes _ngcontent-%COMP%_spin { to { transform: rotate(360deg); } }\n\n@media (max-width: 45rem) {\n  .lobby-shell[_ngcontent-%COMP%] { padding-top: 1.25rem; padding-bottom: 1.25rem; }\n  .players-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: .8rem; }\n  .player-card[_ngcontent-%COMP%] { min-height: 6.25rem; padding: .85rem; }\n  .lobby-progress[_ngcontent-%COMP%] { margin-top: 1.25rem; }\n  .round-settings[_ngcontent-%COMP%] { margin-bottom: 1rem; }\n}\n\n@media (max-width: 26.25rem) {\n  .lobby-help[_ngcontent-%COMP%] { position: static; display: flex; justify-content: center; margin-bottom: .8rem; }\n  .room-code[_ngcontent-%COMP%] { column-gap: .55rem; padding-left: .9rem; }\n  .room-code[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 1.8rem; letter-spacing: .1em; }\n  .room-code__copy[_ngcontent-%COMP%] { width: 2.35rem; height: 2.35rem; }\n  .player-card[_ngcontent-%COMP%] { gap: .7rem; }\n  .ready-button[_ngcontent-%COMP%] { min-width: 4.6rem; min-height: 4.25rem; padding-inline: .45rem; }\n  .empty-avatar[_ngcontent-%COMP%] { width: 4rem; height: 4rem; flex-basis: 4rem; }\n}\n\n@media (prefers-reduced-motion: reduce) { .host-waiting__spinner[_ngcontent-%COMP%] { animation: none; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LobbyComponent, [{
        type: Component,
        args: [{ selector: 'app-lobby', standalone: true, imports: [PlayerAvatarComponent, RulesHelpComponent], template: "<section class=\"lobby-shell\">\n  <header class=\"lobby-header\">\n    <div class=\"lobby-help\"><app-rules-help></app-rules-help></div>\n    <div>\n      <span class=\"lobby-kicker\">Preparando partida</span>\n      <h1>Sala de espera</h1>\n    </div>\n\n    <button type=\"button\" class=\"room-code\" (click)=\"copyCode()\" title=\"Copiar c\u00F3digo de sala\">\n      <span class=\"room-code__label\">C\u00F3digo de sala</span>\n      <strong>{{ roomCode() }}</strong>\n      <span class=\"room-code__copy\" aria-hidden=\"true\">\n        <svg viewBox=\"0 0 24 24\"><rect x=\"8\" y=\"8\" width=\"11\" height=\"11\" rx=\"2\"/><path d=\"M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2\"/></svg>\n      </span>\n    </button>\n\n    <p class=\"lobby-subtitle\">Comparte el c\u00F3digo y espera a que cada jugador confirme que est\u00E1 listo.</p>\n  </header>\n\n  <div class=\"lobby-progress\" aria-live=\"polite\">\n    <div>\n      <span>Jugadores preparados</span>\n      <strong>{{ readyPlayers() }}/{{ players().length }}</strong>\n    </div>\n    <div class=\"lobby-progress__track\" aria-hidden=\"true\">\n      <span [style.width.%]=\"players().length ? (readyPlayers() / players().length) * 100 : 0\"></span>\n    </div>\n  </div>\n\n  <section class=\"round-settings\" aria-labelledby=\"round-settings-title\" aria-live=\"polite\">\n    <div>\n      <span class=\"round-settings__eyebrow\">Meta de la partida</span>\n      <h2 id=\"round-settings-title\">Casilla {{ winningPosition() }}</h2>\n    </div>\n    <div class=\"round-settings__choices\" role=\"group\" aria-label=\"Casilla final\">\n      @for (position of [10, 15, 20, 25, 30]; track position) {\n        <button type=\"button\" [class.is-selected]=\"winningPosition() === position\" (click)=\"setWinningPosition(position)\" [disabled]=\"!canManageLobby\" [attr.aria-pressed]=\"winningPosition() === position\">\n          {{ position }}\n        </button>\n      }\n    </div>\n  </section>\n\n  <div class=\"players-grid\">\n    @for (player of players(); track player.playerId; let i = $index) {\n      <article class=\"player-card animate-slide-up\" [class.player-card--ready]=\"player.ready\" [style.animation-delay]=\"(i * 80) + 'ms'\">\n        <app-player-avatar\n          [username]=\"player.username\"\n          [color]=\"player.color\"\n          size=\"lg\"\n          [showName]=\"false\"\n          [showCrown]=\"false\"\n          [isActive]=\"player.ready\">\n        </app-player-avatar>\n\n        <div class=\"player-card__body\">\n          <div class=\"player-card__name\">\n            <h2>{{ player.username }}</h2>\n            @if (player.playerId === hostId()) {\n              <span class=\"host-badge\">\n                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m3 7 4.5 4L12 4l4.5 7L21 7l-1.5 10h-15L3 7Z\"/></svg>\n                Anfitri\u00F3n\n              </span>\n            }\n          </div>\n          <div class=\"player-status\" [class.player-status--ready]=\"player.ready\">\n            <span></span>{{ player.ready ? 'Listo para jugar' : 'Prepar\u00E1ndose' }}\n          </div>\n        </div>\n\n        @if (isCurrentPlayer(player)) {\n          <button\n            type=\"button\"\n            class=\"ready-button\"\n            [class.ready-button--active]=\"player.ready\"\n            (click)=\"setReady(!player.ready)\"\n            [attr.aria-pressed]=\"player.ready\"\n            [attr.aria-label]=\"player.ready ? 'Marcar como no listo' : 'Marcar como listo'\">\n            @if (player.ready) {\n              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6 6 18\"/></svg>\n              <span>No listo</span>\n            } @else {\n              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12.5 4.2 4L19 7\"/></svg>\n              <span>Estoy listo</span>\n            }\n          </button>\n        }\n      </article>\n    }\n\n    @for (slot of emptySlots(); track $index) {\n      <article class=\"player-card player-card--empty\">\n        <div class=\"empty-avatar\">?</div>\n        <div class=\"player-card__body\">\n          <h2>Plaza disponible</h2>\n          <p>Esperando jugador\u2026</p>\n        </div>\n      </article>\n    }\n  </div>\n\n  <footer class=\"lobby-actions animate-slide-up\">\n    @if (canManageLobby) {\n      <button type=\"button\" class=\"btn-primary start-button\" (click)=\"startGame()\" [disabled]=\"!canStartGame()\">\n        @if (canStartGame()) {\n          <span>Comenzar partida</span>\n          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m9 18 6-6-6-6\"/></svg>\n        } @else {\n          <span>Esperando a todos \u00B7 {{ readyPlayers() }}/{{ players().length }}</span>\n        }\n      </button>\n    } @else {\n      <div class=\"host-waiting\">\n        <span class=\"host-waiting__spinner\"></span>\n        El anfitri\u00F3n comenzar\u00E1 cuando todos est\u00E9n listos\n      </div>\n    }\n  </footer>\n</section>\n", styles: [":host { display: flex; width: 100%; min-height: 0; flex: 1; overflow: hidden; }\n\n.lobby-shell {\n  width: min(68rem, 100%);\n  height: 100%;\n  max-height: 100%;\n  margin: auto;\n  padding: clamp(.5rem, 2vh, 1.5rem) clamp(.35rem, 2vw, 1.25rem);\n  overflow: hidden;\n  animation: lobby-fade-in .45s ease-out both;\n}\n\n@keyframes lobby-fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.lobby-header { position: relative; z-index: 30; text-align: center; }\n.lobby-header { animation: lobby-header-fade-in .55s ease-out both; }\n.lobby-help { position: absolute; z-index: 31; top: 0; right: 0; }\n.lobby-kicker { color: var(--color-primary-light); font-size: .72rem; font-weight: 900; letter-spacing: .18em; text-transform: uppercase; }\n.lobby-header h1 { margin: .35rem 0 1.25rem; font-size: clamp(2rem, 5vw, 3.75rem); font-weight: 900; line-height: 1; text-transform: uppercase; }\n.lobby-subtitle { max-width: 38rem; margin: .9rem auto 0; color: var(--color-text-muted); font-size: clamp(.9rem, 2vw, 1.05rem); line-height: 1.5; }\n\n@keyframes lobby-header-fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.room-code {\n  display: inline-grid; grid-template-columns: 1fr auto; align-items: center; column-gap: 1rem;\n  min-width: min(100%, 24rem); padding: .8rem 1rem .85rem 1.25rem; color: white;\n  border: 0.0625rem solid rgb(255 255 255 / .12); border-radius: 1.25rem;\n  background: linear-gradient(135deg, rgb(24 20 42 / .92), rgb(11 9 22 / .9));\n  box-shadow: 0 0.875rem 2.1875rem rgb(0 0 0 / .26), inset 0 0.0625rem 0 rgb(255 255 255 / .07); cursor: pointer;\n  transition: border-color 180ms ease, transform 180ms ease;\n}\n.room-code:hover { border-color: color-mix(in srgb, var(--color-primary-light) 55%, transparent); transform: translateY(-0.125rem); }\n.room-code__label { grid-column: 1; color: var(--color-text-muted); font-size: .65rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }\n.room-code strong { grid-column: 1; font-family: var(--font-display); font-size: clamp(2rem, 6vw, 3.35rem); letter-spacing: .16em; line-height: 1.05; background: linear-gradient(90deg, var(--color-primary-light), white, var(--color-accent)); color: transparent; background-clip: text; }\n.room-code__copy { grid-column: 2; grid-row: 1 / 3; display: grid; width: 2.75rem; height: 2.75rem; place-items: center; color: var(--color-primary-light); border-radius: .8rem; background: rgb(255 255 255 / .06); }\n.room-code svg { width: 1.3rem; fill: none; stroke: currentColor; stroke-width: 1.8; }\n\n.lobby-progress { width: min(34rem, 100%); margin: 1.75rem auto 1.4rem; }\n.lobby-progress > div:first-child { display: flex; justify-content: space-between; margin-bottom: .5rem; color: var(--color-text-muted); font-size: .78rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }\n.lobby-progress strong { color: white; }\n.lobby-progress__track { height: .4rem; overflow: hidden; border-radius: 1rem; background: rgb(255 255 255 / .07); }\n.lobby-progress__track span { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--color-primary), var(--color-accent)); transition: width 240ms ease; }\n\n.round-settings { display: flex; align-items: center; justify-content: space-between; gap: 1rem; width: min(34rem, 100%); margin: 0 auto 1.4rem; padding: .9rem 1rem; border: .0625rem solid rgb(183 141 255 / .24); border-radius: 1rem; background: rgb(91 52 156 / .12); }\n.round-settings__eyebrow { display: block; color: var(--color-text-muted); font-size: .62rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }\n.round-settings h2 { margin-top: .15rem; color: white; font-size: 1rem; font-weight: 850; }\n.round-settings__choices { display: flex; gap: .5rem; }\n.round-settings__choices button { display: grid; width: 3rem; height: 2.75rem; place-items: center; color: var(--color-text-muted); border: .0625rem solid rgb(255 255 255 / .12); border-radius: .75rem; background: rgb(0 0 0 / .2); cursor: pointer; font-size: .95rem; font-weight: 850; transition: transform 160ms ease, border-color 160ms ease, background 160ms ease; }\n.round-settings__choices button:hover { transform: translateY(-.1rem); border-color: var(--color-primary-light); color: white; }\n.round-settings__choices button.is-selected { color: white; border-color: var(--color-primary-light); background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); box-shadow: 0 .3rem .8rem rgb(123 44 255 / .28); }\n.round-settings__choices button:disabled { cursor: not-allowed; opacity: .55; }\n\n.players-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem 1.25rem; width: 100%; }\n.player-card { display: flex; min-width: 0; min-height: 7rem; align-items: center; gap: 1rem; padding: 1rem 1.1rem; border: 0.0625rem solid rgb(255 255 255 / .09); border-radius: 1.4rem; background: linear-gradient(145deg, rgb(27 23 45 / .78), rgb(12 10 23 / .72)); box-shadow: 0 0.875rem 2.125rem rgb(0 0 0 / .22), inset 0 0.0625rem 0 rgb(255 255 255 / .05); }\n.player-card--ready { border-color: color-mix(in srgb, var(--color-correct) 36%, transparent); box-shadow: 0 0.875rem 2.125rem rgb(0 0 0 / .22), 0 0 1.375rem color-mix(in srgb, var(--color-correct) 10%, transparent); }\n.player-card__body { min-width: 0; flex: 1; }\n.player-card__name { display: flex; flex-wrap: wrap; align-items: center; gap: .4rem .65rem; }\n.player-card h2 { overflow: hidden; color: white; font-size: clamp(1.2rem, 3vw, 1.7rem); font-weight: 800; line-height: 1.15; text-overflow: ellipsis; white-space: nowrap; }\n.host-badge { display: inline-flex; align-items: center; gap: .3rem; padding: .25rem .45rem; color: var(--color-accent); border-radius: .55rem; background: color-mix(in srgb, var(--color-accent) 10%, transparent); font-size: .62rem; font-weight: 850; letter-spacing: .07em; text-transform: uppercase; }\n.host-badge svg { width: .8rem; height: .8rem; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linejoin: round; }\n.player-status { display: flex; align-items: center; gap: .5rem; margin-top: .55rem; color: var(--color-warning); font-size: .72rem; font-weight: 850; letter-spacing: .08em; text-transform: uppercase; }\n.player-status > span { width: .55rem; height: .55rem; border-radius: 50%; background: currentColor; box-shadow: 0 0 0.625rem currentColor; }\n.player-status--ready { color: var(--color-correct); }\n\n.ready-button { display: grid; flex: 0 0 auto; min-width: 5.5rem; min-height: 4.6rem; place-items: center; gap: .15rem; padding: .55rem .7rem; color: white; border: 0.0625rem solid color-mix(in srgb, var(--color-correct) 40%, transparent); border-radius: 1rem; background: color-mix(in srgb, var(--color-correct) 72%, #07140d); box-shadow: 0 0.625rem 1.5rem color-mix(in srgb, var(--color-correct) 17%, transparent); cursor: pointer; transition: transform 180ms ease, background 180ms ease; }\n.ready-button:hover { transform: translateY(-0.125rem); }\n.ready-button svg { width: 1.45rem; height: 1.45rem; fill: none; stroke: currentColor; stroke-width: 2.4; stroke-linecap: round; }\n.ready-button span { font-size: .62rem; font-weight: 850; letter-spacing: .05em; text-transform: uppercase; }\n.ready-button--active { color: var(--color-text-muted); border-color: rgb(255 255 255 / .09); background: rgb(255 255 255 / .045); box-shadow: none; }\n\n.player-card--empty { opacity: .45; border-style: dashed; background: rgb(5 4 12 / .22); box-shadow: none; }\n.empty-avatar { display: grid; width: 4.6rem; height: 4.6rem; flex: 0 0 4.6rem; place-items: center; color: var(--color-text-muted); border: 0.125rem dashed rgb(255 255 255 / .18); border-radius: 50%; font-size: 1.8rem; font-weight: 800; }\n.player-card--empty p { margin-top: .4rem; color: var(--color-text-muted); font-size: .82rem; }\n\n.lobby-actions { display: flex; justify-content: center; margin-top: 1.4rem; }\n.start-button { width: min(31rem, 100%); min-height: 3.7rem; gap: .65rem; border-radius: 1rem; font-size: .9rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }\n.start-button svg { width: 1.2rem; height: 1.2rem; fill: none; stroke: currentColor; stroke-width: 2.2; }\n.host-waiting { display: flex; align-items: center; gap: .75rem; padding: .85rem 1.15rem; color: var(--color-text-muted); border: 0.0625rem solid rgb(255 255 255 / .07); border-radius: 1rem; background: rgb(0 0 0 / .2); font-size: .85rem; font-weight: 700; text-align: center; }\n.host-waiting__spinner { width: .75rem; height: .75rem; flex: 0 0 auto; border: 0.125rem solid rgb(255 255 255 / .2); border-top-color: var(--color-primary-light); border-radius: 50%; animation: spin 900ms linear infinite; }\n@keyframes spin { to { transform: rotate(360deg); } }\n\n@media (max-width: 45rem) {\n  .lobby-shell { padding-top: 1.25rem; padding-bottom: 1.25rem; }\n  .players-grid { grid-template-columns: 1fr; gap: .8rem; }\n  .player-card { min-height: 6.25rem; padding: .85rem; }\n  .lobby-progress { margin-top: 1.25rem; }\n  .round-settings { margin-bottom: 1rem; }\n}\n\n@media (max-width: 26.25rem) {\n  .lobby-help { position: static; display: flex; justify-content: center; margin-bottom: .8rem; }\n  .room-code { column-gap: .55rem; padding-left: .9rem; }\n  .room-code strong { font-size: 1.8rem; letter-spacing: .1em; }\n  .room-code__copy { width: 2.35rem; height: 2.35rem; }\n  .player-card { gap: .7rem; }\n  .ready-button { min-width: 4.6rem; min-height: 4.25rem; padding-inline: .45rem; }\n  .empty-avatar { width: 4rem; height: 4rem; flex-basis: 4rem; }\n}\n\n@media (prefers-reduced-motion: reduce) { .host-waiting__spinner { animation: none; } }\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LobbyComponent, { className: "LobbyComponent", filePath: "src/app/pages/lobby/lobby.component.ts", lineNumber: 18 }); })();
