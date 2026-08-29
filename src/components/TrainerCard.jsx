import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Trophy, Award, Brain, FileDown, MapPin, Zap } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { trainerData } from '../data/trainer'
import PokeBallIcon from './PokeBallIcon'
import HPBar from './HPBar'

const GitHubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function TrainerCard() {
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    // Only apply tilt on pointer devices that support hover
    if (!cardRef.current || (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches)) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
    setCardTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateY: cardTilt.x,
        rotateX: cardTilt.y,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="relative rounded-3xl border-3 border-amber-400/70 bg-card/95 text-foreground shadow-2xl p-4 sm:p-7 lg:p-10 overflow-hidden holo-sheen backdrop-blur-md"
      style={{
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25), 0 0 30px rgba(251, 191, 36, 0.2)',
      }}
    >
      {/* Metallic Gold Top Card Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b-2 border-border">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-heading font-black text-[11px] sm:text-xs uppercase tracking-widest shadow-md flex items-center gap-2">
            <PokeBallIcon type="master" size={16} />
            <span>OFFICIAL TRAINER CARD</span>
          </div>
          <div className="font-mono text-[11px] sm:text-xs text-primary font-bold tracking-wider">
            IDNo. 00715 // KANTO REGION
          </div>
        </div>

        {/* Level Tag & Status Pill */}
        <div className="flex items-center gap-2">
          <span className="font-heading text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            READY FOR BATTLE
          </span>
          <span className="font-pixel text-[8px] sm:text-[9px] px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 font-bold">
            LV. 100
          </span>
        </div>
      </div>

      {/* Main Grid: Left Details & Badges | Right Photo / Video Hologram */}
      <div className="grid lg:grid-cols-[1.3fr_0.85fr] gap-6 sm:gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-4 sm:space-y-5">
          {/* Trainer Name & Class */}
          <div>
            <span className="font-heading text-xs font-bold text-primary tracking-widest uppercase mb-1 inline-block">
              CLASS: {trainerData.trainerClass}
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-tight">
              {trainerData.name}
            </h2>
            <p className="font-mono text-[11px] sm:text-xs text-muted-foreground mt-1">
              AFFILIATION: SHANTO-MARIAM UNIVERSITY OF CREATIVE TECHNOLOGY
            </p>
          </div>

          {/* Authentic In-Battle HP/PWR Bar */}
          <div className="p-3 rounded-2xl bg-secondary/80 border border-border">
            <HPBar value={100} max={100} label="PWR" size="md" />
          </div>

          {/* Real Gen 3/4 Trainer Card Telemetry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-secondary/60 border border-border font-mono text-xs">
            <div className="space-y-1">
              <span className="text-muted-foreground text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">
                POKÉDEX OWNED:
              </span>
              <p className="font-heading text-sm sm:text-base font-black text-foreground">
                8 / 8 CAUGHT
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-muted-foreground text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">
                TIME PLAYED:
              </span>
              <p className="font-heading text-sm sm:text-base font-black text-foreground">
                3+ YEARS
              </p>
            </div>
            <div className="space-y-1 col-span-2 sm:col-span-1">
              <span className="text-muted-foreground text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">
                TECH MONIES:
              </span>
              <p className="font-heading text-sm sm:text-base font-black text-amber-500">
                20+ TECH TYPES
              </p>
            </div>
          </div>

          {/* Badges Collected Shelf (3 Competition Wins) */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-secondary/80 border border-border">
            <div className="flex items-center justify-between mb-3">
              <span className="font-heading text-xs font-bold text-foreground flex items-center gap-1.5">
                <Trophy size={14} className="text-amber-500 shrink-0" />
                <span>BADGES COLLECTED: [ 3 LEAGUE WINS ]</span>
              </span>
              <span className="font-mono text-[10px] text-muted-foreground font-bold shrink-0">ALL UNLOCKED</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {/* Badge 1: 2nd Place Showcase */}
              <div
                onClick={() => soundFx.playVictory()}
                className="p-2.5 rounded-xl bg-card border border-amber-400/40 hover:border-amber-400 transition-all cursor-pointer flex items-center gap-2 group min-h-[44px]"
                title="2nd Place — Software Project Showcase 2026 (UniShareSync)"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400 text-amber-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Trophy size={15} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-[11px] font-bold text-foreground truncate">Silver Prism</p>
                  <p className="text-[9px] text-muted-foreground font-mono">2nd Place '26</p>
                </div>
              </div>

              {/* Badge 2: Champion Project Showcasing */}
              <div
                onClick={() => soundFx.playVictory()}
                className="p-2.5 rounded-xl bg-card border border-emerald-400/40 hover:border-emerald-400 transition-all cursor-pointer flex items-center gap-2 group min-h-[44px]"
                title="Champion — Project Showcasing 2025 (Team X)"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Award size={15} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-[11px] font-bold text-foreground truncate">Apex Victory</p>
                  <p className="text-[9px] text-muted-foreground font-mono">Champion '25</p>
                </div>
              </div>

              {/* Badge 3: Datathon ML */}
              <div
                onClick={() => soundFx.playVictory()}
                className="p-2.5 rounded-xl bg-card border border-indigo-400/40 hover:border-indigo-400 transition-all cursor-pointer flex items-center gap-2 group min-h-[44px]"
                title="Datathon — ML Contest 2026 (Loan ML Pipeline)"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Brain size={15} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-[11px] font-bold text-foreground truncate">Cascade Mind</p>
                  <p className="text-[9px] text-muted-foreground font-mono">ML Contest '26</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row & Resume PDF */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
            <a
              href="#projects"
              onClick={() => soundFx.playSelect()}
              className="retro-btn retro-btn-primary px-5 py-3 text-xs flex items-center justify-center gap-2 min-h-[44px]"
            >
              <PokeBallIcon type="pokeball" size={18} />
              <span>Inspect Party (A)</span>
            </a>

            <a
              href={trainerData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playSelect()}
              className="px-4 py-3 rounded-xl border border-border bg-secondary hover:border-primary text-foreground font-heading text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px]"
              title="Download Trainer ID (Resume PDF)"
            >
              <FileDown size={14} />
              <span>Download Trainer ID</span>
            </a>

            {/* Socials */}
            <div className="flex items-center justify-center gap-2 pt-1 sm:pt-0 sm:pl-2">
              <a
                href={trainerData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playBlip()}
                className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={trainerData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playBlip()}
                className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Video Frame with profilevid.webm */}
        <div className="flex justify-center pt-2 sm:pt-0">
          <div className="relative w-full max-w-[260px] sm:max-w-[300px]">
            {/* Elemental Gradient Aura Ring */}
            <motion.div
              className="absolute -inset-2.5 rounded-3xl pointer-events-none opacity-50 dark:opacity-40"
              style={{
                background: 'conic-gradient(from 0deg, #dc2626, #f59e0b, #0284c7, #10b981, #8b5cf6, #dc2626)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            />

            {/* Main Pokédex Video Display Bezel */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-amber-400 bg-black shadow-2xl flex items-center justify-center p-1.5">
              {/* Profile Video WebM Loop */}
              <video
                src="/profilevid.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain object-top rounded-2xl drop-shadow-md"
              />

              {/* CRT Scanline Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-40" />

              {/* Corner Telemetry Overlay */}
              <div className="absolute top-2.5 left-2.5 bg-black/80 text-amber-300 px-2.5 py-1 rounded-lg font-heading text-[9px] sm:text-[10px] font-bold border border-amber-400/40 z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>TRAINER #00715</span>
              </div>

              <div className="absolute bottom-2.5 right-2.5 bg-black/80 text-sky-300 px-2 py-0.5 rounded-lg font-mono text-[8px] sm:text-[9px] font-bold border border-sky-400/40 z-10">
                LIVE OPTICAL FEED
              </div>

              {/* Holographic light gleam sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"
                animate={{ x: ['-120%', '120%'] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
              />
            </div>

            {/* Floating Elemental Type Badges - safely bounded inside mobile container */}
            <motion.div
              className="absolute -top-2.5 right-0 sm:-right-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-card border border-border font-heading text-[10px] sm:text-xs font-bold shadow-lg flex items-center gap-1.5 text-foreground z-20"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PokeBallIcon type="ultra" size={14} />
              <span>ELECTRIC / PSYCHIC</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-2.5 left-0 sm:-left-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-card border border-border font-heading text-[10px] sm:text-xs font-bold shadow-lg flex items-center gap-1.5 text-foreground z-20"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <PokeBallIcon type="great" size={14} />
              <span>FULL-STACK ARCHITECT</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
