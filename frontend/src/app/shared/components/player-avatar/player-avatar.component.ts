import { Component, Input, computed, signal, effect } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-player-avatar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './player-avatar.component.html',
  styleUrls: ['./player-avatar.component.scss'],
})
export class PlayerAvatarComponent {
  @Input({ required: true }) username!: string;
  @Input({ required: true }) color!: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() isActive = false;
  @Input() showName = true;
  @Input() showCrown = false;

  animateInit = true;

  get initial(): string {
    return this.username ? this.username.charAt(0).toUpperCase() : '?';
  }

  sizeClasses = {
    sm: 'w-10 h-10 text-xl border-2 border-white/20',
    md: 'w-16 h-16 text-3xl border-3 border-white/20',
    lg: 'w-24 h-24 text-5xl border-4 border-white/20',
  };
}
