import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerInfo } from '../../../../shared/models/game.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input({ required: true }) players!: PlayerInfo[];
  @Input() currentTurnPlayerId?: string;
  @Input() winningPosition = 30;
  @ViewChild('track') private track?: ElementRef<HTMLElement>;

  private totalCells = 30;
  private trackWidth = 4;
  private trackHeight = 3;
  private resizeObserver?: ResizeObserver;

  // The final score uses the physical start cell as its goal, so a board
  // configured to 30 has 30 visible cells (positions 0 through 29).
  cells = Array.from({ length: this.totalCells }, (_, index) => this.calculateCellCoordinates(index));

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['winningPosition']) {
      this.totalCells = this.normalizedWinningPosition();
      this.updateCells();
    }
  }

  ngAfterViewInit(): void {
    if (!this.track || typeof ResizeObserver === 'undefined') return;
    this.resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width <= 0 || height <= 0) return;
      this.trackWidth = width;
      this.trackHeight = height;
      this.updateCells();
    });
    this.resizeObserver.observe(this.track.nativeElement);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  // Places positions at equal distances around a rounded rectangle. Using
  // curved corners avoids the visually uneven diagonal jump that appears
  // when a cell moves directly from a horizontal edge to a vertical one.
  private calculateCellCoordinates(index: number): { x: number, y: number } {
    const insetRatio = 0.09;
    const left = this.trackWidth * insetRatio;
    const top = this.trackHeight * insetRatio;
    const width = this.trackWidth * (1 - insetRatio * 2);
    const height = this.trackHeight * (1 - insetRatio * 2);
    const cornerRadius = Math.min(width, height) * 0.1;
    const horizontal = width - cornerRadius * 2;
    const vertical = height - cornerRadius * 2;
    const cornerArc = (Math.PI * cornerRadius) / 2;
    const perimeter = 2 * (horizontal + vertical) + 4 * cornerArc;
    let distance = (index / this.totalCells) * perimeter;
    let x = left + cornerRadius;
    let y = top;

    if (distance <= horizontal) {
      x += distance;
    } else if ((distance -= horizontal) <= cornerArc) {
      const angle = -Math.PI / 2 + distance / cornerRadius;
      x = left + width - cornerRadius + Math.cos(angle) * cornerRadius;
      y = top + cornerRadius + Math.sin(angle) * cornerRadius;
    } else if ((distance -= cornerArc) <= vertical) {
      x = left + width;
      y = top + cornerRadius + distance;
    } else if ((distance -= vertical) <= cornerArc) {
      const angle = distance / cornerRadius;
      x = left + width - cornerRadius + Math.cos(angle) * cornerRadius;
      y = top + height - cornerRadius + Math.sin(angle) * cornerRadius;
    } else if ((distance -= cornerArc) <= horizontal) {
      x = left + width - cornerRadius - distance;
      y = top + height;
    } else if ((distance -= horizontal) <= cornerArc) {
      const angle = Math.PI / 2 + distance / cornerRadius;
      x = left + cornerRadius + Math.cos(angle) * cornerRadius;
      y = top + height - cornerRadius + Math.sin(angle) * cornerRadius;
    } else if ((distance -= cornerArc) <= vertical) {
      x = left;
      y = top + height - cornerRadius - distance;
    } else {
      distance -= vertical;
      const angle = Math.PI + distance / cornerRadius;
      x = left + cornerRadius + Math.cos(angle) * cornerRadius;
      y = top + cornerRadius + Math.sin(angle) * cornerRadius;
    }

    return { x: (x / this.trackWidth) * 100, y: (y / this.trackHeight) * 100 };
  }

  // Pawns use the same coordinate system as the cells. Only occupants of the
  // same cell receive a small pixel offset, so a lone pawn stays centered.
  getPawnPosition(player: PlayerInfo): { x: number; y: number; offsetX: number; offsetY: number } {
    const pos = this.normalizePosition(player.boardPosition);
    const baseCoord = this.calculateCellCoordinates(pos);
    const occupants = this.players
      .filter(candidate => this.normalizePosition(candidate.boardPosition) === pos)
      .sort((first, second) => first.playerId.localeCompare(second.playerId));
    const occupantIndex = occupants.findIndex(candidate => candidate.playerId === player.playerId);
    const count = occupants.length;

    if (count <= 1) {
      return { ...baseCoord, offsetX: 0, offsetY: 0 };
    }

    const angle = -Math.PI / 2 + (Math.PI * 2 * occupantIndex) / count;
    const radius = count === 2 ? 8 : 10;
    return {
      ...baseCoord,
      offsetX: Math.cos(angle) * radius,
      offsetY: Math.sin(angle) * radius
    };
  }

  private normalizePosition(position: number): number {
    const normalized = Math.max(0, Math.floor(position || 0));
    // Reaching the configured target returns to the physical start/goal cell.
    return normalized >= this.normalizedWinningPosition() ? 0 : normalized;
  }

  private normalizedWinningPosition(): number {
    return Math.min(30, Math.max(10, Math.floor(this.winningPosition || 30)));
  }

  private updateCells(): void {
    this.cells = Array.from({ length: this.totalCells }, (_, index) => this.calculateCellCoordinates(index));
  }
}
