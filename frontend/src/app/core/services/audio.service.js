import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class AudioService {
    ctx = null;
    volume = signal(this.restoreVolume(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "volume" }] : /* istanbul ignore next */ []));
    muted = signal(this.volume() === 0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "muted" }] : /* istanbul ignore next */ []));
    lastAudibleVolume = this.volume() || 0.7;
    constructor() {
        // Unlock Web Audio from the first user gesture so tactical events received
        // later through WebSocket can be heard by spectators as well.
        document.addEventListener('pointerdown', () => this.init(), { once: true });
    }
    restoreVolume() {
        const saved = Number(localStorage.getItem('bezzer-audio-volume'));
        return Number.isFinite(saved) && saved >= 0 && saved <= 1 ? saved : 0.7;
    }
    setVolume(value) {
        const normalized = Math.min(1, Math.max(0, value));
        this.volume.set(normalized);
        this.muted.set(normalized === 0);
        if (normalized > 0)
            this.lastAudibleVolume = normalized;
        localStorage.setItem('bezzer-audio-volume', String(normalized));
    }
    toggleMute() {
        this.setVolume(this.muted() ? this.lastAudibleVolume : 0);
    }
    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }
    playTone(freq, type, duration, vol = 0.1) {
        try {
            const outputVolume = vol * this.volume();
            if (outputVolume <= 0)
                return;
            this.init();
            if (!this.ctx)
                return;
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
        }
        catch (e) {
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
    playBezzerwizzer() {
        this.playTone(180, 'sawtooth', 0.12, 0.16);
        setTimeout(() => this.playTone(320, 'square', 0.16, 0.12), 90);
        setTimeout(() => this.playTone(520, 'square', 0.25, 0.1), 190);
    }
    playZwap() {
        this.playTone(720, 'sine', 0.11, 0.11);
        setTimeout(() => this.playTone(420, 'triangle', 0.16, 0.12), 85);
        setTimeout(() => this.playTone(860, 'sine', 0.22, 0.1), 170);
    }
    static ɵfac = function AudioService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AudioService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AudioService, factory: AudioService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AudioService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
