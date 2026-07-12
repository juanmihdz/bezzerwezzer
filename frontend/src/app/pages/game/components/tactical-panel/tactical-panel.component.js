import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "shadow-[0_0_20px_rgba(249,115,22,0.5)] animate-pulse": a0 });
const _c1 = a0 => ({ "shadow-[0_0_20px_rgba(168,85,247,0.5)] animate-pulse": a0 });
function TacticalPanelComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function TacticalPanelComponent_Conditional_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.skipPreparationClick.emit()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r1.canSkipPreparation);
    i0.ɵɵattribute("aria-label", "Pasar ventana t\u00E1ctica: " + ctx_r1.skipVotes + " de " + ctx_r1.playerCount + " jugadores");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" Paso (", ctx_r1.skipVotes, "/", ctx_r1.playerCount, ") ");
} }
function TacticalPanelComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 6);
} }
function TacticalPanelComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} }
export class TacticalPanelComponent {
    zwapsLeft = 1;
    bezzerwizzersLeft = 2;
    canZwap = false;
    canBezzerwizzer = false;
    canSkipPreparation = false;
    skipVotes = 0;
    playerCount = 0;
    zwapClick = new EventEmitter();
    bezzerwizzerClick = new EventEmitter();
    skipPreparationClick = new EventEmitter();
    static ɵfac = function TacticalPanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TacticalPanelComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TacticalPanelComponent, selectors: [["app-tactical-panel"]], inputs: { zwapsLeft: "zwapsLeft", bezzerwizzersLeft: "bezzerwizzersLeft", canZwap: "canZwap", canBezzerwizzer: "canBezzerwizzer", canSkipPreparation: "canSkipPreparation", skipVotes: "skipVotes", playerCount: "playerCount" }, outputs: { zwapClick: "zwapClick", bezzerwizzerClick: "bezzerwizzerClick", skipPreparationClick: "skipPreparationClick" }, decls: 26, vars: 19, consts: [[1, "glass", "p-4", "xl:p-5", "rounded-3xl", "animate-slide-up", "h-full", "flex", "flex-col", "delay-200"], [1, "flex", "items-center", "justify-between", "gap-2", "mb-3"], [1, "text-xl", "font-black", "tracking-wide", "text-white"], ["type", "button", 1, "skip-preparation-button", 3, "disabled"], [1, "flex", "gap-3", "flex-grow"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "p-3", "rounded-2xl", "border", "transition-all", "duration-300", "group", "relative", "overflow-hidden", 3, "click", "disabled", "ngClass"], [1, "absolute", "inset-0", "bg-orange-500/10", "opacity-0", "group-hover:opacity-100", "transition-opacity"], [1, "w-12", "h-12", "rounded-xl", "bg-gradient-to-br", "from-orange-400", "to-orange-600", "flex", "items-center", "justify-center", "shadow-lg", "relative", "z-10", "mb-2", "transition-transform", "duration-300", "group-hover:scale-105", 3, "ngClass"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "aria-hidden", "true", 1, "h-7", "w-7", "text-white"], ["d", "M7 7h10v10"], ["d", "m17 7-4 4M17 17H7V7"], ["d", "m7 17 4-4"], [1, "font-display", "font-black", "text-sm", "tracking-[0.15em]", "relative", "z-10", "uppercase", 3, "ngClass"], [1, "absolute", "z-20", "top-4", "right-4", "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "text-xs", "font-black", "border", "transition-all", 3, "ngClass"], [1, "absolute", "inset-0", "bg-purple-500/10", "opacity-0", "group-hover:opacity-100", "transition-opacity"], [1, "w-12", "h-12", "rounded-xl", "bg-gradient-to-br", "from-purple-500", "to-purple-700", "flex", "items-center", "justify-center", "shadow-lg", "relative", "z-10", "mb-2", "transition-transform", "duration-300", "group-hover:scale-105", 3, "ngClass"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-7", "w-7", "text-white"], ["d", "m12 3 2.4 5.2L20 9l-4 4 .9 5.7L12 16l-4.9 2.7L8 13 4 9l5.6-.8L12 3Z"], ["type", "button", 1, "skip-preparation-button", 3, "click", "disabled"]], template: function TacticalPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
            i0.ɵɵtext(3, "Fichas T\u00E1cticas");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, TacticalPanelComponent_Conditional_4_Template, 2, 4, "button", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 4)(6, "button", 5);
            i0.ɵɵlistener("click", function TacticalPanelComponent_Template_button_click_6_listener() { return ctx.zwapClick.emit(); });
            i0.ɵɵconditionalCreate(7, TacticalPanelComponent_Conditional_7_Template, 1, 0, "div", 6);
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(9, "svg", 8);
            i0.ɵɵelement(10, "path", 9)(11, "path", 10)(12, "path", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(13, "span", 12);
            i0.ɵɵtext(14, "ZWAP");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 13);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "button", 5);
            i0.ɵɵlistener("click", function TacticalPanelComponent_Template_button_click_17_listener() { return ctx.bezzerwizzerClick.emit(); });
            i0.ɵɵconditionalCreate(18, TacticalPanelComponent_Conditional_18_Template, 1, 0, "div", 14);
            i0.ɵɵelementStart(19, "div", 15);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(20, "svg", 16);
            i0.ɵɵelement(21, "path", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(22, "span", 12);
            i0.ɵɵtext(23, "BEZZER");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 13);
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.canSkipPreparation || ctx.skipVotes > 0 ? 4 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !ctx.canZwap)("ngClass", ctx.canZwap ? "bg-orange-500/5 border-orange-500/40 hover:border-orange-500/80 hover:bg-orange-500/10 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:-translate-y-1 cursor-pointer" : "bg-black/10 border-white/5 opacity-40 grayscale cursor-not-allowed");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.canZwap ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c0, ctx.canZwap));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngClass", ctx.canZwap ? "text-orange-400" : "text-text-muted/60");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.zwapsLeft > 0 ? "bg-orange-500 text-white border-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.4)]" : "bg-black/40 text-gray-500 border-white/5");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.zwapsLeft, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", !ctx.canBezzerwizzer)("ngClass", ctx.canBezzerwizzer ? "bg-purple-500/5 border-purple-500/40 hover:border-purple-500/80 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:-translate-y-1 cursor-pointer" : "bg-black/10 border-white/5 opacity-40 grayscale cursor-not-allowed");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.canBezzerwizzer ? 18 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c1, ctx.canBezzerwizzer));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.canBezzerwizzer ? "text-purple-400" : "text-text-muted/60");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.bezzerwizzersLeft > 0 ? "bg-purple-500 text-white border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.4)]" : "bg-black/40 text-gray-500 border-white/5");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.bezzerwizzersLeft, " ");
        } }, dependencies: [CommonModule, i1.NgClass], styles: ["[_nghost-%COMP%] { display: block; height: 100%; }\n\n.skip-preparation-button[_ngcontent-%COMP%] { padding: .36rem .58rem; border: 1px solid rgb(255 255 255 / .18); border-radius: .65rem; color: rgb(255 255 255 / .78); font-size: .68rem; font-weight: 800; letter-spacing: .04em; transition: .2s ease; }\n.skip-preparation-button[_ngcontent-%COMP%]:not(:disabled):hover { border-color: var(--color-accent); color: white; background: rgb(255 255 255 / .08); }\n.skip-preparation-button[_ngcontent-%COMP%]:disabled { opacity: .5; cursor: default; }\n\nbutton[_ngcontent-%COMP%]:not(:disabled)::after {\n  content: '';\n  position: absolute;\n  inset: -50% -100%;\n  z-index: 1;\n  background: linear-gradient(105deg, transparent 42%, rgb(255 255 255 / 0.16), transparent 58%);\n  transform: translateX(-40%);\n  transition: transform 600ms ease;\n  pointer-events: none;\n}\n\nbutton[_ngcontent-%COMP%]:not(:disabled):hover::after { transform: translateX(40%); }\n\n@media (prefers-reduced-motion: reduce) {\n  button[_ngcontent-%COMP%]::after { display: none; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TacticalPanelComponent, [{
        type: Component,
        args: [{ selector: 'app-tactical-panel', standalone: true, imports: [CommonModule], template: "<div class=\"glass p-4 xl:p-5 rounded-3xl animate-slide-up h-full flex flex-col delay-200\">\n  <div class=\"flex items-center justify-between gap-2 mb-3\">\n    <h3 class=\"text-xl font-black tracking-wide text-white\">Fichas T\u00E1cticas</h3>\n    @if (canSkipPreparation || skipVotes > 0) {\n      <button\n        type=\"button\"\n        (click)=\"skipPreparationClick.emit()\"\n        [disabled]=\"!canSkipPreparation\"\n        class=\"skip-preparation-button\"\n        [attr.aria-label]=\"\n          'Pasar ventana t\u00E1ctica: ' + skipVotes + ' de ' + playerCount + ' jugadores'\n        \"\n      >\n        Paso ({{ skipVotes }}/{{ playerCount }})\n      </button>\n    }\n  </div>\n\n  <div class=\"flex gap-3 flex-grow\">\n    <!-- ZWAP Tile -->\n    <button\n      (click)=\"zwapClick.emit()\"\n      [disabled]=\"!canZwap\"\n      class=\"flex-1 flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300 group relative overflow-hidden\"\n      [ngClass]=\"\n        canZwap\n          ? 'bg-orange-500/5 border-orange-500/40 hover:border-orange-500/80 hover:bg-orange-500/10 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:-translate-y-1 cursor-pointer'\n          : 'bg-black/10 border-white/5 opacity-40 grayscale cursor-not-allowed'\n      \"\n    >\n      <!-- Active glow filter -->\n      @if (canZwap) {\n        <div\n          class=\"absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity\"\n        ></div>\n      }\n\n      <!-- Icon Box -->\n      <div\n        class=\"w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg relative z-10 mb-2 transition-transform duration-300 group-hover:scale-105\"\n        [ngClass]=\"{ 'shadow-[0_0_20px_rgba(249,115,22,0.5)] animate-pulse': canZwap }\"\n      >\n        <svg\n          viewBox=\"0 0 24 24\"\n          class=\"h-7 w-7 text-white\"\n          fill=\"none\"\n          stroke=\"currentColor\"\n          stroke-width=\"2.2\"\n          aria-hidden=\"true\"\n        >\n          <path d=\"M7 7h10v10\" />\n          <path d=\"m17 7-4 4M17 17H7V7\" />\n          <path d=\"m7 17 4-4\" />\n        </svg>\n      </div>\n\n      <span\n        class=\"font-display font-black text-sm tracking-[0.15em] relative z-10 uppercase\"\n        [ngClass]=\"canZwap ? 'text-orange-400' : 'text-text-muted/60'\"\n        >ZWAP</span\n      >\n\n      <!-- Floating Count Indicator -->\n      <div\n        class=\"absolute z-20 top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border transition-all\"\n        [ngClass]=\"\n          zwapsLeft > 0\n            ? 'bg-orange-500 text-white border-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.4)]'\n            : 'bg-black/40 text-gray-500 border-white/5'\n        \"\n      >\n        {{ zwapsLeft }}\n      </div>\n    </button>\n\n    <!-- BEZZERWIZZER Tile -->\n    <button\n      (click)=\"bezzerwizzerClick.emit()\"\n      [disabled]=\"!canBezzerwizzer\"\n      class=\"flex-1 flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300 group relative overflow-hidden\"\n      [ngClass]=\"\n        canBezzerwizzer\n          ? 'bg-purple-500/5 border-purple-500/40 hover:border-purple-500/80 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:-translate-y-1 cursor-pointer'\n          : 'bg-black/10 border-white/5 opacity-40 grayscale cursor-not-allowed'\n      \"\n    >\n      <!-- Active glow filter -->\n      @if (canBezzerwizzer) {\n        <div\n          class=\"absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity\"\n        ></div>\n      }\n\n      <!-- Icon Box -->\n      <div\n        class=\"w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg relative z-10 mb-2 transition-transform duration-300 group-hover:scale-105\"\n        [ngClass]=\"{ 'shadow-[0_0_20px_rgba(168,85,247,0.5)] animate-pulse': canBezzerwizzer }\"\n      >\n        <svg\n          viewBox=\"0 0 24 24\"\n          class=\"h-7 w-7 text-white\"\n          fill=\"none\"\n          stroke=\"currentColor\"\n          stroke-width=\"2\"\n          aria-hidden=\"true\"\n        >\n          <path d=\"m12 3 2.4 5.2L20 9l-4 4 .9 5.7L12 16l-4.9 2.7L8 13 4 9l5.6-.8L12 3Z\" />\n        </svg>\n      </div>\n\n      <span\n        class=\"font-display font-black text-sm tracking-[0.15em] relative z-10 uppercase\"\n        [ngClass]=\"canBezzerwizzer ? 'text-purple-400' : 'text-text-muted/60'\"\n        >BEZZER</span\n      >\n\n      <!-- Floating Count Indicator -->\n      <div\n        class=\"absolute z-20 top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border transition-all\"\n        [ngClass]=\"\n          bezzerwizzersLeft > 0\n            ? 'bg-purple-500 text-white border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.4)]'\n            : 'bg-black/40 text-gray-500 border-white/5'\n        \"\n      >\n        {{ bezzerwizzersLeft }}\n      </div>\n    </button>\n  </div>\n</div>\n", styles: [":host { display: block; height: 100%; }\n\n.skip-preparation-button { padding: .36rem .58rem; border: 1px solid rgb(255 255 255 / .18); border-radius: .65rem; color: rgb(255 255 255 / .78); font-size: .68rem; font-weight: 800; letter-spacing: .04em; transition: .2s ease; }\n.skip-preparation-button:not(:disabled):hover { border-color: var(--color-accent); color: white; background: rgb(255 255 255 / .08); }\n.skip-preparation-button:disabled { opacity: .5; cursor: default; }\n\nbutton:not(:disabled)::after {\n  content: '';\n  position: absolute;\n  inset: -50% -100%;\n  z-index: 1;\n  background: linear-gradient(105deg, transparent 42%, rgb(255 255 255 / 0.16), transparent 58%);\n  transform: translateX(-40%);\n  transition: transform 600ms ease;\n  pointer-events: none;\n}\n\nbutton:not(:disabled):hover::after { transform: translateX(40%); }\n\n@media (prefers-reduced-motion: reduce) {\n  button::after { display: none; }\n}\n"] }]
    }], null, { zwapsLeft: [{
            type: Input
        }], bezzerwizzersLeft: [{
            type: Input
        }], canZwap: [{
            type: Input
        }], canBezzerwizzer: [{
            type: Input
        }], canSkipPreparation: [{
            type: Input
        }], skipVotes: [{
            type: Input
        }], playerCount: [{
            type: Input
        }], zwapClick: [{
            type: Output
        }], bezzerwizzerClick: [{
            type: Output
        }], skipPreparationClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TacticalPanelComponent, { className: "TacticalPanelComponent", filePath: "src/app/pages/game/components/tactical-panel/tactical-panel.component.ts", lineNumber: 11 }); })();
