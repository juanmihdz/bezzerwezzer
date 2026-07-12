import { Injectable, signal, computed } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AuthService {
    http;
    apiUrl = 'http://localhost:8080/api/auth';
    playerId = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "playerId" }] : /* istanbul ignore next */ []));
    username = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "username" }] : /* istanbul ignore next */ []));
    token = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "token" }] : /* istanbul ignore next */ []));
    isAuthenticated = computed(() => !!this.token(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isAuthenticated" }] : /* istanbul ignore next */ []));
    constructor(http) {
        this.http = http;
        this.loadFromStorage();
    }
    async loginAsGuest(username) {
        try {
            const response = await firstValueFrom(this.http.post(`${this.apiUrl}/guest`, { username }));
            this.token.set(response.token);
            this.playerId.set(response.playerId);
            this.username.set(username);
            // A guest identity belongs to one game window. sessionStorage keeps it on
            // refresh while preventing a second tab/window from impersonating it.
            sessionStorage.setItem('bz_token', response.token);
            sessionStorage.setItem('bz_playerId', response.playerId);
            sessionStorage.setItem('bz_username', username);
            return true;
        }
        catch (error) {
            console.error('Login failed', error);
            return false;
        }
    }
    logout() {
        this.token.set('');
        this.playerId.set('');
        this.username.set('');
        sessionStorage.removeItem('bz_token');
        sessionStorage.removeItem('bz_playerId');
        sessionStorage.removeItem('bz_username');
        // Clean up identities written by older versions of the app.
        localStorage.removeItem('bz_token');
        localStorage.removeItem('bz_playerId');
        localStorage.removeItem('bz_username');
    }
    loadFromStorage() {
        const token = sessionStorage.getItem('bz_token');
        const playerId = sessionStorage.getItem('bz_playerId');
        const username = sessionStorage.getItem('bz_username');
        if (token && playerId && username) {
            this.token.set(token);
            this.playerId.set(playerId);
            this.username.set(username);
        }
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { /* @ts-ignore */
    return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
