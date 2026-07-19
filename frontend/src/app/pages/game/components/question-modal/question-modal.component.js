import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from '../../../../shared/components/timer/timer.component';
import { CategoryBadgeComponent } from '../../../../shared/components/category-badge/category-badge.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function QuestionModalComponent_Conditional_0_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "app-category-badge", 17);
    i0.ɵɵelementStart(2, "div")(3, "h4", 18);
    i0.ɵɵtext(4, " Categor\u00EDa ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3", 19);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", ctx_r0.question.categoryName)("icon", ctx_r0.question.categoryIcon)("color", ctx_r0.question.categoryColor)("compact", true);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.question.categoryName, " ");
} }
function QuestionModalComponent_Conditional_0_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "span", 20);
    i0.ɵɵtext(2, "\u2605");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "span");
    i0.ɵɵtext(5, "Ronda bonus");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h3");
    i0.ɵɵtext(7, "Pregunta Dorada");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9, "+2");
    i0.ɵɵelementEnd()();
} }
function QuestionModalComponent_Conditional_0_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "span", 21);
    i0.ɵɵtext(2, "\u26A1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "Todos responden a la vez");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "El primer acierto gana 2 puntos");
    i0.ɵɵelementEnd()();
} }
function QuestionModalComponent_Conditional_0_Conditional_11_Conditional_3_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const playerName_r2 = ctx.$implicit;
    const ɵ$index_70_r3 = ctx.$index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ɵ$index_70_r3 + 1, ". ", playerName_r2, " ");
} }
function QuestionModalComponent_Conditional_0_Conditional_11_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, "Cola de rebotes");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(2, QuestionModalComponent_Conditional_0_Conditional_11_Conditional_3_For_3_Template, 2, 2, "span", 24, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.reboundQueue);
} }
function QuestionModalComponent_Conditional_0_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "span", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, QuestionModalComponent_Conditional_0_Conditional_11_Conditional_3_Template, 4, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r0.isReboundTurn ? "border-pink-400/60 bg-pink-500/20 text-white shadow-[0_0_1.125rem_rgba(236,72,153,0.25)]" : "border-white/15 bg-white/5 text-white/70");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r0.isReboundTurn ? "\u26A1 Rebote activo" : "Responde ahora", " \u00B7 ", ctx_r0.answeringPlayerName, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.reboundQueue.length > 0 ? 3 : -1);
} }
function QuestionModalComponent_Conditional_0_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function QuestionModalComponent_Conditional_0_Conditional_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onBezzerwizzer.emit()); });
    i0.ɵɵelementStart(1, "span", 21);
    i0.ɵɵtext(2, "\u2726");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " BEZZER \u00B7 REBOTE +1 ");
    i0.ɵɵelementEnd();
} }
function QuestionModalComponent_Conditional_0_Conditional_17_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function QuestionModalComponent_Conditional_0_Conditional_17_For_2_Template_button_click_0_listener() { const ɵ$index_91_r6 = i0.ɵɵrestoreView(_r5).$index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.selectOption(ctx_r0.getLetter(ɵ$index_91_r6))); });
    i0.ɵɵelementStart(1, "div", 30)(2, "div", 31);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 32);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ɵ$index_91_r6 = ctx.$index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r0.isAnswered || ctx_r0.selectionFailed)("ngClass", ctx_r0.getOptionClass(ctx_r0.getLetter(ɵ$index_91_r6)));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r0.getLetterClass(ctx_r0.getLetter(ɵ$index_91_r6)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getLetter(ɵ$index_91_r6), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r7);
} }
function QuestionModalComponent_Conditional_0_Conditional_17_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Respuesta preparada para el rebote: opci\u00F3n ", ctx_r0.selectedOption, ". Puedes cambiarla hasta tu turno. ");
} }
function QuestionModalComponent_Conditional_0_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵrepeaterCreate(1, QuestionModalComponent_Conditional_0_Conditional_17_For_2_Template, 6, 5, "button", 27, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, QuestionModalComponent_Conditional_0_Conditional_17_Conditional_3_Template, 2, 1, "p", 28);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.question.options);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.canChangeAnswer && ctx_r0.selectedOption ? 3 : -1);
} }
function QuestionModalComponent_Conditional_0_Conditional_18_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Tu respuesta queda preparada para el rebote. Puedes editarla mientras responde ", ctx_r0.answeringPlayerName, ". ");
} }
function QuestionModalComponent_Conditional_0_Conditional_18_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " \u2713 RESPUESTA ENVIADA ");
} }
function QuestionModalComponent_Conditional_0_Conditional_18_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " ENVIAR \u00B7 OPTAR A +2 ");
} }
function QuestionModalComponent_Conditional_0_Conditional_18_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " \u2713 RESPUESTA PREPARADA ");
} }
function QuestionModalComponent_Conditional_0_Conditional_18_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " GUARDAR PARA EL REBOTE ");
} }
function QuestionModalComponent_Conditional_0_Conditional_18_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " ENVIAR RESPUESTA ");
} }
function QuestionModalComponent_Conditional_0_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 33)(2, "input", 34);
    i0.ɵɵtwoWayListener("ngModelChange", function QuestionModalComponent_Conditional_0_Conditional_18_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.freeTextValue, $event) || (ctx_r0.freeTextValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function QuestionModalComponent_Conditional_0_Conditional_18_Template_input_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onFreeTextChanged()); })("keyup.enter", function QuestionModalComponent_Conditional_0_Conditional_18_Template_input_keyup_enter_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.submitFreeText()); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, QuestionModalComponent_Conditional_0_Conditional_18_Conditional_3_Template, 2, 1, "p", 35);
    i0.ɵɵelementStart(4, "button", 36);
    i0.ɵɵlistener("click", function QuestionModalComponent_Conditional_0_Conditional_18_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.submitFreeText()); });
    i0.ɵɵconditionalCreate(5, QuestionModalComponent_Conditional_0_Conditional_18_Conditional_5_Template, 1, 0)(6, QuestionModalComponent_Conditional_0_Conditional_18_Conditional_6_Template, 1, 0)(7, QuestionModalComponent_Conditional_0_Conditional_18_Conditional_7_Template, 1, 0)(8, QuestionModalComponent_Conditional_0_Conditional_18_Conditional_8_Template, 1, 0)(9, QuestionModalComponent_Conditional_0_Conditional_18_Conditional_9_Template, 1, 0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.freeTextValue);
    i0.ɵɵproperty("disabled", ctx_r0.isAnswered || ctx_r0.selectionFailed);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.canChangeAnswer ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("golden-submit", ctx_r0.isGoldenQuestion)("ring-4", ctx_r0.canChangeAnswer && ctx_r0.freeTextPrepared)("ring-primary-light", ctx_r0.canChangeAnswer && ctx_r0.freeTextPrepared)("bg-correct", ctx_r0.canChangeAnswer && ctx_r0.freeTextPrepared)("scale-105", ctx_r0.canChangeAnswer && ctx_r0.freeTextPrepared);
    i0.ɵɵproperty("disabled", ctx_r0.isAnswered || ctx_r0.selectionFailed || !ctx_r0.freeTextValue.trim());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isGoldenQuestion && ctx_r0.isAnswered ? 5 : ctx_r0.isGoldenQuestion ? 6 : ctx_r0.canChangeAnswer && ctx_r0.freeTextPrepared ? 7 : ctx_r0.canChangeAnswer ? 8 : 9);
} }
function QuestionModalComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelement(1, "div", 1);
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵelement(3, "div", 3);
    i0.ɵɵelementStart(4, "div", 4)(5, "div", 5);
    i0.ɵɵconditionalCreate(6, QuestionModalComponent_Conditional_0_Conditional_6_Template, 7, 5, "div", 6)(7, QuestionModalComponent_Conditional_0_Conditional_7_Template, 10, 0, "div", 7);
    i0.ɵɵelementStart(8, "div", 8);
    i0.ɵɵelement(9, "app-timer", 9);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(10, QuestionModalComponent_Conditional_0_Conditional_10_Template, 7, 0, "div", 10)(11, QuestionModalComponent_Conditional_0_Conditional_11_Template, 4, 4, "div", 11);
    i0.ɵɵconditionalCreate(12, QuestionModalComponent_Conditional_0_Conditional_12_Template, 4, 0, "button", 12);
    i0.ɵɵelementStart(13, "div", 13)(14, "h2", 14);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 15);
    i0.ɵɵconditionalCreate(17, QuestionModalComponent_Conditional_0_Conditional_17_Template, 4, 1);
    i0.ɵɵconditionalCreate(18, QuestionModalComponent_Conditional_0_Conditional_18_Template, 10, 15, "div", 16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("golden-backdrop", ctx_r0.isGoldenQuestion);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("border-color", ctx_r0.question.categoryColor + "50")("box-shadow", "0 0 3.125rem " + ctx_r0.question.categoryColor + "15");
    i0.ɵɵclassProp("golden-question", ctx_r0.isGoldenQuestion);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-color", ctx_r0.question.categoryColor);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(!ctx_r0.isGoldenQuestion ? 6 : 7);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("total", ctx_r0.timerTotal)("remaining", ctx_r0.timer);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isGoldenQuestion ? 10 : 11);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.canBezzerwizzer && !ctx_r0.isGoldenQuestion ? 12 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("golden-question-text", ctx_r0.isGoldenQuestion);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.question.questionText, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.question.questionType === "MULTIPLE_CHOICE" ? 17 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.question.questionType === "FREE_TEXT" ? 18 : -1);
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
    isGoldenQuestion = false;
    onAnswer = new EventEmitter();
    onBezzerwizzer = new EventEmitter();
    selectedOption = null;
    freeTextValue = '';
    freeTextPrepared = false;
    autoSubmittedAtTimerEnd = false;
    ngOnChanges(changes) {
        if (changes['question'] && changes['question'].previousValue?.id !== changes['question'].currentValue?.id) {
            this.selectedOption = null;
            this.freeTextValue = '';
            this.freeTextPrepared = false;
            this.autoSubmittedAtTimerEnd = false;
        }
        if (changes['timer'] && !changes['timer'].firstChange && this.timer === 0 && !this.autoSubmittedAtTimerEnd) {
            this.autoSubmittedAtTimerEnd = true;
            this.submitFreeText();
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
        if (this.canChangeAnswer)
            this.freeTextPrepared = true;
        this.onAnswer.emit({
            questionId: this.question.id,
            freeTextAnswer: this.freeTextValue.trim()
        });
    }
    onFreeTextChanged() {
        this.freeTextPrepared = false;
    }
    getOptionClass(letter) {
        if (this.selectedOption === letter && this.selectionFailed) {
            return 'bg-incorrect/10 border-incorrect/50 text-white/45 grayscale opacity-65 cursor-not-allowed';
        }
        if (!this.selectedOption) {
            return 'bg-black/30 border-white/10 text-white hover:bg-black/50 hover:border-white/20 hover:scale-[1.01] hover:-translate-y-0.5';
        }
        if (this.selectedOption === letter) {
            return 'bg-primary/30 border-primary text-white scale-[1.02] ring-4 ring-primary/35 shadow-[0_0_1.75rem_rgba(168,85,247,0.55)]';
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: QuestionModalComponent, selectors: [["app-question-modal"]], inputs: { question: "question", timer: "timer", timerTotal: "timerTotal", isAnswered: "isAnswered", canChangeAnswer: "canChangeAnswer", selectionFailed: "selectionFailed", canBezzerwizzer: "canBezzerwizzer", answeringPlayerName: "answeringPlayerName", isReboundTurn: "isReboundTurn", reboundQueue: "reboundQueue", isGoldenQuestion: "isGoldenQuestion" }, outputs: { onAnswer: "onAnswer", onBezzerwizzer: "onBezzerwizzer" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "sm:p-6"], [1, "absolute", "inset-0", "bg-black/80", "backdrop-blur-2xl", "animate-fade-in"], [1, "relative", "w-full", "max-w-4xl", "max-h-[94dvh]", "flex", "flex-col", "glass-strong", "rounded-[1.5rem]", "sm:rounded-[2.5rem]", "overflow-hidden", "shadow-[0_1.5625rem_3.75rem_rgba(0,0,0,0.6)]", "animate-bounce-in", "border"], [1, "h-4", "w-full", "question-color-bar"], [1, "p-5", "sm:p-7", "md:p-10", "flex", "flex-col", "flex-grow", "overflow-y-auto"], [1, "flex", "justify-between", "items-center", "gap-5", "mb-7"], [1, "flex", "items-center", "gap-4", "bg-black/40", "p-2", "pr-6", "rounded-full", "border", "border-white/5", "shadow-inner"], ["aria-label", "Pregunta Dorada, ronda de bonificaci\u00F3n", 1, "golden-title"], ["aria-label", "Tiempo restante", 1, "flex-none", "p-1"], ["size", "sm", 3, "total", "remaining"], ["role", "status", "aria-live", "polite", 1, "golden-rules"], ["role", "status", "aria-live", "polite", 1, "mb-6", "flex", "flex-wrap", "items-center", "justify-center", "gap-2"], ["type", "button", 1, "mx-auto", "mb-5", "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-purple-400/40", "bg-purple-500/10", "px-4", "py-2", "text-xs", "font-black", "tracking-widest", "text-purple-200", "transition", "hover:border-purple-300", "hover:bg-purple-500/20"], [1, "text-center", "mb-8", "px-1", "md:px-8"], [1, "text-2xl", "sm:text-3xl", "md:text-4xl", "font-display", "font-black", "leading-tight", "drop-shadow-md", "text-white", "tracking-wide"], [1, "mt-auto"], [1, "flex", "flex-col", "items-center", "max-w-2xl", "mx-auto", "w-full", "gap-6"], ["compactSize", "lg", 3, "name", "icon", "color", "compact"], [1, "text-[0.65rem]", "font-bold", "text-text-muted", "uppercase", "tracking-[0.2em]", "leading-none", "mb-1"], [1, "text-xl", "font-black", "text-white", "leading-tight", "uppercase", "tracking-wider"], ["aria-hidden", "true", 1, "golden-title__star"], ["aria-hidden", "true"], [1, "rounded-full", "border", "px-3", "py-1.5", "text-[0.65rem]", "font-black", "uppercase", "tracking-widest", 3, "ngClass"], [1, "rounded-full", "border", "border-purple-400/30", "bg-purple-500/10", "px-3", "py-1.5", "text-[0.65rem]", "font-black", "uppercase", "tracking-widest", "text-purple-200"], [1, "rounded-full", "border", "border-white/10", "bg-white/5", "px-3", "py-1.5", "text-xs", "font-bold", "text-white/80"], ["type", "button", 1, "mx-auto", "mb-5", "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-purple-400/40", "bg-purple-500/10", "px-4", "py-2", "text-xs", "font-black", "tracking-widest", "text-purple-200", "transition", "hover:border-purple-300", "hover:bg-purple-500/20", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-3", "sm:gap-4"], [1, "relative", "p-4", "sm:p-5", "rounded-2xl", "text-left", "transition-all", "duration-300", "group", "overflow-hidden", "border-2", "cursor-pointer", 3, "disabled", "ngClass"], ["role", "status", 1, "mt-5", "text-center", "text-sm", "font-bold", "text-primary-light"], [1, "relative", "p-4", "sm:p-5", "rounded-2xl", "text-left", "transition-all", "duration-300", "group", "overflow-hidden", "border-2", "cursor-pointer", 3, "click", "disabled", "ngClass"], [1, "relative", "z-10", "flex", "items-center", "gap-5"], [1, "w-11", "h-11", "rounded-xl", "flex", "items-center", "justify-center", "font-black", "text-lg", "shadow-inner", "transition-colors", 3, "ngClass"], [1, "text-base", "sm:text-lg", "md:text-xl", "font-bold", "tracking-wide", "leading-snug"], [1, "relative", "w-full"], ["type", "text", "placeholder", "Escribe tu respuesta aqu\u00ED...", 1, "input-glass", "w-full", "text-center", "text-3xl", "p-6", "font-bold", 3, "ngModelChange", "keyup.enter", "ngModel", "disabled"], ["role", "status", 1, "-mt-3", "text-center", "text-sm", "font-bold", "text-primary-light"], [1, "btn-primary", "w-full", "max-w-xs", "text-xl", "font-bold", "py-5", "rounded-2xl", "shadow-lg", "transition-all", 3, "click", "disabled"]], template: function QuestionModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, QuestionModalComponent_Conditional_0_Template, 19, 20, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.question ? 0 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, TimerComponent, CategoryBadgeComponent], styles: [".golden-backdrop[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at 50% 40%, rgb(246 196 83 / .2), transparent 35%),\n    rgb(3 2 8 / .9);\n}\n\n.golden-question[_ngcontent-%COMP%] {\n  border-color: rgb(255 215 112 / .85) !important;\n  background:\n    radial-gradient(circle at 50% -10%, rgb(255 218 117 / .18), transparent 40%),\n    linear-gradient(150deg, rgb(45 31 11 / .98), rgb(12 9 20 / .98) 58%, rgb(35 21 8 / .98));\n  box-shadow:\n    0 0 0 .125rem rgb(255 225 139 / .12),\n    0 0 4rem rgb(246 196 83 / .32),\n    0 1.6rem 4rem rgb(0 0 0 / .72) !important;\n}\n\n.golden-question[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  opacity: .26;\n  pointer-events: none;\n  background-image:\n    radial-gradient(circle, #fff4b8 0 .0625rem, transparent .125rem),\n    radial-gradient(circle, #f6c453 0 .0625rem, transparent .125rem);\n  background-position: 0 0, 1.6rem 1.6rem;\n  background-size: 3.2rem 3.2rem;\n}\n\n.golden-question[_ngcontent-%COMP%]   .question-color-bar[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(90deg, #8c5c05, #fff0a8, #e8a91c, #fff0a8, #8c5c05) !important;\n  box-shadow: 0 0 .9rem rgb(255 218 117 / .7);\n}\n\n.golden-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: .9rem;\n  color: #fff5c7;\n}\n\n.golden-title__star[_ngcontent-%COMP%] {\n  display: grid;\n  width: 3.5rem;\n  height: 3.5rem;\n  place-items: center;\n  border: .0625rem solid rgb(255 239 172 / .72);\n  border-radius: 50%;\n  color: #4a2a00;\n  background: linear-gradient(145deg, #fff7bd, #e9a51c);\n  box-shadow: 0 0 1.6rem rgb(246 196 83 / .5);\n  font-size: 1.75rem;\n}\n\n.golden-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.golden-title__star) {\n  display: block;\n  color: rgb(255 238 171 / .66);\n  font-size: .65rem;\n  font-weight: 900;\n  letter-spacing: .2em;\n  text-transform: uppercase;\n}\n\n.golden-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: .15rem 0 0;\n  font-family: var(--font-display);\n  font-size: clamp(1.25rem, 3vw, 2rem);\n  font-weight: 950;\n  letter-spacing: .05em;\n  text-transform: uppercase;\n}\n\n.golden-title[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  padding: .35rem .65rem;\n  border: .0625rem solid rgb(255 240 178 / .5);\n  border-radius: 999px;\n  color: #3a2100;\n  background: #f6c453;\n  font-size: 1rem;\n}\n\n.golden-rules[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n  gap: .45rem .75rem;\n  margin: 0 auto 1.7rem;\n  padding: .65rem 1rem;\n  border: .0625rem solid rgb(246 196 83 / .32);\n  border-radius: 999px;\n  color: rgb(255 248 218 / .72);\n  background: rgb(246 196 83 / .08);\n  font-size: .75rem;\n  letter-spacing: .04em;\n}\n\n.golden-rules[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff3bb;\n  text-transform: uppercase;\n}\n\n.golden-question-text[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fff9df !important;\n  text-shadow: 0 0 1.5rem rgb(246 196 83 / .22);\n}\n\n.golden-submit[_ngcontent-%COMP%] {\n  border: .0625rem solid #fff0ad;\n  color: #3b2100;\n  background: linear-gradient(135deg, #fff0a8, #f6c453 55%, #d58c0b);\n  box-shadow: 0 .8rem 2rem rgb(197 128 5 / .25), 0 0 1.5rem rgb(246 196 83 / .2);\n}\n\n.golden-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(1.08);\n  transform: translateY(-.125rem) scale(1.02);\n}\n\n@media (max-width: 40rem) {\n  .golden-title__star[_ngcontent-%COMP%] { width: 2.8rem; height: 2.8rem; font-size: 1.35rem; }\n  .golden-title[_ngcontent-%COMP%] { gap: .6rem; }\n  .golden-title[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] { display: none; }\n  .golden-rules[_ngcontent-%COMP%] { border-radius: 1rem; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .golden-submit[_ngcontent-%COMP%] { transition: none; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuestionModalComponent, [{
        type: Component,
        args: [{ selector: 'app-question-modal', standalone: true, imports: [CommonModule, FormsModule, TimerComponent, CategoryBadgeComponent], template: "@if (question) {\n  <div class=\"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6\">\n    <!-- High Blur Immersive Backdrop -->\n    <div class=\"absolute inset-0 bg-black/80 backdrop-blur-2xl animate-fade-in\"\n         [class.golden-backdrop]=\"isGoldenQuestion\"></div>\n    <!-- Modal Content -->\n    <div\n      class=\"relative w-full max-w-4xl max-h-[94dvh] flex flex-col glass-strong rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_1.5625rem_3.75rem_rgba(0,0,0,0.6)] animate-bounce-in border\"\n      [class.golden-question]=\"isGoldenQuestion\"\n      [style.borderColor]=\"question.categoryColor + '50'\"\n      [style.boxShadow]=\"'0 0 3.125rem ' + question.categoryColor + '15'\"\n    >\n      <!-- Header / Category Color Bar -->\n      <div class=\"h-4 w-full question-color-bar\" [style.backgroundColor]=\"question.categoryColor\"></div>\n      <!-- Main Content Area -->\n      <div class=\"p-5 sm:p-7 md:p-10 flex flex-col flex-grow overflow-y-auto\">\n        <div class=\"flex justify-between items-center gap-5 mb-7\">\n          <!-- Category Badge Capsule -->\n          @if (!isGoldenQuestion) {\n          <div\n            class=\"flex items-center gap-4 bg-black/40 p-2 pr-6 rounded-full border border-white/5 shadow-inner\"\n          >\n            <app-category-badge\n              [name]=\"question.categoryName\"\n              [icon]=\"question.categoryIcon\"\n              [color]=\"question.categoryColor\"\n              [compact]=\"true\"\n              compactSize=\"lg\"\n            >\n            </app-category-badge>\n            <div>\n              <h4\n                class=\"text-[0.65rem] font-bold text-text-muted uppercase tracking-[0.2em] leading-none mb-1\"\n              >\n                Categor\u00EDa\n              </h4>\n              <h3 class=\"text-xl font-black text-white leading-tight uppercase tracking-wider\">\n                {{ question.categoryName }}\n              </h3>\n            </div>\n          </div>\n          } @else {\n            <div class=\"golden-title\" aria-label=\"Pregunta Dorada, ronda de bonificaci\u00F3n\">\n              <span class=\"golden-title__star\" aria-hidden=\"true\">\u2605</span>\n              <div>\n                <span>Ronda bonus</span>\n                <h3>Pregunta Dorada</h3>\n              </div>\n              <strong>+2</strong>\n            </div>\n          }\n          <div class=\"flex-none p-1\" aria-label=\"Tiempo restante\">\n            <app-timer [total]=\"timerTotal\" [remaining]=\"timer\" size=\"sm\"></app-timer>\n          </div>\n        </div>\n        @if (isGoldenQuestion) {\n          <div class=\"golden-rules\" role=\"status\" aria-live=\"polite\">\n            <span aria-hidden=\"true\">\u26A1</span>\n            <strong>Todos responden a la vez</strong>\n            <span>El primer acierto gana 2 puntos</span>\n          </div>\n        } @else {\n        <div class=\"mb-6 flex flex-wrap items-center justify-center gap-2\" role=\"status\" aria-live=\"polite\">\n          <span class=\"rounded-full border px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-widest\"\n                [ngClass]=\"isReboundTurn ? 'border-pink-400/60 bg-pink-500/20 text-white shadow-[0_0_1.125rem_rgba(236,72,153,0.25)]' : 'border-white/15 bg-white/5 text-white/70'\">\n            {{ isReboundTurn ? '\u26A1 Rebote activo' : 'Responde ahora' }} \u00B7 {{ answeringPlayerName }}\n          </span>\n          @if (reboundQueue.length > 0) {\n            <span\n              class=\"rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-widest text-purple-200\"\n              >Cola de rebotes</span>\n            @for (playerName of reboundQueue; track playerName; let index = $index) {\n              <span class=\"rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/80\">\n                {{ index + 1 }}. {{ playerName }}\n              </span>\n            }\n          }\n        </div>\n        }\n        @if (canBezzerwizzer && !isGoldenQuestion) {\n          <button\n            type=\"button\"\n            (click)=\"onBezzerwizzer.emit()\"\n            class=\"mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-xs font-black tracking-widest text-purple-200 transition hover:border-purple-300 hover:bg-purple-500/20\"\n          >\n            <span aria-hidden=\"true\">\u2726</span> BEZZER \u00B7 REBOTE +1\n          </button>\n        }\n        <!-- Question Text -->\n        <div class=\"text-center mb-8 px-1 md:px-8\">\n          <h2\n            class=\"text-2xl sm:text-3xl md:text-4xl font-display font-black leading-tight drop-shadow-md text-white tracking-wide\"\n            [class.golden-question-text]=\"isGoldenQuestion\"\n          >\n            {{ question.questionText }}\n          </h2>\n        </div>\n        <!-- Answer Section -->\n        <div class=\"mt-auto\">\n          <!-- Multiple Choice Options -->\n          @if (question.questionType === 'MULTIPLE_CHOICE') {\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4\">\n              @for (option of question.options; track option; let i = $index) {\n                <button\n                  (click)=\"selectOption(getLetter(i))\"\n                  [disabled]=\"isAnswered || selectionFailed\"\n                  class=\"relative p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 group overflow-hidden border-2 cursor-pointer\"\n                  [ngClass]=\"getOptionClass(getLetter(i))\"\n                >\n                  <div class=\"relative z-10 flex items-center gap-5\">\n                    <div\n                      class=\"w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg shadow-inner transition-colors\"\n                      [ngClass]=\"getLetterClass(getLetter(i))\"\n                    >\n                      {{ getLetter(i) }}\n                    </div>\n                    <span\n                      class=\"text-base sm:text-lg md:text-xl font-bold tracking-wide leading-snug\"\n                      >{{ option }}</span\n                    >\n                  </div>\n                </button>\n              }\n            </div>\n            @if (canChangeAnswer && selectedOption) {\n              <p class=\"mt-5 text-center text-sm font-bold text-primary-light\" role=\"status\">\n                Respuesta preparada para el rebote: opci\u00F3n {{ selectedOption }}. Puedes cambiarla hasta tu turno.\n              </p>\n            }\n          }\n          <!-- Free Text Entry -->\n          @if (question.questionType === 'FREE_TEXT') {\n            <div class=\"flex flex-col items-center max-w-2xl mx-auto w-full gap-6\">\n              <div class=\"relative w-full\">\n                <input\n                  type=\"text\"\n                  [(ngModel)]=\"freeTextValue\"\n                  (ngModelChange)=\"onFreeTextChanged()\"\n                  [disabled]=\"isAnswered || selectionFailed\"\n                  (keyup.enter)=\"submitFreeText()\"\n                  placeholder=\"Escribe tu respuesta aqu\u00ED...\"\n                  class=\"input-glass w-full text-center text-3xl p-6 font-bold\"\n                />\n              </div>\n              @if (canChangeAnswer) {\n                <p class=\"-mt-3 text-center text-sm font-bold text-primary-light\" role=\"status\">\n                  Tu respuesta queda preparada para el rebote. Puedes editarla mientras responde {{ answeringPlayerName }}.\n                </p>\n              }\n              <button\n                (click)=\"submitFreeText()\"\n                [disabled]=\"isAnswered || selectionFailed || !freeTextValue.trim()\"\n                class=\"btn-primary w-full max-w-xs text-xl font-bold py-5 rounded-2xl shadow-lg transition-all\"\n                [class.golden-submit]=\"isGoldenQuestion\"\n                [class.ring-4]=\"canChangeAnswer && freeTextPrepared\"\n                [class.ring-primary-light]=\"canChangeAnswer && freeTextPrepared\"\n                [class.bg-correct]=\"canChangeAnswer && freeTextPrepared\"\n                [class.scale-105]=\"canChangeAnswer && freeTextPrepared\"\n              >\n                @if (isGoldenQuestion && isAnswered) {\n                  \u2713 RESPUESTA ENVIADA\n                } @else if (isGoldenQuestion) {\n                  ENVIAR \u00B7 OPTAR A +2\n                } @else if (canChangeAnswer && freeTextPrepared) {\n                  \u2713 RESPUESTA PREPARADA\n                } @else if (canChangeAnswer) {\n                  GUARDAR PARA EL REBOTE\n                } @else {\n                  ENVIAR RESPUESTA\n                }\n              </button>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  </div>\n}\n", styles: [".golden-backdrop {\n  background:\n    radial-gradient(circle at 50% 40%, rgb(246 196 83 / .2), transparent 35%),\n    rgb(3 2 8 / .9);\n}\n\n.golden-question {\n  border-color: rgb(255 215 112 / .85) !important;\n  background:\n    radial-gradient(circle at 50% -10%, rgb(255 218 117 / .18), transparent 40%),\n    linear-gradient(150deg, rgb(45 31 11 / .98), rgb(12 9 20 / .98) 58%, rgb(35 21 8 / .98));\n  box-shadow:\n    0 0 0 .125rem rgb(255 225 139 / .12),\n    0 0 4rem rgb(246 196 83 / .32),\n    0 1.6rem 4rem rgb(0 0 0 / .72) !important;\n}\n\n.golden-question::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  opacity: .26;\n  pointer-events: none;\n  background-image:\n    radial-gradient(circle, #fff4b8 0 .0625rem, transparent .125rem),\n    radial-gradient(circle, #f6c453 0 .0625rem, transparent .125rem);\n  background-position: 0 0, 1.6rem 1.6rem;\n  background-size: 3.2rem 3.2rem;\n}\n\n.golden-question .question-color-bar {\n  position: relative;\n  background: linear-gradient(90deg, #8c5c05, #fff0a8, #e8a91c, #fff0a8, #8c5c05) !important;\n  box-shadow: 0 0 .9rem rgb(255 218 117 / .7);\n}\n\n.golden-title {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: .9rem;\n  color: #fff5c7;\n}\n\n.golden-title__star {\n  display: grid;\n  width: 3.5rem;\n  height: 3.5rem;\n  place-items: center;\n  border: .0625rem solid rgb(255 239 172 / .72);\n  border-radius: 50%;\n  color: #4a2a00;\n  background: linear-gradient(145deg, #fff7bd, #e9a51c);\n  box-shadow: 0 0 1.6rem rgb(246 196 83 / .5);\n  font-size: 1.75rem;\n}\n\n.golden-title span:not(.golden-title__star) {\n  display: block;\n  color: rgb(255 238 171 / .66);\n  font-size: .65rem;\n  font-weight: 900;\n  letter-spacing: .2em;\n  text-transform: uppercase;\n}\n\n.golden-title h3 {\n  margin: .15rem 0 0;\n  font-family: var(--font-display);\n  font-size: clamp(1.25rem, 3vw, 2rem);\n  font-weight: 950;\n  letter-spacing: .05em;\n  text-transform: uppercase;\n}\n\n.golden-title > strong {\n  padding: .35rem .65rem;\n  border: .0625rem solid rgb(255 240 178 / .5);\n  border-radius: 999px;\n  color: #3a2100;\n  background: #f6c453;\n  font-size: 1rem;\n}\n\n.golden-rules {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n  gap: .45rem .75rem;\n  margin: 0 auto 1.7rem;\n  padding: .65rem 1rem;\n  border: .0625rem solid rgb(246 196 83 / .32);\n  border-radius: 999px;\n  color: rgb(255 248 218 / .72);\n  background: rgb(246 196 83 / .08);\n  font-size: .75rem;\n  letter-spacing: .04em;\n}\n\n.golden-rules strong {\n  color: #fff3bb;\n  text-transform: uppercase;\n}\n\n.golden-question-text {\n  position: relative;\n  color: #fff9df !important;\n  text-shadow: 0 0 1.5rem rgb(246 196 83 / .22);\n}\n\n.golden-submit {\n  border: .0625rem solid #fff0ad;\n  color: #3b2100;\n  background: linear-gradient(135deg, #fff0a8, #f6c453 55%, #d58c0b);\n  box-shadow: 0 .8rem 2rem rgb(197 128 5 / .25), 0 0 1.5rem rgb(246 196 83 / .2);\n}\n\n.golden-submit:hover:not(:disabled) {\n  filter: brightness(1.08);\n  transform: translateY(-.125rem) scale(1.02);\n}\n\n@media (max-width: 40rem) {\n  .golden-title__star { width: 2.8rem; height: 2.8rem; font-size: 1.35rem; }\n  .golden-title { gap: .6rem; }\n  .golden-title > strong { display: none; }\n  .golden-rules { border-radius: 1rem; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .golden-submit { transition: none; }\n}\n"] }]
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
        }], isGoldenQuestion: [{
            type: Input
        }], onAnswer: [{
            type: Output
        }], onBezzerwizzer: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(QuestionModalComponent, { className: "QuestionModalComponent", filePath: "src/app/pages/game/components/question-modal/question-modal.component.ts", lineNumber: 15 }); })();
