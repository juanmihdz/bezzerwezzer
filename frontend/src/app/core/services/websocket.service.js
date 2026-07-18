import { Injectable, signal } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import SockJS from 'sockjs-client';
import { firstValueFrom } from 'rxjs';
import { map, take, timeout } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class WebsocketService {
    mobileConnectionTimeoutMs = 45_000;
    rxStomp;
    connectedToken = '';
    connectionStatus = signal('DISCONNECTED', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "connectionStatus" }] : /* istanbul ignore next */ []));
    shouldUseHttpTransport() {
        const isIOSWebKit = /iP(?:hone|ad|od)/.test(navigator.userAgent) &&
            /WebKit/.test(navigator.userAgent);
        return isIOSWebKit;
    }
    constructor() {
        this.rxStomp = new RxStomp();
        this.rxStomp.connected$.subscribe(() => {
            this.connectionStatus.set('CONNECTED');
            console.log('STOMP connected');
        });
        this.rxStomp.stompErrors$.subscribe((error) => {
            console.error('STOMP error', error);
        });
    }
    async connect(token) {
        if (this.connectionStatus() === 'CONNECTED' && this.connectedToken === token) {
            return;
        }
        // A new guest login gets a new identity. Reusing a socket authenticated
        // with the previous token would make the server create/join rooms as the
        // previous player while the UI displays the new name.
        if (this.connectionStatus() !== 'DISCONNECTED') {
            await this.rxStomp.deactivate();
            this.connectionStatus.set('DISCONNECTED');
        }
        this.connectionStatus.set('CONNECTING');
        this.rxStomp.configure({
            // Safari 26 on iOS can leave the WebSocket handshake pending without
            // reporting a failure, so SockJS never reaches its automatic fallback.
            // Skip WebSocket there and connect through same-origin HTTP instead.
            webSocketFactory: () => new SockJS(`${window.location.origin}/ws`, undefined, this.shouldUseHttpTransport()
                ? { transports: ['xhr-polling'] }
                : undefined),
            connectHeaders: {
                Authorization: `Bearer ${token}`
            },
            heartbeatIncoming: 10000,
            heartbeatOutgoing: 10000,
            reconnectDelay: 5000,
            debug: (msg) => console.log(new Date(), msg)
        });
        this.rxStomp.activate();
        try {
            await firstValueFrom(this.rxStomp.connected$.pipe(take(1), timeout(this.mobileConnectionTimeoutMs)));
            this.connectedToken = token;
        }
        catch (error) {
            // Safari on iOS can leave the HTTP upgrade pending for several seconds.
            // Tear down a timed-out attempt so a later tap never reuses a stale JWT.
            await this.rxStomp.deactivate();
            this.connectedToken = '';
            this.connectionStatus.set('DISCONNECTED');
            throw error;
        }
    }
    disconnect() {
        void this.rxStomp.deactivate();
        this.connectedToken = '';
        this.connectionStatus.set('DISCONNECTED');
    }
    subscribe(destination) {
        return this.rxStomp.watch(destination).pipe(map(message => JSON.parse(message.body)));
    }
    send(destination, body) {
        this.rxStomp.publish({
            destination,
            body: JSON.stringify(body)
        });
    }
    subscribeToRoom(roomCode) {
        return this.subscribe(`/topic/room/${roomCode}`);
    }
    subscribeToGame(roomCode) {
        return this.subscribe(`/topic/room/${roomCode}/game`);
    }
    subscribeToPersonal() {
        return this.subscribe(`/user/queue/personal`);
    }
    static ɵfac = function WebsocketService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || WebsocketService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WebsocketService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
