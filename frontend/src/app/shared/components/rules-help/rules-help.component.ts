import { ChangeDetectionStrategy, Component, inject, input, OnDestroy, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-rules-help',
  standalone: true,
  imports: [],
  templateUrl: './rules-help.component.html',
  styleUrl: './rules-help.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesHelpComponent implements OnDestroy {
  readonly compact = input(false);
  private readonly document = inject(DOCUMENT);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private overlayRef?: OverlayRef;

  @ViewChild('rulesDialog') private rulesDialog!: TemplateRef<unknown>;

  open(): void {
    if (this.overlayRef?.hasAttached()) {
      return;
    }

    this.document.body.style.overflow = 'hidden';
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'rules-overlay-backdrop',
      panelClass: 'rules-overlay-panel',
      disposeOnNavigation: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });
    this.overlayRef.attach(new TemplatePortal(this.rulesDialog, this.viewContainerRef));
    this.overlayRef.backdropClick().subscribe(() => this.close());
    this.overlayRef.keydownEvents().subscribe((event) => {
      if (event.key === 'Escape') {
        this.close();
      }
    });
  }

  close(): void {
    this.overlayRef?.dispose();
    this.overlayRef = undefined;
    this.document.body.style.overflow = '';
  }

  ngOnDestroy(): void {
    this.close();
  }
}
