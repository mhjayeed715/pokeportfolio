import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, Sparkles, Shield, Zap, Lock, Layers, Info, Crosshair, Cpu, CheckCircle2 } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { trainerData } from '../data/trainer'
import PokeBallIcon from './PokeBallIcon'
import TypeBadge from './TypeBadge'

const iconMap = {
  Shield,
  Sparkles,
  Zap,
  Lock,
  Layers,
}

export default function About() {
  const [activeAbility, setActiveAbility] = useState(null)
  const [isPlayingCry, setIsPlayingCry] = useState(false)

  const handlePlayCry = () => {
    setIsPlayingCry(true)
    soundFx.playCry()
    setTimeout(() => setIsPlayingCry(false), 600)
  }

  return (
    <section id="about" className="py-14 sm:py-24 relative bg-secondary/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <span className="font-heading text-[10px] sm:text-xs font-bold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
              NATIONAL POKÉDEX // #001
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-widest font-semibold">
              SPECIES DATABASE SCAN
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-foreground">
            Pokédex <span className="gradient-text">Species Entry</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-mono mt-1">
            CLASSIFICATION: {trainerData.speciesTitle} • ARCHITECTURE: FULL-STACK • REGION: DHAKA
          </p>
        </motion.div>

        {/* Dual Panel Authentic Pokédex Layout */}
        <div className="grid lg:grid-cols-[1.1fr_1.2fr] gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Left Panel: Optical Scanner Display with profilevid.webm + Cry Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="pokedex-screen-bezel p-4 sm:p-7 space-y-4 sm:space-y-6 border-2 border-border shadow-xl">
              {/* Scan Reticle Header */}
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground pb-3 sm:pb-4 border-b border-border">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Crosshair size={15} className="animate-spin" />
                  <span>OPTICAL MATRIX // LIVE SCAN</span>
                </div>
                <div className="flex items-center gap-1.5 font-heading font-bold text-emerald-600 dark:text-emerald-400">
                  <PokeBallIcon type="master" size={15} />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Video Scanner Frame (Properly scaled & framed so head/face is never cut) */}
              <div className="relative aspect-[4/5] max-h-[340px] sm:max-h-[430px] rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-700 bg-black shadow-inner flex items-center justify-center mx-auto w-full">
                <video
                  src="/profilevid.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain object-top drop-shadow-lg"
                />

                {/* CRT Scanline Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-40" />

                {/* Laser scan bar */}
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none opacity-70"
                  animate={{ y: ['0%', '800%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                {/* Corner ID */}
                <div className="absolute top-2.5 left-2.5 bg-black/85 text-amber-300 px-2 py-0.5 rounded font-mono text-[9px] sm:text-[10px] font-bold border border-amber-400/40 z-10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SPECIES #001: JAYEED</span>
                </div>
              </div>

              {/* Physical Cry Button + Audio Synthesizer */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-secondary/80 border border-border">
                <div className="space-y-0.5">
                  <span className="font-heading text-xs font-bold text-foreground flex items-center gap-1.5">
                    <Volume2 size={15} className="text-amber-500" />
                    <span>POKÉDEX CRY SYNTHESIZER</span>
                  </span>
                  <p className="text-[11px] text-muted-foreground font-sans">
                    Play 8-bit sound telemetry.
                  </p>
                </div>

                {/* The Red Physical Pokédex Cry Button */}
                <button
                  onClick={handlePlayCry}
                  disabled={isPlayingCry}
                  className={`retro-btn retro-btn-primary px-4 py-2.5 text-xs flex items-center justify-center gap-2 min-h-[44px] ${
                    isPlayingCry ? 'scale-95 opacity-80' : ''
                  }`}
                  title="Click to play Pokédex Cry sound!"
                >
                  <Volume2 size={14} className={isPlayingCry ? 'animate-bounce' : ''} />
                  <span>{isPlayingCry ? 'PLAYING...' : 'CRY (A)'}</span>
                </button>
              </div>

              {/* Pokédex Software Stat Line */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2 border-t border-border font-mono text-xs">
                <div className="p-2.5 sm:p-3 rounded-xl bg-secondary border border-border text-center">
                  <span className="text-muted-foreground text-[9px] sm:text-[10px] uppercase font-bold">
                    STACK DEPTH
                  </span>
                  <p className="font-heading text-xs sm:text-base font-black text-foreground mt-0.5">
                    FULL-STACK // WEB & MOBILE
                  </p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-secondary border border-border text-center">
                  <span className="text-muted-foreground text-[9px] sm:text-[10px] uppercase font-bold">
                    EXPERIENCE WEIGHT
                  </span>
                  <p className="font-heading text-xs sm:text-base font-black text-primary mt-0.5">
                    3+ YRS // 8+ SHIPPED
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Flavor Text Bio & Special Abilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Pokédex Bio Box */}
            <div className="pokedex-screen-bezel p-4 sm:p-7 space-y-3.5 sm:space-y-4 border-2 border-border">
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <h3 className="font-heading text-base sm:text-lg font-black text-foreground uppercase tracking-wider">
                    POKÉDEX FLAVOR TEXT
                  </h3>
                </div>
                <span className="font-mono text-[11px] sm:text-xs text-primary font-bold">DATA ENTRY #001</span>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-2.5 sm:space-y-3 font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {trainerData.bio.map((para, i) => (
                  <p key={i} className="relative pl-3 border-l-2 border-primary/40">
                    {para}
                  </p>
                ))}
              </div>

              {/* Primary Elemental Type Assignment */}
              <div className="pt-3 border-t border-border flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="font-heading text-xs font-bold text-foreground uppercase mr-1">
                  TYPES:
                </span>
                <TypeBadge type="Electric" techName="React" size="md" />
                <TypeBadge type="Psychic" techName="TypeScript" size="md" />
                <TypeBadge type="Water" techName="Flutter" size="md" />
                <TypeBadge type="Grass" techName="Python" size="md" />
              </div>
            </div>

            {/* Trainer Abilities List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <h3 className="font-heading text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                  <Sparkles size={16} className="text-amber-500" />
                  <span>Trainer Abilities (Strengths)</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground font-bold">[ 5 SLOTS ]</span>
              </div>

              <div className="space-y-2 sm:space-y-2.5">
                {trainerData.abilities.map((ab) => {
                  const IconComponent = iconMap[ab.iconName] || Zap
                  const isSelected = activeAbility === ab.name

                  return (
                    <div
                      key={ab.name}
                      onClick={() => {
                        soundFx.playSelect()
                        setActiveAbility(isSelected ? null : ab.name)
                      }}
                      className={`p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer min-h-[48px] ${
                        isSelected
                          ? 'bg-card border-primary shadow-md'
                          : 'bg-card border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                          <div
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-bold shrink-0"
                            style={{ backgroundColor: `${ab.typeColor}20`, color: ab.typeColor }}
                          >
                            <IconComponent size={17} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <h4 className="font-heading text-xs sm:text-sm font-bold text-foreground truncate">
                                {ab.name}
                              </h4>
                              <TypeBadge type={ab.type} size="sm" showTooltip={false} />
                            </div>
                            <p className="text-[11px] sm:text-xs text-muted-foreground font-sans mt-0.5 truncate">
                              {ab.effect}
                            </p>
                          </div>
                        </div>

                        <Info
                          size={15}
                          className={`shrink-0 ${
                            isSelected ? 'text-primary' : 'text-muted-foreground/60'
                          }`}
                        />
                      </div>

                      {/* Expandable Spec Tooltip */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 pt-3 border-t border-border text-xs text-foreground bg-secondary/70 p-3 rounded-xl"
                          >
                            <span className="text-primary font-heading font-bold mr-1.5 inline-block">
                              ABILITY TELEMETRY:
                            </span>
                            <span className="font-sans leading-relaxed text-muted-foreground">{ab.tooltip}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
