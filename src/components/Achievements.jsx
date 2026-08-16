import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Medal, GraduationCap, Brain, Bot, Code2, ExternalLink, ShieldCheck, X, ZoomIn, Award } from 'lucide-react'

const competitions = [
  {
    title: '2nd Place — Software Project Showcase 2026',
    organizer: 'Software Community, SMUCT',
    badge: '2nd Place Winner',
    badgeIcon: Medal,
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    highlightProject: 'UniShareSync Mobile App',
    year: '2026',
    category: 'Inter-Department Software Contest',
    description:
      'Secured 2nd place at the inter-department Software Project Showcase 2026 organised by the Software Community, showcasing the UniShareSync mobile ecosystem.',
    icon: Trophy,
  },
  {
    title: 'Champion — Project Showcasing 2025',
    organizer: 'Robotics & IoT Community, SMUCT',
    badge: 'Champion',
    badgeIcon: Trophy,
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    highlightProject: 'Team X',
    year: '2025',
    category: 'Engineering & Innovation',
    description:
      'Team X recognised as champion, demonstrating engineering and problem-solving skills in a competitive academic setting.',
    icon: Award,
  },
  {
    title: 'Datathon — ML Contest 2026',
    organizer: 'Machine Learning Community, CSE & CSIT Department, SMUCT',
    badge: 'ML Competitor',
    badgeIcon: Brain,
    badgeColor: 'bg-primary/10 text-primary border-primary/20',
    highlightProject: 'Loan Approval ML Pipeline',
    year: '2026',
    category: 'Machine Learning & Data Science',
    description:
      'Competed in the ML Contest by the CSE & CSIT Department at Shanto-Mariam University. Built an end-to-end pipeline on a loan approval dataset: imputation, IQR outlier removal, feature encoding, normalization, and 20+ models with RandomizedSearchCV tuning.',
    icon: Brain,
  },
]

const certifications = [
  {
    title: 'CS50’s Introduction to Artificial Intelligence with Python',
    issuer: 'HarvardX, edX Verified Certificate',
    badge: 'Harvard Verified',
    verifyUrl: 'https://courses.edx.org/certificates/0f757edad714434399b0fa981bed388d',
    image: '/certificates/CS50AI1.png',
    icon: Brain,
    tags: ['Search Algorithms', 'Optimization', 'Machine Learning', 'Neural Networks', 'NLP'],
    description:
      'Covered foundational AI principles: adversarial search (Minimax), optimization, probabilistic models, machine learning algorithms, deep learning neural networks, and natural language processing.',
  },
  {
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'HarvardX, edX Verified Certificate',
    badge: 'Harvard Verified',
    verifyUrl: 'https://courses.edx.org/certificates/45442b0106884e8a8c983ab208b027e1',
    image: '/certificates/CS50x1.png',
    icon: Code2,
    tags: ['C', 'Python', 'Flask', 'SQLite', 'Socket.IO', 'Algorithms'],
    description:
      'Comprehensive computer science fundamentals including algorithmic thinking, memory management, and web development. Built GigCampus as the capstone final project using Flask, SQLite, and Socket.IO.',
  },
  {
    title: 'Anthropic Model Context Protocol (MCP) Introduction',
    issuer: 'Anthropic',
    badge: 'Agentic AI & Tool-Use',
    verifyUrl: 'https://verify.skilljar.com/c/vbhgugbt9567',
    image: '/certificates/anthropic.png',
    icon: Bot,
    tags: ['MCP Architecture', 'Tool-Use Protocols', 'Agentic Pipelines', 'Context Integration'],
    description:
      'Studied how frontier AI systems expose tool-use capabilities to external agents, multi-agent frameworks, and integrative LLM pipelines.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Honors & Credentials
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Competitions & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Competitive programming hackathons, project showcases, and verified academic credentials.
          </p>
        </motion.div>

        {/* Competitions & Achievements Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Trophy className="w-5 h-5 text-primary" />
            <h3 className="font-display text-xl font-bold text-foreground">
              Competitions & Achievements
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {competitions.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={cardVariants}
                className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
              >
                {/* Top accent badge */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                    >
                      <item.badgeIcon size={12} className="shrink-0" />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-foreground mb-1 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-primary mb-3">{item.organizer}</p>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-medium text-foreground/80">{item.highlightProject}</span>
                  <span className="font-mono">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h3 className="font-display text-xl font-bold text-foreground">
              Professional Certifications
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={cardVariants}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 shadow-sm relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <cert.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                          <ShieldCheck size={11} className="shrink-0" />
                          <span>{cert.badge}</span>
                        </span>
                      </div>

                      <h4 className="font-display text-base font-bold text-foreground mb-1 leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-medium text-primary mb-2">{cert.issuer}</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Action Bar & Secondary Thumbnail */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                      >
                        <ShieldCheck size={13} />
                        Verify Credential
                        <ExternalLink size={11} className="opacity-80" />
                      </a>
                    )}
                  </div>

                  {/* Secondary Click-to-Expand Thumbnail */}
                  {cert.image && (
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="group/thumb flex items-center gap-2 px-2.5 py-1 rounded-lg border border-border bg-secondary/50 hover:bg-secondary text-xs text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                      title="View certificate thumbnail"
                    >
                      <div className="w-7 h-5 rounded overflow-hidden border border-border relative bg-muted shrink-0">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[11px] font-medium flex items-center gap-1">
                        <ZoomIn size={12} className="text-primary" />
                        Preview
                      </span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-card border border-border rounded-2xl shadow-2xl overflow-hidden p-5 sm:p-6"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    <ShieldCheck size={11} className="shrink-0" />
                    <span>{selectedCert.badge}</span>
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mt-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{selectedCert.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="rounded-xl overflow-hidden border border-border bg-secondary/30 mb-5 max-h-[60vh] flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[58vh] object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <p className="text-xs text-muted-foreground text-center sm:text-left">
                  Verified credential issued by {selectedCert.issuer}.
                </p>
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <ShieldCheck size={14} />
                    Verify on Official Portal
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
