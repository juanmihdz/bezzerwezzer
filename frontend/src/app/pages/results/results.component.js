import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GameStateService } from '../../core/services/game-state.service';
import { AudioService } from '../../core/services/audio.service';
import { PlayerAvatarComponent } from '../../shared/components/player-avatar/player-avatar.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2) => ({ "text-yellow-400 drop-shadow-[0_0_0.5rem_rgba(250,204,21,0.2)]": a0, "text-gray-300": a1, "text-amber-600": a2 });
function ResultsComponent_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 16);
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", i_r1 * 5 + "%")("background-color", ctx_r1.colors[i_r1 % ctx_r1.colors.length])("animation-delay", i_r1 * 0.1 + "s")("animation-duration", 3 + i_r1 % 3 + "s");
} }
function ResultsComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 17)(2, "span", 18);
    i0.ɵɵtext(3, "2\u00BA Puesto");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "app-player-avatar", 19);
    i0.ɵɵelementStart(5, "span", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 21)(8, "span", 22);
    i0.ɵɵtext(9, "\uD83E\uDD48");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 23);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("username", ctx_r1.rankedPlayers[1].username)("color", ctx_r1.rankedPlayers[1].color)("showName", false);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.rankedPlayers[1].username);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Casilla ", ctx_r1.rankedPlayers[1].boardPosition);
} }
function ResultsComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 24)(2, "span", 25);
    i0.ɵɵtext(3, "Campe\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "app-player-avatar", 26);
    i0.ɵɵelementStart(5, "span", 27);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 28);
    i0.ɵɵelement(8, "div", 29);
    i0.ɵɵelementStart(9, "span", 30);
    i0.ɵɵtext(10, "\uD83E\uDD47");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 31);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("username", ctx_r1.rankedPlayers[0].username)("color", ctx_r1.rankedPlayers[0].color)("showCrown", true)("showName", false);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.rankedPlayers[0].username);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Casilla ", ctx_r1.rankedPlayers[0].boardPosition);
} }
function ResultsComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 17)(2, "span", 32);
    i0.ɵɵtext(3, "3\u00BA Puesto");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "app-player-avatar", 19);
    i0.ɵɵelementStart(5, "span", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 33)(8, "span", 34);
    i0.ɵɵtext(9, "\uD83E\uDD49");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 23);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("username", ctx_r1.rankedPlayers[2].username)("color", ctx_r1.rankedPlayers[2].color)("showName", false);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.rankedPlayers[2].username);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Casilla ", ctx_r1.rankedPlayers[2].boardPosition);
} }
function ResultsComponent_For_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "app-player-avatar", 36);
    i0.ɵɵelementStart(4, "div", 37)(5, "h4", 38);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 39)(8, "span", 40);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 41);
    i0.ɵɵtext(11, "Casilla");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const player_r3 = ctx.$implicit;
    const ɵ$index_91_r4 = ctx.$index;
    i0.ɵɵproperty("ngClass", ɵ$index_91_r4 === 0 ? "hover:shadow-yellow-500/10 border-yellow-500/20" : "hover:shadow-primary/5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(8, _c0, ɵ$index_91_r4 === 0, ɵ$index_91_r4 === 1, ɵ$index_91_r4 === 2));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ɵ$index_91_r4 + 1, "\u00BA ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("username", player_r3.username)("color", player_r3.color)("showName", false);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(player_r3.username);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(player_r3.boardPosition);
} }
export class ResultsComponent {
    gameState = inject(GameStateService);
    router = inject(Router);
    audioService = inject(AudioService);
    rankedPlayers = this.gameState.sortedPlayers();
    winner = this.rankedPlayers.length > 0 ? this.rankedPlayers[0] : null;
    confettiArray = Array(20).fill(0).map((x, i) => i);
    colors = ['#E91E63', '#2196F3', '#4CAF50', '#FF9800', '#F44336', '#9C27B0'];
    ngOnInit() {
        // Play victory sound
        try {
            this.audioService.playCorrect();
            setTimeout(() => this.audioService.playCorrect(), 300);
            setTimeout(() => this.audioService.playNotification(), 600);
        }
        catch (e) { }
    }
    goHome() {
        this.gameState.reset();
        this.router.navigate(['/']);
    }
    static ɵfac = function ResultsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ResultsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ResultsComponent, selectors: [["app-results"]], decls: 23, vars: 3, consts: [[1, "flex", "flex-1", "flex-col", "items-center", "w-full", "max-w-5xl", "mx-auto", "py-8", "sm:py-12"], [1, "fixed", "inset-0", "pointer-events-none", "z-0", "overflow-hidden"], [1, "absolute", "w-3", "h-3", "rounded-sm", "animate-confetti-fall", 3, "left", "backgroundColor", "animationDelay", "animationDuration"], [1, "text-center", "mb-10", "sm:mb-14", "relative", "z-10", "animate-slide-up", "w-full", "px-4"], [1, "text-6xl", "mb-4", "animate-bounce-in", "drop-shadow-xl", "sm:text-8xl"], [1, "text-4xl", "sm:text-5xl", "md:text-7xl", "font-black", "font-display", "mb-2", "text-transparent", "bg-clip-text", "bg-gradient-to-b", "from-yellow-300", "via-yellow-400", "to-yellow-600", "drop-shadow-lg", "uppercase", "tracking-[0.08em]", "sm:tracking-widest"], [1, "text-xl", "md:text-2xl", "font-bold", "text-gray-300", "mt-2"], [1, "w-full", "max-w-4xl", "mx-auto", "flex", "items-end", "justify-center", "gap-2", "sm:gap-6", "md:gap-10", "mb-14", "sm:mb-20", "relative", "z-10", "px-2", "sm:px-4", "mt-5"], [1, "flex", "flex-col", "items-center", "flex-1", "animate-slide-up", 2, "animation-delay", "200ms"], [1, "flex", "flex-col", "items-center", "flex-1", "animate-slide-up", 2, "animation-delay", "100ms"], [1, "flex", "flex-col", "items-center", "flex-1", "animate-slide-up", 2, "animation-delay", "300ms"], [1, "w-full", "max-w-3xl", "grid", "gap-4", "relative", "z-10", "animate-slide-up", "delay-400", "px-4"], [1, "text-sm", "font-black", "uppercase", "tracking-[0.2em]", "text-text-muted/80", "mb-2", "px-2"], [1, "glass", "p-5", "rounded-2xl", "flex", "items-center", "gap-6", "border", "border-white/5", "transition-all", "duration-300", "hover:scale-[1.01]", 3, "ngClass"], [1, "mt-16", "flex", "justify-center", "relative", "z-10", "w-full", "max-w-sm", "animate-slide-up", "delay-500", "px-4"], [1, "btn-primary", "w-full", "text-xl", "font-black", "py-6", "rounded-2xl", 3, "click"], [1, "absolute", "w-3", "h-3", "rounded-sm", "animate-confetti-fall"], [1, "relative", "mb-4", "flex", "flex-col", "items-center"], [1, "text-[0.65rem]", "font-black", "text-gray-400", "uppercase", "tracking-widest", "bg-gray-400/10", "border", "border-gray-400/20", "px-3", "py-1", "rounded-full", "mb-3"], ["size", "md", 3, "username", "color", "showName"], [1, "text-lg", "font-bold", "text-white", "mt-3", "truncate", "max-w-[6.25rem]", "sm:max-w-[7.5rem]"], [1, "w-full", "h-28", "sm:h-32", "bg-gray-400/5", "border", "border-gray-400/20", "rounded-t-[1.25rem]", "sm:rounded-t-[2rem]", "flex", "flex-col", "items-center", "justify-center", "p-2", "sm:p-4", "glass-strong", "shadow-lg"], [1, "text-4xl", "font-black", "font-display", "text-gray-400"], [1, "text-[0.65rem]", "font-bold", "text-text-muted/60", "mt-3", "uppercase", "tracking-widest"], [1, "relative", "mb-6", "flex", "flex-col", "items-center", "scale-105", "sm:scale-110"], [1, "text-[0.65rem]", "font-black", "text-yellow-400", "uppercase", "tracking-widest", "bg-yellow-500/10", "border", "border-yellow-500/20", "px-3", "py-1", "rounded-full", "mb-4", "animate-pulse"], ["size", "lg", 3, "username", "color", "showCrown", "showName"], [1, "text-xl", "sm:text-2xl", "font-black", "text-white", "mt-3", "truncate", "max-w-[7.5rem]", "sm:max-w-[8.75rem]"], [1, "w-full", "h-36", "sm:h-44", "bg-yellow-500/10", "border", "border-yellow-500/30", "rounded-t-[1.5rem]", "sm:rounded-t-[2.5rem]", "flex", "flex-col", "items-center", "justify-center", "p-2", "sm:p-4", "glass-strong", "shadow-2xl", "relative", "overflow-hidden"], [1, "absolute", "inset-0", "bg-yellow-500/5", "animate-pulse-glow", "z-0"], [1, "text-5xl", "font-black", "font-display", "text-yellow-400", "relative", "z-10"], [1, "text-[0.65rem]", "font-black", "text-yellow-400", "mt-4", "uppercase", "tracking-wider", "relative", "z-10"], [1, "text-[0.65rem]", "font-black", "text-amber-600", "uppercase", "tracking-widest", "bg-amber-600/10", "border", "border-amber-600/20", "px-3", "py-1", "rounded-full", "mb-3"], [1, "w-full", "h-26", "bg-amber-600/5", "border", "border-amber-600/20", "rounded-t-[2rem]", "flex", "flex-col", "items-center", "justify-center", "p-4", "glass-strong", "shadow-lg"], [1, "text-4xl", "font-black", "font-display", "text-amber-700"], [1, "text-2xl", "font-black", "font-display", "w-12", "text-center", "text-text-muted/50", 3, "ngClass"], ["size", "sm", 3, "username", "color", "showName"], [1, "flex-grow"], [1, "text-lg", "font-extrabold", "text-white", "tracking-wide"], [1, "text-right"], [1, "text-2xl", "font-black", "font-display", "text-white"], [1, "text-[0.65rem]", "font-bold", "uppercase", "tracking-widest", "text-text-muted", "block", "mt-0.5"]], template: function ResultsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵrepeaterCreate(2, ResultsComponent_For_3_Template, 1, 8, "div", 2, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3)(5, "div", 4);
            i0.ɵɵtext(6, "\uD83C\uDFC6");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "h1", 5);
            i0.ɵɵtext(8, " \u00A1Fin de Partida! ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p", 6);
            i0.ɵɵtext(10, "Felicitaciones al campe\u00F3n");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 7);
            i0.ɵɵconditionalCreate(12, ResultsComponent_Conditional_12_Template, 12, 5, "div", 8);
            i0.ɵɵconditionalCreate(13, ResultsComponent_Conditional_13_Template, 13, 6, "div", 9);
            i0.ɵɵconditionalCreate(14, ResultsComponent_Conditional_14_Template, 12, 5, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 11)(16, "h3", 12);
            i0.ɵɵtext(17, " Tabla de Posiciones ");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(18, ResultsComponent_For_19_Template, 12, 12, "div", 13, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 14)(21, "button", 15);
            i0.ɵɵlistener("click", function ResultsComponent_Template_button_click_21_listener() { return ctx.goHome(); });
            i0.ɵɵtext(22, " Volver al Inicio ");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.confettiArray);
            i0.ɵɵadvance(10);
            i0.ɵɵconditional(ctx.rankedPlayers[1] ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.rankedPlayers[0] ? 13 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.rankedPlayers[2] ? 14 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.rankedPlayers);
        } }, dependencies: [CommonModule, i1.NgClass, PlayerAvatarComponent], styles: ["@keyframes _ngcontent-%COMP%_confetti-fall {\n  0% {\n    transform: translateY(-10vh) rotate(0deg);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(110vh) rotate(720deg);\n    opacity: 0;\n  }\n}\n\n.animate-confetti-fall[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_confetti-fall;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultsComponent, [{
        type: Component,
        args: [{ selector: 'app-results', standalone: true, imports: [CommonModule, PlayerAvatarComponent], template: "<div\n  class=\"flex flex-1 flex-col items-center w-full max-w-5xl mx-auto py-8 sm:py-12\"\n>\n  <!-- Confetti container (CSS animation) -->\n  <div class=\"fixed inset-0 pointer-events-none z-0 overflow-hidden\">\n    @for (i of confettiArray; track i) {\n      <div\n        class=\"absolute w-3 h-3 rounded-sm animate-confetti-fall\"\n        [style.left]=\"i * 5 + '%'\"\n        [style.backgroundColor]=\"colors[i % colors.length]\"\n        [style.animationDelay]=\"i * 0.1 + 's'\"\n        [style.animationDuration]=\"3 + (i % 3) + 's'\"\n      ></div>\n    }\n  </div>\n\n  <!-- Winner Showcase Header -->\n  <div class=\"text-center mb-10 sm:mb-14 relative z-10 animate-slide-up w-full px-4\">\n    <div class=\"text-6xl mb-4 animate-bounce-in drop-shadow-xl sm:text-8xl\">\uD83C\uDFC6</div>\n    <h1\n      class=\"text-4xl sm:text-5xl md:text-7xl font-black font-display mb-2 text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-lg uppercase tracking-[0.08em] sm:tracking-widest\"\n    >\n      \u00A1Fin de Partida!\n    </h1>\n    <p class=\"text-xl md:text-2xl font-bold text-gray-300 mt-2\">Felicitaciones al campe\u00F3n</p>\n  </div>\n\n  <!-- 3D Pedestal Podium for Top 3 -->\n  <div\n    class=\"w-full max-w-4xl mx-auto flex items-end justify-center gap-2 sm:gap-6 md:gap-10 mb-14 sm:mb-20 relative z-10 px-2 sm:px-4 mt-5\"\n  >\n    <!-- 2nd Place (Left Column) -->\n    @if (rankedPlayers[1]) {\n      <div\n        class=\"flex flex-col items-center flex-1 animate-slide-up\"\n        style=\"animation-delay: 200ms\"\n      >\n        <div class=\"relative mb-4 flex flex-col items-center\">\n          <span\n            class=\"text-[0.65rem] font-black text-gray-400 uppercase tracking-widest bg-gray-400/10 border border-gray-400/20 px-3 py-1 rounded-full mb-3\"\n            >2\u00BA Puesto</span\n          >\n          <app-player-avatar\n            [username]=\"rankedPlayers[1].username\"\n            [color]=\"rankedPlayers[1].color\"\n            size=\"md\"\n            [showName]=\"false\"\n          >\n          </app-player-avatar>\n          <span class=\"text-lg font-bold text-white mt-3 truncate max-w-[6.25rem] sm:max-w-[7.5rem]\">{{\n            rankedPlayers[1].username\n          }}</span>\n        </div>\n        <!-- Pedestal silver block -->\n        <div\n          class=\"w-full h-28 sm:h-32 bg-gray-400/5 border border-gray-400/20 rounded-t-[1.25rem] sm:rounded-t-[2rem] flex flex-col items-center justify-center p-2 sm:p-4 glass-strong shadow-lg\"\n        >\n          <span class=\"text-4xl font-black font-display text-gray-400\">\uD83E\uDD48</span>\n          <span class=\"text-[0.65rem] font-bold text-text-muted/60 mt-3 uppercase tracking-widest\"\n            >Casilla {{ rankedPlayers[1].boardPosition }}</span\n          >\n        </div>\n      </div>\n    }\n\n    <!-- 1st Place (Center Column - Tallest) -->\n    @if (rankedPlayers[0]) {\n      <div\n        class=\"flex flex-col items-center flex-1 animate-slide-up\"\n        style=\"animation-delay: 100ms\"\n      >\n        <div class=\"relative mb-6 flex flex-col items-center scale-105 sm:scale-110\">\n          <span\n            class=\"text-[0.65rem] font-black text-yellow-400 uppercase tracking-widest bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full mb-4 animate-pulse\"\n            >Campe\u00F3n</span\n          >\n          <app-player-avatar\n            [username]=\"rankedPlayers[0].username\"\n            [color]=\"rankedPlayers[0].color\"\n            size=\"lg\"\n            [showCrown]=\"true\"\n            [showName]=\"false\"\n          >\n          </app-player-avatar>\n          <span\n            class=\"text-xl sm:text-2xl font-black text-white mt-3 truncate max-w-[7.5rem] sm:max-w-[8.75rem]\"\n            >{{ rankedPlayers[0].username }}</span\n          >\n        </div>\n        <!-- Pedestal gold block -->\n        <div\n          class=\"w-full h-36 sm:h-44 bg-yellow-500/10 border border-yellow-500/30 rounded-t-[1.5rem] sm:rounded-t-[2.5rem] flex flex-col items-center justify-center p-2 sm:p-4 glass-strong shadow-2xl relative overflow-hidden\"\n        >\n          <div class=\"absolute inset-0 bg-yellow-500/5 animate-pulse-glow z-0\"></div>\n          <span class=\"text-5xl font-black font-display text-yellow-400 relative z-10\">\uD83E\uDD47</span>\n          <span\n            class=\"text-[0.65rem] font-black text-yellow-400 mt-4 uppercase tracking-wider relative z-10\"\n            >Casilla {{ rankedPlayers[0].boardPosition }}</span\n          >\n        </div>\n      </div>\n    }\n\n    <!-- 3rd Place (Right Column) -->\n    @if (rankedPlayers[2]) {\n      <div\n        class=\"flex flex-col items-center flex-1 animate-slide-up\"\n        style=\"animation-delay: 300ms\"\n      >\n        <div class=\"relative mb-4 flex flex-col items-center\">\n          <span\n            class=\"text-[0.65rem] font-black text-amber-600 uppercase tracking-widest bg-amber-600/10 border border-amber-600/20 px-3 py-1 rounded-full mb-3\"\n            >3\u00BA Puesto</span\n          >\n          <app-player-avatar\n            [username]=\"rankedPlayers[2].username\"\n            [color]=\"rankedPlayers[2].color\"\n            size=\"md\"\n            [showName]=\"false\"\n          >\n          </app-player-avatar>\n          <span class=\"text-lg font-bold text-white mt-3 truncate max-w-[6.25rem] sm:max-w-[7.5rem]\">{{\n            rankedPlayers[2].username\n          }}</span>\n        </div>\n        <!-- Pedestal bronze block -->\n        <div\n          class=\"w-full h-26 bg-amber-600/5 border border-amber-600/20 rounded-t-[2rem] flex flex-col items-center justify-center p-4 glass-strong shadow-lg\"\n        >\n          <span class=\"text-4xl font-black font-display text-amber-700\">\uD83E\uDD49</span>\n          <span class=\"text-[0.65rem] font-bold text-text-muted/60 mt-3 uppercase tracking-widest\"\n            >Casilla {{ rankedPlayers[2].boardPosition }}</span\n          >\n        </div>\n      </div>\n    }\n  </div>\n\n  <!-- Detailed Ranking List Table -->\n  <div class=\"w-full max-w-3xl grid gap-4 relative z-10 animate-slide-up delay-400 px-4\">\n    <h3 class=\"text-sm font-black uppercase tracking-[0.2em] text-text-muted/80 mb-2 px-2\">\n      Tabla de Posiciones\n    </h3>\n\n    @for (player of rankedPlayers; track player; let i = $index) {\n      <div\n        class=\"glass p-5 rounded-2xl flex items-center gap-6 border border-white/5 transition-all duration-300 hover:scale-[1.01]\"\n        [ngClass]=\"\n          i === 0 ? 'hover:shadow-yellow-500/10 border-yellow-500/20' : 'hover:shadow-primary/5'\n        \"\n      >\n        <div\n          class=\"text-2xl font-black font-display w-12 text-center text-text-muted/50\"\n          [ngClass]=\"{\n            'text-yellow-400 drop-shadow-[0_0_0.5rem_rgba(250,204,21,0.2)]': i === 0,\n            'text-gray-300': i === 1,\n            'text-amber-600': i === 2,\n          }\"\n        >\n          {{ i + 1 }}\u00BA\n        </div>\n        <app-player-avatar\n          [username]=\"player.username\"\n          [color]=\"player.color\"\n          size=\"sm\"\n          [showName]=\"false\"\n        >\n        </app-player-avatar>\n        <div class=\"flex-grow\">\n          <h4 class=\"text-lg font-extrabold text-white tracking-wide\">{{ player.username }}</h4>\n        </div>\n        <div class=\"text-right\">\n          <span class=\"text-2xl font-black font-display text-white\">{{\n            player.boardPosition\n          }}</span>\n          <span\n            class=\"text-[0.65rem] font-bold uppercase tracking-widest text-text-muted block mt-0.5\"\n            >Casilla</span\n          >\n        </div>\n      </div>\n    }\n  </div>\n\n  <!-- Actions -->\n  <div\n    class=\"mt-16 flex justify-center relative z-10 w-full max-w-sm animate-slide-up delay-500 px-4\"\n  >\n    <button (click)=\"goHome()\" class=\"btn-primary w-full text-xl font-black py-6 rounded-2xl\">\n      Volver al Inicio\n    </button>\n  </div>\n</div>\n", styles: ["@keyframes confetti-fall {\n  0% {\n    transform: translateY(-10vh) rotate(0deg);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(110vh) rotate(720deg);\n    opacity: 0;\n  }\n}\n\n.animate-confetti-fall {\n  animation-name: confetti-fall;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n\n:host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ResultsComponent, { className: "ResultsComponent", filePath: "src/app/pages/results/results.component.ts", lineNumber: 15 }); })();
