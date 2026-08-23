import { motion } from 'framer-motion'
import EvolutionChain from './EvolutionChain'

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-secondary/40 border-y border-border">
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
              ACADEMIC METAMORPHOSIS // 3-STAGE LINE
            </span>
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest font-semibold">
              EVOLUTION CHAIN
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground">
            Education — <span className="gradient-text">Evolution Line</span>
          </h2>
          <p className="text-sm text-muted-foreground font-sans mt-1">
            Progressive engineering evolution from Secondary School foundation to Senior BSc Computer Science & Engineering candidate.
          </p>
        </motion.div>

        {/* Evolution Chain Component */}
        <EvolutionChain />
      </div>
    </section>
  )
}
