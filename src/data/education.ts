export interface EvolutionStage {
  stage: number
  stageName: string
  evolutionRequirement: string
  name: string
  degree: string
  date: string
  location: string
  gpa: string
  detail: string
  logo: string
  isCurrentForm: boolean
  formBadge: string
  statBoost: string
}

export const educationEvolutionData: EvolutionStage[] = [
  {
    stage: 1,
    stageName: 'Stage 1: Basic Form',
    evolutionRequirement: 'Level 2019 • Science Foundation',
    name: 'Armanitola Govt. High School',
    degree: 'Secondary School Certificate (SSC)',
    date: '2019',
    location: 'Dhaka, Bangladesh',
    gpa: 'GPA: 5.00 / 5.00',
    detail: 'Science Group • Core STEM Foundation',
    logo: '/education/armanitola.jpg',
    isCurrentForm: false,
    formBadge: 'BASIC STAGE',
    statBoost: '+Base Analytical Thinking',
  },
  {
    stage: 2,
    stageName: 'Stage 2: First Evolution',
    evolutionRequirement: 'Level 2021 • Advanced Sciences',
    name: 'Dhaka City College',
    degree: 'Higher Secondary Certificate (HSC)',
    date: '2021',
    location: 'Dhaka, Bangladesh',
    gpa: 'GPA: 5.00 / 5.00',
    detail: 'Science Group • Rigorous Physics & Mathematics',
    logo: '/education/dhaka-city-college.png',
    isCurrentForm: false,
    formBadge: 'EVOLVED FORM',
    statBoost: '+Logic & Complex Problem Solving',
  },
  {
    stage: 3,
    stageName: 'Final Evolution: Mega Architect',
    evolutionRequirement: 'Level 2026 (Expected) • Full-Stack Engine',
    name: 'Shanto-Mariam University of Creative Technology',
    degree: 'BSc in Computer Science & Engineering',
    date: 'Expected 2026',
    location: 'Dhaka, Bangladesh',
    gpa: 'CGPA: 3.93 / 4.00',
    detail: 'Current Semester: 9th • Specializing in AI-Assisted Full-Stack',
    logo: '/education/shanto-mariam.svg',
    isCurrentForm: true,
    formBadge: 'ACTIVE FORM (LVL 100)',
    statBoost: '+Full-Stack Mastery, AI Agents & System Design',
  },
]
