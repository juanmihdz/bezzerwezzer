import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-turn-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './turn-indicator.component.html',
  styleUrl: './turn-indicator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TurnIndicatorComponent {
  readonly playerName = input('');
  readonly playerColor = input('');
  readonly isMyTurn = input(false);
  readonly phaseText = input('FASE DE JUEGO');
}
