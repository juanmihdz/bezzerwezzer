import { Component, inject } from '@angular/core';
import { SnackbarService } from '../../../core/services/snackbar.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function SnackbarComponent_For_2_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 4);
    i0.ɵɵdomElement(1, "path", 11);
    i0.ɵɵdomElementEnd();
} }
function SnackbarComponent_For_2_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 4);
    i0.ɵɵdomElement(1, "path", 12)(2, "path", 13);
    i0.ɵɵdomElementEnd();
} }
function SnackbarComponent_For_2_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 4);
    i0.ɵɵdomElement(1, "circle", 14)(2, "path", 15);
    i0.ɵɵdomElementEnd();
} }
function SnackbarComponent_For_2_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 4);
    i0.ɵɵdomElement(1, "circle", 14)(2, "path", 16);
    i0.ɵɵdomElementEnd();
} }
function SnackbarComponent_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "article");
    i0.ɵɵdomElement(1, "div", 2);
    i0.ɵɵdomElementStart(2, "div", 3);
    i0.ɵɵconditionalCreate(3, SnackbarComponent_For_2_Case_3_Template, 2, 0, ":svg:svg", 4)(4, SnackbarComponent_For_2_Case_4_Template, 3, 0, ":svg:svg", 4)(5, SnackbarComponent_For_2_Case_5_Template, 3, 0, ":svg:svg", 4)(6, SnackbarComponent_For_2_Case_6_Template, 3, 0, ":svg:svg", 4);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(7, "div", 5)(8, "span", 6);
    i0.ɵɵtext(9);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(10, "p", 7);
    i0.ɵɵtext(11);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(12, "button", 8);
    i0.ɵɵdomListener("click", function SnackbarComponent_For_2_Template_button_click_12_listener() { const msg_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.snackbarService.remove(msg_r2.id)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(13, "svg", 9);
    i0.ɵɵdomElement(14, "path", 10);
    i0.ɵɵdomElementEnd()()();
} if (rf & 2) {
    let tmp_13_0;
    const msg_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("snackbar snackbar--", msg_r2.type));
    i0.ɵɵattribute("role", msg_r2.type === "error" ? "alert" : "status")("aria-label", ctx_r2.typeLabel(msg_r2.type) + ": " + msg_r2.message);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional((tmp_13_0 = msg_r2.type) === "success" ? 3 : tmp_13_0 === "warning" ? 4 : tmp_13_0 === "error" ? 5 : 6);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.typeLabel(msg_r2.type));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(msg_r2.message);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", "Cerrar notificaci\u00F3n: " + msg_r2.message);
} }
export class SnackbarComponent {
    snackbarService = inject(SnackbarService);
    typeLabel(type) {
        const labels = {
            info: 'Información',
            success: 'Completado',
            warning: 'Atención',
            error: 'Error',
        };
        return labels[type];
    }
    static ɵfac = function SnackbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SnackbarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SnackbarComponent, selectors: [["app-snackbar"]], decls: 3, vars: 0, consts: [["aria-label", "Notificaciones", "aria-live", "polite", "aria-relevant", "additions removals", 1, "snackbar-region"], [3, "class"], ["aria-hidden", "true", 1, "snackbar__accent"], ["aria-hidden", "true", 1, "snackbar__icon"], ["viewBox", "0 0 24 24"], [1, "snackbar__content"], [1, "snackbar__eyebrow"], [1, "snackbar__message"], ["type", "button", 1, "snackbar__close", 3, "click"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "m7 7 10 10M17 7 7 17"], ["d", "m5 12.5 4.2 4L19 7"], ["d", "M12 4 3.5 19h17L12 4Z"], ["d", "M12 9v4.5M12 17h.01"], ["cx", "12", "cy", "12", "r", "8.5"], ["d", "m9 9 6 6m0-6-6 6"], ["d", "M12 11v5M12 8h.01"]], template: function SnackbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 0);
            i0.ɵɵrepeaterCreate(1, SnackbarComponent_For_2_Template, 15, 9, "article", 1, _forTrack0);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.snackbarService.messages());
        } }, styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  pointer-events: none;\n}\n\n.snackbar-region[_ngcontent-%COMP%] {\n  position: absolute;\n  right: max(1rem, env(safe-area-inset-right));\n  bottom: max(1rem, env(safe-area-inset-bottom));\n  display: flex;\n  width: min(27rem, calc(100vw - 2rem));\n  max-height: calc(100dvh - 2rem - env(safe-area-inset-bottom));\n  flex-direction: column-reverse;\n  gap: 0.75rem;\n  overflow: hidden;\n  overflow-x: hidden;\n  pointer-events: none;\n}\n\n.snackbar[_ngcontent-%COMP%] {\n  --tone: 109 154 255;\n  --tone-deep: 38 82 176;\n  position: relative;\n  isolation: isolate;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.8rem;\n  width: 100%;\n  min-height: 4.75rem;\n  padding: 0.85rem 0.75rem 0.85rem 1rem;\n  overflow: hidden;\n  color: white;\n  border: 0.0625rem solid rgb(var(--tone) / 0.3);\n  border-radius: 1.15rem;\n  background:\n    radial-gradient(circle at 0 0, rgb(var(--tone) / 0.18), transparent 48%),\n    linear-gradient(135deg, rgb(28 25 43 / 0.96), rgb(12 10 23 / 0.94));\n  box-shadow:\n    0 1.125rem 2.8125rem rgb(0 0 0 / 0.4),\n    0 0.5rem 1.875rem rgb(var(--tone-deep) / 0.14),\n    inset 0 0.0625rem 0 rgb(255 255 255 / 0.08);\n  backdrop-filter: blur(1.375rem) saturate(140%);\n  -webkit-backdrop-filter: blur(1.375rem) saturate(140%);\n  pointer-events: auto;\n  animation: _ngcontent-%COMP%_snackbar-enter 420ms cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n\n.snackbar--success[_ngcontent-%COMP%] { --tone: 74 222 128; --tone-deep: 22 163 74; }\n.snackbar--warning[_ngcontent-%COMP%] { --tone: 251 191 36; --tone-deep: 217 119 6; }\n.snackbar--error[_ngcontent-%COMP%] { --tone: 251 113 133; --tone-deep: 220 38 38; }\n\n.snackbar__accent[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 0.25rem;\n  background: rgb(var(--tone));\n  box-shadow: 0 0 1.125rem rgb(var(--tone) / 0.75);\n}\n\n.snackbar__icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.65rem;\n  height: 2.65rem;\n  place-items: center;\n  flex: none;\n  color: rgb(var(--tone));\n  border: 0.0625rem solid rgb(var(--tone) / 0.26);\n  border-radius: 0.85rem;\n  background: rgb(var(--tone) / 0.11);\n  box-shadow: inset 0 0.0625rem 0 rgb(255 255 255 / 0.08);\n}\n\n.snackbar__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.45rem;\n  height: 1.45rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.snackbar__content[_ngcontent-%COMP%] { min-width: 0; }\n\n.snackbar__eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.15rem;\n  color: rgb(var(--tone));\n  font-size: 0.66rem;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  line-height: 1;\n  text-transform: uppercase;\n}\n\n.snackbar__message[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n  color: rgb(255 255 255 / 0.94);\n  font-size: 0.94rem;\n  font-weight: 600;\n  line-height: 1.35;\n}\n\n.snackbar__close[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.5rem;\n  height: 2.5rem;\n  place-items: center;\n  flex: none;\n  color: rgb(255 255 255 / 0.58);\n  border: 0.0625rem solid transparent;\n  border-radius: 0.75rem;\n  background: transparent;\n  cursor: pointer;\n  transition: color 160ms ease, border-color 160ms ease, background 160ms ease, transform 160ms ease;\n}\n\n.snackbar__close[_ngcontent-%COMP%]:hover {\n  color: white;\n  border-color: rgb(255 255 255 / 0.09);\n  background: rgb(255 255 255 / 0.08);\n  transform: scale(1.05);\n}\n\n.snackbar__close[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.125rem solid rgb(var(--tone) / 0.8);\n  outline-offset: 0.125rem;\n}\n\n.snackbar__close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  height: 1.15rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 2.25;\n  stroke-linecap: round;\n}\n\n@keyframes _ngcontent-%COMP%_snackbar-enter {\n  from { opacity: 0; transform: translate3d(1.5rem, 0.75rem, 0) scale(0.96); }\n  to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }\n}\n\n@media (max-width: 32.5rem) {\n  .snackbar-region[_ngcontent-%COMP%] {\n    right: max(0.65rem, env(safe-area-inset-right));\n    bottom: max(0.65rem, env(safe-area-inset-bottom));\n    left: max(0.65rem, env(safe-area-inset-left));\n    width: auto;\n    max-height: calc(100dvh - 1.3rem - env(safe-area-inset-bottom));\n  }\n\n  .snackbar[_ngcontent-%COMP%] {\n    gap: 0.65rem;\n    min-height: 4.25rem;\n    padding: 0.72rem 0.62rem 0.72rem 0.85rem;\n    border-radius: 1rem;\n  }\n\n  .snackbar__icon[_ngcontent-%COMP%] { width: 2.35rem; height: 2.35rem; border-radius: 0.72rem; }\n  .snackbar__message[_ngcontent-%COMP%] { font-size: 0.88rem; }\n  .snackbar__close[_ngcontent-%COMP%] { width: 2.35rem; height: 2.35rem; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .snackbar[_ngcontent-%COMP%] { animation: none; }\n  .snackbar__close[_ngcontent-%COMP%] { transition: none; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackbarComponent, [{
        type: Component,
        args: [{ selector: 'app-snackbar', standalone: true, imports: [], template: "<section\n  class=\"snackbar-region\"\n  aria-label=\"Notificaciones\"\n  aria-live=\"polite\"\n  aria-relevant=\"additions removals\"\n>\n  @for (msg of snackbarService.messages(); track msg.id) {\n    <article\n      class=\"snackbar snackbar--{{ msg.type }}\"\n      [attr.role]=\"msg.type === 'error' ? 'alert' : 'status'\"\n      [attr.aria-label]=\"typeLabel(msg.type) + ': ' + msg.message\"\n    >\n      <div class=\"snackbar__accent\" aria-hidden=\"true\"></div>\n\n      <div class=\"snackbar__icon\" aria-hidden=\"true\">\n        @switch (msg.type) {\n          @case ('success') {\n            <svg viewBox=\"0 0 24 24\"><path d=\"m5 12.5 4.2 4L19 7\" /></svg>\n          }\n          @case ('warning') {\n            <svg viewBox=\"0 0 24 24\"><path d=\"M12 4 3.5 19h17L12 4Z\" /><path d=\"M12 9v4.5M12 17h.01\" /></svg>\n          }\n          @case ('error') {\n            <svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8.5\" /><path d=\"m9 9 6 6m0-6-6 6\" /></svg>\n          }\n          @default {\n            <svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8.5\" /><path d=\"M12 11v5M12 8h.01\" /></svg>\n          }\n        }\n      </div>\n\n      <div class=\"snackbar__content\">\n        <span class=\"snackbar__eyebrow\">{{ typeLabel(msg.type) }}</span>\n        <p class=\"snackbar__message\">{{ msg.message }}</p>\n      </div>\n\n      <button\n        type=\"button\"\n        class=\"snackbar__close\"\n        (click)=\"snackbarService.remove(msg.id)\"\n        [attr.aria-label]=\"'Cerrar notificaci\u00F3n: ' + msg.message\"\n      >\n        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n          <path d=\"m7 7 10 10M17 7 7 17\" />\n        </svg>\n      </button>\n    </article>\n  }\n</section>\n", styles: [":host {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  pointer-events: none;\n}\n\n.snackbar-region {\n  position: absolute;\n  right: max(1rem, env(safe-area-inset-right));\n  bottom: max(1rem, env(safe-area-inset-bottom));\n  display: flex;\n  width: min(27rem, calc(100vw - 2rem));\n  max-height: calc(100dvh - 2rem - env(safe-area-inset-bottom));\n  flex-direction: column-reverse;\n  gap: 0.75rem;\n  overflow: hidden;\n  overflow-x: hidden;\n  pointer-events: none;\n}\n\n.snackbar {\n  --tone: 109 154 255;\n  --tone-deep: 38 82 176;\n  position: relative;\n  isolation: isolate;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.8rem;\n  width: 100%;\n  min-height: 4.75rem;\n  padding: 0.85rem 0.75rem 0.85rem 1rem;\n  overflow: hidden;\n  color: white;\n  border: 0.0625rem solid rgb(var(--tone) / 0.3);\n  border-radius: 1.15rem;\n  background:\n    radial-gradient(circle at 0 0, rgb(var(--tone) / 0.18), transparent 48%),\n    linear-gradient(135deg, rgb(28 25 43 / 0.96), rgb(12 10 23 / 0.94));\n  box-shadow:\n    0 1.125rem 2.8125rem rgb(0 0 0 / 0.4),\n    0 0.5rem 1.875rem rgb(var(--tone-deep) / 0.14),\n    inset 0 0.0625rem 0 rgb(255 255 255 / 0.08);\n  backdrop-filter: blur(1.375rem) saturate(140%);\n  -webkit-backdrop-filter: blur(1.375rem) saturate(140%);\n  pointer-events: auto;\n  animation: snackbar-enter 420ms cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n\n.snackbar--success { --tone: 74 222 128; --tone-deep: 22 163 74; }\n.snackbar--warning { --tone: 251 191 36; --tone-deep: 217 119 6; }\n.snackbar--error { --tone: 251 113 133; --tone-deep: 220 38 38; }\n\n.snackbar__accent {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 0.25rem;\n  background: rgb(var(--tone));\n  box-shadow: 0 0 1.125rem rgb(var(--tone) / 0.75);\n}\n\n.snackbar__icon {\n  display: grid;\n  width: 2.65rem;\n  height: 2.65rem;\n  place-items: center;\n  flex: none;\n  color: rgb(var(--tone));\n  border: 0.0625rem solid rgb(var(--tone) / 0.26);\n  border-radius: 0.85rem;\n  background: rgb(var(--tone) / 0.11);\n  box-shadow: inset 0 0.0625rem 0 rgb(255 255 255 / 0.08);\n}\n\n.snackbar__icon svg {\n  width: 1.45rem;\n  height: 1.45rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.snackbar__content { min-width: 0; }\n\n.snackbar__eyebrow {\n  display: block;\n  margin-bottom: 0.15rem;\n  color: rgb(var(--tone));\n  font-size: 0.66rem;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  line-height: 1;\n  text-transform: uppercase;\n}\n\n.snackbar__message {\n  overflow-wrap: anywhere;\n  color: rgb(255 255 255 / 0.94);\n  font-size: 0.94rem;\n  font-weight: 600;\n  line-height: 1.35;\n}\n\n.snackbar__close {\n  display: grid;\n  width: 2.5rem;\n  height: 2.5rem;\n  place-items: center;\n  flex: none;\n  color: rgb(255 255 255 / 0.58);\n  border: 0.0625rem solid transparent;\n  border-radius: 0.75rem;\n  background: transparent;\n  cursor: pointer;\n  transition: color 160ms ease, border-color 160ms ease, background 160ms ease, transform 160ms ease;\n}\n\n.snackbar__close:hover {\n  color: white;\n  border-color: rgb(255 255 255 / 0.09);\n  background: rgb(255 255 255 / 0.08);\n  transform: scale(1.05);\n}\n\n.snackbar__close:focus-visible {\n  outline: 0.125rem solid rgb(var(--tone) / 0.8);\n  outline-offset: 0.125rem;\n}\n\n.snackbar__close svg {\n  width: 1.15rem;\n  height: 1.15rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 2.25;\n  stroke-linecap: round;\n}\n\n@keyframes snackbar-enter {\n  from { opacity: 0; transform: translate3d(1.5rem, 0.75rem, 0) scale(0.96); }\n  to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }\n}\n\n@media (max-width: 32.5rem) {\n  .snackbar-region {\n    right: max(0.65rem, env(safe-area-inset-right));\n    bottom: max(0.65rem, env(safe-area-inset-bottom));\n    left: max(0.65rem, env(safe-area-inset-left));\n    width: auto;\n    max-height: calc(100dvh - 1.3rem - env(safe-area-inset-bottom));\n  }\n\n  .snackbar {\n    gap: 0.65rem;\n    min-height: 4.25rem;\n    padding: 0.72rem 0.62rem 0.72rem 0.85rem;\n    border-radius: 1rem;\n  }\n\n  .snackbar__icon { width: 2.35rem; height: 2.35rem; border-radius: 0.72rem; }\n  .snackbar__message { font-size: 0.88rem; }\n  .snackbar__close { width: 2.35rem; height: 2.35rem; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .snackbar { animation: none; }\n  .snackbar__close { transition: none; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SnackbarComponent, { className: "SnackbarComponent", filePath: "src/app/shared/components/snackbar/snackbar.component.ts", lineNumber: 12 }); })();
