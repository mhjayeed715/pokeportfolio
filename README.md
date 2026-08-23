# 🔴 S. M. Mehrab Hossain Jayeed — Pokédex Developer Portfolio

An ultra-premium, interactive Pokédex-themed developer portfolio for **S. M. Mehrab Hossain Jayeed** (Full-Stack Architect & AI-Augmented Software Engineer). Built with React 19, Tailwind CSS v4, Lenis Smooth Scrolling, Framer Motion, and synthesized Web Audio API sound effects.

---

## ⚡ Core Concept & Pokémon Game Mechanics

The visitor doesn't just browse a portfolio — they scan a Trainer's official Pokédex database with authentic Nintendo & Pokémon mechanics:

1. **Boot / Intro Sequence (`BootSequence.jsx`)**: Vintage CRT power-on scanlines, blinking status LEDs, 3-note harmonic Web Audio power chime, and `"PROF. OAK'S LAB — LOADING PROFILE..."` terminal text (session-persisted with instant skip).
2. **Hero & Starter Selection (`Hero.jsx`)**:
   - Three hovering interactive Poké Balls for **CODE**, **DESIGN**, and **DEPLOY** (nodding to Bulbasaur, Charmander, Squirtle) that trigger release animations and scroll to Signature Moves.
   - Official **Gen 3/4 Trainer Card (`TrainerCard.jsx`)**: `IDNo. 00715`, Badges collected (3 competition wins), Pokédex Owned (`8/8 Projects Caught`), Time Played (`3+ Years on Journey`), and Money (`20+ Tech Types Mastered`).
   - Live video portal playing `profilevid.webm` inside an animated Pokédex optical scanner frame.
3. **Species Entry (`About.jsx`)**:
   - Left optical scanner with `profilevid.webm` and laser scan reticle.
   - Classification `"THE FULL-STACK ARCHITECT"` with playful `"Stack Depth: 5'11\" (Full-Stack)"` and `"Experience Weight: 3+ YRS / 8+ MVPs"` stat lines.
   - Red physical **"CRY"** button that plays an authentic synthesized retro 8-bit Pokédex cry sound.
   - Typewriter flavor text bio and 5 expandable Pokédex Abilities.
4. **Signature Moves (`Services.jsx`)**: Battle move-select screen (2x3 attack menu) with `PP 99/99 — Always Available` counters, Physical/Special/Status categories, and type coloring.
5. **Base Stats & 18-Type Matrix (`Skills.jsx`)**:
   - Base Stat spread (HP, ATK, DEF, SpA, SpD, SPE with BST: 700+ S+ Tier).
   - Nature mechanic: *"Nature: Hardy — boosts AI-Augmented Workflow, balanced across full stack engineering"*.
   - Complete 18-type technology grid with custom SVG type badges and **interactive hover matchup tooltips** (*"Super effective against Legacy Codebases (+2.0x)"*).
   - Collapsible Hidden Abilities panel (LSTM, Federated Learning, NLP, Prompt Engineering, JWT Security).
6. **"My Team" Party Screen (`Projects.jsx`)**:
   - 6-slot active party index + Bill's PC Storage Box archive.
   - Poké Ball rarity tier indicator icons (Poké Ball, Great Ball, Ultra Ball, Master Ball) + Level badges (Lv. 100) + in-battle HP/PWR bars.
   - Multi-tab **Pokémon Summary Screen Modal (`SummaryScreenModal.jsx`)** with Info, Moves, Ribbons (2nd Place Showcase Trophy), and Stats tabs + `[FIGHT (Live)]`, `[BAG (Code)]`, `[POKÉMON]`, and `[RUN]` commands.
7. **Gym Badge Case & TM Case (`Achievements.jsx`)**:
   - Bulbapedia-inspired velvet Badge Case displaying the 3 competition championship badges (2nd Place Showcase 2026, Champion Project 2025, Datathon ML 2026) + 8 Kanto League Gym Badges with interactive case study / HM unlocks.
   - Optical TM Discs case for Harvard CS50 AI, CS50x, and Anthropic MCP credentials with verification lightboxes.
8. **Trainer's Code (`Philosophy.jsx` & `GymLeaderDialogueBox.jsx`)**:
   - Gym Leader pre-battle RPG dialogue box with Leader video portrait, typewriter animation, and animated bouncing `▼` prompt for page-turning.
9. **Evolution Line (`Education.jsx` & `EvolutionChain.jsx`)**:
   - 3-stage metamorphosis from SSC (2019) → HSC (2021) → BSc CSE (2026 Active Form with Mega/Tera aura and full XP bar).
10. **"Catch Me!" (`Contact.jsx` & `CatchSequence.jsx`)**:
    - Choose Poké Ball (Master, Ultra, Great, Premier, Quick, Poké Ball).
    - Throw ball → 3 authentic wobble shakes → *"GOTCHA! S. M. Mehrab Hossain Jayeed was caught!"*
    - Unlocks the naming screen with EmailJS contact transmission form + Trainer's PC Box storage endpoints.
11. **Audio Engine (`src/utils/sound.ts`)**:
    - Pure procedural 8-bit synthesizer for Pokédex cries, boot sequence blips, A-button select, ball throw, wobble ticks, catch fanfare, and evolution ascend chimes (toggleable, default OFF).

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** + **Vite 7** | High-performance component architecture |
| **Tailwind CSS v4** | Modern CSS theme tokens, Pokédex palettes, and responsive breakpoints |
| **Lenis (v1.3)** | Inertia smooth scrolling & synchronized anchor navigation |
| **Framer Motion 12** | Fluid scroll-driven transitions, card flips, and modal spring animations |
| **Web Audio API** | Pure procedural 8-bit sound synthesis (zero external audio asset dependencies) |
| **EmailJS** | Client-side email routing for the contact communicator |
| **Lucide React** | Cohesive vector icon system |

