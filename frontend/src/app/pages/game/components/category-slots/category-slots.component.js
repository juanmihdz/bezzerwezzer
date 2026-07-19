import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { CdkDrag, CdkDropList, moveItemInArray, } from '@angular/cdk/drag-drop';
import { CategoryBadgeComponent } from '../../../../shared/components/category-badge/category-badge.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.category.id;
function CategorySlotsComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1, " ARRASTRA PARA ORDENAR ");
    i0.ɵɵelementEnd();
} }
function CategorySlotsComponent_For_9_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "span");
    i0.ɵɵtext(3, "Resuelto");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 14);
    i0.ɵɵelement(5, "path", 15);
    i0.ɵɵelementEnd()()();
} }
function CategorySlotsComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("cdkDragStarted", function CategorySlotsComponent_For_9_Template_div_cdkDragStarted_0_listener() { const ɵ$index_18_r2 = i0.ɵɵrestoreView(_r1).$index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.startDrag(ɵ$index_18_r2)); })("cdkDragEnded", function CategorySlotsComponent_For_9_Template_div_cdkDragEnded_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.endDrag()); })("keydown", function CategorySlotsComponent_For_9_Template_div_keydown_0_listener($event) { const ɵ$index_18_r2 = i0.ɵɵrestoreView(_r1).$index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.moveWithKeyboard($event, ɵ$index_18_r2)); });
    i0.ɵɵelement(1, "app-category-badge", 11);
    i0.ɵɵconditionalCreate(2, CategorySlotsComponent_For_9_Conditional_2_Template, 6, 0, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slot_r4 = ctx.$implicit;
    const ɵ$index_18_r2 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-assigning", ctx_r2.isAssigning)("is-dragging", ctx_r2.draggedIndex === ɵ$index_18_r2)("opacity-40", slot_r4.answered)("grayscale", slot_r4.answered);
    i0.ɵɵproperty("cdkDragDisabled", !ctx_r2.isAssigning);
    i0.ɵɵattribute("tabindex", ctx_r2.isAssigning ? 0 : null)("data-category-index", ɵ$index_18_r2)("aria-label", ctx_r2.isAssigning ? slot_r4.category.name + ", " + slot_r4.pointValue + " puntos. Arrastra o usa las flechas para intercambiar su puntuaci\u00F3n." : null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", slot_r4.category.name)("icon", slot_r4.category.icon)("color", slot_r4.category.color)("pointValue", slot_r4.pointValue)("isHighlighted", ctx_r2.isCurrentSlot(slot_r4));
    i0.ɵɵadvance();
    i0.ɵɵconditional(slot_r4.answered ? 2 : -1);
} }
function CategorySlotsComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function CategorySlotsComponent_Conditional_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitAssignment.emit()); });
    i0.ɵɵtext(1, " CONFIRMAR PUNTOS ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r2.allAssigned);
} }
function CategorySlotsComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "span", 17);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 18);
    i0.ɵɵelement(3, "path", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "span")(5, "strong");
    i0.ɵɵtext(6, "Ordena tus categor\u00EDas");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, "Arrastra las tarjetas para colocarlas en los valores 4, 3, 2 y 1.");
    i0.ɵɵelementEnd()();
} }
export class CategorySlotsComponent {
    slots;
    isAssigning = false;
    currentSlotIndex = -1;
    assignmentChanged = new EventEmitter();
    submitAssignment = new EventEmitter();
    points = [1, 2, 3, 4];
    displaySlots = [];
    draggedIndex = null;
    showAssignmentHint = false;
    hintTimeout;
    ngOnChanges(changes) {
        if (changes['slots'] && this.slots?.length) {
            this.displaySlots = [...this.slots].sort((a, b) => a.pointValue - b.pointValue);
        }
        if (changes['isAssigning']?.currentValue && !changes['isAssigning'].previousValue) {
            if (this.slots.length === 4 && !this.allAssigned) {
                const initializedSlots = this.slots.map((slot, index) => ({
                    ...slot,
                    pointValue: this.points[index],
                }));
                this.slots = initializedSlots;
                this.displaySlots = [...initializedSlots];
                queueMicrotask(() => this.assignmentChanged.emit(initializedSlots));
            }
            this.showAssignmentHint = true;
            window.clearTimeout(this.hintTimeout);
            this.hintTimeout = window.setTimeout(() => (this.showAssignmentHint = false), 5700);
        }
    }
    ngOnDestroy() {
        window.clearTimeout(this.hintTimeout);
    }
    get allAssigned() {
        return (this.slots.length === 4 &&
            new Set(this.slots.map((slot) => slot.pointValue)).size === 4 &&
            this.slots.every((slot) => slot.pointValue >= 1 && slot.pointValue <= 4));
    }
    isCurrentSlot(slot) {
        return !this.isAssigning && this.slots[this.currentSlotIndex]?.category.id === slot.category.id;
    }
    startDrag(index) {
        this.draggedIndex = index;
    }
    endDrag() {
        this.draggedIndex = null;
    }
    dropWithCdk(event) {
        this.endDrag();
        if (!this.isAssigning || event.previousIndex === event.currentIndex)
            return;
        const reordered = [...this.displaySlots];
        moveItemInArray(reordered, event.previousIndex, event.currentIndex);
        this.applyOrder(reordered);
    }
    moveWithKeyboard(event, index) {
        if (!this.isAssigning || !['ArrowUp', 'ArrowDown'].includes(event.key))
            return;
        event.preventDefault();
        const targetIndex = event.key === 'ArrowUp' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= this.displaySlots.length)
            return;
        this.swapCategories(index, targetIndex);
        window.setTimeout(() => {
            document.querySelector(`[data-category-index="${targetIndex}"]`)?.focus();
        });
    }
    swapCategories(sourceIndex, targetIndex) {
        const reordered = [...this.displaySlots];
        [reordered[sourceIndex], reordered[targetIndex]] = [
            reordered[targetIndex],
            reordered[sourceIndex],
        ];
        this.applyOrder(reordered);
    }
    applyOrder(reordered) {
        this.displaySlots = reordered.map((slot, index) => ({
            ...slot,
            pointValue: this.points[index],
        }));
        // The server expects values in the original category order, so translate the
        // visual order back to that stable order before emitting the assignment.
        const assignmentByCategory = new Map(this.displaySlots.map((slot) => [slot.category.id, slot.pointValue]));
        const canonicalSlots = this.slots.map((slot) => ({
            ...slot,
            pointValue: assignmentByCategory.get(slot.category.id) ?? slot.pointValue,
        }));
        this.slots = canonicalSlots;
        this.assignmentChanged.emit(canonicalSlots);
    }
    static ɵfac = function CategorySlotsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CategorySlotsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CategorySlotsComponent, selectors: [["app-category-slots"]], inputs: { slots: "slots", isAssigning: "isAssigning", currentSlotIndex: "currentSlotIndex" }, outputs: { assignmentChanged: "assignmentChanged", submitAssignment: "submitAssignment" }, features: [i0.ɵɵNgOnChangesFeature], decls: 12, vars: 5, consts: [[1, "category-panel", "glass", "p-4", "xl:p-5", "rounded-3xl", "animate-slide-up", "h-full", "flex", "flex-col"], [1, "text-xl", "font-black", "mb-4", "flex", "flex-wrap", "gap-2", "items-center", "justify-between", "tracking-wide", "text-white"], [1, "category-heading"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"], [1, "assignment-chip"], ["cdkDropList", "", 1, "category-list", "flex", "w-full", "min-h-0", "flex-grow", "flex-col", "gap-2.5", "overflow-y-auto", "overflow-x-clip", "pr-1", "max-[40rem]:overflow-y-visible", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListDisabled"], ["cdkDrag", "", "cdkDragLockAxis", "y", 1, "category-row", "relative", "group", 3, "is-assigning", "is-dragging", "opacity-40", "grayscale", "cdkDragDisabled"], [1, "btn-primary", "w-full", "flex-none", "mt-4", "text-base", "font-black", "py-3", "rounded-2xl", 3, "disabled"], ["role", "status", "aria-live", "polite", 1, "assignment-hint"], ["cdkDrag", "", "cdkDragLockAxis", "y", 1, "category-row", "relative", "group", 3, "cdkDragStarted", "cdkDragEnded", "keydown", "cdkDragDisabled"], ["size", "md", 3, "name", "icon", "color", "pointValue", "isHighlighted"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "bg-black/45", "rounded-2xl", "z-30", "backdrop-blur-[0.125rem]"], [1, "bg-correct/10", "border", "border-correct/30", "text-correct", "px-4", "py-1.5", "rounded-full", "text-xs", "font-black", "tracking-widest", "uppercase", "flex", "items-center", "gap-2", "shadow-[0_0_0.9375rem_rgba(104,244,200,0.1)]"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "resolved-check"], ["d", "m5 12.5 4.2 4L19 7"], [1, "btn-primary", "w-full", "flex-none", "mt-4", "text-base", "font-black", "py-3", "rounded-2xl", 3, "click", "disabled"], ["aria-hidden", "true", 1, "hint-icon"], ["viewBox", "0 0 24 24"], ["d", "M8 11V7a2 2 0 0 1 4 0v3-5a2 2 0 0 1 4 0v5-3a2 2 0 0 1 4 0v7c0 4-3 7-7 7h-1c-3 0-5-1-7-4l-2-3a2 2 0 0 1 3-2l2 2v-3Z"]], template: function CategorySlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h3", 1)(2, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "path", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5, "Categor\u00EDas");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, CategorySlotsComponent_Conditional_6_Template, 2, 0, "span", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵlistener("cdkDropListDropped", function CategorySlotsComponent_Template_div_cdkDropListDropped_7_listener($event) { return ctx.dropWithCdk($event); });
            i0.ɵɵrepeaterCreate(8, CategorySlotsComponent_For_9_Template, 3, 18, "div", 7, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(10, CategorySlotsComponent_Conditional_10_Template, 2, 1, "button", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(11, CategorySlotsComponent_Conditional_11_Template, 8, 0, "div", 9);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(ctx.isAssigning ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("cdkDropListData", ctx.displaySlots)("cdkDropListDisabled", !ctx.isAssigning);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.displaySlots);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.isAssigning ? 10 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showAssignmentHint ? 11 : -1);
        } }, dependencies: [CategoryBadgeComponent, CdkDrag, CdkDropList], styles: ["[_nghost-%COMP%] { display: block; height: 100%; min-height: 0; }\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] { position: relative; overflow: hidden; border: 0.0625rem solid rgb(191 137 255 / .32); background: radial-gradient(circle at 90% 4%, rgb(0 217 255 / .09), transparent 31%), linear-gradient(155deg, rgb(24 17 53 / .91), rgb(5 7 23 / .88)); box-shadow: 0 1.625rem 3.625rem rgb(0 0 0 / .4), 0 0 1.875rem rgb(123 44 255 / .07), inset 0 0.0625rem 0 rgb(255 255 255 / .11), inset 0 0 2.5rem rgb(123 44 255 / .045); }\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]::after { content: ''; position: absolute; width: 12rem; height: 12rem; right: -5rem; top: -5rem; border-radius: 50%; background: radial-gradient(circle, rgb(0 217 255 / .11), transparent 68%); pointer-events: none; }\n.category-list[_ngcontent-%COMP%] { scrollbar-width: thin; scrollbar-color: rgb(255 255 255 / .18) transparent; }\n.category-heading[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: .55rem; }\n.category-heading[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: 1.3rem; height: 1.3rem; fill: none; stroke: var(--color-accent); stroke-width: 1.8; }\n.resolved-check[_ngcontent-%COMP%] { width: 1rem; height: 1rem; fill: none; stroke: currentColor; stroke-width: 2.4; stroke-linecap: round; }\n.assignment-chip[_ngcontent-%COMP%] { padding: .4rem .7rem; border: 0.0625rem solid color-mix(in srgb, var(--color-accent) 30%, transparent); border-radius: 62.4375rem; color: var(--color-accent); background: color-mix(in srgb, var(--color-accent) 12%, transparent); font-size: .65rem; font-weight: 800; letter-spacing: .08em; }\n.category-row[_ngcontent-%COMP%] { border-radius: 1rem; transition: opacity .2s ease, transform .2s ease, box-shadow .2s ease, filter .2s ease; outline: none; }\n.category-row[_ngcontent-%COMP%]:hover { filter: brightness(1.08); }\n.category-row[_ngcontent-%COMP%]::after { content: ''; position: absolute; inset: 0.0625rem; border-radius: inherit; border: 0.0625rem solid rgb(255 255 255 / .045); pointer-events: none; }\n.category-row.is-assigning[_ngcontent-%COMP%] { cursor: grab; touch-action: none; }\n.category-row.is-assigning[_ngcontent-%COMP%]:active, .category-row.is-dragging[_ngcontent-%COMP%] { cursor: grabbing; }\n.category-row.is-assigning[_ngcontent-%COMP%]:hover, .category-row.is-assigning[_ngcontent-%COMP%]:focus-visible { transform: translateY(-0.125rem); box-shadow: 0 0.625rem 1.5625rem rgb(0 0 0 / .22); }\n.category-row.is-assigning[_ngcontent-%COMP%]:focus-visible { outline: 0.125rem solid var(--color-accent); outline-offset: 0.1875rem; }\n.category-row.is-dragging[_ngcontent-%COMP%] { opacity: .38; transform: scale(.98); }\n.cdk-drag-preview[_ngcontent-%COMP%] { border-radius: 1rem; box-shadow: 0 1rem 2.5rem rgb(0 0 0 / .48), 0 0 1.5rem color-mix(in srgb, var(--color-accent) 30%, transparent); }\n.cdk-drag-placeholder[_ngcontent-%COMP%] { opacity: .28; }\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-row[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) { transition: transform 180ms ease; }\n\n.assignment-hint[_ngcontent-%COMP%] { position: fixed; z-index: 70; top: 50%; left: 50%; width: min(92vw, 30rem); transform: translate(-50%, -50%); display: flex; align-items: center; gap: 1rem; padding: 1rem 1.15rem; border: 0.0625rem solid rgb(255 255 255 / .16); border-radius: 1.25rem; background: linear-gradient(145deg, rgb(31 25 51 / .96), rgb(12 9 24 / .96)); box-shadow: 0 1.5rem 4.375rem rgb(0 0 0 / .6), 0 0 2.25rem color-mix(in srgb, var(--color-accent) 15%, transparent); color: white; animation: _ngcontent-%COMP%_hint-in-out 5.7s ease both; pointer-events: none; }\n.assignment-hint[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child { display: flex; flex-direction: column; gap: .2rem; color: rgb(255 255 255 / .7); font-size: .84rem; line-height: 1.35; }\n.assignment-hint[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: white; font-size: 1rem; }\n.hint-icon[_ngcontent-%COMP%] { flex: 0 0 auto; display: grid; place-items: center; width: 3rem; height: 3rem; border-radius: .9rem; color: white; background: linear-gradient(145deg, var(--color-primary), var(--color-accent)); box-shadow: 0 0 1.25rem color-mix(in srgb, var(--color-primary) 45%, transparent); }\n.hint-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: 1.6rem; height: 1.6rem; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }\n@keyframes _ngcontent-%COMP%_hint-in-out { 0% { opacity: 0; transform: translate(-50%, -44%) scale(.94); } 12%, 82% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 100% { opacity: 0; transform: translate(-50%, -54%) scale(.98); } }\n\n@media (prefers-reduced-motion: reduce) { .assignment-hint[_ngcontent-%COMP%] { animation: none; } .category-row[_ngcontent-%COMP%] { transition: none; } }\n\n@media (max-width: 63.9375rem) {\n  [_nghost-%COMP%]    > div[_ngcontent-%COMP%] { min-height: clamp(18rem, 58dvh, 22rem); }\n}\n\n@media (max-width: 40rem) {\n  [_nghost-%COMP%]    > div[_ngcontent-%COMP%] { min-height: 0; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CategorySlotsComponent, [{
        type: Component,
        args: [{ selector: 'app-category-slots', standalone: true, imports: [CategoryBadgeComponent, CdkDrag, CdkDropList], template: "<div class=\"category-panel glass p-4 xl:p-5 rounded-3xl animate-slide-up h-full flex flex-col\">\n  <h3\n    class=\"text-xl font-black mb-4 flex flex-wrap gap-2 items-center justify-between tracking-wide text-white\"\n  >\n    <span class=\"category-heading\"\n      ><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n        <path d=\"M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z\" /></svg\n      >Categor\u00EDas</span\n    >\n    @if (isAssigning) {\n      <span class=\"assignment-chip\"> ARRASTRA PARA ORDENAR </span>\n    }\n  </h3>\n\n  <div class=\"category-list flex w-full min-h-0 flex-grow flex-col gap-2.5 overflow-y-auto overflow-x-clip pr-1 max-[40rem]:overflow-y-visible\" cdkDropList [cdkDropListData]=\"displaySlots\" [cdkDropListDisabled]=\"!isAssigning\" (cdkDropListDropped)=\"dropWithCdk($event)\">\n    @for (slot of displaySlots; track slot.category.id; let i = $index) {\n      <div\n        class=\"category-row relative group\"\n        [class.is-assigning]=\"isAssigning\"\n        [class.is-dragging]=\"draggedIndex === i\"\n        [class.opacity-40]=\"slot.answered\"\n        [class.grayscale]=\"slot.answered\"\n        cdkDrag\n        [cdkDragDisabled]=\"!isAssigning\"\n        cdkDragLockAxis=\"y\"\n        [attr.tabindex]=\"isAssigning ? 0 : null\"\n        [attr.data-category-index]=\"i\"\n        [attr.aria-label]=\"\n          isAssigning\n            ? slot.category.name +\n              ', ' +\n              slot.pointValue +\n              ' puntos. Arrastra o usa las flechas para intercambiar su puntuaci\u00F3n.'\n            : null\n        \"\n        (cdkDragStarted)=\"startDrag(i)\"\n        (cdkDragEnded)=\"endDrag()\"\n        (keydown)=\"moveWithKeyboard($event, i)\"\n      >\n        <app-category-badge\n          [name]=\"slot.category.name\"\n          [icon]=\"slot.category.icon\"\n          [color]=\"slot.category.color\"\n          [pointValue]=\"slot.pointValue\"\n          [isHighlighted]=\"isCurrentSlot(slot)\"\n          size=\"md\"\n        >\n        </app-category-badge>\n        <!-- Answered Checkmark Shield -->\n        @if (slot.answered) {\n          <div\n            class=\"absolute inset-0 flex items-center justify-center bg-black/45 rounded-2xl z-30 backdrop-blur-[0.125rem]\"\n          >\n            <div\n              class=\"bg-correct/10 border border-correct/30 text-correct px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase flex items-center gap-2 shadow-[0_0_0.9375rem_rgba(104,244,200,0.1)]\"\n            >\n              <span>Resuelto</span>\n              <svg class=\"resolved-check\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n                <path d=\"m5 12.5 4.2 4L19 7\" />\n              </svg>\n            </div>\n          </div>\n        }\n      </div>\n    }\n  </div>\n\n  @if (isAssigning) {\n    <button\n      (click)=\"submitAssignment.emit()\"\n      [disabled]=\"!allAssigned\"\n      class=\"btn-primary w-full flex-none mt-4 text-base font-black py-3 rounded-2xl\"\n    >\n      CONFIRMAR PUNTOS\n    </button>\n  }\n</div>\n\n@if (showAssignmentHint) {\n  <div class=\"assignment-hint\" role=\"status\" aria-live=\"polite\">\n    <span class=\"hint-icon\" aria-hidden=\"true\">\n      <svg viewBox=\"0 0 24 24\">\n        <path\n          d=\"M8 11V7a2 2 0 0 1 4 0v3-5a2 2 0 0 1 4 0v5-3a2 2 0 0 1 4 0v7c0 4-3 7-7 7h-1c-3 0-5-1-7-4l-2-3a2 2 0 0 1 3-2l2 2v-3Z\"\n        />\n      </svg>\n    </span>\n    <span\n      ><strong>Ordena tus categor\u00EDas</strong>Arrastra las tarjetas para colocarlas en los valores 4,\n      3, 2 y 1.</span\n    >\n  </div>\n}\n", styles: [":host { display: block; height: 100%; min-height: 0; }\n:host > div { position: relative; overflow: hidden; border: 0.0625rem solid rgb(191 137 255 / .32); background: radial-gradient(circle at 90% 4%, rgb(0 217 255 / .09), transparent 31%), linear-gradient(155deg, rgb(24 17 53 / .91), rgb(5 7 23 / .88)); box-shadow: 0 1.625rem 3.625rem rgb(0 0 0 / .4), 0 0 1.875rem rgb(123 44 255 / .07), inset 0 0.0625rem 0 rgb(255 255 255 / .11), inset 0 0 2.5rem rgb(123 44 255 / .045); }\n:host > div::after { content: ''; position: absolute; width: 12rem; height: 12rem; right: -5rem; top: -5rem; border-radius: 50%; background: radial-gradient(circle, rgb(0 217 255 / .11), transparent 68%); pointer-events: none; }\n.category-list { scrollbar-width: thin; scrollbar-color: rgb(255 255 255 / .18) transparent; }\n.category-heading { display: inline-flex; align-items: center; gap: .55rem; }\n.category-heading svg { width: 1.3rem; height: 1.3rem; fill: none; stroke: var(--color-accent); stroke-width: 1.8; }\n.resolved-check { width: 1rem; height: 1rem; fill: none; stroke: currentColor; stroke-width: 2.4; stroke-linecap: round; }\n.assignment-chip { padding: .4rem .7rem; border: 0.0625rem solid color-mix(in srgb, var(--color-accent) 30%, transparent); border-radius: 62.4375rem; color: var(--color-accent); background: color-mix(in srgb, var(--color-accent) 12%, transparent); font-size: .65rem; font-weight: 800; letter-spacing: .08em; }\n.category-row { border-radius: 1rem; transition: opacity .2s ease, transform .2s ease, box-shadow .2s ease, filter .2s ease; outline: none; }\n.category-row:hover { filter: brightness(1.08); }\n.category-row::after { content: ''; position: absolute; inset: 0.0625rem; border-radius: inherit; border: 0.0625rem solid rgb(255 255 255 / .045); pointer-events: none; }\n.category-row.is-assigning { cursor: grab; touch-action: none; }\n.category-row.is-assigning:active, .category-row.is-dragging { cursor: grabbing; }\n.category-row.is-assigning:hover, .category-row.is-assigning:focus-visible { transform: translateY(-0.125rem); box-shadow: 0 0.625rem 1.5625rem rgb(0 0 0 / .22); }\n.category-row.is-assigning:focus-visible { outline: 0.125rem solid var(--color-accent); outline-offset: 0.1875rem; }\n.category-row.is-dragging { opacity: .38; transform: scale(.98); }\n.cdk-drag-preview { border-radius: 1rem; box-shadow: 0 1rem 2.5rem rgb(0 0 0 / .48), 0 0 1.5rem color-mix(in srgb, var(--color-accent) 30%, transparent); }\n.cdk-drag-placeholder { opacity: .28; }\n.cdk-drop-list-dragging .category-row:not(.cdk-drag-placeholder) { transition: transform 180ms ease; }\n\n.assignment-hint { position: fixed; z-index: 70; top: 50%; left: 50%; width: min(92vw, 30rem); transform: translate(-50%, -50%); display: flex; align-items: center; gap: 1rem; padding: 1rem 1.15rem; border: 0.0625rem solid rgb(255 255 255 / .16); border-radius: 1.25rem; background: linear-gradient(145deg, rgb(31 25 51 / .96), rgb(12 9 24 / .96)); box-shadow: 0 1.5rem 4.375rem rgb(0 0 0 / .6), 0 0 2.25rem color-mix(in srgb, var(--color-accent) 15%, transparent); color: white; animation: hint-in-out 5.7s ease both; pointer-events: none; }\n.assignment-hint > span:last-child { display: flex; flex-direction: column; gap: .2rem; color: rgb(255 255 255 / .7); font-size: .84rem; line-height: 1.35; }\n.assignment-hint strong { color: white; font-size: 1rem; }\n.hint-icon { flex: 0 0 auto; display: grid; place-items: center; width: 3rem; height: 3rem; border-radius: .9rem; color: white; background: linear-gradient(145deg, var(--color-primary), var(--color-accent)); box-shadow: 0 0 1.25rem color-mix(in srgb, var(--color-primary) 45%, transparent); }\n.hint-icon svg { width: 1.6rem; height: 1.6rem; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }\n@keyframes hint-in-out { 0% { opacity: 0; transform: translate(-50%, -44%) scale(.94); } 12%, 82% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 100% { opacity: 0; transform: translate(-50%, -54%) scale(.98); } }\n\n@media (prefers-reduced-motion: reduce) { .assignment-hint { animation: none; } .category-row { transition: none; } }\n\n@media (max-width: 63.9375rem) {\n  :host > div { min-height: clamp(18rem, 58dvh, 22rem); }\n}\n\n@media (max-width: 40rem) {\n  :host > div { min-height: 0; }\n}\n"] }]
    }], null, { slots: [{
            type: Input,
            args: [{ required: true }]
        }], isAssigning: [{
            type: Input
        }], currentSlotIndex: [{
            type: Input
        }], assignmentChanged: [{
            type: Output
        }], submitAssignment: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CategorySlotsComponent, { className: "CategorySlotsComponent", filePath: "src/app/pages/game/components/category-slots/category-slots.component.ts", lineNumber: 27 }); })();
