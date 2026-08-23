import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Award, Brain, Sparkles, Shield, ExternalLink, ChevronRight, Lock, Unlock } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { gymBadgesData, kantoLeagueBadges } from '../data/badges'
import { projectsData } from '../data/projects'
import PokeBallIcon from './PokeBallIcon'

const iconMap = {
  Trophy,
  Award,
  Brain,
}

export default function BadgeCase({ onSelectProject }) {
  const [selectedBadge, setSelectedBadge] = useState(gymBadgesData[0])
  const [activeKantoBadge, setActiveKantoBadge] = useState(null)

  const handleCompetitionBadgeClick = (badge) => {
    soundFx.playVictory()
    setSelectedBadge(badge)
  }

  // Find linked project for HM unlock mechanic
  const linkedProject = projectsData.find((p) =>
    p.title.toLowerCase().includes('unisharesync') && selectedBadge?.id === 'software-showcase-2026'
  ) || projectsData[0]

  return (
    <div className="space-y-12">
      {/* 1. Official Championship League Badge Case */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div className="flex items-center gap-2">
            <Trophy size={20} className="text-amber-500" />
            <h3 className="font-heading text-xl sm:text-2xl font-black text-foreground">
              Official League Championship Badge Case
            </h3>
          </div>
          <span className="font-mono text-xs text-muted-foreground font-bold">[ 3 COMPETITIVE TITLES ]</span>
        </div>

        {/* Velvet Case Display Box */}
        <div className="gym-velvet-box p-6 sm:p-8 text-white relative overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {gymBadgesData.map((badge, idx) => {
              const IconComponent = iconMap[badge.iconName] || Trophy
              const isSelected = selectedBadge?.id === badge.id

              return (
                <motion.div
                  key={badge.id}
                  whileHover={{ scale: 1.03, y: -4 }}
                  onClick={() => handleCompetitionBadgeClick(badge)}
                  className={`p-5 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between relative group ${
                    isSelected
                      ? 'bg-black/90 border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.6)]'
                      : 'bg-black/60 border-white/20 hover:border-amber-400/80 hover:bg-black/80'
                  }`}
                >
                  <div>
                    {/* Badge Pin Visual */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group-hover:rotate-12 transition-transform"
                        style={{
                          backgroundColor: `${badge.pinColor}25`,
                          color: badge.pinColor,
                          border: `2px solid ${badge.pinColor}`,
                          boxShadow: `0 0 20px ${badge.pinColor}60`,
                        }}
                      >
                        <IconComponent size={28} className="drop-shadow-md" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent" />
                      </div>

                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                        {badge.year}
                      </span>
                    </div>

                    <span className="font-heading text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                      {badge.gymBadgeName}
                    </span>
                    <h4 className="font-heading text-base font-bold text-white leading-snug mt-0.5 mb-1">
                      {badge.title}
                    </h4>
                    <p className="text-xs text-slate-300 font-mono mb-2">
                      {badge.organizer}
                    </p>
                    <p className="text-xs text-slate-300/90 font-sans line-clamp-2">
                      {badge.flavorText}
                    </p>
                  </div>

                  {/* Unlock Status Footer */}
                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-amber-300 font-bold flex items-center gap-1">
                      <Unlock size={13} className="text-emerald-400" />
                      <span>UNLOCKED</span>
                    </span>
                    <span className="text-slate-400 font-sans text-[10px]">Click to Inspect</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* HM Unlocked Project Lore Drawer for Selected Badge */}
          <AnimatePresence>
            {selectedBadge && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6 pt-6 border-t border-white/20 bg-black/60 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-sm font-black text-amber-300 uppercase tracking-wider">
                      ★ BADGE ABILITY UNLOCKED: {selectedBadge.gymBadgeName}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                      HM PASS ACTIVE
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 font-sans leading-relaxed max-w-2xl">
                    {selectedBadge.flavorText}
                  </p>
                </div>

                {selectedBadge.highlightProject && (
                  <div className="shrink-0">
                    <span className="text-xs font-mono text-amber-300 font-bold px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-400/40 inline-flex items-center gap-1.5">
                      <Sparkles size={14} />
                      <span>{selectedBadge.highlightProject}</span>
                    </span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 2. Official 8 Kanto League Gym Badges Case */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div className="flex items-center gap-2">
            <Shield size={20} className="text-amber-500" />
            <h3 className="font-heading text-xl sm:text-2xl font-black text-foreground">
              Official Kanto League Badges Case
            </h3>
          </div>
          <span className="font-mono text-xs text-muted-foreground font-bold">[ ALL 8 BADGES UNLOCKED ]</span>
        </div>

        <div className="gym-velvet-box p-6 sm:p-8 text-white relative overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5 relative z-10">
            {kantoLeagueBadges.map((badge, i) => {
              const isSelected = activeKantoBadge === badge.id

              return (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  onClick={() => {
                    soundFx.playVictory()
                    setActiveKantoBadge(isSelected ? null : badge.id)
                  }}
                  className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center justify-center text-center shadow-lg relative group ${
                    isSelected
                      ? 'bg-black/90 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.6)]'
                      : 'bg-black/60 border-white/20 hover:border-amber-400/80 hover:bg-black/80'
                  }`}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shadow-md relative overflow-hidden mb-2 group-hover:rotate-12 transition-transform"
                    style={{
                      backgroundColor: badge.color,
                      boxShadow: `0 0 14px ${badge.glow}`,
                      border: '2px solid #ffffff60',
                    }}
                  >
                    <Sparkles size={16} className="text-white drop-shadow" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent" />
                  </div>

                  <h4 className="font-heading text-xs font-bold text-amber-300 truncate w-full">
                    {badge.name}
                  </h4>
                  <p className="text-[9px] text-slate-300 font-mono">
                    {badge.city}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Selected Kanto Badge Inspector */}
          <AnimatePresence>
            {activeKantoBadge && (() => {
              const b = kantoLeagueBadges.find((x) => x.id === activeKantoBadge)
              if (!b) return null

              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-black/60 p-4 rounded-2xl"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-sm font-bold text-amber-300">
                        {b.name} // {b.city} (Leader {b.gymLeader})
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                        {b.statBoost}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 font-sans mt-1">
                      {b.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveKantoBadge(null)}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-heading font-bold text-white transition-colors cursor-pointer shrink-0"
                  >
                    Close Badge
                  </button>
                </motion.div>
              )
            })()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
