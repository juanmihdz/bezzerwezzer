import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TurnIndicatorComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    i0.ɵɵelement(3, "div", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 4)(5, "span", 5);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 6);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("border-color", ctx_r0.isMyTurn ? "oklch(0.58 0.28 290 / 0.4)" : "rgba(255,255,255,0.08)")("box-shadow", ctx_r0.isMyTurn ? "0 0 1.5625rem oklch(0.58 0.28 290 / 0.15)" : "none");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-color", ctx_r0.playerColor)("box-shadow", "0 0 0.75rem " + ctx_r0.playerColor);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.phaseText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r0.isMyTurn ? "text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent" : "text-white");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.isMyTurn ? "\u00A1Es tu Turno!" : "Turno de " + ctx_r0.playerName, " ");
} }
export class TurnIndicatorComponent {
    playerName = '';
    playerColor = '';
    isMyTurn = false;
    phaseText = 'FASE DE JUEGO';
    static ɵfac = function TurnIndicatorComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TurnIndicatorComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TurnIndicatorComponent, selectors: [["app-turn-indicator"]], inputs: { playerName: "playerName", playerColor: "playerColor", isMyTurn: "isMyTurn", phaseText: "phaseText" }, decls: 1, vars: 1, consts: [[1, "flex", "items-center", "justify-center", "py-2", "sm:py-3"], [1, "turn-pill", "glass", "px-4", "sm:px-7", "py-3", "sm:py-3.5", "rounded-full", "flex", "items-center", "gap-3", "sm:gap-5", "animate-slide-up", "shadow-lg", "border", "border-white/10"], [1, "relative", "w-4.5", "h-4.5", "rounded-full", "shadow-inner", "border", "border-white/20"], [1, "absolute", "inset-0", "bg-inherit", "rounded-full", "animate-ping", "opacity-75"], [1, "flex", "flex-col"], [1, "text-xs", "font-black", "uppercase", "tracking-[0.18em]", "text-text-muted/80", "leading-none", "mb-1"], [1, "text-lg", "sm:text-2xl", "font-black", "font-display", "leading-none", "tracking-wide", 3, "ngClass"]], template: function TurnIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, TurnIndicatorComponent_Conditional_0_Template, 9, 11, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.playerName ? 0 : -1);
        } }, dependencies: [CommonModule, i1.NgClass], styles: [".turn-pill[_ngcontent-%COMP%] { position: relative; max-width: min(100%, 40rem); overflow: hidden; border-color: rgb(170 130 232 / .38) !important; background: linear-gradient(115deg, rgb(24 18 53 / .96), rgb(7 10 29 / .95)); box-shadow: 0 0.875rem 2.375rem rgb(0 0 0 / .42), 0 0 2rem rgb(104 66 188 / .1), inset 0 0.0625rem 0 rgb(255 255 255 / .13) !important; }\n.turn-pill[_ngcontent-%COMP%]::after { content: ''; position: absolute; right: 10%; bottom: 0; left: 10%; height: 0.0625rem; background: linear-gradient(90deg, transparent, rgb(138 96 226 / .72), rgb(79 181 234 / .58), transparent); box-shadow: 0 0 0.4375rem rgb(123 96 210 / .34); }\n\n@media (max-width: 26.25rem) {\n  .turn-pill[_ngcontent-%COMP%] { width: 100%; border-radius: 1.1rem; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TurnIndicatorComponent, [{
        type: Component,
        args: [{ selector: 'app-turn-indicator', standalone: true, imports: [CommonModule], template: "@if (playerName) {\n  <div class=\"flex items-center justify-center py-2 sm:py-3\">\n    <div\n      class=\"turn-pill glass px-4 sm:px-7 py-3 sm:py-3.5 rounded-full flex items-center gap-3 sm:gap-5 animate-slide-up shadow-lg border border-white/10\"\n      [style.borderColor]=\"isMyTurn ? 'oklch(0.58 0.28 290 / 0.4)' : 'rgba(255,255,255,0.08)'\"\n      [style.boxShadow]=\"isMyTurn ? '0 0 1.5625rem oklch(0.58 0.28 290 / 0.15)' : 'none'\"\n    >\n      <!-- Pulsing LED indicator in player color -->\n      <div\n        class=\"relative w-4.5 h-4.5 rounded-full shadow-inner border border-white/20\"\n        [style.backgroundColor]=\"playerColor\"\n        [style.boxShadow]=\"'0 0 0.75rem ' + playerColor\"\n      >\n        <div class=\"absolute inset-0 bg-inherit rounded-full animate-ping opacity-75\"></div>\n      </div>\n      <div class=\"flex flex-col\">\n        <span\n          class=\"text-xs font-black uppercase tracking-[0.18em] text-text-muted/80 leading-none mb-1\"\n          >{{ phaseText }}</span\n        >\n        <span\n          class=\"text-lg sm:text-2xl font-black font-display leading-none tracking-wide\"\n          [ngClass]=\"\n            isMyTurn\n              ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent'\n              : 'text-white'\n          \"\n        >\n          {{ isMyTurn ? '\u00A1Es tu Turno!' : 'Turno de ' + playerName }}\n        </span>\n      </div>\n    </div>\n  </div>\n}\n", styles: [".turn-pill { position: relative; max-width: min(100%, 40rem); overflow: hidden; border-color: rgb(170 130 232 / .38) !important; background: linear-gradient(115deg, rgb(24 18 53 / .96), rgb(7 10 29 / .95)); box-shadow: 0 0.875rem 2.375rem rgb(0 0 0 / .42), 0 0 2rem rgb(104 66 188 / .1), inset 0 0.0625rem 0 rgb(255 255 255 / .13) !important; }\n.turn-pill::after { content: ''; position: absolute; right: 10%; bottom: 0; left: 10%; height: 0.0625rem; background: linear-gradient(90deg, transparent, rgb(138 96 226 / .72), rgb(79 181 234 / .58), transparent); box-shadow: 0 0 0.4375rem rgb(123 96 210 / .34); }\n\n@media (max-width: 26.25rem) {\n  .turn-pill { width: 100%; border-radius: 1.1rem; }\n}\n"] }]
    }], null, { playerName: [{
            type: Input
        }], playerColor: [{
            type: Input
        }], isMyTurn: [{
            type: Input
        }], phaseText: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TurnIndicatorComponent, { className: "TurnIndicatorComponent", filePath: "src/app/pages/game/components/turn-indicator/turn-indicator.component.ts", lineNumber: 11 }); })();
