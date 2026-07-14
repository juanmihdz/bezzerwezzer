import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { WebsocketService } from '../../core/services/websocket.service';
import { SnackbarService } from '../../core/services/snackbar.service';
import { GameStateService } from '../../core/services/game-state.service';
import { firstValueFrom, filter, take, timeout } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function HomeComponent_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "ENTRAR A LA SALA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 42);
    i0.ɵɵtext(3, "\u2192");
    i0.ɵɵelementEnd();
} }
function HomeComponent_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 26);
    i0.ɵɵelement(1, "circle", 43)(2, "path", 44);
    i0.ɵɵelementEnd();
} }
function HomeComponent_Conditional_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "NUEVA PARTIDA");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 45);
    i0.ɵɵelement(3, "path", 46);
    i0.ɵɵelementEnd();
} }
function HomeComponent_Conditional_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 41);
    i0.ɵɵelement(1, "circle", 43)(2, "path", 44);
    i0.ɵɵelementEnd();
} }
export class HomeComponent {
    router = inject(Router);
    authService = inject(AuthService);
    wsService = inject(WebsocketService);
    snackbarService = inject(SnackbarService);
    gameState = inject(GameStateService);
    route = inject(ActivatedRoute);
    usernameJoin = '';
    roomCode = '';
    usernameCreate = '';
    isLoadingJoin = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoadingJoin" }] : /* istanbul ignore next */ []));
    isLoadingCreate = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isLoadingCreate" }] : /* istanbul ignore next */ []));
    constructor() {
        const roomCode = this.route.snapshot.queryParamMap.get('room')?.trim().toUpperCase();
        if (roomCode && /^[A-Z0-9]{6}$/.test(roomCode)) {
            this.roomCode = roomCode;
        }
    }
    isValidJoin() {
        return this.usernameJoin.trim().length >= 2 && this.roomCode.trim().length === 6;
    }
    isValidCreate() {
        return this.usernameCreate.trim().length >= 2;
    }
    async joinRoom() {
        if (!this.isValidJoin())
            return;
        this.isLoadingJoin.set(true);
        try {
            const code = this.roomCode.toUpperCase().trim();
            const success = await this.authService.loginAsGuest(this.usernameJoin.trim());
            if (success) {
                await this.wsService.connect(this.authService.token());
                this.gameState.connectToRoom(code);
                this.wsService.send(`/app/room/${code}/join`, {});
                await this.router.navigate(['/lobby', code]);
                this.isLoadingJoin.set(false);
            }
            else {
                this.isLoadingJoin.set(false);
                this.snackbarService.show('Error al conectar con el servidor', 'error');
            }
        }
        catch (e) {
            this.isLoadingJoin.set(false);
            console.error(e);
        }
    }
    async createRoom() {
        if (!this.isValidCreate())
            return;
        this.isLoadingCreate.set(true);
        try {
            const success = await this.authService.loginAsGuest(this.usernameCreate.trim());
            if (success) {
                await this.wsService.connect(this.authService.token());
                const roomCreated = firstValueFrom(this.wsService.subscribeToPersonal().pipe(filter((event) => event.type === 'ROOM_CREATED'), take(1), timeout(10000)));
                this.wsService.send('/app/room/create', {});
                const event = await roomCreated;
                const code = event.payload.roomCode;
                this.gameState.connectToRoom(code);
                this.wsService.send(`/app/room/${code}/join`, {});
                await this.router.navigate(['/lobby', code]);
                this.isLoadingCreate.set(false);
            }
            else {
                this.isLoadingCreate.set(false);
                this.snackbarService.show('Error al conectar con el servidor', 'error');
            }
        }
        catch (e) {
            this.isLoadingCreate.set(false);
            this.snackbarService.show('No se pudo crear la sala', 'error');
            console.error(e);
        }
    }
    static ɵfac = function HomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 63, vars: 7, consts: [[1, "flex", "flex-1", "w-full", "items-center", "justify-center", "px-3", "py-8", "sm:px-5", "sm:py-10", "animate-fade-in"], [1, "flex", "w-full", "max-w-6xl", "flex-col", "items-center", "justify-center", "gap-9", "md:gap-11"], [1, "text-center", "animate-slide-up", "w-full"], [1, "relative", "inline-block"], [1, "mx-auto", "mb-5", "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-gradient-to-br", "from-primary", "to-accent", "shadow-[0_0_2.1875rem_oklch(0.58_0.28_290/0.35)]", "sm:h-16", "sm:w-16"], ["viewBox", "0 0 48 48", "fill", "none", "aria-hidden", "true", 1, "h-9", "w-9", "text-white"], ["d", "M12 10h17c6 0 10 3 10 8 0 4-2 6-6 7 5 1 7 4 7 8 0 6-5 9-12 9H12V10Z", "stroke", "currentColor", "stroke-width", "4", "stroke-linejoin", "round"], ["d", "M20 18h8c2 0 3 1 3 3s-1 3-3 3h-8v-6Zm0 13h9c2 0 3 1 3 3s-1 3-3 3h-9v-6Z", "fill", "currentColor"], [1, "relative", "z-10", "mb-4", "text-[clamp(2.65rem,9vw,5.5rem)]", "font-black", "tracking-[-0.06em]", "text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-primary-light", "via-white", "to-accent", "drop-shadow-2xl", "leading-none"], [1, "absolute", "inset-0", "rounded-full", "bg-primary/20", "blur-3xl", "z-0", "animate-pulse-glow"], [1, "text-lg", "font-medium", "tracking-wide", "text-text-muted", "sm:text-xl", "md:text-2xl", "mt-2"], [1, "grid", "w-full", "grid-cols-1", "items-stretch", "gap-6", "delay-200", "animate-slide-up", "md:grid-cols-2", "md:gap-7", "xl:gap-8"], [1, "home-card", "glass", "mx-auto", "flex", "h-full", "w-full", "max-w-[32rem]", "flex-col", "p-6", "sm:p-7", "lg:p-8"], [1, "home-card-title", "mb-5", "flex", "items-center", "justify-center", "gap-3", "px-2", "py-1", "text-center", "text-2xl", "font-extrabold", "leading-tight", "text-white", "sm:text-3xl"], [1, "home-card-icon", "bg-primary/15", "text-primary-light"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M8.4 7.5h7.2a5.4 5.4 0 0 1 5.2 4l1 3.8a2.7 2.7 0 0 1-4.6 2.5l-1.8-1.9H8.6l-1.8 1.9a2.7 2.7 0 0 1-4.6-2.5l1-3.8a5.4 5.4 0 0 1 5.2-4Z"], ["d", "M7.2 10.5v4M5.2 12.5h4M16.8 11.3h.01M19 13.5h.01"], [1, "flex", "flex-col", "gap-5", "mb-6"], [1, "space-y-2", "text-center"], [1, "block", "text-sm", "font-black", "uppercase", "tracking-widest", "text-text-muted"], ["type", "text", "placeholder", "Ej: Maria", 1, "input-glass", "block", "w-full", "rounded-xl", "px-5", "py-3.5", "text-center", "text-lg", "font-bold", "transition-all", "duration-300", "placeholder-[oklch(0.6_0.02_270)]", "sm:text-xl", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "text", "placeholder", "ABCDEF", "maxlength", "6", 1, "input-glass", "block", "w-full", "rounded-xl", "py-3.5", "pl-[calc(1.25rem+0.24em)]", "pr-5", "text-center", "text-3xl", "font-black", "uppercase", "tracking-[0.24em]", "transition-all", "duration-300", "placeholder-[oklch(0.6_0.02_270)]", "sm:text-4xl", "sm:tracking-[0.3em]", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "mt-auto", "pt-1"], [1, "btn-primary", "w-full", "text-lg", "font-black", "py-4", "px-5", "rounded-2xl", "uppercase", "tracking-[0.06em]", "sm:text-xl", 3, "click", "disabled"], [1, "relative", "z-10", "flex", "items-center", "justify-center", "gap-4"], ["viewBox", "0 0 24 24", "fill", "none", "aria-label", "Conectando", 1, "h-6", "w-6", "animate-spin"], [1, "home-card", "glass", "relative", "mx-auto", "flex", "h-full", "w-full", "max-w-[32rem]", "flex-col", "p-6", "sm:p-7", "lg:p-8"], [1, "pointer-events-none", "absolute", "top-0", "right-0", "h-60", "w-60", "rounded-bl-[9.375rem]", "bg-accent/10", "blur-3xl"], [1, "home-card-title", "relative", "z-10", "mb-5", "flex", "items-center", "justify-center", "gap-3", "px-2", "py-1", "text-center", "text-2xl", "font-extrabold", "leading-tight", "text-white", "sm:text-3xl"], [1, "home-card-icon", "bg-accent/15", "text-accent"], ["d", "m3 7 4.5 4L12 4l4.5 7L21 7l-1.6 10H4.6L3 7Z"], ["d", "M5 20h14"], [1, "relative", "z-10", "flex", "flex-col", "gap-5", "mb-6"], ["type", "text", "placeholder", "Ej: Carlos", 1, "input-glass", "block", "w-full", "rounded-xl", "px-5", "py-3.5", "text-center", "text-lg", "font-bold", "transition-all", "duration-300", "placeholder-[oklch(0.6_0.02_270)]", "sm:text-xl", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "relative", "overflow-hidden", "rounded-xl", "bg-[#110e19]/60", "p-4", "text-center", "shadow-inner", "backdrop-blur-md", "sm:px-5"], [1, "absolute", "left-0", "top-0", "h-1", "w-full", "bg-gradient-to-r", "from-transparent", "via-accent", "to-transparent", "opacity-50"], [1, "text-base", "leading-relaxed", "text-gray-300"], [1, "mb-1.5", "flex", "items-center", "justify-center", "gap-2", "text-base", "font-black", "text-accent", "sm:text-lg"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-5", "w-5", "shrink-0"], ["d", "M9 18h6M10 22h4M8.2 14.5A7 7 0 1 1 15.8 14.5C14.7 15.3 14 16.1 14 18h-4c0-1.9-.7-2.7-1.8-3.5Z"], ["viewBox", "0 0 24 24", "fill", "none", "aria-label", "Creando sala", 1, "h-6", "w-6", "animate-spin"], [1, "text-2xl", "transition-transform", "group-hover:translate-x-2"], ["cx", "12", "cy", "12", "r", "9", "stroke", "currentColor", "stroke-width", "3", "opacity", ".25"], ["d", "M21 12a9 9 0 0 0-9-9", "stroke", "currentColor", "stroke-width", "3", "stroke-linecap", "round"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "aria-hidden", "true", 1, "h-6", "w-6"], ["d", "m12 2 1.2 4.2L17 8l-3.8 1.8L12 14l-1.2-4.2L7 8l3.8-1.8L12 2ZM19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14ZM5 13l.8 2.7L8.5 17l-2.7 1.3L5 21l-.8-2.7L1.5 17l2.7-1.3L5 13Z"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 5);
            i0.ɵɵelement(6, "path", 6)(7, "path", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(8, "h1", 8);
            i0.ɵɵtext(9, " BEZZERWIZZER ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "p", 10);
            i0.ɵɵtext(12, " El Trivial Estrat\u00E9gico Online ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 11)(14, "div", 12)(15, "h2", 13)(16, "span", 14);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(17, "svg", 15);
            i0.ɵɵelement(18, "path", 16)(19, "path", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(20, "span");
            i0.ɵɵtext(21, "Unirse a Sala");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 18)(23, "div", 19)(24, "label", 20);
            i0.ɵɵtext(25, "Tu Nombre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "input", 21);
            i0.ɵɵtwoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_26_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.usernameJoin, $event) || (ctx.usernameJoin = $event); return $event; });
            i0.ɵɵlistener("keyup.enter", function HomeComponent_Template_input_keyup_enter_26_listener() { return ctx.joinRoom(); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 19)(28, "label", 20);
            i0.ɵɵtext(29, "C\u00F3digo de Sala");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "input", 22);
            i0.ɵɵtwoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_30_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.roomCode, $event) || (ctx.roomCode = $event); return $event; });
            i0.ɵɵlistener("keyup.enter", function HomeComponent_Template_input_keyup_enter_30_listener() { return ctx.joinRoom(); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "div", 23)(32, "button", 24);
            i0.ɵɵlistener("click", function HomeComponent_Template_button_click_32_listener() { return ctx.joinRoom(); });
            i0.ɵɵelementStart(33, "span", 25);
            i0.ɵɵconditionalCreate(34, HomeComponent_Conditional_34_Template, 4, 0)(35, HomeComponent_Conditional_35_Template, 3, 0, ":svg:svg", 26);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(36, "div", 27);
            i0.ɵɵelement(37, "div", 28);
            i0.ɵɵelementStart(38, "h2", 29)(39, "span", 30);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(40, "svg", 15);
            i0.ɵɵelement(41, "path", 31)(42, "path", 32);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(43, "span");
            i0.ɵɵtext(44, "Crear Sala");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 33)(46, "div", 19)(47, "label", 20);
            i0.ɵɵtext(48, "Tu Nombre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "input", 34);
            i0.ɵɵtwoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_49_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.usernameCreate, $event) || (ctx.usernameCreate = $event); return $event; });
            i0.ɵɵlistener("keyup.enter", function HomeComponent_Template_input_keyup_enter_49_listener() { return ctx.createRoom(); });
            i0.ɵɵelementEnd();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "div", 35);
            i0.ɵɵelement(51, "div", 36);
            i0.ɵɵelementStart(52, "p", 37)(53, "span", 38);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(54, "svg", 39);
            i0.ɵɵelement(55, "path", 40);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(56, " Tip Anfitri\u00F3n ");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(57, " T\u00FA configurar\u00E1s la partida y la iniciar\u00E1s cuando todos tus amigos est\u00E9n listos. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(58, "div", 23)(59, "button", 24);
            i0.ɵɵlistener("click", function HomeComponent_Template_button_click_59_listener() { return ctx.createRoom(); });
            i0.ɵɵelementStart(60, "span", 25);
            i0.ɵɵconditionalCreate(61, HomeComponent_Conditional_61_Template, 4, 0)(62, HomeComponent_Conditional_62_Template, 3, 0, ":svg:svg", 41);
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(26);
            i0.ɵɵtwoWayProperty("ngModel", ctx.usernameJoin);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.roomCode);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !ctx.isValidJoin());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.isLoadingJoin() ? 34 : 35);
            i0.ɵɵadvance(15);
            i0.ɵɵtwoWayProperty("ngModel", ctx.usernameCreate);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("disabled", !ctx.isValidCreate());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.isLoadingCreate() ? 61 : 62);
        } }, dependencies: [FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.MaxLengthValidator, i1.NgModel], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.home-card[_ngcontent-%COMP%] {\n  isolation: isolate;\n  min-height: 27.75rem;\n  min-width: 0;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  transition: transform 220ms ease, box-shadow 220ms ease;\n}\n\n.home-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.1875rem);\n  box-shadow:\n    0 1.875rem 4.5rem rgb(0 0 0 / 0.34),\n    inset 0 0.0625rem 0 rgb(255 255 255 / 0.1),\n    inset 0 0 0 0.0625rem rgb(255 255 255 / 0.045);\n}\n\n.home-card-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2.75rem;\n  height: 2.75rem;\n  flex: 0 0 2.75rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  box-shadow: inset 0 0.0625rem 0 rgb(255 255 255 / 0.07);\n}\n\n.home-card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.55rem;\n  height: 1.55rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.home-card-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: inline-flex;\n  min-height: 2.75rem;\n  align-items: center;\n}\n\n@media (max-width: 23.75rem) {\n  .home-card-title[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n\n  .home-card-icon[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 2.5rem;\n    flex-basis: 2.5rem;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', standalone: true, imports: [FormsModule], template: "<div class=\"flex flex-1 w-full items-center justify-center px-3 py-8 sm:px-5 sm:py-10 animate-fade-in\">\n  <div class=\"flex w-full max-w-6xl flex-col items-center justify-center gap-9 md:gap-11\">\n\n    <!-- Logo/Title Area -->\n    <div class=\"text-center animate-slide-up w-full\">\n      <div class=\"relative inline-block\">\n        <div class=\"mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-[0_0_2.1875rem_oklch(0.58_0.28_290/0.35)] sm:h-16 sm:w-16\">\n          <svg viewBox=\"0 0 48 48\" class=\"h-9 w-9 text-white\" fill=\"none\" aria-hidden=\"true\"><path d=\"M12 10h17c6 0 10 3 10 8 0 4-2 6-6 7 5 1 7 4 7 8 0 6-5 9-12 9H12V10Z\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linejoin=\"round\"/><path d=\"M20 18h8c2 0 3 1 3 3s-1 3-3 3h-8v-6Zm0 13h9c2 0 3 1 3 3s-1 3-3 3h-9v-6Z\" fill=\"currentColor\"/></svg>\n        </div>\n        <h1 class=\"relative z-10 mb-4 text-[clamp(2.65rem,9vw,5.5rem)] font-black tracking-[-0.06em] text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-white to-accent drop-shadow-2xl leading-none\">\n          BEZZERWIZZER\n        </h1>\n        <div class=\"absolute inset-0 rounded-full bg-primary/20 blur-3xl z-0 animate-pulse-glow\"></div>\n      </div>\n      <p class=\"text-lg font-medium tracking-wide text-text-muted sm:text-xl md:text-2xl mt-2\">\n        El Trivial Estrat\u00E9gico Online\n      </p>\n    </div>\n\n    <!-- Action Cards Container (Side by Side using Flexbox) -->\n    <div class=\"grid w-full grid-cols-1 items-stretch gap-6 delay-200 animate-slide-up md:grid-cols-2 md:gap-7 xl:gap-8\">\n\n      <!-- Join Room Card -->\n      <div class=\"home-card glass mx-auto flex h-full w-full max-w-[32rem] flex-col p-6 sm:p-7 lg:p-8\">\n        <h2 class=\"home-card-title mb-5 flex items-center justify-center gap-3 px-2 py-1 text-center text-2xl font-extrabold leading-tight text-white sm:text-3xl\">\n          <span class=\"home-card-icon bg-primary/15 text-primary-light\">\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M8.4 7.5h7.2a5.4 5.4 0 0 1 5.2 4l1 3.8a2.7 2.7 0 0 1-4.6 2.5l-1.8-1.9H8.6l-1.8 1.9a2.7 2.7 0 0 1-4.6-2.5l1-3.8a5.4 5.4 0 0 1 5.2-4Z\"/><path d=\"M7.2 10.5v4M5.2 12.5h4M16.8 11.3h.01M19 13.5h.01\"/></svg>\n          </span>\n          <span>Unirse a Sala</span>\n        </h2>\n\n        <div class=\"flex flex-col gap-5 mb-6\">\n          <div class=\"space-y-2 text-center\">\n            <label class=\"block text-sm font-black uppercase tracking-widest text-text-muted\">Tu Nombre</label>\n            <input type=\"text\" [(ngModel)]=\"usernameJoin\" placeholder=\"Ej: Maria\"\n              class=\"input-glass block w-full rounded-xl px-5 py-3.5 text-center text-lg font-bold transition-all duration-300 placeholder-[oklch(0.6_0.02_270)] sm:text-xl\"\n              (keyup.enter)=\"joinRoom()\">\n          </div>\n\n          <div class=\"space-y-2 text-center\">\n            <label class=\"block text-sm font-black uppercase tracking-widest text-text-muted\">C\u00F3digo de Sala</label>\n            <input type=\"text\" [(ngModel)]=\"roomCode\" placeholder=\"ABCDEF\"\n              class=\"input-glass block w-full rounded-xl py-3.5 pl-[calc(1.25rem+0.24em)] pr-5 text-center text-3xl font-black uppercase tracking-[0.24em] transition-all duration-300 placeholder-[oklch(0.6_0.02_270)] sm:text-4xl sm:tracking-[0.3em]\"\n              maxlength=\"6\"\n              (keyup.enter)=\"joinRoom()\">\n          </div>\n        </div>\n\n        <div class=\"mt-auto pt-1\">\n          <button (click)=\"joinRoom()\"\n            [disabled]=\"!isValidJoin()\"\n            class=\"btn-primary w-full text-lg font-black py-4 px-5 rounded-2xl uppercase tracking-[0.06em] sm:text-xl\">\n            <span class=\"relative z-10 flex items-center justify-center gap-4\">\n              @if (!isLoadingJoin()) {\n                <span>ENTRAR A LA SALA</span>\n                <span class=\"text-2xl transition-transform group-hover:translate-x-2\">\u2192</span>\n              } @else {\n                <svg class=\"h-6 w-6 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" aria-label=\"Conectando\"><circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\".25\"/><path d=\"M21 12a9 9 0 0 0-9-9\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>\n              }\n            </span>\n          </button>\n        </div>\n      </div>\n\n      <!-- Create Room Card -->\n      <div class=\"home-card glass relative mx-auto flex h-full w-full max-w-[32rem] flex-col p-6 sm:p-7 lg:p-8\">\n        <div class=\"pointer-events-none absolute top-0 right-0 h-60 w-60 rounded-bl-[9.375rem] bg-accent/10 blur-3xl\"></div>\n\n        <h2 class=\"home-card-title relative z-10 mb-5 flex items-center justify-center gap-3 px-2 py-1 text-center text-2xl font-extrabold leading-tight text-white sm:text-3xl\">\n          <span class=\"home-card-icon bg-accent/15 text-accent\">\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m3 7 4.5 4L12 4l4.5 7L21 7l-1.6 10H4.6L3 7Z\"/><path d=\"M5 20h14\"/></svg>\n          </span>\n          <span>Crear Sala</span>\n        </h2>\n\n        <div class=\"relative z-10 flex flex-col gap-5 mb-6\">\n          <div class=\"space-y-2 text-center\">\n            <label class=\"block text-sm font-black uppercase tracking-widest text-text-muted\">Tu Nombre</label>\n            <input type=\"text\" [(ngModel)]=\"usernameCreate\" placeholder=\"Ej: Carlos\"\n              class=\"input-glass block w-full rounded-xl px-5 py-3.5 text-center text-lg font-bold transition-all duration-300 placeholder-[oklch(0.6_0.02_270)] sm:text-xl\"\n              (keyup.enter)=\"createRoom()\">\n          </div>\n\n          <div class=\"relative overflow-hidden rounded-xl bg-[#110e19]/60 p-4 text-center shadow-inner backdrop-blur-md sm:px-5\">\n            <div class=\"absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-50\"></div>\n            <p class=\"text-base leading-relaxed text-gray-300\">\n              <span class=\"mb-1.5 flex items-center justify-center gap-2 text-base font-black text-accent sm:text-lg\">\n                <svg class=\"h-5 w-5 shrink-0\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><path d=\"M9 18h6M10 22h4M8.2 14.5A7 7 0 1 1 15.8 14.5C14.7 15.3 14 16.1 14 18h-4c0-1.9-.7-2.7-1.8-3.5Z\"/></svg>\n                Tip Anfitri\u00F3n\n              </span>\n              T\u00FA configurar\u00E1s la partida y la iniciar\u00E1s cuando todos tus amigos est\u00E9n listos.\n            </p>\n          </div>\n        </div>\n\n        <div class=\"mt-auto pt-1\">\n          <button (click)=\"createRoom()\"\n            [disabled]=\"!isValidCreate()\"\n            class=\"btn-primary w-full text-lg font-black py-4 px-5 rounded-2xl uppercase tracking-[0.06em] sm:text-xl\">\n            <span class=\"relative z-10 flex items-center justify-center gap-4\">\n              @if (!isLoadingCreate()) {\n                <span>NUEVA PARTIDA</span>\n                <svg class=\"h-6 w-6\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" aria-hidden=\"true\"><path d=\"m12 2 1.2 4.2L17 8l-3.8 1.8L12 14l-1.2-4.2L7 8l3.8-1.8L12 2ZM19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14ZM5 13l.8 2.7L8.5 17l-2.7 1.3L5 21l-.8-2.7L1.5 17l2.7-1.3L5 13Z\"/></svg>\n              } @else {\n                <svg class=\"h-6 w-6 animate-spin\" viewBox=\"0 0 24 24\" fill=\"none\" aria-label=\"Creando sala\"><circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\".25\"/><path d=\"M21 12a9 9 0 0 0-9-9\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>\n              }\n            </span>\n          </button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.home-card {\n  isolation: isolate;\n  min-height: 27.75rem;\n  min-width: 0;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  transition: transform 220ms ease, box-shadow 220ms ease;\n}\n\n.home-card:hover {\n  transform: translateY(-0.1875rem);\n  box-shadow:\n    0 1.875rem 4.5rem rgb(0 0 0 / 0.34),\n    inset 0 0.0625rem 0 rgb(255 255 255 / 0.1),\n    inset 0 0 0 0.0625rem rgb(255 255 255 / 0.045);\n}\n\n.home-card-icon {\n  display: inline-flex;\n  width: 2.75rem;\n  height: 2.75rem;\n  flex: 0 0 2.75rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  box-shadow: inset 0 0.0625rem 0 rgb(255 255 255 / 0.07);\n}\n\n.home-card-icon svg {\n  width: 1.55rem;\n  height: 1.55rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.home-card-title > span:last-child {\n  display: inline-flex;\n  min-height: 2.75rem;\n  align-items: center;\n}\n\n@media (max-width: 23.75rem) {\n  .home-card-title {\n    font-size: 1.35rem;\n  }\n\n  .home-card-icon {\n    width: 2.5rem;\n    height: 2.5rem;\n    flex-basis: 2.5rem;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 17 }); })();
