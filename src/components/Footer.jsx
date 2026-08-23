import { RotateCcw, Github, Linkedin, Mail } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { trainerData } from '../data/trainer'
import PokeBallIcon from './PokeBallIcon'

export default function Footer({ onReplayBoot }) {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Trainer ID', href: '#hero' },
    { label: 'Species Entry', href: '#about' },
    { label: 'Signature Moves', href: '#services' },
    { label: 'Base Stats', href: '#skills' },
    { label: 'Party Roster', href: '#projects' },
    { label: 'Gym Badges', href: '#achievements' },
    { label: 'Trainer Code', href: '#philosophy' },
    { label: 'Evolution Line', href: '#education' },
    { label: 'Catch Me', href: '#contact' },
  ]

  const handleReplay = () => {
    soundFx.playOpen()
    if (onReplayBoot) onReplayBoot()
  }

  return (
    <footer className="border-t-4 border-primary bg-card py-14 relative font-sans text-xs text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <PokeBallIcon type="master" size={22} />
              <h3 className="font-heading text-lg font-black text-foreground tracking-wider">
                POKÉDEX OS v4.2
              </h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Official developer Pokédex engineered for {trainerData.name}. All stats, badges, and project entities are live verified.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={trainerData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playBlip()}
                className="p-2 rounded-xl bg-secondary border border-border hover:text-primary hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={trainerData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playBlip()}
                className="p-2 rounded-xl bg-secondary border border-border hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${trainerData.socials.email}`}
                onClick={() => soundFx.playBlip()}
                className="p-2 rounded-xl bg-secondary border border-border hover:text-primary hover:border-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Roster Links */}
          <div>
            <h4 className="font-heading text-xs font-bold text-foreground mb-3 uppercase tracking-wider">
              Pokédex Directory
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => soundFx.playBlip()}
                  className="hover:text-primary transition-colors flex items-center gap-1 text-muted-foreground"
                >
                  <span className="text-primary font-bold">▶</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Diagnostics Telemetry */}
          <div>
            <h4 className="font-heading text-xs font-bold text-foreground mb-3 uppercase tracking-wider">
              Diagnostic Matrix
            </h4>
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex justify-between">
                <span>SYSTEM STATUS:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">ONLINE (100%)</span>
              </div>
              <div className="flex justify-between">
                <span>TRAINER ID:</span>
                <span className="text-primary font-bold">{trainerData.trainerId}</span>
              </div>
              <div className="flex justify-between">
                <span>BST PROFICIENCY:</span>
                <span className="text-amber-500 font-bold">667 / 800 (S+)</span>
              </div>
              <div className="flex justify-between">
                <span>CURRENT FORM:</span>
                <span className="text-foreground font-bold">BSc CSE (9th Sem)</span>
              </div>
            </div>
          </div>

          {/* System Control & Replay */}
          <div>
            <h4 className="font-heading text-xs font-bold text-foreground mb-3 uppercase tracking-wider">
              System Control
            </h4>
            <button
              onClick={handleReplay}
              className="retro-btn retro-btn-primary w-full py-2.5 px-3 text-xs flex items-center justify-center gap-2"
            >
              <RotateCcw size={14} />
              <span>REPLAY BOOT SEQUENCE</span>
            </button>
            <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed font-sans">
              Reset session flags and re-trigger Pokédex initialization.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <p>© {currentYear} S. M. Mehrab Hossain Jayeed. All rights reserved.</p>
          <p className="text-primary font-bold">TRAINER REGISTRATION // DHAKA DIVISION</p>
        </div>
      </div>
    </footer>
  )
}
