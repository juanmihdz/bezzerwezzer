import { Component, inject, computed, effect } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { GameStateService } from '../../core/services/game-state.service';
import { AuthService } from '../../core/services/auth.service';
import { WebsocketService } from '../../core/services/websocket.service';
import { PlayerAvatarComponent } from '../../shared/components/player-avatar/player-avatar.component';
import { SnackbarService } from '../../core/services/snackbar.service';
import { RulesHelpComponent } from '../../shared/components/rules-help/rules-help.component';

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [PlayerAvatarComponent, RulesHelpComponent],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss',
})
export class LobbyComponent {
  private gameState = inject(GameStateService);
  private authService = inject(AuthService);
  private wsService = inject(WebsocketService);
  private snackbarService = inject(SnackbarService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  roomCode = this.gameState.roomCode;
  players = this.gameState.players;
  hostId = this.gameState.hostPlayerId;
  myId = this.authService.playerId;
  isHost = this.gameState.isHost;

  emptySlots = computed(() => {
    const count = Math.max(0, 4 - this.players().length);
    return Array(count).fill(0);
  });

  canStartGame = computed(() => {
    return this.players().length >= 2 && this.players().every((p) => p.ready);
  });

  readyPlayers = computed(() => this.players().filter((player) => player.ready).length);

  constructor() {
    void this.joinRoomFromUrl();

    effect(() => {
      const phase = this.gameState.gamePhase();
      const code = this.roomCode();
      if (code && phase !== 'HOME' && phase !== 'LOBBY') {
        this.router.navigate(['/game', code]);
      }
    });
  }

  private async joinRoomFromUrl(): Promise<void> {
    const code = this.route.snapshot.paramMap.get('code')?.trim().toUpperCase();
    if (!code || !/^[A-Z0-9]{6}$/.test(code)) {
      this.snackbarService.show('El código de sala no es válido', 'warning');
      await this.router.navigate(['/']);
      return;
    }

    if (!this.authService.isAuthenticated()) {
      this.snackbarService.show('Introduce tu nombre para unirte a la sala', 'info');
      await this.router.navigate(['/'], { queryParams: { room: code } });
      return;
    }

    try {
      await this.wsService.connect(this.authService.token());
      this.gameState.connectToRoom(code);
      this.wsService.send(`/app/room/${code}/join`, {});
    } catch (error) {
      console.error('Unable to join room from URL', error);
      this.snackbarService.show('No se pudo conectar con la sala', 'error');
      await this.router.navigate(['/'], { queryParams: { room: code } });
    }
  }

  copyCode() {
    navigator.clipboard.writeText(this.roomCode());
    this.snackbarService.show('Código copiado al portapapeles', 'info');
  }

  setReady(ready: boolean) {
    this.wsService.send(`/app/room/${this.roomCode()}/ready`, { ready });
  }

  startGame() {
    if (this.canStartGame()) {
      this.wsService.send(`/app/game/${this.roomCode()}/start`, {});
    }
  }
}
