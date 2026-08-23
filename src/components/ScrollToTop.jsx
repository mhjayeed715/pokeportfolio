import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { soundFx } from '../utils/sound'
import PokeBallIcon from './PokeBallIcon'

export default function ScrollToTop({ lenisRef }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    soundFx.playBlip()
    if (lenisRef && lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full shadow-2xl overflow-hidden cursor-pointer flex items-center justify-center group"
          aria-label="Scroll to top of Pokédex"
          title="Return to top"
        >
          <PokeBallIcon type="ultra" size={48} />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity rounded-full">
            <ArrowUp size={16} className="text-amber-300 font-bold" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
