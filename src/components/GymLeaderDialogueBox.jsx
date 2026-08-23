import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Play, Sparkles, MessageSquare, ChevronDown } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { philosophyData } from '../data/philosophy'
import { trainerData } from '../data/trainer'
import PokeBallIcon from './PokeBallIcon'

export default function GymLeaderDialogueBox() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const currentPrinciple = philosophyData[currentLineIndex]
  const fullText = `"${currentPrinciple.motto}" — ${currentPrinciple.description}`

  useEffect(() => {
    setDisplayedText('')
    setIsTyping(true)
    let charIdx = 0
    const interval = setInterval(() => {
      if (charIdx < fullText.length) {
        setDisplayedText(fullText.slice(0, charIdx + 1))
        charIdx++
      } else {
        clearInterval(interval)
        setIsTyping(false)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [currentLineIndex])

  const handleNextLine = () => {
    soundFx.playSelect()
    if (currentLineIndex < philosophyData.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1)
    } else {
      setCurrentLineIndex(0) // loop back
    }
  }

  const handleSelectPrinciple = (idx) => {
    soundFx.playSelect()
    setCurrentLineIndex(idx)
  }

  return (
    <div className="space-y-6">
      {/* Classic Pre-Battle Dialogue Box */}
      <div className="relative rounded-3xl border-4 border-slate-900 dark:border-slate-700 bg-card/95 p-5 sm:p-7 shadow-2xl overflow-hidden text-foreground">
        {/* Top Speaker Name Tag Ribbon */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-border">
          <div className="flex items-center gap-2.5">
            <span className="font-pixel text-[8px] bg-red-600 text-white px-2 py-0.5 rounded shadow-sm">
              LEADER
            </span>
            <span className="font-heading font-black text-sm text-foreground uppercase tracking-widest">
              GYM LEADER {trainerData.name.toUpperCase()}
            </span>
          </div>

          <div className="font-mono text-xs text-primary font-bold">
            RULE [ {currentLineIndex + 1} / {philosophyData.length} ] // {currentPrinciple.ruleNumber}
          </div>
        </div>

        {/* Dialogue Box Main Grid: Left Portrait Frame | Right Typewriter Dialogue */}
        <div className="grid sm:grid-cols-[auto_1fr] gap-5 items-start">
          {/* Gym Leader Corner Portrait with Scanning Effect */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-400 bg-black shadow-md shrink-0 mx-auto sm:mx-0">
            <video
              src="/profilevid.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain object-top"
            />
            {/* Scanline CRT overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-50" />
            <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 py-0.2 rounded font-mono text-[8px] text-amber-300 font-bold border border-amber-400/40">
              #00715
            </div>
          </div>

          {/* Typewriter Text Box & Principle Title */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="font-heading text-xs font-bold px-2.5 py-0.5 rounded-full uppercase"
                style={{
                  backgroundColor: `${currentPrinciple.elementColor}20`,
                  color: currentPrinciple.elementColor,
                  border: `1px solid ${currentPrinciple.elementColor}40`,
                }}
              >
                {currentPrinciple.element}
              </span>
              <h4 className="font-heading text-lg font-black text-foreground">
                {currentPrinciple.title}
              </h4>
            </div>

            {/* Terminal Dialogue text */}
            <div className="min-h-[70px] sm:min-h-[85px] font-mono text-xs sm:text-sm leading-relaxed text-foreground/90 p-3 rounded-xl bg-secondary/70 border border-border relative">
              <span>{displayedText}</span>
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
                />
              )}

              {/* Bouncing ▼ Prompt (Advances dialogue on click) */}
              {!isTyping && (
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  onClick={handleNextLine}
                  className="absolute bottom-2 right-3 text-red-500 font-bold text-xs cursor-pointer flex items-center gap-1 bg-card px-2 py-0.5 rounded-md border border-border shadow-sm select-none"
                  title="Click to turn dialogue page"
                >
                  <span className="font-heading text-[10px] uppercase">NEXT (A)</span>
                  <span>▼</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Principle Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-border mt-4">
          {philosophyData.map((p, idx) => {
            const isCurrent = currentLineIndex === idx
            return (
              <button
                key={p.id}
                onClick={() => handleSelectPrinciple(idx)}
                className={`p-2.5 rounded-xl font-heading text-xs font-bold transition-all text-left flex items-center gap-2 cursor-pointer ${
                  isCurrent
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-secondary text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                <PokeBallIcon type={isCurrent ? 'master' : 'pokeball'} size={16} />
                <span className="truncate">{p.title}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
