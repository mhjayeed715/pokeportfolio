export interface PhilosophyPlaque {
  id: string
  ruleNumber: string
  title: string
  motto: string
  element: string
  elementColor: string
  description: string
  iconName: string
}

export const philosophyData: PhilosophyPlaque[] = [
  {
    id: 'clean-arch',
    ruleNumber: 'TRAINER CODE 01',
    title: 'Clean Architecture',
    motto: 'Modularity is Destiny',
    element: 'Steel',
    elementColor: '#94A3B8',
    description:
      'Every project follows a clear separation of concerns — modular components, reusable custom hooks, and layered backend services. Code is engineered to be instantly readable, testable, and painless to maintain.',
    iconName: 'Code2',
  },
  {
    id: 'perf-first',
    ruleNumber: 'TRAINER CODE 02',
    title: 'Performance First',
    motto: 'Sub-Millisecond Response',
    element: 'Electric',
    elementColor: '#EAB308',
    description:
      'Aggressive lazy loading, bundle code-splitting, indexed queries, and minimal state thrashing. Performance telemetry is monitored constantly — Core Web Vitals (LCP, INP, CLS) are foundational baselines.',
    iconName: 'Zap',
  },
  {
    id: 'ai-augmented',
    ruleNumber: 'TRAINER CODE 03',
    title: 'AI-Augmented Workflow',
    motto: 'Accelerate Without Compromise',
    element: 'Psychic',
    elementColor: '#EC4899',
    description:
      'AI coding engines are harnessed to 3x shipping velocity, never to replace architectural judgment. Every generated block undergoes strict verification for edge cases, performance, and cryptographic safety.',
    iconName: 'Lightbulb',
  },
  {
    id: 'ship-safe',
    ruleNumber: 'TRAINER CODE 04',
    title: 'Ship Fast, Ship Safe',
    motto: 'Velocity With Shield Defenses',
    element: 'Dark',
    elementColor: '#334155',
    description:
      'Rapid delivery without cutting corners on system integrity. Proper token rotation, input sanitization, error boundaries, and structured audit logs are woven into the codebase from the initial commit.',
    iconName: 'GitBranch',
  },
]
