import { Component, Input, computed } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  @Input({ required: true }) total!: number;
  @Input({ required: true }) remaining!: number;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get circumference(): number {
    return 2 * Math.PI * 42;
  }

  get dashOffset(): number {
    const percentage = this.remaining / this.total;
    return this.circumference * (1 - percentage);
  }

  get isLowTime(): boolean {
    return this.remaining <= 10 && this.remaining > 0;
  }

  get colorClass(): string {
    if (this.remaining > 15) return 'text-primary-light';
    if (this.remaining > 10) return 'text-warning';
    return 'text-incorrect';
  }

  get glowClass(): string {
    if (this.remaining > 15) return 'bg-primary/30';
    if (this.remaining > 10) return 'bg-warning/30';
    return 'bg-incorrect/30';
  }

  sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  textClasses = {
    sm: 'text-lg',
    md: 'text-3xl',
    lg: 'text-5xl',
  };
}
