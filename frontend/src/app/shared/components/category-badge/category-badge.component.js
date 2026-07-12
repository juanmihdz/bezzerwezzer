import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import * as i0 from "@angular/core";
const _c0 = (a0, a1) => [a0, a1];
function CategoryBadgeComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 3);
    i0.ɵɵelement(2, "path");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", ctx_r0.color);
    i0.ɵɵclassProp("category-icon--lg", ctx_r0.compactSize === "lg");
    i0.ɵɵattribute("title", ctx_r0.name)("aria-label", ctx_r0.name);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("d", ctx_r0.iconPath);
} }
function CategoryBadgeComponent_Conditional_1_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    i0.ɵɵtext(3, "PTS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 11);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("text-shadow", "0 0 10px " + ctx_r0.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.pointValue);
} }
function CategoryBadgeComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 3);
    i0.ɵɵelement(4, "path");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "span", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, CategoryBadgeComponent_Conditional_1_Conditional_7_Template, 6, 3, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("border-color", ctx_r0.color + "40")("--category-color", ctx_r0.color);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(18, _c0, ctx_r0.sizeClasses[ctx_r0.size], ctx_r0.isHighlighted ? "shadow-2xl z-10 ring-1 ring-white/25" : "hover:scale-[1.02]"));
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-color", ctx_r0.color);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-color", ctx_r0.color)("box-shadow", ctx_r0.isHighlighted ? "0 0 15px " + ctx_r0.color + "80" : "none");
    i0.ɵɵproperty("ngClass", ctx_r0.iconSizeClasses[ctx_r0.size]);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("d", ctx_r0.iconPath);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("color", ctx_r0.isHighlighted ? "white" : "var(--color-text)");
    i0.ɵɵproperty("ngClass", ctx_r0.textSizeClasses[ctx_r0.size]);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.name, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.pointValue !== undefined && ctx_r0.pointValue > 0 ? 7 : -1);
} }
export class CategoryBadgeComponent {
    name;
    icon;
    color;
    pointValue;
    size = 'md';
    isHighlighted = false;
    compact = false;
    compactSize = 'sm';
    paths = {
        palette: 'M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H18A3 3 0 0 0 21 11a8 8 0 0 0-9-8Z M7 10h.01M9.5 6.5h.01M14 6h.01M17 9h.01',
        building: 'M4 21V8l8-5 8 5v13M8 21v-4h8v4M8 10h2M14 10h2M8 13h2M14 13h2',
        flask: 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 15h8',
        film: 'M4 5h16v14H4zM8 5v14M16 5v14M4 9h4M16 9h4M4 15h4M16 15h4',
        trophy: 'M8 4h8v4c0 4-2 6-4 6s-4-2-4-6V4ZM8 6H4v2c0 2 2 3 4 3M16 6h4v2c0 2-2 3-4 3M12 14v4M8 21h8M9 18h6',
        utensils: 'M7 3v8M4 3v5c0 2 1 3 3 3s3-1 3-3V3M7 11v10M15 3v18M15 3c3 1 5 4 5 7h-5',
        globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c5 5 5 13 0 18M12 3c-5 5-5 13 0 18',
        landmark: 'M3 9l9-5 9 5M5 10h14M6 10v8M10 10v8M14 10v8M18 10v8M4 18h16M3 21h18',
        languages: 'M4 5h10M9 3v2M6 8c2 4 4 6 7 7M12 8c-1 3-4 6-7 7M14 20l3.5-9 3.5 9M15.5 17h4',
        'book-open': 'M4 5a4 4 0 0 1 4-1h4v16H8a4 4 0 0 0-4 1V5ZM20 5a4 4 0 0 0-4-1h-4v16h4a4 4 0 0 1 4 1V5Z',
        calculator: 'M6 3h12v18H6zM9 6h6v3H9zM9 13h.01M12 13h.01M15 13h.01M9 17h.01M12 17h.01M15 17h.01',
        music: 'M9 18V6l10-2v12M9 9l10-2M6 21a3 3 0 1 0 3-3M16 19a3 3 0 1 0 3-3',
        leaf: 'M20 4C10 4 5 8 5 15c0 3 2 5 5 5 7 0 10-8 10-16ZM4 21c3-5 7-8 12-11',
        briefcase: 'M4 7h16v13H4zM9 7V4h6v3M4 12c5 3 11 3 16 0M10 12v2h4v-2',
        'landmark-dome': 'M4 11h16M6 11a6 6 0 0 1 12 0M12 3v2M6 11v7M10 11v7M14 11v7M18 11v7M3 21h18',
        star: 'm12 3 3 6 6 .8-4.5 4.4 1 6.3-5.5-3-5.5 3 1-6.3L3 9.8 9 9l3-6Z',
        church: 'M7 21V9l5-4 5 4v12M12 2v6M9 4h6M5 21h14M10 14h4v7',
        'heart-pulse': 'M3 12h4l2-4 3 8 2-4h7M20 7c-2-3-6-2-8 1-2-3-6-4-8-1-2 3-1 7 2 10l6 4 6-4',
        cpu: 'M8 8h8v8H8zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3',
        tv: 'M4 6h16v12H4zM9 22h6M8 2l4 4 4-4',
    };
    get iconPath() {
        return this.paths[this.icon] ?? 'M12 3v18M3 12h18';
    }
    sizeClasses = {
        sm: 'p-1.5 pr-3 min-w-[140px]',
        md: 'p-2 pr-4 min-w-[200px]',
        lg: 'p-3 pr-6 min-w-[280px]',
    };
    iconSizeClasses = {
        sm: 'w-8 h-8 text-lg',
        md: 'w-12 h-12 text-2xl',
        lg: 'w-16 h-16 text-3xl',
    };
    textSizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-xl',
    };
    static ɵfac = function CategoryBadgeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CategoryBadgeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CategoryBadgeComponent, selectors: [["app-category-badge"]], inputs: { name: "name", icon: "icon", color: "color", pointValue: "pointValue", size: "size", isHighlighted: "isHighlighted", compact: "compact", compactSize: "compactSize" }, decls: 2, vars: 1, consts: [["role", "img", 1, "category-icon", 3, "category-icon--lg", "backgroundColor"], [1, "relative", "flex", "items-center", "gap-3", "rounded-2xl", "glass", "transition-all", "duration-300", "group", "overflow-hidden", 3, "ngClass", "borderColor", "--category-color"], ["role", "img", 1, "category-icon"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "category-svg"], [1, "relative", "flex", "items-center", "gap-3", "rounded-2xl", "glass", "transition-all", "duration-300", "group", "overflow-hidden", 3, "ngClass"], [1, "absolute", "inset-0", "opacity-10", "transition-opacity", "group-hover:opacity-20"], [1, "flex", "items-center", "justify-center", "rounded-xl", "shadow-inner", "relative", "z-10", 3, "ngClass"], [1, "font-display", "font-semibold", "tracking-wide", "relative", "z-10", "truncate", "pr-2", 3, "ngClass"], [1, "absolute", "top-0", "right-0", "h-full", "flex", "items-center", "justify-center", "bg-black/40", "backdrop-blur-md", "border-l", "border-white/10", "px-4", "shadow-xl", "z-20"], [1, "flex", "flex-col", "items-center"], [1, "text-xs", "font-bold", "text-white/70", "uppercase", "tracking-widest", "mb-0.5"], [1, "text-2xl", "font-black", "text-white"]], template: function CategoryBadgeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, CategoryBadgeComponent_Conditional_0_Template, 3, 7, "div", 0)(1, CategoryBadgeComponent_Conditional_1_Template, 8, 21, "div", 1);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.compact ? 0 : 1);
        } }, dependencies: [NgClass], styles: ["[_nghost-%COMP%] { display: block; min-width: 0; }\n.relative.flex.items-center[_ngcontent-%COMP%] { min-height: 4.3rem; border: 1px solid color-mix(in srgb, var(--category-color, #7b2cff) 42%, rgb(255 255 255 / .08)); background: linear-gradient(110deg, rgb(11 13 33 / .91), color-mix(in srgb, var(--category-color, #7b2cff) 13%, rgb(10 8 26 / .88))); box-shadow: inset 0 1px 0 rgb(255 255 255 / .10), inset 0 -12px 24px rgb(0 0 0 / .12), 0 7px 18px rgb(0 0 0 / .18); }\n.relative.flex.items-center[_ngcontent-%COMP%]::after { content: ''; position: absolute; inset: 0; opacity: .35; background: linear-gradient(125deg, rgb(255 255 255 / .10), transparent 24% 68%, color-mix(in srgb, var(--category-color, #7b2cff) 25%, transparent)); pointer-events: none; }\n.relative.flex.items-center[_ngcontent-%COMP%]:hover { transform: translateY(-2px) scale(1.012); box-shadow: 0 12px 24px rgb(0 0 0 / .26), 0 0 18px color-mix(in srgb, var(--category-color, #7b2cff) 18%, transparent), inset 0 1px 0 rgb(255 255 255 / .14); }\n.category-svg[_ngcontent-%COMP%] { width: 56%; height: 56%; fill: none; stroke: white; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; filter: drop-shadow(0 2px 5px rgb(0 0 0 / .35)); }\n.category-icon[_ngcontent-%COMP%] { display: grid; width: 2.15rem; height: 2.15rem; place-items: center; border: 1px solid rgb(255 255 255 / .26); border-radius: .7rem; box-shadow: inset 0 1px 0 rgb(255 255 255 / .24), inset 0 -8px 15px rgb(0 0 0 / .14), 0 3px 12px rgb(0 0 0 / .28); }\n.category-icon--lg[_ngcontent-%COMP%] { width: 3.5rem; height: 3.5rem; border-radius: 50%; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CategoryBadgeComponent, [{
        type: Component,
        args: [{ selector: 'app-category-badge', standalone: true, imports: [NgClass], template: "@if (compact) {\n  <div\n    class=\"category-icon\"\n    [class.category-icon--lg]=\"compactSize === 'lg'\"\n    [style.backgroundColor]=\"color\"\n    [attr.title]=\"name\"\n    [attr.aria-label]=\"name\"\n    role=\"img\"\n  >\n    <svg class=\"category-svg\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n      <path [attr.d]=\"iconPath\"></path>\n    </svg>\n  </div>\n} @else {\n  <div\n    class=\"relative flex items-center gap-3 rounded-2xl glass transition-all duration-300 group overflow-hidden\"\n    [ngClass]=\"[\n      sizeClasses[size],\n      isHighlighted ? 'shadow-2xl z-10 ring-1 ring-white/25' : 'hover:scale-[1.02]',\n    ]\"\n    [style.borderColor]=\"color + '40'\"\n    [style.--category-color]=\"color\"\n  >\n    <!-- Background Tint -->\n    <div\n      class=\"absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20\"\n      [style.backgroundColor]=\"color\"\n    ></div>\n    <!-- Icon Container -->\n    <div\n      class=\"flex items-center justify-center rounded-xl shadow-inner relative z-10\"\n      [ngClass]=\"iconSizeClasses[size]\"\n      [style.backgroundColor]=\"color\"\n      [style.boxShadow]=\"isHighlighted ? '0 0 15px ' + color + '80' : 'none'\"\n    >\n      <svg class=\"category-svg\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n        <path [attr.d]=\"iconPath\"></path>\n      </svg>\n    </div>\n    <!-- Category Name -->\n    <span\n      class=\"font-display font-semibold tracking-wide relative z-10 truncate pr-2\"\n      [ngClass]=\"textSizeClasses[size]\"\n      [style.color]=\"isHighlighted ? 'white' : 'var(--color-text)'\"\n    >\n      {{ name }}\n    </span>\n    <!-- Point Value Badge (if assigned) -->\n    @if (pointValue !== undefined && pointValue > 0) {\n      <div\n        class=\"absolute top-0 right-0 h-full flex items-center justify-center bg-black/40 backdrop-blur-md border-l border-white/10 px-4 shadow-xl z-20\"\n      >\n        <div class=\"flex flex-col items-center\">\n          <span class=\"text-xs font-bold text-white/70 uppercase tracking-widest mb-0.5\">PTS</span>\n          <span class=\"text-2xl font-black text-white\" [style.textShadow]=\"'0 0 10px ' + color\">{{\n            pointValue\n          }}</span>\n        </div>\n      </div>\n    }\n  </div>\n}\n", styles: [":host { display: block; min-width: 0; }\n.relative.flex.items-center { min-height: 4.3rem; border: 1px solid color-mix(in srgb, var(--category-color, #7b2cff) 42%, rgb(255 255 255 / .08)); background: linear-gradient(110deg, rgb(11 13 33 / .91), color-mix(in srgb, var(--category-color, #7b2cff) 13%, rgb(10 8 26 / .88))); box-shadow: inset 0 1px 0 rgb(255 255 255 / .10), inset 0 -12px 24px rgb(0 0 0 / .12), 0 7px 18px rgb(0 0 0 / .18); }\n.relative.flex.items-center::after { content: ''; position: absolute; inset: 0; opacity: .35; background: linear-gradient(125deg, rgb(255 255 255 / .10), transparent 24% 68%, color-mix(in srgb, var(--category-color, #7b2cff) 25%, transparent)); pointer-events: none; }\n.relative.flex.items-center:hover { transform: translateY(-2px) scale(1.012); box-shadow: 0 12px 24px rgb(0 0 0 / .26), 0 0 18px color-mix(in srgb, var(--category-color, #7b2cff) 18%, transparent), inset 0 1px 0 rgb(255 255 255 / .14); }\n.category-svg { width: 56%; height: 56%; fill: none; stroke: white; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; filter: drop-shadow(0 2px 5px rgb(0 0 0 / .35)); }\n.category-icon { display: grid; width: 2.15rem; height: 2.15rem; place-items: center; border: 1px solid rgb(255 255 255 / .26); border-radius: .7rem; box-shadow: inset 0 1px 0 rgb(255 255 255 / .24), inset 0 -8px 15px rgb(0 0 0 / .14), 0 3px 12px rgb(0 0 0 / .28); }\n.category-icon--lg { width: 3.5rem; height: 3.5rem; border-radius: 50%; }\n"] }]
    }], null, { name: [{
            type: Input,
            args: [{ required: true }]
        }], icon: [{
            type: Input,
            args: [{ required: true }]
        }], color: [{
            type: Input,
            args: [{ required: true }]
        }], pointValue: [{
            type: Input
        }], size: [{
            type: Input
        }], isHighlighted: [{
            type: Input
        }], compact: [{
            type: Input
        }], compactSize: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CategoryBadgeComponent, { className: "CategoryBadgeComponent", filePath: "src/app/shared/components/category-badge/category-badge.component.ts", lineNumber: 11 }); })();
