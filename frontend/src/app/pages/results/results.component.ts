import { Component, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GameStateService } from '../../core/services/game-state.service';
import { AudioService } from '../../core/services/audio.service';
import { WebsocketService } from '../../core/services/websocket.service';
import { AuthService } from '../../core/services/auth.service';
import { PlayerAvatarComponent } from '../../shared/components/player-avatar/player-avatar.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, PlayerAvatarComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent implements OnInit {
  private gameState = inject(GameStateService);
  private router = inject(Router);
  private audioService = inject(AudioService);
  private wsService = inject(WebsocketService);
  private authService = inject(AuthService);

  rankedPlayers = this.gameState.sortedPlayers();
  winner = this.rankedPlayers.length > 0 ? this.rankedPlayers[0] : null;
  isHost = this.gameState.isHost;

  confettiArray = Array(20).fill(0).map((x, i) => i);
  colors = ['#E91E63', '#2196F3', '#4CAF50', '#FF9800', '#F44336', '#9C27B0'];

  constructor() {
    effect(() => {
      if (this.gameState.gamePhase() === 'LOBBY' && this.isInRematch && this.gameState.roomCode()) {
        this.router.navigate(['/lobby', this.gameState.roomCode()]);
      }
    });
  }

  ngOnInit() {
    // Play victory sound
    try {
      this.audioService.playCorrect();
      setTimeout(() => this.audioService.playCorrect(), 300);
      setTimeout(() => this.audioService.playNotification(), 600);
    } catch(e) {}
  }

  goHome() {
    this.gameState.reset();
    this.router.navigate(['/']);
  }

  playAgain(): void {
    const destination = this.isHost()
      ? 'play-again'
      : 'join-rematch';
    this.wsService.send(`/app/game/${this.gameState.roomCode()}/${destination}`, {});
  }

  get isInRematch(): boolean {
    return this.gameState.players().some(player => player.playerId === this.authService.playerId());
  }

  get canJoinRematch(): boolean {
    return !this.isHost() && this.gameState.gamePhase() === 'LOBBY' && !this.isInRematch;
  }
}
