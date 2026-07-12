import { Component, inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
function RulesHelpComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 3);
    i0.ɵɵdomListener("click", function RulesHelpComponent_Conditional_5_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵdomElementStart(1, "section", 4);
    i0.ɵɵdomListener("click", function RulesHelpComponent_Conditional_5_Template_section_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵdomElement(2, "div", 5)(3, "div", 6);
    i0.ɵɵdomElementStart(4, "header", 7)(5, "div")(6, "span", 8);
    i0.ɵɵtext(7, "Gu\u00EDa r\u00E1pida");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(8, "h2", 9);
    i0.ɵɵtext(9, "Domina el tablero");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(10, "p");
    i0.ɵɵtext(11, "Lo esencial para empezar a jugar en menos de un minuto.");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(12, "button", 10);
    i0.ɵɵdomListener("click", function RulesHelpComponent_Conditional_5_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(13, "\u00D7");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(14, "div", 11)(15, "article", 12)(16, "span", 13);
    i0.ɵɵtext(17, "01");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(18, "div")(19, "h3");
    i0.ɵɵtext(20, "Empezar");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(21, "p");
    i0.ɵɵtext(22, "De 2 a 4 jugadores. Todos pulsan \u00ABListo\u00BB y el anfitri\u00F3n inicia.");
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(23, "article", 14)(24, "span", 13);
    i0.ɵɵtext(25, "02");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(26, "div")(27, "h3");
    i0.ɵɵtext(28, "Tus categor\u00EDas");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(29, "p");
    i0.ɵɵtext(30, "Asigna 1, 2, 3 y 4 puntos una vez. Se juega primero el 1 y luego hasta el 4.");
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(31, "article", 15)(32, "span", 13);
    i0.ɵɵtext(33, "03");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(34, "div")(35, "h3");
    i0.ɵɵtext(36, "Un turno");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(37, "p");
    i0.ɵɵtext(38, "Hay 10 s de preparaci\u00F3n (se salta si todos pasan) y 30 s para la respuesta principal.");
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(39, "article", 16)(40, "span", 13);
    i0.ɵɵtext(41, "04");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(42, "div")(43, "h3");
    i0.ɵɵtext(44, "Fichas t\u00E1cticas");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(45, "p")(46, "strong");
    i0.ɵɵtext(47, "ZWAP");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(48, ": durante tu preparaci\u00F3n, cambia una categor\u00EDa pendiente con alguien o reordena dos de las tuyas si te han cambiado una. ");
    i0.ɵɵdomElementStart(49, "strong");
    i0.ɵɵtext(50, "BEZZER");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(51, ": reta al jugador activo y entra en la cola de rebotes.");
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(52, "article", 17)(53, "span", 13);
    i0.ɵɵtext(54, "05");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(55, "div")(56, "h3");
    i0.ɵɵtext(57, "Rebotes");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(58, "p");
    i0.ɵɵtext(59, "Si falla el jugador activo, los BEZZER responden en orden (10 s). BEZZER antes de ver la pregunta: +3; despu\u00E9s: +1. La ficha solo se gasta si recibes rebote.");
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(60, "article", 18)(61, "span", 13);
    i0.ɵɵtext(62, "06");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(63, "div")(64, "h3");
    i0.ɵɵtext(65, "Ganar");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(66, "p");
    i0.ɵɵtext(67, "Cada punto avanza una casilla. Llega primero a la 30.");
    i0.ɵɵdomElementEnd()()()();
    i0.ɵɵdomElementStart(68, "footer", 19)(69, "span");
    i0.ɵɵtext(70, "Consejo: prepara tu respuesta BEZZER mientras responde el jugador activo.");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(71, "button", 20);
    i0.ɵɵdomListener("click", function RulesHelpComponent_Conditional_5_Template_button_click_71_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(72, "\u00A1Entendido!");
    i0.ɵɵdomElementEnd()()()();
} }
export class RulesHelpComponent {
    compact = false;
    document = inject(DOCUMENT);
    isOpen = false;
    open() {
        this.isOpen = true;
        this.document.body.style.overflow = 'hidden';
    }
    close() {
        this.isOpen = false;
        this.document.body.style.overflow = '';
    }
    ngOnDestroy() {
        this.document.body.style.overflow = '';
    }
    static ɵfac = function RulesHelpComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RulesHelpComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RulesHelpComponent, selectors: [["app-rules-help"]], inputs: { compact: "compact" }, decls: 6, vars: 4, consts: [["type", "button", "aria-haspopup", "dialog", 1, "rules-trigger", 3, "click"], ["aria-hidden", "true", 1, "rules-trigger__icon"], ["role", "presentation", 1, "rules-backdrop"], ["role", "presentation", 1, "rules-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "rules-title", 1, "rules-modal", 3, "click"], ["aria-hidden", "true", 1, "rules-modal__glow", "rules-modal__glow--one"], ["aria-hidden", "true", 1, "rules-modal__glow", "rules-modal__glow--two"], [1, "rules-modal__header"], [1, "rules-kicker"], ["id", "rules-title"], ["type", "button", "aria-label", "Cerrar ayuda", 1, "rules-close", 3, "click"], [1, "rules-modal__content"], [1, "rule-card", "rule-card--start"], [1, "rule-card__number"], [1, "rule-card", "rule-card--categories"], [1, "rule-card", "rule-card--turns"], [1, "rule-card", "rule-card--tactics"], [1, "rule-card", "rule-card--points"], [1, "rule-card", "rule-card--goal"], [1, "rules-modal__footer"], ["type", "button", 1, "rules-ready", 3, "click"]], template: function RulesHelpComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "button", 0);
            i0.ɵɵdomListener("click", function RulesHelpComponent_Template_button_click_0_listener() { return ctx.open(); });
            i0.ɵɵdomElementStart(1, "span", 1);
            i0.ɵɵtext(2, "?");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵconditionalCreate(5, RulesHelpComponent_Conditional_5_Template, 73, 0, "div", 2);
        } if (rf & 2) {
            i0.ɵɵclassProp("rules-trigger--compact", ctx.compact);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.compact ? "Ayuda" : "C\u00F3mo se juega");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isOpen ? 5 : -1);
        } }, styles: ["[_nghost-%COMP%] { display: inline-flex; }\n\n.rules-trigger[_ngcontent-%COMP%] { display: inline-flex; align-items: center; justify-content: center; gap: .45rem; min-height: 2.65rem; padding: .55rem .85rem; color: rgb(255 255 255 / .9); border: 1px solid rgb(255 255 255 / .15); border-radius: 999px; background: rgb(10 8 24 / .58); box-shadow: inset 0 1px 0 rgb(255 255 255 / .09), 0 8px 22px rgb(0 0 0 / .18); backdrop-filter: blur(12px); cursor: pointer; font-size: .72rem; font-weight: 850; letter-spacing: .06em; text-transform: uppercase; transition: transform 180ms ease, border-color 180ms ease, background 180ms ease; }\n.rules-trigger[_ngcontent-%COMP%]:hover { border-color: var(--color-accent); background: rgb(183 64 164 / .16); transform: translateY(-2px); }\n.rules-trigger__icon[_ngcontent-%COMP%] { display: grid; width: 1.25rem; height: 1.25rem; place-items: center; color: white; border-radius: 50%; background: linear-gradient(135deg, var(--color-primary-light), var(--color-accent)); font-family: var(--font-display); font-size: .9rem; font-weight: 900; line-height: 1; }\n.rules-trigger--compact[_ngcontent-%COMP%] { min-height: 2.35rem; padding-inline: .7rem; }\n\n.rules-backdrop[_ngcontent-%COMP%] { position: fixed; z-index: 100; inset: 0; display: grid; place-items: center; overflow: hidden; padding: 1rem; background: rgb(3 2 10 / .76); backdrop-filter: blur(14px); animation: _ngcontent-%COMP%_rules-fade-in 180ms ease-out both; }\n.rules-modal[_ngcontent-%COMP%] { position: relative; width: min(48rem, 100%); overflow: hidden; border: 1px solid rgb(255 255 255 / .16); border-radius: 2rem; background: linear-gradient(145deg, rgb(33 25 60 / .98), rgb(10 8 24 / .98)); box-shadow: 0 28px 90px rgb(0 0 0 / .62), inset 0 1px 0 rgb(255 255 255 / .1); animation: _ngcontent-%COMP%_rules-pop-in 280ms cubic-bezier(.16, 1, .3, 1) both; }\n.rules-modal__glow[_ngcontent-%COMP%] { position: absolute; width: 18rem; height: 18rem; border-radius: 50%; filter: blur(5px); opacity: .26; pointer-events: none; }\n.rules-modal__glow--one[_ngcontent-%COMP%] { top: -11rem; right: -6rem; background: var(--color-primary); }\n.rules-modal__glow--two[_ngcontent-%COMP%] { bottom: -12rem; left: -8rem; background: var(--color-accent); }\n.rules-modal__header[_ngcontent-%COMP%], .rules-modal__content[_ngcontent-%COMP%], .rules-modal__footer[_ngcontent-%COMP%] { position: relative; z-index: 1; }\n.rules-modal__header[_ngcontent-%COMP%] { display: flex; gap: 1rem; justify-content: space-between; padding: 1.75rem 1.75rem 1.2rem; }\n.rules-kicker[_ngcontent-%COMP%] { color: var(--color-accent); font-size: .68rem; font-weight: 900; letter-spacing: .18em; text-transform: uppercase; }\n.rules-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: .25rem 0 .4rem; color: white; font-size: clamp(2rem, 6vw, 3rem); font-weight: 900; line-height: 1; text-transform: uppercase; }\n.rules-modal__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { max-width: 33rem; color: rgb(255 255 255 / .68); font-size: .9rem; line-height: 1.45; }\n.rules-close[_ngcontent-%COMP%] { display: grid; width: 2.5rem; height: 2.5rem; flex: 0 0 auto; place-items: center; color: white; border: 1px solid rgb(255 255 255 / .13); border-radius: 50%; background: rgb(0 0 0 / .18); cursor: pointer; font-size: 1.65rem; line-height: 1; transition: background 160ms ease, transform 160ms ease; }\n.rules-close[_ngcontent-%COMP%]:hover { background: rgb(255 255 255 / .12); transform: rotate(90deg); }\n.rules-modal__content[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .7rem; padding: .35rem 1.2rem 1.3rem; }\n.rule-card[_ngcontent-%COMP%] { display: flex; gap: .7rem; min-height: 7.25rem; padding: .85rem; border: 1px solid rgb(255 255 255 / .09); border-radius: 1.15rem; background: linear-gradient(145deg, rgb(255 255 255 / .075), rgb(255 255 255 / .025)); box-shadow: inset 0 1px 0 rgb(255 255 255 / .06); }\n.rule-card__number[_ngcontent-%COMP%] { display: grid; width: 1.75rem; height: 1.75rem; flex: 0 0 auto; place-items: center; border-radius: .55rem; color: white; background: color-mix(in srgb, var(--rule-color) 73%, #160b29); font-size: .62rem; font-weight: 900; box-shadow: 0 0 17px color-mix(in srgb, var(--rule-color) 34%, transparent); }\n.rule-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: .05rem 0 .3rem; color: white; font-size: .95rem; font-weight: 850; }\n.rule-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: rgb(255 255 255 / .67); font-size: .76rem; line-height: 1.45; }\n.rule-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: white; }\n.rule-card--start[_ngcontent-%COMP%] { --rule-color: var(--color-secondary); }.rule-card--categories[_ngcontent-%COMP%] { --rule-color: var(--color-primary-light); }.rule-card--turns[_ngcontent-%COMP%] { --rule-color: var(--color-warning); }.rule-card--tactics[_ngcontent-%COMP%] { --rule-color: var(--color-accent); }.rule-card--points[_ngcontent-%COMP%] { --rule-color: var(--color-correct); }.rule-card--goal[_ngcontent-%COMP%] { --rule-color: var(--color-accent-warm); }\n.rules-modal__footer[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: .9rem; padding: 1rem 1.5rem; border-top: 1px solid rgb(255 255 255 / .08); background: rgb(0 0 0 / .15); color: rgb(255 255 255 / .58); font-size: .72rem; font-weight: 650; }\n.rules-ready[_ngcontent-%COMP%] { min-height: 2.35rem; flex: 0 0 auto; padding: .45rem .95rem; color: white; border: 0; border-radius: .7rem; background: linear-gradient(120deg, var(--color-primary), var(--color-accent)); box-shadow: 0 8px 20px oklch(0.58 .28 290 / .28); cursor: pointer; font-weight: 850; }\n@keyframes _ngcontent-%COMP%_rules-fade-in { from { opacity: 0; } to { opacity: 1; } }\n@keyframes _ngcontent-%COMP%_rules-pop-in { from { opacity: 0; transform: translateY(1rem) scale(.97); } to { opacity: 1; transform: none; } }\n@media (max-width: 600px) { .rules-backdrop[_ngcontent-%COMP%] { padding: .55rem; }.rules-modal[_ngcontent-%COMP%] { border-radius: 1.35rem; }.rules-modal__header[_ngcontent-%COMP%] { padding: 1.1rem 1rem .65rem; }.rules-modal__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: .78rem; }.rules-modal__content[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .45rem; padding: .2rem .55rem .7rem; }.rule-card[_ngcontent-%COMP%] { gap: .4rem; min-height: 0; padding: .6rem; border-radius: .8rem; }.rule-card__number[_ngcontent-%COMP%] { width: 1.35rem; height: 1.35rem; border-radius: .4rem; font-size: .5rem; }.rule-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: .72rem; }.rule-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: .6rem; line-height: 1.28; }.rules-modal__footer[_ngcontent-%COMP%] { align-items: center; justify-content: center; padding: .55rem .8rem; }.rules-modal__footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: none; } }\n@media (prefers-reduced-motion: reduce) { .rules-backdrop[_ngcontent-%COMP%], .rules-modal[_ngcontent-%COMP%] { animation: none; }.rules-trigger[_ngcontent-%COMP%], .rules-close[_ngcontent-%COMP%] { transition: none; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RulesHelpComponent, [{
        type: Component,
        args: [{ selector: 'app-rules-help', standalone: true, imports: [], template: "<button type=\"button\" class=\"rules-trigger\" [class.rules-trigger--compact]=\"compact\" (click)=\"open()\" aria-haspopup=\"dialog\">\n  <span class=\"rules-trigger__icon\" aria-hidden=\"true\">?</span>\n  <span>{{ compact ? 'Ayuda' : 'C\u00F3mo se juega' }}</span>\n</button>\n\n@if (isOpen) {\n  <div class=\"rules-backdrop\" role=\"presentation\" (click)=\"close()\">\n    <section class=\"rules-modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"rules-title\" (click)=\"$event.stopPropagation()\">\n      <div class=\"rules-modal__glow rules-modal__glow--one\" aria-hidden=\"true\"></div>\n      <div class=\"rules-modal__glow rules-modal__glow--two\" aria-hidden=\"true\"></div>\n\n      <header class=\"rules-modal__header\">\n        <div>\n          <span class=\"rules-kicker\">Gu\u00EDa r\u00E1pida</span>\n          <h2 id=\"rules-title\">Domina el tablero</h2>\n          <p>Lo esencial para empezar a jugar en menos de un minuto.</p>\n        </div>\n        <button type=\"button\" class=\"rules-close\" (click)=\"close()\" aria-label=\"Cerrar ayuda\">\u00D7</button>\n      </header>\n\n      <div class=\"rules-modal__content\">\n        <article class=\"rule-card rule-card--start\">\n          <span class=\"rule-card__number\">01</span>\n          <div><h3>Empezar</h3><p>De 2 a 4 jugadores. Todos pulsan \u00ABListo\u00BB y el anfitri\u00F3n inicia.</p></div>\n        </article>\n        <article class=\"rule-card rule-card--categories\">\n          <span class=\"rule-card__number\">02</span>\n          <div><h3>Tus categor\u00EDas</h3><p>Asigna 1, 2, 3 y 4 puntos una vez. Se juega primero el 1 y luego hasta el 4.</p></div>\n        </article>\n        <article class=\"rule-card rule-card--turns\">\n          <span class=\"rule-card__number\">03</span>\n          <div><h3>Un turno</h3><p>Hay 10 s de preparaci\u00F3n (se salta si todos pasan) y 30 s para la respuesta principal.</p></div>\n        </article>\n        <article class=\"rule-card rule-card--tactics\">\n          <span class=\"rule-card__number\">04</span>\n          <div><h3>Fichas t\u00E1cticas</h3><p><strong>ZWAP</strong>: durante tu preparaci\u00F3n, cambia una categor\u00EDa pendiente con alguien o reordena dos de las tuyas si te han cambiado una. <strong>BEZZER</strong>: reta al jugador activo y entra en la cola de rebotes.</p></div>\n        </article>\n        <article class=\"rule-card rule-card--points\">\n          <span class=\"rule-card__number\">05</span>\n          <div><h3>Rebotes</h3><p>Si falla el jugador activo, los BEZZER responden en orden (10 s). BEZZER antes de ver la pregunta: +3; despu\u00E9s: +1. La ficha solo se gasta si recibes rebote.</p></div>\n        </article>\n        <article class=\"rule-card rule-card--goal\">\n          <span class=\"rule-card__number\">06</span>\n          <div><h3>Ganar</h3><p>Cada punto avanza una casilla. Llega primero a la 30.</p></div>\n        </article>\n      </div>\n\n      <footer class=\"rules-modal__footer\">\n        <span>Consejo: prepara tu respuesta BEZZER mientras responde el jugador activo.</span>\n        <button type=\"button\" class=\"rules-ready\" (click)=\"close()\">\u00A1Entendido!</button>\n      </footer>\n    </section>\n  </div>\n}\n", styles: [":host { display: inline-flex; }\n\n.rules-trigger { display: inline-flex; align-items: center; justify-content: center; gap: .45rem; min-height: 2.65rem; padding: .55rem .85rem; color: rgb(255 255 255 / .9); border: 1px solid rgb(255 255 255 / .15); border-radius: 999px; background: rgb(10 8 24 / .58); box-shadow: inset 0 1px 0 rgb(255 255 255 / .09), 0 8px 22px rgb(0 0 0 / .18); backdrop-filter: blur(12px); cursor: pointer; font-size: .72rem; font-weight: 850; letter-spacing: .06em; text-transform: uppercase; transition: transform 180ms ease, border-color 180ms ease, background 180ms ease; }\n.rules-trigger:hover { border-color: var(--color-accent); background: rgb(183 64 164 / .16); transform: translateY(-2px); }\n.rules-trigger__icon { display: grid; width: 1.25rem; height: 1.25rem; place-items: center; color: white; border-radius: 50%; background: linear-gradient(135deg, var(--color-primary-light), var(--color-accent)); font-family: var(--font-display); font-size: .9rem; font-weight: 900; line-height: 1; }\n.rules-trigger--compact { min-height: 2.35rem; padding-inline: .7rem; }\n\n.rules-backdrop { position: fixed; z-index: 100; inset: 0; display: grid; place-items: center; overflow: hidden; padding: 1rem; background: rgb(3 2 10 / .76); backdrop-filter: blur(14px); animation: rules-fade-in 180ms ease-out both; }\n.rules-modal { position: relative; width: min(48rem, 100%); overflow: hidden; border: 1px solid rgb(255 255 255 / .16); border-radius: 2rem; background: linear-gradient(145deg, rgb(33 25 60 / .98), rgb(10 8 24 / .98)); box-shadow: 0 28px 90px rgb(0 0 0 / .62), inset 0 1px 0 rgb(255 255 255 / .1); animation: rules-pop-in 280ms cubic-bezier(.16, 1, .3, 1) both; }\n.rules-modal__glow { position: absolute; width: 18rem; height: 18rem; border-radius: 50%; filter: blur(5px); opacity: .26; pointer-events: none; }\n.rules-modal__glow--one { top: -11rem; right: -6rem; background: var(--color-primary); }\n.rules-modal__glow--two { bottom: -12rem; left: -8rem; background: var(--color-accent); }\n.rules-modal__header, .rules-modal__content, .rules-modal__footer { position: relative; z-index: 1; }\n.rules-modal__header { display: flex; gap: 1rem; justify-content: space-between; padding: 1.75rem 1.75rem 1.2rem; }\n.rules-kicker { color: var(--color-accent); font-size: .68rem; font-weight: 900; letter-spacing: .18em; text-transform: uppercase; }\n.rules-modal h2 { margin: .25rem 0 .4rem; color: white; font-size: clamp(2rem, 6vw, 3rem); font-weight: 900; line-height: 1; text-transform: uppercase; }\n.rules-modal__header p { max-width: 33rem; color: rgb(255 255 255 / .68); font-size: .9rem; line-height: 1.45; }\n.rules-close { display: grid; width: 2.5rem; height: 2.5rem; flex: 0 0 auto; place-items: center; color: white; border: 1px solid rgb(255 255 255 / .13); border-radius: 50%; background: rgb(0 0 0 / .18); cursor: pointer; font-size: 1.65rem; line-height: 1; transition: background 160ms ease, transform 160ms ease; }\n.rules-close:hover { background: rgb(255 255 255 / .12); transform: rotate(90deg); }\n.rules-modal__content { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .7rem; padding: .35rem 1.2rem 1.3rem; }\n.rule-card { display: flex; gap: .7rem; min-height: 7.25rem; padding: .85rem; border: 1px solid rgb(255 255 255 / .09); border-radius: 1.15rem; background: linear-gradient(145deg, rgb(255 255 255 / .075), rgb(255 255 255 / .025)); box-shadow: inset 0 1px 0 rgb(255 255 255 / .06); }\n.rule-card__number { display: grid; width: 1.75rem; height: 1.75rem; flex: 0 0 auto; place-items: center; border-radius: .55rem; color: white; background: color-mix(in srgb, var(--rule-color) 73%, #160b29); font-size: .62rem; font-weight: 900; box-shadow: 0 0 17px color-mix(in srgb, var(--rule-color) 34%, transparent); }\n.rule-card h3 { margin: .05rem 0 .3rem; color: white; font-size: .95rem; font-weight: 850; }\n.rule-card p { color: rgb(255 255 255 / .67); font-size: .76rem; line-height: 1.45; }\n.rule-card strong { color: white; }\n.rule-card--start { --rule-color: var(--color-secondary); }.rule-card--categories { --rule-color: var(--color-primary-light); }.rule-card--turns { --rule-color: var(--color-warning); }.rule-card--tactics { --rule-color: var(--color-accent); }.rule-card--points { --rule-color: var(--color-correct); }.rule-card--goal { --rule-color: var(--color-accent-warm); }\n.rules-modal__footer { display: flex; align-items: center; justify-content: space-between; gap: .9rem; padding: 1rem 1.5rem; border-top: 1px solid rgb(255 255 255 / .08); background: rgb(0 0 0 / .15); color: rgb(255 255 255 / .58); font-size: .72rem; font-weight: 650; }\n.rules-ready { min-height: 2.35rem; flex: 0 0 auto; padding: .45rem .95rem; color: white; border: 0; border-radius: .7rem; background: linear-gradient(120deg, var(--color-primary), var(--color-accent)); box-shadow: 0 8px 20px oklch(0.58 .28 290 / .28); cursor: pointer; font-weight: 850; }\n@keyframes rules-fade-in { from { opacity: 0; } to { opacity: 1; } }\n@keyframes rules-pop-in { from { opacity: 0; transform: translateY(1rem) scale(.97); } to { opacity: 1; transform: none; } }\n@media (max-width: 600px) { .rules-backdrop { padding: .55rem; }.rules-modal { border-radius: 1.35rem; }.rules-modal__header { padding: 1.1rem 1rem .65rem; }.rules-modal__header p { font-size: .78rem; }.rules-modal__content { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .45rem; padding: .2rem .55rem .7rem; }.rule-card { gap: .4rem; min-height: 0; padding: .6rem; border-radius: .8rem; }.rule-card__number { width: 1.35rem; height: 1.35rem; border-radius: .4rem; font-size: .5rem; }.rule-card h3 { font-size: .72rem; }.rule-card p { font-size: .6rem; line-height: 1.28; }.rules-modal__footer { align-items: center; justify-content: center; padding: .55rem .8rem; }.rules-modal__footer span { display: none; } }\n@media (prefers-reduced-motion: reduce) { .rules-backdrop, .rules-modal { animation: none; }.rules-trigger, .rules-close { transition: none; } }\n"] }]
    }], null, { compact: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RulesHelpComponent, { className: "RulesHelpComponent", filePath: "src/app/shared/components/rules-help/rules-help.component.ts", lineNumber: 11 }); })();
