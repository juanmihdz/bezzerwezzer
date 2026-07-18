import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["track"];
const _c1 = a0 => [a0];
const _c2 = a0 => ({ "animate-pulse scale-115": a0 });
const _forTrack0 = ($index, $item) => $item.playerId;
function BoardComponent_For_16_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 17);
    i0.ɵɵelement(1, "path", 19);
    i0.ɵɵelementEnd();
} }
function BoardComponent_For_16_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_28_r1 = i0.ɵɵnextContext().$index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ɵ$index_28_r1);
} }
function BoardComponent_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵconditionalCreate(1, BoardComponent_For_16_Conditional_1_Template, 2, 0, ":svg:svg", 17);
    i0.ɵɵconditionalCreate(2, BoardComponent_For_16_Conditional_2_Template, 2, 1, "span", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r2 = ctx.$implicit;
    const ɵ$index_28_r1 = ctx.$index;
    i0.ɵɵstyleProp("left", cell_r2.x + "%")("top", cell_r2.y + "%")("transform", "translate(-50%, -50%)");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c1, ɵ$index_28_r1 === 0 ? "track-cell--start track-cell--goal w-10 h-10 md:w-14 md:h-14 z-10 hover:scale-110" : ɵ$index_28_r1 % 5 === 0 ? "track-cell--milestone w-9 h-9 md:w-13 md:h-13 hover:scale-110" : "track-cell--normal w-8 h-8 md:w-11 md:h-11 hover:scale-110"));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ɵ$index_28_r1 === 0 ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ɵ$index_28_r1 !== 0 && ɵ$index_28_r1 % 5 === 0 ? 2 : -1);
} }
function BoardComponent_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const player_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    const pawnPosition_r5 = ctx_r3.getPawnPosition(player_r3);
    i0.ɵɵstyleProp("background-color", player_r3.color)("left", pawnPosition_r5.x + "%")("top", pawnPosition_r5.y + "%")("transform", "translate(-50%, -50%) translate(" + pawnPosition_r5.offsetX + "px, " + pawnPosition_r5.offsetY + "px)")("box-shadow", "0 0 1.25rem " + player_r3.color + ", inset 0 0.125rem 0.25rem rgba(255,255,255,0.4), inset 0 -0.125rem 0.25rem rgba(0,0,0,0.3)");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c2, player_r3.playerId === ctx_r3.currentTurnPlayerId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", player_r3.username.charAt(0).toUpperCase(), " ");
} }
export class BoardComponent {
    players;
    currentTurnPlayerId;
    winningPosition = 30;
    track;
    totalCells = 30;
    trackWidth = 4;
    trackHeight = 3;
    resizeObserver;
    // The final score uses the physical start cell as its goal, so a board
    // configured to 30 has 30 visible cells (positions 0 through 29).
    cells = Array.from({ length: this.totalCells }, (_, index) => this.calculateCellCoordinates(index));
    ngOnChanges(changes) {
        if (changes['winningPosition']) {
            this.totalCells = this.normalizedWinningPosition();
            this.updateCells();
        }
    }
    ngAfterViewInit() {
        if (!this.track || typeof ResizeObserver === 'undefined')
            return;
        this.resizeObserver = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            if (width <= 0 || height <= 0)
                return;
            this.trackWidth = width;
            this.trackHeight = height;
            this.updateCells();
        });
        this.resizeObserver.observe(this.track.nativeElement);
    }
    ngOnDestroy() {
        this.resizeObserver?.disconnect();
    }
    // Places positions at equal distances around a rounded rectangle. Using
    // curved corners avoids the visually uneven diagonal jump that appears
    // when a cell moves directly from a horizontal edge to a vertical one.
    calculateCellCoordinates(index) {
        const insetRatio = 0.09;
        const left = this.trackWidth * insetRatio;
        const top = this.trackHeight * insetRatio;
        const width = this.trackWidth * (1 - insetRatio * 2);
        const height = this.trackHeight * (1 - insetRatio * 2);
        const cornerRadius = Math.min(width, height) * 0.1;
        const horizontal = width - cornerRadius * 2;
        const vertical = height - cornerRadius * 2;
        const cornerArc = (Math.PI * cornerRadius) / 2;
        const perimeter = 2 * (horizontal + vertical) + 4 * cornerArc;
        let distance = (index / this.totalCells) * perimeter;
        let x = left + cornerRadius;
        let y = top;
        if (distance <= horizontal) {
            x += distance;
        }
        else if ((distance -= horizontal) <= cornerArc) {
            const angle = -Math.PI / 2 + distance / cornerRadius;
            x = left + width - cornerRadius + Math.cos(angle) * cornerRadius;
            y = top + cornerRadius + Math.sin(angle) * cornerRadius;
        }
        else if ((distance -= cornerArc) <= vertical) {
            x = left + width;
            y = top + cornerRadius + distance;
        }
        else if ((distance -= vertical) <= cornerArc) {
            const angle = distance / cornerRadius;
            x = left + width - cornerRadius + Math.cos(angle) * cornerRadius;
            y = top + height - cornerRadius + Math.sin(angle) * cornerRadius;
        }
        else if ((distance -= cornerArc) <= horizontal) {
            x = left + width - cornerRadius - distance;
            y = top + height;
        }
        else if ((distance -= horizontal) <= cornerArc) {
            const angle = Math.PI / 2 + distance / cornerRadius;
            x = left + cornerRadius + Math.cos(angle) * cornerRadius;
            y = top + height - cornerRadius + Math.sin(angle) * cornerRadius;
        }
        else if ((distance -= cornerArc) <= vertical) {
            x = left;
            y = top + height - cornerRadius - distance;
        }
        else {
            distance -= vertical;
            const angle = Math.PI + distance / cornerRadius;
            x = left + cornerRadius + Math.cos(angle) * cornerRadius;
            y = top + cornerRadius + Math.sin(angle) * cornerRadius;
        }
        return { x: (x / this.trackWidth) * 100, y: (y / this.trackHeight) * 100 };
    }
    // Pawns use the same coordinate system as the cells. Only occupants of the
    // same cell receive a small pixel offset, so a lone pawn stays centered.
    getPawnPosition(player) {
        const pos = this.normalizePosition(player.boardPosition);
        const baseCoord = this.calculateCellCoordinates(pos);
        const occupants = this.players
            .filter(candidate => this.normalizePosition(candidate.boardPosition) === pos)
            .sort((first, second) => first.playerId.localeCompare(second.playerId));
        const occupantIndex = occupants.findIndex(candidate => candidate.playerId === player.playerId);
        const count = occupants.length;
        if (count <= 1) {
            return { ...baseCoord, offsetX: 0, offsetY: 0 };
        }
        const angle = -Math.PI / 2 + (Math.PI * 2 * occupantIndex) / count;
        const radius = count === 2 ? 8 : 10;
        return {
            ...baseCoord,
            offsetX: Math.cos(angle) * radius,
            offsetY: Math.sin(angle) * radius
        };
    }
    normalizePosition(position) {
        const normalized = Math.max(0, Math.floor(position || 0));
        // Reaching the configured target returns to the physical start/goal cell.
        return normalized >= this.normalizedWinningPosition() ? 0 : normalized;
    }
    normalizedWinningPosition() {
        return Math.min(30, Math.max(10, Math.floor(this.winningPosition || 30)));
    }
    updateCells() {
        this.cells = Array.from({ length: this.totalCells }, (_, index) => this.calculateCellCoordinates(index));
    }
    static ɵfac = function BoardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BoardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BoardComponent, selectors: [["app-board"]], viewQuery: function BoardComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.track = _t.first);
        } }, inputs: { players: "players", currentTurnPlayerId: "currentTurnPlayerId", winningPosition: "winningPosition" }, features: [i0.ɵɵNgOnChangesFeature], decls: 19, vars: 0, consts: [["track", ""], [1, "board-surface", "relative", "w-full", "max-w-4xl", "mx-auto", "aspect-square", "sm:aspect-[4/3]", "lg:w-[min(100%,calc((100dvh-10rem)*4/3))]", "lg:h-auto", "lg:aspect-[4/3]", "rounded-[1.75rem]", "sm:rounded-[2.5rem]", "p-3", "md:p-7"], ["aria-hidden", "true", 1, "board-grid", "absolute", "inset-0", "rounded-[inherit]", "pointer-events-none"], ["aria-hidden", "true", 1, "board-aura"], ["aria-hidden", "true", 1, "board-energy-node", "board-energy-node--one"], ["aria-hidden", "true", 1, "board-energy-node", "board-energy-node--two"], ["aria-hidden", "true", 1, "board-energy-node", "board-energy-node--three"], [1, "board-core", "pointer-events-none", "absolute", "inset-0", "m-auto", "flex", "aspect-square", "h-auto", "w-[clamp(9.25rem,30%,13.5rem)]", "flex-none", "flex-col", "items-center", "justify-center", "rounded-full", "max-[40rem]:w-[clamp(7.4rem,30%,9rem)]"], [1, "core-orbit", "core-orbit--outer"], [1, "core-orbit", "core-orbit--inner"], [1, "core-orbit", "core-orbit--dotted"], [1, "core-orbit", "core-orbit--ticks"], [1, "board-core__title", "font-black", "font-display", "tracking-tighter", "text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-primary-light", "to-accent"], [1, "relative", "w-full", "h-full", "z-10"], [1, "track-cell", "absolute", "flex", "items-center", "justify-center", "rounded-full", "border", "transition-all", "duration-300", "shadow-md", "cursor-help", 3, "ngClass", "left", "top", "transform"], [1, "absolute", "w-7", "h-7", "md:w-10", "md:h-10", "rounded-full", "shadow-2xl", "border-2", "border-white", "transition-all", "duration-700", "ease-in-out", "z-20", "flex", "items-center", "justify-center", "font-black", "text-sm", "text-white", 3, "ngClass", "backgroundColor", "left", "top", "transform", "boxShadow"], [1, "track-cell", "absolute", "flex", "items-center", "justify-center", "rounded-full", "border", "transition-all", "duration-300", "shadow-md", "cursor-help", 3, "ngClass"], ["viewBox", "0 0 24 24", "role", "img", "aria-label", "Salida y meta", 1, "start-icon"], [1, "text-[0.65rem]", "md:text-xs", "font-black"], ["d", "M6 21V4m0 1c3-2 6 2 12 0v9c-6 2-9-2-12 0"], [1, "absolute", "w-7", "h-7", "md:w-10", "md:h-10", "rounded-full", "shadow-2xl", "border-2", "border-white", "transition-all", "duration-700", "ease-in-out", "z-20", "flex", "items-center", "justify-center", "font-black", "text-sm", "text-white", 3, "ngClass"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelement(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
            i0.ɵɵelementStart(6, "div", 7);
            i0.ɵɵelement(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "div", 11);
            i0.ɵɵelementStart(11, "span", 12);
            i0.ɵɵtext(12, "BEZZER");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 13, 0);
            i0.ɵɵrepeaterCreate(15, BoardComponent_For_16_Template, 3, 11, "div", 14, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵrepeaterCreate(17, BoardComponent_For_18_Template, 2, 14, "div", 15, _forTrack0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵrepeater(ctx.cells);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.players);
        } }, dependencies: [CommonModule, i1.NgClass], styles: ["[_nghost-%COMP%] { display: block; width: 100%; height: 100%; filter: drop-shadow(0 1.875rem 2.875rem rgb(0 0 0 / .4)); }\n.board-surface[_ngcontent-%COMP%] { isolation: isolate; overflow: visible; border: 0.0625rem solid rgb(178 126 255 / .46); background: radial-gradient(circle at 13% 93%, rgb(0 111 255 / .19), transparent 29%), radial-gradient(circle at 88% 5%, rgb(255 25 200 / .16), transparent 26%), radial-gradient(circle at 50% 48%, rgb(31 19 72 / .22), transparent 42%), linear-gradient(145deg, rgb(12 15 40 / .97), rgb(3 4 16 / .98)); box-shadow: 0 2.1875rem 5.3125rem rgb(0 0 0 / .62), 0 0 0 0.0625rem rgb(255 255 255 / .055) inset, 0 0 4rem rgb(123 44 255 / .19), inset 0 0 5.9375rem rgb(0 0 0 / .68); }\n.board-surface[_ngcontent-%COMP%]::before { content: ''; position: absolute; inset: 0.0625rem; z-index: -1; border-radius: inherit; background: linear-gradient(125deg, rgb(255 255 255 / .13), transparent 13% 76%, rgb(0 217 255 / .13)), repeating-linear-gradient(135deg, transparent 0 3.875rem, rgb(171 119 255 / .018) 3.9375rem 4rem); pointer-events: none; }\n.board-surface[_ngcontent-%COMP%]::after { content: ''; position: absolute; z-index: -3; inset: -7%; border-radius: 40%; opacity: .7; background: conic-gradient(from 160deg, transparent, rgb(0 217 255 / .16), transparent 23% 51%, rgb(255 25 200 / .17), transparent 74%); filter: blur(2.375rem); animation: _ngcontent-%COMP%_board-aura-shift 11s ease-in-out infinite alternate; pointer-events: none; }\n.board-aura[_ngcontent-%COMP%] { position: absolute; z-index: -2; inset: 8%; border-radius: 45%; background: radial-gradient(circle, rgb(123 44 255 / .38), rgb(255 25 200 / .11) 36%, transparent 68%); filter: blur(1.75rem); animation: _ngcontent-%COMP%_aura-breathe 5s ease-in-out infinite; }\n.board-core[_ngcontent-%COMP%] { z-index: 2; background: radial-gradient(circle at 50% 43%, rgb(58 25 126 / .94), rgb(10 8 34 / .94) 57%, rgb(123 44 255 / .28) 100%); border: 0.0625rem solid rgb(210 139 255 / .7); box-shadow: 0 0 0 0.5rem rgb(123 44 255 / .05), 0 0 0 1.125rem rgb(123 44 255 / .028), 0 0 2.1875rem rgb(123 44 255 / .52), 0 0 4.25rem rgb(255 25 200 / .19), inset 0 0 1.75rem rgb(255 255 255 / .09); animation: _ngcontent-%COMP%_core-pulse 4s ease-in-out infinite; }\n.board-core__title[_ngcontent-%COMP%] { position: relative; z-index: 2; margin-top: .15rem; font-size: clamp(1.25rem, 3vw, 2.2rem); line-height: .95; filter: drop-shadow(0 0 0.6875rem rgb(184 100 255 / .48)); }\n.board-core__subtitle[_ngcontent-%COMP%] { position: relative; z-index: 2; margin-top: .42rem; color: #ff69dd; font-size: clamp(.4rem, .75vw, .58rem); font-weight: 900; letter-spacing: .25em; text-shadow: 0 0 0.625rem rgb(255 25 200 / .55); }\n.core-sigil[_ngcontent-%COMP%] { position: relative; z-index: 2; width: clamp(2.25rem, 25%, 3.4rem); aspect-ratio: 8 / 9; height: auto; flex: 0 0 auto; margin-bottom: .55rem; filter: drop-shadow(0 0 0.5625rem rgb(123 44 255 / .8)); }\n.core-sigil[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { display: block; width: 100%; height: 100%; aspect-ratio: 8 / 9; overflow: visible; }\n.core-sigil__frame[_ngcontent-%COMP%] { fill: rgb(16 9 44 / .85); stroke: #b67cff; stroke-width: 1.6; }\n.core-sigil__mark[_ngcontent-%COMP%] { fill: rgb(209 151 255 / .12); stroke: #f5d8ff; stroke-width: 1.2; filter: drop-shadow(0 0 0.1875rem #ff19c8); }\n.core-hexagon[_ngcontent-%COMP%] { position: absolute; width: 72%; height: 72%; stroke: var(--color-primary-light); stroke-width: 1.6; opacity: .6; filter: drop-shadow(0 0 0.5rem oklch(0.72 0.2 285 / .35)); }\n.core-mark[_ngcontent-%COMP%] { position: relative; z-index: 1; stroke: var(--color-primary-light); stroke-width: 3.2; stroke-linejoin: round; filter: drop-shadow(0 0 0.5rem oklch(0.72 0.2 285 / .5)); }\n.core-orbit[_ngcontent-%COMP%] { position: absolute; aspect-ratio: 1 / 1; border-radius: 50%; pointer-events: none; }\n.core-orbit--outer[_ngcontent-%COMP%] { inset: -17%; border: 0.0625rem solid rgb(194 119 255 / .34); box-shadow: 0 0 0.75rem rgb(123 44 255 / .19); animation: _ngcontent-%COMP%_ring-rotation 52s linear infinite; }\n.core-orbit--inner[_ngcontent-%COMP%] { inset: 11%; border: 0.0625rem solid rgb(0 217 255 / .25); transform: rotate(40deg); animation: _ngcontent-%COMP%_ring-rotation 35s linear infinite reverse; }\n.core-orbit--dotted[_ngcontent-%COMP%] { inset: -6%; border: 0.0625rem dashed rgb(255 25 200 / .32); animation: _ngcontent-%COMP%_ring-rotation 70s linear infinite; }\n.core-orbit--ticks[_ngcontent-%COMP%] { inset: -31%; opacity: .55; background: repeating-conic-gradient(from 0deg, rgb(191 127 255 / .55) 0 .6deg, transparent .7deg 8deg); mask-image: radial-gradient(circle, transparent 0 69%, black 70% 72%, transparent 73%); animation: _ngcontent-%COMP%_ring-rotation 90s linear infinite reverse; }\n\n.board-energy-node[_ngcontent-%COMP%] { position: absolute; z-index: 3; width: 0.25rem; height: 0.25rem; border-radius: 50%; background: white; box-shadow: 0 0 0.25rem white, 0 0 0.8125rem #00d9ff, 0 0 1.8125rem #00d9ff; animation: _ngcontent-%COMP%_node-breathe 4.2s ease-in-out infinite; pointer-events: none; }\n.board-energy-node[_ngcontent-%COMP%]::before, .board-energy-node[_ngcontent-%COMP%]::after { content: ''; position: absolute; top: 0.0625rem; left: -2rem; width: 4rem; height: 0.0625rem; background: linear-gradient(90deg, transparent, rgb(0 217 255 / .5), transparent); }\n.board-energy-node[_ngcontent-%COMP%]::after { transform: rotate(90deg); }\n.board-energy-node--one[_ngcontent-%COMP%] { top: 7%; left: 21%; }\n.board-energy-node--two[_ngcontent-%COMP%] { right: 8%; top: 45%; animation-delay: -1.4s; }\n.board-energy-node--three[_ngcontent-%COMP%] { bottom: 6%; left: 39%; animation-delay: -2.6s; }\n\n.board-grid[_ngcontent-%COMP%] {\n  opacity: 0.34;\n  background-image:\n    linear-gradient(rgb(255 255 255 / 0.035) 0.0625rem, transparent 0.0625rem),\n    linear-gradient(90deg, rgb(255 255 255 / 0.035) 0.0625rem, transparent 0.0625rem);\n  background-size: 1.875rem 1.875rem;\n  mask-image: radial-gradient(circle, black 15%, transparent 76%);\n}\n\n.track-cell[_ngcontent-%COMP%] { aspect-ratio: 1 / 1; flex: 0 0 auto; overflow: visible; }\n.track-cell--normal[_ngcontent-%COMP%] { border-color: rgb(186 126 255 / .37); background: radial-gradient(circle at 35% 28%, rgb(96 65 143 / .48), rgb(13 12 32 / .94) 65%); box-shadow: inset 0 0.0625rem 0.0625rem rgb(255 255 255 / .10), inset 0 -0.375rem 0.75rem rgb(0 0 0 / .35), 0 0.1875rem 0.625rem rgb(0 0 0 / .25); }\n.track-cell--normal[_ngcontent-%COMP%]:hover { border-color: rgb(223 158 255 / .85); box-shadow: 0 0 1rem rgb(123 44 255 / .28), inset 0 0.0625rem 0.0625rem rgb(255 255 255 / .15); }\n.track-cell--milestone[_ngcontent-%COMP%] { border-color: rgb(0 217 255 / .75); color: #64efff; background: radial-gradient(circle, rgb(0 217 255 / .18), rgb(5 19 40 / .95) 68%); box-shadow: 0 0 0.9375rem rgb(0 217 255 / .28), inset 0 0 0.75rem rgb(0 217 255 / .13); animation: _ngcontent-%COMP%_milestone-pulse 3.4s ease-in-out infinite; }\n.track-cell--milestone[_ngcontent-%COMP%]::before { content: ''; position: absolute; inset: -0.3125rem; border: 0.0625rem solid rgb(0 217 255 / .26); border-radius: inherit; box-shadow: 0 0 0.9375rem rgb(0 217 255 / .10); }\n.track-cell--start[_ngcontent-%COMP%] { border-color: rgb(255 255 255 / .65); background: linear-gradient(135deg, #7b2cff, #ff19c8); box-shadow: 0 0 1.375rem rgb(255 25 200 / .52), inset 0 0.0625rem 0.125rem rgb(255 255 255 / .32); }\n.track-cell--goal[_ngcontent-%COMP%] { color: white; border-color: rgb(255 214 102 / .92); background: radial-gradient(circle, rgb(255 245 184 / .98) 0 8%, rgb(255 183 55 / .8) 34%, rgb(129 66 8 / .96) 72%); box-shadow: 0 0 1.5rem rgb(255 190 71 / .58), inset 0 0.0625rem 0.1875rem rgb(255 255 255 / .55); text-shadow: 0 0 0.375rem rgb(74 35 0 / .9); }\n\n@keyframes _ngcontent-%COMP%_ring-rotation { to { transform: rotate(360deg); } }\n@keyframes _ngcontent-%COMP%_aura-breathe { 0%, 100% { opacity: .56; transform: scale(.95); } 50% { opacity: 1; transform: scale(1.07); } }\n@keyframes _ngcontent-%COMP%_core-pulse { 0%, 100% { box-shadow: 0 0 0 0.5rem rgb(123 44 255 / .05), 0 0 1.875rem rgb(123 44 255 / .45), 0 0 3.4375rem rgb(255 25 200 / .16), inset 0 0 1.375rem rgb(255 255 255 / .08); } 50% { box-shadow: 0 0 0 0.75rem rgb(123 44 255 / .08), 0 0 2.5rem rgb(123 44 255 / .58), 0 0 4.25rem rgb(255 25 200 / .25), inset 0 0 1.5625rem rgb(255 255 255 / .12); } }\n@keyframes _ngcontent-%COMP%_milestone-pulse { 0%, 100% { filter: brightness(.92); } 50% { filter: brightness(1.25); } }\n@keyframes _ngcontent-%COMP%_node-breathe { 0%, 100% { opacity: .35; transform: scale(.8); } 50% { opacity: 1; transform: scale(1.25); } }\n@keyframes _ngcontent-%COMP%_board-aura-shift { from { opacity: .42; transform: rotate(-2deg) scale(.96); } to { opacity: .8; transform: rotate(3deg) scale(1.04); } }\n\n.start-icon[_ngcontent-%COMP%] { width: 62%; height: 62%; fill: none; stroke: white; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; filter: drop-shadow(0 0.0625rem 0.125rem rgb(0 0 0 / .3)); }\n\n@media (min-width: 64rem) {\n  [_nghost-%COMP%] { display: grid; place-items: center; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .board-surface[_ngcontent-%COMP%]::after, .board-aura[_ngcontent-%COMP%], .board-core[_ngcontent-%COMP%], .core-orbit[_ngcontent-%COMP%], .board-energy-node[_ngcontent-%COMP%], .track-cell--milestone[_ngcontent-%COMP%] { animation: none; }\n}\n\n@media (max-width: 40rem) {\n  [_nghost-%COMP%] { height: auto; }\n  .core-sigil[_ngcontent-%COMP%] { margin-bottom: .25rem; }\n  .board-core__subtitle[_ngcontent-%COMP%] { display: none; }\n  .board-energy-node--two[_ngcontent-%COMP%], .core-orbit--ticks[_ngcontent-%COMP%] { display: none; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BoardComponent, [{
        type: Component,
        args: [{ selector: 'app-board', standalone: true, imports: [CommonModule], template: "<div\n  class=\"board-surface relative w-full max-w-4xl mx-auto aspect-square sm:aspect-[4/3] lg:w-[min(100%,calc((100dvh-10rem)*4/3))] lg:h-auto lg:aspect-[4/3] rounded-[1.75rem] sm:rounded-[2.5rem] p-3 md:p-7\"\n>\n  <div\n    class=\"board-grid absolute inset-0 rounded-[inherit] pointer-events-none\"\n    aria-hidden=\"true\"\n  ></div>\n\n  <!-- Central sci-fi reactor core / decoration -->\n  <div class=\"board-aura\" aria-hidden=\"true\"></div>\n  <div class=\"board-energy-node board-energy-node--one\" aria-hidden=\"true\"></div>\n  <div class=\"board-energy-node board-energy-node--two\" aria-hidden=\"true\"></div>\n  <div class=\"board-energy-node board-energy-node--three\" aria-hidden=\"true\"></div>\n  <div class=\"board-core pointer-events-none absolute inset-0 m-auto flex aspect-square h-auto w-[clamp(9.25rem,30%,13.5rem)] flex-none flex-col items-center justify-center rounded-full max-[40rem]:w-[clamp(7.4rem,30%,9rem)]\">\n    <div class=\"core-orbit core-orbit--outer\"></div>\n    <div class=\"core-orbit core-orbit--inner\"></div>\n    <div class=\"core-orbit core-orbit--dotted\"></div>\n    <div class=\"core-orbit core-orbit--ticks\"></div>\n    <span\n      class=\"board-core__title font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent\"\n      >BEZZER</span\n    >\n  </div>\n\n  <!-- The Track -->\n  <div #track class=\"relative w-full h-full z-10\">\n    @for (cell of cells; track cell; let i = $index) {\n      <div\n        class=\"track-cell absolute flex items-center justify-center rounded-full border transition-all duration-300 shadow-md cursor-help\"\n        [ngClass]=\"[\n          i === 0\n            ? 'track-cell--start track-cell--goal w-10 h-10 md:w-14 md:h-14 z-10 hover:scale-110'\n            : i % 5 === 0\n              ? 'track-cell--milestone w-9 h-9 md:w-13 md:h-13 hover:scale-110'\n              : 'track-cell--normal w-8 h-8 md:w-11 md:h-11 hover:scale-110',\n        ]\"\n        [style.left]=\"cell.x + '%'\"\n        [style.top]=\"cell.y + '%'\"\n        [style.transform]=\"'translate(-50%, -50%)'\"\n      >\n        @if (i === 0) {\n          <svg class=\"start-icon\" viewBox=\"0 0 24 24\" role=\"img\" aria-label=\"Salida y meta\">\n            <path d=\"M6 21V4m0 1c3-2 6 2 12 0v9c-6 2-9-2-12 0\" />\n          </svg>\n        }\n        @if (i !== 0 && i % 5 === 0) {\n          <span class=\"text-[0.65rem] md:text-xs font-black\">{{ i }}</span>\n        }\n      </div>\n    }\n\n    <!-- Player Pawns -->\n    @for (player of players; track player.playerId) {\n      @let pawnPosition = getPawnPosition(player);\n      <div\n        class=\"absolute w-7 h-7 md:w-10 md:h-10 rounded-full shadow-2xl border-2 border-white transition-all duration-700 ease-in-out z-20 flex items-center justify-center font-black text-sm text-white\"\n        [ngClass]=\"{ 'animate-pulse scale-115': player.playerId === currentTurnPlayerId }\"\n        [style.backgroundColor]=\"player.color\"\n        [style.left]=\"pawnPosition.x + '%'\"\n        [style.top]=\"pawnPosition.y + '%'\"\n        [style.transform]=\"'translate(-50%, -50%) translate(' + pawnPosition.offsetX + 'px, ' + pawnPosition.offsetY + 'px)'\"\n        [style.boxShadow]=\"\n          '0 0 1.25rem ' +\n          player.color +\n          ', inset 0 0.125rem 0.25rem rgba(255,255,255,0.4), inset 0 -0.125rem 0.25rem rgba(0,0,0,0.3)'\n        \"\n      >\n        {{ player.username.charAt(0).toUpperCase() }}\n      </div>\n    }\n  </div>\n</div>\n", styles: [":host { display: block; width: 100%; height: 100%; filter: drop-shadow(0 1.875rem 2.875rem rgb(0 0 0 / .4)); }\n.board-surface { isolation: isolate; overflow: visible; border: 0.0625rem solid rgb(178 126 255 / .46); background: radial-gradient(circle at 13% 93%, rgb(0 111 255 / .19), transparent 29%), radial-gradient(circle at 88% 5%, rgb(255 25 200 / .16), transparent 26%), radial-gradient(circle at 50% 48%, rgb(31 19 72 / .22), transparent 42%), linear-gradient(145deg, rgb(12 15 40 / .97), rgb(3 4 16 / .98)); box-shadow: 0 2.1875rem 5.3125rem rgb(0 0 0 / .62), 0 0 0 0.0625rem rgb(255 255 255 / .055) inset, 0 0 4rem rgb(123 44 255 / .19), inset 0 0 5.9375rem rgb(0 0 0 / .68); }\n.board-surface::before { content: ''; position: absolute; inset: 0.0625rem; z-index: -1; border-radius: inherit; background: linear-gradient(125deg, rgb(255 255 255 / .13), transparent 13% 76%, rgb(0 217 255 / .13)), repeating-linear-gradient(135deg, transparent 0 3.875rem, rgb(171 119 255 / .018) 3.9375rem 4rem); pointer-events: none; }\n.board-surface::after { content: ''; position: absolute; z-index: -3; inset: -7%; border-radius: 40%; opacity: .7; background: conic-gradient(from 160deg, transparent, rgb(0 217 255 / .16), transparent 23% 51%, rgb(255 25 200 / .17), transparent 74%); filter: blur(2.375rem); animation: board-aura-shift 11s ease-in-out infinite alternate; pointer-events: none; }\n.board-aura { position: absolute; z-index: -2; inset: 8%; border-radius: 45%; background: radial-gradient(circle, rgb(123 44 255 / .38), rgb(255 25 200 / .11) 36%, transparent 68%); filter: blur(1.75rem); animation: aura-breathe 5s ease-in-out infinite; }\n.board-core { z-index: 2; background: radial-gradient(circle at 50% 43%, rgb(58 25 126 / .94), rgb(10 8 34 / .94) 57%, rgb(123 44 255 / .28) 100%); border: 0.0625rem solid rgb(210 139 255 / .7); box-shadow: 0 0 0 0.5rem rgb(123 44 255 / .05), 0 0 0 1.125rem rgb(123 44 255 / .028), 0 0 2.1875rem rgb(123 44 255 / .52), 0 0 4.25rem rgb(255 25 200 / .19), inset 0 0 1.75rem rgb(255 255 255 / .09); animation: core-pulse 4s ease-in-out infinite; }\n.board-core__title { position: relative; z-index: 2; margin-top: .15rem; font-size: clamp(1.25rem, 3vw, 2.2rem); line-height: .95; filter: drop-shadow(0 0 0.6875rem rgb(184 100 255 / .48)); }\n.board-core__subtitle { position: relative; z-index: 2; margin-top: .42rem; color: #ff69dd; font-size: clamp(.4rem, .75vw, .58rem); font-weight: 900; letter-spacing: .25em; text-shadow: 0 0 0.625rem rgb(255 25 200 / .55); }\n.core-sigil { position: relative; z-index: 2; width: clamp(2.25rem, 25%, 3.4rem); aspect-ratio: 8 / 9; height: auto; flex: 0 0 auto; margin-bottom: .55rem; filter: drop-shadow(0 0 0.5625rem rgb(123 44 255 / .8)); }\n.core-sigil svg { display: block; width: 100%; height: 100%; aspect-ratio: 8 / 9; overflow: visible; }\n.core-sigil__frame { fill: rgb(16 9 44 / .85); stroke: #b67cff; stroke-width: 1.6; }\n.core-sigil__mark { fill: rgb(209 151 255 / .12); stroke: #f5d8ff; stroke-width: 1.2; filter: drop-shadow(0 0 0.1875rem #ff19c8); }\n.core-hexagon { position: absolute; width: 72%; height: 72%; stroke: var(--color-primary-light); stroke-width: 1.6; opacity: .6; filter: drop-shadow(0 0 0.5rem oklch(0.72 0.2 285 / .35)); }\n.core-mark { position: relative; z-index: 1; stroke: var(--color-primary-light); stroke-width: 3.2; stroke-linejoin: round; filter: drop-shadow(0 0 0.5rem oklch(0.72 0.2 285 / .5)); }\n.core-orbit { position: absolute; aspect-ratio: 1 / 1; border-radius: 50%; pointer-events: none; }\n.core-orbit--outer { inset: -17%; border: 0.0625rem solid rgb(194 119 255 / .34); box-shadow: 0 0 0.75rem rgb(123 44 255 / .19); animation: ring-rotation 52s linear infinite; }\n.core-orbit--inner { inset: 11%; border: 0.0625rem solid rgb(0 217 255 / .25); transform: rotate(40deg); animation: ring-rotation 35s linear infinite reverse; }\n.core-orbit--dotted { inset: -6%; border: 0.0625rem dashed rgb(255 25 200 / .32); animation: ring-rotation 70s linear infinite; }\n.core-orbit--ticks { inset: -31%; opacity: .55; background: repeating-conic-gradient(from 0deg, rgb(191 127 255 / .55) 0 .6deg, transparent .7deg 8deg); mask-image: radial-gradient(circle, transparent 0 69%, black 70% 72%, transparent 73%); animation: ring-rotation 90s linear infinite reverse; }\n\n.board-energy-node { position: absolute; z-index: 3; width: 0.25rem; height: 0.25rem; border-radius: 50%; background: white; box-shadow: 0 0 0.25rem white, 0 0 0.8125rem #00d9ff, 0 0 1.8125rem #00d9ff; animation: node-breathe 4.2s ease-in-out infinite; pointer-events: none; }\n.board-energy-node::before, .board-energy-node::after { content: ''; position: absolute; top: 0.0625rem; left: -2rem; width: 4rem; height: 0.0625rem; background: linear-gradient(90deg, transparent, rgb(0 217 255 / .5), transparent); }\n.board-energy-node::after { transform: rotate(90deg); }\n.board-energy-node--one { top: 7%; left: 21%; }\n.board-energy-node--two { right: 8%; top: 45%; animation-delay: -1.4s; }\n.board-energy-node--three { bottom: 6%; left: 39%; animation-delay: -2.6s; }\n\n.board-grid {\n  opacity: 0.34;\n  background-image:\n    linear-gradient(rgb(255 255 255 / 0.035) 0.0625rem, transparent 0.0625rem),\n    linear-gradient(90deg, rgb(255 255 255 / 0.035) 0.0625rem, transparent 0.0625rem);\n  background-size: 1.875rem 1.875rem;\n  mask-image: radial-gradient(circle, black 15%, transparent 76%);\n}\n\n.track-cell { aspect-ratio: 1 / 1; flex: 0 0 auto; overflow: visible; }\n.track-cell--normal { border-color: rgb(186 126 255 / .37); background: radial-gradient(circle at 35% 28%, rgb(96 65 143 / .48), rgb(13 12 32 / .94) 65%); box-shadow: inset 0 0.0625rem 0.0625rem rgb(255 255 255 / .10), inset 0 -0.375rem 0.75rem rgb(0 0 0 / .35), 0 0.1875rem 0.625rem rgb(0 0 0 / .25); }\n.track-cell--normal:hover { border-color: rgb(223 158 255 / .85); box-shadow: 0 0 1rem rgb(123 44 255 / .28), inset 0 0.0625rem 0.0625rem rgb(255 255 255 / .15); }\n.track-cell--milestone { border-color: rgb(0 217 255 / .75); color: #64efff; background: radial-gradient(circle, rgb(0 217 255 / .18), rgb(5 19 40 / .95) 68%); box-shadow: 0 0 0.9375rem rgb(0 217 255 / .28), inset 0 0 0.75rem rgb(0 217 255 / .13); animation: milestone-pulse 3.4s ease-in-out infinite; }\n.track-cell--milestone::before { content: ''; position: absolute; inset: -0.3125rem; border: 0.0625rem solid rgb(0 217 255 / .26); border-radius: inherit; box-shadow: 0 0 0.9375rem rgb(0 217 255 / .10); }\n.track-cell--start { border-color: rgb(255 255 255 / .65); background: linear-gradient(135deg, #7b2cff, #ff19c8); box-shadow: 0 0 1.375rem rgb(255 25 200 / .52), inset 0 0.0625rem 0.125rem rgb(255 255 255 / .32); }\n.track-cell--goal { color: white; border-color: rgb(255 214 102 / .92); background: radial-gradient(circle, rgb(255 245 184 / .98) 0 8%, rgb(255 183 55 / .8) 34%, rgb(129 66 8 / .96) 72%); box-shadow: 0 0 1.5rem rgb(255 190 71 / .58), inset 0 0.0625rem 0.1875rem rgb(255 255 255 / .55); text-shadow: 0 0 0.375rem rgb(74 35 0 / .9); }\n\n@keyframes ring-rotation { to { transform: rotate(360deg); } }\n@keyframes aura-breathe { 0%, 100% { opacity: .56; transform: scale(.95); } 50% { opacity: 1; transform: scale(1.07); } }\n@keyframes core-pulse { 0%, 100% { box-shadow: 0 0 0 0.5rem rgb(123 44 255 / .05), 0 0 1.875rem rgb(123 44 255 / .45), 0 0 3.4375rem rgb(255 25 200 / .16), inset 0 0 1.375rem rgb(255 255 255 / .08); } 50% { box-shadow: 0 0 0 0.75rem rgb(123 44 255 / .08), 0 0 2.5rem rgb(123 44 255 / .58), 0 0 4.25rem rgb(255 25 200 / .25), inset 0 0 1.5625rem rgb(255 255 255 / .12); } }\n@keyframes milestone-pulse { 0%, 100% { filter: brightness(.92); } 50% { filter: brightness(1.25); } }\n@keyframes node-breathe { 0%, 100% { opacity: .35; transform: scale(.8); } 50% { opacity: 1; transform: scale(1.25); } }\n@keyframes board-aura-shift { from { opacity: .42; transform: rotate(-2deg) scale(.96); } to { opacity: .8; transform: rotate(3deg) scale(1.04); } }\n\n.start-icon { width: 62%; height: 62%; fill: none; stroke: white; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; filter: drop-shadow(0 0.0625rem 0.125rem rgb(0 0 0 / .3)); }\n\n@media (min-width: 64rem) {\n  :host { display: grid; place-items: center; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .board-surface::after, .board-aura, .board-core, .core-orbit, .board-energy-node, .track-cell--milestone { animation: none; }\n}\n\n@media (max-width: 40rem) {\n  :host { height: auto; }\n  .core-sigil { margin-bottom: .25rem; }\n  .board-core__subtitle { display: none; }\n  .board-energy-node--two, .core-orbit--ticks { display: none; }\n}\n"] }]
    }], null, { players: [{
            type: Input,
            args: [{ required: true }]
        }], currentTurnPlayerId: [{
            type: Input
        }], winningPosition: [{
            type: Input
        }], track: [{
            type: ViewChild,
            args: ['track']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BoardComponent, { className: "BoardComponent", filePath: "src/app/pages/game/components/board/board.component.ts", lineNumber: 12 }); })();
