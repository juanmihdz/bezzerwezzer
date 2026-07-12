import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import * as i0 from "@angular/core";
const _c0 = (a0, a1, a2) => [a0, a1, a2];
function TimerComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtext(1, "SEG");
    i0.ɵɵelementEnd();
} }
function TimerComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.glowClass);
} }
export class TimerComponent {
    total;
    remaining;
    size = 'md';
    get circumference() {
        return 2 * Math.PI * 42;
    }
    get dashOffset() {
        const percentage = this.remaining / this.total;
        return this.circumference * (1 - percentage);
    }
    get isLowTime() {
        return this.remaining <= 10 && this.remaining > 0;
    }
    get colorClass() {
        if (this.remaining > 15)
            return 'text-primary-light';
        if (this.remaining > 10)
            return 'text-warning';
        return 'text-incorrect';
    }
    get glowClass() {
        if (this.remaining > 15)
            return 'bg-primary/30';
        if (this.remaining > 10)
            return 'bg-warning/30';
        return 'bg-incorrect/30';
    }
    sizeClasses = {
        sm: 'w-12 h-12',
        md: 'w-24 h-24',
        lg: 'w-32 h-32',
    };
    textClasses = {
        sm: 'text-lg',
        md: 'text-3xl',
        lg: 'text-5xl',
    };
    static ɵfac = function TimerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TimerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimerComponent, selectors: [["app-timer"]], inputs: { total: "total", remaining: "remaining", size: "size" }, decls: 9, vars: 18, consts: [[1, "relative", "flex", "items-center", "justify-center", 3, "ngClass"], ["viewBox", "0 0 100 100", "aria-hidden", "true", 1, "absolute", "inset-0", "w-full", "h-full", "transform", "-rotate-90"], ["stroke-width", "8", "fill", "transparent", "r", "42", "cx", "50", "cy", "50", 1, "text-border", "transition-colors"], ["stroke-width", "8", "stroke-linecap", "round", "fill", "transparent", "r", "42", "cx", "50", "cy", "50", 1, "transition-all", "duration-1000", "ease-linear", 3, "ngClass"], [1, "relative", "z-10", "flex", "flex-col", "items-center", "justify-center"], [1, "font-display", "font-black", "leading-none", 3, "ngClass"], [1, "text-[0.65rem]", "font-bold", "uppercase", "tracking-widest", "text-text-muted", "mt-1"], [1, "absolute", "inset-0", "rounded-full", "blur-xl", "animate-pulse-glow", "z-0", 3, "ngClass"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 1);
            i0.ɵɵelement(2, "circle", 2)(3, "circle", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "div", 4)(5, "span", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(7, TimerComponent_Conditional_7_Template, 2, 0, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(8, TimerComponent_Conditional_8_Template, 1, 1, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.sizeClasses[ctx.size]);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("stroke", "currentColor");
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("stroke", "currentColor")("stroke-dasharray", ctx.circumference)("stroke-dashoffset", ctx.dashOffset);
            i0.ɵɵproperty("ngClass", ctx.colorClass);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(14, _c0, ctx.textClasses[ctx.size], ctx.colorClass, ctx.isLowTime ? "animate-pulse" : ""));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.remaining, " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.size !== "sm" ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLowTime ? 8 : -1);
        } }, dependencies: [NgClass], styles: ["// Timer component styles"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimerComponent, [{
        type: Component,
        args: [{ selector: 'app-timer', standalone: true, imports: [NgClass], template: "<div class=\"relative flex items-center justify-center\" [ngClass]=\"sizeClasses[size]\">\n  <!-- Background Circle -->\n  <svg\n    class=\"absolute inset-0 w-full h-full transform -rotate-90\"\n    viewBox=\"0 0 100 100\"\n    aria-hidden=\"true\"\n  >\n    <circle\n      class=\"text-border transition-colors\"\n      [style.stroke]=\"'currentColor'\"\n      stroke-width=\"8\"\n      fill=\"transparent\"\n      r=\"42\"\n      cx=\"50\"\n      cy=\"50\"\n    />\n\n    <!-- Progress Circle -->\n    <circle\n      class=\"transition-all duration-1000 ease-linear\"\n      [ngClass]=\"colorClass\"\n      [style.stroke]=\"'currentColor'\"\n      stroke-width=\"8\"\n      stroke-linecap=\"round\"\n      fill=\"transparent\"\n      r=\"42\"\n      cx=\"50\"\n      cy=\"50\"\n      [style.strokeDasharray]=\"circumference\"\n      [style.strokeDashoffset]=\"dashOffset\"\n    />\n  </svg>\n\n  <!-- Center Text -->\n  <div class=\"relative z-10 flex flex-col items-center justify-center\">\n    <span\n      class=\"font-display font-black leading-none\"\n      [ngClass]=\"[textClasses[size], colorClass, isLowTime ? 'animate-pulse' : '']\"\n    >\n      {{ remaining }}\n    </span>\n    @if (size !== 'sm') {\n      <span class=\"text-[0.65rem] font-bold uppercase tracking-widest text-text-muted mt-1\"\n        >SEG</span\n      >\n    }\n  </div>\n\n  <!-- Pulse Glow for low time -->\n  @if (isLowTime) {\n    <div\n      class=\"absolute inset-0 rounded-full blur-xl animate-pulse-glow z-0\"\n      [ngClass]=\"glowClass\"\n    ></div>\n  }\n</div>\n", styles: ["// Timer component styles\n"] }]
    }], null, { total: [{
            type: Input,
            args: [{ required: true }]
        }], remaining: [{
            type: Input,
            args: [{ required: true }]
        }], size: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TimerComponent, { className: "TimerComponent", filePath: "src/app/shared/components/timer/timer.component.ts", lineNumber: 11 }); })();
