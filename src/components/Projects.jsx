import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Trophy, Swords, X, Play, Code2, Sparkles, ChevronRight, Layers, Box } from 'lucide-react'
import { soundFx } from '../utils/sound'
import { projectsData } from '../data/projects'
import PokeBallIcon from './PokeBallIcon'
import TypeBadge from './TypeBadge'
import HPBar from './HPBar'
import SummaryScreenModal from './SummaryScreenModal'

const GitHubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

export default function Projects() {
  const [showBoxArchive, setShowBoxArchive] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  // Max 6 in party, rest in PC Box
  const partyProjects = projectsData.slice(0, 6)
  const boxProjects = projectsData.slice(6)
  const displayedProjects = showBoxArchive ? projectsData : partyProjects

  const handleOpenSummary = (proj) => {
    soundFx.playOpen()
    setSelectedProject(proj)
  }

  const handleCloseSummary = () => {
    soundFx.playSelect()
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-24 relative overflow-visible">
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
              ACTIVE PARTY [ {displayedProjects.length} / {projectsData.length} ]
            </span>
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest font-semibold">
              POKÉMON PARTY SCREEN & SUMMARY
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground">
            Trainer Team <span className="gradient-text">(Party Screen)</span>
          </h2>
          <p className="text-sm text-muted-foreground font-sans mt-1">
            Click any party slot to launch the multi-tab Pokémon Summary Screen (Info, Moves, Ribbons, Stats) with live battle actions.
          </p>
        </motion.div>

        {/* Pokémon Party Grid (Max 6 in Active Party) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, idx) => {
            const isVariant = project.isVariantTheme && project.variantTheme

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => handleOpenSummary(project)}
                className="group relative rounded-3xl border-2 border-border bg-card p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-visible flex flex-col justify-between"
                style={{
                  borderColor: isVariant ? project.variantTheme.primary : undefined,
                  boxShadow: isVariant ? `0 8px 30px ${project.variantTheme.glow}` : undefined,
                }}
              >
                <div>
                  {/* Party Slot Top Ribbon */}
                  <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-border">
                    <div className="flex items-center gap-3">
                      {/* Poké Ball Tier Icon */}
                      <div className="shrink-0 group-hover:rotate-12 transition-transform">
                        <PokeBallIcon type={project.ballType || 'pokeball'} size={28} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-primary">
                            {project.speciesNumber}
                          </span>
                          <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground font-sans mt-0.5 truncate max-w-[200px]">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className="shrink-0 text-right">
                      <span className="font-pixel text-[8px] font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                        LV.{project.level || 100}
                      </span>
                    </div>
                  </div>

                  {/* Contest Ribbon if present */}
                  {project.ribbon && (
                    <div className="mb-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-heading font-bold">
                      <Trophy size={13} className="shrink-0 text-amber-500" />
                      <span>{project.ribbon}</span>
                    </div>
                  )}

                  {/* Screenshot Viewport */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-secondary mb-4 group-hover:border-primary/50 transition-colors shadow-inner">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={idx < 3 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="font-heading text-xs font-bold text-white flex items-center gap-2">
                        <Swords size={14} className="text-amber-400" />
                        OPEN SUMMARY SCREEN (A)
                      </span>
                    </div>
                  </div>

                  {/* In-Battle HP/PWR Bar */}
                  <div className="mb-4 p-2.5 rounded-2xl bg-secondary/80 border border-border">
                    <HPBar value={project.stats?.hp || 95} max={100} label="PWR" size="sm" showValues={false} />
                  </div>

                  {/* Elemental Types */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.types.map((typeName) => (
                      <TypeBadge key={typeName} type={typeName} size="sm" />
                    ))}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {project.tech.map((t) => (
                      <div key={t.name} className="w-6 h-6 rounded-lg bg-secondary p-1 border border-border shrink-0" title={t.name}>
                        <img src={t.icon} alt={t.name} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation()
                          soundFx.playSelect()
                        }}
                        className="p-2 rounded-xl border border-border bg-secondary hover:border-primary text-muted-foreground hover:text-foreground transition-colors"
                        title="View Source Code on GitHub"
                      >
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation()
                          soundFx.playSelect()
                        }}
                        className="retro-btn retro-btn-primary px-3 py-1.5 text-xs flex items-center gap-1"
                        title="Launch Live Application"
                      >
                        <span>Live</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Expand / PC Box Storage Switcher */}
        {boxProjects.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => {
                soundFx.playSelect()
                setShowBoxArchive(!showBoxArchive)
              }}
              className="retro-btn retro-btn-secondary px-6 py-3 text-xs flex items-center gap-2"
            >
              <Box size={16} />
              <span>
                {showBoxArchive
                  ? 'Show Active Party Only (6 Slots)'
                  : `Open Bill's PC Storage Box (+${boxProjects.length} Archived Projects)`}
              </span>
            </button>
          </div>
        )}

        {/* Multi-Tab Summary Screen Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <SummaryScreenModal
              project={selectedProject}
              onClose={handleCloseSummary}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
