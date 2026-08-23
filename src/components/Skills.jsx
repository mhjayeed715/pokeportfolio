import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, ChevronDown, ChevronUp, Sparkles, Layers, Activity, ShieldCheck, HelpCircle } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { baseStatsData, skillCategoriesData, hiddenAbilitiesData } from '../data/skills'
import { POKEMON_TYPES, getTechType } from '../data/techTypeMap'
import TypeBadge from './TypeBadge'
import HPBar from './HPBar'

export default function Skills() {
  const [showHidden, setShowHidden] = useState(false)
  const totalBST = baseStatsData.reduce((acc, curr) => acc + curr.level, 0)

  return (
    <section id="skills" className="py-24 relative bg-secondary/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-xs font-bold text-primary px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
              POKÉDEX STATS & 18-TYPE MATRIX
            </span>
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest font-semibold">
              DIAGNOSTIC TELEMETRY
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground">
            Base Stats & <span className="gradient-text">Type Chart</span>
          </h2>
          <p className="text-sm text-muted-foreground font-sans mt-1">
            Base Stat spread (BST: {totalBST} / 800 — Legendary S+ Tier) and comprehensive elemental technology matrix with combat matchup tooltips.
          </p>
        </motion.div>

        {/* 1. Base Stat Screen + Nature Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pokedex-screen-bezel p-6 sm:p-8 mb-14 border-2 border-border shadow-xl space-y-6"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-border">
            <div>
              <h3 className="font-heading text-2xl font-black text-foreground flex items-center gap-2">
                <Zap size={22} className="text-amber-500 fill-amber-500" />
                <span>Trainer Base Stat Spread</span>
              </h3>
              <p className="text-xs text-muted-foreground font-sans mt-0.5">
                Calibrated across primary software architecture & engineering proficiencies.
              </p>
            </div>
            <div className="font-heading text-xs px-3.5 py-1.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-bold">
              BASE STAT TOTAL (BST): {totalBST} / 800 (LEGENDARY TIER)
            </div>
          </div>

          {/* Nature Mechanic Highlight Bar */}
          <div className="p-4 rounded-2xl bg-secondary/80 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold border border-purple-500/30 shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading text-xs text-primary font-bold uppercase tracking-wider">
                    TRAINER NATURE:
                  </span>
                  <span className="font-heading text-sm font-black text-foreground">
                    HARDY (+AI-Augmented Workflow)
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-sans mt-0.5">
                  Playfully balanced across the full stack with boosted rapid MVP velocity and strict code validation.
                </p>
              </div>
            </div>

            <span className="font-pixel text-[8px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30 shrink-0">
              NATURE BOOST: ACTIVE
            </span>
          </div>

          {/* Stats Bar Grid */}
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 pt-2">
            {baseStatsData.map((stat, i) => (
              <div key={stat.statName} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-foreground">{stat.statName}</span>
                    <span className="text-xs text-muted-foreground font-mono">
                      [{stat.pokemonStat.split(' ')[0]}]
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-secondary font-heading text-[11px] font-bold text-amber-500 border border-border">
                      {stat.tier}
                    </span>
                    <span className="font-mono font-bold text-foreground text-xs">{stat.level}%</span>
                  </div>
                </div>

                {/* HP/PWR Notch Bar */}
                <HPBar value={stat.level} max={100} label={stat.pokemonStat.split(' ')[0]} size="sm" showValues={false} />

                <p className="text-[11px] text-muted-foreground font-sans truncate">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2. Grouped 18-Type Chart Grid */}
        <div className="space-y-10 mb-14">
          <div className="pb-3 border-b border-border flex items-center justify-between">
            <div>
              <h3 className="font-heading text-2xl font-black text-foreground flex items-center gap-2">
                <Layers size={22} className="text-primary" />
                <span>18-Type Elemental Matrix</span>
              </h3>
              <p className="text-xs text-muted-foreground font-sans mt-0.5">
                Languages, Frameworks, Databases & Tools mapped with combat effectiveness tooltips.
              </p>
            </div>
            <span className="font-mono text-xs text-muted-foreground hidden sm:inline">[ HOVER FOR MATCHUPS ]</span>
          </div>

          <div className="space-y-8">
            {skillCategoriesData.map((cat, catIdx) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-heading text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>{cat.label}</span>
                  </h4>
                  <span className="font-mono text-xs text-muted-foreground font-semibold">
                    {cat.pokemonBadge}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {cat.items.map((item) => {
                    const typeConfig = POKEMON_TYPES[item.type] || POKEMON_TYPES.Normal

                    return (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="group p-3 rounded-2xl border border-border bg-card hover:border-primary/50 shadow-sm transition-all flex items-center gap-3 relative overflow-hidden"
                      >
                        {/* Tech Icon */}
                        <div className="w-8 h-8 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0 p-1.5">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                            loading="lazy"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="font-heading text-sm font-bold text-foreground truncate leading-none mb-1">
                            {item.name}
                          </p>
                          <TypeBadge type={item.type} techName={item.name} size="sm" />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Hidden Abilities Collapsible Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border-2 border-dashed border-primary/40 bg-card p-6 sm:p-7 shadow-md"
        >
          <div
            onClick={() => {
              soundFx.playSelect()
              setShowHidden(!showHidden)
            }}
            className="flex items-center justify-between cursor-pointer select-none"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold border border-purple-500/20 shrink-0">
                <Sparkles size={22} />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-foreground">
                  Hidden Abilities & Specialized AI / Security Disciplines
                </h4>
                <p className="text-xs text-muted-foreground font-sans mt-0.5">
                  {showHidden ? 'Click to collapse hidden parameters' : 'Click to reveal hidden parameters (LSTM, Federated Learning, NLP, Prompt Engineering, JWT Security...)'}
                </p>
              </div>
            </div>
            <button className="p-2 rounded-xl bg-secondary border border-border text-foreground hover:border-primary transition-colors cursor-pointer">
              {showHidden ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          <AnimatePresence>
            {showHidden && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-border grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {hiddenAbilitiesData.map((hab) => {
                  return (
                    <div
                      key={hab.name}
                      className="p-4 rounded-2xl border border-border bg-secondary/60 space-y-2 hover:border-primary/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-sm font-bold text-foreground">{hab.name}</span>
                        <TypeBadge type={hab.type} techName={hab.name} size="sm" />
                      </div>
                      <p className="font-mono text-xs font-bold text-amber-500">{hab.category}</p>
                      <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                        {hab.description}
                      </p>
                    </div>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
