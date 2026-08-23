export interface PokemonType {
  name: string
  label: string
  color: string
  bg: string
  border: string
  glow: string
  text: string
  badgeBg: string
  symbol: string
}

export const POKEMON_TYPES: Record<string, PokemonType> = {
  Normal: {
    name: 'Normal',
    label: 'NORMAL',
    color: '#9FA19F',
    bg: 'rgba(159, 161, 159, 0.15)',
    border: 'rgba(159, 161, 159, 0.4)',
    glow: 'rgba(159, 161, 159, 0.25)',
    text: '#E2E8F0',
    badgeBg: '#9FA19F',
    symbol: '⚪',
  },
  Fire: {
    name: 'Fire',
    label: 'FIRE',
    color: '#E62829',
    bg: 'rgba(230, 40, 41, 0.15)',
    border: 'rgba(230, 40, 41, 0.4)',
    glow: 'rgba(230, 40, 41, 0.3)',
    text: '#F87171',
    badgeBg: '#E62829',
    symbol: '🔥',
  },
  Water: {
    name: 'Water',
    label: 'WATER',
    color: '#2980EF',
    bg: 'rgba(41, 128, 239, 0.15)',
    border: 'rgba(41, 128, 239, 0.4)',
    glow: 'rgba(41, 128, 239, 0.3)',
    text: '#60A5FA',
    badgeBg: '#2980EF',
    symbol: '💧',
  },
  Electric: {
    name: 'Electric',
    label: 'ELECTRIC',
    color: '#FAC000',
    bg: 'rgba(250, 192, 0, 0.15)',
    border: 'rgba(250, 192, 0, 0.4)',
    glow: 'rgba(250, 192, 0, 0.35)',
    text: '#FACC15',
    badgeBg: '#FAC000',
    symbol: '⚡',
  },
  Grass: {
    name: 'Grass',
    label: 'GRASS',
    color: '#3FA129',
    bg: 'rgba(63, 161, 41, 0.15)',
    border: 'rgba(63, 161, 41, 0.4)',
    glow: 'rgba(63, 161, 41, 0.3)',
    text: '#4ADE80',
    badgeBg: '#3FA129',
    symbol: '🌿',
  },
  Ice: {
    name: 'Ice',
    label: 'ICE',
    color: '#3DCEF3',
    bg: 'rgba(61, 206, 243, 0.15)',
    border: 'rgba(61, 206, 243, 0.4)',
    glow: 'rgba(61, 206, 243, 0.3)',
    text: '#38BDF8',
    badgeBg: '#3DCEF3',
    symbol: '❄️',
  },
  Fighting: {
    name: 'Fighting',
    label: 'FIGHTING',
    color: '#FF8000',
    bg: 'rgba(255, 128, 0, 0.15)',
    border: 'rgba(255, 128, 0, 0.4)',
    glow: 'rgba(255, 128, 0, 0.3)',
    text: '#FB923C',
    badgeBg: '#FF8000',
    symbol: '🥊',
  },
  Poison: {
    name: 'Poison',
    label: 'POISON',
    color: '#9141CB',
    bg: 'rgba(145, 65, 203, 0.15)',
    border: 'rgba(145, 65, 203, 0.4)',
    glow: 'rgba(145, 65, 203, 0.3)',
    text: '#C084FC',
    badgeBg: '#9141CB',
    symbol: '🧪',
  },
  Ground: {
    name: 'Ground',
    label: 'GROUND',
    color: '#915121',
    bg: 'rgba(145, 81, 33, 0.15)',
    border: 'rgba(145, 81, 33, 0.4)',
    glow: 'rgba(145, 81, 33, 0.3)',
    text: '#FBBF24',
    badgeBg: '#915121',
    symbol: '🌍',
  },
  Flying: {
    name: 'Flying',
    label: 'FLYING',
    color: '#81B9EF',
    bg: 'rgba(129, 185, 239, 0.15)',
    border: 'rgba(129, 185, 239, 0.4)',
    glow: 'rgba(129, 185, 239, 0.3)',
    text: '#93C5FD',
    badgeBg: '#81B9EF',
    symbol: '🕊️',
  },
  Psychic: {
    name: 'Psychic',
    label: 'PSYCHIC',
    color: '#EF4179',
    bg: 'rgba(239, 65, 121, 0.15)',
    border: 'rgba(239, 65, 121, 0.4)',
    glow: 'rgba(239, 65, 121, 0.3)',
    text: '#F472B6',
    badgeBg: '#EF4179',
    symbol: '🔮',
  },
  Bug: {
    name: 'Bug',
    label: 'BUG',
    color: '#91A119',
    bg: 'rgba(145, 161, 25, 0.15)',
    border: 'rgba(145, 161, 25, 0.4)',
    glow: 'rgba(145, 161, 25, 0.3)',
    text: '#A3E635',
    badgeBg: '#91A119',
    symbol: '🐛',
  },
  Rock: {
    name: 'Rock',
    label: 'ROCK',
    color: '#AFA981',
    bg: 'rgba(175, 169, 129, 0.15)',
    border: 'rgba(175, 169, 129, 0.4)',
    glow: 'rgba(175, 169, 129, 0.3)',
    text: '#D97706',
    badgeBg: '#AFA981',
    symbol: '🪨',
  },
  Ghost: {
    name: 'Ghost',
    label: 'GHOST',
    color: '#704170',
    bg: 'rgba(112, 65, 112, 0.15)',
    border: 'rgba(112, 65, 112, 0.4)',
    glow: 'rgba(112, 65, 112, 0.3)',
    text: '#C4B5FD',
    badgeBg: '#704170',
    symbol: '👻',
  },
  Dragon: {
    name: 'Dragon',
    label: 'DRAGON',
    color: '#5060E1',
    bg: 'rgba(80, 96, 225, 0.15)',
    border: 'rgba(80, 96, 225, 0.4)',
    glow: 'rgba(80, 96, 225, 0.3)',
    text: '#818CF8',
    badgeBg: '#5060E1',
    symbol: '🐉',
  },
  Dark: {
    name: 'Dark',
    label: 'DARK',
    color: '#624D4E',
    bg: 'rgba(98, 77, 78, 0.25)',
    border: 'rgba(148, 163, 184, 0.4)',
    glow: 'rgba(98, 77, 78, 0.35)',
    text: '#CBD5E1',
    badgeBg: '#624D4E',
    symbol: '🌑',
  },
  Steel: {
    name: 'Steel',
    label: 'STEEL',
    color: '#60A1B8',
    bg: 'rgba(96, 161, 184, 0.15)',
    border: 'rgba(96, 161, 184, 0.4)',
    glow: 'rgba(96, 161, 184, 0.3)',
    text: '#94A3B8',
    badgeBg: '#60A1B8',
    symbol: '🛡️',
  },
  Fairy: {
    name: 'Fairy',
    label: 'FAIRY',
    color: '#EF70EF',
    bg: 'rgba(239, 112, 239, 0.15)',
    border: 'rgba(239, 112, 239, 0.4)',
    glow: 'rgba(239, 112, 239, 0.3)',
    text: '#FBCFE8',
    badgeBg: '#EF70EF',
    symbol: '✨',
  },
}

