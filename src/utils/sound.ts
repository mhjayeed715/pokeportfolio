// Web Audio API Retro 8-bit Synthesizer for Pokédex Sound FX

class SoundManager {
  private ctx: AudioContext | null = null
  private enabled: boolean = false

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pokedex_sound_enabled')
      this.enabled = saved === 'true'
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {})
    }
  }

  public isEnabled(): boolean {
    return this.enabled
  }

  public setEnabled(val: boolean) {
    this.enabled = val
    if (typeof window !== 'undefined') {
      localStorage.setItem('pokedex_sound_enabled', val ? 'true' : 'false')
    }
    if (val) {
      this.initCtx()
      this.playBlip()
    }
  }

  public toggle(): boolean {
    this.setEnabled(!this.enabled)
    return this.enabled
  }

  // Quick 8-bit navigation / hover chirp
  public playBlip() {
    if (!this.enabled) return
    try {
      this.initCtx()
      if (!this.ctx) return
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'square'
      osc.frequency.setValueAtTime(980, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(1480, this.ctx.currentTime + 0.04)

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.04)
    } catch {
      // AudioContext fallback
    }
  }

  // Pokédex Select (A-Button)
  public playSelect() {
    if (!this.enabled) return
    try {
      this.initCtx()
      if (!this.ctx) return
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'square'
      osc.frequency.setValueAtTime(660, this.ctx.currentTime)
      osc.frequency.setValueAtTime(880, this.ctx.currentTime + 0.04)

      gain.gain.setValueAtTime(0.1, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.09)
    } catch {}
  }

  // Game Boy Power-On / Pokédex Boot Chime (Original 3-note harmonic blip)
  public playBoot() {
    if (!this.enabled) return
    try {
      this.initCtx()
      if (!this.ctx) return
      const notes = [
        { f: 523.25, d: 0.08 }, // C5
        { f: 659.25, d: 0.08 }, // E5
        { f: 1046.5, d: 0.25 }, // C6
      ]
      let cur = this.ctx.currentTime
      notes.forEach((n) => {
        const osc = this.ctx!.createOscillator()
        const gain = this.ctx!.createGain()

        osc.type = 'square'
        osc.frequency.setValueAtTime(n.f, cur)

        gain.gain.setValueAtTime(0.12, cur)
        gain.gain.exponentialRampToValueAtTime(0.001, cur + n.d)

        osc.connect(gain)
        gain.connect(this.ctx!.destination)

        osc.start(cur)
        osc.stop(cur + n.d)

        cur += n.d * 0.8
      })
    } catch {}
  }

  // Pokédex Open sequence chime
  public playOpen() {
    if (!this.enabled) return
    try {
      this.initCtx()
      if (!this.ctx) return
      const notes = [523.25, 659.25, 783.99, 1046.5] // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator()
        const gain = this.ctx!.createGain()
        const start = this.ctx!.currentTime + idx * 0.07

        osc.type = 'square'
        osc.frequency.setValueAtTime(freq, start)

        gain.gain.setValueAtTime(0.09, start)
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.12)

        osc.connect(gain)
        gain.connect(this.ctx!.destination)

        osc.start(start)
        osc.stop(start + 0.12)
      })
    } catch {}
  }

  // Authentic Synthesized 8-Bit Pokédex Cry Sound (Original custom dual-oscillator modulated cry)
  public playCry() {
    if (!this.enabled) return
    try {
      this.initCtx()
      if (!this.ctx) return
      const t = this.ctx.currentTime

      // Dual square oscillators with pitch envelope & FM vibrato
      const osc1 = this.ctx.createOscillator()
      const osc2 = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc1.type = 'sawtooth'
      osc2.type = 'square'

      // Pitch glide: 350Hz -> 900Hz -> 420Hz -> 650Hz
      osc1.frequency.setValueAtTime(350, t)
      osc1.frequency.exponentialRampToValueAtTime(880, t + 0.12)
      osc1.frequency.exponentialRampToValueAtTime(440, t + 0.28)
      osc1.frequency.exponentialRampToValueAtTime(700, t + 0.42)

      osc2.frequency.setValueAtTime(355, t)
      osc2.frequency.exponentialRampToValueAtTime(890, t + 0.12)
      osc2.frequency.exponentialRampToValueAtTime(445, t + 0.28)
      osc2.frequency.exponentialRampToValueAtTime(710, t + 0.42)

      // Volume envelope
      gain.gain.setValueAtTime(0.12, t)
      gain.gain.setValueAtTime(0.15, t + 0.15)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45)

      osc1.connect(gain)
      osc2.connect(gain)
      gain.connect(this.ctx.destination)

      osc1.start(t)
      osc2.start(t)
      osc1.stop(t + 0.45)
      osc2.stop(t + 0.45)
    } catch {}
  }

  // Poké Ball Throw whoosh
  public playThrow() {
    if (!this.enabled) return
    try {
      this.initCtx()
      if (!this.ctx) return
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(700, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.22)

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.22)
    } catch {}
  }

  // Poké Ball Shake click / tick
  public playWobble() {
    if (!this.enabled) return
    try {
      this.initCtx()
      if (!this.ctx) return
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(320, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(480, this.ctx.currentTime + 0.08)

      gain.gain.setValueAtTime(0.1, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.08)
    } catch {}
  }

  // Catch Success Fanfare!
  public playCatch() {
    if (!this.enabled) return
    try {
      this.initCtx()
      if (!this.ctx) return
      // Pokemon Classic Item / Catch fanfare notes: C5, G4, C5, E5, G5, C6
      const notes = [
        { f: 523.25, d: 0.1 },
        { f: 392.00, d: 0.1 },
        { f: 523.25, d: 0.1 },
        { f: 659.25, d: 0.12 },
        { f: 783.99, d: 0.14 },
        { f: 1046.50, d: 0.35 },
      ]

      let cur = this.ctx.currentTime
      notes.forEach((n) => {
        const osc = this.ctx!.createOscillator()
        const gain = this.ctx!.createGain()

        osc.type = 'square'
        osc.frequency.setValueAtTime(n.f, cur)

        gain.gain.setValueAtTime(0.12, cur)
        gain.gain.exponentialRampToValueAtTime(0.001, cur + n.d)

        osc.connect(gain)
        gain.connect(this.ctx!.destination)

        osc.start(cur)
        osc.stop(cur + n.d)

        cur += n.d * 0.9
      })
    } catch {}
  }

  // Gym Badge Shiny Glimmer Fanfare
  public playVictory() {
    if (!this.enabled) return
    try {
      this.initCtx()
      if (!this.ctx) return
      const freqs = [659.25, 830.61, 987.77, 1318.51] // E major sparkle
      freqs.forEach((f, i) => {
        const osc = this.ctx!.createOscillator()
        const gain = this.ctx!.createGain()
        const start = this.ctx!.currentTime + i * 0.06

        osc.type = 'triangle'
        osc.frequency.setValueAtTime(f, start)

        gain.gain.setValueAtTime(0.08, start)
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.18)

        osc.connect(gain)
        gain.connect(this.ctx!.destination)

        osc.start(start)
        osc.stop(start + 0.18)
      })
    } catch {}
  }

  // Evolution Line Ascend
  public playEvolve() {
    if (!this.enabled) return
    try {
      this.initCtx()
      if (!this.ctx) return
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(300, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(900, this.ctx.currentTime + 0.3)

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.3)
    } catch {}
  }
}

export const soundFx = new SoundManager()
