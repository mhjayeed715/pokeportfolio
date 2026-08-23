export interface TrainerStat {
  value: number
  suffix: string
  label: string
  pokedexLabel: string
}

export interface TrainerAbility {
  name: string
  type: string
  typeColor: string
  effect: string
  tooltip: string
  iconName: string
}

export interface TrainerData {
  name: string
  nickname: string
  trainerClass: string
  trainerId: string
  speciesNumber: string
  speciesTitle: string
  level: number
  hp: string
  location: string
  region: string
  status: string
  tagline: string
  taglineMarquee: string
  roles: string[]
  bio: string[]
  stats: TrainerStat[]
  abilities: TrainerAbility[]
  resumeUrl: string
  avatarUrl: string
  socials: {
    github: string
    linkedin: string
    email: string
    whatsapp: string
  }
}

export const trainerData: TrainerData = {
  name: 'S. M. Mehrab Hossain Jayeed',
  nickname: 'Jayeed',
  trainerClass: 'Full-Stack Developer',
  trainerId: '#0715',
  speciesNumber: 'TRAINER-01',
  speciesTitle: 'The Full-Stack Architect',
  level: 100,
  hp: '100/100',
  location: 'Dhaka, Bangladesh',
  region: 'Kanto Region (Dhaka Division)',
  status: 'Available for opportunities',
  tagline: 'I Build Things For The Web & Mobile',
  taglineMarquee: '▶ "I Build Scalable Things For The Web & Mobile — Powered by AI & Modern Frameworks"',
  roles: [
    'Full-Stack Developer',
    'React Specialist',
    'Mobile App Developer',
    'AI-Augmented Engineer',
  ],
  bio: [
    "I'm a final-year BSc CSE student at Shanto-Mariam University of Creative Technology, specializing in AI-assisted full-stack development. I build scalable, secure, and performant applications using modern frameworks — React, Node.js, Flutter — while leveraging AI coding tools to accelerate delivery without compromising code quality.",
    'My workflow bridges the gap between product vision and engineering execution: translating requirements into structured prompts, validating AI-generated code for correctness and security, and deploying production-ready MVPs on tight timelines.',
  ],
  stats: [
    { value: 8, suffix: '+', label: 'Projects', pokedexLabel: 'Projects Caught' },
    { value: 20, suffix: '+', label: 'Technologies', pokedexLabel: 'Tech Types Mastered' },
    { value: 3, suffix: '+', label: 'Years Coding', pokedexLabel: 'Years on Journey' },
  ],
  abilities: [
    {
      name: 'Clean Architecture',
      type: 'Steel',
      typeColor: '#94A3B8',
      effect: 'Modular codebase design with zero coupling',
      tooltip: 'Clear separation of concerns with layered backend services & reusable component structures.',
      iconName: 'Shield',
    },
    {
      name: 'AI-Augmented Development',
      type: 'Psychic',
      typeColor: '#EC4899',
      effect: 'Accelerated delivery with strict code validation',
      tooltip: 'Translates requirements into structured prompts and rigorously tests AI output for security and robustness.',
      iconName: 'Sparkles',
    },
    {
      name: 'Rapid MVP Delivery',
      type: 'Electric',
      typeColor: '#EAB308',
      effect: 'High-velocity shipping on tight timelines',
      tooltip: 'Turns ideas into production-ready software fast without sacrificing maintainability.',
      iconName: 'Zap',
    },
    {
      name: 'Secure Auth Protocol',
      type: 'Dark',
      typeColor: '#334155',
      effect: 'JWT, OTP, RBAC security from day one',
      tooltip: 'Hardened authentication pipelines with role-based access control, token rotation, and session defense.',
      iconName: 'Lock',
    },
    {
      name: 'Full-Stack Range',
      type: 'Dragon',
      typeColor: '#8B5CF6',
      effect: 'Frontend, backend, mobile & database mastery',
      tooltip: 'End-to-end fluency across React, Node, Flutter, PostgreSQL, MongoDB, Supabase, and Python.',
      iconName: 'Layers',
    },
  ],
  resumeUrl: '/SM_Mehrab_Hossain_Jayeed_Resume.pdf',
  avatarUrl: '/trainer_avatar.png',
  socials: {
    github: 'https://github.com/mhjayeed715',
    linkedin: 'https://linkedin.com/in/mhjayeed715',
    email: 'mehrabjayeed715@gmail.com',
    whatsapp: 'https://wa.me/8801533652232',
  },
}
