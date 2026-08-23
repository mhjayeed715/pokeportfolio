import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { soundFx } from '../utils/sound'
import { trainerData } from '../data/trainer'
import PokeBallIcon from './PokeBallIcon'

export default function BootSequence({ onComplete }) {
  const [stage, setStage] = useState(0)
  const [typewriterText, setTypewriterText] = useState('')
  const fullText = `PROF. OAK'S LAB — LOADING PROFILE...\nPOKÉDEX OS v4.2 INITIALIZING...\nREGISTRATION: ${trainerData.trainerId}\nTRAINER IDENTIFIED: ${trainerData.name.toUpperCase()}\nCLASS: ${trainerData.trainerClass.toUpperCase()}\nALL SYSTEMS OPTIMAL. ACCESS GRANTED.`

  useEffect(() => {
    // Check session storage
    const hasBooted = sessionStorage.getItem('pokedex_booted')
    if (hasBooted === 'true') {
      onComplete()
      return
    }

    // Play 3-note original power-on chime
    soundFx.playBoot()

    // Typewriter effect
    let charIndex = 0
    const interval = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypewriterText(fullText.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => setStage(1), 500)
      }
    }, 18)

    return () => clearInterval(interval)
  }, [])

  const handleSkip = () => {
    sessionStorage.setItem('pokedex_booted', 'true')
    soundFx.playSelect()
    onComplete()
  }

  const handleOpenPokeball = () => {
    sessionStorage.setItem('pokedex_booted', 'true')
    soundFx.playCatch()
    setStage(2)
    setTimeout(() => {
      onComplete()
    }, 700)
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 bg-[#06090f] text-[#38BDF8] flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden select-none"
    >
      {/* Main Pokédex Boot Screen Hardware Frame */}
      <div className="relative w-full max-w-2xl border-4 border-red-600/50 bg-[#0c1017] rounded-3xl p-6 sm:p-8 shadow-[0_0_70px_rgba(220,38,38,0.45)] overflow-hidden text-white">
        {/* Top Hardware Header with Big Blue Lens & LEDs */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3.5">
            {/* Lens Shell */}
            <div className="brand-lens-shell w-12 h-12 p-1 flex items-center justify-center shadow-lg">
              <div className="brand-lens w-full h-full relative overflow-hidden flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-white opacity-90 absolute top-1 left-1" />
              </div>
            </div>
            {/* 3 mini status LEDs */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff3b30] border border-black/60 shadow-[0_0_8px_#ff3b30] animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-[#fc0] border border-black/60 shadow-[0_0_8px_#fc0]" />
              <div className="w-3 h-3 rounded-full bg-[#2aff7c] border border-black/60 shadow-[0_0_8px_#2aff7c] animate-pulse" />
            </div>
          </div>
          <div className="font-heading text-xs tracking-widest text-slate-400 font-bold">
            PROF. OAK'S LAB // SILPH CO.
          </div>
        </div>

        {/* CRT Cyan Terminal Screen */}
        <div className="min-h-[160px] sm:min-h-[180px] bg-[#04070e] border-2 border-slate-800 rounded-2xl p-5 mb-6 shadow-inner relative overflow-hidden">
          <pre className="font-mono text-xs sm:text-sm leading-relaxed text-[#17f4c1] whitespace-pre-wrap">
            {typewriterText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.4, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-[#17f4c1] ml-1 align-middle"
            />
          </pre>
        </div>

        {/* Action Button & Skip Prompt */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
          <button
            onClick={handleSkip}
            className="font-heading text-xs text-slate-400 hover:text-white transition-colors cursor-pointer tracking-wider font-bold"
          >
            [ TAP ANYWHERE OR CLICK TO SKIP ]
          </button>

          <button
            onClick={handleOpenPokeball}
            className="retro-btn retro-btn-primary px-6 py-3 text-xs flex items-center gap-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="shrink-0"
            >
              <PokeBallIcon type="master" size={20} />
            </motion.div>
            <span>OPEN POKÉDEX (ENTER)</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
