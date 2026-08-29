import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Sparkles, CheckCircle2, AlertCircle, Send, ArrowUpRight, Mail, MessageSquare, Linkedin, Github, MapPin, User, MailCheck } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { soundFx } from '../utils/sound'
import { contactData } from '../data/contact'
import PokeBallIcon from './PokeBallIcon'

const iconMap = {
  Mail,
  MessageSquare,
  Linkedin,
  Github,
  MapPin,
}

const ballOptions = [
  { id: 'master', name: 'Master Ball', desc: '100% Guaranteed Capture Rate' },
  { id: 'ultra', name: 'Ultra Ball', desc: 'High-Performance 2.0x Catch Rate' },
  { id: 'great', name: 'Great Ball', desc: 'Reliable 1.5x Multiplier' },
  { id: 'premier', name: 'Premier Ball', desc: 'Commemorative Clean Catch' },
  { id: 'quick', name: 'Quick Ball', desc: '5.0x First-Turn Velocity Catch' },
  { id: 'pokeball', name: 'Poké Ball', desc: 'Classic Standard Kanto Ball' },
]

export default function CatchSequence() {
  const [selectedBall, setSelectedBall] = useState('master')
  const [ballState, setBallState] = useState('idle') // 'idle' | 'throwing' | 'wobble1' | 'wobble2' | 'wobble3' | 'caught'
  const [phaseText, setPhaseText] = useState('Select a Poké Ball and throw to initiate contact.')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nickname: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleBallThrow = () => {
    if (ballState !== 'idle') return

    soundFx.playThrow()
    setBallState('throwing')
    setPhaseText(`Threw the ${selectedBall.toUpperCase()} BALL!`)

    setTimeout(() => {
      soundFx.playWobble()
      setBallState('wobble1')
      setPhaseText('All right! The ball is rocking... (Shake 1)')
    }, 700)

    setTimeout(() => {
      soundFx.playWobble()
      setBallState('wobble2')
      setPhaseText('One... Two... (Shake 2)')
    }, 1400)

    setTimeout(() => {
      soundFx.playWobble()
      setBallState('wobble3')
      setPhaseText('Almost there... (Click!)')
    }, 2100)

    setTimeout(() => {
      soundFx.playCatch()
      setBallState('caught')
      setPhaseText('GOTCHA! S. M. Mehrab Hossain Jayeed was caught!')
    }, 2800)
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      await emailjs.send(
        contactData.emailJs.serviceId,
        contactData.emailJs.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          nickname: formData.nickname || 'Collaborator',
          message: formData.message,
          subject: `[POKÉDEX TRANSMISSION - ${selectedBall.toUpperCase()} BALL] from ${formData.name}`,
        },
        contactData.emailJs.publicKey
      )
      soundFx.playVictory()
      setSent(true)
      setFormData({ name: '', email: '', nickname: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      console.error('EmailJS transmission error:', err)
      setError(true)
      setTimeout(() => setError(false), 5000)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* 1. Poké Ball Throw & Catch Arena (if not caught yet) */}
      {ballState !== 'caught' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="p-4 sm:p-8 sm:p-10 rounded-3xl border-3 border-border bg-card shadow-2xl relative overflow-hidden space-y-4 sm:space-y-6">
            {/* Inventory Selector */}
            <div>
              <p className="font-heading text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2.5 sm:mb-3">
                SELECT BALL FROM TRAINER INVENTORY:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                {ballOptions.map((ball) => {
                  const isSelected = selectedBall === ball.id
                  return (
                    <button
                      key={ball.id}
                      type="button"
                      disabled={ballState !== 'idle'}
                      onClick={() => {
                        soundFx.playBlip()
                        setSelectedBall(ball.id)
                      }}
                      className={`px-2.5 sm:px-3 py-1.5 rounded-xl border font-heading text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer min-h-[38px] ${
                        isSelected
                          ? 'bg-primary/15 border-primary text-primary shadow-sm scale-105'
                          : 'bg-secondary border-border text-muted-foreground hover:text-foreground'
                      }`}
                      title={ball.desc}
                    >
                      <PokeBallIcon type={ball.id} size={18} />
                      <span>{ball.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Poké Ball Animated Visual */}
            <div className="py-2 sm:py-4 flex justify-center">
              <motion.div
                onClick={handleBallThrow}
                animate={
                  ballState === 'throwing'
                    ? { y: [-20, -100, 0], scale: [1, 1.25, 1], rotate: [0, 360, 720] }
                    : ballState.startsWith('wobble')
                    ? { rotate: [-24, 24, -18, 18, -10, 10, 0], scale: [1, 1.06, 1] }
                    : { y: [0, -10, 0] }
                }
                transition={
                  ballState.startsWith('wobble')
                    ? { duration: 1.8, repeat: Infinity }
                    : ballState === 'throwing'
                    ? { duration: 0.7 }
                    : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
                }
                whileHover={ballState === 'idle' ? { scale: 1.12 } : {}}
                className="cursor-pointer transition-transform"
                title="Click Poké Ball to Throw!"
              >
                <PokeBallIcon type={selectedBall} size={85} className="sm:hidden" />
                <PokeBallIcon type={selectedBall} size={110} className="hidden sm:block" />
              </motion.div>
            </div>

            {/* Status Phase Text */}
            <div className="min-h-[30px] font-heading font-bold text-sm sm:text-base text-foreground">
              {phaseText}
            </div>

            {/* Action Button */}
            {ballState === 'idle' && (
              <button
                onClick={handleBallThrow}
                className="retro-btn retro-btn-primary px-6 sm:px-8 py-3.5 text-xs inline-flex items-center gap-2 min-h-[44px]"
              >
                <Zap size={15} className="text-yellow-200 fill-yellow-200" />
                <span>THROW {selectedBall.toUpperCase()} BALL (A)</span>
              </button>
            )}

            {ballState !== 'idle' && (
              <div className="inline-flex items-center gap-2 font-heading text-xs font-bold text-primary animate-pulse">
                <Sparkles size={14} />
                <span>CATCH SEQUENCE RUNNING...</span>
              </div>
            )}
          </div>
        </motion.div>
      ) : null}

      {/* 2. Catch Confirmed & Naming Screen + Trainer PC Box Storage */}
      <AnimatePresence>
        {ballState === 'caught' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-10"
          >
            {/* Gotcha Banner */}
            <div className="p-3.5 sm:p-5 rounded-2xl bg-emerald-500/15 border-2 border-emerald-500/40 text-center font-heading text-xs sm:text-base text-emerald-600 dark:text-emerald-400 font-black flex items-center justify-center gap-2 shadow-lg">
              <CheckCircle2 size={20} className="shrink-0" />
              <span>GOTCHA! JAYEED WAS CAUGHT! POKÉDEX COMMUNICATOR UNLOCKED.</span>
            </div>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 sm:gap-8 items-start">
              {/* Left: Naming Screen & Transmission Form */}
              <div className="p-4 sm:p-8 rounded-3xl border-2 border-border bg-card shadow-xl space-y-4 sm:space-y-6">
                <div className="pb-3 sm:pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="font-pixel text-[7px] sm:text-[8px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-bold">
                      NAMING SCREEN
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-black text-foreground">
                      Give a Nickname / Send Direct Message
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground font-sans mt-1">
                    "Would you like to give a nickname to this collaboration?" Messages routed directly via EmailJS.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 font-sans text-xs">
                  <div>
                    <label htmlFor="name" className="block font-heading text-[11px] sm:text-xs font-bold text-foreground mb-1 uppercase">
                      Trainer / Sender Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ash Ketchum / Tech Recruiter / Client"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-secondary/60 text-foreground text-sm focus:outline-none focus:border-primary transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="nickname" className="block font-heading text-[11px] sm:text-xs font-bold text-foreground mb-1 uppercase">
                      Connection Nickname (Optional):
                    </label>
                    <input
                      type="text"
                      id="nickname"
                      name="nickname"
                      value={formData.nickname}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack MVP Partner / AI Architect"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-secondary/60 text-foreground text-sm focus:outline-none focus:border-primary transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-heading text-[11px] sm:text-xs font-bold text-foreground mb-1 uppercase">
                      Transmission Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="trainer@silph.co"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-secondary/60 text-foreground text-sm focus:outline-none focus:border-primary transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-heading text-[11px] sm:text-xs font-bold text-foreground mb-1 uppercase">
                      Project Specifications / Challenge Lore:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Jayeed, we'd like to collaborate on an exciting software development project..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-secondary/60 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none min-h-[100px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    onClick={() => soundFx.playSelect()}
                    className="retro-btn retro-btn-primary w-full py-3.5 text-xs flex items-center justify-center gap-2 disabled:opacity-60 min-h-[44px]"
                  >
                    {sending ? (
                      <span>TRANSMITTING MESSAGE...</span>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>SEND POKÉDEX TRANSMISSION</span>
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {sent && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center font-heading font-bold text-xs flex items-center justify-center gap-2"
                      >
                        <CheckCircle2 size={16} />
                        <span>Transmission confirmed! Trainer will reply promptly.</span>
                      </motion.div>
                    )}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-500 text-center font-heading font-bold text-xs flex items-center justify-center gap-2"
                      >
                        <AlertCircle size={16} />
                        <span>Transmission error. Please reach directly via mehrabjayeed715@gmail.com</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>

              {/* Right: Trainer's PC Box Storage Endpoints */}
              <div className="space-y-2.5 sm:space-y-3">
                <div className="pb-2 border-b border-border mb-3 sm:mb-4">
                  <span className="font-mono text-xs text-primary font-bold">
                    BILL'S PC // NETWORK ENDPOINTS
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mt-0.5">
                    Trainer's PC Box Storage
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans">
                    Real-time communication channels.
                  </p>
                </div>

                {contactData.channels.map((ch) => {
                  const IconComponent = iconMap[ch.iconName] || Mail
                  const Wrapper = ch.href ? 'a' : 'div'
                  const wrapperProps = ch.href
                    ? {
                        href: ch.href,
                        target: ch.isExternal ? '_blank' : undefined,
                        rel: ch.isExternal ? 'noopener noreferrer' : undefined,
                        onClick: () => soundFx.playBlip(),
                      }
                    : {}

                  return (
                    <Wrapper
                      key={ch.id}
                      {...wrapperProps}
                      className={`p-3 sm:p-4 rounded-2xl border-2 border-border bg-card flex items-center justify-between gap-3 transition-all min-h-[48px] ${
                        ch.href ? 'hover:border-primary hover:bg-secondary/70 cursor-pointer shadow-sm' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <IconComponent size={17} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="font-mono text-[9px] sm:text-[10px] text-muted-foreground uppercase font-bold block">
                            {ch.pokedexLabel}
                          </span>
                          <p className="text-xs sm:text-sm font-heading font-bold text-foreground mt-0.5 truncate">
                            {ch.value}
                          </p>
                        </div>
                      </div>

                      {ch.href && (
                        <ArrowUpRight size={15} className="text-muted-foreground shrink-0" />
                      )}
                    </Wrapper>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
