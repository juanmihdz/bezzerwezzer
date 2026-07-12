import { Component, inject, Input, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-rules-help',
  standalone: true,
  imports: [],
  templateUrl: './rules-help.component.html',
  styleUrl: './rules-help.component.scss',
})
export class RulesHelpComponent implements OnDestroy {
  @Input() compact = false;
  private readonly document = inject(DOCUMENT);
  isOpen = false;

  open(): void {
    this.isOpen = true;
    this.document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.isOpen = false;
    this.document.body.style.overflow = '';
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }
}
