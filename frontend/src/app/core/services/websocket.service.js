import { Injectable, signal } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { firstValueFrom } from 'rxjs';
import { map, take, timeout } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class WebsocketService {
    rxStomp;
    connectionStatus = signal('DISCONNECTED', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "connectionStatus" }] : /* istanbul ignore next */ []));
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
        if (this.connectionStatus() === 'CONNECTED') {
            return;
        }
        this.connectionStatus.set('CONNECTING');
        this.rxStomp.configure({
            brokerURL: 'ws://localhost:8080/ws',
            connectHeaders: {
                Authorization: `Bearer ${token}`
            },
            heartbeatIncoming: 10000,
            heartbeatOutgoing: 10000,
            reconnectDelay: 5000,
            debug: (msg) => console.log(new Date(), msg)
        });
        this.rxStomp.activate();
        await firstValueFrom(this.rxStomp.connected$.pipe(take(1), timeout(10000)));
    }
    disconnect() {
        this.rxStomp.deactivate();
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
