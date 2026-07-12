import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';
import * as i0 from "@angular/core";
export class AppComponent {
    title = 'Bezzerwizzer Online';
    static ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "min-h-[100dvh]", "relative", "overflow-x-hidden"], [1, "fixed", "top-0", "left-0", "w-full", "h-full", "pointer-events-none", "z-[-1]"], [1, "absolute", "top-1/4", "left-1/4", "w-96", "h-96", "bg-primary/10", "rounded-full", "blur-[100px]", "animate-pulse-glow"], [1, "absolute", "bottom-1/4", "right-1/4", "w-96", "h-96", "bg-accent/10", "rounded-full", "blur-[100px]", "animate-pulse-glow", 2, "animation-delay", "2s"], [1, "mx-auto", "w-full", "max-w-[1600px]", "px-3", "py-3", "sm:px-5", "sm:py-5", "lg:px-8", "lg:py-6", "relative", "z-10", "min-h-[100dvh]", "flex", "flex-col"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "div", 1);
            i0.ɵɵelement(2, "div", 2)(3, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵelement(5, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "app-snackbar");
            i0.ɵɵelementEnd();
        } }, dependencies: [RouterOutlet, SnackbarComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [RouterOutlet, SnackbarComponent], template: "<main class=\"min-h-[100dvh] relative overflow-x-hidden\">\n  <!-- Background decorative elements -->\n  <div class=\"fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]\">\n    <div class=\"absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow\"></div>\n    <div class=\"absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow\" style=\"animation-delay: 2s;\"></div>\n  </div>\n\n  <!-- Main Content -->\n  <div class=\"mx-auto w-full max-w-[1600px] px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-6 relative z-10 min-h-[100dvh] flex flex-col\">\n    <router-outlet></router-outlet>\n  </div>\n  <app-snackbar></app-snackbar>\n</main>\n", styles: ["/* App component styles */\n/* Add custom styles here if needed */\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 12 }); })();
