import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

import { CategorySlot } from '../../../../shared/models/game.model';
import { CategoryBadgeComponent } from '../../../../shared/components/category-badge/category-badge.component';

@Component({
  selector: 'app-category-slots',
  standalone: true,
  imports: [CategoryBadgeComponent, CdkDrag, CdkDropList],
  templateUrl: './category-slots.component.html',
  styleUrl: './category-slots.component.scss',
})
export class CategorySlotsComponent implements OnChanges, OnDestroy {
  @Input({ required: true }) slots!: CategorySlot[];
  @Input() isAssigning = false;
  @Input() currentSlotIndex = -1;
  @Output() assignmentChanged = new EventEmitter<CategorySlot[]>();
  @Output() submitAssignment = new EventEmitter<void>();

  readonly points = [1, 2, 3, 4];
  displaySlots: CategorySlot[] = [];
  draggedIndex: number | null = null;
  dropTargetIndex: number | null = null;
  showAssignmentHint = false;
  private hintTimeout?: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['slots'] && this.slots?.length) {
      this.displaySlots = [...this.slots].sort((a, b) => a.pointValue - b.pointValue);
    }
    if (changes['isAssigning']?.currentValue && !changes['isAssigning'].previousValue) {
      if (this.slots.length === 4 && !this.allAssigned) {
        const initializedSlots = this.slots.map((slot, index) => ({
          ...slot,
          pointValue: this.points[index],
        }));
        this.slots = initializedSlots;
        this.displaySlots = [...initializedSlots];
        queueMicrotask(() => this.assignmentChanged.emit(initializedSlots));
      }
      this.showAssignmentHint = true;
      window.clearTimeout(this.hintTimeout);
      this.hintTimeout = window.setTimeout(() => (this.showAssignmentHint = false), 5700);
    }
  }

  ngOnDestroy(): void {
    window.clearTimeout(this.hintTimeout);
  }

  get allAssigned(): boolean {
    return (
      this.slots.length === 4 &&
      new Set(this.slots.map((slot) => slot.pointValue)).size === 4 &&
      this.slots.every((slot) => slot.pointValue >= 1 && slot.pointValue <= 4)
    );
  }

  isCurrentSlot(slot: CategorySlot): boolean {
    return !this.isAssigning && this.slots[this.currentSlotIndex]?.category.id === slot.category.id;
  }

  startDrag(event: DragEvent, index: number): void {
    if (!this.isAssigning) return;
    this.draggedIndex = index;
    event.dataTransfer?.setData('text/plain', String(index));
    if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move';
  }

  allowDrop(event: DragEvent, index: number): void {
    if (!this.isAssigning || this.draggedIndex === index) return;
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
    this.dropTargetIndex = index;
  }

  clearDropTarget(index: number): void {
    if (this.dropTargetIndex === index) this.dropTargetIndex = null;
  }

  drop(event: DragEvent, targetIndex: number): void {
    event.preventDefault();
    const sourceIndex = this.draggedIndex ?? Number(event.dataTransfer?.getData('text/plain'));
    if (Number.isInteger(sourceIndex) && sourceIndex !== targetIndex) {
      this.swapCategories(sourceIndex, targetIndex);
    }
    this.endDrag();
  }

  endDrag(): void {
    this.draggedIndex = null;
    this.dropTargetIndex = null;
  }

  dropWithCdk(event: CdkDragDrop<CategorySlot[]>): void {
    if (!this.isAssigning || event.previousIndex === event.currentIndex) return;
    const reordered = [...this.displaySlots];
    moveItemInArray(reordered, event.previousIndex, event.currentIndex);
    this.applyOrder(reordered);
  }

  moveWithKeyboard(event: KeyboardEvent, index: number): void {
    if (!this.isAssigning || !['ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const targetIndex = event.key === 'ArrowUp' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= this.displaySlots.length) return;
    this.swapCategories(index, targetIndex);
    window.setTimeout(() => {
      document.querySelector<HTMLElement>(`[data-category-index="${targetIndex}"]`)?.focus();
    });
  }

  private swapCategories(sourceIndex: number, targetIndex: number): void {
    const reordered = [...this.displaySlots];
    [reordered[sourceIndex], reordered[targetIndex]] = [
      reordered[targetIndex],
      reordered[sourceIndex],
    ];
    this.applyOrder(reordered);
  }

  private applyOrder(reordered: CategorySlot[]): void {
    this.displaySlots = reordered.map((slot, index) => ({
      ...slot,
      pointValue: this.points[index],
    }));

    // The server expects values in the original category order, so translate the
    // visual order back to that stable order before emitting the assignment.
    const assignmentByCategory = new Map(
      this.displaySlots.map((slot) => [slot.category.id, slot.pointValue]),
    );
    const canonicalSlots = this.slots.map((slot) => ({
      ...slot,
      pointValue: assignmentByCategory.get(slot.category.id) ?? slot.pointValue,
    }));
    this.slots = canonicalSlots;
    this.assignmentChanged.emit(canonicalSlots);
  }
}
