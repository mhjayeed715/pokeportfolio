import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Database, Bot, Shield, FileCode2, Zap, Swords, Sparkles, Activity } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { servicesData } from '../data/services'
import { POKEMON_TYPES } from '../data/techTypeMap'
import TypeBadge from './TypeBadge'

const iconMap = {
  Globe,
  Smartphone,
  Database,
  Bot,
  Shield,
  FileCode2,
}

// Official move categories mapped to engineering functions
const categoryConfig = {
  Physical: {
    label: 'PHYSICAL (BUILD)',
    desc: 'Heavy full-stack code execution & direct system construction',
    badgeColor: '#EF4444',
  },
  Special: {
    label: 'SPECIAL (DESIGN)',
    desc: 'Visual interface design, UI/UX aesthetics & micro-animations',
    badgeColor: '#38BDF8',
  },
  Status: {
    label: 'STATUS (CONSULT)',
    desc: 'AI workflow optimization, architectural strategy & security audits',
    badgeColor: '#A855F7',
  },
}

export default function Services() {
  const [hoveredMove, setHoveredMove] = useState(null)

  return (
    <section id="services" className="py-14 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-14"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <span className="font-heading text-[10px] sm:text-xs font-bold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
              BATTLE MOVE SELECT // [ 6 / 6 MOVES ]
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-widest font-semibold">
              DIRECTORY & AVAILABILITY
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-foreground">
            Signature <span className="gradient-text">Battle Moves</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-sans mt-1">
            Recreating the in-game battle attack menu. Repurposing PP as service availability with Physical, Special, and Status move categories.
          </p>
        </motion.div>

        {/* 2x3 Battle Move Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {servicesData.map((move, i) => {
            const typeConfig = POKEMON_TYPES[move.type] || POKEMON_TYPES.Normal
            const catInfo = categoryConfig[move.category] || categoryConfig.Physical
            const isHovered = hoveredMove === move.id

            return (
              <motion.div
                key={move.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onMouseEnter={() => {
                  soundFx.playBlip()
                  setHoveredMove(move.id)
                }}
                onMouseLeave={() => setHoveredMove(null)}
                className="group relative rounded-3xl border-2 border-border bg-card p-4 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden cursor-pointer flex flex-col justify-between"
                style={{
                  borderColor: isHovered ? typeConfig.color : undefined,
                  boxShadow: isHovered ? `0 10px 30px ${typeConfig.glow}` : undefined,
                }}
              >
                <div>
                  {/* Top Type Pill & PP Status Corner */}
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-border">
                    {/* Pokemon Type Badge with effectiveness tooltip */}
                    <TypeBadge type={move.type} techName={move.title} size="md" />

                    {/* PP Box ("PP 99/99 — Always Available") */}
                    <div className="font-mono text-[11px] sm:text-xs font-bold px-2.5 py-0.5 sm:py-1 rounded-xl bg-secondary text-foreground border border-border flex items-center gap-1.5 shadow-sm">
                      <span className="text-amber-500 font-pixel text-[7px] sm:text-[8px]">PP</span>
                      <span>{move.pp.replace('PP ', '')}</span>
                    </div>
                  </div>

                  {/* Move Title */}
                  <div className="mb-2.5 sm:mb-3">
                    <span className="font-mono text-[11px] sm:text-xs text-primary font-bold tracking-wider">
                      MOVE #{`0${i + 1}`} // {move.moveName}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors mt-0.5 leading-snug">
                      {move.title}
                    </h3>
                  </div>

                  {/* Lore Description */}
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                    {move.description}
                  </p>
                </div>

                <div>
                  {/* Battle Stats Bar (Category, Accuracy, Power) */}
                  <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-4 p-2.5 sm:p-3 rounded-2xl bg-secondary/80 border border-border font-mono text-xs">
                    <div className="space-y-0.5">
                      <span className="text-muted-foreground text-[9px] sm:text-[10px] uppercase font-bold">
                        CATEGORY:
                      </span>
                      <p className="font-heading text-xs font-bold text-foreground truncate" style={{ color: catInfo.badgeColor }}>
                        {catInfo.label.split(' ')[0]}
                      </p>
                    </div>
                    <div className="space-y-0.5 text-right">
                      <span className="text-muted-foreground text-[9px] sm:text-[10px] uppercase font-bold">
                        ACCURACY:
                      </span>
                      <p className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        {move.accuracy}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags with interactive TypeBadges */}
                  <div className="pt-2.5 sm:pt-3 border-t border-border flex flex-wrap gap-1.5">
                    {move.tags.map((tag) => (
                      <TypeBadge key={tag} techName={tag} size="sm" />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
