import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["boardSurface"];
const _c1 = a0 => [a0];
const _c2 = a0 => ({ "animate-pulse scale-115": a0 });
function BoardComponent_For_17_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 18);
    i0.ɵɵelement(1, "path", 20);
    i0.ɵɵelementEnd();
} }
function BoardComponent_For_17_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_30_r1 = i0.ɵɵnextContext().$index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ɵ$index_30_r1);
} }
function BoardComponent_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵconditionalCreate(1, BoardComponent_For_17_Conditional_1_Template, 2, 0, ":svg:svg", 18);
    i0.ɵɵconditionalCreate(2, BoardComponent_For_17_Conditional_2_Template, 2, 1, "span", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r2 = ctx.$implicit;
    const ɵ$index_30_r1 = ctx.$index;
    i0.ɵɵstyleProp("left", cell_r2.x + "%")("top", cell_r2.y + "%")("transform", "translate(-50%, -50%)");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c1, ɵ$index_30_r1 === 0 ? "track-cell--start w-8 h-8 md:w-11 md:h-11 z-10 hover:scale-110" : ɵ$index_30_r1 % 5 === 0 ? "track-cell--milestone w-9 h-9 md:w-13 md:h-13 hover:scale-110" : "track-cell--normal w-8 h-8 md:w-11 md:h-11 hover:scale-110"));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ɵ$index_30_r1 === 0 ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ɵ$index_30_r1 !== 0 && ɵ$index_30_r1 % 5 === 0 ? 2 : -1);
} }
function BoardComponent_For_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const player_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", player_r3.color)("left", ctx_r3.getPawnPosition(player_r3.boardPosition, player_r3.playerId).x + "%")("top", ctx_r3.getPawnPosition(player_r3.boardPosition, player_r3.playerId).y + "%")("transform", "translate(-50%, -50%)")("box-shadow", "0 0 20px " + player_r3.color + ", inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.3)");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c2, player_r3.playerId === ctx_r3.currentTurnPlayerId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", player_r3.username.charAt(0).toUpperCase(), " ");
} }
export class BoardComponent {
    players;
    currentTurnPlayerId;
    boardSurface;
    totalCells = 30;
    trackWidth = 4;
    trackHeight = 3;
    resizeObserver;
    // Generate 30 equally spaced cells around the board perimeter.
    cells = Array.from({ length: 30 }).map((_, i) => this.calculateCellCoordinates(i));
    ngAfterViewInit() {
        if (!this.boardSurface || typeof ResizeObserver === 'undefined')
            return;
        this.resizeObserver = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            if (width <= 0 || height <= 0)
                return;
            this.trackWidth = width;
            this.trackHeight = height;
            this.cells = Array.from({ length: this.totalCells }, (_, index) => this.calculateCellCoordinates(index));
        });
        this.resizeObserver.observe(this.boardSurface.nativeElement);
    }
    ngOnDestroy() {
        this.resizeObserver?.disconnect();
    }
    // Keeps one cell on every corner, then divides the remaining cells between
    // horizontal and vertical sides in proportion to the actual board shape.
    calculateCellCoordinates(index) {
        const insetRatio = 0.09;
        const left = this.trackWidth * insetRatio;
        const top = this.trackHeight * insetRatio;
        const width = this.trackWidth * (1 - insetRatio * 2);
        const height = this.trackHeight * (1 - insetRatio * 2);
        // Opposite sides use the same number of intervals. Their sum is 15 because
        // the complete path has 30 intervals; the split follows the board ratio.
        const horizontalSegments = Math.min(14, Math.max(1, Math.round((this.totalCells / 2) * (width / (width + height)))));
        const verticalSegments = (this.totalCells / 2) - horizontalSegments;
        const topRight = horizontalSegments;
        const bottomRight = topRight + verticalSegments;
        const bottomLeft = bottomRight + horizontalSegments;
        let x = left;
        let y = top;
        if (index <= topRight) {
            x += (index / horizontalSegments) * width;
        }
        else if (index <= bottomRight) {
            x += width;
            y += ((index - topRight) / verticalSegments) * height;
        }
        else if (index <= bottomLeft) {
            x += width - ((index - bottomRight) / horizontalSegments) * width;
            y += height;
        }
        else {
            y += height - ((index - bottomLeft) / verticalSegments) * height;
        }
        return { x: (x / this.trackWidth) * 100, y: (y / this.trackHeight) * 100 };
    }
    // Adds a slight offset so pawns on the same cell don't completely overlap
    getPawnPosition(boardPosition, playerId) {
        // Normalize position to board size
        const pos = boardPosition % 30;
        const baseCoord = this.calculateCellCoordinates(pos);
        // Generate a deterministic offset based on playerId to avoid overlapping
        let hash = 0;
        for (let i = 0; i < playerId.length; i++) {
            hash = playerId.charCodeAt(i) + ((hash << 5) - hash);
        }
        // Offset between -2% and +2%
        const offsetX = (hash % 100) / 50 - 1;
        const offsetY = ((hash >> 8) % 100) / 50 - 1;
        return {
            x: baseCoord.x + offsetX * 2,
            y: baseCoord.y + offsetY * 2
        };
    }
    static ɵfac = function BoardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BoardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BoardComponent, selectors: [["app-board"]], viewQuery: function BoardComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.boardSurface = _t.first);
        } }, inputs: { players: "players", currentTurnPlayerId: "currentTurnPlayerId" }, decls: 20, vars: 0, consts: [["boardSurface", ""], [1, "board-surface", "relative", "w-full", "max-w-4xl", "mx-auto", "aspect-square", "sm:aspect-[4/3]", "lg:aspect-auto", "lg:h-full", "lg:max-h-[720px]", "rounded-[1.75rem]", "sm:rounded-[2.5rem]", "p-3", "md:p-7"], ["aria-hidden", "true", 1, "board-grid", "absolute", "inset-0", "rounded-[inherit]", "pointer-events-none"], ["aria-hidden", "true", 1, "board-aura"], [1, "board-core", "absolute", "inset-0", "m-auto", "rounded-full", "flex", "flex-col", "items-center", "justify-center", "pointer-events-none"], [1, "core-orbit", "core-orbit--outer"], [1, "core-orbit", "core-orbit--inner"], [1, "core-orbit", "core-orbit--dotted"], ["viewBox", "0 0 64 64", "fill", "none", "aria-hidden", "true", 1, "core-hexagon"], ["d", "M32 6 53 18v28L32 58 11 46V18L32 6Z"], ["viewBox", "0 0 48 48", "fill", "none", "aria-label", "Bezzerwizzer", 1, "core-mark", "mb-1", "h-8", "w-8", "md:h-10", "md:w-10"], ["d", "M12 10h17c6 0 10 3 10 8 0 4-2 6-6 7 5 1 7 4 7 8 0 6-5 9-12 9H12V10Z"], ["d", "M20 18h8c2 0 3 1 3 3s-1 3-3 3h-8v-6Zm0 13h9c2 0 3 1 3 3s-1 3-3 3h-9v-6Z", "fill", "var(--color-primary-light)"], [1, "board-core__title", "font-black", "font-display", "tracking-tighter", "text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-primary-light", "to-accent"], [1, "relative", "w-full", "h-full", "z-10"], [1, "track-cell", "absolute", "flex", "items-center", "justify-center", "rounded-full", "border", "transition-all", "duration-300", "shadow-md", "cursor-help", 3, "ngClass", "left", "top", "transform"], [1, "absolute", "w-7", "h-7", "md:w-10", "md:h-10", "rounded-full", "shadow-2xl", "border-2", "border-white", "transition-all", "duration-700", "ease-in-out", "z-20", "flex", "items-center", "justify-center", "font-black", "text-sm", "text-white", 3, "ngClass", "backgroundColor", "left", "top", "transform", "boxShadow"], [1, "track-cell", "absolute", "flex", "items-center", "justify-center", "rounded-full", "border", "transition-all", "duration-300", "shadow-md", "cursor-help", 3, "ngClass"], ["viewBox", "0 0 24 24", "role", "img", "aria-label", "Inicio", 1, "start-icon"], [1, "text-[0.65rem]", "md:text-xs", "font-black"], ["d", "M6 21V4m0 1c3-2 6 2 12 0v9c-6 2-9-2-12 0"], [1, "absolute", "w-7", "h-7", "md:w-10", "md:h-10", "rounded-full", "shadow-2xl", "border-2", "border-white", "transition-all", "duration-700", "ease-in-out", "z-20", "flex", "items-center", "justify-center", "font-black", "text-sm", "text-white", 3, "ngClass"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1, 0);
            i0.ɵɵelement(2, "div", 2)(3, "div", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵelement(5, "div", 5)(6, "div", 6)(7, "div", 7);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(8, "svg", 8);
            i0.ɵɵelement(9, "path", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "svg", 10);
            i0.ɵɵelement(11, "path", 11)(12, "path", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(13, "span", 13);
            i0.ɵɵtext(14, "BEZZER");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 14);
            i0.ɵɵrepeaterCreate(16, BoardComponent_For_17_Template, 3, 11, "div", 15, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵrepeaterCreate(18, BoardComponent_For_19_Template, 2, 14, "div", 16, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(16);
            i0.ɵɵrepeater(ctx.cells);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.players);
        } }, dependencies: [CommonModule, i1.NgClass], styles: ["[_nghost-%COMP%] { display: block; width: 100%; height: 100%; }\n.board-surface[_ngcontent-%COMP%] { isolation: isolate; overflow: visible; border: 1px solid rgb(178 126 255 / .38); background: radial-gradient(circle at 20% 100%, rgb(0 110 255 / .15), transparent 31%), radial-gradient(circle at 85% 3%, rgb(255 25 200 / .13), transparent 28%), linear-gradient(145deg, rgb(13 16 42 / .95), rgb(4 5 18 / .96)); box-shadow: 0 30px 76px rgb(0 0 0 / .56), 0 0 0 1px rgb(255 255 255 / .05) inset, 0 0 54px rgb(123 44 255 / .16), inset 0 0 80px rgb(0 0 0 / .58); }\n.board-surface[_ngcontent-%COMP%]::before { content: ''; position: absolute; inset: 1px; z-index: -1; border-radius: inherit; background: linear-gradient(125deg, rgb(255 255 255 / .11), transparent 16% 80%, rgb(0 217 255 / .11)); pointer-events: none; }\n.board-aura[_ngcontent-%COMP%] { position: absolute; z-index: -2; inset: 10%; border-radius: 45%; background: radial-gradient(circle, rgb(123 44 255 / .34), rgb(255 25 200 / .10) 36%, transparent 68%); filter: blur(28px); animation: _ngcontent-%COMP%_aura-breathe 5s ease-in-out infinite; }\n.board-core[_ngcontent-%COMP%] { z-index: 2; width: clamp(7.25rem, 28%, 11rem); height: clamp(7.25rem, 28%, 11rem); background: radial-gradient(circle, rgb(44 22 98 / .93), rgb(9 8 30 / .9) 61%, rgb(123 44 255 / .24) 100%); border: 1px solid rgb(197 130 255 / .62); box-shadow: 0 0 0 8px rgb(123 44 255 / .05), 0 0 30px rgb(123 44 255 / .45), 0 0 55px rgb(255 25 200 / .16), inset 0 0 22px rgb(255 255 255 / .08); animation: _ngcontent-%COMP%_core-pulse 4s ease-in-out infinite; }\n.board-core__title[_ngcontent-%COMP%] { font-size: clamp(1.2rem, 3vw, 2rem); line-height: 1; }\n.core-hexagon[_ngcontent-%COMP%] { position: absolute; width: 72%; height: 72%; stroke: var(--color-primary-light); stroke-width: 1.6; opacity: .6; filter: drop-shadow(0 0 8px oklch(0.72 0.2 285 / .35)); }\n.core-mark[_ngcontent-%COMP%] { position: relative; z-index: 1; stroke: var(--color-primary-light); stroke-width: 3.2; stroke-linejoin: round; filter: drop-shadow(0 0 8px oklch(0.72 0.2 285 / .5)); }\n.core-orbit[_ngcontent-%COMP%] { position: absolute; border-radius: 50%; pointer-events: none; }\n.core-orbit--outer[_ngcontent-%COMP%] { inset: -17%; border: 1px solid rgb(194 119 255 / .34); box-shadow: 0 0 12px rgb(123 44 255 / .19); animation: _ngcontent-%COMP%_ring-rotation 52s linear infinite; }\n.core-orbit--inner[_ngcontent-%COMP%] { inset: 11%; border: 1px solid rgb(0 217 255 / .25); transform: rotate(40deg); animation: _ngcontent-%COMP%_ring-rotation 35s linear infinite reverse; }\n.core-orbit--dotted[_ngcontent-%COMP%] { inset: -6%; border: 1px dashed rgb(255 25 200 / .32); animation: _ngcontent-%COMP%_ring-rotation 70s linear infinite; }\n\n.board-grid[_ngcontent-%COMP%] {\n  opacity: 0.34;\n  background-image:\n    linear-gradient(rgb(255 255 255 / 0.035) 1px, transparent 1px),\n    linear-gradient(90deg, rgb(255 255 255 / 0.035) 1px, transparent 1px);\n  background-size: 30px 30px;\n  mask-image: radial-gradient(circle, black 15%, transparent 76%);\n}\n\n.track-cell[_ngcontent-%COMP%] { overflow: visible; }\n.track-cell--normal[_ngcontent-%COMP%] { border-color: rgb(186 126 255 / .37); background: radial-gradient(circle at 35% 28%, rgb(96 65 143 / .48), rgb(13 12 32 / .94) 65%); box-shadow: inset 0 1px 1px rgb(255 255 255 / .10), inset 0 -6px 12px rgb(0 0 0 / .35), 0 3px 10px rgb(0 0 0 / .25); }\n.track-cell--normal[_ngcontent-%COMP%]:hover { border-color: rgb(223 158 255 / .85); box-shadow: 0 0 16px rgb(123 44 255 / .28), inset 0 1px 1px rgb(255 255 255 / .15); }\n.track-cell--milestone[_ngcontent-%COMP%] { border-color: rgb(0 217 255 / .75); color: #64efff; background: radial-gradient(circle, rgb(0 217 255 / .18), rgb(5 19 40 / .95) 68%); box-shadow: 0 0 15px rgb(0 217 255 / .28), inset 0 0 12px rgb(0 217 255 / .13); animation: _ngcontent-%COMP%_milestone-pulse 3.4s ease-in-out infinite; }\n.track-cell--milestone[_ngcontent-%COMP%]::before { content: ''; position: absolute; inset: -5px; border: 1px solid rgb(0 217 255 / .26); border-radius: inherit; box-shadow: 0 0 15px rgb(0 217 255 / .10); }\n.track-cell--start[_ngcontent-%COMP%] { border-color: rgb(255 255 255 / .65); background: linear-gradient(135deg, #7b2cff, #ff19c8); box-shadow: 0 0 22px rgb(255 25 200 / .52), inset 0 1px 2px rgb(255 255 255 / .32); }\n\n@keyframes _ngcontent-%COMP%_ring-rotation { to { transform: rotate(360deg); } }\n@keyframes _ngcontent-%COMP%_aura-breathe { 0%, 100% { opacity: .56; transform: scale(.95); } 50% { opacity: 1; transform: scale(1.07); } }\n@keyframes _ngcontent-%COMP%_core-pulse { 0%, 100% { box-shadow: 0 0 0 8px rgb(123 44 255 / .05), 0 0 30px rgb(123 44 255 / .45), 0 0 55px rgb(255 25 200 / .16), inset 0 0 22px rgb(255 255 255 / .08); } 50% { box-shadow: 0 0 0 12px rgb(123 44 255 / .08), 0 0 40px rgb(123 44 255 / .58), 0 0 68px rgb(255 25 200 / .25), inset 0 0 25px rgb(255 255 255 / .12); } }\n@keyframes _ngcontent-%COMP%_milestone-pulse { 0%, 100% { filter: brightness(.92); } 50% { filter: brightness(1.25); } }\n\n.start-icon[_ngcontent-%COMP%] { width: 62%; height: 62%; fill: none; stroke: white; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; filter: drop-shadow(0 1px 2px rgb(0 0 0 / .3)); }\n\n@media (min-width: 1024px) {\n  [_nghost-%COMP%]    > div[_ngcontent-%COMP%] { transform: rotateX(1.2deg); transition: transform 500ms ease; }\n  [_nghost-%COMP%]    > div[_ngcontent-%COMP%]:hover { transform: rotateX(0); }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  [_nghost-%COMP%]    > div[_ngcontent-%COMP%] { transform: none; transition: none; }\n  .board-aura[_ngcontent-%COMP%], .board-core[_ngcontent-%COMP%], .core-orbit[_ngcontent-%COMP%], .track-cell--milestone[_ngcontent-%COMP%] { animation: none; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BoardComponent, [{
        type: Component,
        args: [{ selector: 'app-board', standalone: true, imports: [CommonModule], template: "<div\n  #boardSurface\n  class=\"board-surface relative w-full max-w-4xl mx-auto aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:max-h-[720px] rounded-[1.75rem] sm:rounded-[2.5rem] p-3 md:p-7\"\n>\n  <div\n    class=\"board-grid absolute inset-0 rounded-[inherit] pointer-events-none\"\n    aria-hidden=\"true\"\n  ></div>\n\n  <!-- Central sci-fi reactor core / decoration -->\n  <div class=\"board-aura\" aria-hidden=\"true\"></div>\n  <div class=\"board-core absolute inset-0 m-auto rounded-full flex flex-col items-center justify-center pointer-events-none\">\n    <div class=\"core-orbit core-orbit--outer\"></div>\n    <div class=\"core-orbit core-orbit--inner\"></div>\n    <div class=\"core-orbit core-orbit--dotted\"></div>\n    <svg class=\"core-hexagon\" viewBox=\"0 0 64 64\" fill=\"none\" aria-hidden=\"true\">\n      <path d=\"M32 6 53 18v28L32 58 11 46V18L32 6Z\" />\n    </svg>\n    <svg viewBox=\"0 0 48 48\" class=\"core-mark mb-1 h-8 w-8 md:h-10 md:w-10\" fill=\"none\" aria-label=\"Bezzerwizzer\">\n      <path d=\"M12 10h17c6 0 10 3 10 8 0 4-2 6-6 7 5 1 7 4 7 8 0 6-5 9-12 9H12V10Z\" />\n      <path d=\"M20 18h8c2 0 3 1 3 3s-1 3-3 3h-8v-6Zm0 13h9c2 0 3 1 3 3s-1 3-3 3h-9v-6Z\" fill=\"var(--color-primary-light)\" />\n    </svg>\n    <span\n      class=\"board-core__title font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent\"\n      >BEZZER</span\n    >\n  </div>\n\n  <!-- The Track -->\n  <div class=\"relative w-full h-full z-10\">\n    @for (cell of cells; track cell; let i = $index) {\n      <div\n        class=\"track-cell absolute flex items-center justify-center rounded-full border transition-all duration-300 shadow-md cursor-help\"\n        [ngClass]=\"[\n          i === 0\n            ? 'track-cell--start w-8 h-8 md:w-11 md:h-11 z-10 hover:scale-110'\n            : i % 5 === 0\n              ? 'track-cell--milestone w-9 h-9 md:w-13 md:h-13 hover:scale-110'\n              : 'track-cell--normal w-8 h-8 md:w-11 md:h-11 hover:scale-110',\n        ]\"\n        [style.left]=\"cell.x + '%'\"\n        [style.top]=\"cell.y + '%'\"\n        [style.transform]=\"'translate(-50%, -50%)'\"\n      >\n        @if (i === 0) {\n          <svg class=\"start-icon\" viewBox=\"0 0 24 24\" role=\"img\" aria-label=\"Inicio\">\n            <path d=\"M6 21V4m0 1c3-2 6 2 12 0v9c-6 2-9-2-12 0\" />\n          </svg>\n        }\n        @if (i !== 0 && i % 5 === 0) {\n          <span class=\"text-[0.65rem] md:text-xs font-black\">{{ i }}</span>\n        }\n      </div>\n    }\n\n    <!-- Player Pawns -->\n    @for (player of players; track player) {\n      <div\n        class=\"absolute w-7 h-7 md:w-10 md:h-10 rounded-full shadow-2xl border-2 border-white transition-all duration-700 ease-in-out z-20 flex items-center justify-center font-black text-sm text-white\"\n        [ngClass]=\"{ 'animate-pulse scale-115': player.playerId === currentTurnPlayerId }\"\n        [style.backgroundColor]=\"player.color\"\n        [style.left]=\"getPawnPosition(player.boardPosition, player.playerId).x + '%'\"\n        [style.top]=\"getPawnPosition(player.boardPosition, player.playerId).y + '%'\"\n        [style.transform]=\"'translate(-50%, -50%)'\"\n        [style.boxShadow]=\"\n          '0 0 20px ' +\n          player.color +\n          ', inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.3)'\n        \"\n      >\n        {{ player.username.charAt(0).toUpperCase() }}\n      </div>\n    }\n  </div>\n</div>\n", styles: [":host { display: block; width: 100%; height: 100%; }\n.board-surface { isolation: isolate; overflow: visible; border: 1px solid rgb(178 126 255 / .38); background: radial-gradient(circle at 20% 100%, rgb(0 110 255 / .15), transparent 31%), radial-gradient(circle at 85% 3%, rgb(255 25 200 / .13), transparent 28%), linear-gradient(145deg, rgb(13 16 42 / .95), rgb(4 5 18 / .96)); box-shadow: 0 30px 76px rgb(0 0 0 / .56), 0 0 0 1px rgb(255 255 255 / .05) inset, 0 0 54px rgb(123 44 255 / .16), inset 0 0 80px rgb(0 0 0 / .58); }\n.board-surface::before { content: ''; position: absolute; inset: 1px; z-index: -1; border-radius: inherit; background: linear-gradient(125deg, rgb(255 255 255 / .11), transparent 16% 80%, rgb(0 217 255 / .11)); pointer-events: none; }\n.board-aura { position: absolute; z-index: -2; inset: 10%; border-radius: 45%; background: radial-gradient(circle, rgb(123 44 255 / .34), rgb(255 25 200 / .10) 36%, transparent 68%); filter: blur(28px); animation: aura-breathe 5s ease-in-out infinite; }\n.board-core { z-index: 2; width: clamp(7.25rem, 28%, 11rem); height: clamp(7.25rem, 28%, 11rem); background: radial-gradient(circle, rgb(44 22 98 / .93), rgb(9 8 30 / .9) 61%, rgb(123 44 255 / .24) 100%); border: 1px solid rgb(197 130 255 / .62); box-shadow: 0 0 0 8px rgb(123 44 255 / .05), 0 0 30px rgb(123 44 255 / .45), 0 0 55px rgb(255 25 200 / .16), inset 0 0 22px rgb(255 255 255 / .08); animation: core-pulse 4s ease-in-out infinite; }\n.board-core__title { font-size: clamp(1.2rem, 3vw, 2rem); line-height: 1; }\n.core-hexagon { position: absolute; width: 72%; height: 72%; stroke: var(--color-primary-light); stroke-width: 1.6; opacity: .6; filter: drop-shadow(0 0 8px oklch(0.72 0.2 285 / .35)); }\n.core-mark { position: relative; z-index: 1; stroke: var(--color-primary-light); stroke-width: 3.2; stroke-linejoin: round; filter: drop-shadow(0 0 8px oklch(0.72 0.2 285 / .5)); }\n.core-orbit { position: absolute; border-radius: 50%; pointer-events: none; }\n.core-orbit--outer { inset: -17%; border: 1px solid rgb(194 119 255 / .34); box-shadow: 0 0 12px rgb(123 44 255 / .19); animation: ring-rotation 52s linear infinite; }\n.core-orbit--inner { inset: 11%; border: 1px solid rgb(0 217 255 / .25); transform: rotate(40deg); animation: ring-rotation 35s linear infinite reverse; }\n.core-orbit--dotted { inset: -6%; border: 1px dashed rgb(255 25 200 / .32); animation: ring-rotation 70s linear infinite; }\n\n.board-grid {\n  opacity: 0.34;\n  background-image:\n    linear-gradient(rgb(255 255 255 / 0.035) 1px, transparent 1px),\n    linear-gradient(90deg, rgb(255 255 255 / 0.035) 1px, transparent 1px);\n  background-size: 30px 30px;\n  mask-image: radial-gradient(circle, black 15%, transparent 76%);\n}\n\n.track-cell { overflow: visible; }\n.track-cell--normal { border-color: rgb(186 126 255 / .37); background: radial-gradient(circle at 35% 28%, rgb(96 65 143 / .48), rgb(13 12 32 / .94) 65%); box-shadow: inset 0 1px 1px rgb(255 255 255 / .10), inset 0 -6px 12px rgb(0 0 0 / .35), 0 3px 10px rgb(0 0 0 / .25); }\n.track-cell--normal:hover { border-color: rgb(223 158 255 / .85); box-shadow: 0 0 16px rgb(123 44 255 / .28), inset 0 1px 1px rgb(255 255 255 / .15); }\n.track-cell--milestone { border-color: rgb(0 217 255 / .75); color: #64efff; background: radial-gradient(circle, rgb(0 217 255 / .18), rgb(5 19 40 / .95) 68%); box-shadow: 0 0 15px rgb(0 217 255 / .28), inset 0 0 12px rgb(0 217 255 / .13); animation: milestone-pulse 3.4s ease-in-out infinite; }\n.track-cell--milestone::before { content: ''; position: absolute; inset: -5px; border: 1px solid rgb(0 217 255 / .26); border-radius: inherit; box-shadow: 0 0 15px rgb(0 217 255 / .10); }\n.track-cell--start { border-color: rgb(255 255 255 / .65); background: linear-gradient(135deg, #7b2cff, #ff19c8); box-shadow: 0 0 22px rgb(255 25 200 / .52), inset 0 1px 2px rgb(255 255 255 / .32); }\n\n@keyframes ring-rotation { to { transform: rotate(360deg); } }\n@keyframes aura-breathe { 0%, 100% { opacity: .56; transform: scale(.95); } 50% { opacity: 1; transform: scale(1.07); } }\n@keyframes core-pulse { 0%, 100% { box-shadow: 0 0 0 8px rgb(123 44 255 / .05), 0 0 30px rgb(123 44 255 / .45), 0 0 55px rgb(255 25 200 / .16), inset 0 0 22px rgb(255 255 255 / .08); } 50% { box-shadow: 0 0 0 12px rgb(123 44 255 / .08), 0 0 40px rgb(123 44 255 / .58), 0 0 68px rgb(255 25 200 / .25), inset 0 0 25px rgb(255 255 255 / .12); } }\n@keyframes milestone-pulse { 0%, 100% { filter: brightness(.92); } 50% { filter: brightness(1.25); } }\n\n.start-icon { width: 62%; height: 62%; fill: none; stroke: white; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; filter: drop-shadow(0 1px 2px rgb(0 0 0 / .3)); }\n\n@media (min-width: 1024px) {\n  :host > div { transform: rotateX(1.2deg); transition: transform 500ms ease; }\n  :host > div:hover { transform: rotateX(0); }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  :host > div { transform: none; transition: none; }\n  .board-aura, .board-core, .core-orbit, .track-cell--milestone { animation: none; }\n}\n"] }]
    }], null, { players: [{
            type: Input,
            args: [{ required: true }]
        }], currentTurnPlayerId: [{
            type: Input
        }], boardSurface: [{
            type: ViewChild,
            args: ['boardSurface']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BoardComponent, { className: "BoardComponent", filePath: "src/app/pages/game/components/board/board.component.ts", lineNumber: 12 }); })();
