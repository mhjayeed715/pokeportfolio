import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, MapPin, Award, Zap, ShieldCheck } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { educationEvolutionData } from '../data/education'
import PokeBallIcon from './PokeBallIcon'

export default function EvolutionChain() {
  return (
    <div className="space-y-8">
      {/* Evolution Chain Grid (Desktop Left-to-Right / Mobile Stacked) */}
      <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1.35fr] gap-5 lg:gap-3 items-center">
        {educationEvolutionData.map((stage, idx) => {
          const isLast = idx === educationEvolutionData.length - 1

          return (
            <div key={stage.name} className="contents">
              {/* Evolution Stage Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onMouseEnter={() => {
                  if (stage.isCurrentForm) soundFx.playEvolve()
                  else soundFx.playBlip()
                }}
                className={`relative p-6 rounded-3xl border-2 transition-all duration-300 ${
                  stage.isCurrentForm
                    ? 'border-primary bg-card shadow-[0_0_40px_rgba(220,38,38,0.25)] lg:scale-105 z-10'
                    : 'border-border bg-card/90 shadow-md hover:border-primary/50'
                }`}
              >
                {/* Mega Evolution / Tera Glow Ribbon on Current Form */}
                {stage.isCurrentForm && (
                  <div className="absolute -top-3.5 right-4 px-3.5 py-1 rounded-full bg-gradient-to-r from-red-600 via-amber-500 to-amber-400 text-white font-heading text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-white/30">
                    <Zap size={12} className="fill-yellow-200 text-yellow-200" />
                    <span>{stage.formBadge}</span>
                  </div>
                )}

                {/* Stage Level Top Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <PokeBallIcon type={stage.isCurrentForm ? 'master' : idx === 1 ? 'great' : 'pokeball'} size={20} />
                    <span className="font-heading text-xs font-bold text-primary">
                      {stage.stageName}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground font-bold">
                    {stage.date}
                  </span>
                </div>

                {/* School Logo & Info */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-13 h-13 rounded-2xl bg-secondary border border-border p-1.5 shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
                    <img
                      src={stage.logo}
                      alt={stage.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-foreground leading-snug">
                      {stage.name}
                    </h4>
                    <p className="text-xs text-muted-foreground font-sans mt-0.5">{stage.degree}</p>
                  </div>
                </div>

                {/* Meta Specs */}
                <div className="space-y-1.5 pt-2 text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-amber-500 shrink-0" />
                    <span className="font-bold text-foreground">{stage.gpa}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary shrink-0" />
                    <span>{stage.location}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground/80 font-sans pt-1 leading-relaxed">
                    {stage.detail}
                  </p>
                </div>

                {/* Stat Boost / Evolution Condition Badge */}
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                  <span className="font-heading text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full inline-block">
                    {stage.statBoost}
                  </span>

                  {stage.isCurrentForm && (
                    <span className="font-mono text-[9px] text-amber-500 font-bold">
                      XP: 98% (FINAL STAGE)
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Evolution Arrow Condition between stages (Desktop Only) */}
              {!isLast && (
                <div className="hidden lg:flex flex-col items-center justify-center px-1">
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-1 text-primary"
                  >
                    <span className="font-pixel text-[7px] text-amber-500 whitespace-nowrap">
                      EVOLVE
                    </span>
                    <ArrowRight size={24} />
                    <span className="font-mono text-[9px] text-muted-foreground font-bold">
                      {idx === 0 ? 'via Science HSC' : 'via BSc Thesis'}
                    </span>
                  </motion.div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
