import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-category-badge',
  standalone: true,
  imports: [NgClass],
  templateUrl: './category-badge.component.html',
  styleUrls: ['./category-badge.component.scss'],
})
export class CategoryBadgeComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) color!: string;
  @Input() pointValue?: number;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() isHighlighted = false;
  @Input() compact = false;
  @Input() compactSize: 'sm' | 'lg' = 'sm';

  private readonly paths: Record<string, string> = {
    palette:
      'M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H18A3 3 0 0 0 21 11a8 8 0 0 0-9-8Z M7 10h.01M9.5 6.5h.01M14 6h.01M17 9h.01',
    building: 'M4 21V8l8-5 8 5v13M8 21v-4h8v4M8 10h2M14 10h2M8 13h2M14 13h2',
    flask: 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 15h8',
    film: 'M4 5h16v14H4zM8 5v14M16 5v14M4 9h4M16 9h4M4 15h4M16 15h4',
    trophy:
      'M8 4h8v4c0 4-2 6-4 6s-4-2-4-6V4ZM8 6H4v2c0 2 2 3 4 3M16 6h4v2c0 2-2 3-4 3M12 14v4M8 21h8M9 18h6',
    utensils: 'M7 3v8M4 3v5c0 2 1 3 3 3s3-1 3-3V3M7 11v10M15 3v18M15 3c3 1 5 4 5 7h-5',
    globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c5 5 5 13 0 18M12 3c-5 5-5 13 0 18',
    landmark: 'M3 9l9-5 9 5M5 10h14M6 10v8M10 10v8M14 10v8M18 10v8M4 18h16M3 21h18',
    languages: 'M4 5h10M9 3v2M6 8c2 4 4 6 7 7M12 8c-1 3-4 6-7 7M14 20l3.5-9 3.5 9M15.5 17h4',
    'book-open':
      'M4 5a4 4 0 0 1 4-1h4v16H8a4 4 0 0 0-4 1V5ZM20 5a4 4 0 0 0-4-1h-4v16h4a4 4 0 0 1 4 1V5Z',
    calculator:
      'M6 3h12v18H6zM9 6h6v3H9zM9 13h.01M12 13h.01M15 13h.01M9 17h.01M12 17h.01M15 17h.01',
    music: 'M9 18V6l10-2v12M9 9l10-2M6 21a3 3 0 1 0 3-3M16 19a3 3 0 1 0 3-3',
    leaf: 'M20 4C10 4 5 8 5 15c0 3 2 5 5 5 7 0 10-8 10-16ZM4 21c3-5 7-8 12-11',
    briefcase: 'M4 7h16v13H4zM9 7V4h6v3M4 12c5 3 11 3 16 0M10 12v2h4v-2',
    'landmark-dome': 'M4 11h16M6 11a6 6 0 0 1 12 0M12 3v2M6 11v7M10 11v7M14 11v7M18 11v7M3 21h18',
    star: 'm12 3 3 6 6 .8-4.5 4.4 1 6.3-5.5-3-5.5 3 1-6.3L3 9.8 9 9l3-6Z',
    church: 'M7 21V9l5-4 5 4v12M12 2v6M9 4h6M5 21h14M10 14h4v7',
    'heart-pulse': 'M3 12h4l2-4 3 8 2-4h7M20 7c-2-3-6-2-8 1-2-3-6-4-8-1-2 3-1 7 2 10l6 4 6-4',
    cpu: 'M8 8h8v8H8zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3',
    tv: 'M4 6h16v12H4zM9 22h6M8 2l4 4 4-4',
  };

  private readonly artIndexes: Record<string, number> = {
    palette: 0,
    building: 1,
    flask: 2,
    film: 3,
    trophy: 4,
    utensils: 5,
    globe: 6,
    landmark: 7,
    languages: 8,
    'book-open': 9,
    calculator: 10,
    music: 11,
    leaf: 12,
    briefcase: 13,
    'landmark-dome': 14,
    star: 15,
    church: 16,
    'heart-pulse': 17,
    cpu: 18,
    tv: 19,
  };

  get iconPath(): string {
    return this.paths[this.icon] ?? 'M12 3v18M3 12h18';
  }

  get categoryArtPosition(): string {
    const index = this.artIndexes[this.icon] ?? 0;
    const column = index % 2;
    const row = Math.floor(index / 2);
    return `${column * 100}% ${row * (100 / 9)}%`;
  }

  sizeClasses = {
    sm: 'p-1.5 pr-3 min-w-[8.75rem]',
    md: 'p-2 pr-4 min-w-[12.5rem]',
    lg: 'p-3 pr-6 min-w-[17.5rem]',
  };

  iconSizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl',
  };

  textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };
}
