import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

import BootSequence from './components/BootSequence'
import PokedexFrame from './components/PokedexFrame'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Philosophy from './components/Philosophy'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [showBoot, setShowBoot] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('pokedex_booted') !== 'true'
    }
    return true
  })

  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: true,
      anchors: true,
    })

    lenisRef.current = lenis

    // Anchor smooth scroll listener
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        const id = target.getAttribute('href')
        if (id && id.length > 1) {
          const element = document.querySelector(id)
          if (element) {
            e.preventDefault()
            lenis.scrollTo(element, { offset: -70, duration: 1.2 })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  const handleReplayBoot = () => {
    sessionStorage.removeItem('pokedex_booted')
    setShowBoot(true)
  }

  return (
    <div className="bg-background text-foreground min-h-screen relative font-sans selection:bg-primary/20 selection:text-primary">
      {/* Boot sequence overlay */}
      <AnimatePresence>
        {showBoot && (
          <BootSequence onComplete={() => setShowBoot(false)} />
        )}
      </AnimatePresence>

      {/* Pokédex Bezel Header */}
      <PokedexFrame />

      {/* Pokédex Navigation */}
      <Navbar />

      {/* Main Pokédex Screens */}
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Achievements />
        <Philosophy />
        <Education />
        <Contact />
      </main>

      {/* Pokédex Footer */}
      <Footer onReplayBoot={handleReplayBoot} />

      {/* Floating Scroll to Top Poké Ball */}
      <ScrollToTop lenisRef={lenisRef} />
    </div>
  )
}
