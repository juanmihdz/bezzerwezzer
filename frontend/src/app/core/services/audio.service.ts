import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private ctx: AudioContext | null = null;
  readonly volume = signal(this.restoreVolume());
  readonly muted = signal(this.volume() === 0);
  private lastAudibleVolume = this.volume() || 0.7;

  constructor() {
    // Unlock Web Audio from the first user gesture so tactical events received
    // later through WebSocket can be heard by spectators as well.
    document.addEventListener('pointerdown', () => this.init(), { once: true });
  }

  private restoreVolume(): number {
    const saved = Number(localStorage.getItem('bezzer-audio-volume'));
    return Number.isFinite(saved) && saved >= 0 && saved <= 1 ? saved : 0.7;
  }

  setVolume(value: number): void {
    const normalized = Math.min(1, Math.max(0, value));
    this.volume.set(normalized);
    this.muted.set(normalized === 0);
    if (normalized > 0) this.lastAudibleVolume = normalized;
    localStorage.setItem('bezzer-audio-volume', String(normalized));
  }

  toggleMute(): void {
    this.setVolume(this.muted() ? this.lastAudibleVolume : 0);
  }

  private init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, type: OscillatorType, duration: number, vol = 0.1) {
    try {
      const outputVolume = vol * this.volume();
      if (outputVolume <= 0) return;
      this.init();
      if (!this.ctx) return;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(outputVolume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Ignore if audio not allowed yet
    }
  }

  playCorrect() {
    this.playTone(600, 'sine', 0.1);
    setTimeout(() => this.playTone(800, 'sine', 0.3), 100);
  }

  playIncorrect() {
    this.playTone(300, 'sawtooth', 0.2, 0.2);
    setTimeout(() => this.playTone(250, 'sawtooth', 0.4, 0.2), 150);
  }

  playTick() {
    this.playTone(1000, 'sine', 0.05, 0.05);
  }

  playNotification() {
    this.playTone(500, 'sine', 0.2);
  }

  playQuestionStart() {
    this.playTone(440, 'triangle', 0.09, 0.09);
    setTimeout(() => this.playTone(660, 'triangle', 0.13, 0.1), 75);
    setTimeout(() => this.playTone(880, 'sine', 0.2, 0.08), 165);
  }

  playBezzerwizzer() {
    this.playTone(150, 'sawtooth', 0.1, 0.2);
    setTimeout(() => this.playTone(220, 'square', 0.12, 0.16), 70);
    setTimeout(() => this.playTone(330, 'square', 0.14, 0.13), 145);
    setTimeout(() => this.playTone(490, 'sawtooth', 0.18, 0.12), 225);
    setTimeout(() => this.playTone(660, 'square', 0.3, 0.1), 315);
  }

  playZwapActivated() {
    this.playTone(560, 'triangle', 0.1, 0.1);
    setTimeout(() => this.playTone(690, 'triangle', 0.12, 0.11), 80);
    setTimeout(() => this.playTone(820, 'sine', 0.2, 0.09), 165);
  }

  playZwap() {
    this.playTone(860, 'sine', 0.1, 0.12);
    setTimeout(() => this.playTone(520, 'triangle', 0.11, 0.12), 75);
    setTimeout(() => this.playTone(740, 'sine', 0.1, 0.11), 145);
    setTimeout(() => this.playTone(610, 'triangle', 0.13, 0.1), 220);
    setTimeout(() => this.playTone(980, 'sine', 0.28, 0.11), 305);
  }

  playGameOver() {
    const notes = [523, 659, 784, 1047, 1319];
    notes.forEach((note, index) => {
      setTimeout(() => this.playTone(note, index < 3 ? 'triangle' : 'sine', index === 4 ? 0.55 : 0.2, 0.13), index * 115);
    });
  }
}
