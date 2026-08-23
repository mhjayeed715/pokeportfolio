import { motion } from 'framer-motion'
import CatchSequence from './CatchSequence'

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-heading text-xs font-bold text-primary px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
              POKÉMON CAPTURE & HOLOCASTER TRANSMIT
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground">
            Catch <span className="gradient-text">Me!</span>
          </h2>
          <p className="text-sm text-muted-foreground font-sans mt-2 leading-relaxed">
            Select a Poké Ball from your trainer inventory and throw it to initiate the direct communication protocol.
          </p>
        </motion.div>

        {/* Catch Sequence Component */}
        <CatchSequence />
      </div>
    </section>
  )
}
