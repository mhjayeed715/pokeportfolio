export interface ContactChannel {
  id: string
  label: string
  pokedexLabel: string
  value: string
  href: string | null
  iconName: string
  isExternal: boolean
  badge: string
}

export interface ContactData {
  title: string
  subtitle: string
  lorePrompt: string
  channels: ContactChannel[]
  emailJs: {
    serviceId: string
    templateId: string
    publicKey: string
  }
  catchPhases: {
    ready: string
    throwing: string
    wobble1: string
    wobble2: string
    wobble3: string
    caught: string
  }
}

export const contactData: ContactData = {
  title: 'Catch Me!',
  subtitle: 'Initiate a Trainer Challenge or Connect for Projects',
  lorePrompt: 'A wild Full-Stack Developer appeared! Throw a Poké Ball to open a direct transmission line.',
  channels: [
    {
      id: 'email',
      label: 'Email Transmission',
      pokedexLabel: 'HOLOCASTER CHANNEL',
      value: 'mehrabjayeed715@gmail.com',
      href: 'mailto:mehrabjayeed715@gmail.com',
      iconName: 'Mail',
      isExternal: false,
      badge: 'PRIORITY COMM',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp Direct Link',
      pokedexLabel: 'SPEED DIAL / VOIP',
      value: '+880 1533 652232',
      href: 'https://wa.me/8801533652232',
      iconName: 'MessageSquare',
      isExternal: true,
      badge: 'INSTANT MSG',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn Network',
      pokedexLabel: 'TRAINER GUILD PROFILE',
      value: 'linkedin.com/in/mhjayeed715',
      href: 'https://linkedin.com/in/mhjayeed715',
      iconName: 'Linkedin',
      isExternal: true,
      badge: 'PROFESSIONAL',
    },
    {
      id: 'github',
      label: 'GitHub Roster',
      pokedexLabel: 'OPEN-SOURCE REPO HUB',
      value: 'github.com/mhjayeed715',
      href: 'https://github.com/mhjayeed715',
      iconName: 'Github',
      isExternal: true,
      badge: 'CODE VAULT',
    },
    {
      id: 'location',
      label: 'Trainer Home Base',
      pokedexLabel: 'GEOLOCATION BEACON',
      value: 'Dhaka, Bangladesh',
      href: null,
      iconName: 'MapPin',
      isExternal: false,
      badge: 'KANTO REGION',
    },
  ],
  emailJs: {
    serviceId: 'service_x19apia',
    templateId: 'template_gb2zmgq',
    publicKey: 'kJx5ZWCc_2G3nQys2',
  },
  catchPhases: {
    ready: 'Ready to throw Poké Ball! Click to capture contact screen.',
    throwing: 'Throwing Master Ball...',
    wobble1: 'Wobble 1... Connecting signal...',
    wobble2: 'Wobble 2... Establishing link...',
    wobble3: 'Wobble 3... Almost there...',
    caught: 'Gotcha! S. M. Mehrab Hossain Jayeed was caught! Comm terminal unlocked.',
  },
}
