import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Question, AnswerPayload } from '../../../../shared/models/player.model';
import { TimerComponent } from '../../../../shared/components/timer/timer.component';
import { CategoryBadgeComponent } from '../../../../shared/components/category-badge/category-badge.component';

@Component({
  selector: 'app-question-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, TimerComponent, CategoryBadgeComponent],
  templateUrl: './question-modal.component.html'
})
export class QuestionModalComponent implements OnChanges {
  @Input() question: Question | null = null;
  @Input() timer: number = 30;
  @Input() timerTotal: number = 30;
  @Input() isAnswered: boolean = false;
  @Input() canChangeAnswer = false;
  @Input() selectionFailed = false;
  @Input() canBezzerwizzer = false;
  @Input() answeringPlayerName = '';
  @Input() isReboundTurn = false;
  @Input() reboundQueue: string[] = [];
  @Output() onAnswer = new EventEmitter<AnswerPayload>();
  @Output() onBezzerwizzer = new EventEmitter<void>();

  selectedOption: string | null = null;
  freeTextValue: string = '';
  freeTextPrepared = false;
  private autoSubmittedAtTimerEnd = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['question'] && changes['question'].previousValue?.id !== changes['question'].currentValue?.id) {
      this.selectedOption = null;
      this.freeTextValue = '';
      this.freeTextPrepared = false;
      this.autoSubmittedAtTimerEnd = false;
    }
    if (changes['timer'] && !changes['timer'].firstChange && this.timer === 0 && !this.autoSubmittedAtTimerEnd) {
      this.autoSubmittedAtTimerEnd = true;
      this.submitFreeText();
    }
  }

  getLetter(index: number): string {
    return String.fromCharCode(65 + index); // 0=A, 1=B, 2=C, 3=D
  }

  selectOption(letter: string) {
    if (this.isAnswered || !this.question) return;
    this.selectedOption = letter;
    this.onAnswer.emit({
      questionId: this.question.id,
      selectedOption: letter
    });
  }

  submitFreeText() {
    if (this.isAnswered || !this.question || !this.freeTextValue.trim()) return;
    if (this.canChangeAnswer) this.freeTextPrepared = true;
    this.onAnswer.emit({
      questionId: this.question.id,
      freeTextAnswer: this.freeTextValue.trim()
    });
  }

  onFreeTextChanged(): void {
    this.freeTextPrepared = false;
  }

  getOptionClass(letter: string): string {
    if (this.selectedOption === letter && this.selectionFailed) {
      return 'bg-incorrect/10 border-incorrect/50 text-white/45 grayscale opacity-65 cursor-not-allowed';
    }
    if (!this.selectedOption) {
      return 'bg-black/30 border-white/10 text-white hover:bg-black/50 hover:border-white/20 hover:scale-[1.01] hover:-translate-y-0.5';
    }
    
    if (this.selectedOption === letter) {
      return 'bg-primary/30 border-primary text-white scale-[1.02] ring-4 ring-primary/35 shadow-[0_0_1.75rem_rgba(168,85,247,0.55)]';
    }
    return this.canChangeAnswer
      ? 'bg-black/30 border-white/10 text-white hover:bg-black/50 hover:border-white/20 hover:scale-[1.01] hover:-translate-y-0.5'
      : 'bg-black/10 border-white/5 opacity-40 grayscale pointer-events-none';
  }

  getLetterClass(letter: string): string {
    if (this.selectedOption === letter && this.selectionFailed) return 'bg-incorrect text-white';
    if (this.selectedOption === letter) return 'bg-primary text-white';
    return 'bg-white/5 text-text-muted group-hover:bg-primary/10 group-hover:text-primary-light';
  }
}
