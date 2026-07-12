import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import * as i0 from "@angular/core";
const _c0 = a0 => ({ "animate-bounce-in": a0 });
const _c1 = (a0, a1) => [a0, a1];
function PlayerAvatarComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1, "\uD83D\uDC51");
    i0.ɵɵelementEnd();
} }
function PlayerAvatarComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", ctx_r0.color);
} }
function PlayerAvatarComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.isActive ? "bg-white/20 text-white glass border-white/40" : "text-text-muted bg-surface-elevated/50 border border-border/30");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.username, " ");
} }
export class PlayerAvatarComponent {
    username;
    color;
    size = 'md';
    isActive = false;
    showName = true;
    showCrown = false;
    animateInit = true;
    get initial() {
        return this.username ? this.username.charAt(0).toUpperCase() : '?';
    }
    sizeClasses = {
        sm: 'w-10 h-10 text-xl border-2 border-white/20',
        md: 'w-16 h-16 text-3xl border-3 border-white/20',
        lg: 'w-24 h-24 text-5xl border-4 border-white/20',
    };
    static ɵfac = function PlayerAvatarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PlayerAvatarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PlayerAvatarComponent, selectors: [["app-player-avatar"]], inputs: { username: "username", color: "color", size: "size", isActive: "isActive", showName: "showName", showCrown: "showCrown" }, decls: 7, vars: 15, consts: [[1, "relative", "flex", "flex-col", "items-center", "justify-center", "group", 3, "ngClass"], [1, "relative", "flex", "items-center", "justify-center", "rounded-full", "font-display", "font-black", "text-white", "shadow-xl", "transition-all", "duration-300", "z-10", 3, "ngClass"], [1, "drop-shadow-md"], [1, "absolute", "-top-3", "-right-2", "text-2xl", "transform", "rotate-12", "animate-float"], [1, "absolute", "top-0", "left-1/2", "-translate-x-1/2", "w-full", "h-full", "rounded-full", "blur-xl", "z-0", "animate-pulse-glow", 3, "backgroundColor"], [1, "mt-3", "px-3", "py-1", "rounded-full", "text-sm", "font-semibold", "truncate", "max-w-[120px]", "text-center", "z-10", "transition-colors", 3, "ngClass"], [1, "absolute", "top-0", "left-1/2", "-translate-x-1/2", "w-full", "h-full", "rounded-full", "blur-xl", "z-0", "animate-pulse-glow"]], template: function PlayerAvatarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, PlayerAvatarComponent_Conditional_4_Template, 2, 0, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, PlayerAvatarComponent_Conditional_5_Template, 1, 2, "div", 4);
            i0.ɵɵconditionalCreate(6, PlayerAvatarComponent_Conditional_6_Template, 2, 2, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c0, ctx.animateInit));
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("background-color", ctx.color)("box-shadow", ctx.isActive ? "0 0 25px " + ctx.color + "80, inset 0 0 10px rgba(255,255,255,0.3)" : "inset 0 0 10px rgba(255,255,255,0.1)");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(12, _c1, ctx.sizeClasses[ctx.size], ctx.isActive ? "scale-110 shadow-2xl z-20" : "group-hover:scale-105"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.initial);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showCrown ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isActive ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showName ? 6 : -1);
        } }, dependencies: [NgClass], styles: ["// Player Avatar component styles"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlayerAvatarComponent, [{
        type: Component,
        args: [{ selector: 'app-player-avatar', standalone: true, imports: [NgClass], template: "<div\n  class=\"relative flex flex-col items-center justify-center group\"\n  [ngClass]=\"{ 'animate-bounce-in': animateInit }\"\n>\n  <!-- Avatar Circle -->\n  <div\n    class=\"relative flex items-center justify-center rounded-full font-display font-black text-white shadow-xl transition-all duration-300 z-10\"\n    [ngClass]=\"[\n      sizeClasses[size],\n      isActive ? 'scale-110 shadow-2xl z-20' : 'group-hover:scale-105',\n    ]\"\n    [style.backgroundColor]=\"color\"\n    [style.boxShadow]=\"\n      isActive\n        ? '0 0 25px ' + color + '80, inset 0 0 10px rgba(255,255,255,0.3)'\n        : 'inset 0 0 10px rgba(255,255,255,0.1)'\n    \"\n  >\n    <span class=\"drop-shadow-md\">{{ initial }}</span>\n\n    <!-- Crown for host or winner -->\n    @if (showCrown) {\n      <div class=\"absolute -top-3 -right-2 text-2xl transform rotate-12 animate-float\">\uD83D\uDC51</div>\n    }\n  </div>\n\n  <!-- Active Glow Background -->\n  @if (isActive) {\n    <div\n      class=\"absolute top-0 left-1/2 -translate-x-1/2 w-full h-full rounded-full blur-xl z-0 animate-pulse-glow\"\n      [style.backgroundColor]=\"color\"\n    ></div>\n  }\n\n  <!-- Username Label -->\n  @if (showName) {\n    <div\n      class=\"mt-3 px-3 py-1 rounded-full text-sm font-semibold truncate max-w-[120px] text-center z-10 transition-colors\"\n      [ngClass]=\"\n        isActive\n          ? 'bg-white/20 text-white glass border-white/40'\n          : 'text-text-muted bg-surface-elevated/50 border border-border/30'\n      \"\n    >\n      {{ username }}\n    </div>\n  }\n</div>\n", styles: ["// Player Avatar component styles\n"] }]
    }], null, { username: [{
            type: Input,
            args: [{ required: true }]
        }], color: [{
            type: Input,
            args: [{ required: true }]
        }], size: [{
            type: Input
        }], isActive: [{
            type: Input
        }], showName: [{
            type: Input
        }], showCrown: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PlayerAvatarComponent, { className: "PlayerAvatarComponent", filePath: "src/app/shared/components/player-avatar/player-avatar.component.ts", lineNumber: 11 }); })();
