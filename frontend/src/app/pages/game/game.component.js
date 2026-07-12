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
function GameComponent_Conditional_5_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Responde: ", ctx_r0.currentAnswerPlayerName);
} }
function GameComponent_Conditional_5_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const playerName_r2 = ctx.$implicit;
    const ɵ$index_21_r3 = ctx.$index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r0.isReboundTurn ? "Despu\u00E9s: " : ɵ$index_21_r3 + 1 + ". ", "", playerName_r2);
} }
function GameComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "span", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, GameComponent_Conditional_5_Conditional_3_Template, 2, 1, "span", 22);
    i0.ɵɵrepeaterCreate(4, GameComponent_Conditional_5_For_5_Template, 2, 2, "span", 23, i0.ɵɵrepeaterTrackByIdentity);
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
function GameComponent_Conditional_11_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelement(1, "app-category-badge", 30);
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
    const ɵ$index_63_r7 = ctx.$index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ɵ$index_63_r7 + 1, ". ", playerName_r6);
} }
function GameComponent_Conditional_11_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "span");
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
    i0.ɵɵelementStart(0, "div", 11)(1, "span", 24);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, GameComponent_Conditional_11_Conditional_3_Template, 7, 7, "div", 25);
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Todos deben confirmar antes de mostrar la pregunta. Mientras tanto puedes usar tus fichas.");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, GameComponent_Conditional_11_Conditional_6_Template, 5, 0, "div", 26);
    i0.ɵɵelementStart(7, "button", 27);
    i0.ɵɵlistener("click", function GameComponent_Conditional_11_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.skipPreparation()); });
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(10, "svg", 28);
    i0.ɵɵelement(11, "path", 29);
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
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵelement(1, "app-category-badge", 34);
    i0.ɵɵelementStart(2, "span", 35);
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
    i0.ɵɵelementStart(0, "div", 31)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, GameComponent_Conditional_15_For_4_Conditional_0_For_4_Template, 4, 9, "span", 32, i0.ɵɵrepeaterTrackByIdentity);
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
    i0.ɵɵconditionalCreate(0, GameComponent_Conditional_15_For_4_Conditional_0_Template, 5, 3, "div", 31);
} if (rf & 2) {
    const player_r9 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(player_r9.playerId !== ctx_r0.playerId() ? 0 : -1);
} }
function GameComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "details", 15)(1, "summary");
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
    i0.ɵɵelementStart(0, "app-question-modal", 36);
    i0.ɵɵlistener("onAnswer", function GameComponent_Conditional_18_Template_app_question_modal_onAnswer_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleAnswer($event)); })("onBezzerwizzer", function GameComponent_Conditional_18_Template_app_question_modal_onBezzerwizzer_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onBezzerwizzerClick()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("question", ctx_r0.gameState.currentQuestion())("timer", ctx_r0.gameState.timer())("timerTotal", ctx_r0.gameState.timerTotal())("isAnswered", !ctx_r0.canAnswerQuestion)("canChangeAnswer", ctx_r0.canChangePreparedAnswer)("selectionFailed", ctx_r0.isMySelectionIncorrect)("canBezzerwizzer", ctx_r0.canChallengeWithBezzerwizzer)("answeringPlayerName", ctx_r0.currentAnswerPlayerName)("isReboundTurn", ctx_r0.isReboundTurn)("reboundQueue", ctx_r0.reboundQueueNames);
} }
function GameComponent_Conditional_19_Conditional_10_For_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function GameComponent_Conditional_19_Conditional_10_For_6_Template_button_click_0_listener() { const item_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.selectZwapSource(item_r13.index)); });
    i0.ɵɵelement(1, "app-category-badge", 34);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("is-selected", ctx_r0.zwapSourceIndex === item_r13.index);
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", item_r13.slot.category.name)("icon", item_r13.slot.category.icon)("color", item_r13.slot.category.color)("compact", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r13.slot.pointValue, " pts");
} }
function GameComponent_Conditional_19_Conditional_10_Conditional_7_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function GameComponent_Conditional_19_Conditional_10_Conditional_7_For_5_Template_button_click_0_listener() { const player_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.selectZwapTargetPlayer(player_r15.playerId)); });
    i0.ɵɵelement(1, "span", 52);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const player_r15 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("is-selected", ctx_r0.zwapTargetPlayerId === player_r15.playerId);
    i0.ɵɵproperty("disabled", ctx_r0.availableZwapSlots(player_r15).length === 0);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-color", player_r15.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", player_r15.playerId === ctx_r0.playerId() ? "Reordenar mis categor\u00EDas" : player_r15.username, " ");
} }
function GameComponent_Conditional_19_Conditional_10_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "h3");
    i0.ɵɵtext(2, "2. Elige el jugador destino");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 49);
    i0.ɵɵrepeaterCreate(4, GameComponent_Conditional_19_Conditional_10_Conditional_7_For_5_Template, 3, 6, "button", 50, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r0.gameState.players());
} }
function GameComponent_Conditional_19_Conditional_10_Conditional_8_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 54);
    i0.ɵɵlistener("click", function GameComponent_Conditional_19_Conditional_10_Conditional_8_For_5_Template_button_click_0_listener() { const item_r17 = i0.ɵɵrestoreView(_r16).$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.zwapTargetSlotIndex = item_r17.index); });
    i0.ɵɵelement(1, "app-category-badge", 34);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const target_r18 = i0.ɵɵnextContext();
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("is-selected", ctx_r0.zwapTargetSlotIndex === item_r17.index);
    i0.ɵɵproperty("disabled", target_r18.playerId === ctx_r0.playerId() && item_r17.index === ctx_r0.zwapSourceIndex);
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", item_r17.slot.category.name)("icon", item_r17.slot.category.icon)("color", item_r17.slot.category.color)("compact", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r17.slot.pointValue, " pts");
} }
function GameComponent_Conditional_19_Conditional_10_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "h3");
    i0.ɵɵtext(2, "3. Elige la categor\u00EDa destino");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 46);
    i0.ɵɵrepeaterCreate(4, GameComponent_Conditional_19_Conditional_10_Conditional_8_For_5_Template, 4, 8, "button", 53, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r0.availableZwapSlots(ctx));
} }
function GameComponent_Conditional_19_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "section")(2, "h3");
    i0.ɵɵtext(3, "1. Elige una de tus categor\u00EDas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 46);
    i0.ɵɵrepeaterCreate(5, GameComponent_Conditional_19_Conditional_10_For_6_Template, 4, 7, "button", 47, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, GameComponent_Conditional_19_Conditional_10_Conditional_7_Template, 6, 0, "section");
    i0.ɵɵconditionalCreate(8, GameComponent_Conditional_19_Conditional_10_Conditional_8_Template, 6, 0, "section");
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
function GameComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "section", 37)(2, "header", 38)(3, "div")(4, "span", 39);
    i0.ɵɵtext(5, "Ficha t\u00E1ctica");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2", 40);
    i0.ɵɵtext(7, "Usar ZWAP");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 41);
    i0.ɵɵlistener("click", function GameComponent_Conditional_19_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showZwapSelector = false); });
    i0.ɵɵtext(9, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(10, GameComponent_Conditional_19_Conditional_10_Template, 9, 2, "div", 42);
    i0.ɵɵelementStart(11, "footer", 43)(12, "button", 44);
    i0.ɵɵlistener("click", function GameComponent_Conditional_19_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showZwapSelector = false); });
    i0.ɵɵtext(13, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 45);
    i0.ɵɵlistener("click", function GameComponent_Conditional_19_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.confirmZwap()); });
    i0.ɵɵtext(15, "Confirmar intercambio");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵconditional((tmp_1_0 = ctx_r0.getMyPlayer()) ? 10 : -1, tmp_1_0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r0.zwapSourceIndex === null || !ctx_r0.zwapTargetPlayerId || ctx_r0.zwapTargetSlotIndex === null);
} }
function GameComponent_Conditional_20_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 28);
    i0.ɵɵelement(1, "path", 60);
    i0.ɵɵelementEnd();
} }
function GameComponent_Conditional_20_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 28);
    i0.ɵɵelement(1, "path", 61);
    i0.ɵɵelementEnd();
} }
function GameComponent_Conditional_20_Conditional_9_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 64);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const bz_r19 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.getPlayerName(bz_r19.challengerId), ":");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", bz_r19.correct ? "text-correct" : "text-incorrect");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", bz_r19.correct ? "+" + bz_r19.pointsGained : bz_r19.pointsGained, " pts ");
} }
function GameComponent_Conditional_20_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59)(1, "h4", 62);
    i0.ɵɵtext(2, " Resultados Bezzerwizzer ");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, GameComponent_Conditional_20_Conditional_9_For_4_Template, 5, 3, "div", 63, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.bezzerwizzerResults);
} }
function GameComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 55)(2, "div", 56);
    i0.ɵɵconditionalCreate(3, GameComponent_Conditional_20_Conditional_3_Template, 2, 0, ":svg:svg", 28)(4, GameComponent_Conditional_20_Conditional_4_Template, 2, 0, ":svg:svg", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2", 57);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 58);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(9, GameComponent_Conditional_20_Conditional_9_Template, 5, 0, "div", 59);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r0.lastResultCorrect ? "border-correct/50 glow-correct" : "border-incorrect/50 glow-incorrect");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r0.lastResultCorrect ? "bg-correct text-white" : "bg-incorrect text-white");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.lastResultCorrect ? 3 : 4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.lastResultCorrect ? "\u00A1CORRECTO!" : "INCORRECTO", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.lastResultCorrect ? "+" + ctx_r0.lastResultPoints + " puntos" : "La respuesta era: " + ctx_r0.lastResultAnswerText, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.bezzerwizzerResults.length > 0 ? 9 : -1);
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
    bezzerwizzerResults = [];
    showZwapSelector = false;
    zwapSourceIndex = null;
    zwapTargetPlayerId = null;
    zwapTargetSlotIndex = null;
    resultOverlayTimeout;
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
                this.router.navigate(['/results', this.gameState.roomCode()]);
            }
            if (phase === 'BEZZERWIZZER_WINDOW') {
                if (this.gameState.isMyTurn()) {
                    this.audioService.playNotification();
                }
            }
            if (phase === 'ANSWERING') {
                this.hasAnswered = false;
            }
        });
        effect((onCleanup) => {
            this.gameState.turnSequence();
            this.hasAnswered = false;
            this.challengedTurn = -1;
            this.lastResultPlayerId = '';
            this.lastResultCorrect = false;
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
            this.showAnswerResult(result);
        });
        effect(() => {
            const isInteractiveRebound = this.gameState.gamePhase() === 'ANSWERING'
                && this.gameState.currentAnswerPlayerId() !== this.gameState.currentTurnPlayerId();
            if (isInteractiveRebound)
                this.dismissResultOverlay();
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
        return phase === 'ANSWERING';
    }
    get currentTurnPlayerName() {
        const id = this.gameState.currentTurnPlayerId();
        const p = this.gameState.players().find(x => x.playerId === id);
        return p ? p.username : '';
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
        return this.isReboundTurn || this.reboundQueueNames.length > 0;
    }
    get phaseText() {
        switch (this.gameState.gamePhase()) {
            case 'CATEGORY_ASSIGNMENT': return 'ASIGNANDO PUNTOS';
            case 'PLAYING': return this.gameState.isMyTurn() ? 'PREPARA TU JUGADA' : 'PREPARANDO JUGADA';
            case 'BEZZERWIZZER_WINDOW': return '¡BEZZERWIZZER!';
            case 'ANSWERING': return 'RESPONDIENDO';
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
        this.showZwapSelector = true;
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
        this.snackbar.show('ZWAP aplicado', 'info');
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
        this.lastResultAnswerText = result.correctAnswer || 'Sin respuesta';
        this.bezzerwizzerResults = result.bezzerwizzerResults ?? [];
        this.showResultOverlay = true;
        this.resultOverlayTimeout = window.setTimeout(() => this.showResultOverlay = false, 1600);
        result.correct ? this.audioService.playCorrect() : this.audioService.playIncorrect();
    }
    dismissResultOverlay() {
        window.clearTimeout(this.resultOverlayTimeout);
        this.showResultOverlay = false;
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GameComponent, selectors: [["app-game"]], decls: 21, vars: 26, consts: [[1, "game-shell", "flex", "flex-col", "min-h-[calc(100dvh-1.5rem)]", "sm:min-h-[calc(100dvh-2.5rem)]", "lg:h-[calc(100dvh-3rem)]", "lg:min-h-0", "lg:max-h-[980px]", "p-1", "sm:p-2", "gap-3", "lg:gap-4", "w-full", "max-w-[1500px]", "mx-auto"], [1, "game-header", "flex-none", "flex", "justify-center", "items-center", "relative", "z-20", "lg:absolute", "lg:top-0", "lg:left-1/2", "lg:-translate-x-1/2", "lg:w-max"], [3, "playerName", "playerColor", "isMyTurn", "phaseText"], [1, "game-help"], [3, "compact"], ["role", "status", "aria-live", "polite", 1, "rebound-queue"], [1, "flex-grow", "grid", "grid-cols-1", "lg:grid-cols-[minmax(210px,260px)_minmax(440px,1fr)_minmax(250px,300px)]", "gap-3", "lg:gap-4", "min-h-0", "relative", "z-10"], [1, "score-area", "flex", "lg:flex-col", "w-full", "h-auto", "lg:h-full", "order-2", "lg:order-1", "min-h-0"], [3, "players", "currentTurnPlayerId", "currentRound"], [1, "board-area", "flex", "items-center", "justify-center", "min-h-[320px]", "lg:min-h-0", "order-1", "lg:order-2", "p-1", "lg:pt-16"], [3, "players", "currentTurnPlayerId"], [1, "turn-prep-card", "glass-strong"], [1, "dashboard-area", "w-full", "flex", "flex-col", "gap-3", "h-auto", "lg:h-full", "order-3", "min-h-0"], [1, "flex-grow", "min-h-0"], [3, "assignmentChanged", "submitAssignment", "slots", "isAssigning", "currentSlotIndex"], [1, "opponents-categories", "glass"], [1, "flex-none", "min-h-40", "lg:h-[13rem]"], [3, "zwapClick", "bezzerwizzerClick", "skipPreparationClick", "zwapsLeft", "bezzerwizzersLeft", "canZwap", "canBezzerwizzer", "canSkipPreparation", "skipVotes", "playerCount"], [3, "question", "timer", "timerTotal", "isAnswered", "canChangeAnswer", "selectionFailed", "canBezzerwizzer", "answeringPlayerName", "isReboundTurn", "reboundQueue"], ["role", "presentation", 1, "zwap-overlay"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/60", "backdrop-blur-md", "animate-fade-in"], [1, "rebound-queue__label"], [1, "rebound-queue__player", "rebound-queue__player--active"], [1, "rebound-queue__player"], [1, "turn-prep-kicker"], [1, "turn-prep-category"], ["role", "status", 1, "turn-prep-queue"], ["type", "button", 1, "turn-prep-button", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "m9 18 6-6-6-6"], [1, "turn-prep-icon", 3, "name", "icon", "color", "compact"], [1, "opponent-category-row"], ["tabindex", "0", 1, "opponent-category-icon", 3, "is-played"], ["tabindex", "0", 1, "opponent-category-icon"], [3, "name", "icon", "color", "compact"], ["role", "tooltip", 1, "opponent-category-tooltip"], [3, "onAnswer", "onBezzerwizzer", "question", "timer", "timerTotal", "isAnswered", "canChangeAnswer", "selectionFailed", "canBezzerwizzer", "answeringPlayerName", "isReboundTurn", "reboundQueue"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "zwap-title", 1, "zwap-dialog", "glass-strong"], [1, "zwap-dialog__header"], [1, "zwap-dialog__eyebrow"], ["id", "zwap-title"], ["type", "button", "aria-label", "Cerrar selector ZWAP", 1, "zwap-close", 3, "click"], [1, "zwap-dialog__content"], [1, "zwap-dialog__actions"], ["type", "button", 1, "zwap-cancel", 3, "click"], ["type", "button", 1, "btn-primary", "zwap-confirm", 3, "click", "disabled"], [1, "zwap-categories"], ["type", "button", 1, "zwap-category-choice", 3, "is-selected"], ["type", "button", 1, "zwap-category-choice", 3, "click"], [1, "zwap-players"], ["type", "button", 1, "zwap-player-choice", 3, "is-selected", "disabled"], ["type", "button", 1, "zwap-player-choice", 3, "click", "disabled"], [1, "zwap-player-dot"], ["type", "button", 1, "zwap-category-choice", 3, "is-selected", "disabled"], ["type", "button", 1, "zwap-category-choice", 3, "click", "disabled"], [1, "glass", "p-12", "rounded-[3rem]", "flex", "flex-col", "items-center", "animate-bounce-in", "max-w-md", "w-full", "text-center", 3, "ngClass"], [1, "result-icon", "w-28", "h-28", "rounded-full", "flex", "items-center", "justify-center", "mb-6", "shadow-2xl", 3, "ngClass"], [1, "text-4xl", "font-black", "font-display", "mb-2", "text-white"], [1, "text-xl", "text-text-muted", "font-medium", "mb-6"], [1, "w-full", "bg-surface-elevated/50", "p-4", "rounded-2xl", "mb-4", "text-left", "border", "border-border/50"], ["d", "m5 12.5 4.2 4L19 7"], ["d", "m7 7 10 10M17 7 7 17"], [1, "text-sm", "font-bold", "text-purple-400", "mb-2", "uppercase", "tracking-widest"], [1, "flex", "items-center", "gap-2", "text-sm", "text-white", "font-medium"], [3, "ngClass"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1);
            i0.ɵɵelement(2, "app-turn-indicator", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelement(4, "app-rules-help", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, GameComponent_Conditional_5_Template, 6, 2, "div", 5);
            i0.ɵɵelementStart(6, "main", 6)(7, "aside", 7);
            i0.ɵɵelement(8, "app-scoreboard", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "section", 9);
            i0.ɵɵelement(10, "app-board", 10);
            i0.ɵɵconditionalCreate(11, GameComponent_Conditional_11_Template, 12, 6, "div", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "aside", 12)(13, "div", 13)(14, "app-category-slots", 14);
            i0.ɵɵlistener("assignmentChanged", function GameComponent_Template_app_category_slots_assignmentChanged_14_listener($event) { return ctx.onAssignmentChanged($event); })("submitAssignment", function GameComponent_Template_app_category_slots_submitAssignment_14_listener() { return ctx.submitAssignment(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(15, GameComponent_Conditional_15_Template, 5, 0, "details", 15);
            i0.ɵɵelementStart(16, "div", 16)(17, "app-tactical-panel", 17);
            i0.ɵɵlistener("zwapClick", function GameComponent_Template_app_tactical_panel_zwapClick_17_listener() { return ctx.onZwapClick(); })("bezzerwizzerClick", function GameComponent_Template_app_tactical_panel_bezzerwizzerClick_17_listener() { return ctx.onBezzerwizzerClick(); })("skipPreparationClick", function GameComponent_Template_app_tactical_panel_skipPreparationClick_17_listener() { return ctx.skipPreparation(); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(18, GameComponent_Conditional_18_Template, 1, 10, "app-question-modal", 18);
            i0.ɵɵconditionalCreate(19, GameComponent_Conditional_19_Template, 16, 2, "div", 19);
            i0.ɵɵconditionalCreate(20, GameComponent_Conditional_20_Template, 10, 6, "div", 20);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("playerName", ctx.currentTurnPlayerName)("playerColor", ctx.currentTurnPlayerColor)("isMyTurn", ctx.gameState.isMyTurn())("phaseText", ctx.phaseText);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("compact", true);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.hasReboundStatus ? 5 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("players", ctx.gameState.sortedPlayers())("currentTurnPlayerId", ctx.gameState.currentTurnPlayerId())("currentRound", ctx.gameState.currentRound());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("players", ctx.gameState.players())("currentTurnPlayerId", ctx.gameState.currentTurnPlayerId());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.gameState.gamePhase() === "PLAYING" ? 11 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("slots", ctx.gameState.myCategories())("isAssigning", ctx.isAssigningCategories)("currentSlotIndex", ctx.currentSlotIndex);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.gameState.gamePhase() !== "CATEGORY_ASSIGNMENT" ? 15 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("zwapsLeft", ctx.gameState.myTacticalTiles().zwap)("bezzerwizzersLeft", ctx.gameState.myTacticalTiles().bezzerwizzer)("canZwap", ctx.gameState.canPlayZwap())("canBezzerwizzer", ctx.canChallengeWithBezzerwizzer)("canSkipPreparation", ctx.canSkipPreparation)("skipVotes", ctx.gameState.preparationSkipVotes().length)("playerCount", ctx.gameState.players().length);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showQuestionModal ? 18 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showZwapSelector ? 19 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showResultOverlay ? 20 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, BoardComponent,
            CategorySlotsComponent,
            QuestionModalComponent,
            ScoreboardComponent,
            TacticalPanelComponent,
            TurnIndicatorComponent,
            CategoryBadgeComponent,
            RulesHelpComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 0;\n}\n\n.game-shell[_ngcontent-%COMP%] { position: relative; isolation: isolate; animation: _ngcontent-%COMP%_game-fade-in .45s ease-out both; }\n.game-shell[_ngcontent-%COMP%]::before { content: ''; position: absolute; z-index: -1; width: min(72vw, 72rem); height: min(60vw, 48rem); top: 10%; left: 50%; border-radius: 50%; opacity: .45; transform: translateX(-50%); background: radial-gradient(circle, rgb(123 44 255 / .19), rgb(0 217 255 / .06) 39%, transparent 69%); filter: blur(30px); pointer-events: none; animation: _ngcontent-%COMP%_shell-aura 12s ease-in-out infinite alternate; }\n.game-help[_ngcontent-%COMP%] { position: absolute; z-index: 25; top: .35rem; right: .35rem; }\n\n.rebound-queue[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; justify-content: center; gap: .45rem; margin: -0.45rem 0 .1rem; }\n.rebound-queue__label[_ngcontent-%COMP%], .rebound-queue__player[_ngcontent-%COMP%] { padding: .3rem .6rem; border: 1px solid rgb(255 255 255 / .12); border-radius: 999px; background: rgb(10 7 24 / .66); color: rgb(255 255 255 / .65); font-size: .68rem; font-weight: 800; letter-spacing: .05em; }\n.rebound-queue__label[_ngcontent-%COMP%] { color: var(--color-primary-light); text-transform: uppercase; }\n.rebound-queue__player--active[_ngcontent-%COMP%] { color: white; border-color: oklch(0.65 0.28 340 / .5); background: oklch(0.65 0.28 340 / .16); }\n\n@keyframes _ngcontent-%COMP%_game-fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@media (min-width: 1024px) {\n  [_nghost-%COMP%] { overflow: clip; }\n}\n\n.result-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 4.5rem;\n  height: 4.5rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 2.2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.game-header[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  right: 12%;\n  bottom: 0;\n  left: 12%;\n  height: 1px;\n  background: linear-gradient(90deg, transparent, rgb(255 255 255 / 0.14), transparent);\n}\n\n.board-area[_ngcontent-%COMP%] { perspective: 1200px; }\n\n@keyframes _ngcontent-%COMP%_shell-aura { from { transform: translateX(-50%) scale(.94); opacity: .32; } to { transform: translateX(-50%) scale(1.08); opacity: .56; } }\n\n@media (max-width: 1023px) {\n  .score-area[_ngcontent-%COMP%] { height: 10.5rem; }\n}\n\n@media (max-width: 640px) {\n  .game-help[_ngcontent-%COMP%] { top: .1rem; right: .1rem; }\n  .score-area[_ngcontent-%COMP%] { height: 9rem; }\n  .dashboard-area[_ngcontent-%COMP%] { padding-bottom: max(0.5rem, env(safe-area-inset-bottom)); }\n}\n.board-area[_ngcontent-%COMP%] { position: relative; }\n\n.turn-prep-card[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  width: min(88%, 26rem);\n  padding: 1.25rem;\n  border: 1px solid rgb(255 255 255 / .18);\n  border-radius: 1.5rem;\n  text-align: center;\n  box-shadow: 0 18px 55px rgb(0 0 0 / .42);\n}\n\n.turn-prep-kicker[_ngcontent-%COMP%] { display: block; color: var(--color-accent); font-size: .72rem; font-weight: 900; letter-spacing: .14em; text-transform: uppercase; }\n.turn-prep-category[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: center; gap: .8rem; margin: .8rem 0; color: white; }\n.turn-prep-category[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; flex-direction: column; text-align: left; }\n.turn-prep-category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.turn-prep-icon) { color: rgb(255 255 255 / .65); font-size: .85rem; }\n.turn-prep-icon[_ngcontent-%COMP%] { display: block; flex: 0 0 auto; }\n.turn-prep-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: rgb(255 255 255 / .68); font-size: .88rem; }\n.turn-prep-queue[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; justify-content: center; gap: .35rem; margin-top: .85rem; }\n.turn-prep-queue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .turn-prep-queue[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { padding: .26rem .5rem; border: 1px solid rgb(255 255 255 / .13); border-radius: 999px; background: rgb(255 255 255 / .06); color: rgb(255 255 255 / .76); font-size: .68rem; }\n.turn-prep-queue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--color-primary-light); font-weight: 900; text-transform: uppercase; letter-spacing: .06em; }\n.turn-prep-button[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: .35rem; min-height: 2.7rem; margin-top: 1rem; padding: .55rem 1rem .55rem 1.15rem; color: white; border: 1px solid oklch(0.72 0.20 285 / .55); border-radius: 999px; background: linear-gradient(135deg, oklch(0.58 0.28 290 / .32), oklch(0.65 0.28 340 / .22)); box-shadow: 0 8px 22px oklch(0.58 0.28 290 / .18), inset 0 1px 0 rgb(255 255 255 / .15); font-size: .84rem; font-weight: 800; letter-spacing: .03em; cursor: pointer; transition: transform 180ms ease, border-color 180ms ease, background 180ms ease; }\n.turn-prep-button[_ngcontent-%COMP%]:hover { border-color: var(--color-primary-light); background: linear-gradient(135deg, oklch(0.58 0.28 290 / .48), oklch(0.65 0.28 340 / .38)); transform: translateY(-1px); }\n.turn-prep-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: 1rem; height: 1rem; fill: none; stroke: currentColor; stroke-width: 2.3; stroke-linecap: round; stroke-linejoin: round; }\n\n.opponents-categories[_ngcontent-%COMP%] { padding: .75rem 1rem; border: 1px solid rgb(188 133 255 / .24); border-radius: 1rem; background: linear-gradient(115deg, rgb(18 14 45 / .74), rgb(4 7 22 / .74)); box-shadow: inset 0 1px 0 rgb(255 255 255 / .07), 0 12px 28px rgb(0 0 0 / .18); }\n.opponents-categories[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] { cursor: pointer; color: rgb(255 255 255 / .75); font-size: .8rem; font-weight: 800; }\n.opponent-category-row[_ngcontent-%COMP%] { display: flex; align-items: center; gap: .45rem; padding-top: .65rem; }\n.opponent-category-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { margin-right: auto; overflow: hidden; color: white; font-size: .78rem; font-weight: 800; text-overflow: ellipsis; white-space: nowrap; }\n.opponent-category-icon[_ngcontent-%COMP%] { position: relative; display: inline-flex; flex: 0 0 auto; outline: none; transition: opacity 180ms ease, filter 180ms ease; }\n.opponent-category-icon.is-played[_ngcontent-%COMP%]    > app-category-badge[_ngcontent-%COMP%] { opacity: .3; filter: grayscale(1) saturate(.25); }\n.opponent-category-tooltip[_ngcontent-%COMP%] { position: absolute; z-index: 30; bottom: calc(100% + .45rem); left: 50%; width: max-content; max-width: 11rem; padding: .35rem .55rem; border: 1px solid rgb(255 255 255 / .14); border-radius: .45rem; background: rgb(12 9 24 / .96); box-shadow: 0 8px 20px rgb(0 0 0 / .35); color: white; font-size: .67rem; font-weight: 700; line-height: 1.2; opacity: 0; pointer-events: none; transform: translate(-50%, .2rem); transition: opacity 140ms ease, transform 140ms ease; white-space: nowrap; }\n.opponent-category-icon[_ngcontent-%COMP%]:hover   .opponent-category-tooltip[_ngcontent-%COMP%], \n.opponent-category-icon[_ngcontent-%COMP%]:focus-visible   .opponent-category-tooltip[_ngcontent-%COMP%] { opacity: 1; transform: translate(-50%, 0); }\n.opponent-category-icon[_ngcontent-%COMP%]:focus-visible { border-radius: .75rem; outline: 2px solid var(--color-accent); outline-offset: 2px; }\n\n.zwap-overlay[_ngcontent-%COMP%] { position: fixed; z-index: 60; inset: 0; display: grid; place-items: center; padding: 1rem; background: rgb(3 2 10 / .72); backdrop-filter: blur(10px); }\n.zwap-dialog[_ngcontent-%COMP%] { width: min(100%, 38rem); max-height: calc(100dvh - 2rem); display: flex; flex-direction: column; border: 1px solid rgb(249 115 22 / .42); border-radius: 1.5rem; overflow: hidden; box-shadow: 0 26px 70px rgb(0 0 0 / .58), 0 0 38px rgb(249 115 22 / .12); }\n.zwap-dialog__header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.2rem; border-bottom: 1px solid rgb(255 255 255 / .1); }\n.zwap-dialog__eyebrow[_ngcontent-%COMP%] { display: block; color: rgb(251 146 60); font-size: .67rem; font-weight: 900; letter-spacing: .13em; text-transform: uppercase; }\n.zwap-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: .1rem 0 0; color: white; font-size: 1.45rem; font-weight: 900; }\n.zwap-close[_ngcontent-%COMP%] { width: 2.2rem; height: 2.2rem; border: 1px solid rgb(255 255 255 / .12); border-radius: .7rem; color: rgb(255 255 255 / .72); font-size: 1.55rem; line-height: 1; cursor: pointer; }\n.zwap-close[_ngcontent-%COMP%]:hover { color: white; background: rgb(255 255 255 / .08); }\n.zwap-dialog__content[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 1rem; padding: 1.15rem 1.2rem; overflow-y: auto; }\n.zwap-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0 0 .55rem; color: rgb(255 255 255 / .72); font-size: .75rem; font-weight: 800; letter-spacing: .04em; }\n.zwap-categories[_ngcontent-%COMP%], .zwap-players[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: .55rem; }\n.zwap-category-choice[_ngcontent-%COMP%], .zwap-player-choice[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: .45rem; min-height: 2.7rem; padding: .35rem .5rem; border: 1px solid rgb(255 255 255 / .12); border-radius: .85rem; color: rgb(255 255 255 / .8); background: rgb(0 0 0 / .16); font-size: .73rem; font-weight: 800; cursor: pointer; transition: border-color 160ms ease, background 160ms ease, transform 160ms ease; }\n.zwap-category-choice[_ngcontent-%COMP%]:hover:not(:disabled), .zwap-player-choice[_ngcontent-%COMP%]:hover:not(:disabled) { border-color: rgb(251 146 60 / .65); background: rgb(249 115 22 / .12); transform: translateY(-1px); }\n.zwap-category-choice.is-selected[_ngcontent-%COMP%], .zwap-player-choice.is-selected[_ngcontent-%COMP%] { border-color: rgb(251 146 60 / .9); background: rgb(249 115 22 / .2); box-shadow: 0 0 0 2px rgb(249 115 22 / .15); }\n.zwap-category-choice[_ngcontent-%COMP%]:disabled, .zwap-player-choice[_ngcontent-%COMP%]:disabled { opacity: .32; cursor: not-allowed; }\n.zwap-category-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { min-width: 2.4rem; }\n.zwap-player-dot[_ngcontent-%COMP%] { width: .55rem; height: .55rem; border-radius: 999px; }\n.zwap-dialog__actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: .65rem; padding: 1rem 1.2rem; border-top: 1px solid rgb(255 255 255 / .1); }\n.zwap-cancel[_ngcontent-%COMP%] { padding: .65rem .9rem; border: 1px solid rgb(255 255 255 / .14); border-radius: .75rem; color: rgb(255 255 255 / .72); font-size: .82rem; font-weight: 800; cursor: pointer; }\n.zwap-confirm[_ngcontent-%COMP%] { min-height: 2.7rem; padding: .55rem 1rem; border-radius: .75rem; font-size: .82rem; }\n\n@media (prefers-reduced-motion: reduce) { .game-shell[_ngcontent-%COMP%]::before { animation: none; } }"] });
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
                ], template: "<div\n  class=\"game-shell flex flex-col min-h-[calc(100dvh-1.5rem)] sm:min-h-[calc(100dvh-2.5rem)] lg:h-[calc(100dvh-3rem)] lg:min-h-0 lg:max-h-[980px] p-1 sm:p-2 gap-3 lg:gap-4 w-full max-w-[1500px] mx-auto\"\n>\n  <!-- Top Bar: Turn Indicator & Round -->\n  <header\n    class=\"game-header flex-none flex justify-center items-center relative z-20 lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-max\"\n  >\n    <app-turn-indicator\n      [playerName]=\"currentTurnPlayerName\"\n      [playerColor]=\"currentTurnPlayerColor\"\n      [isMyTurn]=\"gameState.isMyTurn()\"\n      [phaseText]=\"phaseText\"\n    >\n    </app-turn-indicator>\n  </header>\n  <div class=\"game-help\"><app-rules-help [compact]=\"true\"></app-rules-help></div>\n\n  @if (hasReboundStatus) {\n    <div class=\"rebound-queue\" role=\"status\" aria-live=\"polite\">\n      <span class=\"rebound-queue__label\">{{ isReboundTurn ? 'Rebote activo' : 'Cola de rebotes' }}</span>\n      @if (isReboundTurn) {\n        <span class=\"rebound-queue__player rebound-queue__player--active\">Responde: {{ currentAnswerPlayerName }}</span>\n      }\n      @for (playerName of reboundQueueNames; track playerName; let index = $index) {\n        <span class=\"rebound-queue__player\">{{ isReboundTurn ? 'Despu\u00E9s: ' : (index + 1) + '. ' }}{{ playerName }}</span>\n      }\n    </div>\n  }\n\n  <!-- Main Game Area -->\n  <main\n    class=\"flex-grow grid grid-cols-1 lg:grid-cols-[minmax(210px,260px)_minmax(440px,1fr)_minmax(250px,300px)] gap-3 lg:gap-4 min-h-0 relative z-10\"\n  >\n    <!-- Left Sidebar: Scoreboard (Hidden on small mobile, bottom on tablet, left on desktop) -->\n    <aside class=\"score-area flex lg:flex-col w-full h-auto lg:h-full order-2 lg:order-1 min-h-0\">\n      <app-scoreboard\n        [players]=\"gameState.sortedPlayers()\"\n        [currentTurnPlayerId]=\"gameState.currentTurnPlayerId()\"\n        [currentRound]=\"gameState.currentRound()\"\n      >\n      </app-scoreboard>\n    </aside>\n\n    <!-- Center: Board -->\n    <section\n      class=\"board-area flex items-center justify-center min-h-[320px] lg:min-h-0 order-1 lg:order-2 p-1 lg:pt-16\"\n    >\n      <app-board\n        [players]=\"gameState.players()\"\n        [currentTurnPlayerId]=\"gameState.currentTurnPlayerId()\"\n      >\n      </app-board>\n\n      <!-- A short, skippable tactical beat before the question keeps ZWAP meaningful\n      without forcing the table to wait for the whole countdown. -->\n      @if (gameState.gamePhase() === 'PLAYING') {\n        <div class=\"turn-prep-card glass-strong\">\n          <span class=\"turn-prep-kicker\">Siguiente pregunta en {{ gameState.timer() }} s</span>\n          @if (currentTurnCategory; as category) {\n            <div class=\"turn-prep-category\">\n              <app-category-badge\n                class=\"turn-prep-icon\"\n                [name]=\"category.category.name\"\n                [icon]=\"category.category.icon\"\n                [color]=\"category.category.color\"\n                [compact]=\"true\"\n              >\n              </app-category-badge>\n              <div>\n                <strong>{{ currentTurnPlayerName }}</strong>\n                <span>{{ category.category.name }} \u00B7 {{ category.pointValue }} puntos</span>\n              </div>\n            </div>\n          }\n          <p>Todos deben confirmar antes de mostrar la pregunta. Mientras tanto puedes usar tus fichas.</p>\n          @if (reboundQueueNames.length > 0) {\n            <div class=\"turn-prep-queue\" role=\"status\">\n              <span>Cola BEZZER</span>\n              @for (playerName of reboundQueueNames; track playerName; let index = $index) {\n                <b>{{ index + 1 }}. {{ playerName }}</b>\n              }\n            </div>\n          }\n          <button type=\"button\" class=\"turn-prep-button\" (click)=\"skipPreparation()\" [disabled]=\"!canSkipPreparation\">\n              <span>Listo ({{ gameState.preparationSkipVotes().length }}/{{ gameState.players().length }})</span>\n              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m9 18 6-6-6-6\" /></svg>\n          </button>\n        </div>\n      }\n    </section>\n\n    <!-- Right Sidebar: Personal Dashboard -->\n    <aside class=\"dashboard-area w-full flex flex-col gap-3 h-auto lg:h-full order-3 min-h-0\">\n      <div class=\"flex-grow min-h-0\">\n        <app-category-slots\n          [slots]=\"gameState.myCategories()\"\n          [isAssigning]=\"isAssigningCategories\"\n          [currentSlotIndex]=\"currentSlotIndex\"\n          (assignmentChanged)=\"onAssignmentChanged($event)\"\n          (submitAssignment)=\"submitAssignment()\"\n        >\n        </app-category-slots>\n      </div>\n\n      @if (gameState.gamePhase() !== 'CATEGORY_ASSIGNMENT') {\n        <details class=\"opponents-categories glass\">\n          <summary>Ver categor\u00EDas de los dem\u00E1s</summary>\n          @for (player of gameState.players(); track player) {\n            @if (player.playerId !== playerId()) {\n              <div class=\"opponent-category-row\">\n                <strong [style.color]=\"player.color\">{{ player.username }}</strong>\n                @for (slot of orderedCategories(player.categorySlots); track slot) {\n                  <span\n                    class=\"opponent-category-icon\"\n                    [class.is-played]=\"slot.answered\"\n                    [attr.title]=\"slot.category.name + (slot.answered ? ' (ya jugada)' : '')\"\n                    tabindex=\"0\"\n                    [attr.aria-label]=\"\n                      slot.category.name +\n                      ', ' +\n                      slot.pointValue +\n                      ' puntos' +\n                      (slot.answered ? ', ya jugada' : '')\n                    \"\n                  >\n                    <app-category-badge\n                      [name]=\"slot.category.name\"\n                      [icon]=\"slot.category.icon\"\n                      [color]=\"slot.category.color\"\n                      [compact]=\"true\"\n                    >\n                    </app-category-badge>\n                    <span class=\"opponent-category-tooltip\" role=\"tooltip\">{{\n                      slot.category.name\n                    }}</span>\n                  </span>\n                }\n              </div>\n            }\n          }\n        </details>\n      }\n\n      <div class=\"flex-none min-h-40 lg:h-[13rem]\">\n        <app-tactical-panel\n          [zwapsLeft]=\"gameState.myTacticalTiles().zwap\"\n          [bezzerwizzersLeft]=\"gameState.myTacticalTiles().bezzerwizzer\"\n          [canZwap]=\"gameState.canPlayZwap()\"\n          [canBezzerwizzer]=\"canChallengeWithBezzerwizzer\"\n          [canSkipPreparation]=\"canSkipPreparation\"\n          [skipVotes]=\"gameState.preparationSkipVotes().length\"\n          [playerCount]=\"gameState.players().length\"\n          (zwapClick)=\"onZwapClick()\"\n          (bezzerwizzerClick)=\"onBezzerwizzerClick()\"\n          (skipPreparationClick)=\"skipPreparation()\"\n        >\n        </app-tactical-panel>\n      </div>\n    </aside>\n  </main>\n\n  <!-- Overlays -->\n  @if (showQuestionModal) {\n    <app-question-modal\n      [question]=\"gameState.currentQuestion()\"\n      [timer]=\"gameState.timer()\"\n      [timerTotal]=\"gameState.timerTotal()\"\n      [isAnswered]=\"!canAnswerQuestion\"\n      [canChangeAnswer]=\"canChangePreparedAnswer\"\n      [selectionFailed]=\"isMySelectionIncorrect\"\n      [canBezzerwizzer]=\"canChallengeWithBezzerwizzer\"\n      [answeringPlayerName]=\"currentAnswerPlayerName\"\n      [isReboundTurn]=\"isReboundTurn\"\n      [reboundQueue]=\"reboundQueueNames\"\n      (onAnswer)=\"handleAnswer($event)\"\n      (onBezzerwizzer)=\"onBezzerwizzerClick()\"\n    >\n    </app-question-modal>\n  }\n\n  @if (showZwapSelector) {\n    <div class=\"zwap-overlay\" role=\"presentation\">\n      <section class=\"zwap-dialog glass-strong\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"zwap-title\">\n        <header class=\"zwap-dialog__header\">\n          <div>\n            <span class=\"zwap-dialog__eyebrow\">Ficha t\u00E1ctica</span>\n            <h2 id=\"zwap-title\">Usar ZWAP</h2>\n          </div>\n          <button type=\"button\" class=\"zwap-close\" (click)=\"showZwapSelector = false\" aria-label=\"Cerrar selector ZWAP\">\u00D7</button>\n        </header>\n\n        @if (getMyPlayer(); as me) {\n          <div class=\"zwap-dialog__content\">\n            <section>\n              <h3>1. Elige una de tus categor\u00EDas</h3>\n              <div class=\"zwap-categories\">\n                @for (item of availableZwapSlots(me); track item.index) {\n                  <button type=\"button\" class=\"zwap-category-choice\" [class.is-selected]=\"zwapSourceIndex === item.index\" (click)=\"selectZwapSource(item.index)\">\n                    <app-category-badge [name]=\"item.slot.category.name\" [icon]=\"item.slot.category.icon\" [color]=\"item.slot.category.color\" [compact]=\"true\"></app-category-badge>\n                    <span>{{ item.slot.pointValue }} pts</span>\n                  </button>\n                }\n              </div>\n            </section>\n\n            @if (zwapSourceIndex !== null) {\n              <section>\n                <h3>2. Elige el jugador destino</h3>\n                <div class=\"zwap-players\">\n                  @for (player of gameState.players(); track player.playerId) {\n                    <button type=\"button\" class=\"zwap-player-choice\" [class.is-selected]=\"zwapTargetPlayerId === player.playerId\" [disabled]=\"availableZwapSlots(player).length === 0\" (click)=\"selectZwapTargetPlayer(player.playerId)\">\n                      <span class=\"zwap-player-dot\" [style.backgroundColor]=\"player.color\"></span>\n                      {{ player.playerId === playerId() ? 'Reordenar mis categor\u00EDas' : player.username }}\n                    </button>\n                  }\n                </div>\n              </section>\n            }\n\n            @if (getZwapTargetPlayer(); as target) {\n              <section>\n                <h3>3. Elige la categor\u00EDa destino</h3>\n                <div class=\"zwap-categories\">\n                  @for (item of availableZwapSlots(target); track item.index) {\n                    <button type=\"button\" class=\"zwap-category-choice\" [class.is-selected]=\"zwapTargetSlotIndex === item.index\" [disabled]=\"target.playerId === playerId() && item.index === zwapSourceIndex\" (click)=\"zwapTargetSlotIndex = item.index\">\n                      <app-category-badge [name]=\"item.slot.category.name\" [icon]=\"item.slot.category.icon\" [color]=\"item.slot.category.color\" [compact]=\"true\"></app-category-badge>\n                      <span>{{ item.slot.pointValue }} pts</span>\n                    </button>\n                  }\n                </div>\n              </section>\n            }\n          </div>\n        }\n\n        <footer class=\"zwap-dialog__actions\">\n          <button type=\"button\" class=\"zwap-cancel\" (click)=\"showZwapSelector = false\">Cancelar</button>\n          <button type=\"button\" class=\"btn-primary zwap-confirm\" (click)=\"confirmZwap()\" [disabled]=\"zwapSourceIndex === null || !zwapTargetPlayerId || zwapTargetSlotIndex === null\">Confirmar intercambio</button>\n        </footer>\n      </section>\n    </div>\n  }\n\n  <!-- Result Overlay (Answer Correct/Incorrect) -->\n  @if (showResultOverlay) {\n    <div\n      class=\"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in\"\n    >\n      <div\n        class=\"glass p-12 rounded-[3rem] flex flex-col items-center animate-bounce-in max-w-md w-full text-center\"\n        [ngClass]=\"\n          lastResultCorrect\n            ? 'border-correct/50 glow-correct'\n            : 'border-incorrect/50 glow-incorrect'\n        \"\n      >\n        <div\n          class=\"result-icon w-28 h-28 rounded-full flex items-center justify-center mb-6 shadow-2xl\"\n          [ngClass]=\"lastResultCorrect ? 'bg-correct text-white' : 'bg-incorrect text-white'\"\n        >\n          @if (lastResultCorrect) {\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12.5 4.2 4L19 7\" /></svg>\n          } @else {\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m7 7 10 10M17 7 7 17\" /></svg>\n          }\n        </div>\n        <h2 class=\"text-4xl font-black font-display mb-2 text-white\">\n          {{ lastResultCorrect ? '\u00A1CORRECTO!' : 'INCORRECTO' }}\n        </h2>\n        <p class=\"text-xl text-text-muted font-medium mb-6\">\n          {{\n            lastResultCorrect\n              ? '+' + lastResultPoints + ' puntos'\n              : 'La respuesta era: ' + lastResultAnswerText\n          }}\n        </p>\n        <!-- Bezzerwizzer Results if any -->\n        @if (bezzerwizzerResults.length > 0) {\n          <div\n            class=\"w-full bg-surface-elevated/50 p-4 rounded-2xl mb-4 text-left border border-border/50\"\n          >\n            <h4 class=\"text-sm font-bold text-purple-400 mb-2 uppercase tracking-widest\">\n              Resultados Bezzerwizzer\n            </h4>\n            @for (bz of bezzerwizzerResults; track bz) {\n              <div class=\"flex items-center gap-2 text-sm text-white font-medium\">\n                <span>{{ getPlayerName(bz.challengerId) }}:</span>\n                <span [ngClass]=\"bz.correct ? 'text-correct' : 'text-incorrect'\">\n                  {{ bz.correct ? '+' + bz.pointsGained : bz.pointsGained }} pts\n                </span>\n              </div>\n            }\n          </div>\n        }\n      </div>\n    </div>\n  }\n</div>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 0;\n}\n\n.game-shell { position: relative; isolation: isolate; animation: game-fade-in .45s ease-out both; }\n.game-shell::before { content: ''; position: absolute; z-index: -1; width: min(72vw, 72rem); height: min(60vw, 48rem); top: 10%; left: 50%; border-radius: 50%; opacity: .45; transform: translateX(-50%); background: radial-gradient(circle, rgb(123 44 255 / .19), rgb(0 217 255 / .06) 39%, transparent 69%); filter: blur(30px); pointer-events: none; animation: shell-aura 12s ease-in-out infinite alternate; }\n.game-help { position: absolute; z-index: 25; top: .35rem; right: .35rem; }\n\n.rebound-queue { display: flex; flex-wrap: wrap; justify-content: center; gap: .45rem; margin: -0.45rem 0 .1rem; }\n.rebound-queue__label, .rebound-queue__player { padding: .3rem .6rem; border: 1px solid rgb(255 255 255 / .12); border-radius: 999px; background: rgb(10 7 24 / .66); color: rgb(255 255 255 / .65); font-size: .68rem; font-weight: 800; letter-spacing: .05em; }\n.rebound-queue__label { color: var(--color-primary-light); text-transform: uppercase; }\n.rebound-queue__player--active { color: white; border-color: oklch(0.65 0.28 340 / .5); background: oklch(0.65 0.28 340 / .16); }\n\n@keyframes game-fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@media (min-width: 1024px) {\n  :host { overflow: clip; }\n}\n\n.result-icon svg {\n  width: 4.5rem;\n  height: 4.5rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 2.2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.game-header::after {\n  content: '';\n  position: absolute;\n  right: 12%;\n  bottom: 0;\n  left: 12%;\n  height: 1px;\n  background: linear-gradient(90deg, transparent, rgb(255 255 255 / 0.14), transparent);\n}\n\n.board-area { perspective: 1200px; }\n\n@keyframes shell-aura { from { transform: translateX(-50%) scale(.94); opacity: .32; } to { transform: translateX(-50%) scale(1.08); opacity: .56; } }\n\n@media (max-width: 1023px) {\n  .score-area { height: 10.5rem; }\n}\n\n@media (max-width: 640px) {\n  .game-help { top: .1rem; right: .1rem; }\n  .score-area { height: 9rem; }\n  .dashboard-area { padding-bottom: max(0.5rem, env(safe-area-inset-bottom)); }\n}\n.board-area { position: relative; }\n\n.turn-prep-card {\n  position: absolute;\n  z-index: 5;\n  width: min(88%, 26rem);\n  padding: 1.25rem;\n  border: 1px solid rgb(255 255 255 / .18);\n  border-radius: 1.5rem;\n  text-align: center;\n  box-shadow: 0 18px 55px rgb(0 0 0 / .42);\n}\n\n.turn-prep-kicker { display: block; color: var(--color-accent); font-size: .72rem; font-weight: 900; letter-spacing: .14em; text-transform: uppercase; }\n.turn-prep-category { display: flex; align-items: center; justify-content: center; gap: .8rem; margin: .8rem 0; color: white; }\n.turn-prep-category div { display: flex; flex-direction: column; text-align: left; }\n.turn-prep-category span:not(.turn-prep-icon) { color: rgb(255 255 255 / .65); font-size: .85rem; }\n.turn-prep-icon { display: block; flex: 0 0 auto; }\n.turn-prep-card p { margin: 0; color: rgb(255 255 255 / .68); font-size: .88rem; }\n.turn-prep-queue { display: flex; flex-wrap: wrap; justify-content: center; gap: .35rem; margin-top: .85rem; }\n.turn-prep-queue span, .turn-prep-queue b { padding: .26rem .5rem; border: 1px solid rgb(255 255 255 / .13); border-radius: 999px; background: rgb(255 255 255 / .06); color: rgb(255 255 255 / .76); font-size: .68rem; }\n.turn-prep-queue span { color: var(--color-primary-light); font-weight: 900; text-transform: uppercase; letter-spacing: .06em; }\n.turn-prep-button { display: inline-flex; align-items: center; gap: .35rem; min-height: 2.7rem; margin-top: 1rem; padding: .55rem 1rem .55rem 1.15rem; color: white; border: 1px solid oklch(0.72 0.20 285 / .55); border-radius: 999px; background: linear-gradient(135deg, oklch(0.58 0.28 290 / .32), oklch(0.65 0.28 340 / .22)); box-shadow: 0 8px 22px oklch(0.58 0.28 290 / .18), inset 0 1px 0 rgb(255 255 255 / .15); font-size: .84rem; font-weight: 800; letter-spacing: .03em; cursor: pointer; transition: transform 180ms ease, border-color 180ms ease, background 180ms ease; }\n.turn-prep-button:hover { border-color: var(--color-primary-light); background: linear-gradient(135deg, oklch(0.58 0.28 290 / .48), oklch(0.65 0.28 340 / .38)); transform: translateY(-1px); }\n.turn-prep-button svg { width: 1rem; height: 1rem; fill: none; stroke: currentColor; stroke-width: 2.3; stroke-linecap: round; stroke-linejoin: round; }\n\n.opponents-categories { padding: .75rem 1rem; border: 1px solid rgb(188 133 255 / .24); border-radius: 1rem; background: linear-gradient(115deg, rgb(18 14 45 / .74), rgb(4 7 22 / .74)); box-shadow: inset 0 1px 0 rgb(255 255 255 / .07), 0 12px 28px rgb(0 0 0 / .18); }\n.opponents-categories summary { cursor: pointer; color: rgb(255 255 255 / .75); font-size: .8rem; font-weight: 800; }\n.opponent-category-row { display: flex; align-items: center; gap: .45rem; padding-top: .65rem; }\n.opponent-category-row strong { margin-right: auto; overflow: hidden; color: white; font-size: .78rem; font-weight: 800; text-overflow: ellipsis; white-space: nowrap; }\n.opponent-category-icon { position: relative; display: inline-flex; flex: 0 0 auto; outline: none; transition: opacity 180ms ease, filter 180ms ease; }\n.opponent-category-icon.is-played > app-category-badge { opacity: .3; filter: grayscale(1) saturate(.25); }\n.opponent-category-tooltip { position: absolute; z-index: 30; bottom: calc(100% + .45rem); left: 50%; width: max-content; max-width: 11rem; padding: .35rem .55rem; border: 1px solid rgb(255 255 255 / .14); border-radius: .45rem; background: rgb(12 9 24 / .96); box-shadow: 0 8px 20px rgb(0 0 0 / .35); color: white; font-size: .67rem; font-weight: 700; line-height: 1.2; opacity: 0; pointer-events: none; transform: translate(-50%, .2rem); transition: opacity 140ms ease, transform 140ms ease; white-space: nowrap; }\n.opponent-category-icon:hover .opponent-category-tooltip,\n.opponent-category-icon:focus-visible .opponent-category-tooltip { opacity: 1; transform: translate(-50%, 0); }\n.opponent-category-icon:focus-visible { border-radius: .75rem; outline: 2px solid var(--color-accent); outline-offset: 2px; }\n\n.zwap-overlay { position: fixed; z-index: 60; inset: 0; display: grid; place-items: center; padding: 1rem; background: rgb(3 2 10 / .72); backdrop-filter: blur(10px); }\n.zwap-dialog { width: min(100%, 38rem); max-height: calc(100dvh - 2rem); display: flex; flex-direction: column; border: 1px solid rgb(249 115 22 / .42); border-radius: 1.5rem; overflow: hidden; box-shadow: 0 26px 70px rgb(0 0 0 / .58), 0 0 38px rgb(249 115 22 / .12); }\n.zwap-dialog__header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.2rem; border-bottom: 1px solid rgb(255 255 255 / .1); }\n.zwap-dialog__eyebrow { display: block; color: rgb(251 146 60); font-size: .67rem; font-weight: 900; letter-spacing: .13em; text-transform: uppercase; }\n.zwap-dialog h2 { margin: .1rem 0 0; color: white; font-size: 1.45rem; font-weight: 900; }\n.zwap-close { width: 2.2rem; height: 2.2rem; border: 1px solid rgb(255 255 255 / .12); border-radius: .7rem; color: rgb(255 255 255 / .72); font-size: 1.55rem; line-height: 1; cursor: pointer; }\n.zwap-close:hover { color: white; background: rgb(255 255 255 / .08); }\n.zwap-dialog__content { display: flex; flex-direction: column; gap: 1rem; padding: 1.15rem 1.2rem; overflow-y: auto; }\n.zwap-dialog h3 { margin: 0 0 .55rem; color: rgb(255 255 255 / .72); font-size: .75rem; font-weight: 800; letter-spacing: .04em; }\n.zwap-categories, .zwap-players { display: flex; flex-wrap: wrap; gap: .55rem; }\n.zwap-category-choice, .zwap-player-choice { display: inline-flex; align-items: center; gap: .45rem; min-height: 2.7rem; padding: .35rem .5rem; border: 1px solid rgb(255 255 255 / .12); border-radius: .85rem; color: rgb(255 255 255 / .8); background: rgb(0 0 0 / .16); font-size: .73rem; font-weight: 800; cursor: pointer; transition: border-color 160ms ease, background 160ms ease, transform 160ms ease; }\n.zwap-category-choice:hover:not(:disabled), .zwap-player-choice:hover:not(:disabled) { border-color: rgb(251 146 60 / .65); background: rgb(249 115 22 / .12); transform: translateY(-1px); }\n.zwap-category-choice.is-selected, .zwap-player-choice.is-selected { border-color: rgb(251 146 60 / .9); background: rgb(249 115 22 / .2); box-shadow: 0 0 0 2px rgb(249 115 22 / .15); }\n.zwap-category-choice:disabled, .zwap-player-choice:disabled { opacity: .32; cursor: not-allowed; }\n.zwap-category-choice span { min-width: 2.4rem; }\n.zwap-player-dot { width: .55rem; height: .55rem; border-radius: 999px; }\n.zwap-dialog__actions { display: flex; justify-content: flex-end; gap: .65rem; padding: 1rem 1.2rem; border-top: 1px solid rgb(255 255 255 / .1); }\n.zwap-cancel { padding: .65rem .9rem; border: 1px solid rgb(255 255 255 / .14); border-radius: .75rem; color: rgb(255 255 255 / .72); font-size: .82rem; font-weight: 800; cursor: pointer; }\n.zwap-confirm { min-height: 2.7rem; padding: .55rem 1rem; border-radius: .75rem; font-size: .82rem; }\n\n@media (prefers-reduced-motion: reduce) { .game-shell::before { animation: none; } }\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GameComponent, { className: "GameComponent", filePath: "src/app/pages/game/game.component.ts", lineNumber: 38 }); })();
