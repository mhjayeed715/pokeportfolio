import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle({ onToggle }) {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  const handleToggle = () => {
    setDark(!dark)
    if (onToggle) onToggle()
  }

  return (
    <button
      onClick={handleToggle}
      className="relative p-1.5 rounded-md hover:bg-white/10 text-white/90 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
      aria-label={dark ? 'Switch to Pokédex Classic Light Mode' : 'Switch to Pokédex Cyber Dark Mode'}
      title={dark ? 'Mode: Night Pokédex (Click for Classic Day)' : 'Mode: Day Pokédex (Click for Cyber Night)'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {dark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="text-amber-300"
          >
            <Sun size={17} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="text-sky-300"
          >
            <Moon size={17} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
