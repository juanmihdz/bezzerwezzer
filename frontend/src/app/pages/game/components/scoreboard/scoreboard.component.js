import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerAvatarComponent } from '../../../../shared/components/player-avatar/player-avatar.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2, a3) => ({ "text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]": a0, "text-gray-300": a1, "text-amber-600": a2, "text-text-muted/40": a3 });
function ScoreboardComponent_For_10_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 19);
} if (rf & 2) {
    const player_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleProp("background-color", player_r1.color);
} }
function ScoreboardComponent_For_10_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 12);
    i0.ɵɵelement(1, "path", 20);
    i0.ɵɵelementEnd();
} }
function ScoreboardComponent_For_10_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_17_r2 = i0.ɵɵnextContext().$index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ɵ$index_17_r2 + 1);
} }
function ScoreboardComponent_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵconditionalCreate(1, ScoreboardComponent_For_10_Conditional_1_Template, 1, 2, "div", 9);
    i0.ɵɵelementStart(2, "div", 10)(3, "div", 11);
    i0.ɵɵconditionalCreate(4, ScoreboardComponent_For_10_Conditional_4_Template, 2, 0, ":svg:svg", 12);
    i0.ɵɵconditionalCreate(5, ScoreboardComponent_For_10_Conditional_5_Template, 2, 1, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "app-player-avatar", 13);
    i0.ɵɵelementStart(7, "div", 14)(8, "h4", 15);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 16)(11, "span", 17);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 18);
    i0.ɵɵtext(14, "Casilla");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const player_r1 = ctx.$implicit;
    const ɵ$index_17_r2 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("border-color", player_r1.playerId === ctx_r2.currentTurnPlayerId ? player_r1.color + "50" : "");
    i0.ɵɵproperty("ngClass", player_r1.playerId === ctx_r2.currentTurnPlayerId ? "bg-gradient-to-r from-primary/15 to-accent/5 border-primary/40 shadow-lg shadow-primary/5 transform scale-[1.02] z-10" : "bg-black/20 border-white/5 hover:border-white/10 hover:bg-black/30");
    i0.ɵɵadvance();
    i0.ɵɵconditional(player_r1.playerId === ctx_r2.currentTurnPlayerId ? 1 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(15, _c0, ɵ$index_17_r2 === 0, ɵ$index_17_r2 === 1, ɵ$index_17_r2 === 2, ɵ$index_17_r2 > 2));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ɵ$index_17_r2 === 0 ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ɵ$index_17_r2 !== 0 ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("username", player_r1.username)("color", player_r1.color)("showName", false)("isActive", player_r1.playerId === ctx_r2.currentTurnPlayerId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", player_r1.playerId === ctx_r2.currentTurnPlayerId ? "text-white" : "text-text-muted");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", player_r1.username, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", player_r1.playerId === ctx_r2.currentTurnPlayerId ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" : "text-text-muted");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", player_r1.boardPosition, " ");
} }
export class ScoreboardComponent {
    players;
    currentTurnPlayerId;
    currentRound = 1;
    static ɵfac = function ScoreboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScoreboardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScoreboardComponent, selectors: [["app-scoreboard"]], inputs: { players: "players", currentTurnPlayerId: "currentTurnPlayerId", currentRound: "currentRound" }, decls: 11, vars: 1, consts: [[1, "glass", "p-4", "xl:p-5", "rounded-3xl", "h-full", "flex", "flex-col", "min-h-0"], [1, "text-xl", "xl:text-2xl", "font-black", "mb-4", "flex", "flex-wrap", "gap-2", "items-center", "justify-between", "tracking-wide"], [1, "score-heading"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M8 4h8v4c0 4-2 6-4 6s-4-2-4-6V4ZM8 6H4v2c0 2 2 3 4 3M16 6h4v2c0 2-2 3-4 3M12 14v4M8 21h8M9 18h6"], [1, "text-xs", "font-bold", "text-accent", "bg-accent/15", "px-4", "py-2", "rounded-full", "border", "border-accent/20", "tracking-widest", "uppercase"], [1, "flex", "flex-col", "gap-2.5", "flex-grow", "overflow-y-auto", "pr-1", "custom-scrollbar", "min-h-0"], [1, "flex", "items-center", "p-3", "rounded-2xl", "border", "transition-all", "duration-300", "relative", "overflow-hidden", 3, "ngClass", "borderColor"], [1, "flex", "items-center", "p-3", "rounded-2xl", "border", "transition-all", "duration-300", "relative", "overflow-hidden", 3, "ngClass"], [1, "absolute", "inset-0", "opacity-20", "blur-md", "z-0", "animate-pulse-glow", 3, "backgroundColor"], [1, "relative", "z-10", "flex", "items-center", "gap-4", "w-full"], [1, "w-10", "font-display", "font-black", "text-center", "text-xl", "flex", "items-center", "justify-center", 3, "ngClass"], ["viewBox", "0 0 24 24", "aria-label", "Primera posici\u00F3n", 1, "rank-crown"], ["size", "sm", 3, "username", "color", "showName", "isActive"], [1, "flex-grow", "min-w-0"], [1, "font-extrabold", "truncate", "text-base", "md:text-lg", "tracking-wide", 3, "ngClass"], [1, "flex", "flex-col", "items-end"], [1, "font-black", "font-display", "text-2xl", "leading-none", 3, "ngClass"], [1, "text-[0.6rem]", "uppercase", "tracking-[0.15em]", "text-text-muted/60", "font-bold", "mt-1"], [1, "absolute", "inset-0", "opacity-20", "blur-md", "z-0", "animate-pulse-glow"], ["d", "m3 7 4.5 4L12 4l4.5 7L21 7l-1.5 10h-15L3 7Z"]], template: function ScoreboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h3", 1)(2, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "path", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5, "Clasificaci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "span", 5);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 6);
            i0.ɵɵrepeaterCreate(9, ScoreboardComponent_For_10_Template, 15, 20, "div", 7, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" Ronda ", ctx.currentRound, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.players);
        } }, dependencies: [CommonModule, i1.NgClass, PlayerAvatarComponent], styles: ["[_nghost-%COMP%] { display: block; width: 100%; height: 100%; min-height: 0; }\n.score-heading[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: .55rem; }\n.score-heading[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: 1.35rem; height: 1.35rem; fill: none; stroke: var(--color-primary-light); stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }\n.rank-crown[_ngcontent-%COMP%] { width: 1.45rem; height: 1.45rem; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linejoin: round; }\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] { position: relative; overflow: hidden; border: 1px solid rgb(191 137 255 / .28); background: linear-gradient(155deg, rgb(24 17 53 / .88), rgb(5 7 23 / .84)); box-shadow: 0 24px 54px rgb(0 0 0 / .34), inset 0 1px 0 rgb(255 255 255 / .10), inset 0 0 40px rgb(123 44 255 / .04); }\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]::before { content: ''; position: absolute; inset: auto -25% -20% auto; width: 13rem; height: 13rem; border-radius: 50%; background: radial-gradient(circle, rgb(255 25 200 / .15), transparent 68%); pointer-events: none; }\n[_nghost-%COMP%]     .flex.items-center.p-3 { border-color: rgb(195 141 255 / .14); background: linear-gradient(100deg, rgb(15 13 35 / .75), rgb(20 10 43 / .44)); box-shadow: inset 0 1px 0 rgb(255 255 255 / .035); }\n[_nghost-%COMP%]     .flex.items-center.p-3:hover { transform: translateX(2px); border-color: rgb(207 144 255 / .32); }\n[_nghost-%COMP%]     .flex.items-center.p-3.z-10 { box-shadow: -4px 0 0 var(--color-accent), 0 10px 28px rgb(255 25 200 / .13), inset 0 1px 0 rgb(255 255 255 / .12); }\n\n@media (max-width: 1023px) {\n  [_nghost-%COMP%]     .custom-scrollbar {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: minmax(12rem, 15rem);\n    overflow-x: auto;\n    overflow-y: hidden;\n    padding-bottom: 0.25rem;\n  }\n}\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%]    > div[_ngcontent-%COMP%] { padding: 0.75rem; border-radius: 1.25rem; }\n  [_nghost-%COMP%]   h3[_ngcontent-%COMP%] { margin-bottom: 0.5rem; font-size: 1rem; }\n  [_nghost-%COMP%]     .custom-scrollbar { grid-auto-columns: minmax(10.5rem, 12rem); gap: 0.5rem; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScoreboardComponent, [{
        type: Component,
        args: [{ selector: 'app-scoreboard', standalone: true, imports: [CommonModule, PlayerAvatarComponent], template: "<div class=\"glass p-4 xl:p-5 rounded-3xl h-full flex flex-col min-h-0\">\n  <h3\n    class=\"text-xl xl:text-2xl font-black mb-4 flex flex-wrap gap-2 items-center justify-between tracking-wide\"\n  >\n    <span class=\"score-heading\"\n      ><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n        <path\n          d=\"M8 4h8v4c0 4-2 6-4 6s-4-2-4-6V4ZM8 6H4v2c0 2 2 3 4 3M16 6h4v2c0 2-2 3-4 3M12 14v4M8 21h8M9 18h6\"\n        /></svg\n      >Clasificaci\u00F3n</span\n    >\n    <span\n      class=\"text-xs font-bold text-accent bg-accent/15 px-4 py-2 rounded-full border border-accent/20 tracking-widest uppercase\"\n    >\n      Ronda {{ currentRound }}\n    </span>\n  </h3>\n\n  <div class=\"flex flex-col gap-2.5 flex-grow overflow-y-auto pr-1 custom-scrollbar min-h-0\">\n    @for (player of players; track player; let i = $index) {\n      <div\n        class=\"flex items-center p-3 rounded-2xl border transition-all duration-300 relative overflow-hidden\"\n        [ngClass]=\"\n          player.playerId === currentTurnPlayerId\n            ? 'bg-gradient-to-r from-primary/15 to-accent/5 border-primary/40 shadow-lg shadow-primary/5 transform scale-[1.02] z-10'\n            : 'bg-black/20 border-white/5 hover:border-white/10 hover:bg-black/30'\n        \"\n        [style.borderColor]=\"player.playerId === currentTurnPlayerId ? player.color + '50' : ''\"\n      >\n        <!-- Current Turn Glowing Effect in Player Color -->\n        @if (player.playerId === currentTurnPlayerId) {\n          <div\n            class=\"absolute inset-0 opacity-20 blur-md z-0 animate-pulse-glow\"\n            [style.backgroundColor]=\"player.color\"\n          ></div>\n        }\n        <div class=\"relative z-10 flex items-center gap-4 w-full\">\n          <!-- Rank Indicator -->\n          <div\n            class=\"w-10 font-display font-black text-center text-xl flex items-center justify-center\"\n            [ngClass]=\"{\n              'text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]': i === 0,\n              'text-gray-300': i === 1,\n              'text-amber-600': i === 2,\n              'text-text-muted/40': i > 2,\n            }\"\n          >\n            @if (i === 0) {\n              <svg class=\"rank-crown\" viewBox=\"0 0 24 24\" aria-label=\"Primera posici\u00F3n\">\n                <path d=\"m3 7 4.5 4L12 4l4.5 7L21 7l-1.5 10h-15L3 7Z\" />\n              </svg>\n            }\n            @if (i !== 0) {\n              <span>{{ i + 1 }}</span>\n            }\n          </div>\n          <app-player-avatar\n            [username]=\"player.username\"\n            [color]=\"player.color\"\n            size=\"sm\"\n            [showName]=\"false\"\n            [isActive]=\"player.playerId === currentTurnPlayerId\"\n          >\n          </app-player-avatar>\n          <div class=\"flex-grow min-w-0\">\n            <h4\n              class=\"font-extrabold truncate text-base md:text-lg tracking-wide\"\n              [ngClass]=\"player.playerId === currentTurnPlayerId ? 'text-white' : 'text-text-muted'\"\n            >\n              {{ player.username }}\n            </h4>\n          </div>\n          <!-- Position/Score -->\n          <div class=\"flex flex-col items-end\">\n            <span\n              class=\"font-black font-display text-2xl leading-none\"\n              [ngClass]=\"\n                player.playerId === currentTurnPlayerId\n                  ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'\n                  : 'text-text-muted'\n              \"\n            >\n              {{ player.boardPosition }}\n            </span>\n            <span\n              class=\"text-[0.6rem] uppercase tracking-[0.15em] text-text-muted/60 font-bold mt-1\"\n              >Casilla</span\n            >\n          </div>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n", styles: [":host { display: block; width: 100%; height: 100%; min-height: 0; }\n.score-heading { display: inline-flex; align-items: center; gap: .55rem; }\n.score-heading svg { width: 1.35rem; height: 1.35rem; fill: none; stroke: var(--color-primary-light); stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }\n.rank-crown { width: 1.45rem; height: 1.45rem; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linejoin: round; }\n:host > div { position: relative; overflow: hidden; border: 1px solid rgb(191 137 255 / .28); background: linear-gradient(155deg, rgb(24 17 53 / .88), rgb(5 7 23 / .84)); box-shadow: 0 24px 54px rgb(0 0 0 / .34), inset 0 1px 0 rgb(255 255 255 / .10), inset 0 0 40px rgb(123 44 255 / .04); }\n:host > div::before { content: ''; position: absolute; inset: auto -25% -20% auto; width: 13rem; height: 13rem; border-radius: 50%; background: radial-gradient(circle, rgb(255 25 200 / .15), transparent 68%); pointer-events: none; }\n:host ::ng-deep .flex.items-center.p-3 { border-color: rgb(195 141 255 / .14); background: linear-gradient(100deg, rgb(15 13 35 / .75), rgb(20 10 43 / .44)); box-shadow: inset 0 1px 0 rgb(255 255 255 / .035); }\n:host ::ng-deep .flex.items-center.p-3:hover { transform: translateX(2px); border-color: rgb(207 144 255 / .32); }\n:host ::ng-deep .flex.items-center.p-3.z-10 { box-shadow: -4px 0 0 var(--color-accent), 0 10px 28px rgb(255 25 200 / .13), inset 0 1px 0 rgb(255 255 255 / .12); }\n\n@media (max-width: 1023px) {\n  :host ::ng-deep .custom-scrollbar {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: minmax(12rem, 15rem);\n    overflow-x: auto;\n    overflow-y: hidden;\n    padding-bottom: 0.25rem;\n  }\n}\n\n@media (max-width: 640px) {\n  :host > div { padding: 0.75rem; border-radius: 1.25rem; }\n  :host h3 { margin-bottom: 0.5rem; font-size: 1rem; }\n  :host ::ng-deep .custom-scrollbar { grid-auto-columns: minmax(10.5rem, 12rem); gap: 0.5rem; }\n}\n"] }]
    }], null, { players: [{
            type: Input,
            args: [{ required: true }]
        }], currentTurnPlayerId: [{
            type: Input
        }], currentRound: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScoreboardComponent, { className: "ScoreboardComponent", filePath: "src/app/pages/game/components/scoreboard/scoreboard.component.ts", lineNumber: 13 }); })();
