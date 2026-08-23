import { motion } from 'framer-motion'
import BadgeCase from './BadgeCase'
import TMCase from './TMCase'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-secondary/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-xs font-bold text-primary px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
              LEAGUE TROPHIES & TECHNICAL MACHINES
            </span>
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest font-semibold">
              BADGE CASE & TM INVENTORY
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground">
            Gym Badges & <span className="gradient-text">Trophies</span>
          </h2>
          <p className="text-sm text-muted-foreground font-sans mt-1">
            Official 8 Kanto League Gym Badges, Competition Champion Trophies, and Harvard / Anthropic Verified TM Credentials.
          </p>
        </motion.div>

        {/* 1. Official Gym Badge Cases */}
        <BadgeCase />

        {/* 2. Official TM Case */}
        <TMCase />
      </div>
    </section>
  )
}
