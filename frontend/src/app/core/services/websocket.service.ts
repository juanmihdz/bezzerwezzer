import { Injectable, signal } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { firstValueFrom, Observable } from 'rxjs';
import { map, take, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private rxStomp: RxStomp;
  connectionStatus = signal<'CONNECTED' | 'DISCONNECTED' | 'CONNECTING'>('DISCONNECTED');

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

  async connect(token: string): Promise<void> {
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
      debug: (msg: string) => console.log(new Date(), msg)
    });

    this.rxStomp.activate();
    await firstValueFrom(this.rxStomp.connected$.pipe(take(1), timeout(10000)));
  }

  disconnect() {
    this.rxStomp.deactivate();
    this.connectionStatus.set('DISCONNECTED');
  }

  subscribe<T>(destination: string): Observable<T> {
    return this.rxStomp.watch(destination).pipe(
      map(message => JSON.parse(message.body) as T)
    );
  }

  send(destination: string, body: any) {
    this.rxStomp.publish({
      destination,
      body: JSON.stringify(body)
    });
  }

  subscribeToRoom<T = unknown>(roomCode: string) {
    return this.subscribe<T>(`/topic/room/${roomCode}`);
  }

  subscribeToGame<T = unknown>(roomCode: string) {
    return this.subscribe<T>(`/topic/room/${roomCode}/game`);
  }

  subscribeToPersonal<T = unknown>() {
    return this.subscribe<T>(`/user/queue/personal`);
  }
}
