import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Disc, ShieldCheck, ExternalLink, ZoomIn, X, Sparkles } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { certificationsData } from '../data/certifications'

export default function TMCase() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Disc size={20} className="text-primary" />
          <h3 className="font-heading text-xl sm:text-2xl font-black text-foreground">
            TM Case (Technical Machine Credentials)
          </h3>
        </div>
        <span className="font-mono text-xs text-muted-foreground font-bold">[ 3 VERIFIED DISCS ]</span>
      </div>

      {/* TM Discs Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {certificationsData.map((cert, idx) => {
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl border-2 border-border bg-card p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* TM Disc Header */}
                <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    {/* TM Disc Disc Badge */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-heading text-xs font-bold text-white shadow-md relative overflow-hidden shrink-0 group-hover:rotate-45 transition-transform"
                      style={{ backgroundColor: cert.discColor }}
                    >
                      <Disc size={24} className="animate-spin" style={{ animationDuration: '8s' }} />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-primary">
                        {cert.tmNumber} // {cert.badge}
                      </span>
                      <h4 className="font-heading text-base font-bold text-foreground leading-tight">
                        {cert.title}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mb-3 text-xs text-muted-foreground font-mono">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span>{cert.issuer}</span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Move Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-heading text-[10px] px-2.5 py-0.5 rounded-md bg-secondary text-foreground font-bold border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions: Verify on Portal / Preview Disc */}
              <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playSelect()}
                  className="retro-btn retro-btn-primary px-3.5 py-2 text-xs flex items-center gap-1.5"
                >
                  <ShieldCheck size={13} />
                  <span>Verify</span>
                  <ExternalLink size={11} />
                </a>

                <button
                  onClick={() => {
                    soundFx.playOpen()
                    setSelectedCert(cert)
                  }}
                  className="px-3 py-2 rounded-xl border border-border bg-secondary hover:border-primary font-heading text-xs font-bold text-foreground transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ZoomIn size={13} className="text-primary" />
                  <span>Inspect Disc</span>
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-card border-3 border-primary rounded-3xl shadow-2xl p-6 overflow-hidden text-foreground space-y-4"
            >
              <div className="flex items-start justify-between gap-4 pb-3 border-b border-border">
                <div>
                  <span className="font-mono text-xs font-bold text-primary">
                    {selectedCert.tmNumber} // {selectedCert.badge}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground mt-0.5">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">{selectedCert.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-secondary cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Certificate Image Preview */}
              <div className="rounded-2xl overflow-hidden border border-border bg-secondary max-h-[55vh] flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[52vh] object-contain"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <p className="text-xs text-muted-foreground font-sans">
                  Official credential issued by {selectedCert.issuer}.
                </p>
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playSelect()}
                  className="retro-btn retro-btn-primary px-4 py-2 text-xs flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck size={13} />
                  <span>Verify on Official Portal</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
