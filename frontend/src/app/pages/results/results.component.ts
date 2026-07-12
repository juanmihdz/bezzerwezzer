import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GameStateService } from '../../core/services/game-state.service';
import { AudioService } from '../../core/services/audio.service';
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

  rankedPlayers = this.gameState.sortedPlayers();
  winner = this.rankedPlayers.length > 0 ? this.rankedPlayers[0] : null;

  confettiArray = Array(20).fill(0).map((x, i) => i);
  colors = ['#E91E63', '#2196F3', '#4CAF50', '#FF9800', '#F44336', '#9C27B0'];

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
}
