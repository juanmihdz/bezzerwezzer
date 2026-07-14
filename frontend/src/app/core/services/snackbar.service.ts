import { Injectable, signal } from '@angular/core';

export type SnackbarType = 'info' | 'success' | 'warning' | 'error';

export interface SnackbarMessage {
  id: string;
  message: string;
  type: SnackbarType;
}

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private readonly maxVisibleMessages = 3;
  messages = signal<SnackbarMessage[]>([]);

  show(message: string, type: SnackbarType = 'info', duration: number = 4000) {
    const id = Math.random().toString(36).substring(2, 9);
    
    this.messages.update(msgs => [
      ...msgs.slice(-(this.maxVisibleMessages - 1)),
      { id, message, type }
    ]);

    if (duration > 0) {
      setTimeout(() => this.remove(id), duration);
    }
  }

  remove(id: string) {
    this.messages.update(msgs => msgs.filter(m => m.id !== id));
  }
}
