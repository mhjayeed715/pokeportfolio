import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { POKEMON_TYPES, getTechMatchup } from '../data/techTypeMap'
import { soundFx } from '../utils/sound'

export default function TypeBadge({
  type = 'Normal',
  techName = '',
  size = 'md', // 'sm' | 'md' | 'lg'
  showTooltip = true,
  className = '',
}) {
  const [hovered, setHovered] = useState(false)
  const typeConfig = POKEMON_TYPES[type] || POKEMON_TYPES.Normal
  const matchup = techName ? getTechMatchup(techName) : null

  const sizeClasses = {
    sm: 'text-[9px] px-2 py-0.5 gap-1',
    md: 'text-[10px] px-2.5 py-0.5 gap-1.5',
    lg: 'text-xs px-3 py-1 gap-2',
  }[size] || 'text-[10px] px-2.5 py-0.5 gap-1.5'

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => {
        if (showTooltip && matchup) {
          soundFx.playBlip()
          setHovered(true)
        }
      }}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Type Pill */}
      <span
        className={`inline-flex items-center font-heading font-black tracking-wider uppercase rounded-full select-none cursor-help transition-all duration-200 ${sizeClasses} ${className}`}
        style={{
          backgroundColor: typeConfig.bg,
          color: typeConfig.text,
          border: `1.5px solid ${typeConfig.border}`,
          boxShadow: hovered ? `0 0 10px ${typeConfig.glow}` : 'none',
        }}
      >
        <span className="shrink-0 leading-none">{typeConfig.symbol}</span>
        <span>{typeConfig.label}</span>
      </span>

      {/* Mini Battle Effectiveness Matchup Tooltip */}
      <AnimatePresence>
        {hovered && matchup && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-64 sm:w-72 pointer-events-none"
          >
            <div className="bg-[#0b0f19]/95 text-white border-2 rounded-2xl p-3 shadow-2xl backdrop-blur-md text-left font-sans space-y-1.5"
              style={{ borderColor: typeConfig.color }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-1.5">
                <div className="flex items-center gap-1.5 font-heading font-bold text-xs" style={{ color: typeConfig.text }}>
                  <span>{typeConfig.symbol}</span>
                  <span>{techName || typeConfig.name} // {typeConfig.label}</span>
                </div>
                <span className="font-pixel text-[8px] text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">
                  MATCHUP
                </span>
              </div>

              {/* Super Effective */}
              {matchup.superEffective && (
                <div className="text-[11px] leading-tight flex items-start gap-1.5 text-emerald-400 font-medium">
                  <span className="font-bold shrink-0">▲</span>
                  <span>{matchup.superEffective}</span>
                </div>
              )}

              {/* Not Very Effective */}
              {matchup.notVeryEffective && (
                <div className="text-[11px] leading-tight flex items-start gap-1.5 text-red-400 font-medium">
                  <span className="font-bold shrink-0">▼</span>
                  <span>{matchup.notVeryEffective}</span>
                </div>
              )}

              {/* Flavor text */}
              {matchup.flavorQuote && (
                <div className="text-[10px] text-slate-300 italic pt-1 border-t border-slate-800 leading-snug">
                  {matchup.flavorQuote}
                </div>
              )}
            </div>

            {/* Triangle Tip */}
            <div
              className="w-2.5 h-2.5 bg-[#0b0f19] border-r-2 border-b-2 rotate-45 mx-auto -mt-1.5"
              style={{ borderColor: typeConfig.color }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
