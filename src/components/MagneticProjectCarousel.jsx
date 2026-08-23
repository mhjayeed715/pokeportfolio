import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Code2, Trophy, Swords, Sparkles, ExternalLink, ChevronRight, X } from 'lucide-react'
import { soundFx } from '../utils/sound'
import PokeBallIcon from './PokeBallIcon'
import TypeBadge from './TypeBadge'
import HPBar from './HPBar'

export default function MagneticProjectCarousel({
  projects = [],
  onOpenSummary,
  collapsedWidth = 110,
  hoverWidth = 240,
  collapsedHeight = 360,
  hoverHeight = 410,
  gap = 14,
  influence = 220,
  blur = 3,
}) {
  const containerRef = useRef(null)
  const count = projects.length
  const [factors, setFactors] = useState(() => projects.map(() => 0))
  const [activeOpenIndex, setActiveOpenIndex] = useState(null)
  const [closing, setClosing] = useState(false)

  // Continuous smooth easing loop
  const targetRef = useRef(projects.map(() => 0))
  const curRef = useRef(projects.map(() => 0))
  const loopRef = useRef(0)
  const closeTimer = useRef(null)

  useEffect(() => {
    targetRef.current = projects.map(() => 0)
    curRef.current = projects.map(() => 0)
    setFactors(projects.map(() => 0))
  }, [count])

  useEffect(() => {
    return () => {
      cancelAnimationFrame(loopRef.current)
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  const startLoop = () => {
    if (loopRef.current) return
    const step = () => {
      const tgt = targetRef.current
      const cur = curRef.current
      let moving = false
      for (let i = 0; i < cur.length; i++) {
        const d = (tgt[i] ?? 0) - cur[i]
        if (Math.abs(d) > 0.001) {
          cur[i] += d * 0.22 // smooth lerp
          moving = true
        } else {
          cur[i] = tgt[i] ?? 0
        }
      }
      setFactors([...cur])
      loopRef.current = moving ? requestAnimationFrame(step) : 0
    }
    loopRef.current = requestAnimationFrame(step)
  }

  const setTargetFromCursor = (clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = clientX - rect.left
    const n = projects.length
    const totalBase = n * collapsedWidth + (n - 1) * gap
    const startX = Math.max(0, (rect.width - totalBase) / 2)

    targetRef.current = projects.map((_, i) => {
      const center = startX + i * (collapsedWidth + gap) + collapsedWidth / 2
      const dist = Math.abs(cx - center)
      const f = Math.max(0, 1 - dist / influence)
      return f * f * (3 - 2 * f) // smoothstep falloff
    })
    startLoop()
  }

  const onMouseMove = (e) => {
    if (activeOpenIndex !== null) return
    setTargetFromCursor(e.clientX)
  }

  const onMouseLeave = () => {
    if (activeOpenIndex !== null) return
    targetRef.current = projects.map(() => 0)
    startLoop()
  }

  const closeExpanded = () => {
    targetRef.current = projects.map(() => 0)
    curRef.current = projects.map(() => 0)
    setFactors(projects.map(() => 0))
    setClosing(true)
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setClosing(false), 350)
    setActiveOpenIndex(null)
  }

  const sizeFor = (i) => {
    if (activeOpenIndex !== null) {
      return i === activeOpenIndex
        ? { width: 'min(580px, 92vw)', height: 460 }
        : { width: collapsedWidth, height: collapsedHeight }
    }
    const f = factors[i] ?? 0
    return {
      width: collapsedWidth + (hoverWidth - collapsedWidth) * f,
      height: collapsedHeight + (hoverHeight - collapsedHeight) * f,
    }
  }

  const transitionStyle =
    activeOpenIndex !== null || closing
      ? 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
      : 'none'

  return (
    <div className="relative w-full overflow-x-auto py-8 px-4 flex flex-col items-center select-none">
      {/* Backdrop for closing expanded item */}
      {activeOpenIndex !== null && (
        <div
          className="fixed inset-0 z-20 bg-black/40 backdrop-blur-xs transition-opacity"
          onClick={closeExpanded}
        />
      )}

      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="flex items-center justify-start lg:justify-center relative min-w-max px-6 py-4"
        style={{ gap: `${gap}px` }}
      >
        {projects.map((proj, i) => {
          const { width, height } = sizeFor(i)
          const isOpen = activeOpenIndex === i
          const isBlurred = activeOpenIndex !== null && !isOpen
          const isMagnified = (factors[i] ?? 0) > 0.35

          return (
            <div
              key={proj.id}
              onClick={(e) => {
                e.stopPropagation()
                soundFx.playSelect()
                if (isOpen) {
                  closeExpanded()
                } else {
                  setActiveOpenIndex(i)
                }
              }}
              style={{
                width: typeof width === 'number' ? `${width}px` : width,
                height: `${height}px`,
                filter: isBlurred ? `blur(${blur}px)` : 'none',
                opacity: isBlurred ? 0.45 : 1,
                zIndex: isOpen ? 30 : isMagnified ? 10 : 2,
                transition: transitionStyle,
              }}
              className={`relative rounded-3xl border-2 overflow-hidden cursor-pointer shadow-xl flex flex-col justify-between group transition-colors duration-200 ${
                isOpen
                  ? 'border-primary bg-card ring-4 ring-primary/20 shadow-[0_0_40px_rgba(220,38,38,0.4)]'
                  : isMagnified
                  ? 'border-amber-400 bg-card shadow-2xl'
                  : 'border-border bg-card/90 hover:border-primary/50'
              }`}
            >
              {/* Background Project Image with Holographic Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    isOpen ? 'scale-105 opacity-25 dark:opacity-20' : 'opacity-85 group-hover:scale-110'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
              </div>

              {/* Collapsed/Hovering State Top Tag */}
              <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <PokeBallIcon type={proj.ballType || 'pokeball'} size={isOpen ? 28 : 22} />
                  <span className="font-mono text-xs font-bold text-amber-300">
                    {proj.speciesNumber}
                  </span>
                </div>

                <span className="font-pixel text-[8px] px-2 py-0.5 rounded bg-black/60 text-primary border border-primary/40 font-bold">
                  LV.{proj.level || 100}
                </span>
              </div>

              {/* Center Content for Expanded State */}
              {isOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative z-10 px-5 sm:px-6 py-2 space-y-3 flex-1 flex flex-col justify-center text-white"
                >
                  <div>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-white leading-tight">
                      {proj.title}
                    </h3>
                    <p className="font-sans text-xs text-amber-300 font-medium mt-0.5">
                      {proj.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-xs text-slate-200 line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Types */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.types.map((typeName) => (
                      <TypeBadge key={typeName} type={typeName} size="sm" />
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-2.5">
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation()
                          soundFx.playSelect()
                        }}
                        className="retro-btn retro-btn-primary px-3.5 py-1.5 text-xs flex items-center gap-1.5"
                      >
                        <Play size={12} className="fill-white" />
                        <span>FIGHT (LIVE)</span>
                      </a>
                    )}

                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation()
                          soundFx.playSelect()
                        }}
                        className="px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-heading text-xs font-bold transition-colors flex items-center gap-1.5"
                      >
                        <Code2 size={13} />
                        <span>BAG (CODE)</span>
                      </a>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        soundFx.playOpen()
                        onOpenSummary(proj)
                      }}
                      className="px-3 py-1.5 rounded-xl border border-amber-400/50 bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 font-heading text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ml-auto"
                    >
                      <Sparkles size={13} />
                      <span>FULL SUMMARY (A)</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Collapsed / Dock Peek Title */
                <div className="relative z-10 p-3 sm:p-4 space-y-1 text-white">
                  <h4 className="font-heading font-black text-sm text-white truncate leading-snug">
                    {proj.title}
                  </h4>
                  <p className="font-sans text-[10px] text-slate-300 truncate">
                    {proj.subtitle}
                  </p>
                  <div className="pt-1">
                    <HPBar value={proj.stats?.hp || 95} max={100} label="PWR" size="sm" showValues={false} />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Helper caption */}
      <p className="font-mono text-xs text-muted-foreground mt-3 text-center">
        ⚡ Hover across dock to magnetically magnify • Click any card to expand quick view
      </p>
    </div>
  )
}
