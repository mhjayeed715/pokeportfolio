import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Play, Code2, Trophy, Swords, Sparkles, ChevronRight, Layers, ShieldCheck, Activity, ExternalLink } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { POKEMON_TYPES } from '../data/techTypeMap'
import PokeBallIcon from './PokeBallIcon'
import TypeBadge from './TypeBadge'
import HPBar from './HPBar'

export default function SummaryScreenModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('info') // 'info' | 'moves' | 'ribbons' | 'stats'

  if (!project) return null

  const tabs = [
    { id: 'info', label: '1. INFO', fullLabel: '1. POKÉMON INFO' },
    { id: 'moves', label: '2. MOVES', fullLabel: '2. KNOWN MOVES' },
    { id: 'ribbons', label: '3. RIBBONS', fullLabel: '3. RIBBONS' },
    { id: 'stats', label: '4. STATS', fullLabel: '4. BATTLE STATS' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-card text-foreground border-3 border-primary rounded-3xl shadow-[0_0_50px_rgba(220,38,38,0.4)] overflow-y-auto max-h-[92dvh] p-4 sm:p-7 space-y-4 sm:space-y-6"
      >
        {/* Modal Top Header (Pokédex Summary Mode) */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 sm:pb-4 border-b-2 border-border">
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <PokeBallIcon type={project.ballType || 'master'} size={24} className="shrink-0" />
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[10px] sm:text-xs text-primary font-bold block">
                POKÉMON SUMMARY SCREEN // {project.speciesNumber}
              </span>
              <h2 className="font-heading font-black text-lg sm:text-2xl text-foreground leading-tight truncate">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="font-pixel text-[8px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30 font-bold">
              LV. {project.level || 100}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-secondary cursor-pointer transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Close summary modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* 4-Tab Navigation Bar (Horizontal Scrollable Strip on Mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-border pb-2 -mx-1 px-1">
          {tabs.map((tab) => {
            const isTabActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playSelect()
                  setActiveTab(tab.id)
                }}
                className={`px-3 py-2 rounded-xl font-heading text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 min-h-[36px] ${
                  isTabActive
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-secondary text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                <span className="sm:hidden">{tab.label}</span>
                <span className="hidden sm:inline">{tab.fullLabel}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content Display Area */}
        <div className="min-h-[220px]">
          {/* TAB 1: POKÉMON INFO */}
          {activeTab === 'info' && (
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-4 sm:gap-6 items-start">
              {/* Screenshot & Visual Media */}
              <div className="space-y-3">
                <div className="aspect-video rounded-2xl overflow-hidden border-2 border-border bg-secondary relative shadow-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded font-mono text-[9px] text-amber-300 font-bold border border-amber-400/40">
                    TIER: {(project.ballType || 'pokeball').toUpperCase()} BALL
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-secondary/80 border border-border">
                  <HPBar value={project.stats?.hp || 95} max={100} label="PWR" size="sm" />
                </div>
              </div>

              {/* Lore & Tech Info */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <span className="font-heading text-[11px] sm:text-xs font-bold text-primary uppercase tracking-wider">
                    SPECIES SUBTITLE:
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">
                    {project.subtitle}
                  </h3>
                </div>

                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Elemental Types */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.types.map((typeName) => (
                    <TypeBadge key={typeName} type={typeName} size="md" />
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <div
                      key={t.name}
                      className="px-2.5 py-1 rounded-xl bg-secondary border border-border text-foreground font-heading text-[11px] sm:text-xs font-bold flex items-center gap-1.5"
                    >
                      <img src={t.icon} alt={t.name} className="w-3.5 h-3.5 object-contain" />
                      <span>{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KNOWN MOVES (The 4 Key Features) */}
          {activeTab === 'moves' && (
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <span className="font-heading text-xs font-bold text-primary uppercase tracking-wider">
                  LEARNED SIGNATURE MOVES [ 4 / 4 SLOTS ]
                </span>
                <span className="font-mono text-[11px] sm:text-xs text-muted-foreground font-bold">AVAILABILITY: MAX</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {project.moves.map((move, idx) => (
                  <div
                    key={move.name}
                    className="p-3.5 sm:p-4 rounded-2xl border border-border bg-secondary/70 space-y-1.5 sm:space-y-2 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-pixel text-[8px] text-amber-500 font-bold">
                          M{idx + 1}
                        </span>
                        <h4 className="font-heading text-xs sm:text-sm font-bold text-foreground">
                          {move.name}
                        </h4>
                      </div>
                      <TypeBadge type={move.type} size="sm" />
                    </div>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                      {move.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: RIBBONS (Cosmetic Achievement Awards) */}
          {activeTab === 'ribbons' && (
            <div className="space-y-4 sm:space-y-5">
              <div className="pb-2 border-b border-border">
                <span className="font-heading text-xs font-bold text-primary uppercase tracking-wider">
                  CONTEST RIBBONS & COMMENDATIONS
                </span>
              </div>

              {project.ribbon ? (
                <div className="p-4 sm:p-6 rounded-3xl border-2 border-amber-400/50 bg-gradient-to-r from-amber-500/10 via-card to-amber-500/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 shadow-lg">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md shrink-0">
                    <Trophy size={26} />
                  </div>
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-500 font-heading text-[10px] font-bold uppercase mb-1">
                      CHAMPIONSHIP CONTEST RIBBON
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                      {project.ribbon}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-1">
                      Official commendation awarded at Software Project Showcase 2026 for high-impact architecture, Groq RAG integration, and real-time canvas engineering.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4 sm:p-6 rounded-2xl border border-dashed border-border text-center text-muted-foreground font-sans text-xs sm:text-sm">
                  <p>Standard Party Contender. Verified production deployment active.</p>
                </div>
              )}

              {/* Highlights */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-secondary/70 border border-border space-y-2">
                <span className="font-heading text-[11px] sm:text-xs font-bold text-foreground uppercase tracking-wider">
                  KEY ARCHITECTURAL HIGHLIGHTS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 font-sans text-xs text-muted-foreground">
                      <ChevronRight size={13} className="text-primary shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: BATTLE STATS */}
          {activeTab === 'stats' && (
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <span className="font-heading text-xs font-bold text-primary uppercase tracking-wider">
                  SPECIES STATISTICAL SPREAD
                </span>
                <span className="font-mono text-xs text-amber-500 font-bold">TOTAL BST: 380+</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 rounded-2xl bg-secondary/80 border border-border space-y-1">
                  <span className="font-heading text-xs font-bold text-foreground">HP (Core Health & Stability)</span>
                  <HPBar value={project.stats?.hp || 90} max={100} label="HP" size="sm" />
                </div>
                <div className="p-3 rounded-2xl bg-secondary/80 border border-border space-y-1">
                  <span className="font-heading text-xs font-bold text-foreground">ATK (Feature Depth & Power)</span>
                  <HPBar value={project.stats?.atk || 92} max={100} label="ATK" size="sm" />
                </div>
                <div className="p-3 rounded-2xl bg-secondary/80 border border-border space-y-1">
                  <span className="font-heading text-xs font-bold text-foreground">DEF (Security & RBAC Shield)</span>
                  <HPBar value={project.stats?.def || 88} max={100} label="DEF" size="sm" />
                </div>
                <div className="p-3 rounded-2xl bg-secondary/80 border border-border space-y-1">
                  <span className="font-heading text-xs font-bold text-foreground">SPEED (Runtime Latency & UX)</span>
                  <HPBar value={project.stats?.speed || 95} max={100} label="SPE" size="sm" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Classic Pokémon In-Battle Command Action Bar (FIGHT / BAG / POKÉMON / RUN) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-3 border-t-2 border-border">
          {/* FIGHT: Live Demo */}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playSelect()}
              className="retro-btn retro-btn-primary p-2.5 sm:p-3 text-[11px] sm:text-xs flex items-center justify-center gap-1.5 min-h-[44px]"
            >
              <Play size={13} className="fill-white shrink-0" />
              <span>FIGHT (LIVE)</span>
            </a>
          ) : (
            <button
              disabled
              className="p-2.5 sm:p-3 rounded-xl bg-secondary text-muted-foreground font-heading text-[11px] sm:text-xs font-bold text-center cursor-not-allowed border border-border min-h-[44px]"
            >
              FIGHT (OFFLINE)
            </button>
          )}

          {/* BAG: GitHub Code */}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playSelect()}
              className="p-2.5 sm:p-3 rounded-xl bg-secondary hover:bg-card text-foreground border border-border font-heading text-[11px] sm:text-xs font-bold text-center flex items-center justify-center gap-1.5 cursor-pointer transition-colors min-h-[44px]"
            >
              <Code2 size={13} className="shrink-0" />
              <span>BAG (SOURCE)</span>
            </a>
          ) : (
            <button
              disabled
              className="p-2.5 sm:p-3 rounded-xl bg-secondary text-muted-foreground font-heading text-[11px] sm:text-xs font-bold text-center cursor-not-allowed border border-border min-h-[44px]"
            >
              BAG (PRIVATE)
            </button>
          )}

          {/* POKÉMON: Info Telemetry */}
          <button
            onClick={() => {
              soundFx.playBlip()
              setActiveTab('moves')
            }}
            className="p-2.5 sm:p-3 rounded-xl bg-secondary hover:bg-card text-foreground border border-border font-heading text-[11px] sm:text-xs font-bold text-center flex items-center justify-center gap-1.5 cursor-pointer transition-colors min-h-[44px]"
          >
            <Sparkles size={13} className="text-amber-500 shrink-0" />
            <span>MOVES</span>
          </button>

          {/* RUN: Close */}
          <button
            onClick={onClose}
            className="p-2.5 sm:p-3 rounded-xl bg-secondary hover:bg-card text-foreground border border-border font-heading text-[11px] sm:text-xs font-bold text-center flex items-center justify-center gap-1.5 cursor-pointer transition-colors min-h-[44px]"
          >
            <span>RUN (ESC)</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
