import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Swords } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { trainerData } from '../data/trainer'
import PokeBallIcon from './PokeBallIcon'

const navItems = [
  { label: 'Trainer ID', href: '#hero' },
  { label: 'Species Entry', href: '#about' },
  { label: 'Signature Moves', href: '#services' },
  { label: 'Base Stats', href: '#skills' },
  { label: 'Party Roster', href: '#projects' },
  { label: 'Gym Badges', href: '#achievements' },
  { label: 'Trainer Code', href: '#philosophy' },
  { label: 'Evolution', href: '#education' },
  { label: 'Catch Me', href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sectionIds = ['hero', 'about', 'services', 'skills', 'projects', 'achievements', 'philosophy', 'education', 'contact']
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 180 && rect.bottom >= 180
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    soundFx.playSelect()
    setOpen(false)
  }

  return (
    <nav
      className={`sticky top-[58px] sm:top-[64px] left-0 right-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-md border-b border-border shadow-md'
          : 'bg-card/85 backdrop-blur-sm border-b border-border/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Left: Pokédex Brand / Logo */}
        <a
          href="#hero"
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          {/* Animated Mini Poké Ball Logo */}
          <div className="group-hover:rotate-180 transition-transform duration-500 shrink-0">
            <PokeBallIcon type="master" size={24} />
          </div>
          <span className="font-heading font-black text-sm tracking-wider text-foreground group-hover:text-primary transition-colors">
            {trainerData.nickname.toUpperCase()}
          </span>
          <span className="font-pixel text-[8px] px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/30 font-bold">
            LV.100
          </span>
        </a>

        {/* Desktop Pokédex Menu List */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-3 py-1.5 rounded-lg font-heading text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'text-primary bg-primary/10 border border-primary/30 shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent'
                }`}
              >
                {/* Active Red LED Indicator */}
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isActive
                      ? 'bg-primary shadow-[0_0_8px_#dc2626] scale-125 animate-pulse'
                      : 'bg-muted-foreground/40'
                  }`}
                />
                <span>{item.label}</span>
              </a>
            )
          })}
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#contact"
            onClick={() => handleNavClick('#contact')}
            className="retro-btn retro-btn-primary px-3.5 py-2 text-xs flex items-center gap-1.5"
          >
            <Swords size={13} className="text-yellow-200" />
            <span>Challenge (B)</span>
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex xl:hidden items-center gap-2">
          <a
            href="#contact"
            onClick={() => handleNavClick('#contact')}
            className="retro-btn retro-btn-primary px-2.5 py-1.5 text-xs"
          >
            Challenge
          </a>
          <button
            onClick={() => {
              soundFx.playBlip()
              setOpen(!open)
            }}
            className="p-1.5 text-foreground hover:bg-secondary rounded-lg border border-border cursor-pointer"
            aria-label="Toggle Pokédex menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-card/98 backdrop-blur-xl border-b-2 border-primary/40 overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              <div className="font-heading text-xs text-muted-foreground uppercase tracking-widest pb-2 border-b border-border mb-2 flex items-center justify-between font-bold">
                <span>POKÉDEX NAVIGATION DIRECTORY</span>
                <span className="text-primary">SILPH OS</span>
              </div>
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg font-heading text-xs font-bold transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary border border-primary/30'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isActive
                            ? 'bg-primary shadow-[0_0_8px_#dc2626] animate-pulse'
                            : 'bg-muted-foreground/30'
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