---

## 📂 Architecture & Data-Driven Design

All portfolio content is decoupled from UI components and organized into typed data files in `src/data/`:

```
portfolio-site/
├── src/
│   ├── data/
│   │   ├── trainer.ts        # Hero stats, bio, abilities, socials, and resume URL
│   │   ├── services.ts       # 6 signature battle moves with PP, categories, and tags
│   │   ├── skills.ts         # Base stats, type chart categories, hidden abilities
│   │   ├── projects.ts       # Party roster (8 caught projects with lore, moves, stats)
│   │   ├── badges.ts         # Competition championship trophies & 8 Kanto badges
│   │   ├── certifications.ts # TM / HM verified credentials & disc colors
│   │   ├── education.ts      # 3-stage Evolution Line
│   │   ├── philosophy.ts     # 4 Trainer's Code principles
│   │   ├── contact.ts        # Transmission endpoints, EmailJS config & catch lore
│   │   └── techTypeMap.ts    # 18-type Pokémon elemental mapping dictionary & tooltips
│   ├── utils/
│   │   └── sound.ts          # Synthesized Web Audio API sound FX engine
│   ├── components/
│   │   ├── BootSequence.jsx          # CRT power-on screen
│   │   ├── PokedexFrame.jsx          # Top hardware bezel with blue lens & status LEDs
│   │   ├── Navbar.jsx                # Pokédex menu with red active LED indicator
│   │   ├── Hero.jsx                  # Starter selection homage (Code, Design, Deploy)
│   │   ├── TrainerCard.jsx           # Gen 3/4 official trainer card with video scanner
│   │   ├── TypeBadge.jsx             # Pokémon type badge with matchup tooltip
│   │   ├── HPBar.jsx                 # In-battle segmented HP / PWR status bar
│   │   ├── PokeBallIcon.jsx          # 7 SVG Poké Ball variants & rarity tiers
│   │   ├── About.jsx                 # Pokédex species entry with red Cry button
│   │   ├── Services.jsx              # Battle Move Selection cards with PP counters
│   │   ├── Skills.jsx                # Base Stats, Nature, and 18-type matrix
│   │   ├── Projects.jsx              # Active party screen + PC Box archive
│   │   ├── SummaryScreenModal.jsx    # Multi-tab Pokémon Summary Screen modal
│   │   ├── Achievements.jsx          # Velvet Gym Badge Case & TM Case
│   │   ├── BadgeCase.jsx             # Trophy case with project unlock telemetry
│   │   ├── TMCase.jsx                # TM inventory discs with lightbox inspection
│   │   ├── Philosophy.jsx            # Trainer's Code Gym Leader section
│   │   ├── GymLeaderDialogueBox.jsx  # Pre-battle RPG dialogue box with ▼ prompt
│   │   ├── Education.jsx             # Evolution Line section
│   │   ├── EvolutionChain.jsx        # 3-stage evolution line with Mega aura
│   │   ├── Contact.jsx               # Contact section
│   │   ├── CatchSequence.jsx         # 3-shake Poké Ball throw animation & naming form
│   │   ├── Footer.jsx                # Diagnostic footer & boot sequence replay
│   │   ├── ThemeToggle.jsx           # Day (Scarlet) / Night (Gunmetal) switcher
│   │   └── ScrollToTop.jsx           # Floating Poké Ball back-to-top button
│   ├── App.jsx                       # Root assembler with Lenis smooth scroll
│   └── index.css                     # Theme variables & Pokédex scanline styles
```

---

## 📖 Content Management (Data Files Only)

### 1. Adding a New Project (Party Slot)
Open `src/data/projects.ts` and add an object to `projectsData`:

```typescript
{
  id: 'my-project',
  speciesNumber: '#009',
  title: 'Project Title',
  subtitle: 'One-line Subtitle',
  ribbon: 'Optional Championship Ribbon Name',
  ribbonType: 'gold',
  ballType: 'ultra', // 'master' | 'ultra' | 'great' | 'safari' | 'quick' | 'premier' | 'pokeball'
  types: ['Electric', 'Water'],
  description: 'Full overview of the software engineering solution...',
  battleLore: 'Lore flavor text for battle view...',
  highlights: ['Feature 1', 'Feature 2'],
  moves: [
    { name: 'Feature Move 1', description: 'What it accomplishes', type: 'Electric' },
    { name: 'Feature Move 2', description: 'What it accomplishes', type: 'Water' }
  ],
  stats: { hp: 95, atk: 90, def: 92, speed: 94 },
  level: 100,
  image: '/projects/my-image.png',
  tech: [
    { name: 'React', icon: '/icons/react-original.svg', type: 'Electric' }
  ],
  github: 'https://github.com/mhjayeed715/...',
  live: 'https://...',
  featured: true
}
```

### 2. Updating Profile Video
Place your WebM video at `public/profilevid.webm`. It will automatically be rendered in both the Trainer Card in Hero and the Optical Scanner in About with CRT scanlines and reticle effects.

---

## 🚀 Local Development

```bash
# Navigate to portfolio-site
cd portfolio-site

# Install dependencies
npm install

# Start local development server with Vite
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📜 License

Licensed under the [MIT License](LICENSE).
