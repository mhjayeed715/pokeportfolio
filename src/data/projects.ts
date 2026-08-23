export interface ProjectTech {
  name: string
  icon: string
  type: string
}

export interface ProjectMove {
  name: string
  description: string
  type: string
}

export interface ProjectBattleStats {
  hp: number
  atk: number
  def: number
  speed: number
}

export interface ProjectItem {
  id: string
  speciesNumber: string
  title: string
  subtitle: string
  ribbon?: string
  ribbonType?: 'gold' | 'emerald' | 'blue' | 'purple'
  ballType?: 'master' | 'ultra' | 'great' | 'safari' | 'quick' | 'premier' | 'pokeball'
  types: string[] // Pokemon types
  description: string
  battleLore: string
  highlights: string[]
  moves: ProjectMove[]
  stats: ProjectBattleStats
  level: number
  image: string
  tech: ProjectTech[]
  github?: string
  live?: string
  featured: boolean
  isVariantTheme?: boolean
  variantTheme?: {
    primary: string
    accent: string
    glow: string
    badgeBg: string
  }
}

export const projectsData: ProjectItem[] = [
  {
    id: 'unisharesync-mobile',
    speciesNumber: '#001',
    title: 'UniShareSync Mobile App',
    subtitle: 'Centralized University Collaboration & Campus Management',
    ribbon: '2nd Place — Software Project Showcase 2026',
    ribbonType: 'gold',
    ballType: 'master',
    types: ['Water', 'Psychic', 'Electric'],
    description:
      'Cross-platform mobile application centralizing university academic workflows, student collaboration, and campus management into a unified ecosystem. Built with Flutter and Supabase, featuring an AI Campus Assistant with Groq RAG document querying, real-time collaborative whiteboards & Kanban boards with multi-user presence, campus bus transit tracking via OpenStreetMap, CampusShare peer-to-peer item sharing with digital agreements, and QR event check-ins.',
    battleLore:
      'A legendary mobile companion engineered to harmonize disparate campus workflows into a unified, responsive interface.',
    highlights: [
      'Flutter & Supabase Engine',
      'AI Campus Assistant (Groq RAG)',
      'Real-time Whiteboard & Kanban',
      'FCM Push Notifications',
      'CampusShare P2P Agreements',
      'OpenStreetMap Bus Tracking',
    ],
    moves: [
      { name: 'AI Campus Assistant (RAG)', description: 'Semantic vector querying over university syllabus & docs', type: 'Psychic' },
      { name: 'Real-time Whiteboard & Kanban', description: 'Multi-user concurrent canvas with live presence indicator', type: 'Electric' },
      { name: 'FCM Push Notifications', description: 'Instant event alerts and schedule broadcast push engine', type: 'Fire' },
      { name: 'CampusShare P2P', description: 'Trust-verified student item lending with digital agreement signatures', type: 'Water' },
    ],
    stats: { hp: 98, atk: 95, def: 92, speed: 96 },
    level: 100,
    image: '/projects/unisharesync_mobile.png',
    tech: [
      { name: 'Flutter', icon: '/icons/flutter-original.svg', type: 'Water' },
      { name: 'Dart', icon: '/icons/dart-original.svg', type: 'Water' },
      { name: 'Supabase', icon: '/icons/supabase-original.svg', type: 'Psychic' },
      { name: 'Postman', icon: '/icons/postman-original.svg', type: 'Fire' },
    ],
    github: 'https://github.com/mhjayeed715/UniShareSync-Mobile-App',
    live: 'https://unisharesync.vercel.app/',
    featured: true,
  },
  {
    id: 'focusnyx',
    speciesNumber: '#002',
    title: 'Focusnyx',
    subtitle: 'The Ultimate Student Life OS & Cognitive Shield',
    ribbon: 'Regional Shiny Variant — Cognitive Shield',
    ribbonType: 'emerald',
    ballType: 'ultra',
    types: ['Electric', 'Grass', 'Psychic'],
    description:
      'Full-stack productivity operating system and digital cognitive shield tailored for university students and neurodivergent learners. Integrates a Next.js 14 web app, Chrome Manifest V3 extension for browser distraction blocking, and a Python Win32 companion for system-level shortcut/window focus enforcement. Includes ADHD & Standard interaction modes, Smart Academic Forge CGPA momentum calculator, AI Behavioral Coach, and bilingual voice notes.',
    battleLore:
      'A specialized cognitive guardian that shields attention spans from digital distractions and optimizes academic trajectory.',
    highlights: [
      'Next.js 14 Full-Stack OS',
      'Chrome Manifest V3 Extension',
      'Win32 System Hook Companion',
      'ADHD & Standard Focus Modes',
      'AI Behavioral Coach & Notes',
    ],
    moves: [
      { name: 'ADHD & Standard Modes', description: 'Adaptive sensory UI layout tuned for cognitive focus thresholds', type: 'Psychic' },
      { name: 'Smart Academic Forge', description: 'Real-time CGPA predictive calculator and momentum simulator', type: 'Electric' },
      { name: 'AI Behavioral Coach', description: 'Context-aware study nudges and productivity habit tracking', type: 'Grass' },
      { name: 'Bilingual Voice Notes', description: 'Speech-to-text transcript generation with NLP summarization', type: 'Psychic' },
    ],
    stats: { hp: 96, atk: 94, def: 98, speed: 90 },
    level: 100,
    image: '/projects/focusnyx.png',
    tech: [
      { name: 'React', icon: '/icons/react-original.svg', type: 'Electric' },
      { name: 'TypeScript', icon: '/icons/typescript-original.svg', type: 'Psychic' },
      { name: 'Node.js', icon: '/icons/nodejs-original.svg', type: 'Electric' },
      { name: 'Supabase', icon: '/icons/supabase-original.svg', type: 'Psychic' },
      { name: 'Python', icon: '/icons/python-original.svg', type: 'Grass' },
    ],
    github: 'https://github.com/mhjayeed715/Focusnyx',
    live: 'https://focusnyx.vercel.app/',
    featured: true,
    isVariantTheme: true,
    variantTheme: {
      primary: '#0E7C7B', // Focusnyx teal
      accent: '#F59E0B',  // amber
      glow: 'rgba(14, 124, 123, 0.4)',
      badgeBg: 'rgba(14, 124, 123, 0.15)',
    },
  },
  {
    id: 'gigcampus',
    speciesNumber: '#003',
    title: 'GigCampus',
    subtitle: 'Campus-only Micro-Gig Marketplace',
    ribbon: 'CS50x Final Project Capstone',
    ribbonType: 'blue',
    ballType: 'great',
    types: ['Grass', 'Ground', 'Electric'],
    description:
      'A peer-to-peer campus task marketplace built as a CS50x final project. Enables university students to find trustworthy peers for quick, affordable tasks. Features university student ID verification, real-time messaging powered by Socket.IO, live order tracking, and an automated ghosting detection system.',
    battleLore:
      'A swift marketplace runner that connects students across university grounds with verified ID security.',
    highlights: [
      'CS50x Capstone Project',
      'Real-time WebSocket Chat',
      'Live Multi-step Order Tracking',
      'Automated Ghosting Detection',
      'University ID Verification',
    ],
    moves: [
      { name: 'Real-time Chat', description: 'Sub-millisecond WebSocket message synchronization via Socket.IO', type: 'Electric' },
      { name: 'Order Tracking', description: 'Visual state machine tracking milestone acceptance & escrow releases', type: 'Ground' },
      { name: 'Ghosting Detection', description: 'Automated timeout daemon reassigning stalled tasks to standby peers', type: 'Ghost' },
      { name: 'Campus ID Verification', description: 'Strict domain and credential checks preventing unauthorized access', type: 'Steel' },
    ],
    stats: { hp: 90, atk: 88, def: 86, speed: 92 },
    level: 100,
    image: '/projects/GigCampus.png',
    tech: [
      { name: 'Python', icon: '/icons/python-original.svg', type: 'Grass' },
      { name: 'Flask', icon: '/icons/flask-original.svg', type: 'Grass' },
      { name: 'SQLite', icon: '/icons/sqlite-original.svg', type: 'Rock' },
      { name: 'Jinja', icon: '/icons/jinja-original.svg', type: 'Fairy' },
      { name: 'Socket.IO', icon: '/icons/socketio-original.svg', type: 'Electric' },
    ],
    github: 'https://github.com/mhjayeed715/GigCampus',
    live: 'https://gigcampus-7er7.onrender.com/',
    featured: true,
  },
  {
    id: 'unisharesync-web',
    speciesNumber: '#004',
    title: 'UniShareSync Web App',
    subtitle: 'University Resource Sharing Web Platform',
    ribbon: 'Production Web Champion',
    ribbonType: 'purple',
    ballType: 'ultra',
    types: ['Electric', 'Electric', 'Ground'],
    description:
      'Full-stack academic platform enabling university students, faculty, and admins to share academic resources, collaborate on projects, manage events, and communicate via real-time notifications with secure email OTP login and role-based access control.',
    battleLore:
      'A powerhouse web server deploying relational databases and high-traffic event queues with zero downtime.',
    highlights: [
      'Email OTP Authentication',
      'Multi-tier RBAC Security',
      'Real-time Notification Bell',
      'PostgreSQL Relational Storage',
      'Full RESTful Backend API',
    ],
    moves: [
      { name: 'Email OTP Auth', description: 'Cryptographic single-use passcode delivery with strict rate limits', type: 'Steel' },
      { name: 'Role-Based Access (RBAC)', description: 'Granular policy enforcement across student, faculty, and admin roles', type: 'Dark' },
      { name: 'Live Notification Stream', description: 'Instant inbox broadcasts for assignment drops and campus announcements', type: 'Electric' },
      { name: 'RESTful Postgres API', description: 'Normalized relational queries with connection pooling and caching', type: 'Ground' },
    ],
    stats: { hp: 94, atk: 92, def: 94, speed: 88 },
    level: 100,
    image: '/projects/unisharesync.png',
    tech: [
      { name: 'React', icon: '/icons/react-original.svg', type: 'Electric' },
      { name: 'Node.js', icon: '/icons/nodejs-original.svg', type: 'Electric' },
      { name: 'PostgreSQL', icon: '/icons/postgresql-original.svg', type: 'Ground' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss-original.svg', type: 'Flying' },
    ],
    github: 'https://github.com/mhjayeed715/UniShareSync',
    live: 'https://unisharesyncweb.vercel.app/',
    featured: true,
  },
  {
    id: 'skillvoyage',
    speciesNumber: '#005',
    title: 'SkillVoyage',
    subtitle: 'Learning Goal Tracker & Skill Matrix',
    ballType: 'safari',
    types: ['Electric', 'Grass', 'Ghost'],
    description:
      'MERN stack platform enabling users to set learning goals, track progress through interactive dashboards, and receive personalized skill development recommendations with secure authentication and role-based access.',
    battleLore:
      'A navigational vessel guiding learners through vast skill trees and milestone achievements.',
    highlights: ['Interactive Dashboards', 'JWT Authentication', 'Personalized Recommendations'],
    moves: [
      { name: 'Skill Tree Matrix', description: 'Visual node graphs mapping prerequisite knowledge paths', type: 'Grass' },
      { name: 'Goal Telemetry', description: 'Dynamic burndown charts showing daily learning progress', type: 'Electric' },
      { name: 'JWT Secure Vault', description: 'Protected state persistence across learning sessions', type: 'Steel' },
    ],
    stats: { hp: 86, atk: 84, def: 85, speed: 86 },
    level: 100,
    image: '/projects/skillvoyage.png',
    tech: [
      { name: 'React', icon: '/icons/react-original.svg', type: 'Electric' },
      { name: 'MongoDB', icon: '/icons/mongodb-original.svg', type: 'Grass' },
      { name: 'Express.js', icon: '/icons/express-original.svg', type: 'Ghost' },
      { name: 'Node.js', icon: '/icons/nodejs-original.svg', type: 'Electric' },
    ],
    github: 'https://github.com/mhjayeed715/skillvoyage',
    live: 'https://skillvoyage-frontend.vercel.app/',
    featured: false,
  },
  {
    id: 'servyn',
    speciesNumber: '#006',
    title: 'Servyn',
    subtitle: 'Local Service Booking & Provider Network',
    ballType: 'quick',
    types: ['Water', 'Psychic', 'Ground'],
    description:
      'Flutter-based mobile app for reliable local service booking in Bangladesh with role-based access, phone OTP authentication via Supabase, and SMS notifications for seamless provider-customer interactions.',
    battleLore:
      'A mobile dispatch agent that connects service providers with neighbourhood customers instantaneously.',
    highlights: ['Phone OTP Auth', 'SMS Notifications', 'Role-Based Access Control'],
    moves: [
      { name: 'Provider Teleport', description: 'Geo-spatial matching linking nearby verified technicians', type: 'Psychic' },
      { name: 'SMS Booking Beacon', description: 'Instant multi-carrier SMS alerts for appointment bookings', type: 'Electric' },
      { name: 'Escrow Release', description: 'Safe completion confirmation before fund disbursement', type: 'Ground' },
    ],
    stats: { hp: 88, atk: 86, def: 88, speed: 85 },
    level: 100,
    image: '/projects/servyn.png',
    tech: [
      { name: 'Flutter', icon: '/icons/flutter-original.svg', type: 'Water' },
      { name: 'Dart', icon: '/icons/dart-original.svg', type: 'Water' },
      { name: 'Supabase', icon: '/icons/supabase-original.svg', type: 'Psychic' },
    ],
    github: 'https://github.com/mhjayeed715/servyn',
    featured: false,
  },
  {
    id: 'unisharesyncfx',
    speciesNumber: '#007',
    title: 'UniShareSyncFX',
    subtitle: 'Desktop Academic Collaboration Tool',
    ballType: 'premier',
    types: ['Fire', 'Ground', 'Steel'],
    description:
      'JavaFX desktop application facilitating university resource sharing and collaboration through role-specific dashboards, real-time communication, and project tracking with MySQL integration.',
    battleLore:
      'A heavy-armored desktop workstation optimized for local workstation workflows and institutional databases.',
    highlights: ['Role Dashboards', 'Real-time Chat', 'MySQL Integration'],
    moves: [
      { name: 'JavaFX Native GUI', description: 'Multi-threaded client UI running directly on desktop OS', type: 'Fire' },
      { name: 'MySQL Engine', description: 'Structured relational data management with ACID transaction guarantees', type: 'Ground' },
      { name: 'Socket Relay', description: 'Direct socket communication channels across local campus subnets', type: 'Steel' },
    ],
    stats: { hp: 84, atk: 86, def: 90, speed: 78 },
    level: 100,
    image: '/projects/unisharesyncfx.png',
    tech: [
      { name: 'Java', icon: '/icons/java-original.svg', type: 'Fire' },
      { name: 'MySQL', icon: '/icons/mysql-original.svg', type: 'Water' },
    ],
    github: 'https://github.com/mhjayeed715/UniShareSyncFX',
    featured: false,
  },
  {
    id: 'ai-drainage',
    speciesNumber: '#008',
    title: 'AI Drainage Optimizer',
    subtitle: 'AI-Powered Urban Water Management & Flood Defense',
    ballType: 'safari',
    types: ['Grass', 'Water', 'Psychic'],
    description:
      'AI-powered system to optimize waterlogging and drainage, enhancing urban water management and reducing flood risks through predictive analytics and runoff modeling.',
    battleLore:
      'A predictive environmental intelligence system designed to anticipate rainfall surges and mitigate urban waterlogging.',
    highlights: ['AI/ML Pipeline', 'Predictive Analytics', 'Urban Water Defense'],
    moves: [
      { name: 'Runoff Forecasting', description: 'Time-series model predicting flood accumulation zones from rainfall data', type: 'Psychic' },
      { name: 'Drainage Flow Routing', description: 'Heuristic graph routing to divert excess storm surge safely', type: 'Water' },
      { name: 'Sensor Telemetry Ingestion', description: 'Real-time sensor data cleaning and outlier detection pipeline', type: 'Grass' },
    ],
    stats: { hp: 88, atk: 90, def: 88, speed: 82 },
    level: 100,
    image: '/projects/ai-drainage.png',
    tech: [
      { name: 'Python', icon: '/icons/python-original.svg', type: 'Grass' },
    ],
    github: 'https://github.com/mhjayeed715/AI-Powered-Smart-Waterlogging-and-Drainage-Optimizer',
    featured: false,
  },
]
