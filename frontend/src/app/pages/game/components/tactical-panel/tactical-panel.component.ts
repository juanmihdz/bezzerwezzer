import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tactical-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tactical-panel.component.html',
  styleUrl: './tactical-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TacticalPanelComponent {
  readonly zwapsLeft = input(1);
  readonly bezzerwizzersLeft = input(2);
  readonly canZwap = input(false);
  readonly canBezzerwizzer = input(false);
  readonly canSkipPreparation = input(false);
  readonly skipVotes = input(0);
  readonly playerCount = input(0);

  readonly zwapClick = output<void>();
  readonly bezzerwizzerClick = output<void>();
  readonly skipPreparationClick = output<void>();
}
