import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AudioService {
    ctx = null;
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
            this.init();
            if (!this.ctx)
                return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(vol, this.ctx.currentTime);
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
    static ɵfac = function AudioService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AudioService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AudioService, factory: AudioService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AudioService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
