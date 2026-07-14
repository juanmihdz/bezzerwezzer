import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from '../../../../shared/components/timer/timer.component';
import { CategoryBadgeComponent } from '../../../../shared/components/category-badge/category-badge.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function QuestionModalComponent_Conditional_0_Conditional_18_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const playerName_r1 = ctx.$implicit;
    const ɵ$index_39_r2 = ctx.$index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ɵ$index_39_r2 + 1, ". ", playerName_r1, " ");
} }
function QuestionModalComponent_Conditional_0_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1, "Cola de rebotes");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(2, QuestionModalComponent_Conditional_0_Conditional_18_For_3_Template, 2, 2, "span", 21, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.reboundQueue);
} }
function QuestionModalComponent_Conditional_0_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function QuestionModalComponent_Conditional_0_Conditional_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onBezzerwizzer.emit()); });
    i0.ɵɵelementStart(1, "span", 23);
    i0.ɵɵtext(2, "\u2726");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " BEZZER \u00B7 REBOTE +1 ");
    i0.ɵɵelementEnd();
} }
function QuestionModalComponent_Conditional_0_Conditional_24_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function QuestionModalComponent_Conditional_0_Conditional_24_For_2_Template_button_click_0_listener() { const ɵ$index_60_r6 = i0.ɵɵrestoreView(_r5).$index; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.selectOption(ctx_r2.getLetter(ɵ$index_60_r6))); });
    i0.ɵɵelementStart(1, "div", 26)(2, "div", 27);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 28);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ɵ$index_60_r6 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r2.isAnswered || ctx_r2.selectionFailed)("ngClass", ctx_r2.getOptionClass(ctx_r2.getLetter(ɵ$index_60_r6)));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.getLetterClass(ctx_r2.getLetter(ɵ$index_60_r6)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getLetter(ɵ$index_60_r6), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r7);
} }
function QuestionModalComponent_Conditional_0_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵrepeaterCreate(1, QuestionModalComponent_Conditional_0_Conditional_24_For_2_Template, 6, 5, "button", 24, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.question.options);
} }
function QuestionModalComponent_Conditional_0_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 29)(2, "input", 30);
    i0.ɵɵtwoWayListener("ngModelChange", function QuestionModalComponent_Conditional_0_Conditional_25_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.freeTextValue, $event) || (ctx_r2.freeTextValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function QuestionModalComponent_Conditional_0_Conditional_25_Template_input_keyup_enter_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.submitFreeText()); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 31);
    i0.ɵɵlistener("click", function QuestionModalComponent_Conditional_0_Conditional_25_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.submitFreeText()); });
    i0.ɵɵtext(4, " ENVIAR RESPUESTA ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.freeTextValue);
    i0.ɵɵproperty("disabled", ctx_r2.isAnswered || ctx_r2.selectionFailed);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.isAnswered || ctx_r2.selectionFailed || !ctx_r2.freeTextValue.trim());
} }
function QuestionModalComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelement(1, "div", 1);
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵelement(3, "div", 3);
    i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
    i0.ɵɵelement(7, "app-category-badge", 7);
    i0.ɵɵelementStart(8, "div")(9, "h4", 8);
    i0.ɵɵtext(10, " Categor\u00EDa ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "h3", 9);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 10);
    i0.ɵɵelement(14, "app-timer", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 12)(16, "span", 13);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(18, QuestionModalComponent_Conditional_0_Conditional_18_Template, 4, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(19, QuestionModalComponent_Conditional_0_Conditional_19_Template, 4, 0, "button", 14);
    i0.ɵɵelementStart(20, "div", 15)(21, "h2", 16);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 17);
    i0.ɵɵconditionalCreate(24, QuestionModalComponent_Conditional_0_Conditional_24_Template, 3, 0, "div", 18);
    i0.ɵɵconditionalCreate(25, QuestionModalComponent_Conditional_0_Conditional_25_Template, 5, 3, "div", 19);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("border-color", ctx_r2.question.categoryColor + "50")("box-shadow", "0 0 3.125rem " + ctx_r2.question.categoryColor + "15");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-color", ctx_r2.question.categoryColor);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("name", ctx_r2.question.categoryName)("icon", ctx_r2.question.categoryIcon)("color", ctx_r2.question.categoryColor)("compact", true);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.question.categoryName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("total", ctx_r2.timerTotal)("remaining", ctx_r2.timer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.isReboundTurn ? "border-pink-400/60 bg-pink-500/20 text-white shadow-[0_0_1.125rem_rgba(236,72,153,0.25)]" : "border-white/15 bg-white/5 text-white/70");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r2.isReboundTurn ? "\u26A1 Rebote activo" : "Responde ahora", " \u00B7 ", ctx_r2.answeringPlayerName, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.reboundQueue.length > 0 ? 18 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.canBezzerwizzer ? 19 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.question.questionText, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.question.questionType === "MULTIPLE_CHOICE" ? 24 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.question.questionType === "FREE_TEXT" ? 25 : -1);
} }
export class QuestionModalComponent {
    question = null;
    timer = 30;
    timerTotal = 30;
    isAnswered = false;
    canChangeAnswer = false;
    selectionFailed = false;
    canBezzerwizzer = false;
    answeringPlayerName = '';
    isReboundTurn = false;
    reboundQueue = [];
    onAnswer = new EventEmitter();
    onBezzerwizzer = new EventEmitter();
    selectedOption = null;
    freeTextValue = '';
    ngOnChanges(changes) {
        if (changes['question'] && changes['question'].previousValue?.id !== changes['question'].currentValue?.id) {
            this.selectedOption = null;
            this.freeTextValue = '';
        }
    }
    getLetter(index) {
        return String.fromCharCode(65 + index); // 0=A, 1=B, 2=C, 3=D
    }
    selectOption(letter) {
        if (this.isAnswered || !this.question)
            return;
        this.selectedOption = letter;
        this.onAnswer.emit({
            questionId: this.question.id,
            selectedOption: letter
        });
    }
    submitFreeText() {
        if (this.isAnswered || !this.question || !this.freeTextValue.trim())
            return;
        this.onAnswer.emit({
            questionId: this.question.id,
            freeTextAnswer: this.freeTextValue.trim()
        });
    }
    getOptionClass(letter) {
        if (this.selectedOption === letter && this.selectionFailed) {
            return 'bg-incorrect/10 border-incorrect/50 text-white/45 grayscale opacity-65 cursor-not-allowed';
        }
        if (!this.selectedOption) {
            return 'bg-black/30 border-white/10 text-white hover:bg-black/50 hover:border-white/20 hover:scale-[1.01] hover:-translate-y-0.5';
        }
        if (this.selectedOption === letter) {
            return 'bg-primary/20 border-primary text-white scale-[1.02] shadow-[0_0_1.25rem_rgba(168,85,247,0.3)]';
        }
        return this.canChangeAnswer
            ? 'bg-black/30 border-white/10 text-white hover:bg-black/50 hover:border-white/20 hover:scale-[1.01] hover:-translate-y-0.5'
            : 'bg-black/10 border-white/5 opacity-40 grayscale pointer-events-none';
    }
    getLetterClass(letter) {
        if (this.selectedOption === letter && this.selectionFailed)
            return 'bg-incorrect text-white';
        if (this.selectedOption === letter)
            return 'bg-primary text-white';
        return 'bg-white/5 text-text-muted group-hover:bg-primary/10 group-hover:text-primary-light';
    }
    static ɵfac = function QuestionModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || QuestionModalComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: QuestionModalComponent, selectors: [["app-question-modal"]], inputs: { question: "question", timer: "timer", timerTotal: "timerTotal", isAnswered: "isAnswered", canChangeAnswer: "canChangeAnswer", selectionFailed: "selectionFailed", canBezzerwizzer: "canBezzerwizzer", answeringPlayerName: "answeringPlayerName", isReboundTurn: "isReboundTurn", reboundQueue: "reboundQueue" }, outputs: { onAnswer: "onAnswer", onBezzerwizzer: "onBezzerwizzer" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "sm:p-6"], [1, "absolute", "inset-0", "bg-black/80", "backdrop-blur-2xl", "animate-fade-in"], [1, "relative", "w-full", "max-w-4xl", "max-h-[94dvh]", "flex", "flex-col", "glass-strong", "rounded-[1.5rem]", "sm:rounded-[2.5rem]", "overflow-hidden", "shadow-[0_1.5625rem_3.75rem_rgba(0,0,0,0.6)]", "animate-bounce-in", "border"], [1, "h-4", "w-full"], [1, "p-5", "sm:p-7", "md:p-10", "flex", "flex-col", "flex-grow", "overflow-y-auto"], [1, "flex", "justify-between", "items-center", "gap-5", "mb-7"], [1, "flex", "items-center", "gap-4", "bg-black/40", "p-2", "pr-6", "rounded-full", "border", "border-white/5", "shadow-inner"], ["compactSize", "lg", 3, "name", "icon", "color", "compact"], [1, "text-[0.65rem]", "font-bold", "text-text-muted", "uppercase", "tracking-[0.2em]", "leading-none", "mb-1"], [1, "text-xl", "font-black", "text-white", "leading-tight", "uppercase", "tracking-wider"], ["aria-label", "Tiempo restante", 1, "flex-none", "p-1"], ["size", "sm", 3, "total", "remaining"], ["role", "status", "aria-live", "polite", 1, "mb-6", "flex", "flex-wrap", "items-center", "justify-center", "gap-2"], [1, "rounded-full", "border", "px-3", "py-1.5", "text-[0.65rem]", "font-black", "uppercase", "tracking-widest", 3, "ngClass"], ["type", "button", 1, "mx-auto", "mb-5", "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-purple-400/40", "bg-purple-500/10", "px-4", "py-2", "text-xs", "font-black", "tracking-widest", "text-purple-200", "transition", "hover:border-purple-300", "hover:bg-purple-500/20"], [1, "text-center", "mb-8", "px-1", "md:px-8"], [1, "text-2xl", "sm:text-3xl", "md:text-4xl", "font-display", "font-black", "leading-tight", "drop-shadow-md", "text-white", "tracking-wide"], [1, "mt-auto"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-3", "sm:gap-4"], [1, "flex", "flex-col", "items-center", "max-w-2xl", "mx-auto", "w-full", "gap-6"], [1, "rounded-full", "border", "border-purple-400/30", "bg-purple-500/10", "px-3", "py-1.5", "text-[0.65rem]", "font-black", "uppercase", "tracking-widest", "text-purple-200"], [1, "rounded-full", "border", "border-white/10", "bg-white/5", "px-3", "py-1.5", "text-xs", "font-bold", "text-white/80"], ["type", "button", 1, "mx-auto", "mb-5", "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-purple-400/40", "bg-purple-500/10", "px-4", "py-2", "text-xs", "font-black", "tracking-widest", "text-purple-200", "transition", "hover:border-purple-300", "hover:bg-purple-500/20", 3, "click"], ["aria-hidden", "true"], [1, "relative", "p-4", "sm:p-5", "rounded-2xl", "text-left", "transition-all", "duration-300", "group", "overflow-hidden", "border-2", "cursor-pointer", 3, "disabled", "ngClass"], [1, "relative", "p-4", "sm:p-5", "rounded-2xl", "text-left", "transition-all", "duration-300", "group", "overflow-hidden", "border-2", "cursor-pointer", 3, "click", "disabled", "ngClass"], [1, "relative", "z-10", "flex", "items-center", "gap-5"], [1, "w-11", "h-11", "rounded-xl", "flex", "items-center", "justify-center", "font-black", "text-lg", "shadow-inner", "transition-colors", 3, "ngClass"], [1, "text-base", "sm:text-lg", "md:text-xl", "font-bold", "tracking-wide", "leading-snug"], [1, "relative", "w-full"], ["type", "text", "placeholder", "Escribe tu respuesta aqu\u00ED...", 1, "input-glass", "w-full", "text-center", "text-3xl", "p-6", "font-bold", 3, "ngModelChange", "keyup.enter", "ngModel", "disabled"], [1, "btn-primary", "w-full", "max-w-xs", "text-xl", "font-bold", "py-5", "rounded-2xl", "shadow-lg", 3, "click", "disabled"]], template: function QuestionModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, QuestionModalComponent_Conditional_0_Template, 26, 21, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.question ? 0 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, TimerComponent, CategoryBadgeComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuestionModalComponent, [{
        type: Component,
        args: [{ selector: 'app-question-modal', standalone: true, imports: [CommonModule, FormsModule, TimerComponent, CategoryBadgeComponent], template: "@if (question) {\n  <div class=\"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6\">\n    <!-- High Blur Immersive Backdrop -->\n    <div class=\"absolute inset-0 bg-black/80 backdrop-blur-2xl animate-fade-in\"></div>\n    <!-- Modal Content -->\n    <div\n      class=\"relative w-full max-w-4xl max-h-[94dvh] flex flex-col glass-strong rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_1.5625rem_3.75rem_rgba(0,0,0,0.6)] animate-bounce-in border\"\n      [style.borderColor]=\"question.categoryColor + '50'\"\n      [style.boxShadow]=\"'0 0 3.125rem ' + question.categoryColor + '15'\"\n    >\n      <!-- Header / Category Color Bar -->\n      <div class=\"h-4 w-full\" [style.backgroundColor]=\"question.categoryColor\"></div>\n      <!-- Main Content Area -->\n      <div class=\"p-5 sm:p-7 md:p-10 flex flex-col flex-grow overflow-y-auto\">\n        <div class=\"flex justify-between items-center gap-5 mb-7\">\n          <!-- Category Badge Capsule -->\n          <div\n            class=\"flex items-center gap-4 bg-black/40 p-2 pr-6 rounded-full border border-white/5 shadow-inner\"\n          >\n            <app-category-badge\n              [name]=\"question.categoryName\"\n              [icon]=\"question.categoryIcon\"\n              [color]=\"question.categoryColor\"\n              [compact]=\"true\"\n              compactSize=\"lg\"\n            >\n            </app-category-badge>\n            <div>\n              <h4\n                class=\"text-[0.65rem] font-bold text-text-muted uppercase tracking-[0.2em] leading-none mb-1\"\n              >\n                Categor\u00EDa\n              </h4>\n              <h3 class=\"text-xl font-black text-white leading-tight uppercase tracking-wider\">\n                {{ question.categoryName }}\n              </h3>\n            </div>\n          </div>\n          <div class=\"flex-none p-1\" aria-label=\"Tiempo restante\">\n            <app-timer [total]=\"timerTotal\" [remaining]=\"timer\" size=\"sm\"></app-timer>\n          </div>\n        </div>\n        <div class=\"mb-6 flex flex-wrap items-center justify-center gap-2\" role=\"status\" aria-live=\"polite\">\n          <span class=\"rounded-full border px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-widest\"\n                [ngClass]=\"isReboundTurn ? 'border-pink-400/60 bg-pink-500/20 text-white shadow-[0_0_1.125rem_rgba(236,72,153,0.25)]' : 'border-white/15 bg-white/5 text-white/70'\">\n            {{ isReboundTurn ? '\u26A1 Rebote activo' : 'Responde ahora' }} \u00B7 {{ answeringPlayerName }}\n          </span>\n          @if (reboundQueue.length > 0) {\n            <span\n              class=\"rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-widest text-purple-200\"\n              >Cola de rebotes</span>\n            @for (playerName of reboundQueue; track playerName; let index = $index) {\n              <span class=\"rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/80\">\n                {{ index + 1 }}. {{ playerName }}\n              </span>\n            }\n          }\n        </div>\n        @if (canBezzerwizzer) {\n          <button\n            type=\"button\"\n            (click)=\"onBezzerwizzer.emit()\"\n            class=\"mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-xs font-black tracking-widest text-purple-200 transition hover:border-purple-300 hover:bg-purple-500/20\"\n          >\n            <span aria-hidden=\"true\">\u2726</span> BEZZER \u00B7 REBOTE +1\n          </button>\n        }\n        <!-- Question Text -->\n        <div class=\"text-center mb-8 px-1 md:px-8\">\n          <h2\n            class=\"text-2xl sm:text-3xl md:text-4xl font-display font-black leading-tight drop-shadow-md text-white tracking-wide\"\n          >\n            {{ question.questionText }}\n          </h2>\n        </div>\n        <!-- Answer Section -->\n        <div class=\"mt-auto\">\n          <!-- Multiple Choice Options -->\n          @if (question.questionType === 'MULTIPLE_CHOICE') {\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4\">\n              @for (option of question.options; track option; let i = $index) {\n                <button\n                  (click)=\"selectOption(getLetter(i))\"\n                  [disabled]=\"isAnswered || selectionFailed\"\n                  class=\"relative p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 group overflow-hidden border-2 cursor-pointer\"\n                  [ngClass]=\"getOptionClass(getLetter(i))\"\n                >\n                  <div class=\"relative z-10 flex items-center gap-5\">\n                    <div\n                      class=\"w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg shadow-inner transition-colors\"\n                      [ngClass]=\"getLetterClass(getLetter(i))\"\n                    >\n                      {{ getLetter(i) }}\n                    </div>\n                    <span\n                      class=\"text-base sm:text-lg md:text-xl font-bold tracking-wide leading-snug\"\n                      >{{ option }}</span\n                    >\n                  </div>\n                </button>\n              }\n            </div>\n          }\n          <!-- Free Text Entry -->\n          @if (question.questionType === 'FREE_TEXT') {\n            <div class=\"flex flex-col items-center max-w-2xl mx-auto w-full gap-6\">\n              <div class=\"relative w-full\">\n                <input\n                  type=\"text\"\n                  [(ngModel)]=\"freeTextValue\"\n                  [disabled]=\"isAnswered || selectionFailed\"\n                  (keyup.enter)=\"submitFreeText()\"\n                  placeholder=\"Escribe tu respuesta aqu\u00ED...\"\n                  class=\"input-glass w-full text-center text-3xl p-6 font-bold\"\n                />\n              </div>\n              <button\n                (click)=\"submitFreeText()\"\n                [disabled]=\"isAnswered || selectionFailed || !freeTextValue.trim()\"\n                class=\"btn-primary w-full max-w-xs text-xl font-bold py-5 rounded-2xl shadow-lg\"\n              >\n                ENVIAR RESPUESTA\n              </button>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  </div>\n}\n" }]
    }], null, { question: [{
            type: Input
        }], timer: [{
            type: Input
        }], timerTotal: [{
            type: Input
        }], isAnswered: [{
            type: Input
        }], canChangeAnswer: [{
            type: Input
        }], selectionFailed: [{
            type: Input
        }], canBezzerwizzer: [{
            type: Input
        }], answeringPlayerName: [{
            type: Input
        }], isReboundTurn: [{
            type: Input
        }], reboundQueue: [{
            type: Input
        }], onAnswer: [{
            type: Output
        }], onBezzerwizzer: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(QuestionModalComponent, { className: "QuestionModalComponent", filePath: "src/app/pages/game/components/question-modal/question-modal.component.ts", lineNumber: 14 }); })();
