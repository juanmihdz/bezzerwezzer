import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tactical-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tactical-panel.component.html',
  styleUrl: './tactical-panel.component.scss'
})
export class TacticalPanelComponent {
  @Input() zwapsLeft = 1;
  @Input() bezzerwizzersLeft = 2;
  @Input() canZwap = false;
  @Input() canBezzerwizzer = false;
  @Input() canSkipPreparation = false;
  @Input() skipVotes = 0;
  @Input() playerCount = 0;

  @Output() zwapClick = new EventEmitter<void>();
  @Output() bezzerwizzerClick = new EventEmitter<void>();
  @Output() skipPreparationClick = new EventEmitter<void>();
}