export interface MatchupEffectiveness {
  superEffective: string
  notVeryEffective: string
  immuneTo?: string
  flavorQuote: string
}

export interface TechTypeEntry {
  name: string
  pokemonType: PokemonType
  icon: string
  category: 'Languages' | 'Frameworks & Libraries' | 'Databases & Backend' | 'Tools & Platforms' | 'Special Skills'
  matchup: MatchupEffectiveness
}

export const TECH_TYPE_MAP: Record<string, TechTypeEntry> = {
  // Languages
  JavaScript: {
    name: 'JavaScript',
    pokemonType: POKEMON_TYPES.Electric,
    icon: '/icons/javascript-original.svg',
    category: 'Languages',
    matchup: {
      superEffective: 'Super effective against Static Web Pages (+2.0x)',
      notVeryEffective: 'Not very effective against Type-Unsound Bugs (0.5x)',
      flavorQuote: '⚡ Discharges high-speed event loops across the entire client & server browser engine.',
    },
  },
  TypeScript: {
    name: 'TypeScript',
    pokemonType: POKEMON_TYPES.Psychic,
    icon: '/icons/typescript-original.svg',
    category: 'Languages',
    matchup: {
      superEffective: 'Super effective against Runtime Null Pointer Errors (+2.0x)',
      notVeryEffective: 'Not very effective against Rapid Throwaway Prototypes (0.5x)',
      flavorQuote: '🔮 Telepathically foresees type mismatches at compile-time before code ever runs in production.',
    },
  },
  Python: {
    name: 'Python',
    pokemonType: POKEMON_TYPES.Grass,
    icon: '/icons/python-original.svg',
    category: 'Languages',
    matchup: {
      superEffective: 'Super effective against Unstructured Data & AI Pipelines (+2.0x)',
      notVeryEffective: 'Not very effective against Ultra-low CPU Thread Bottlenecks (0.5x)',
      flavorQuote: '🌿 Photosynthesizes complex algorithms and ML models with unmatched semantic elegance.',
    },
  },
  C: {
    name: 'C',
    pokemonType: POKEMON_TYPES.Steel,
    icon: '/icons/c-original.svg',
    category: 'Languages',
    matchup: {
      superEffective: 'Super effective against Memory Overhead & Bloated Runtimes (+2.0x)',
      notVeryEffective: 'Not very effective against Unchecked Buffer Overflows (0.5x)',
      flavorQuote: '🛡️ Hardened low-level memory control forging deterministic performance.',
    },
  },
  'C++': {
    name: 'C++',
    pokemonType: POKEMON_TYPES.Steel,
    icon: '/icons/cplusplus-original.svg',
    category: 'Languages',
    matchup: {
      superEffective: 'Super effective against Compute Latency & Heavy Math (+2.0x)',
      notVeryEffective: 'Not very effective against Compilation Waiting Times (0.5x)',
      flavorQuote: '🛡️ Armor-plated object architecture designed for high-performance computing.',
    },
  },
  Dart: {
    name: 'Dart',
    pokemonType: POKEMON_TYPES.Water,
    icon: '/icons/dart-original.svg',
    category: 'Languages',
    matchup: {
      superEffective: 'Super effective against Dual-Platform Code Duplication (+2.0x)',
      notVeryEffective: 'Not very effective against Deep Native C++ Hooks (0.5x)',
      flavorQuote: '💧 Flows smoothly across both iOS and Android natively compiled binaries.',
    },
  },
  Java: {
    name: 'Java',
    pokemonType: POKEMON_TYPES.Fire,
    icon: '/icons/java-original.svg',
    category: 'Languages',
    matchup: {
      superEffective: 'Super effective against Unstructured Enterprise Chaos (+2.0x)',
      notVeryEffective: 'Not very effective against Cold Start JVM Boot Times (0.5x)',
      flavorQuote: '🔥 Ignites enterprise JVM engines and multithreaded desktop desktop GUI pipelines.',
    },
  },
  HTML5: {
    name: 'HTML5',
    pokemonType: POKEMON_TYPES.Fire,
    icon: '/icons/html5-original.svg',
    category: 'Languages',
    matchup: {
      superEffective: 'Super effective against Non-Semantic Scrapers (+2.0x)',
      notVeryEffective: 'Not very effective against Pure Styling Logic (0.5x)',
      flavorQuote: '🔥 The elemental spark structuring every web document on Earth.',
    },
  },
  CSS3: {
    name: 'CSS3',
    pokemonType: POKEMON_TYPES.Water,
    icon: '/icons/css3-original.svg',
    category: 'Languages',
    matchup: {
      superEffective: 'Super effective against Rigid Ugly Layouts (+2.0x)',
      notVeryEffective: 'Not very effective against Complex State Logic (0.5x)',
      flavorQuote: '💧 Fluid cascades and responsive media surfaces that adapt to any screen geometry.',
    },
  },

  // Frameworks & Libraries
  React: {
    name: 'React',
    pokemonType: POKEMON_TYPES.Electric,
    icon: '/icons/react-original.svg',
    category: 'Frameworks & Libraries',
    matchup: {
      superEffective: 'Super effective against Legacy Codebases & Stale DOM Repaints (+2.0x)',
      notVeryEffective: 'Not very effective against Browser Caching Lag (0.5x)',
      flavorQuote: '⚡ Rapid-fires virtual DOM reconciliations to deliver instant 60 FPS interactive experiences.',
    },
  },
  'Next.js': {
    name: 'Next.js',
    pokemonType: POKEMON_TYPES.Electric,
    icon: '/icons/react-original.svg',
    category: 'Frameworks & Libraries',
    matchup: {
      superEffective: 'Super effective against Poor SEO & Cold Page Loads (+2.0x)',
      notVeryEffective: 'Not very effective against Complex Edge Bundles (0.5x)',
      flavorQuote: '⚡ Hybrid SSR/SSG engine delivering sub-second edge hydration and lightning route caching.',
    },
  },
  'Node.js': {
    name: 'Node.js',
    pokemonType: POKEMON_TYPES.Fire,
    icon: '/icons/nodejs-original.svg',
    category: 'Frameworks & Libraries',
    matchup: {
      superEffective: 'Super effective against Sluggish Blocking Endpoints (+2.0x)',
      notVeryEffective: 'Not very effective against Single-Threaded CPU Heavy Calculations (0.5x)',
      flavorQuote: '🔥 Blazes non-blocking I/O event streams powering hundreds of concurrent requests.',
    },
  },
  'Express.js': {
    name: 'Express.js',
    pokemonType: POKEMON_TYPES.Ghost,
    icon: '/icons/express-original.svg',
    category: 'Frameworks & Libraries',
    matchup: {
      superEffective: 'Super effective against Clunky Over-engineered Backends (+2.0x)',
      notVeryEffective: 'Not very effective against Unhandled Middleware Rejections (0.5x)',
      flavorQuote: '👻 Light, invisible middleware chain that slips requests effortlessly into controllers.',
    },
  },
  'Tailwind CSS': {
    name: 'Tailwind CSS',
    pokemonType: POKEMON_TYPES.Flying,
    icon: '/icons/tailwindcss-original.svg',
    category: 'Frameworks & Libraries',
    matchup: {
      superEffective: 'Super effective against CSS Specificity Conflicts & Naming Fatigue (+2.0x)',
      notVeryEffective: 'Not very effective against Long Uncompressed Class Strings (0.5x)',
      flavorQuote: '🕊️ Soars high with atomic utility classes delivering precision pixel-perfect styling instantly.',
    },
  },
  Flutter: {
    name: 'Flutter',
    pokemonType: POKEMON_TYPES.Water,
    icon: '/icons/flutter-original.svg',
    category: 'Frameworks & Libraries',
    matchup: {
      superEffective: 'Super effective against Fragmented Mobile Platforms (+2.0x)',
      notVeryEffective: 'Not very effective against Native Platform Bridge Delay (0.5x)',
      flavorQuote: '💧 Paints 120Hz smooth canvas widgets natively on iOS, Android, and Desktop from one codebase.',
    },
  },
  Vite: {
    name: 'Vite',
    pokemonType: POKEMON_TYPES.Electric,
    icon: '/icons/vite-original.svg',
    category: 'Frameworks & Libraries',
    matchup: {
      superEffective: 'Super effective against 30-Second Dev Server Restarts (+2.0x)',
      notVeryEffective: 'Not very effective against Ancient Unbundled CommonJS (0.5x)',
      flavorQuote: '⚡ Native ESM hot module replacement delivering instant lightning reloads in milliseconds.',
    },
  },
  Flask: {
    name: 'Flask',
    pokemonType: POKEMON_TYPES.Grass,
    icon: '/icons/flask-original.svg',
    category: 'Frameworks & Libraries',
    matchup: {
      superEffective: 'Super effective against Heavy Monolithic Frameworks (+2.0x)',
      notVeryEffective: 'Not very effective against Massively Scaled Async WebSockets (0.5x)',
      flavorQuote: '🌿 Lightweight micro-framework seeding quick AI APIs and ML inference microservices.',
    },
  },
  Jinja: {
    name: 'Jinja',
    pokemonType: POKEMON_TYPES.Fairy,
    icon: '/icons/jinja-original.svg',
    category: 'Frameworks & Libraries',
    matchup: {
      superEffective: 'Super effective against Raw String Interpolation (+2.0x)',
      notVeryEffective: 'Not very effective against Client-side Reactive State (0.5x)',
      flavorQuote: '✨ Magically weaves backend data directly into HTML templates safely.',
    },
  },
  'Socket.IO': {
    name: 'Socket.IO',
    pokemonType: POKEMON_TYPES.Electric,
    icon: '/icons/socketio-original.svg',
    category: 'Frameworks & Libraries',
    matchup: {
      superEffective: 'Super effective against Stale Polling Intervals (+2.0x)',
      notVeryEffective: 'Not very effective against Zero-Network Flaky Connections (0.5x)',
      flavorQuote: '⚡ Direct duplex transmission syncing live whiteboard and chat packets in real-time.',
    },
  },

  // Databases & Backend
  PostgreSQL: {
    name: 'PostgreSQL',
    pokemonType: POKEMON_TYPES.Ground,
    icon: '/icons/postgresql-original.svg',
    category: 'Databases & Backend',
    matchup: {
      superEffective: 'Super effective against Unstructured Data Corruption (+2.0x)',
      notVeryEffective: 'Not very effective against Schemaless Ad-hoc Documents (0.5x)',
      immuneTo: 'Immune to Unverified Transactions (ACID Guaranteed)',
      flavorQuote: '🌍 Rock-solid relational foundation with JSONB indexing, foreign keys, and strict ACID guarantees.',
    },
  },
  MongoDB: {
    name: 'MongoDB',
    pokemonType: POKEMON_TYPES.Grass,
    icon: '/icons/mongodb-original.svg',
    category: 'Databases & Backend',
    matchup: {
      superEffective: 'Super effective against Rapidly Mutating Document Shapes (+2.0x)',
      notVeryEffective: 'Not very effective against Heavy Multi-Table Relational Joins (0.5x)',
      flavorQuote: '🌿 Flexible BSON collections allowing schema iterations to branch dynamically.',
    },
  },
  MySQL: {
    name: 'MySQL',
    pokemonType: POKEMON_TYPES.Water,
    icon: '/icons/mysql-original.svg',
    category: 'Databases & Backend',
    matchup: {
      superEffective: 'Super effective against High-Read Transaction Workloads (+2.0x)',
      notVeryEffective: 'Not very effective against Complex Recursive Graph Trees (0.5x)',
      flavorQuote: '💧 Proven enterprise relational storage running production queries with high efficiency.',
    },
  },
  SQLite: {
    name: 'SQLite',
    pokemonType: POKEMON_TYPES.Rock,
    icon: '/icons/sqlite-original.svg',
    category: 'Databases & Backend',
    matchup: {
      superEffective: 'Super effective against Server Provisioning Overhead (+2.0x)',
      notVeryEffective: 'Not very effective against Thousands of Concurrent Write Streams (0.5x)',
      flavorQuote: '🪨 Single-file embedded stone vault requiring zero server setup or maintenance.',
    },
  },
  Supabase: {
    name: 'Supabase',
    pokemonType: POKEMON_TYPES.Psychic,
    icon: '/icons/supabase-original.svg',
    category: 'Databases & Backend',
    matchup: {
      superEffective: 'Super effective against Slow 3-Week Auth & Database Setup (+2.0x)',
      notVeryEffective: 'Not very effective against Heavy Custom On-Prem Bare Metal (0.5x)',
      flavorQuote: '🔮 Instantly awakens Postgres databases with auto-generated REST/GraphQL APIs and Row-Level Security.',
    },
  },

  // Tools & Platforms
  Git: {
    name: 'Git',
    pokemonType: POKEMON_TYPES.Normal,
    icon: '/icons/git-original.svg',
    category: 'Tools & Platforms',
    matchup: {
      superEffective: 'Super effective against Lost Code & Accidental Overwrites (+2.0x)',
      notVeryEffective: 'Not very effective against Force Push Disasters (0.5x)',
      flavorQuote: '⚪ The universal time-machine tracking atomic code evolution across branches.',
    },
  },
  GitHub: {
    name: 'GitHub',
    pokemonType: POKEMON_TYPES.Dark,
    icon: '/icons/github-original.svg',
    category: 'Tools & Platforms',
    matchup: {
      superEffective: 'Super effective against Untracked Code & Disjointed Reviews (+2.0x)',
      notVeryEffective: 'Not very effective against Stale Pull Request Reviews (0.5x)',
      flavorQuote: '🌑 Central code citadel hosting continuous integration pipelines and releases.',
    },
  },
  'VS Code': {
    name: 'VS Code',
    pokemonType: POKEMON_TYPES.Steel,
    icon: '/icons/vscode-original.svg',
    category: 'Tools & Platforms',
    matchup: {
      superEffective: 'Super effective against Slow Clunky IDEs (+2.0x)',
      notVeryEffective: 'Not very effective against Runaway Extension Memory (0.5x)',
      flavorQuote: '🛡️ The primary battle cockpit equipped with IntelliSense, linting, and terminal shells.',
    },
  },
  Postman: {
    name: 'Postman',
    pokemonType: POKEMON_TYPES.Fire,
    icon: '/icons/postman-original.svg',
    category: 'Tools & Platforms',
    matchup: {
      superEffective: 'Super effective against Broken HTTP Endpoints & Bad Payloads (+2.0x)',
      notVeryEffective: 'Not very effective against Unreachable Firewalled Servers (0.5x)',
      flavorQuote: '🔥 Fires automated API test payloads validating response status codes and schema payloads.',
    },
  },
  Vercel: {
    name: 'Vercel',
    pokemonType: POKEMON_TYPES.Dark,
    icon: '/icons/vercel-original.svg',
    category: 'Tools & Platforms',
    matchup: {
      superEffective: 'Super effective against Manual SSH Deployment Nightmares (+2.0x)',
      notVeryEffective: 'Not very effective against Hard Serverless Timeout Limits (0.5x)',
      flavorQuote: '🌑 Teleports git commits directly to global edge CDNs with zero-downtime rollouts.',
    },
  },
  Figma: {
    name: 'Figma',
    pokemonType: POKEMON_TYPES.Fairy,
    icon: '/icons/figma-original.svg',
    category: 'Tools & Platforms',
    matchup: {
      superEffective: 'Super effective against Confusing UI Wireframes (+2.0x)',
      notVeryEffective: 'Not very effective against Missing Design Tokens (0.5x)',
      flavorQuote: '✨ Harmonizes visual prototypes, design components, and interactive mockups seamlessly.',
    },
  },
  Canva: {
    name: 'Canva',
    pokemonType: POKEMON_TYPES.Fairy,
    icon: '/icons/canva-original.svg',
    category: 'Tools & Platforms',
    matchup: {
      superEffective: 'Super effective against Bland Marketing Presentations (+2.0x)',
      notVeryEffective: 'Not very effective against Vector Path Export Nuances (0.5x)',
      flavorQuote: '✨ Rapid creative layout generator for social banners, slides, and branding assets.',
    },
  },

  // Hidden Abilities / Specialized Topics
  LSTM: {
    name: 'LSTM Networks',
    pokemonType: POKEMON_TYPES.Psychic,
    icon: '',
    category: 'Special Skills',
    matchup: {
      superEffective: 'Super effective against Vanishing Gradient in Long Sequences (+2.0x)',
      notVeryEffective: 'Not very effective against Extremely Short Static Vectors (0.5x)',
      flavorQuote: '🔮 Retains long-term temporal memory across recurrent deep learning time-series.',
    },
  },
  'Federated Learning': {
    name: 'Federated Learning',
    pokemonType: POKEMON_TYPES.Psychic,
    icon: '',
    category: 'Special Skills',
    matchup: {
      superEffective: 'Super effective against Centralized Data Privacy Breaches (+2.0x)',
      notVeryEffective: 'Not very effective against Heterogeneous Client Latency (0.5x)',
      flavorQuote: '🔮 Coordinates distributed model weight updates across client edge devices without central data leakage.',
    },
  },
  NLP: {
    name: 'Natural Language Processing',
    pokemonType: POKEMON_TYPES.Psychic,
    icon: '',
    category: 'Special Skills',
    matchup: {
      superEffective: 'Super effective against Unstructured Human Text Chaos (+2.0x)',
      notVeryEffective: 'Not very effective against Ambiguous Sarcasm & Slang (0.5x)',
      flavorQuote: '🔮 Translates raw textual vocabulary into mathematical dense vector embeddings.',
    },
  },
  'JWT & Token Security': {
    name: 'JWT & Token Security',
    pokemonType: POKEMON_TYPES.Steel,
    icon: '',
    category: 'Special Skills',
    matchup: {
      superEffective: 'Super effective against Session Forgery & Unauthorized Access (+2.0x)',
      notVeryEffective: 'Not very effective against Leaked Secret Keys (0.5x)',
      flavorQuote: '🛡️ Cryptographically signed stateless bearer tokens guarding API routes.',
    },
  },
  'Email OTP & RBAC': {
    name: 'Email OTP & RBAC',
    pokemonType: POKEMON_TYPES.Steel,
    icon: '',
    category: 'Special Skills',
    matchup: {
      superEffective: 'Super effective against Credential Stuffing & Privilege Escalation (+2.0x)',
      notVeryEffective: 'Not very effective against Phishing Interceptions (0.5x)',
      flavorQuote: '🛡️ Multi-tier authorization gates and single-use time-limited one-time security codes.',
    },
  },
  'Prompt Engineering & Agents': {
    name: 'Prompt Engineering & Agents',
    pokemonType: POKEMON_TYPES.Psychic,
    icon: '',
    category: 'Special Skills',
    matchup: {
      superEffective: 'Super effective against Repetitive Boilerplate & Vague AI Answers (+2.0x)',
      notVeryEffective: 'Not very effective against Non-Deterministic Hallucinations (0.5x)',
      flavorQuote: '🔮 Crafts structured few-shot schemas and tool-calling agent loops for reliable outputs.',
    },
  },
}

export function getTechType(techName: string): PokemonType {
  return TECH_TYPE_MAP[techName]?.pokemonType || POKEMON_TYPES.Normal
}

export function getTechIcon(techName: string): string {
  return TECH_TYPE_MAP[techName]?.icon || '/icons/react-original.svg'
}

export function getTechMatchup(techName: string): MatchupEffectiveness {
  return (
    TECH_TYPE_MAP[techName]?.matchup || {
      superEffective: 'Super effective in production workflows (+2.0x)',
      notVeryEffective: 'Neutral effectiveness across modern stacks',
      flavorQuote: 'Core component in trainer arsenal.',
    }
  )
}
