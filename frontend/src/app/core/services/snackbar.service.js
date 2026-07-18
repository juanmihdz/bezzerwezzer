import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class SnackbarService {
    maxVisibleMessages = 3;
    messages = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "messages" }] : /* istanbul ignore next */ []));
    show(message, type = 'info', duration = 4000) {
        const id = Math.random().toString(36).substring(2, 9);
        this.messages.update(msgs => [
            ...msgs.slice(-(this.maxVisibleMessages - 1)),
            { id, message, type }
        ]);
        if (duration > 0) {
            setTimeout(() => this.remove(id), duration);
        }
    }
    remove(id) {
        this.messages.update(msgs => msgs.filter(m => m.id !== id));
    }
    static ɵfac = function SnackbarService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SnackbarService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackbarService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
