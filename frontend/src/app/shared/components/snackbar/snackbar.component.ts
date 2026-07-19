import { Component, inject } from '@angular/core';

import { SnackbarService, SnackbarType } from '../../../core/services/snackbar.service';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
})
export class SnackbarComponent {
  readonly snackbarService = inject(SnackbarService);

  typeLabel(type: SnackbarType): string {
    const labels: Record<SnackbarType, string> = {
      info: 'Información',
      success: 'Completado',
      warning: 'Atención',
      error: 'Error',
    };

    return labels[type];
  }
}
