import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { WebsocketService } from '../../core/services/websocket.service';
import { SnackbarService } from '../../core/services/snackbar.service';
import { GameStateService } from '../../core/services/game-state.service';
import { firstValueFrom, filter, take, timeout } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  private wsService = inject(WebsocketService);
  private snackbarService = inject(SnackbarService);
  private gameState = inject(GameStateService);
  private route = inject(ActivatedRoute);

  usernameJoin = '';
  roomCode = '';
  usernameCreate = '';

  isLoadingJoin = signal(false);
  isLoadingCreate = signal(false);

  constructor() {
    const roomCode = this.route.snapshot.queryParamMap.get('room')?.trim().toUpperCase();
    if (roomCode && /^[A-Z0-9]{6}$/.test(roomCode)) {
      this.roomCode = roomCode;
    }
  }

  isValidJoin() {
    return this.usernameJoin.trim().length >= 2 && this.roomCode.trim().length === 6;
  }

  isValidCreate() {
    return this.usernameCreate.trim().length >= 2;
  }

  async joinRoom() {
    if (!this.isValidJoin()) return;
    this.isLoadingJoin.set(true);

    try {
      const code = this.roomCode.toUpperCase().trim();
      const success = await this.authService.loginAsGuest(this.usernameJoin.trim());

      if (success) {
        this.gameState.reset();
        await this.wsService.connect(this.authService.token());
        this.gameState.connectToRoom(code);
        this.wsService.send(`/app/room/${code}/join`, {});
        await this.router.navigate(['/lobby', code]);
        this.isLoadingJoin.set(false);
      } else {
        this.isLoadingJoin.set(false);
        this.snackbarService.show('Error al conectar con el servidor', 'error');
      }
    } catch (e) {
      this.isLoadingJoin.set(false);
      console.error(e);
    }
  }

  async createRoom() {
    if (!this.isValidCreate()) return;
    this.isLoadingCreate.set(true);

    try {
      const success = await this.authService.loginAsGuest(this.usernameCreate.trim());

      if (success) {
        this.gameState.reset();
        await this.wsService.connect(this.authService.token());
        const roomCreated = firstValueFrom(this.wsService.subscribeToPersonal().pipe(
          filter((event: any) => event.type === 'ROOM_CREATED'),
          take(1),
          timeout(10000)
        ));
        this.wsService.send('/app/room/create', {});
        const event: any = await roomCreated;
        const code = event.payload.roomCode;
        // The host receives this authoritative room snapshot before subscribing
        // to the lobby topic, so its host controls are available immediately.
        this.gameState.initializeLobby(event.payload, true);
        this.gameState.connectToRoom(code);
        this.wsService.send(`/app/room/${code}/join`, {});
        await this.router.navigate(['/lobby', code]);
        this.isLoadingCreate.set(false);
      } else {
        this.isLoadingCreate.set(false);
        this.snackbarService.show('Error al conectar con el servidor', 'error');
      }
    } catch (e) {
      this.isLoadingCreate.set(false);
      this.snackbarService.show('No se pudo crear la sala', 'error');
      console.error(e);
    }
  }
}
