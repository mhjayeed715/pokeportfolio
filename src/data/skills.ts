export interface BaseStat {
  statName: string
  pokemonStat: string // HP, ATK, DEF, SpA, SpD, SPE, EXP, ACC
  level: number // 0-100
  tier: string // S+, S, A+, A
  description: string
  color: string
}

export interface SkillCategoryItem {
  name: string
  icon: string
  type: string
}

export interface SkillCategory {
  label: string
  pokemonBadge: string
  items: SkillCategoryItem[]
}

export interface HiddenAbility {
  name: string
  type: string
  category: string
  description: string
}

export const baseStatsData: BaseStat[] = [
  {
    statName: 'React & Next.js',
    pokemonStat: 'HP (Core Health)',
    level: 90,
    tier: 'S+',
    description: 'Component architecture, SSR/SSG, hooks, state hydration',
    color: '#38BDF8',
  },
  {
    statName: 'JavaScript & TypeScript',
    pokemonStat: 'ATK (Attack Power)',
    level: 88,
    tier: 'S',
    description: 'Strict typing, modern ESNext features, async concurrency',
    color: '#FACC15',
  },
  {
    statName: 'Node.js & Express',
    pokemonStat: 'DEF (Defense / Backend)',
    level: 85,
    tier: 'A+',
    description: 'RESTful controllers, middleware pipelines, error handlers',
    color: '#4ADE80',
  },
  {
    statName: 'Tailwind CSS',
    pokemonStat: 'SpA (Special Attack / UI)',
    level: 92,
    tier: 'S+',
    description: 'Design token mastery, responsive grids, sleek micro-styling',
    color: '#06B6D4',
  },
  {
    statName: 'PostgreSQL & MongoDB',
    pokemonStat: 'SpD (Special Defense / DB)',
    level: 80,
    tier: 'A',
    description: 'Relational schemas, NoSQL documents, indexing, aggregation',
    color: '#FBBF24',
  },
  {
    statName: 'Flutter & Dart',
    pokemonStat: 'SPE (Speed / Mobile)',
    level: 75,
    tier: 'A',
    description: 'Cross-platform widgets, BLoC/Riverpod state, native builds',
    color: '#60A5FA',
  },
  {
    statName: 'Python',
    pokemonStat: 'EXP (Intelligence / AI)',
    level: 72,
    tier: 'A',
    description: 'ML pipelines, Flask backend APIs, automation scripts',
    color: '#A78BFA',
  },
  {
    statName: 'Git & DevTools',
    pokemonStat: 'ACC (Accuracy / Workflow)',
    level: 85,
    tier: 'A+',
    description: 'Branching discipline, CI/CD pipelines, debugging tools',
    color: '#F87171',
  },
]

export const skillCategoriesData: SkillCategory[] = [
  {
    label: 'Languages',
    pokemonBadge: 'ELEMENTAL DISCS',
    items: [
      { name: 'JavaScript', icon: '/icons/javascript-original.svg', type: 'Electric' },
      { name: 'TypeScript', icon: '/icons/typescript-original.svg', type: 'Psychic' },
      { name: 'Python', icon: '/icons/python-original.svg', type: 'Grass' },
      { name: 'C', icon: '/icons/c-original.svg', type: 'Steel' },
      { name: 'C++', icon: '/icons/cplusplus-original.svg', type: 'Steel' },
      { name: 'Dart', icon: '/icons/dart-original.svg', type: 'Water' },
      { name: 'Java', icon: '/icons/java-original.svg', type: 'Fire' },
      { name: 'HTML5', icon: '/icons/html5-original.svg', type: 'Fire' },
      { name: 'CSS3', icon: '/icons/css3-original.svg', type: 'Water' },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    pokemonBadge: 'BATTLE RUNES',
    items: [
      { name: 'React', icon: '/icons/react-original.svg', type: 'Electric' },
      { name: 'Node.js', icon: '/icons/nodejs-original.svg', type: 'Electric' },
      { name: 'Express.js', icon: '/icons/express-original.svg', type: 'Ghost' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss-original.svg', type: 'Flying' },
      { name: 'Flutter', icon: '/icons/flutter-original.svg', type: 'Water' },
      { name: 'Vite', icon: '/icons/vite-original.svg', type: 'Electric' },
      { name: 'Flask', icon: '/icons/flask-original.svg', type: 'Grass' },
      { name: 'Jinja', icon: '/icons/jinja-original.svg', type: 'Fairy' },
      { name: 'Socket.IO', icon: '/icons/socketio-original.svg', type: 'Electric' },
    ],
  },
  {
    label: 'Databases & Backend',
    pokemonBadge: 'TERRAIN RELICS',
    items: [
      { name: 'PostgreSQL', icon: '/icons/postgresql-original.svg', type: 'Ground' },
      { name: 'MongoDB', icon: '/icons/mongodb-original.svg', type: 'Grass' },
      { name: 'MySQL', icon: '/icons/mysql-original.svg', type: 'Water' },
      { name: 'SQLite', icon: '/icons/sqlite-original.svg', type: 'Rock' },
      { name: 'Supabase', icon: '/icons/supabase-original.svg', type: 'Psychic' },
    ],
  },
  {
    label: 'Tools & Platforms',
    pokemonBadge: 'TRAINER GEAR',
    items: [
      { name: 'Git', icon: '/icons/git-original.svg', type: 'Normal' },
      { name: 'GitHub', icon: '/icons/github-original.svg', type: 'Dark' },
      { name: 'VS Code', icon: '/icons/vscode-original.svg', type: 'Steel' },
      { name: 'Postman', icon: '/icons/postman-original.svg', type: 'Fire' },
      { name: 'Vercel', icon: '/icons/vercel-original.svg', type: 'Dark' },
      { name: 'Figma', icon: '/icons/figma-original.svg', type: 'Fairy' },
      { name: 'Canva', icon: '/icons/canva-original.svg', type: 'Fairy' },
    ],
  },
]

export const hiddenAbilitiesData: HiddenAbility[] = [
  {
    name: 'LSTM Networks',
    type: 'Psychic',
    category: 'Deep Learning',
    description: 'Long Short-Term Memory recurrent neural networks for time-series forecasting & sequential analysis.',
  },
  {
    name: 'Federated Learning',
    type: 'Psychic',
    category: 'Decentralized AI',
    description: 'Collaborative ML training across decentralized edge devices preserving user data privacy.',
  },
  {
    name: 'NLP (Natural Language Processing)',
    type: 'Psychic',
    category: 'Machine Learning',
    description: 'Tokenization, embeddings, sentiment classification, and semantic document querying.',
  },
  {
    name: 'JWT & Token Rotation',
    type: 'Steel',
    category: 'Security',
    description: 'Cryptographically signed stateless tokens with refresh token blacklisting and expiry handling.',
  },
  {
    name: 'OTP & Multi-Factor Auth',
    type: 'Steel',
    category: 'Security',
    description: 'Time-based & HMAC one-time passcodes delivered via SMTP and SMS gateway integrations.',
  },
  {
    name: 'Prompt Engineering & Agent Protocols',
    type: 'Psychic',
    category: 'AI Architecture',
    description: 'Few-shot structured prompting, function calling schema design, and tool-use orchestration.',
  },
  {
    name: 'Productivity & Collaboration Suites',
    type: 'Normal',
    category: 'Team Ops',
    description: 'Advanced proficiency in MS Office 365, Google Workspace, Microsoft Teams, and Zoom webinars.',
  },
]
