export interface ServiceMove {
  id: string
  title: string
  moveName: string
  type: string
  category: 'Special' | 'Physical' | 'Status'
  pp: string
  power: number | string
  accuracy: string
  description: string
  effect: string
  tags: string[]
  iconName: string
}

export const servicesData: ServiceMove[] = [
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    moveName: 'Thunder Web Stack',
    type: 'Electric',
    category: 'Special',
    pp: '25/25',
    power: 95,
    accuracy: '100%',
    description:
      'End-to-end web applications with React, Next.js, Node.js, Express, and PostgreSQL/MongoDB. REST APIs, real-time features, role-based access, and scalable architecture.',
    effect: 'Deploys high-voltage full-stack web applications with blazing render speeds and zero latency.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Express.js', 'Next.js'],
    iconName: 'Globe',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    moveName: 'Aqua Mobile Wave',
    type: 'Water',
    category: 'Physical',
    pp: '20/20',
    power: 90,
    accuracy: '100%',
    description:
      'Cross-platform mobile applications using Flutter and Dart with clean UI, OTP authentication, push notifications, offline caching, and seamless backend integration.',
    effect: 'Flows seamlessly across iOS & Android with buttery-smooth 60fps animations and resilient state management.',
    tags: ['Flutter', 'Dart', 'Supabase', 'Postman'],
    iconName: 'Smartphone',
  },
  {
    id: 'db-api',
    title: 'Database Design & API Architecture',
    moveName: 'Earthquake Schema',
    type: 'Ground',
    category: 'Status',
    pp: '30/30',
    power: 85,
    accuracy: '100%',
    description:
      'Normalized database schemas, indexing, efficient queries, RESTful APIs with proper error handling, pagination, rate limiting, and security best practices.',
    effect: 'Lays an unbreakable bedrock data layer with optimized index queries and sub-10ms response times.',
    tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Express.js'],
    iconName: 'Database',
  },
  {
    id: 'ai-assisted',
    title: 'AI-Assisted Development',
    moveName: 'Psychic AI Boost',
    type: 'Psychic',
    category: 'Special',
    pp: '15/15',
    power: 100,
    accuracy: '95%',
    description:
      'Rapid prototyping and MVP delivery using AI coding tools. Structured prompt engineering, rigorous code validation, and AI-human hybrid workflows for 3x faster shipping.',
    effect: 'Channels frontier intelligence models to accelerate development velocity while enforcing strict security filters.',
    tags: ['Prompt Engineering', 'AI Tools', 'Rapid MVP', 'LLM Workflows'],
    iconName: 'Bot',
  },
  {
    id: 'auth-security',
    title: 'Auth & Security Implementation',
    moveName: 'Steel Auth Shield',
    type: 'Steel',
    category: 'Status',
    pp: '20/20',
    power: 90,
    accuracy: '100%',
    description:
      'JWT authentication, email & SMS OTP verification, role-based access control (RBAC), input sanitization, token rotation, and secure session management.',
    effect: 'Constructs impenetrable cryptographic defenses around sensitive routes and user identities.',
    tags: ['JWT', 'OTP', 'RBAC', 'Security', 'Supabase'],
    iconName: 'Shield',
  },
  {
    id: 'docs-git',
    title: 'Documentation & Version Control',
    moveName: 'Leaf Commit Stream',
    type: 'Normal',
    category: 'Status',
    pp: '35/35',
    power: 80,
    accuracy: '100%',
    description:
      'Clean, well-structured documentation and version-controlled codebases using Git. Conventional commits, branching strategies, README standards, and CI/CD collaboration.',
    effect: 'Keeps team codebases crystal clear, maintainable, and continuously deployable without merge conflicts.',
    tags: ['Git', 'GitHub', 'Markdown', 'CI/CD', 'VS Code'],
    iconName: 'FileCode2',
  },
]
