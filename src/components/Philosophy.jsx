import { motion } from 'framer-motion'
import { Github, Sparkles } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { trainerData } from '../data/trainer'
import PokeBallIcon from './PokeBallIcon'
import GymLeaderDialogueBox from './GymLeaderDialogueBox'

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
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
              GYM LEADER STATEMENT // 4 CORE PRINCIPLES
            </span>
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest font-semibold">
              PRE-BATTLE DIALOGUE
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground">
            Trainer's <span className="gradient-text">Code</span>
          </h2>
          <p className="text-sm text-muted-foreground font-sans mt-1">
            Pre-battle dialogue delivering architectural discipline, security principles, and high-velocity shipping standards.
          </p>
        </motion.div>

        {/* 1. Interactive Gym Leader Dialogue Box */}
        <GymLeaderDialogueBox />

        {/* 2. GitHub Full Team Roster Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl border-2 border-primary/40 bg-card flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <PokeBallIcon type="master" size={38} className="shrink-0 hidden sm:block" />
            <div>
              <span className="font-heading text-xs font-bold text-primary uppercase tracking-widest">
                SOURCE ARCHIVES // OPEN-SOURCE CITADEL
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground mt-0.5">
                Inspect Full Trainer Roster on GitHub
              </h3>
              <p className="text-xs text-muted-foreground font-sans mt-1">
                Explore repository architectures, modular full-stack codebases, and production commit telemetry.
              </p>
            </div>
          </div>

          <a
            href={trainerData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playSelect()}
            className="retro-btn retro-btn-primary px-6 py-3.5 text-xs flex items-center gap-2 shrink-0"
          >
            <Github size={15} />
            <span>Open GitHub Roster</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
