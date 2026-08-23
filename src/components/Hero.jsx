import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Code2, Palette, Rocket, Zap } from 'lucide-react'
import { soundFx } from '../utils/sound'
import PokeBallIcon from './PokeBallIcon'
import TrainerCard from './TrainerCard'

const starterChoices = [
  {
    id: 'code',
    title: 'CODE',
    category: 'GRASS / STEEL',
    ballType: 'safari',
    desc: 'Clean Architecture, Scalable Backends, APIs & Robust Types',
    color: '#22C55E',
    icon: Code2,
    anchor: '#services',
  },
  {
    id: 'design',
    title: 'DESIGN',
    category: 'FIRE / FAIRY',
    ballType: 'great',
    desc: 'Intuitive UI/UX, Dynamic Micro-Animations & Responsive Design',
    color: '#EF4444',
    icon: Palette,
    anchor: '#services',
  },
  {
    id: 'deploy',
    title: 'DEPLOY',
    category: 'WATER / ELECTRIC',
    ballType: 'ultra',
    desc: 'Cloud CI/CD, Mobile App Stores, Sub-Second Latency & Production MVPs',
    color: '#0EA5E9',
    icon: Rocket,
    anchor: '#services',
  },
]

export default function Hero() {
  const [selectedStarter, setSelectedStarter] = useState(null)

  const handleStarterClick = (choice) => {
    soundFx.playCatch()
    setSelectedStarter(choice.id)

    // Smooth scroll to services section
    const el = document.getElementById('services')
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' })
      }, 500)
    }
  }

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pokedex-world-bg py-12 sm:py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-12 sm:space-y-16">
        {/* 1. Starter Selection Homage Screen */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          {/* Header Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-heading text-xs font-bold uppercase tracking-widest">
              <Sparkles size={13} className="animate-spin" />
              <span>PROF. OAK'S LAB // STARTER CHOICE</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-foreground tracking-tight">
              Choose Your Engineering <span className="gradient-text">Starter</span>
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans max-w-xl mx-auto">
              Select one of the three foundational engineering disciplines to initiate your project collaboration:
            </p>
          </motion.div>

          {/* 3 Hovering Poké Balls on Pedestals */}
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 pt-2">
            {starterChoices.map((choice, i) => {
              const IconComp = choice.icon
              const isChosen = selectedStarter === choice.id

              return (
                <motion.div
                  key={choice.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => handleStarterClick(choice)}
                  className={`p-6 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden flex flex-col items-center text-center shadow-lg group ${
                    isChosen
                      ? 'bg-card border-primary shadow-[0_0_30px_rgba(220,38,38,0.35)] scale-105'
                      : 'bg-card/90 border-border hover:border-primary/60'
                  }`}
                >
                  {/* Glowing Pedestal Circle */}
                  <div className="relative mb-5">
                    {/* Hovering Poké Ball */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative z-10 group-hover:rotate-12 transition-transform"
                    >
                      <PokeBallIcon type={choice.ballType} size={64} />
                    </motion.div>

                    {/* Pedestal Platform shadow */}
                    <div
                      className="w-16 h-3 rounded-full mx-auto -mt-1 opacity-40 group-hover:opacity-70 transition-opacity"
                      style={{ backgroundColor: choice.color, filter: 'blur(3px)' }}
                    />
                  </div>

                  {/* Starter Label */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-pixel text-[9px] font-bold text-amber-500">#{`00${i + 1}`}</span>
                    <h3 className="font-heading font-black text-xl text-foreground group-hover:text-primary transition-colors">
                      {choice.title}
                    </h3>
                  </div>

                  {/* Category Type */}
                  <span
                    className="font-heading text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase mb-2.5"
                    style={{
                      backgroundColor: `${choice.color}18`,
                      color: choice.color,
                      border: `1px solid ${choice.color}40`,
                    }}
                  >
                    {choice.category}
                  </span>

                  {/* Description */}
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed flex-1">
                    {choice.desc}
                  </p>

                  {/* Choose Prompt */}
                  <div className="mt-4 pt-3 border-t border-border w-full flex items-center justify-center gap-1.5 font-heading text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                    <Zap size={13} />
                    <span>CHOOSE {choice.title} (A)</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* 2. Official Full Gen 3/4 Trainer Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TrainerCard />
        </motion.div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-2">
          <a
            href="#about"
            onClick={() => soundFx.playBlip()}
            className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1.5 font-heading text-xs font-bold cursor-pointer"
          >
            <span>SCROLL TO SCAN POKÉDEX SPECIES ENTRY</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  )
}
