import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerInfo } from '../../../../shared/models/game.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) players!: PlayerInfo[];
  @Input() currentTurnPlayerId?: string;
  @ViewChild('boardSurface') private boardSurface?: ElementRef<HTMLElement>;

  private readonly totalCells = 30;
  private trackWidth = 4;
  private trackHeight = 3;
  private resizeObserver?: ResizeObserver;

  // Generate 30 equally spaced cells around the board perimeter.
  cells = Array.from({ length: 30 }).map((_, i) => this.calculateCellCoordinates(i));

  ngAfterViewInit(): void {
    if (!this.boardSurface || typeof ResizeObserver === 'undefined') return;
    this.resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width <= 0 || height <= 0) return;
      this.trackWidth = width;
      this.trackHeight = height;
      this.cells = Array.from({ length: this.totalCells }, (_, index) => this.calculateCellCoordinates(index));
    });
    this.resizeObserver.observe(this.boardSurface.nativeElement);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  // Keeps one cell on every corner, then divides the remaining cells between
  // horizontal and vertical sides in proportion to the actual board shape.
  private calculateCellCoordinates(index: number): { x: number, y: number } {
    const insetRatio = 0.09;
    const left = this.trackWidth * insetRatio;
    const top = this.trackHeight * insetRatio;
    const width = this.trackWidth * (1 - insetRatio * 2);
    const height = this.trackHeight * (1 - insetRatio * 2);
    // Opposite sides use the same number of intervals. Their sum is 15 because
    // the complete path has 30 intervals; the split follows the board ratio.
    const horizontalSegments = Math.min(14, Math.max(1, Math.round(
      (this.totalCells / 2) * (width / (width + height))
    )));
    const verticalSegments = (this.totalCells / 2) - horizontalSegments;
    const topRight = horizontalSegments;
    const bottomRight = topRight + verticalSegments;
    const bottomLeft = bottomRight + horizontalSegments;
    let x = left;
    let y = top;

    if (index <= topRight) {
      x += (index / horizontalSegments) * width;
    } else if (index <= bottomRight) {
      x += width;
      y += ((index - topRight) / verticalSegments) * height;
    } else if (index <= bottomLeft) {
      x += width - ((index - bottomRight) / horizontalSegments) * width;
      y += height;
    } else {
      y += height - ((index - bottomLeft) / verticalSegments) * height;
    }

    return { x: (x / this.trackWidth) * 100, y: (y / this.trackHeight) * 100 };
  }

  // Adds a slight offset so pawns on the same cell don't completely overlap
  getPawnPosition(boardPosition: number, playerId: string): { x: number, y: number } {
    // Normalize position to board size
    const pos = boardPosition % 30;
    const baseCoord = this.calculateCellCoordinates(pos);
    
    // Generate a deterministic offset based on playerId to avoid overlapping
    let hash = 0;
    for (let i = 0; i < playerId.length; i++) {
      hash = playerId.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Offset between -2% and +2%
    const offsetX = (hash % 100) / 50 - 1;
    const offsetY = ((hash >> 8) % 100) / 50 - 1;
    
    return {
      x: baseCoord.x + offsetX * 2,
      y: baseCoord.y + offsetY * 2
    };
  }
}
