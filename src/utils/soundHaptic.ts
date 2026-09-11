// Web Audio API and Web Vibration API helper for realistic haptic feedback
class HapticEngine {
  private audioCtx: AudioContext | null = null;

  private initAudio() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }
  }

  public triggerPattern(pattern: number[], frequencyHz = 55): void {
    // 1. Mobile Physical Vibration API
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch {
        // Ignored if device blocks vibration without user gesture
      }
    }

    // 2. Synthesized Low-Frequency Haptic Sound for Desktop / Speakers
    try {
      this.initAudio();
      if (!this.audioCtx) return;

      let currentTime = this.audioCtx.currentTime;

      pattern.forEach((durationMs, index) => {
        const isPulse = index % 2 === 0;
        const durationSec = durationMs / 1000;

        if (isPulse && this.audioCtx) {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();

          osc.type = 'sine';
          // Low sub-bass frequency to simulate haptic sensation
          osc.frequency.setValueAtTime(frequencyHz, currentTime);
          osc.frequency.exponentialRampToValueAtTime(35, currentTime + durationSec);

          gain.gain.setValueAtTime(0.001, currentTime);
          gain.gain.exponentialRampToValueAtTime(0.4, currentTime + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, currentTime + durationSec);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);

          osc.start(currentTime);
          osc.stop(currentTime + durationSec);
        }

        currentTime += durationSec;
      });
    } catch {
      // AudioContext fallback
    }
  }
}

export const hapticEngine = new HapticEngine();
