import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface AuthResponse {
  token: string;
  playerId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${window.location.origin}/api/auth`;

  playerId = signal<string>('');
  username = signal<string>('');
  token = signal<string>('');
  
  isAuthenticated = computed(() => !!this.token());

  constructor(private http: HttpClient) {
    this.loadFromStorage();
  }

  async loginAsGuest(username: string): Promise<boolean> {
    try {
      const response = await firstValueFrom(
        this.http.post<AuthResponse>(`${this.apiUrl}/guest`, { username })
      );
      
      this.token.set(response.token);
      this.playerId.set(response.playerId);
      this.username.set(username);
      
      // A guest identity belongs to one game window. sessionStorage keeps it on
      // refresh while preventing a second tab/window from impersonating it.
      sessionStorage.setItem('bz_token', response.token);
      sessionStorage.setItem('bz_playerId', response.playerId);
      sessionStorage.setItem('bz_username', username);
      
      return true;
    } catch (error) {
      console.error('Login failed', error);
      return false;
    }
  }

  logout() {
    this.token.set('');
    this.playerId.set('');
    this.username.set('');
    sessionStorage.removeItem('bz_token');
    sessionStorage.removeItem('bz_playerId');
    sessionStorage.removeItem('bz_username');
    // Clean up identities written by older versions of the app.
    localStorage.removeItem('bz_token');
    localStorage.removeItem('bz_playerId');
    localStorage.removeItem('bz_username');
  }

  private loadFromStorage() {
    const token = sessionStorage.getItem('bz_token');
    const playerId = sessionStorage.getItem('bz_playerId');
    const username = sessionStorage.getItem('bz_username');
    
    if (token && playerId && username) {
      this.token.set(token);
      this.playerId.set(playerId);
      this.username.set(username);
    }
  }
}
