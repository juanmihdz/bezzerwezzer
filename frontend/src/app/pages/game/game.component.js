import { Component, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GameStateService } from '../../core/services/game-state.service';
import { AuthService } from '../../core/services/auth.service';
import { WebsocketService } from '../../core/services/websocket.service';
import { AudioService } from '../../core/services/audio.service';
import { SnackbarService } from '../../core/services/snackbar.service';
import { BoardComponent } from './components/board/board.component';
import { CategorySlotsComponent } from './components/category-slots/category-slots.component';
import { QuestionModalComponent } from './components/question-modal/question-modal.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { TacticalPanelComponent } from './components/tactical-panel/tactical-panel.component';
import { TurnIndicatorComponent } from './components/turn-indicator/turn-indicator.component';
import { CategoryBadgeComponent } from '../../shared/components/category-badge/category-badge.component';
import { RulesHelpComponent } from '../../shared/components/rules-help/rules-help.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.index;
const _forTrack1 = ($index, $item) => $item.playerId;
function GameComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx, " ");
} }
function GameComponent_Conditional_4_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Responde: ", ctx_r0.currentAnswerPlayerName);
} }
function GameComponent_Conditional_4_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const playerName_r2 = ctx.$implicit;
    const ɵ$index_21_r3 = ctx.$index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r0.isReboundTurn ? "Despu\u00E9s: " : ɵ$index_21_r3 + 1 + ". ", "", playerName_r2);
} }
function GameComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "span", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, GameComponent_Conditional_4_Conditional_3_Template, 2, 1, "span", 36);
    i0.ɵɵrepeaterCreate(4, GameComponent_Conditional_4_For_5_Template, 2, 2, "span", 37, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.isReboundTurn ? "Rebote activo" : "Cola de rebotes");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isReboundTurn ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.reboundQueueNames);
} }
function GameComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "span", 35);
    i0.ɵɵtext(2, "ZWAP");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 36);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.pendingZwapPlayerName, " est\u00E1 eligiendo un intercambio \u00B7 ", ctx_r0.gameState.timer(), " s ");
} }
function GameComponent_Conditional_11_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵelement(1, "app-category-badge", 43);
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const category_r5 = ctx;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", category_r5.category.name)("icon", category_r5.category.icon)("color", category_r5.category.color)("compact", true);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.currentTurnPlayerName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", category_r5.category.name, " \u00B7 ", category_r5.pointValue, " puntos");
} }
function GameComponent_Conditional_11_Conditional_6_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const playerName_r6 = ctx.$implicit;
    const ɵ$index_72_r7 = ctx.$index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ɵ$index_72_r7 + 1, ". ", playerName_r6);
} }
function GameComponent_Conditional_11_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "span");
    i0.ɵɵtext(2, "Cola BEZZER");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, GameComponent_Conditional_11_Conditional_6_For_4_Template, 2, 2, "b", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.reboundQueueNames);
} }
function GameComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "span", 38);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, GameComponent_Conditional_11_Conditional_3_Template, 7, 7, "div", 39);
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Todos deben confirmar antes de mostrar la pregunta. Mientras tanto puedes usar tus fichas.");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, GameComponent_Conditional_11_Conditional_6_Template, 5, 0, "div", 40);
    i0.ɵɵelementStart(7, "button", 41);
    i0.ɵɵlistener("click", function GameComponent_Conditional_11_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.skipPreparation()); });
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(10, "svg", 22);
    i0.ɵɵelement(11, "path", 42);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Siguiente pregunta en ", ctx_r0.gameState.timer(), " s");
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_2_0 = ctx_r0.currentTurnCategory) ? 3 : -1, tmp_2_0);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.reboundQueueNames.length > 0 ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r0.canSkipPreparation);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Listo (", ctx_r0.gameState.preparationSkipVotes().length, "/", ctx_r0.gameState.players().length, ")");
} }
function GameComponent_Conditional_15_For_4_Conditional_0_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 46);
    i0.ɵɵelement(1, "app-category-badge", 47);
    i0.ɵɵelementStart(2, "span", 48);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const slot_r8 = ctx.$implicit;
    i0.ɵɵclassProp("is-played", slot_r8.answered);
    i0.ɵɵattribute("title", slot_r8.category.name + (slot_r8.answered ? " (ya jugada)" : ""))("aria-label", slot_r8.category.name + ", " + slot_r8.pointValue + " puntos" + (slot_r8.answered ? ", ya jugada" : ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", slot_r8.category.name)("icon", slot_r8.category.icon)("color", slot_r8.category.color)("compact", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(slot_r8.category.name);
} }
function GameComponent_Conditional_15_For_4_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, GameComponent_Conditional_15_For_4_Conditional_0_For_4_Template, 4, 9, "span", 45, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const player_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("color", player_r9.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(player_r9.username);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.orderedCategories(player_r9.categorySlots));
} }
function GameComponent_Conditional_15_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, GameComponent_Conditional_15_For_4_Conditional_0_Template, 5, 3, "div", 44);
} if (rf & 2) {
    const player_r9 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(player_r9.playerId !== ctx_r0.playerId() ? 0 : -1);
} }
function GameComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "details", 14)(1, "summary");
    i0.ɵɵtext(2, "Ver categor\u00EDas de los dem\u00E1s");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, GameComponent_Conditional_15_For_4_Template, 1, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.gameState.players());
} }
function GameComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function GameComponent_Conditional_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.goToMobileSection("board")); });
    i0.ɵɵelementEnd();
} }
function GameComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 22);
    i0.ɵɵelement(1, "path", 50);
    i0.ɵɵelementEnd();
} }
function GameComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 22);
    i0.ɵɵelement(1, "path", 51);
    i0.ɵɵelementEnd();
} }
function GameComponent_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-question-modal", 52);
    i0.ɵɵlistener("onAnswer", function GameComponent_Conditional_53_Template_app_question_modal_onAnswer_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleAnswer($event)); })("onBezzerwizzer", function GameComponent_Conditional_53_Template_app_question_modal_onBezzerwizzer_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onBezzerwizzerClick()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("question", ctx_r0.gameState.currentQuestion())("timer", ctx_r0.gameState.timer())("timerTotal", ctx_r0.gameState.timerTotal())("isAnswered", !ctx_r0.canAnswerQuestion)("canChangeAnswer", ctx_r0.canChangePreparedAnswer)("selectionFailed", ctx_r0.isMySelectionIncorrect)("canBezzerwizzer", ctx_r0.canChallengeWithBezzerwizzer)("answeringPlayerName", ctx_r0.currentAnswerPlayerName)("isReboundTurn", ctx_r0.isReboundTurn)("reboundQueue", ctx_r0.reboundQueueNames)("isGoldenQuestion", ctx_r0.isGoldenQuestion);
} }
function GameComponent_Conditional_54_Conditional_12_For_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 64);
    i0.ɵɵlistener("click", function GameComponent_Conditional_54_Conditional_12_For_6_Template_button_click_0_listener() { const item_r14 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.selectZwapSource(item_r14.index)); });
    i0.ɵɵelement(1, "app-category-badge", 47);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 65);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("is-selected", ctx_r0.zwapSourceIndex === item_r14.index);
    i0.ɵɵattribute("title", item_r14.slot.category.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", item_r14.slot.category.name)("icon", item_r14.slot.category.icon)("color", item_r14.slot.category.color)("compact", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r14.slot.pointValue, " pts");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r14.slot.category.name);
} }
function GameComponent_Conditional_54_Conditional_12_Conditional_7_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 68);
    i0.ɵɵlistener("click", function GameComponent_Conditional_54_Conditional_12_Conditional_7_For_5_Template_button_click_0_listener() { const player_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.selectZwapTargetPlayer(player_r16.playerId)); });
    i0.ɵɵelement(1, "span", 69);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const player_r16 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("is-selected", ctx_r0.zwapTargetPlayerId === player_r16.playerId);
    i0.ɵɵproperty("disabled", ctx_r0.availableZwapSlots(player_r16).length === 0);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-color", player_r16.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", player_r16.playerId === ctx_r0.playerId() ? "Reordenar mis categor\u00EDas" : player_r16.username, " ");
} }
function GameComponent_Conditional_54_Conditional_12_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "h3");
    i0.ɵɵtext(2, "2. Elige el jugador destino");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 66);
    i0.ɵɵrepeaterCreate(4, GameComponent_Conditional_54_Conditional_12_Conditional_7_For_5_Template, 3, 6, "button", 67, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r0.gameState.players());
} }
function GameComponent_Conditional_54_Conditional_12_Conditional_8_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function GameComponent_Conditional_54_Conditional_12_Conditional_8_For_5_Template_button_click_0_listener() { const item_r18 = i0.ɵɵrestoreView(_r17).$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.zwapTargetSlotIndex = item_r18.index); });
    i0.ɵɵelement(1, "app-category-badge", 47);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 65);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const target_r19 = i0.ɵɵnextContext();
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("is-selected", ctx_r0.zwapTargetSlotIndex === item_r18.index);
    i0.ɵɵproperty("disabled", target_r19.playerId === ctx_r0.playerId() && item_r18.index === ctx_r0.zwapSourceIndex);
    i0.ɵɵattribute("title", item_r18.slot.category.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", item_r18.slot.category.name)("icon", item_r18.slot.category.icon)("color", item_r18.slot.category.color)("compact", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r18.slot.pointValue, " pts");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r18.slot.category.name);
} }
function GameComponent_Conditional_54_Conditional_12_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "h3");
    i0.ɵɵtext(2, "3. Elige la categor\u00EDa destino");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 62);
    i0.ɵɵrepeaterCreate(4, GameComponent_Conditional_54_Conditional_12_Conditional_8_For_5_Template, 6, 10, "button", 70, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r0.availableZwapSlots(ctx));
} }
function GameComponent_Conditional_54_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58)(1, "section")(2, "h3");
    i0.ɵɵtext(3, "1. Elige una de tus categor\u00EDas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 62);
    i0.ɵɵrepeaterCreate(5, GameComponent_Conditional_54_Conditional_12_For_6_Template, 6, 9, "button", 63, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, GameComponent_Conditional_54_Conditional_12_Conditional_7_Template, 6, 0, "section");
    i0.ɵɵconditionalCreate(8, GameComponent_Conditional_54_Conditional_12_Conditional_8_Template, 6, 0, "section");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r0.availableZwapSlots(ctx));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.zwapSourceIndex !== null ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_5_0 = ctx_r0.getZwapTargetPlayer()) ? 8 : -1, tmp_5_0);
} }
function GameComponent_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "section", 53)(2, "header", 54)(3, "div")(4, "span", 55);
    i0.ɵɵtext(5, "Ficha t\u00E1ctica");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2", 56);
    i0.ɵɵtext(7, "Usar ZWAP");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 57);
    i0.ɵɵlistener("click", function GameComponent_Conditional_54_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelZwap()); });
    i0.ɵɵtext(11, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(12, GameComponent_Conditional_54_Conditional_12_Template, 9, 2, "div", 58);
    i0.ɵɵelementStart(13, "footer", 59)(14, "button", 60);
    i0.ɵɵlistener("click", function GameComponent_Conditional_54_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelZwap()); });
    i0.ɵɵtext(15, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 61);
    i0.ɵɵlistener("click", function GameComponent_Conditional_54_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.confirmZwap()); });
    i0.ɵɵtext(17, "Confirmar intercambio");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("Tiempo para intercambiar: ", ctx_r0.gameState.timer(), " s");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional((tmp_2_0 = ctx_r0.getMyPlayer()) ? 12 : -1, tmp_2_0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r0.zwapSourceIndex === null || !ctx_r0.zwapTargetPlayerId || ctx_r0.zwapTargetSlotIndex === null);
} }
function GameComponent_Conditional_55_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 77);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 78);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const goldenResult_r20 = i0.ɵɵnextContext();
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u00A1", ctx_r0.goldenWinnerName, " fue el m\u00E1s r\u00E1pido!");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", goldenResult_r20.points, " puntos");
} }
function GameComponent_Conditional_55_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 77);
    i0.ɵɵtext(1, "El bonus queda desierto");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 79);
    i0.ɵɵtext(3, "Esta vez nadie encontr\u00F3 la respuesta a tiempo.");
    i0.ɵɵelementEnd();
} }
function GameComponent_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "section", 72);
    i0.ɵɵelement(2, "div", 73);
    i0.ɵɵelementStart(3, "div", 74);
    i0.ɵɵtext(4, "\u2605");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 75);
    i0.ɵɵtext(6, "Pregunta Dorada");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, GameComponent_Conditional_55_Conditional_7_Template, 4, 2)(8, GameComponent_Conditional_55_Conditional_8_Template, 4, 0);
    i0.ɵɵelementStart(9, "div", 76)(10, "span");
    i0.ɵɵtext(11, "Respuesta correcta");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const goldenResult_r20 = ctx;
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(goldenResult_r20.winnerPlayerId ? 7 : 8);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(goldenResult_r20.correctAnswer);
} }
function GameComponent_Conditional_56_Conditional_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 22);
    i0.ɵɵelement(1, "path", 86);
    i0.ɵɵelementEnd();
} }
function GameComponent_Conditional_56_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 22);
    i0.ɵɵelement(1, "path", 87);
    i0.ɵɵelementEnd();
} }
function GameComponent_Conditional_56_Conditional_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 84);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" +", ctx_r0.lastResultPoints, " puntos ");
} }
function GameComponent_Conditional_56_Conditional_2_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 85)(1, "p", 88);
    i0.ɵɵtext(2, " Respuesta correcta ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 89);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.lastResultAnswerText, " ");
} }
function GameComponent_Conditional_56_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82);
    i0.ɵɵconditionalCreate(1, GameComponent_Conditional_56_Conditional_2_Conditional_1_Template, 2, 0, ":svg:svg", 22)(2, GameComponent_Conditional_56_Conditional_2_Conditional_2_Template, 2, 0, ":svg:svg", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2", 83);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, GameComponent_Conditional_56_Conditional_2_Conditional_5_Template, 2, 1, "p", 84)(6, GameComponent_Conditional_56_Conditional_2_Conditional_6_Template, 5, 1, "div", 85);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r0.lastResultCorrect ? "bg-correct text-white" : "bg-incorrect text-white");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.lastResultCorrect ? 1 : 2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.lastResultCorrect ? "\u00A1CORRECTO!" : "INCORRECTO", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.lastResultCorrect ? 5 : 6);
} }
function GameComponent_Conditional_56_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 90);
    i0.ɵɵtext(1, "Resultados de rebotes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 91)(3, "p", 92);
    i0.ɵɵtext(4, " Soluci\u00F3n correcta ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 89);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.lastResultAnswerText, " ");
} }
function GameComponent_Conditional_56_Conditional_4_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 94)(1, "div", 95)(2, "span", 96);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 97);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span", 98);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const answerResult_r21 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.getPlayerName(answerResult_r21.playerId));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" \u00B7 ", ctx_r0.getSubmittedAnswerText(answerResult_r21));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", answerResult_r21.correct ? "text-correct" : "text-incorrect");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", answerResult_r21.correct ? "Correcta" : "Incorrecta", " \u00B7 ", answerResult_r21.points > 0 ? "+" : "", "", answerResult_r21.points, " pts ");
} }
function GameComponent_Conditional_56_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 81)(1, "h4", 93);
    i0.ɵɵtext(2, "Respuestas de la jugada");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, GameComponent_Conditional_56_Conditional_4_For_4_Template, 8, 6, "div", 94, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.gameState.answerResults());
} }
function GameComponent_Conditional_56_Conditional_5_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 99)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 100);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const bz_r22 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.getPlayerName(bz_r22.challengerId), ":");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", bz_r22.correct ? "text-correct" : "text-incorrect");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", bz_r22.correct ? "+" + bz_r22.pointsGained : bz_r22.pointsGained, " pts ");
} }
function GameComponent_Conditional_56_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81)(1, "h4", 93);
    i0.ɵɵtext(2, " Resultados Bezzerwizzer ");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, GameComponent_Conditional_56_Conditional_5_For_4_Template, 5, 3, "div", 99, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.bezzerwizzerResults);
} }
function GameComponent_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 80);
    i0.ɵɵconditionalCreate(2, GameComponent_Conditional_56_Conditional_2_Template, 7, 4)(3, GameComponent_Conditional_56_Conditional_3_Template, 7, 1);
    i0.ɵɵconditionalCreate(4, GameComponent_Conditional_56_Conditional_4_Template, 5, 0, "section", 81);
    i0.ɵɵconditionalCreate(5, GameComponent_Conditional_56_Conditional_5_Template, 5, 0, "div", 81);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r0.lastResultCorrect ? "border-correct/50 glow-correct" : "border-incorrect/50 glow-incorrect");
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r0.showReboundSummary ? 2 : 3);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.gameState.answerResults().length > 1 ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.bezzerwizzerResults.length > 0 ? 5 : -1);
} }
export class GameComponent {
    gameState = inject(GameStateService);
    authService = inject(AuthService);
    playerId = this.authService.playerId;
    wsService = inject(WebsocketService);
    audioService = inject(AudioService);
    router = inject(Router);
    route = inject(ActivatedRoute);
    snackbar = inject(SnackbarService);
    hasAnswered = false;
    showResultOverlay = false;
    lastResultCorrect = false;
    lastResultPoints = 0;
    lastResultAnswerText = '';
    lastResultPlayerId = '';
    showReboundSummary = false;
    bezzerwizzerResults = [];
    showZwapSelector = false;
    zwapSourceIndex = null;
    zwapTargetPlayerId = null;
    zwapTargetSlotIndex = null;
    resultOverlayTimeout;
    gameOverNavigationTimeout;
    hasPlayedGameOverSound = false;
    mobileSection = 'board';
    setAudioVolume(event) {
        const input = event.target;
        this.audioService.setVolume(Number(input.value));
    }
    goToMobileSection(section) {
        this.mobileSection = section;
    }
    // Temporary state for assignment
    tempAssignment = [];
    submittedAssignmentRound = -1;
    challengedTurn = -1;
    constructor() {
        void this.restoreGameState();
        effect(() => {
            // Handle Phase transitions to show/hide modals and play sounds
            const phase = this.gameState.gamePhase();
            if (phase === 'GAME_OVER') {
                if (!this.hasPlayedGameOverSound) {
                    this.audioService.playGameOver();
                    this.hasPlayedGameOverSound = true;
                }
                window.clearTimeout(this.gameOverNavigationTimeout);
                // Let the final answer be seen before replacing the board with the
                // champions screen. Rebound summaries need their longer reading time.
                const resultDelay = this.gameState.answerResults().length > 1
                    ? 6000
                    : this.gameState.lastAnswerResult() ? 4000 : 1600;
                this.gameOverNavigationTimeout = window.setTimeout(() => this.router.navigate(['/results', this.gameState.roomCode()]), resultDelay);
            }
            if (phase === 'ZWAP') {
                this.audioService.playZwapActivated();
            }
            if (phase !== 'GAME_OVER') {
                this.hasPlayedGameOverSound = false;
            }
            if (phase === 'BEZZERWIZZER_WINDOW') {
                if (this.gameState.isMyTurn()) {
                    this.audioService.playNotification();
                }
            }
            if (phase === 'ANSWERING' || phase === 'BEZZERWIZZER_WINDOW' || phase === 'TURN_RESULT'
                || phase === 'ROUND_END' || phase === 'GOLDEN_QUESTION' || phase === 'GOLDEN_RESULT') {
                // Results, answer prompts and rebound states take priority over the
                // mobile drawer so their feedback is never obscured.
                this.mobileSection = 'board';
            }
            if (phase === 'ANSWERING') {
                this.hasAnswered = false;
            }
            if (phase === 'GOLDEN_QUESTION') {
                this.hasAnswered = this.gameState.goldenQuestionSubmittedPlayerIds().includes(this.authService.playerId());
            }
            if (phase === 'ROUND_END') {
                // Keep the final answer (and its solution) visible, but remove the
                // rebound-only summary as soon as the four-category cycle ends.
                this.gameState.answerResults.set([]);
                this.gameState.bezzerwizzerResults.set([]);
            }
            if (phase === 'CATEGORY_ASSIGNMENT') {
                this.mobileSection = 'categories';
                this.dismissResultOverlay();
                this.gameState.answerResults.set([]);
                this.gameState.bezzerwizzerResults.set([]);
                this.gameState.goldenQuestionResult.set(null);
            }
            if (phase === 'PLAYING' && this.showZwapSelector) {
                this.showZwapSelector = false;
            }
        });
        effect((onCleanup) => {
            this.gameState.turnSequence();
            this.hasAnswered = false;
            this.challengedTurn = -1;
            const slots = this.gameState.myCategories();
            this.tempAssignment = slots.map(slot => slot.pointValue);
            onCleanup(() => undefined);
        });
        effect(() => {
            const results = this.gameState.bezzerwizzerResults();
            this.bezzerwizzerResults = results.map(result => ({
                challengerId: result.playerId ?? result.challengerId,
                correct: result.correct,
                pointsGained: result.points ?? result.pointsGained ?? 0
            }));
        });
        effect(() => {
            const result = this.gameState.lastAnswerResult();
            if (!result)
                return;
            const mainPlayerFailedWithPendingRebound = !result.correct
                && result.playerId === this.gameState.currentTurnPlayerId()
                && this.gameState.bezzerwizzerPlayers().length > 0;
            if (result.reboundContinues || mainPlayerFailedWithPendingRebound) {
                // The next rebound starts immediately. Keep the board unobstructed
                // and wait for the final rebound result summary.
                this.gameState.lastAnswerResult.set(null);
                return;
            }
            this.showAnswerResult(result);
        });
    }
    async restoreGameState() {
        const roomCode = this.route.snapshot.paramMap.get('code')?.trim().toUpperCase();
        if (!roomCode || !this.authService.isAuthenticated()) {
            await this.router.navigate(['/']);
            return;
        }
        try {
            await this.wsService.connect(this.authService.token());
            this.gameState.connectToRoom(roomCode);
            this.wsService.send(`/app/game/${roomCode}/state`, {});
        }
        catch (error) {
            console.error('Unable to restore game state', error);
            this.snackbar.show('No se pudo recuperar la partida', 'error');
            await this.router.navigate(['/']);
        }
    }
    get isAssigningCategories() {
        return this.gameState.gamePhase() === 'CATEGORY_ASSIGNMENT'
            && this.submittedAssignmentRound !== this.gameState.currentRound();
    }
    get canChallengeWithBezzerwizzer() {
        return this.gameState.canPlayBezzerwizzer() && this.challengedTurn !== this.gameState.turnSequence();
    }
    get hasVotedToSkipPreparation() {
        return this.gameState.preparationSkipVotes().includes(this.authService.playerId());
    }
    get canSkipPreparation() {
        return this.gameState.gamePhase() === 'PLAYING' && !this.hasVotedToSkipPreparation;
    }
    get canAnswerQuestion() {
        if (this.gameState.gamePhase() === 'GOLDEN_QUESTION') {
            return !this.hasAnswered
                && !this.gameState.goldenQuestionSubmittedPlayerIds().includes(this.authService.playerId());
        }
        if (this.hasAnswered)
            return false;
        return this.gameState.gamePhase() === 'ANSWERING' &&
            (this.gameState.isMyAnswer() || this.gameState.canSubmitPreparedBezzerwizzer());
    }
    get canChangePreparedAnswer() {
        return this.gameState.canSubmitPreparedBezzerwizzer() && !this.gameState.isMyAnswer();
    }
    get isMySelectionIncorrect() {
        return !this.lastResultCorrect && this.lastResultPlayerId === this.authService.playerId();
    }
    get showQuestionModal() {
        const phase = this.gameState.gamePhase();
        if (!this.gameState.currentQuestion())
            return false;
        return phase === 'ANSWERING' || phase === 'GOLDEN_QUESTION';
    }
    get isGoldenQuestion() {
        return this.gameState.gamePhase() === 'GOLDEN_QUESTION';
    }
    get goldenWinnerName() {
        const winnerId = this.gameState.goldenQuestionResult()?.winnerPlayerId;
        return winnerId ? this.getPlayerName(winnerId) : '';
    }
    get currentTurnPlayerName() {
        const id = this.gameState.currentTurnPlayerId();
        const p = this.gameState.players().find(x => x.playerId === id);
        return p ? p.username : '';
    }
    get pendingZwapPlayerName() {
        const playerId = this.gameState.pendingZwapPlayerId();
        return this.gameState.players().find(player => player.playerId === playerId)?.username ?? 'Un jugador';
    }
    get currentTurnPlayerColor() {
        const id = this.gameState.currentTurnPlayerId();
        const p = this.gameState.players().find(x => x.playerId === id);
        return p ? p.color : 'var(--color-primary)';
    }
    get currentAnswerPlayerName() {
        return this.getPlayerName(this.gameState.currentAnswerPlayerId());
    }
    get isReboundTurn() {
        const active = this.gameState.currentAnswerPlayerId();
        return Boolean(active && active !== this.gameState.currentTurnPlayerId());
    }
    get reboundQueueNames() {
        return this.gameState.reboundQueue().map(id => this.getPlayerName(id));
    }
    get hasReboundStatus() {
        // The rebound status belongs to the current question only.  A final
        // GAME_STATE can still carry the previous answer player while the next
        // category-assignment screen is rendered, so never show a stale chip
        // outside the question/result transition.
        const phase = this.gameState.gamePhase();
        const canShowRebound = phase === 'ANSWERING' || phase === 'TURN_RESULT';
        return canShowRebound && (this.isReboundTurn || this.reboundQueueNames.length > 0);
    }
    get phaseText() {
        switch (this.gameState.gamePhase()) {
            case 'CATEGORY_ASSIGNMENT': return 'ASIGNANDO PUNTOS';
            case 'PLAYING': return this.gameState.isMyTurn() ? 'PREPARA TU JUGADA' : 'PREPARANDO JUGADA';
            case 'ZWAP': return 'ZWAP EN CURSO';
            case 'BEZZERWIZZER_WINDOW': return '¡BEZZERWIZZER!';
            case 'ANSWERING': return 'RESPONDIENDO';
            case 'GOLDEN_QUESTION': return '★ PREGUNTA DORADA';
            case 'GOLDEN_RESULT': return 'BONUS DORADO';
            default: return 'RONDA ' + this.gameState.currentRound();
        }
    }
    get currentSlotIndex() {
        // This requires tracking which slot the player is currently on.
        // Assuming backend sends it or we calculate it based on what's answered.
        const myCats = this.gameState.myCategories();
        return myCats.findIndex(c => !c.answered);
    }
    get currentTurnCategory() {
        const currentPlayer = this.gameState.players().find(player => player.playerId === this.gameState.currentTurnPlayerId());
        return currentPlayer?.categorySlots?.[this.currentSlotIndexFor(currentPlayer.categorySlots ?? [])];
    }
    skipPreparation() {
        if (!this.canSkipPreparation)
            return;
        this.wsService.send(`/app/game/${this.gameState.roomCode()}/skip-turn-preparation`, {});
    }
    onAssignmentChanged(slots) {
        this.tempAssignment = slots.map(s => s.pointValue);
        this.gameState.updateMyCategories(slots);
    }
    submitAssignment() {
        const valid = this.tempAssignment.length === 4 &&
            new Set(this.tempAssignment).size === 4 &&
            this.tempAssignment.every(value => value >= 1 && value <= 4);
        if (!valid || this.submittedAssignmentRound === this.gameState.currentRound()) {
            this.snackbar.show('Asigna una vez cada valor del 1 al 4', 'warning');
            return;
        }
        this.submittedAssignmentRound = this.gameState.currentRound();
        this.wsService.send(`/app/game/${this.gameState.roomCode()}/assign-categories`, {
            pointValues: this.tempAssignment
        });
        this.snackbar.show('Asignación confirmada. Esperando al resto…', 'success');
    }
    handleAnswer(answer) {
        if (!this.canAnswerQuestion || !this.gameState.currentQuestion()) {
            return;
        }
        if (!this.canChangePreparedAnswer)
            this.hasAnswered = true;
        this.wsService.send(`/app/game/${this.gameState.roomCode()}/answer`, answer);
    }
    onZwapClick() {
        if (!this.gameState.canPlayZwap())
            return;
        this.zwapSourceIndex = null;
        this.zwapTargetPlayerId = null;
        this.zwapTargetSlotIndex = null;
        this.wsService.send(`/app/game/${this.gameState.roomCode()}/zwap/start`, {});
        this.showZwapSelector = true;
    }
    cancelZwap() {
        this.showZwapSelector = false;
        this.wsService.send(`/app/game/${this.gameState.roomCode()}/zwap/cancel`, {});
    }
    getMyPlayer() {
        return this.gameState.players().find(player => player.playerId === this.authService.playerId());
    }
    getZwapTargetPlayer() {
        return this.gameState.players().find(player => player.playerId === this.zwapTargetPlayerId);
    }
    availableZwapSlots(player) {
        return (player.categorySlots ?? [])
            .map((slot, index) => ({ slot, index }))
            .filter(({ slot }) => !slot.answered);
    }
    selectZwapSource(index) {
        this.zwapSourceIndex = index;
        if (this.zwapTargetPlayerId === this.authService.playerId() && this.zwapTargetSlotIndex === index) {
            this.zwapTargetSlotIndex = null;
        }
    }
    selectZwapTargetPlayer(playerId) {
        this.zwapTargetPlayerId = playerId;
        this.zwapTargetSlotIndex = null;
    }
    confirmZwap() {
        if (this.zwapSourceIndex === null || !this.zwapTargetPlayerId || this.zwapTargetSlotIndex === null)
            return;
        if (this.zwapTargetPlayerId === this.authService.playerId() && this.zwapSourceIndex === this.zwapTargetSlotIndex) {
            this.snackbar.show('Elige dos categorías distintas para reordenarlas', 'warning');
            return;
        }
        const action = {
            targetPlayerId: this.zwapTargetPlayerId,
            mySlotIndex: this.zwapSourceIndex,
            targetSlotIndex: this.zwapTargetSlotIndex
        };
        this.wsService.send(`/app/game/${this.gameState.roomCode()}/zwap`, action);
        this.showZwapSelector = false;
    }
    onBezzerwizzerClick() {
        const turn = this.gameState.turnSequence();
        if (this.gameState.canPlayBezzerwizzer() && this.challengedTurn !== turn) {
            this.challengedTurn = turn;
            this.wsService.send(`/app/game/${this.gameState.roomCode()}/bezzerwizzer`, {
                targetPlayerId: this.gameState.currentTurnPlayerId()
            });
            this.snackbar.show(`BEZZER activado: entrarás en la cola si ${this.currentTurnPlayerName} falla`, 'info');
        }
    }
    showAnswerResult(result) {
        window.clearTimeout(this.resultOverlayTimeout);
        this.lastResultCorrect = result.correct;
        this.lastResultPlayerId = result.playerId;
        this.lastResultPoints = result.points;
        this.lastResultAnswerText = this.resolveCorrectAnswerText(result);
        // The aggregate client state is also checked so reconnects or older
        // server events cannot fall back to an individual correct/incorrect
        // modal once a rebound sequence has started.
        this.showReboundSummary = result.reboundSummary === true
            || this.gameState.answerResults().length > 1;
        this.bezzerwizzerResults = result.bezzerwizzerResults ?? [];
        this.showResultOverlay = true;
        this.resultOverlayTimeout = window.setTimeout(() => this.clearAnswerResult(), this.showReboundSummary ? 6000 : 4000);
        if (!this.showReboundSummary) {
            result.correct ? this.audioService.playCorrect() : this.audioService.playIncorrect();
        }
    }
    resolveCorrectAnswerText(result) {
        const answer = result.correctAnswer?.trim();
        const optionKey = result.correctOption?.trim().toUpperCase()
            || (answer?.match(/^[A-D]$/i) ? answer.toUpperCase() : undefined);
        if (optionKey && this.gameState.currentQuestion()?.options) {
            const index = optionKey.charCodeAt(0) - 65;
            return this.gameState.currentQuestion()?.options?.[index] || answer || optionKey;
        }
        return answer || 'Sin respuesta';
    }
    getSubmittedAnswerText(result) {
        const submittedAnswerText = result.submittedAnswerText?.trim();
        if (submittedAnswerText)
            return submittedAnswerText;
        const submitted = result.submittedAnswer?.trim();
        // Older/reconnecting game servers may only report the validation result
        // for an auto-resolved prepared rebound. A correct answer is never shown
        // as "Sin respuesta" in that case.
        if (!submitted)
            return result.correct ? this.resolveCorrectAnswerText(result) : 'Sin respuesta';
        const optionKey = submitted.match(/^[A-D]$/i)?.[0]?.toUpperCase();
        if (optionKey) {
            const index = optionKey.charCodeAt(0) - 65;
            const optionText = this.gameState.currentQuestion()?.options?.[index];
            return optionText ? `${optionKey} · ${optionText}` : optionKey;
        }
        return submitted;
    }
    dismissResultOverlay() {
        window.clearTimeout(this.resultOverlayTimeout);
        this.clearAnswerResult();
    }
    clearAnswerResult() {
        this.showResultOverlay = false;
        this.lastResultPlayerId = '';
        this.lastResultCorrect = false;
        this.showReboundSummary = false;
        // Consume the event as well as hiding it locally. Otherwise a later
        // reactive update can re-run the result effect with the stale failure,
        // which is especially noticeable for free-text questions.
        this.gameState.lastAnswerResult.set(null);
    }
    getPlayerName(id) {
        const p = this.gameState.players().find(x => x.playerId === id);
        return p ? p.username : 'Jugador';
    }
    orderedCategories(slots) {
        return [...(slots ?? [])].sort((a, b) => a.pointValue - b.pointValue);
    }
    currentSlotIndexFor(slots) {
        return slots.findIndex(slot => !slot.answered);
    }
    static ɵfac = function GameComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GameComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GameComponent, selectors: [["app-game"]], decls: 57, vars: 58, consts: [[1, "game-shell", "relative", "isolate", "flex", "w-full", "max-w-[93.75rem]", "flex-col", "gap-3", "p-1", "mx-auto", "min-h-[calc(100dvh-1.5rem)]", "sm:min-h-[calc(100dvh-2.5rem)]", "sm:p-2", "lg:h-[calc(100dvh-3rem)]", "lg:min-h-0", "lg:max-h-[61.25rem]", "lg:gap-4", "min-[106.25rem]:max-w-[108.75rem]"], [1, "game-header", "flex-none", "flex", "justify-center", "items-center", "relative", "z-20", "lg:absolute", "lg:top-0", "lg:left-1/2", "lg:-translate-x-1/2", "lg:w-max"], [3, "playerName", "playerColor", "isMyTurn", "phaseText"], ["role", "status", "aria-live", "assertive", 1, "tactical-announcement"], ["role", "status", "aria-live", "polite", 1, "rebound-queue"], [1, "relative", "z-10", "grid", "min-h-0", "flex-grow", "grid-cols-1", "gap-3", "lg:grid-cols-[clamp(13rem,18vw,16.25rem)_minmax(0,1fr)_clamp(15.5rem,20vw,18.75rem)]", "lg:gap-4", "min-[106.25rem]:grid-cols-[clamp(20rem,20vw,21.875rem)_minmax(0,1fr)_clamp(17.5rem,18vw,20rem)]", "min-[106.25rem]:gap-5"], ["id", "mobile-score", 1, "score-area", "order-2", "flex", "h-auto", "min-h-0", "min-w-0", "w-full", "lg:order-1", "lg:h-full", "lg:flex-col"], [3, "players", "currentTurnPlayerId", "currentRound"], ["id", "mobile-board", 1, "board-area", "relative", "order-1", "flex", "w-full", "min-w-0", "min-h-[20rem]", "items-center", "justify-center", "p-1", "lg:order-2", "lg:min-h-0", "lg:pt-16", "lg:pb-16"], [3, "players", "currentTurnPlayerId", "winningPosition"], [1, "turn-prep-card", "glass-strong"], ["id", "mobile-categories", 1, "dashboard-area", "order-3", "flex", "h-auto", "min-h-0", "min-w-0", "w-full", "flex-col", "gap-3", "lg:h-full"], [1, "flex-grow", "min-h-0"], [3, "assignmentChanged", "submitAssignment", "slots", "isAssigning", "currentSlotIndex"], ["open", "", 1, "opponents-categories", "glass"], ["id", "mobile-tactics", 1, "flex-none", "min-h-40", "lg:h-[13rem]"], [3, "zwapClick", "bezzerwizzerClick", "skipPreparationClick", "zwapsLeft", "bezzerwizzersLeft", "canZwap", "canBezzerwizzer", "canSkipPreparation", "skipVotes", "playerCount"], ["type", "button", "aria-label", "Cerrar panel de mis fichas", 1, "mobile-categories-backdrop"], ["aria-label", "Controles de la partida", 1, "game-controls", "relative", "z-28", "flex", "flex-none", "items-center", "justify-center", "gap-3", "lg:absolute", "lg:right-0", "lg:bottom-[.2rem]", "lg:left-0", "lg:mx-auto", "lg:w-max"], [3, "compact"], [1, "volume-control"], ["type", "button", 1, "volume-button", 3, "click"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], [1, "volume-popover"], [1, "volume-popover__value"], ["type", "range", "min", "0", "max", "1", "step", "0.05", "aria-label", "Volumen del juego", 3, "input", "value"], ["aria-label", "Navegaci\u00F3n r\u00E1pida de la partida", 1, "mobile-panel-nav"], ["type", "button", 3, "click"], ["aria-hidden", "true"], ["type", "button", 1, "mobile-tactical-action", "mobile-tactical-action--zwap", 3, "click", "disabled"], ["type", "button", 1, "mobile-tactical-action", "mobile-tactical-action--bezzer", 3, "click", "disabled"], [3, "question", "timer", "timerTotal", "isAnswered", "canChangeAnswer", "selectionFailed", "canBezzerwizzer", "answeringPlayerName", "isReboundTurn", "reboundQueue", "isGoldenQuestion"], ["role", "presentation", 1, "zwap-overlay"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "golden-result-title", 1, "golden-result-overlay"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/60", "backdrop-blur-md", "animate-fade-in"], [1, "rebound-queue__label"], [1, "rebound-queue__player", "rebound-queue__player--active"], [1, "rebound-queue__player"], [1, "turn-prep-kicker"], [1, "turn-prep-category"], ["role", "status", 1, "turn-prep-queue"], ["type", "button", 1, "turn-prep-button", 3, "click", "disabled"], ["d", "m9 18 6-6-6-6"], [1, "turn-prep-icon", 3, "name", "icon", "color", "compact"], [1, "opponent-category-row"], ["tabindex", "0", 1, "opponent-category-icon", 3, "is-played"], ["tabindex", "0", 1, "opponent-category-icon"], [3, "name", "icon", "color", "compact"], ["role", "tooltip", 1, "opponent-category-tooltip"], ["type", "button", "aria-label", "Cerrar panel de mis fichas", 1, "mobile-categories-backdrop", 3, "click"], ["d", "M11 5 6.5 9H3v6h3.5L11 19V5ZM16 9l5 6M21 9l-5 6"], ["d", "M11 5 6.5 9H3v6h3.5L11 19V5ZM15 9.5a4 4 0 0 1 0 5M18 7a7 7 0 0 1 0 10"], [3, "onAnswer", "onBezzerwizzer", "question", "timer", "timerTotal", "isAnswered", "canChangeAnswer", "selectionFailed", "canBezzerwizzer", "answeringPlayerName", "isReboundTurn", "reboundQueue", "isGoldenQuestion"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "zwap-title", 1, "zwap-dialog", "glass-strong"], [1, "zwap-dialog__header"], [1, "zwap-dialog__eyebrow"], ["id", "zwap-title"], ["type", "button", "aria-label", "Cerrar selector ZWAP", 1, "zwap-close", 3, "click"], [1, "zwap-dialog__content"], [1, "zwap-dialog__actions"], ["type", "button", 1, "zwap-cancel", 3, "click"], ["type", "button", 1, "btn-primary", "zwap-confirm", 3, "click", "disabled"], [1, "zwap-categories"], ["type", "button", 1, "zwap-category-choice", 3, "is-selected"], ["type", "button", 1, "zwap-category-choice", 3, "click"], ["role", "tooltip", 1, "zwap-category-tooltip"], [1, "zwap-players"], ["type", "button", 1, "zwap-player-choice", 3, "is-selected", "disabled"], ["type", "button", 1, "zwap-player-choice", 3, "click", "disabled"], [1, "zwap-player-dot"], ["type", "button", 1, "zwap-category-choice", 3, "is-selected", "disabled"], ["type", "button", 1, "zwap-category-choice", 3, "click", "disabled"], [1, "golden-result-card"], ["aria-hidden", "true", 1, "golden-result-rays"], ["aria-hidden", "true", 1, "golden-result-crown"], [1, "golden-result-kicker"], [1, "golden-result-answer"], ["id", "golden-result-title"], [1, "golden-result-points"], [1, "golden-result-empty"], [1, "glass", "p-12", "rounded-[3rem]", "flex", "flex-col", "items-center", "animate-bounce-in", "max-w-md", "w-full", "text-center", 3, "ngClass"], [1, "w-full", "bg-surface-elevated/50", "p-4", "rounded-2xl", "mb-4", "text-left", "border", "border-border/50"], [1, "result-icon", "w-28", "h-28", "rounded-full", "flex", "items-center", "justify-center", "mb-6", "shadow-2xl", 3, "ngClass"], [1, "text-4xl", "font-black", "font-display", "mb-4", "text-white"], [1, "text-2xl", "font-bold", "text-correct", "mb-6"], [1, "w-full", "bg-incorrect/10", "border-2", "border-incorrect/40", "rounded-2xl", "p-4", "mb-6", "text-left"], ["d", "m5 12.5 4.2 4L19 7"], ["d", "m7 7 10 10M17 7 7 17"], [1, "text-xs", "font-bold", "text-incorrect", "uppercase", "tracking-widest", "mb-2"], [1, "text-lg", "font-bold", "text-white", "break-words"], [1, "mb-4", "text-3xl", "font-black", "font-display", "text-white"], [1, "w-full", "rounded-2xl", "border", "border-correct/40", "bg-correct/10", "p-4", "mb-6", "text-left"], [1, "mb-2", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-correct"], [1, "text-sm", "font-bold", "text-purple-400", "mb-2", "uppercase", "tracking-widest"], [1, "flex", "items-center", "justify-between", "gap-3", "py-2", "border-b", "border-white/10", "last:border-0", "text-sm"], [1, "min-w-0"], [1, "font-bold", "text-white"], [1, "text-white/65"], [1, "shrink-0", "font-bold", 3, "ngClass"], [1, "flex", "items-center", "gap-2", "text-sm", "text-white", "font-medium"], [3, "ngClass"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1);
            i0.ɵɵelement(2, "app-turn-indicator", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(3, GameComponent_Conditional_3_Template, 2, 1, "div", 3);
            i0.ɵɵconditionalCreate(4, GameComponent_Conditional_4_Template, 6, 2, "div", 4);
            i0.ɵɵconditionalCreate(5, GameComponent_Conditional_5_Template, 5, 2, "div", 4);
            i0.ɵɵelementStart(6, "main", 5)(7, "aside", 6);
            i0.ɵɵelement(8, "app-scoreboard", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "section", 8);
            i0.ɵɵelement(10, "app-board", 9);
            i0.ɵɵconditionalCreate(11, GameComponent_Conditional_11_Template, 12, 6, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "aside", 11)(13, "div", 12)(14, "app-category-slots", 13);
            i0.ɵɵlistener("assignmentChanged", function GameComponent_Template_app_category_slots_assignmentChanged_14_listener($event) { return ctx.onAssignmentChanged($event); })("submitAssignment", function GameComponent_Template_app_category_slots_submitAssignment_14_listener() { return ctx.submitAssignment(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(15, GameComponent_Conditional_15_Template, 5, 0, "details", 14);
            i0.ɵɵelementStart(16, "div", 15)(17, "app-tactical-panel", 16);
            i0.ɵɵlistener("zwapClick", function GameComponent_Template_app_tactical_panel_zwapClick_17_listener() { return ctx.onZwapClick(); })("bezzerwizzerClick", function GameComponent_Template_app_tactical_panel_bezzerwizzerClick_17_listener() { return ctx.onBezzerwizzerClick(); })("skipPreparationClick", function GameComponent_Template_app_tactical_panel_skipPreparationClick_17_listener() { return ctx.skipPreparation(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(18, GameComponent_Conditional_18_Template, 1, 0, "button", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "footer", 18);
            i0.ɵɵelement(20, "app-rules-help", 19);
            i0.ɵɵelementStart(21, "div", 20)(22, "button", 21);
            i0.ɵɵlistener("click", function GameComponent_Template_button_click_22_listener() { return ctx.audioService.toggleMute(); });
            i0.ɵɵconditionalCreate(23, GameComponent_Conditional_23_Template, 2, 0, ":svg:svg", 22)(24, GameComponent_Conditional_24_Template, 2, 0, ":svg:svg", 22);
            i0.ɵɵelementStart(25, "span");
            i0.ɵɵtext(26, "Sonido");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "div", 23)(28, "span", 24);
            i0.ɵɵtext(29);
            i0.ɵɵpipe(30, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "input", 25);
            i0.ɵɵlistener("input", function GameComponent_Template_input_input_31_listener($event) { return ctx.setAudioVolume($event); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(32, "nav", 26)(33, "button", 27);
            i0.ɵɵlistener("click", function GameComponent_Template_button_click_33_listener() { return ctx.goToMobileSection("board"); });
            i0.ɵɵelementStart(34, "span", 28);
            i0.ɵɵtext(35, "\u25CE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "span");
            i0.ɵɵtext(37, "Tablero");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "button", 27);
            i0.ɵɵlistener("click", function GameComponent_Template_button_click_38_listener() { return ctx.goToMobileSection("categories"); });
            i0.ɵɵelementStart(39, "span", 28);
            i0.ɵɵtext(40, "\u25A6");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "span");
            i0.ɵɵtext(42, "Mis fichas");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(43, "button", 29);
            i0.ɵɵlistener("click", function GameComponent_Template_button_click_43_listener() { return ctx.onZwapClick(); });
            i0.ɵɵelementStart(44, "span", 28);
            i0.ɵɵtext(45, "\u2194");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "span");
            i0.ɵɵtext(47);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "button", 30);
            i0.ɵɵlistener("click", function GameComponent_Template_button_click_48_listener() { return ctx.onBezzerwizzerClick(); });
            i0.ɵɵelementStart(49, "span", 28);
            i0.ɵɵtext(50, "\u2726");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "span");
            i0.ɵɵtext(52);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(53, GameComponent_Conditional_53_Template, 1, 11, "app-question-modal", 31);
            i0.ɵɵconditionalCreate(54, GameComponent_Conditional_54_Template, 18, 3, "div", 32);
            i0.ɵɵconditionalCreate(55, GameComponent_Conditional_55_Template, 14, 2, "div", 33);
            i0.ɵɵconditionalCreate(56, GameComponent_Conditional_56_Template, 6, 4, "div", 34);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_4_0;
            let tmp_48_0;
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("playerName", ctx.currentTurnPlayerName)("playerColor", ctx.currentTurnPlayerColor)("isMyTurn", ctx.gameState.isMyTurn())("phaseText", ctx.phaseText);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_4_0 = ctx.gameState.tacticalAnnouncement()) ? 3 : -1, tmp_4_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.hasReboundStatus ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.gameState.gamePhase() === "ZWAP" ? 5 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("mobile-panel-hidden", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("players", ctx.gameState.sortedPlayers())("currentTurnPlayerId", ctx.gameState.currentTurnPlayerId())("currentRound", ctx.gameState.currentRound());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("players", ctx.gameState.players())("currentTurnPlayerId", ctx.gameState.currentTurnPlayerId())("winningPosition", ctx.gameState.winningPosition());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.gameState.gamePhase() === "PLAYING" ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-mobile-open", ctx.mobileSection === "categories");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("slots", ctx.gameState.myCategories())("isAssigning", ctx.isAssigningCategories)("currentSlotIndex", ctx.currentSlotIndex);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.gameState.gamePhase() !== "CATEGORY_ASSIGNMENT" ? 15 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("zwapsLeft", ctx.gameState.myTacticalTiles().zwap)("bezzerwizzersLeft", ctx.gameState.myTacticalTiles().bezzerwizzer)("canZwap", ctx.gameState.canPlayZwap())("canBezzerwizzer", ctx.canChallengeWithBezzerwizzer)("canSkipPreparation", ctx.canSkipPreparation)("skipVotes", ctx.gameState.preparationSkipVotes().length)("playerCount", ctx.gameState.players().length);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.mobileSection === "categories" ? 18 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("compact", true);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-muted", ctx.audioService.muted());
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-label", ctx.audioService.muted() ? "Activar sonido" : "Silenciar sonido")("aria-pressed", ctx.audioService.muted());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.audioService.muted() ? 23 : 24);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(30, 55, ctx.audioService.volume() * 100, "1.0-0"), "%");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.audioService.volume());
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("is-active", ctx.mobileSection === "board");
            i0.ɵɵattribute("aria-current", ctx.mobileSection === "board" ? "page" : null);
            i0.ɵɵadvance(5);
            i0.ɵɵclassProp("is-active", ctx.mobileSection === "categories");
            i0.ɵɵattribute("aria-current", ctx.mobileSection === "categories" ? "page" : null)("aria-expanded", ctx.mobileSection === "categories");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", !ctx.gameState.canPlayZwap());
            i0.ɵɵattribute("aria-label", "Usar ZWAP. Quedan " + ctx.gameState.myTacticalTiles().zwap);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("ZWAP \u00B7 ", ctx.gameState.myTacticalTiles().zwap);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", !ctx.canChallengeWithBezzerwizzer);
            i0.ɵɵattribute("aria-label", "Usar Bezzerwizzer. Quedan " + ctx.gameState.myTacticalTiles().bezzerwizzer);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("BEZZER \u00B7 ", ctx.gameState.myTacticalTiles().bezzerwizzer);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showQuestionModal ? 53 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showZwapSelector ? 54 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_48_0 = ctx.gameState.gamePhase() === "GOLDEN_RESULT" && ctx.gameState.goldenQuestionResult()) ? 55 : -1, tmp_48_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showResultOverlay ? 56 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, BoardComponent,
            CategorySlotsComponent,
            QuestionModalComponent,
            ScoreboardComponent,
            TacticalPanelComponent,
            TurnIndicatorComponent,
            CategoryBadgeComponent,
            RulesHelpComponent, i1.DecimalPipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 0;\n}\n\n.game-shell[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_game-fade-in .45s ease-out both; }\n.game-shell[_ngcontent-%COMP%]::after { content: ''; position: absolute; z-index: -2; inset: 6% -3% -3%; opacity: .34; background: linear-gradient(90deg, rgb(123 44 255 / .08), transparent 18% 82%, rgb(255 25 200 / .07)), radial-gradient(ellipse at 50% 100%, rgb(123 44 255 / .17), transparent 57%); border-radius: 3rem; pointer-events: none; }\n.game-shell[_ngcontent-%COMP%]::before { content: ''; position: absolute; z-index: -1; width: min(72vw, 72rem); height: min(60vw, 48rem); top: 10%; left: 50%; border-radius: 50%; opacity: .45; transform: translateX(-50%); background: radial-gradient(circle, rgb(123 44 255 / .19), rgb(0 217 255 / .06) 39%, transparent 69%); filter: blur(1.875rem); pointer-events: none; animation: _ngcontent-%COMP%_shell-aura 12s ease-in-out infinite alternate; }\n.tactical-announcement[_ngcontent-%COMP%] { position: absolute; z-index: 30; top: 3.4rem; left: 50%; width: min(calc(100% - 2rem), 44rem); padding: .8rem 1.15rem; border: .0625rem solid rgb(255 214 102 / .72); border-radius: 1rem; background: linear-gradient(110deg, rgb(92 31 148 / .95), rgb(185 40 149 / .94)); box-shadow: 0 .9rem 2.4rem rgb(0 0 0 / .4), 0 0 2rem rgb(255 73 202 / .35); color: white; font-size: clamp(.75rem, 1.8vw, .95rem); font-weight: 900; letter-spacing: .045em; text-align: center; text-transform: uppercase; transform: translateX(-50%); animation: _ngcontent-%COMP%_tactical-alert-in .32s cubic-bezier(.2,.9,.25,1.2) both; }\n.rebound-queue[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; justify-content: center; gap: .45rem; margin: -0.45rem 0 .1rem; }\n.rebound-queue__label[_ngcontent-%COMP%], .rebound-queue__player[_ngcontent-%COMP%] { padding: .3rem .6rem; border: 0.0625rem solid rgb(255 255 255 / .12); border-radius: 62.4375rem; background: rgb(10 7 24 / .66); color: rgb(255 255 255 / .65); font-size: .68rem; font-weight: 800; letter-spacing: .05em; }\n.rebound-queue__label[_ngcontent-%COMP%] { color: var(--color-primary-light); text-transform: uppercase; }\n.rebound-queue__player--active[_ngcontent-%COMP%] { color: white; border-color: oklch(0.65 0.28 340 / .5); background: oklch(0.65 0.28 340 / .16); }\n\n@keyframes _ngcontent-%COMP%_game-fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n@keyframes _ngcontent-%COMP%_tactical-alert-in { from { opacity: 0; transform: translate(-50%, -.8rem) scale(.92); } to { opacity: 1; transform: translateX(-50%) scale(1); } }\n\n@media (min-width: 64rem) {\n  [_nghost-%COMP%] { overflow: clip; }\n  .rebound-queue[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 19;\n    top: 6.9rem;\n    left: 50%;\n    width: min(90%, 42rem);\n    margin: 0;\n    transform: translateX(-50%);\n  }\n  .tactical-announcement[_ngcontent-%COMP%] { top: 3.4rem; }\n}\n\n@media (min-width: 106.25rem) and (min-height: 53.125rem) {\n  .game-shell[_ngcontent-%COMP%] { width: min(100%, 108.75rem); }\n}\n\n.result-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 4.5rem;\n  height: 4.5rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 2.2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.game-header[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  right: 12%;\n  bottom: 0;\n  left: 12%;\n  height: 0.0625rem;\n  background: linear-gradient(90deg, transparent, rgb(255 255 255 / 0.14), transparent);\n}\n\n.board-area[_ngcontent-%COMP%] { perspective: 75rem; }\n.score-area[_ngcontent-%COMP%], .dashboard-area[_ngcontent-%COMP%] { position: relative; z-index: 2; }\n.score-area[_ngcontent-%COMP%]::before, .dashboard-area[_ngcontent-%COMP%]::before { content: ''; position: absolute; z-index: -1; inset: 8% -8%; border-radius: 50%; background: radial-gradient(ellipse, rgb(123 44 255 / .14), transparent 68%); filter: blur(1.5rem); pointer-events: none; }\n.mobile-panel-nav[_ngcontent-%COMP%], .mobile-categories-backdrop[_ngcontent-%COMP%] { display: none; }\n\n@keyframes _ngcontent-%COMP%_shell-aura { from { transform: translateX(-50%) scale(.94); opacity: .32; } to { transform: translateX(-50%) scale(1.08); opacity: .56; } }\n\n@media (max-width: 63.9375rem) {\n  [_nghost-%COMP%] { overflow: visible; touch-action: pan-y; }\n  \n\n\n  .game-shell[_ngcontent-%COMP%] { min-height: 0; padding-bottom: calc(5.25rem + env(safe-area-inset-bottom)); }\n  .game-shell[_ngcontent-%COMP%]    > main[_ngcontent-%COMP%] { flex: 0 0 auto; min-height: auto; z-index: auto; }\n  .score-area.mobile-panel-hidden[_ngcontent-%COMP%] { display: none !important; }\n  .game-header[_ngcontent-%COMP%] { position: sticky; top: max(.35rem, env(safe-area-inset-top)); z-index: 40; width: fit-content; max-width: calc(100% - 1rem); margin-inline: auto; padding: .25rem .45rem; border: .0625rem solid rgb(191 137 255 / .28); border-radius: 1rem; background: rgb(8 7 24 / .86); box-shadow: 0 .5rem 1.5rem rgb(0 0 0 / .25); backdrop-filter: blur(.75rem); }\n  .tactical-announcement[_ngcontent-%COMP%], .rebound-queue[_ngcontent-%COMP%] { z-index: 50; }\n  #mobile-board[_ngcontent-%COMP%], #mobile-categories[_ngcontent-%COMP%], #mobile-tactics[_ngcontent-%COMP%], #mobile-score[_ngcontent-%COMP%] { scroll-margin-top: 4.75rem; scroll-margin-bottom: 5.5rem; }\n  #mobile-tactics[_ngcontent-%COMP%] { display: none; }\n  #mobile-categories[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 55;\n    top: max(.5rem, env(safe-area-inset-top));\n    right: 0;\n    bottom: calc(5.25rem + env(safe-area-inset-bottom));\n    width: min(24rem, calc(100vw - .75rem));\n    padding: 1rem .85rem;\n    overflow: hidden;\n    overscroll-behavior: contain;\n    border: .0625rem solid rgb(191 137 255 / .32);\n    border-right: 0;\n    border-radius: 1.25rem 0 0 1.25rem;\n    background: linear-gradient(145deg, rgb(20 14 48 / .98), rgb(5 7 23 / .98));\n    box-shadow: -1rem 0 2.5rem rgb(0 0 0 / .42), inset 0 .0625rem 0 rgb(255 255 255 / .1);\n    transform: translateX(calc(100% + 1rem));\n    transition: transform 220ms ease-out;\n    pointer-events: none;\n  }\n  #mobile-categories.is-mobile-open[_ngcontent-%COMP%] { transform: translateX(0); pointer-events: auto; }\n  #mobile-categories[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { min-width: 0; max-width: 100%; }\n  .mobile-categories-backdrop[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 35;\n    inset: 0;\n    display: block;\n    border: 0;\n    background: rgb(2 2 12 / .5);\n    backdrop-filter: blur(.15rem);\n  }\n  .mobile-panel-nav[_ngcontent-%COMP%] { position: fixed; z-index: 45; right: max(.55rem, env(safe-area-inset-right)); bottom: max(.55rem, env(safe-area-inset-bottom)); left: max(.55rem, env(safe-area-inset-left)); display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: .35rem; padding: .4rem; border: .0625rem solid rgb(191 137 255 / .3); border-radius: 1.15rem; background: rgb(10 8 28 / .92); box-shadow: 0 .8rem 2rem rgb(0 0 0 / .45), inset 0 .0625rem 0 rgb(255 255 255 / .1); backdrop-filter: blur(1rem); }\n  .mobile-panel-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { display: flex; min-height: 3.1rem; flex-direction: column; align-items: center; justify-content: center; gap: .1rem; border: 0; border-radius: .8rem; color: rgb(255 255 255 / .62); background: transparent; font-size: .62rem; font-weight: 850; letter-spacing: .035em; line-height: 1.1; }\n  .mobile-panel-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child { font-size: 1.05rem; line-height: 1; }\n  .mobile-panel-nav[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] { color: white; background: linear-gradient(135deg, rgb(123 44 255 / .48), rgb(255 25 200 / .3)); box-shadow: inset 0 0 0 .0625rem rgb(255 255 255 / .15), 0 .25rem .75rem rgb(123 44 255 / .25); }\n  .mobile-panel-nav[_ngcontent-%COMP%]   .mobile-tactical-action[_ngcontent-%COMP%] { color: white; }\n  .mobile-panel-nav[_ngcontent-%COMP%]   .mobile-tactical-action--zwap[_ngcontent-%COMP%] { background: linear-gradient(135deg, rgb(234 88 12 / .8), rgb(251 146 60 / .42)); box-shadow: inset 0 0 0 .0625rem rgb(255 219 174 / .3); }\n  .mobile-panel-nav[_ngcontent-%COMP%]   .mobile-tactical-action--bezzer[_ngcontent-%COMP%] { background: linear-gradient(135deg, rgb(109 40 217 / .82), rgb(236 72 153 / .4)); box-shadow: inset 0 0 0 .0625rem rgb(233 213 255 / .28); }\n  .mobile-panel-nav[_ngcontent-%COMP%]   .mobile-tactical-action[_ngcontent-%COMP%]:disabled { color: rgb(255 255 255 / .35); background: rgb(255 255 255 / .05); box-shadow: none; opacity: .72; }\n  .mobile-panel-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible { outline: .125rem solid var(--color-accent); outline-offset: .125rem; }\n  .score-area[_ngcontent-%COMP%] { height: 10.5rem; }\n}\n\n@media (max-width: 40rem) {\n  .score-area[_ngcontent-%COMP%] { height: 9rem; }\n  .dashboard-area[_ngcontent-%COMP%] { padding-bottom: 0; }\n  .game-shell[_ngcontent-%COMP%]::after, .score-area[_ngcontent-%COMP%]::before, .dashboard-area[_ngcontent-%COMP%]::before { display: none; }\n  .game-shell[_ngcontent-%COMP%] { gap: .65rem; padding-inline: 0; }\n  .board-area[_ngcontent-%COMP%] { min-height: 16rem; }\n  .turn-prep-card[_ngcontent-%COMP%] { width: min(94%, 24rem); padding: 1rem; }\n  .tactical-announcement[_ngcontent-%COMP%] { top: 3.1rem; }\n}\n.board-area[_ngcontent-%COMP%] { position: relative; }\n\n.golden-result-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 60;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n  background: radial-gradient(circle at 50% 45%, rgb(246 196 83 / .18), transparent 38%), rgb(2 2 9 / .82);\n  backdrop-filter: blur(1.1rem);\n  animation: _ngcontent-%COMP%_game-fade-in .3s ease-out both;\n}\n\n.golden-result-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 34rem);\n  padding: clamp(2rem, 7vw, 4rem);\n  overflow: hidden;\n  border: .125rem solid rgb(255 225 132 / .72);\n  border-radius: 2.4rem;\n  color: #fff8d8;\n  background: linear-gradient(150deg, rgb(65 42 8 / .98), rgb(12 9 20 / .98) 62%, rgb(49 29 4 / .98));\n  box-shadow: 0 0 4rem rgb(246 196 83 / .3), 0 2rem 5rem rgb(0 0 0 / .65), inset 0 .0625rem 0 rgb(255 255 255 / .2);\n  text-align: center;\n  animation: bounce-in .45s cubic-bezier(.2,.9,.25,1.15) both;\n}\n\n.golden-result-rays[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -70%;\n  opacity: .14;\n  background: repeating-conic-gradient(from 0deg, #f6c453 0 8deg, transparent 8deg 18deg);\n  animation: _ngcontent-%COMP%_golden-rays 20s linear infinite;\n}\n\n.golden-result-crown[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 6rem;\n  height: 6rem;\n  margin: 0 auto 1.2rem;\n  place-items: center;\n  border: .125rem solid #fff0ad;\n  border-radius: 50%;\n  color: #432700;\n  background: linear-gradient(145deg, #fff8c8, #f6c453 58%, #ca7d08);\n  box-shadow: 0 0 2.5rem rgb(246 196 83 / .52);\n  font-size: 3rem;\n}\n\n.golden-result-kicker[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  margin-bottom: .55rem;\n  color: rgb(255 231 150 / .7);\n  font-size: .72rem;\n  font-weight: 900;\n  letter-spacing: .24em;\n  text-transform: uppercase;\n}\n\n.golden-result-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  font-family: var(--font-display);\n  font-size: clamp(1.75rem, 6vw, 2.75rem);\n  font-weight: 950;\n  line-height: 1.08;\n}\n\n.golden-result-points[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 1rem 0 1.4rem;\n  color: #f6c453;\n  font-size: 2rem;\n  font-weight: 950;\n  text-shadow: 0 0 1.25rem rgb(246 196 83 / .38);\n}\n\n.golden-result-empty[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 1rem 0 1.4rem;\n  color: rgb(255 248 218 / .68);\n}\n\n.golden-result-answer[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: .35rem;\n  padding: 1rem;\n  border: .0625rem solid rgb(246 196 83 / .25);\n  border-radius: 1rem;\n  background: rgb(246 196 83 / .08);\n}\n\n.golden-result-answer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(255 234 164 / .62);\n  font-size: .65rem;\n  font-weight: 850;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n\n.golden-result-answer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: white; font-size: 1.2rem; }\n\n@keyframes _ngcontent-%COMP%_golden-rays { to { transform: rotate(360deg); } }\n\n@media (prefers-reduced-motion: reduce) {\n  .golden-result-rays[_ngcontent-%COMP%] { animation: none; }\n}\n\n.volume-control[_ngcontent-%COMP%] { position: relative; display: inline-flex; }\n.volume-button[_ngcontent-%COMP%] { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; min-height: 2.35rem; padding: .55rem .82rem; color: rgb(255 255 255 / .9); border: 0.0625rem solid rgb(255 255 255 / .15); border-radius: 62.4375rem; background: rgb(10 8 24 / .72); box-shadow: inset 0 0.0625rem 0 rgb(255 255 255 / .09), 0 0.5rem 1.375rem rgb(0 0 0 / .2); backdrop-filter: blur(0.75rem); cursor: pointer; font-size: .72rem; font-weight: 850; letter-spacing: .06em; text-transform: uppercase; transition: transform 180ms ease, border-color 180ms ease, background 180ms ease; }\n.volume-button[_ngcontent-%COMP%]:hover, .volume-control[_ngcontent-%COMP%]:focus-within   .volume-button[_ngcontent-%COMP%] { border-color: var(--color-primary-light); background: rgb(94 49 174 / .22); transform: translateY(-0.125rem); }\n.volume-control.is-muted[_ngcontent-%COMP%]   .volume-button[_ngcontent-%COMP%] { color: rgb(255 255 255 / .58); }\n.volume-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: 1.25rem; height: 1.25rem; fill: none; stroke: currentColor; stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }\n.volume-popover[_ngcontent-%COMP%] { position: absolute; right: 0; bottom: calc(100% + .65rem); display: flex; width: 13rem; align-items: center; gap: .7rem; padding: .72rem .85rem; border: 0.0625rem solid rgb(191 137 255 / .28); border-radius: .85rem; background: linear-gradient(145deg, rgb(24 17 53 / .97), rgb(5 7 23 / .97)); box-shadow: 0 1rem 2.375rem rgb(0 0 0 / .48), 0 0 1.5rem rgb(123 44 255 / .12), inset 0 0.0625rem 0 rgb(255 255 255 / .1); opacity: 0; pointer-events: none; transform: translateY(.35rem) scale(.97); transform-origin: bottom right; transition: opacity 150ms ease 280ms, transform 150ms ease 280ms; }\n.volume-popover[_ngcontent-%COMP%]::after { content: ''; position: absolute; right: 0; bottom: -.8rem; left: 0; height: .85rem; }\n.volume-control[_ngcontent-%COMP%]:hover   .volume-popover[_ngcontent-%COMP%], .volume-control[_ngcontent-%COMP%]:focus-within   .volume-popover[_ngcontent-%COMP%] { opacity: 1; pointer-events: auto; transform: none; transition-delay: 0ms; }\n.volume-popover__value[_ngcontent-%COMP%] { width: 2.3rem; flex: 0 0 auto; color: rgb(255 255 255 / .68); font-size: .65rem; font-weight: 850; font-variant-numeric: tabular-nums; }\n.volume-popover[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; height: 1.1rem; accent-color: #b45cff; cursor: pointer; }\n\n@media (max-width: 40rem) {\n  .game-controls[_ngcontent-%COMP%] { padding: .15rem 0 .7rem; }\n  .volume-popover[_ngcontent-%COMP%] { right: -1.5rem; width: 11.5rem; }\n}\n\n.turn-prep-card[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  width: min(88%, 26rem);\n  padding: 1.25rem;\n  border: 0.0625rem solid rgb(255 255 255 / .18);\n  border-radius: 1.5rem;\n  text-align: center;\n  box-shadow: 0 1.125rem 3.4375rem rgb(0 0 0 / .42);\n}\n\n.turn-prep-kicker[_ngcontent-%COMP%] { display: block; color: var(--color-accent); font-size: .72rem; font-weight: 900; letter-spacing: .14em; text-transform: uppercase; }\n.turn-prep-category[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: center; gap: .8rem; margin: .8rem 0; color: white; }\n.turn-prep-category[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; flex-direction: column; text-align: left; }\n.turn-prep-category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.turn-prep-icon) { color: rgb(255 255 255 / .65); font-size: .85rem; }\n.turn-prep-icon[_ngcontent-%COMP%] { display: block; flex: 0 0 auto; }\n.turn-prep-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: rgb(255 255 255 / .68); font-size: .88rem; }\n.turn-prep-queue[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; justify-content: center; gap: .35rem; margin-top: .85rem; }\n.turn-prep-queue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .turn-prep-queue[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { padding: .26rem .5rem; border: 0.0625rem solid rgb(255 255 255 / .13); border-radius: 62.4375rem; background: rgb(255 255 255 / .06); color: rgb(255 255 255 / .76); font-size: .68rem; }\n.turn-prep-queue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--color-primary-light); font-weight: 900; text-transform: uppercase; letter-spacing: .06em; }\n.turn-prep-button[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: .35rem; min-height: 2.7rem; margin-top: 1rem; padding: .55rem 1rem .55rem 1.15rem; color: white; border: 0.0625rem solid oklch(0.72 0.20 285 / .55); border-radius: 62.4375rem; background: linear-gradient(135deg, oklch(0.58 0.28 290 / .32), oklch(0.65 0.28 340 / .22)); box-shadow: 0 0.5rem 1.375rem oklch(0.58 0.28 290 / .18), inset 0 0.0625rem 0 rgb(255 255 255 / .15); font-size: .84rem; font-weight: 800; letter-spacing: .03em; cursor: pointer; transition: transform 180ms ease, border-color 180ms ease, background 180ms ease; }\n.turn-prep-button[_ngcontent-%COMP%]:hover { border-color: var(--color-primary-light); background: linear-gradient(135deg, oklch(0.58 0.28 290 / .48), oklch(0.65 0.28 340 / .38)); transform: translateY(-0.0625rem); }\n.turn-prep-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: 1rem; height: 1rem; fill: none; stroke: currentColor; stroke-width: 2.3; stroke-linecap: round; stroke-linejoin: round; }\n\n.opponents-categories[_ngcontent-%COMP%] { padding: .75rem 1rem; border: 0.0625rem solid rgb(188 133 255 / .24); border-radius: 1rem; background: linear-gradient(115deg, rgb(18 14 45 / .74), rgb(4 7 22 / .74)); box-shadow: inset 0 0.0625rem 0 rgb(255 255 255 / .07), 0 0.75rem 1.75rem rgb(0 0 0 / .18); }\n.opponents-categories[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] { cursor: pointer; color: rgb(255 255 255 / .75); font-size: .8rem; font-weight: 800; }\n.opponent-category-row[_ngcontent-%COMP%] { display: flex; align-items: center; gap: .45rem; padding-top: .65rem; }\n.opponent-category-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { margin-right: auto; overflow: hidden; color: white; font-size: .78rem; font-weight: 800; text-overflow: ellipsis; white-space: nowrap; }\n.opponent-category-icon[_ngcontent-%COMP%] { position: relative; display: inline-flex; flex: 0 0 auto; outline: none; transition: opacity 180ms ease, filter 180ms ease; }\n.opponent-category-icon.is-played[_ngcontent-%COMP%]    > app-category-badge[_ngcontent-%COMP%] { opacity: .3; filter: grayscale(1) saturate(.25); }\n.opponent-category-tooltip[_ngcontent-%COMP%] { position: absolute; z-index: 30; bottom: calc(100% + .45rem); left: 50%; width: max-content; max-width: 11rem; padding: .35rem .55rem; border: 0.0625rem solid rgb(255 255 255 / .14); border-radius: .45rem; background: rgb(12 9 24 / .96); box-shadow: 0 0.5rem 1.25rem rgb(0 0 0 / .35); color: white; font-size: .67rem; font-weight: 700; line-height: 1.2; opacity: 0; pointer-events: none; transform: translate(-50%, .2rem); transition: opacity 140ms ease, transform 140ms ease; white-space: nowrap; }\n.opponent-category-icon[_ngcontent-%COMP%]:hover   .opponent-category-tooltip[_ngcontent-%COMP%], \n.opponent-category-icon[_ngcontent-%COMP%]:focus-visible   .opponent-category-tooltip[_ngcontent-%COMP%] { opacity: 1; transform: translate(-50%, 0); }\n.opponent-category-icon[_ngcontent-%COMP%]:focus-visible { border-radius: .75rem; outline: 0.125rem solid var(--color-accent); outline-offset: 0.125rem; }\n\n.zwap-overlay[_ngcontent-%COMP%] { position: fixed; z-index: 60; inset: 0; display: grid; place-items: center; padding: 1rem; background: rgb(3 2 10 / .72); backdrop-filter: blur(0.625rem); }\n.zwap-dialog[_ngcontent-%COMP%] { width: min(100%, 38rem); max-height: calc(100dvh - 2rem); display: flex; flex-direction: column; border: 0.0625rem solid rgb(249 115 22 / .42); border-radius: 1.5rem; overflow: hidden; box-shadow: 0 1.625rem 4.375rem rgb(0 0 0 / .58), 0 0 2.375rem rgb(249 115 22 / .12); }\n.zwap-dialog__header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.2rem; border-bottom: 0.0625rem solid rgb(255 255 255 / .1); }\n.zwap-dialog__eyebrow[_ngcontent-%COMP%] { display: block; color: rgb(251 146 60); font-size: .67rem; font-weight: 900; letter-spacing: .13em; text-transform: uppercase; }\n.zwap-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: .1rem 0 0; color: white; font-size: 1.45rem; font-weight: 900; }\n.zwap-close[_ngcontent-%COMP%] { width: 2.2rem; height: 2.2rem; border: 0.0625rem solid rgb(255 255 255 / .12); border-radius: .7rem; color: rgb(255 255 255 / .72); font-size: 1.55rem; line-height: 1; cursor: pointer; }\n.zwap-close[_ngcontent-%COMP%]:hover { color: white; background: rgb(255 255 255 / .08); }\n.zwap-dialog__content[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 1rem; padding: 1.15rem 1.2rem; overflow-y: auto; }\n.zwap-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0 0 .55rem; color: rgb(255 255 255 / .72); font-size: .75rem; font-weight: 800; letter-spacing: .04em; }\n.zwap-categories[_ngcontent-%COMP%], .zwap-players[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: .55rem; }\n.zwap-category-choice[_ngcontent-%COMP%], .zwap-player-choice[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: .45rem; min-height: 2.7rem; padding: .35rem .5rem; border: 0.0625rem solid rgb(255 255 255 / .12); border-radius: .85rem; color: rgb(255 255 255 / .8); background: rgb(0 0 0 / .16); font-size: .73rem; font-weight: 800; cursor: pointer; transition: border-color 160ms ease, background 160ms ease, transform 160ms ease; }\n.zwap-category-choice[_ngcontent-%COMP%] { position: relative; }\n.zwap-category-tooltip[_ngcontent-%COMP%] { position: absolute; z-index: 10; bottom: calc(100% + .45rem); left: 50%; width: max-content; max-width: 12rem; padding: .35rem .55rem; border: .0625rem solid rgb(255 255 255 / .14); border-radius: .45rem; background: rgb(12 9 24 / .97); box-shadow: 0 .5rem 1.25rem rgb(0 0 0 / .35); color: white; font-size: .67rem; line-height: 1.2; opacity: 0; pointer-events: none; transform: translate(-50%, .2rem); transition: opacity 140ms ease, transform 140ms ease; white-space: nowrap; }\n.zwap-category-choice[_ngcontent-%COMP%]:hover   .zwap-category-tooltip[_ngcontent-%COMP%], .zwap-category-choice[_ngcontent-%COMP%]:focus-visible   .zwap-category-tooltip[_ngcontent-%COMP%] { opacity: 1; transform: translate(-50%, 0); }\n.zwap-category-choice[_ngcontent-%COMP%]:hover:not(:disabled), .zwap-player-choice[_ngcontent-%COMP%]:hover:not(:disabled) { border-color: rgb(251 146 60 / .65); background: rgb(249 115 22 / .12); transform: translateY(-0.0625rem); }\n.zwap-category-choice.is-selected[_ngcontent-%COMP%], .zwap-player-choice.is-selected[_ngcontent-%COMP%] { border-color: rgb(251 146 60 / .9); background: rgb(249 115 22 / .2); box-shadow: 0 0 0 0.125rem rgb(249 115 22 / .15); }\n.zwap-category-choice[_ngcontent-%COMP%]:disabled, .zwap-player-choice[_ngcontent-%COMP%]:disabled { opacity: .32; cursor: not-allowed; }\n.zwap-category-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { min-width: 2.4rem; }\n.zwap-player-dot[_ngcontent-%COMP%] { width: .55rem; height: .55rem; border-radius: 62.4375rem; }\n.zwap-dialog__actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: .65rem; padding: 1rem 1.2rem; border-top: 0.0625rem solid rgb(255 255 255 / .1); }\n.zwap-cancel[_ngcontent-%COMP%] { padding: .65rem .9rem; border: 0.0625rem solid rgb(255 255 255 / .14); border-radius: .75rem; color: rgb(255 255 255 / .72); font-size: .82rem; font-weight: 800; cursor: pointer; }\n.zwap-confirm[_ngcontent-%COMP%] { min-height: 2.7rem; padding: .55rem 1rem; border-radius: .75rem; font-size: .82rem; }\n\n@media (prefers-reduced-motion: reduce) { .game-shell[_ngcontent-%COMP%]::before { animation: none; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GameComponent, [{
        type: Component,
        args: [{ selector: 'app-game', standalone: true, imports: [
                    CommonModule,
                    BoardComponent,
                    CategorySlotsComponent,
                    QuestionModalComponent,
                    ScoreboardComponent,
                    TacticalPanelComponent,
                    TurnIndicatorComponent,
                    CategoryBadgeComponent,
                    RulesHelpComponent
                ], template: "<div\n  class=\"game-shell relative isolate flex w-full max-w-[93.75rem] flex-col gap-3 p-1 mx-auto min-h-[calc(100dvh-1.5rem)] sm:min-h-[calc(100dvh-2.5rem)] sm:p-2 lg:h-[calc(100dvh-3rem)] lg:min-h-0 lg:max-h-[61.25rem] lg:gap-4 min-[106.25rem]:max-w-[108.75rem]\"\n>\n  <!-- Top Bar: Turn Indicator & Round -->\n  <header\n    class=\"game-header flex-none flex justify-center items-center relative z-20 lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-max\"\n  >\n    <app-turn-indicator\n      [playerName]=\"currentTurnPlayerName\"\n      [playerColor]=\"currentTurnPlayerColor\"\n      [isMyTurn]=\"gameState.isMyTurn()\"\n      [phaseText]=\"phaseText\"\n    >\n    </app-turn-indicator>\n  </header>\n  @if (gameState.tacticalAnnouncement(); as announcement) {\n    <div class=\"tactical-announcement\" role=\"status\" aria-live=\"assertive\">\n      {{ announcement }}\n    </div>\n  }\n  @if (hasReboundStatus) {\n    <div class=\"rebound-queue\" role=\"status\" aria-live=\"polite\">\n      <span class=\"rebound-queue__label\">{{ isReboundTurn ? 'Rebote activo' : 'Cola de rebotes' }}</span>\n      @if (isReboundTurn) {\n        <span class=\"rebound-queue__player rebound-queue__player--active\">Responde: {{ currentAnswerPlayerName }}</span>\n      }\n      @for (playerName of reboundQueueNames; track playerName; let index = $index) {\n        <span class=\"rebound-queue__player\">{{ isReboundTurn ? 'Despu\u00E9s: ' : (index + 1) + '. ' }}{{ playerName }}</span>\n      }\n    </div>\n  }\n  @if (gameState.gamePhase() === 'ZWAP') {\n    <div class=\"rebound-queue\" role=\"status\" aria-live=\"polite\">\n      <span class=\"rebound-queue__label\">ZWAP</span>\n      <span class=\"rebound-queue__player rebound-queue__player--active\">\n        {{ pendingZwapPlayerName }} est\u00E1 eligiendo un intercambio \u00B7 {{ gameState.timer() }} s\n      </span>\n    </div>\n  }\n\n  <!-- Main Game Area -->\n  <main\n    class=\"relative z-10 grid min-h-0 flex-grow grid-cols-1 gap-3 lg:grid-cols-[clamp(13rem,18vw,16.25rem)_minmax(0,1fr)_clamp(15.5rem,20vw,18.75rem)] lg:gap-4 min-[106.25rem]:grid-cols-[clamp(20rem,20vw,21.875rem)_minmax(0,1fr)_clamp(17.5rem,18vw,20rem)] min-[106.25rem]:gap-5\"\n  >\n    <!-- Left Sidebar: Scoreboard (Hidden on small mobile, bottom on tablet, left on desktop) -->\n    <aside id=\"mobile-score\" class=\"score-area order-2 flex h-auto min-h-0 min-w-0 w-full lg:order-1 lg:h-full lg:flex-col\" [class.mobile-panel-hidden]=\"true\">\n      <app-scoreboard\n        [players]=\"gameState.sortedPlayers()\"\n        [currentTurnPlayerId]=\"gameState.currentTurnPlayerId()\"\n        [currentRound]=\"gameState.currentRound()\"\n      >\n      </app-scoreboard>\n    </aside>\n\n    <!-- Center: Board -->\n    <section id=\"mobile-board\"\n      class=\"board-area relative order-1 flex w-full min-w-0 min-h-[20rem] items-center justify-center p-1 lg:order-2 lg:min-h-0 lg:pt-16 lg:pb-16\"\n    >\n      <app-board\n        [players]=\"gameState.players()\"\n        [currentTurnPlayerId]=\"gameState.currentTurnPlayerId()\"\n        [winningPosition]=\"gameState.winningPosition()\"\n      >\n      </app-board>\n\n      <!-- A short, skippable tactical beat before the question keeps ZWAP meaningful\n      without forcing the table to wait for the whole countdown. -->\n      @if (gameState.gamePhase() === 'PLAYING') {\n        <div class=\"turn-prep-card glass-strong\">\n          <span class=\"turn-prep-kicker\">Siguiente pregunta en {{ gameState.timer() }} s</span>\n          @if (currentTurnCategory; as category) {\n            <div class=\"turn-prep-category\">\n              <app-category-badge\n                class=\"turn-prep-icon\"\n                [name]=\"category.category.name\"\n                [icon]=\"category.category.icon\"\n                [color]=\"category.category.color\"\n                [compact]=\"true\"\n              >\n              </app-category-badge>\n              <div>\n                <strong>{{ currentTurnPlayerName }}</strong>\n                <span>{{ category.category.name }} \u00B7 {{ category.pointValue }} puntos</span>\n              </div>\n            </div>\n          }\n          <p>Todos deben confirmar antes de mostrar la pregunta. Mientras tanto puedes usar tus fichas.</p>\n          @if (reboundQueueNames.length > 0) {\n            <div class=\"turn-prep-queue\" role=\"status\">\n              <span>Cola BEZZER</span>\n              @for (playerName of reboundQueueNames; track playerName; let index = $index) {\n                <b>{{ index + 1 }}. {{ playerName }}</b>\n              }\n            </div>\n          }\n          <button type=\"button\" class=\"turn-prep-button\" (click)=\"skipPreparation()\" [disabled]=\"!canSkipPreparation\">\n              <span>Listo ({{ gameState.preparationSkipVotes().length }}/{{ gameState.players().length }})</span>\n              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m9 18 6-6-6-6\" /></svg>\n          </button>\n        </div>\n      }\n    </section>\n\n    <!-- Right Sidebar: Personal Dashboard -->\n    <aside id=\"mobile-categories\" class=\"dashboard-area order-3 flex h-auto min-h-0 min-w-0 w-full flex-col gap-3 lg:h-full\" [class.is-mobile-open]=\"mobileSection === 'categories'\">\n      <div class=\"flex-grow min-h-0\">\n        <app-category-slots\n          [slots]=\"gameState.myCategories()\"\n          [isAssigning]=\"isAssigningCategories\"\n          [currentSlotIndex]=\"currentSlotIndex\"\n          (assignmentChanged)=\"onAssignmentChanged($event)\"\n          (submitAssignment)=\"submitAssignment()\"\n        >\n        </app-category-slots>\n      </div>\n\n      @if (gameState.gamePhase() !== 'CATEGORY_ASSIGNMENT') {\n        <details class=\"opponents-categories glass\" open>\n          <summary>Ver categor\u00EDas de los dem\u00E1s</summary>\n          @for (player of gameState.players(); track player) {\n            @if (player.playerId !== playerId()) {\n              <div class=\"opponent-category-row\">\n                <strong [style.color]=\"player.color\">{{ player.username }}</strong>\n                @for (slot of orderedCategories(player.categorySlots); track slot) {\n                  <span\n                    class=\"opponent-category-icon\"\n                    [class.is-played]=\"slot.answered\"\n                    [attr.title]=\"slot.category.name + (slot.answered ? ' (ya jugada)' : '')\"\n                    tabindex=\"0\"\n                    [attr.aria-label]=\"\n                      slot.category.name +\n                      ', ' +\n                      slot.pointValue +\n                      ' puntos' +\n                      (slot.answered ? ', ya jugada' : '')\n                    \"\n                  >\n                    <app-category-badge\n                      [name]=\"slot.category.name\"\n                      [icon]=\"slot.category.icon\"\n                      [color]=\"slot.category.color\"\n                      [compact]=\"true\"\n                    >\n                    </app-category-badge>\n                    <span class=\"opponent-category-tooltip\" role=\"tooltip\">{{\n                      slot.category.name\n                    }}</span>\n                  </span>\n                }\n              </div>\n            }\n          }\n        </details>\n      }\n\n      <div id=\"mobile-tactics\" class=\"flex-none min-h-40 lg:h-[13rem]\">\n        <app-tactical-panel\n          [zwapsLeft]=\"gameState.myTacticalTiles().zwap\"\n          [bezzerwizzersLeft]=\"gameState.myTacticalTiles().bezzerwizzer\"\n          [canZwap]=\"gameState.canPlayZwap()\"\n          [canBezzerwizzer]=\"canChallengeWithBezzerwizzer\"\n          [canSkipPreparation]=\"canSkipPreparation\"\n          [skipVotes]=\"gameState.preparationSkipVotes().length\"\n          [playerCount]=\"gameState.players().length\"\n          (zwapClick)=\"onZwapClick()\"\n          (bezzerwizzerClick)=\"onBezzerwizzerClick()\"\n          (skipPreparationClick)=\"skipPreparation()\"\n        >\n        </app-tactical-panel>\n      </div>\n    </aside>\n    @if (mobileSection === 'categories') {\n      <button\n        type=\"button\"\n        class=\"mobile-categories-backdrop\"\n        aria-label=\"Cerrar panel de mis fichas\"\n        (click)=\"goToMobileSection('board')\"\n      ></button>\n    }\n  </main>\n\n  <footer class=\"game-controls relative z-28 flex flex-none items-center justify-center gap-3 lg:absolute lg:right-0 lg:bottom-[.2rem] lg:left-0 lg:mx-auto lg:w-max\" aria-label=\"Controles de la partida\">\n    <app-rules-help [compact]=\"true\"></app-rules-help>\n    <div class=\"volume-control\" [class.is-muted]=\"audioService.muted()\">\n      <button\n        type=\"button\"\n        class=\"volume-button\"\n        (click)=\"audioService.toggleMute()\"\n        [attr.aria-label]=\"audioService.muted() ? 'Activar sonido' : 'Silenciar sonido'\"\n        [attr.aria-pressed]=\"audioService.muted()\"\n      >\n        @if (audioService.muted()) {\n          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M11 5 6.5 9H3v6h3.5L11 19V5ZM16 9l5 6M21 9l-5 6\" /></svg>\n        } @else {\n          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M11 5 6.5 9H3v6h3.5L11 19V5ZM15 9.5a4 4 0 0 1 0 5M18 7a7 7 0 0 1 0 10\" /></svg>\n        }\n        <span>Sonido</span>\n      </button>\n      <div class=\"volume-popover\">\n        <span class=\"volume-popover__value\">{{ audioService.volume() * 100 | number:'1.0-0' }}%</span>\n        <input\n          type=\"range\"\n          min=\"0\"\n          max=\"1\"\n          step=\"0.05\"\n          [value]=\"audioService.volume()\"\n          (input)=\"setAudioVolume($event)\"\n          aria-label=\"Volumen del juego\"\n        />\n      </div>\n    </div>\n  </footer>\n\n  <nav class=\"mobile-panel-nav\" aria-label=\"Navegaci\u00F3n r\u00E1pida de la partida\">\n    <button type=\"button\" (click)=\"goToMobileSection('board')\" [attr.aria-current]=\"mobileSection === 'board' ? 'page' : null\" [class.is-active]=\"mobileSection === 'board'\">\n      <span aria-hidden=\"true\">\u25CE</span><span>Tablero</span>\n    </button>\n    <button type=\"button\" (click)=\"goToMobileSection('categories')\" [attr.aria-current]=\"mobileSection === 'categories' ? 'page' : null\" [attr.aria-expanded]=\"mobileSection === 'categories'\" [class.is-active]=\"mobileSection === 'categories'\">\n      <span aria-hidden=\"true\">\u25A6</span><span>Mis fichas</span>\n    </button>\n    <button type=\"button\" class=\"mobile-tactical-action mobile-tactical-action--zwap\" (click)=\"onZwapClick()\" [disabled]=\"!gameState.canPlayZwap()\" [attr.aria-label]=\"'Usar ZWAP. Quedan ' + gameState.myTacticalTiles().zwap\">\n      <span aria-hidden=\"true\">\u2194</span><span>ZWAP \u00B7 {{ gameState.myTacticalTiles().zwap }}</span>\n    </button>\n    <button type=\"button\" class=\"mobile-tactical-action mobile-tactical-action--bezzer\" (click)=\"onBezzerwizzerClick()\" [disabled]=\"!canChallengeWithBezzerwizzer\" [attr.aria-label]=\"'Usar Bezzerwizzer. Quedan ' + gameState.myTacticalTiles().bezzerwizzer\">\n      <span aria-hidden=\"true\">\u2726</span><span>BEZZER \u00B7 {{ gameState.myTacticalTiles().bezzerwizzer }}</span>\n    </button>\n  </nav>\n\n  <!-- Overlays -->\n  @if (showQuestionModal) {\n    <app-question-modal\n      [question]=\"gameState.currentQuestion()\"\n      [timer]=\"gameState.timer()\"\n      [timerTotal]=\"gameState.timerTotal()\"\n      [isAnswered]=\"!canAnswerQuestion\"\n      [canChangeAnswer]=\"canChangePreparedAnswer\"\n      [selectionFailed]=\"isMySelectionIncorrect\"\n      [canBezzerwizzer]=\"canChallengeWithBezzerwizzer\"\n      [answeringPlayerName]=\"currentAnswerPlayerName\"\n      [isReboundTurn]=\"isReboundTurn\"\n      [reboundQueue]=\"reboundQueueNames\"\n      [isGoldenQuestion]=\"isGoldenQuestion\"\n      (onAnswer)=\"handleAnswer($event)\"\n      (onBezzerwizzer)=\"onBezzerwizzerClick()\"\n    >\n    </app-question-modal>\n  }\n\n  @if (showZwapSelector) {\n    <div class=\"zwap-overlay\" role=\"presentation\">\n      <section class=\"zwap-dialog glass-strong\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"zwap-title\">\n        <header class=\"zwap-dialog__header\">\n          <div>\n            <span class=\"zwap-dialog__eyebrow\">Ficha t\u00E1ctica</span>\n            <h2 id=\"zwap-title\">Usar ZWAP</h2>\n            <p>Tiempo para intercambiar: {{ gameState.timer() }} s</p>\n          </div>\n          <button type=\"button\" class=\"zwap-close\" (click)=\"cancelZwap()\" aria-label=\"Cerrar selector ZWAP\">\u00D7</button>\n        </header>\n\n        @if (getMyPlayer(); as me) {\n          <div class=\"zwap-dialog__content\">\n            <section>\n              <h3>1. Elige una de tus categor\u00EDas</h3>\n              <div class=\"zwap-categories\">\n                @for (item of availableZwapSlots(me); track item.index) {\n                  <button type=\"button\" class=\"zwap-category-choice\" [class.is-selected]=\"zwapSourceIndex === item.index\" (click)=\"selectZwapSource(item.index)\" [attr.title]=\"item.slot.category.name\">\n                    <app-category-badge [name]=\"item.slot.category.name\" [icon]=\"item.slot.category.icon\" [color]=\"item.slot.category.color\" [compact]=\"true\"></app-category-badge>\n                    <span>{{ item.slot.pointValue }} pts</span>\n                    <span class=\"zwap-category-tooltip\" role=\"tooltip\">{{ item.slot.category.name }}</span>\n                  </button>\n                }\n              </div>\n            </section>\n\n            @if (zwapSourceIndex !== null) {\n              <section>\n                <h3>2. Elige el jugador destino</h3>\n                <div class=\"zwap-players\">\n                  @for (player of gameState.players(); track player.playerId) {\n                    <button type=\"button\" class=\"zwap-player-choice\" [class.is-selected]=\"zwapTargetPlayerId === player.playerId\" [disabled]=\"availableZwapSlots(player).length === 0\" (click)=\"selectZwapTargetPlayer(player.playerId)\">\n                      <span class=\"zwap-player-dot\" [style.backgroundColor]=\"player.color\"></span>\n                      {{ player.playerId === playerId() ? 'Reordenar mis categor\u00EDas' : player.username }}\n                    </button>\n                  }\n                </div>\n              </section>\n            }\n\n            @if (getZwapTargetPlayer(); as target) {\n              <section>\n                <h3>3. Elige la categor\u00EDa destino</h3>\n                <div class=\"zwap-categories\">\n                  @for (item of availableZwapSlots(target); track item.index) {\n                    <button type=\"button\" class=\"zwap-category-choice\" [class.is-selected]=\"zwapTargetSlotIndex === item.index\" [disabled]=\"target.playerId === playerId() && item.index === zwapSourceIndex\" (click)=\"zwapTargetSlotIndex = item.index\" [attr.title]=\"item.slot.category.name\">\n                      <app-category-badge [name]=\"item.slot.category.name\" [icon]=\"item.slot.category.icon\" [color]=\"item.slot.category.color\" [compact]=\"true\"></app-category-badge>\n                      <span>{{ item.slot.pointValue }} pts</span>\n                      <span class=\"zwap-category-tooltip\" role=\"tooltip\">{{ item.slot.category.name }}</span>\n                    </button>\n                  }\n                </div>\n              </section>\n            }\n          </div>\n        }\n\n        <footer class=\"zwap-dialog__actions\">\n          <button type=\"button\" class=\"zwap-cancel\" (click)=\"cancelZwap()\">Cancelar</button>\n          <button type=\"button\" class=\"btn-primary zwap-confirm\" (click)=\"confirmZwap()\" [disabled]=\"zwapSourceIndex === null || !zwapTargetPlayerId || zwapTargetSlotIndex === null\">Confirmar intercambio</button>\n        </footer>\n      </section>\n    </div>\n  }\n\n  @if (gameState.gamePhase() === 'GOLDEN_RESULT' && gameState.goldenQuestionResult(); as goldenResult) {\n    <div class=\"golden-result-overlay\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"golden-result-title\">\n      <section class=\"golden-result-card\">\n        <div class=\"golden-result-rays\" aria-hidden=\"true\"></div>\n        <div class=\"golden-result-crown\" aria-hidden=\"true\">\u2605</div>\n        <span class=\"golden-result-kicker\">Pregunta Dorada</span>\n        @if (goldenResult.winnerPlayerId) {\n          <h2 id=\"golden-result-title\">\u00A1{{ goldenWinnerName }} fue el m\u00E1s r\u00E1pido!</h2>\n          <p class=\"golden-result-points\">+{{ goldenResult.points }} puntos</p>\n        } @else {\n          <h2 id=\"golden-result-title\">El bonus queda desierto</h2>\n          <p class=\"golden-result-empty\">Esta vez nadie encontr\u00F3 la respuesta a tiempo.</p>\n        }\n        <div class=\"golden-result-answer\">\n          <span>Respuesta correcta</span>\n          <strong>{{ goldenResult.correctAnswer }}</strong>\n        </div>\n      </section>\n    </div>\n  }\n\n  <!-- Result Overlay (Answer Correct/Incorrect) -->\n  @if (showResultOverlay) {\n    <div\n      class=\"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in\"\n    >\n      <div\n        class=\"glass p-12 rounded-[3rem] flex flex-col items-center animate-bounce-in max-w-md w-full text-center\"\n        [ngClass]=\"\n          lastResultCorrect\n            ? 'border-correct/50 glow-correct'\n            : 'border-incorrect/50 glow-incorrect'\n        \"\n      >\n        @if (!showReboundSummary) {\n          <div\n          class=\"result-icon w-28 h-28 rounded-full flex items-center justify-center mb-6 shadow-2xl\"\n          [ngClass]=\"lastResultCorrect ? 'bg-correct text-white' : 'bg-incorrect text-white'\"\n          >\n            @if (lastResultCorrect) {\n              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12.5 4.2 4L19 7\" /></svg>\n            } @else {\n              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m7 7 10 10M17 7 7 17\" /></svg>\n            }\n          </div>\n          <h2 class=\"text-4xl font-black font-display mb-4 text-white\">\n            {{ lastResultCorrect ? '\u00A1CORRECTO!' : 'INCORRECTO' }}\n          </h2>\n\n          @if (lastResultCorrect) {\n            <p class=\"text-2xl font-bold text-correct mb-6\">\n              +{{ lastResultPoints }} puntos\n            </p>\n          } @else {\n            <div class=\"w-full bg-incorrect/10 border-2 border-incorrect/40 rounded-2xl p-4 mb-6 text-left\">\n              <p class=\"text-xs font-bold text-incorrect uppercase tracking-widest mb-2\">\n                Respuesta correcta\n              </p>\n              <p class=\"text-lg font-bold text-white break-words\">\n                {{ lastResultAnswerText }}\n              </p>\n            </div>\n          }\n        } @else {\n          <h2 class=\"mb-4 text-3xl font-black font-display text-white\">Resultados de rebotes</h2>\n          <div class=\"w-full rounded-2xl border border-correct/40 bg-correct/10 p-4 mb-6 text-left\">\n            <p class=\"mb-2 text-xs font-bold uppercase tracking-widest text-correct\">\n              Soluci\u00F3n correcta\n            </p>\n            <p class=\"text-lg font-bold text-white break-words\">\n              {{ lastResultAnswerText }}\n            </p>\n          </div>\n        }\n        @if (gameState.answerResults().length > 1) {\n          <section class=\"w-full bg-surface-elevated/50 p-4 rounded-2xl mb-4 text-left border border-border/50\">\n            <h4 class=\"text-sm font-bold text-purple-400 mb-2 uppercase tracking-widest\">Respuestas de la jugada</h4>\n            @for (answerResult of gameState.answerResults(); track answerResult.playerId) {\n              <div class=\"flex items-center justify-between gap-3 py-2 border-b border-white/10 last:border-0 text-sm\">\n                <div class=\"min-w-0\">\n                  <span class=\"font-bold text-white\">{{ getPlayerName(answerResult.playerId) }}</span>\n                  <span class=\"text-white/65\"> \u00B7 {{ getSubmittedAnswerText(answerResult) }}</span>\n                </div>\n                <span class=\"shrink-0 font-bold\" [ngClass]=\"answerResult.correct ? 'text-correct' : 'text-incorrect'\">\n                  {{ answerResult.correct ? 'Correcta' : 'Incorrecta' }} \u00B7 {{ answerResult.points > 0 ? '+' : '' }}{{ answerResult.points }} pts\n                </span>\n              </div>\n            }\n          </section>\n        }\n        <!-- Bezzerwizzer Results if any -->\n        @if (bezzerwizzerResults.length > 0) {\n          <div\n            class=\"w-full bg-surface-elevated/50 p-4 rounded-2xl mb-4 text-left border border-border/50\"\n          >\n            <h4 class=\"text-sm font-bold text-purple-400 mb-2 uppercase tracking-widest\">\n              Resultados Bezzerwizzer\n            </h4>\n            @for (bz of bezzerwizzerResults; track bz) {\n              <div class=\"flex items-center gap-2 text-sm text-white font-medium\">\n                <span>{{ getPlayerName(bz.challengerId) }}:</span>\n                <span [ngClass]=\"bz.correct ? 'text-correct' : 'text-incorrect'\">\n                  {{ bz.correct ? '+' + bz.pointsGained : bz.pointsGained }} pts\n                </span>\n              </div>\n            }\n          </div>\n        }\n      </div>\n    </div>\n  }\n</div>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 0;\n}\n\n.game-shell { animation: game-fade-in .45s ease-out both; }\n.game-shell::after { content: ''; position: absolute; z-index: -2; inset: 6% -3% -3%; opacity: .34; background: linear-gradient(90deg, rgb(123 44 255 / .08), transparent 18% 82%, rgb(255 25 200 / .07)), radial-gradient(ellipse at 50% 100%, rgb(123 44 255 / .17), transparent 57%); border-radius: 3rem; pointer-events: none; }\n.game-shell::before { content: ''; position: absolute; z-index: -1; width: min(72vw, 72rem); height: min(60vw, 48rem); top: 10%; left: 50%; border-radius: 50%; opacity: .45; transform: translateX(-50%); background: radial-gradient(circle, rgb(123 44 255 / .19), rgb(0 217 255 / .06) 39%, transparent 69%); filter: blur(1.875rem); pointer-events: none; animation: shell-aura 12s ease-in-out infinite alternate; }\n.tactical-announcement { position: absolute; z-index: 30; top: 3.4rem; left: 50%; width: min(calc(100% - 2rem), 44rem); padding: .8rem 1.15rem; border: .0625rem solid rgb(255 214 102 / .72); border-radius: 1rem; background: linear-gradient(110deg, rgb(92 31 148 / .95), rgb(185 40 149 / .94)); box-shadow: 0 .9rem 2.4rem rgb(0 0 0 / .4), 0 0 2rem rgb(255 73 202 / .35); color: white; font-size: clamp(.75rem, 1.8vw, .95rem); font-weight: 900; letter-spacing: .045em; text-align: center; text-transform: uppercase; transform: translateX(-50%); animation: tactical-alert-in .32s cubic-bezier(.2,.9,.25,1.2) both; }\n.rebound-queue { display: flex; flex-wrap: wrap; justify-content: center; gap: .45rem; margin: -0.45rem 0 .1rem; }\n.rebound-queue__label, .rebound-queue__player { padding: .3rem .6rem; border: 0.0625rem solid rgb(255 255 255 / .12); border-radius: 62.4375rem; background: rgb(10 7 24 / .66); color: rgb(255 255 255 / .65); font-size: .68rem; font-weight: 800; letter-spacing: .05em; }\n.rebound-queue__label { color: var(--color-primary-light); text-transform: uppercase; }\n.rebound-queue__player--active { color: white; border-color: oklch(0.65 0.28 340 / .5); background: oklch(0.65 0.28 340 / .16); }\n\n@keyframes game-fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n@keyframes tactical-alert-in { from { opacity: 0; transform: translate(-50%, -.8rem) scale(.92); } to { opacity: 1; transform: translateX(-50%) scale(1); } }\n\n@media (min-width: 64rem) {\n  :host { overflow: clip; }\n  .rebound-queue {\n    position: absolute;\n    z-index: 19;\n    top: 6.9rem;\n    left: 50%;\n    width: min(90%, 42rem);\n    margin: 0;\n    transform: translateX(-50%);\n  }\n  .tactical-announcement { top: 3.4rem; }\n}\n\n@media (min-width: 106.25rem) and (min-height: 53.125rem) {\n  .game-shell { width: min(100%, 108.75rem); }\n}\n\n.result-icon svg {\n  width: 4.5rem;\n  height: 4.5rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 2.2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.game-header::after {\n  content: '';\n  position: absolute;\n  right: 12%;\n  bottom: 0;\n  left: 12%;\n  height: 0.0625rem;\n  background: linear-gradient(90deg, transparent, rgb(255 255 255 / 0.14), transparent);\n}\n\n.board-area { perspective: 75rem; }\n.score-area, .dashboard-area { position: relative; z-index: 2; }\n.score-area::before, .dashboard-area::before { content: ''; position: absolute; z-index: -1; inset: 8% -8%; border-radius: 50%; background: radial-gradient(ellipse, rgb(123 44 255 / .14), transparent 68%); filter: blur(1.5rem); pointer-events: none; }\n.mobile-panel-nav, .mobile-categories-backdrop { display: none; }\n\n@keyframes shell-aura { from { transform: translateX(-50%) scale(.94); opacity: .32; } to { transform: translateX(-50%) scale(1.08); opacity: .56; } }\n\n@media (max-width: 63.9375rem) {\n  :host { overflow: visible; touch-action: pan-y; }\n  /* On mobile the game is a continuous document.  Keeping the desktop\n     flex-grow sizing here was reserving a viewport-height block after the\n     content, which produced an empty tail at the end of the page. */\n  .game-shell { min-height: 0; padding-bottom: calc(5.25rem + env(safe-area-inset-bottom)); }\n  .game-shell > main { flex: 0 0 auto; min-height: auto; z-index: auto; }\n  .score-area.mobile-panel-hidden { display: none !important; }\n  .game-header { position: sticky; top: max(.35rem, env(safe-area-inset-top)); z-index: 40; width: fit-content; max-width: calc(100% - 1rem); margin-inline: auto; padding: .25rem .45rem; border: .0625rem solid rgb(191 137 255 / .28); border-radius: 1rem; background: rgb(8 7 24 / .86); box-shadow: 0 .5rem 1.5rem rgb(0 0 0 / .25); backdrop-filter: blur(.75rem); }\n  .tactical-announcement, .rebound-queue { z-index: 50; }\n  #mobile-board, #mobile-categories, #mobile-tactics, #mobile-score { scroll-margin-top: 4.75rem; scroll-margin-bottom: 5.5rem; }\n  #mobile-tactics { display: none; }\n  #mobile-categories {\n    position: fixed;\n    z-index: 55;\n    top: max(.5rem, env(safe-area-inset-top));\n    right: 0;\n    bottom: calc(5.25rem + env(safe-area-inset-bottom));\n    width: min(24rem, calc(100vw - .75rem));\n    padding: 1rem .85rem;\n    overflow: hidden;\n    overscroll-behavior: contain;\n    border: .0625rem solid rgb(191 137 255 / .32);\n    border-right: 0;\n    border-radius: 1.25rem 0 0 1.25rem;\n    background: linear-gradient(145deg, rgb(20 14 48 / .98), rgb(5 7 23 / .98));\n    box-shadow: -1rem 0 2.5rem rgb(0 0 0 / .42), inset 0 .0625rem 0 rgb(255 255 255 / .1);\n    transform: translateX(calc(100% + 1rem));\n    transition: transform 220ms ease-out;\n    pointer-events: none;\n  }\n  #mobile-categories.is-mobile-open { transform: translateX(0); pointer-events: auto; }\n  #mobile-categories > * { min-width: 0; max-width: 100%; }\n  .mobile-categories-backdrop {\n    position: fixed;\n    z-index: 35;\n    inset: 0;\n    display: block;\n    border: 0;\n    background: rgb(2 2 12 / .5);\n    backdrop-filter: blur(.15rem);\n  }\n  .mobile-panel-nav { position: fixed; z-index: 45; right: max(.55rem, env(safe-area-inset-right)); bottom: max(.55rem, env(safe-area-inset-bottom)); left: max(.55rem, env(safe-area-inset-left)); display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: .35rem; padding: .4rem; border: .0625rem solid rgb(191 137 255 / .3); border-radius: 1.15rem; background: rgb(10 8 28 / .92); box-shadow: 0 .8rem 2rem rgb(0 0 0 / .45), inset 0 .0625rem 0 rgb(255 255 255 / .1); backdrop-filter: blur(1rem); }\n  .mobile-panel-nav button { display: flex; min-height: 3.1rem; flex-direction: column; align-items: center; justify-content: center; gap: .1rem; border: 0; border-radius: .8rem; color: rgb(255 255 255 / .62); background: transparent; font-size: .62rem; font-weight: 850; letter-spacing: .035em; line-height: 1.1; }\n  .mobile-panel-nav button > span:first-child { font-size: 1.05rem; line-height: 1; }\n  .mobile-panel-nav button.is-active { color: white; background: linear-gradient(135deg, rgb(123 44 255 / .48), rgb(255 25 200 / .3)); box-shadow: inset 0 0 0 .0625rem rgb(255 255 255 / .15), 0 .25rem .75rem rgb(123 44 255 / .25); }\n  .mobile-panel-nav .mobile-tactical-action { color: white; }\n  .mobile-panel-nav .mobile-tactical-action--zwap { background: linear-gradient(135deg, rgb(234 88 12 / .8), rgb(251 146 60 / .42)); box-shadow: inset 0 0 0 .0625rem rgb(255 219 174 / .3); }\n  .mobile-panel-nav .mobile-tactical-action--bezzer { background: linear-gradient(135deg, rgb(109 40 217 / .82), rgb(236 72 153 / .4)); box-shadow: inset 0 0 0 .0625rem rgb(233 213 255 / .28); }\n  .mobile-panel-nav .mobile-tactical-action:disabled { color: rgb(255 255 255 / .35); background: rgb(255 255 255 / .05); box-shadow: none; opacity: .72; }\n  .mobile-panel-nav button:focus-visible { outline: .125rem solid var(--color-accent); outline-offset: .125rem; }\n  .score-area { height: 10.5rem; }\n}\n\n@media (max-width: 40rem) {\n  .score-area { height: 9rem; }\n  .dashboard-area { padding-bottom: 0; }\n  .game-shell::after, .score-area::before, .dashboard-area::before { display: none; }\n  .game-shell { gap: .65rem; padding-inline: 0; }\n  .board-area { min-height: 16rem; }\n  .turn-prep-card { width: min(94%, 24rem); padding: 1rem; }\n  .tactical-announcement { top: 3.1rem; }\n}\n.board-area { position: relative; }\n\n.golden-result-overlay {\n  position: fixed;\n  z-index: 60;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n  background: radial-gradient(circle at 50% 45%, rgb(246 196 83 / .18), transparent 38%), rgb(2 2 9 / .82);\n  backdrop-filter: blur(1.1rem);\n  animation: game-fade-in .3s ease-out both;\n}\n\n.golden-result-card {\n  position: relative;\n  width: min(100%, 34rem);\n  padding: clamp(2rem, 7vw, 4rem);\n  overflow: hidden;\n  border: .125rem solid rgb(255 225 132 / .72);\n  border-radius: 2.4rem;\n  color: #fff8d8;\n  background: linear-gradient(150deg, rgb(65 42 8 / .98), rgb(12 9 20 / .98) 62%, rgb(49 29 4 / .98));\n  box-shadow: 0 0 4rem rgb(246 196 83 / .3), 0 2rem 5rem rgb(0 0 0 / .65), inset 0 .0625rem 0 rgb(255 255 255 / .2);\n  text-align: center;\n  animation: bounce-in .45s cubic-bezier(.2,.9,.25,1.15) both;\n}\n\n.golden-result-rays {\n  position: absolute;\n  inset: -70%;\n  opacity: .14;\n  background: repeating-conic-gradient(from 0deg, #f6c453 0 8deg, transparent 8deg 18deg);\n  animation: golden-rays 20s linear infinite;\n}\n\n.golden-result-crown {\n  position: relative;\n  display: grid;\n  width: 6rem;\n  height: 6rem;\n  margin: 0 auto 1.2rem;\n  place-items: center;\n  border: .125rem solid #fff0ad;\n  border-radius: 50%;\n  color: #432700;\n  background: linear-gradient(145deg, #fff8c8, #f6c453 58%, #ca7d08);\n  box-shadow: 0 0 2.5rem rgb(246 196 83 / .52);\n  font-size: 3rem;\n}\n\n.golden-result-kicker {\n  position: relative;\n  display: block;\n  margin-bottom: .55rem;\n  color: rgb(255 231 150 / .7);\n  font-size: .72rem;\n  font-weight: 900;\n  letter-spacing: .24em;\n  text-transform: uppercase;\n}\n\n.golden-result-card h2 {\n  position: relative;\n  margin: 0;\n  font-family: var(--font-display);\n  font-size: clamp(1.75rem, 6vw, 2.75rem);\n  font-weight: 950;\n  line-height: 1.08;\n}\n\n.golden-result-points {\n  position: relative;\n  margin: 1rem 0 1.4rem;\n  color: #f6c453;\n  font-size: 2rem;\n  font-weight: 950;\n  text-shadow: 0 0 1.25rem rgb(246 196 83 / .38);\n}\n\n.golden-result-empty {\n  position: relative;\n  margin: 1rem 0 1.4rem;\n  color: rgb(255 248 218 / .68);\n}\n\n.golden-result-answer {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: .35rem;\n  padding: 1rem;\n  border: .0625rem solid rgb(246 196 83 / .25);\n  border-radius: 1rem;\n  background: rgb(246 196 83 / .08);\n}\n\n.golden-result-answer span {\n  color: rgb(255 234 164 / .62);\n  font-size: .65rem;\n  font-weight: 850;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n\n.golden-result-answer strong { color: white; font-size: 1.2rem; }\n\n@keyframes golden-rays { to { transform: rotate(360deg); } }\n\n@media (prefers-reduced-motion: reduce) {\n  .golden-result-rays { animation: none; }\n}\n\n.volume-control { position: relative; display: inline-flex; }\n.volume-button { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; min-height: 2.35rem; padding: .55rem .82rem; color: rgb(255 255 255 / .9); border: 0.0625rem solid rgb(255 255 255 / .15); border-radius: 62.4375rem; background: rgb(10 8 24 / .72); box-shadow: inset 0 0.0625rem 0 rgb(255 255 255 / .09), 0 0.5rem 1.375rem rgb(0 0 0 / .2); backdrop-filter: blur(0.75rem); cursor: pointer; font-size: .72rem; font-weight: 850; letter-spacing: .06em; text-transform: uppercase; transition: transform 180ms ease, border-color 180ms ease, background 180ms ease; }\n.volume-button:hover, .volume-control:focus-within .volume-button { border-color: var(--color-primary-light); background: rgb(94 49 174 / .22); transform: translateY(-0.125rem); }\n.volume-control.is-muted .volume-button { color: rgb(255 255 255 / .58); }\n.volume-button svg { width: 1.25rem; height: 1.25rem; fill: none; stroke: currentColor; stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }\n.volume-popover { position: absolute; right: 0; bottom: calc(100% + .65rem); display: flex; width: 13rem; align-items: center; gap: .7rem; padding: .72rem .85rem; border: 0.0625rem solid rgb(191 137 255 / .28); border-radius: .85rem; background: linear-gradient(145deg, rgb(24 17 53 / .97), rgb(5 7 23 / .97)); box-shadow: 0 1rem 2.375rem rgb(0 0 0 / .48), 0 0 1.5rem rgb(123 44 255 / .12), inset 0 0.0625rem 0 rgb(255 255 255 / .1); opacity: 0; pointer-events: none; transform: translateY(.35rem) scale(.97); transform-origin: bottom right; transition: opacity 150ms ease 280ms, transform 150ms ease 280ms; }\n.volume-popover::after { content: ''; position: absolute; right: 0; bottom: -.8rem; left: 0; height: .85rem; }\n.volume-control:hover .volume-popover, .volume-control:focus-within .volume-popover { opacity: 1; pointer-events: auto; transform: none; transition-delay: 0ms; }\n.volume-popover__value { width: 2.3rem; flex: 0 0 auto; color: rgb(255 255 255 / .68); font-size: .65rem; font-weight: 850; font-variant-numeric: tabular-nums; }\n.volume-popover input { width: 100%; height: 1.1rem; accent-color: #b45cff; cursor: pointer; }\n\n@media (max-width: 40rem) {\n  .game-controls { padding: .15rem 0 .7rem; }\n  .volume-popover { right: -1.5rem; width: 11.5rem; }\n}\n\n.turn-prep-card {\n  position: absolute;\n  z-index: 5;\n  width: min(88%, 26rem);\n  padding: 1.25rem;\n  border: 0.0625rem solid rgb(255 255 255 / .18);\n  border-radius: 1.5rem;\n  text-align: center;\n  box-shadow: 0 1.125rem 3.4375rem rgb(0 0 0 / .42);\n}\n\n.turn-prep-kicker { display: block; color: var(--color-accent); font-size: .72rem; font-weight: 900; letter-spacing: .14em; text-transform: uppercase; }\n.turn-prep-category { display: flex; align-items: center; justify-content: center; gap: .8rem; margin: .8rem 0; color: white; }\n.turn-prep-category div { display: flex; flex-direction: column; text-align: left; }\n.turn-prep-category span:not(.turn-prep-icon) { color: rgb(255 255 255 / .65); font-size: .85rem; }\n.turn-prep-icon { display: block; flex: 0 0 auto; }\n.turn-prep-card p { margin: 0; color: rgb(255 255 255 / .68); font-size: .88rem; }\n.turn-prep-queue { display: flex; flex-wrap: wrap; justify-content: center; gap: .35rem; margin-top: .85rem; }\n.turn-prep-queue span, .turn-prep-queue b { padding: .26rem .5rem; border: 0.0625rem solid rgb(255 255 255 / .13); border-radius: 62.4375rem; background: rgb(255 255 255 / .06); color: rgb(255 255 255 / .76); font-size: .68rem; }\n.turn-prep-queue span { color: var(--color-primary-light); font-weight: 900; text-transform: uppercase; letter-spacing: .06em; }\n.turn-prep-button { display: inline-flex; align-items: center; gap: .35rem; min-height: 2.7rem; margin-top: 1rem; padding: .55rem 1rem .55rem 1.15rem; color: white; border: 0.0625rem solid oklch(0.72 0.20 285 / .55); border-radius: 62.4375rem; background: linear-gradient(135deg, oklch(0.58 0.28 290 / .32), oklch(0.65 0.28 340 / .22)); box-shadow: 0 0.5rem 1.375rem oklch(0.58 0.28 290 / .18), inset 0 0.0625rem 0 rgb(255 255 255 / .15); font-size: .84rem; font-weight: 800; letter-spacing: .03em; cursor: pointer; transition: transform 180ms ease, border-color 180ms ease, background 180ms ease; }\n.turn-prep-button:hover { border-color: var(--color-primary-light); background: linear-gradient(135deg, oklch(0.58 0.28 290 / .48), oklch(0.65 0.28 340 / .38)); transform: translateY(-0.0625rem); }\n.turn-prep-button svg { width: 1rem; height: 1rem; fill: none; stroke: currentColor; stroke-width: 2.3; stroke-linecap: round; stroke-linejoin: round; }\n\n.opponents-categories { padding: .75rem 1rem; border: 0.0625rem solid rgb(188 133 255 / .24); border-radius: 1rem; background: linear-gradient(115deg, rgb(18 14 45 / .74), rgb(4 7 22 / .74)); box-shadow: inset 0 0.0625rem 0 rgb(255 255 255 / .07), 0 0.75rem 1.75rem rgb(0 0 0 / .18); }\n.opponents-categories summary { cursor: pointer; color: rgb(255 255 255 / .75); font-size: .8rem; font-weight: 800; }\n.opponent-category-row { display: flex; align-items: center; gap: .45rem; padding-top: .65rem; }\n.opponent-category-row strong { margin-right: auto; overflow: hidden; color: white; font-size: .78rem; font-weight: 800; text-overflow: ellipsis; white-space: nowrap; }\n.opponent-category-icon { position: relative; display: inline-flex; flex: 0 0 auto; outline: none; transition: opacity 180ms ease, filter 180ms ease; }\n.opponent-category-icon.is-played > app-category-badge { opacity: .3; filter: grayscale(1) saturate(.25); }\n.opponent-category-tooltip { position: absolute; z-index: 30; bottom: calc(100% + .45rem); left: 50%; width: max-content; max-width: 11rem; padding: .35rem .55rem; border: 0.0625rem solid rgb(255 255 255 / .14); border-radius: .45rem; background: rgb(12 9 24 / .96); box-shadow: 0 0.5rem 1.25rem rgb(0 0 0 / .35); color: white; font-size: .67rem; font-weight: 700; line-height: 1.2; opacity: 0; pointer-events: none; transform: translate(-50%, .2rem); transition: opacity 140ms ease, transform 140ms ease; white-space: nowrap; }\n.opponent-category-icon:hover .opponent-category-tooltip,\n.opponent-category-icon:focus-visible .opponent-category-tooltip { opacity: 1; transform: translate(-50%, 0); }\n.opponent-category-icon:focus-visible { border-radius: .75rem; outline: 0.125rem solid var(--color-accent); outline-offset: 0.125rem; }\n\n.zwap-overlay { position: fixed; z-index: 60; inset: 0; display: grid; place-items: center; padding: 1rem; background: rgb(3 2 10 / .72); backdrop-filter: blur(0.625rem); }\n.zwap-dialog { width: min(100%, 38rem); max-height: calc(100dvh - 2rem); display: flex; flex-direction: column; border: 0.0625rem solid rgb(249 115 22 / .42); border-radius: 1.5rem; overflow: hidden; box-shadow: 0 1.625rem 4.375rem rgb(0 0 0 / .58), 0 0 2.375rem rgb(249 115 22 / .12); }\n.zwap-dialog__header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.2rem; border-bottom: 0.0625rem solid rgb(255 255 255 / .1); }\n.zwap-dialog__eyebrow { display: block; color: rgb(251 146 60); font-size: .67rem; font-weight: 900; letter-spacing: .13em; text-transform: uppercase; }\n.zwap-dialog h2 { margin: .1rem 0 0; color: white; font-size: 1.45rem; font-weight: 900; }\n.zwap-close { width: 2.2rem; height: 2.2rem; border: 0.0625rem solid rgb(255 255 255 / .12); border-radius: .7rem; color: rgb(255 255 255 / .72); font-size: 1.55rem; line-height: 1; cursor: pointer; }\n.zwap-close:hover { color: white; background: rgb(255 255 255 / .08); }\n.zwap-dialog__content { display: flex; flex-direction: column; gap: 1rem; padding: 1.15rem 1.2rem; overflow-y: auto; }\n.zwap-dialog h3 { margin: 0 0 .55rem; color: rgb(255 255 255 / .72); font-size: .75rem; font-weight: 800; letter-spacing: .04em; }\n.zwap-categories, .zwap-players { display: flex; flex-wrap: wrap; gap: .55rem; }\n.zwap-category-choice, .zwap-player-choice { display: inline-flex; align-items: center; gap: .45rem; min-height: 2.7rem; padding: .35rem .5rem; border: 0.0625rem solid rgb(255 255 255 / .12); border-radius: .85rem; color: rgb(255 255 255 / .8); background: rgb(0 0 0 / .16); font-size: .73rem; font-weight: 800; cursor: pointer; transition: border-color 160ms ease, background 160ms ease, transform 160ms ease; }\n.zwap-category-choice { position: relative; }\n.zwap-category-tooltip { position: absolute; z-index: 10; bottom: calc(100% + .45rem); left: 50%; width: max-content; max-width: 12rem; padding: .35rem .55rem; border: .0625rem solid rgb(255 255 255 / .14); border-radius: .45rem; background: rgb(12 9 24 / .97); box-shadow: 0 .5rem 1.25rem rgb(0 0 0 / .35); color: white; font-size: .67rem; line-height: 1.2; opacity: 0; pointer-events: none; transform: translate(-50%, .2rem); transition: opacity 140ms ease, transform 140ms ease; white-space: nowrap; }\n.zwap-category-choice:hover .zwap-category-tooltip, .zwap-category-choice:focus-visible .zwap-category-tooltip { opacity: 1; transform: translate(-50%, 0); }\n.zwap-category-choice:hover:not(:disabled), .zwap-player-choice:hover:not(:disabled) { border-color: rgb(251 146 60 / .65); background: rgb(249 115 22 / .12); transform: translateY(-0.0625rem); }\n.zwap-category-choice.is-selected, .zwap-player-choice.is-selected { border-color: rgb(251 146 60 / .9); background: rgb(249 115 22 / .2); box-shadow: 0 0 0 0.125rem rgb(249 115 22 / .15); }\n.zwap-category-choice:disabled, .zwap-player-choice:disabled { opacity: .32; cursor: not-allowed; }\n.zwap-category-choice span { min-width: 2.4rem; }\n.zwap-player-dot { width: .55rem; height: .55rem; border-radius: 62.4375rem; }\n.zwap-dialog__actions { display: flex; justify-content: flex-end; gap: .65rem; padding: 1rem 1.2rem; border-top: 0.0625rem solid rgb(255 255 255 / .1); }\n.zwap-cancel { padding: .65rem .9rem; border: 0.0625rem solid rgb(255 255 255 / .14); border-radius: .75rem; color: rgb(255 255 255 / .72); font-size: .82rem; font-weight: 800; cursor: pointer; }\n.zwap-confirm { min-height: 2.7rem; padding: .55rem 1rem; border-radius: .75rem; font-size: .82rem; }\n\n@media (prefers-reduced-motion: reduce) { .game-shell::before { animation: none; } }\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GameComponent, { className: "GameComponent", filePath: "src/app/pages/game/game.component.ts", lineNumber: 38 }); })();
