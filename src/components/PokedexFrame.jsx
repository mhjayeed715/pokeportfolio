import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX, Activity } from 'lucide-react'
import { soundFx } from '../utils/sound'
import ThemeToggle from './ThemeToggle'
import { trainerData } from '../data/trainer'

export default function PokedexFrame() {
  const [soundOn, setSoundOn] = useState(soundFx.isEnabled())
  const [timeStr, setTimeStr] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const d = new Date()
      setTimeStr(
        d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const toggleSound = () => {
    const newVal = soundFx.toggle()
    setSoundOn(newVal)
  }

  return (
    <header className="w-full pokedex-header-shell sticky top-0 z-40 transition-colors duration-300 select-none text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Left: Classic Pokédex Sensor Lens & Status LEDs */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Big Circular Sensor Lens Shell */}
          <div
            className="brand-lens-shell w-11 h-11 sm:w-12 sm:h-12 p-1 flex items-center justify-center cursor-pointer relative"
            onClick={toggleSound}
            title="Pokédex Optical Sensor (Click to toggle sound)"
          >
            <div className="brand-lens w-full h-full relative overflow-hidden flex items-center justify-center">
              {/* White Glint Highlight */}
              <div className="w-3 h-3 rounded-full bg-white opacity-90 absolute top-1 left-1 shadow-sm" />
              <div className="w-1.5 h-1.5 rounded-full bg-sky-200 opacity-80 absolute bottom-1.5 right-1.5" />
            </div>
            {/* Pulsing ring */}
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping opacity-75" />
          </div>

          {/* 3 mini status LEDs */}
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full bg-[#ff3b30] border border-black/40 shadow-[0_0_8px_#ff3b30] animate-pulse"
              title="Power: Active"
            />
            <div
              className="w-3 h-3 rounded-full bg-[#fc0] border border-black/40 shadow-[0_0_8px_#fc0]"
              title="Sync: Connected"
            />
            <div
              className="w-3 h-3 rounded-full bg-[#2aff7c] border border-black/40 shadow-[0_0_8px_#2aff7c] animate-pulse"
              title="Trainer Online"
            />
          </div>

          {/* Pokédex Model / Trainer Badge */}
          <div className="hidden md:flex items-center gap-2 pl-3 border-l border-white/20">
            <span className="font-heading text-xs font-bold bg-black/40 text-amber-300 px-2.5 py-0.5 rounded border border-amber-400/30">
              POKÉDEX {trainerData.trainerId}
            </span>
            <span className="font-heading text-sm text-white/90 font-bold tracking-wider">
              {trainerData.name.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Center: Realtime Telemetry HUD */}
        <div className="hidden lg:flex items-center gap-2 font-mono text-xs bg-black/40 px-3.5 py-1.5 rounded-full border border-white/20 text-white shadow-inner">
          <Activity size={13} className="text-emerald-400 animate-pulse" />
          <span>TIME: {timeStr || '00:00:00'}</span>
          <span className="text-white/30">|</span>
          <span className="text-amber-300">DHAKA REGION</span>
        </div>

        {/* Right: Controls & Battery Indicator */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound FX Toggle Button */}
          <button
            onClick={toggleSound}
            className={`px-3 py-1 rounded-lg font-heading text-xs font-bold flex items-center gap-1.5 transition-all border cursor-pointer ${
              soundOn
                ? 'bg-amber-400/25 border-amber-300 text-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.5)]'
                : 'bg-black/30 border-white/20 text-white/80 hover:text-white'
            }`}
            title={soundOn ? 'Sound Effects: ON' : 'Sound Effects: OFF'}
            aria-label="Toggle Pokédex Sound Effects"
          >
            {soundOn ? <Volume2 size={14} className="text-amber-300 animate-pulse" /> : <VolumeX size={14} />}
            <span className="hidden sm:inline">{soundOn ? 'SFX ON' : 'SFX OFF'}</span>
          </button>

          {/* Theme Toggle (Day / Night) */}
          <div className="bg-black/30 rounded-lg p-0.5 border border-white/20">
            <ThemeToggle onToggle={() => soundFx.playBlip()} />
          </div>

          {/* Battery Indicator with Green Glow */}
          <div className="hidden sm:flex items-center gap-1.5 bg-black/40 border border-white/20 rounded-md px-2.5 py-1 text-white font-mono text-[11px]">
            <div className="w-2 h-2 rounded-full bg-[#00ff66] shadow-[0_0_6px_#00ff66]" />
            <span className="text-emerald-300 font-bold">100%</span>
          </div>
        </div>
      </div>
    </header>
  )
}
