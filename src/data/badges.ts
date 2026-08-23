export interface GymBadge {
  id: string
  gymBadgeName: string
  title: string
  organizer: string
  badgeLabel: string
  badgeColor: string
  pinColor: string
  highlightProject: string
  year: string
  category: string
  flavorText: string
  pipelineDetails?: string[]
  iconName: string
}

export interface KantoGymBadge {
  id: string
  name: string
  gymLeader: string
  city: string
  type: string
  color: string
  glow: string
  statBoost: string
  description: string
}

export const kantoLeagueBadges: KantoGymBadge[] = [
  {
    id: 'boulder',
    name: 'Boulder Badge',
    gymLeader: 'Brock',
    city: 'Pewter City',
    type: 'Rock',
    color: '#78716c',
    glow: '#a8a29e',
    statBoost: '+15 ATK Foundation',
    description: 'Mastery over data structures, algorithmic foundations, and rock-solid architectural design patterns.',
  },
  {
    id: 'cascade',
    name: 'Cascade Badge',
    gymLeader: 'Misty',
    city: 'Cerulean City',
    type: 'Water',
    color: '#0284c7',
    glow: '#38bdf8',
    statBoost: '+18 Fluid Adaptability',
    description: 'Seamless cross-platform Flutter mobile applications, reactive state management, and fluid UI animations.',
  },
  {
    id: 'thunder',
    name: 'Thunder Badge',
    gymLeader: 'Lt. Surge',
    city: 'Vermilion City',
    type: 'Electric',
    color: '#eab308',
    glow: '#facc15',
    statBoost: '+20 Real-time Speed',
    description: 'High-concurrency WebSockets, Socket.IO live collaboration streams, and ultra-fast Node.js backends.',
  },
  {
    id: 'rainbow',
    name: 'Rainbow Badge',
    gymLeader: 'Erika',
    city: 'Celadon City',
    type: 'Grass',
    color: '#16a34a',
    glow: '#4ade80',
    statBoost: '+16 UI/UX Harmony',
    description: 'Accessible, responsive design systems, vibrant aesthetic color tokens, and neurodivergent-friendly UX.',
  },
  {
    id: 'soul',
    name: 'Soul Badge',
    gymLeader: 'Koga',
    city: 'Fuchsia City',
    type: 'Poison / Steel',
    color: '#9333ea',
    glow: '#c084fc',
    statBoost: '+18 Defense Shield',
    description: 'Cryptographic email OTP logins, multi-tier RBAC authorization gates, and hardened backend security.',
  },
  {
    id: 'marsh',
    name: 'Marsh Badge',
    gymLeader: 'Sabrina',
    city: 'Saffron City',
    type: 'Psychic',
    color: '#db2777',
    glow: '#f472b6',
    statBoost: '+22 Cognitive AI Power',
    description: 'Groq RAG vector retrieval, Harvard CS50 AI machine learning models, and predictive ML classification pipelines.',
  },
  {
    id: 'volcano',
    name: 'Volcano Badge',
    gymLeader: 'Blaine',
    city: 'Cinnabar Island',
    type: 'Fire',
    color: '#ea580c',
    glow: '#fb923c',
    statBoost: '+20 Throughput Power',
    description: 'High-performance SQL query optimization, database normalization, and heavy compute task queues.',
  },
  {
    id: 'earth',
    name: 'Earth Badge',
    gymLeader: 'Giovanni',
    city: 'Viridian City',
    type: 'Ground',
    color: '#ca8a04',
    glow: '#eab308',
    statBoost: '+25 Senior Production Range',
    description: 'Full-stack end-to-end production deployments, zero-downtime microservices, and client delivery leadership.',
  },
]

export const gymBadgesData: GymBadge[] = [
  {
    id: 'software-showcase-2026',
    gymBadgeName: 'Silver Prism Trophy',
    title: '2nd Place — Software Project Showcase 2026',
    organizer: 'Software Community, SMUCT',
    badgeLabel: '2nd Place Winner',
    badgeColor: 'from-amber-400 to-amber-600',
    pinColor: '#F59E0B',
    highlightProject: 'UniShareSync Mobile App',
    year: '2026',
    category: 'Inter-Department Software Contest',
    flavorText:
      'Secured 2nd Place in the competitive inter-department showcase by presenting the UniShareSync mobile ecosystem featuring Groq RAG AI document querying and real-time collaboration canvas.',
    iconName: 'Trophy',
  },
  {
    id: 'project-showcase-2025',
    gymBadgeName: 'Apex Victory Trophy',
    title: 'Champion — Project Showcasing 2025',
    organizer: 'Robotics & IoT Community, SMUCT',
    badgeLabel: 'Champion Title',
    badgeColor: 'from-emerald-400 to-teal-600',
    pinColor: '#10B981',
    highlightProject: 'Team X',
    year: '2025',
    category: 'Engineering & Innovation',
    flavorText:
      'Team X recognized as Champion, demonstrating cutting-edge engineering, hardware-software integration, and rapid problem-solving in a competitive academic battle.',
    iconName: 'Award',
  },
  {
    id: 'datathon-2026',
    gymBadgeName: 'Cascade Mind Trophy',
    title: 'Datathon — ML Contest 2026',
    organizer: 'Machine Learning Community, CSE & CSIT Dept, SMUCT',
    badgeLabel: 'ML Competitor',
    badgeColor: 'from-blue-500 to-indigo-600',
    pinColor: '#6366F1',
    highlightProject: 'Loan Approval ML Pipeline',
    year: '2026',
    category: 'Machine Learning & Data Science',
    flavorText:
      'Engineered an end-to-end predictive pipeline on loan approval datasets featuring sophisticated feature engineering, IQR anomaly scrubbing, and 20+ tuned classifiers.',
    pipelineDetails: [
      'Median imputation & IQR outlier removal',
      'One-Hot & target feature encoding',
      'Yeo-Johnson power normalization',
      '20+ models tuned via RandomizedSearchCV',
    ],
    iconName: 'Brain',
  },
]
