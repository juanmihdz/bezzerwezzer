import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-turn-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './turn-indicator.component.html',
  styleUrl: './turn-indicator.component.scss'
})
export class TurnIndicatorComponent {
  @Input() playerName: string = '';
  @Input() playerColor: string = '';
  @Input() isMyTurn: boolean = false;
  @Input() phaseText: string = 'FASE DE JUEGO';
}
