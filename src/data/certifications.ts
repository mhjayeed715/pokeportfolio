export interface CertificationItem {
  id: string
  tmNumber: string
  title: string
  issuer: string
  badge: string
  discType: string
  discColor: string
  verifyUrl: string
  image: string
  tags: string[]
  description: string
  iconName: string
}

export const certificationsData: CertificationItem[] = [
  {
    id: 'cs50-ai',
    tmNumber: 'TM01',
    title: 'CS50’s Introduction to Artificial Intelligence with Python',
    issuer: 'HarvardX, edX Verified Certificate',
    badge: 'Harvard Verified',
    discType: 'Psychic',
    discColor: '#EC4899',
    verifyUrl: 'https://courses.edx.org/certificates/0f757edad714434399b0fa981bed388d',
    image: '/certificates/CS50AI1.png',
    tags: ['Search Algorithms', 'Optimization', 'Machine Learning', 'Neural Networks', 'NLP'],
    description:
      'Covered foundational AI principles: adversarial search (Minimax), optimization, probabilistic models, machine learning algorithms, deep learning neural networks, and natural language processing.',
    iconName: 'Brain',
  },
  {
    id: 'cs50x',
    tmNumber: 'TM02',
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'HarvardX, edX Verified Certificate',
    badge: 'Harvard Verified',
    discType: 'Electric',
    discColor: '#EAB308',
    verifyUrl: 'https://courses.edx.org/certificates/45442b0106884e8a8c983ab208b027e1',
    image: '/certificates/CS50x1.png',
    tags: ['C', 'Python', 'Flask', 'SQLite', 'Socket.IO', 'Algorithms'],
    description:
      'Comprehensive computer science fundamentals including algorithmic thinking, memory management, low-level pointers, and full-stack web development. Built GigCampus as the capstone final project.',
    iconName: 'Code2',
  },
  {
    id: 'anthropic-mcp',
    tmNumber: 'TM03',
    title: 'Anthropic Model Context Protocol (MCP) Introduction',
    issuer: 'Anthropic',
    badge: 'Agentic AI & Tool-Use',
    discType: 'Steel',
    discColor: '#64748B',
    verifyUrl: 'https://verify.skilljar.com/c/vbhgugbt9567',
    image: '/certificates/anthropic.png',
    tags: ['MCP Architecture', 'Tool-Use Protocols', 'Agentic Pipelines', 'Context Integration'],
    description:
      'Studied how frontier AI systems expose tool-use capabilities to external agents, multi-agent frameworks, JSON-RPC protocols, and integrative LLM pipelines.',
    iconName: 'Bot',
  },
]
