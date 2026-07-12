import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerInfo } from '../../../../shared/models/game.model';
import { PlayerAvatarComponent } from '../../../../shared/components/player-avatar/player-avatar.component';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [CommonModule, PlayerAvatarComponent],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent {
  @Input({ required: true }) players!: PlayerInfo[];
  @Input() currentTurnPlayerId?: string;
  @Input() currentRound: number = 1;
}
