# S. M. Mehrab Hossain Jayeed — Portfolio

A modern, high-performance developer portfolio built with React 19, Tailwind CSS v4, and Framer Motion. Features dark/light mode, dynamic particle animations, project showcases, live credential verification with modal previews, and an integrated contact form.

🌐 **Live URL**: [https://jayeed.pro.bd/](https://jayeed.pro.bd/)  
🔗 **Mirror / Vercel**: [https://mhjayeed715.vercel.app/](https://mhjayeed715.vercel.app/)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** + **Vite 7** | Modern component architecture & lightning-fast builds |
| **Tailwind CSS v4** | Utility-first styling with CSS theme tokens |
| **Framer Motion** | Fluid scroll-triggered animations and layout transitions |
| **EmailJS** | Direct client-side email delivery for the contact form |
| **Lucide React** | Cohesive, modern icon library |

---

## ✨ Features & Highlights

- **Light / Dark Mode** — Instant theme switching with smooth transitions, persisted in `localStorage`.
- **Interactive Hero** — Typewriter role cycler, floating background particles, orbiting tech badges, and parallax cursor tracking.
- **Featured Projects Showcase** — Clean cards with tech stacks, live demos, repository links, and award badges:
  1. **UniShareSync Mobile App** — *2nd Place Winner (Software Project Showcase 2026)* • Flutter, Supabase, Groq RAG AI, Real-time Whiteboard/Kanban.
  2. **Focusnyx** — *Student Life OS & Cognitive Shield* • Next.js 14, Supabase, Python Win32 Companion, Chrome MV3 Extension.
  3. **GigCampus** — *Campus Micro-Gig Marketplace* • CS50x Capstone • Python, Flask, SQLite, Socket.IO.
  4. **UniShareSync Web App** — *University Resource Sharing Platform* • React, Node.js, PostgreSQL.
  - *Expandable section* with 4 additional projects (**SkillVoyage**, **Servyn**, **UniShareSyncFX**, **AI Drainage Optimizer**).
- **Competitions & Achievements** — Highlights hackathons and showcase victories (*2nd Place Software Showcase 2026*, *Champion Project Showcasing 2025*, *Datathon ML Contest 2026*).
- **Verified Professional Certifications** — Verified credentials with official public validation URLs and interactive click-to-expand preview modals:
  - **CS50’s Introduction to AI with Python** — HarvardX / edX
  - **CS50x: Introduction to Computer Science** — HarvardX / edX
  - **Anthropic Model Context Protocol (MCP) Introduction** — Anthropic
- **Working Contact Form** — Validated form powered by EmailJS delivering messages directly to inbox.
- **Fully Responsive & Accessible** — Optimized for mobile, tablet, and desktop viewports with accessible ARIA semantics.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/mhjayeed715/portfolio.git

# Navigate to project directory
cd portfolio/portfolio-site

# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production bundle
npm run preview
```

---

## 📂 Project Structure

```
portfolio-site/
├── public/
│   ├── SM_Mehrab_Hossain_Jayeed_Resume.pdf  # Downloadable resume
│   ├── profile.png                         # Profile photo
│   ├── profile2.png                        # Hero profile photo
│   ├── favicon.svg                         # Site favicon
│   ├── certificates/                       # High-res certificate previews
│   │   ├── CS50AI1.png
│   │   ├── CS50x1.png
│   │   └── anthropic.png
│   ├── icons/                              # Tech stack SVG icons
│   ├── projects/                           # Project screenshots
│   └── education/                          # University and college logos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                      # Fixed frosted-glass navigation bar
│   │   ├── Hero.jsx                        # Animated hero with particle canvas
│   │   ├── About.jsx                       # About narrative & strength metrics
│   │   ├── Services.jsx                    # Core engineering services
│   │   ├── Skills.jsx                      # Tech stack grid & proficiency levels
│   │   ├── Projects.jsx                    # Featured & expandable projects showcase
│   │   ├── Achievements.jsx                # Competitions & verified certifications
│   │   ├── Philosophy.jsx                  # Software engineering principles
│   │   ├── Education.jsx                   # Academic timeline
│   │   ├── Contact.jsx                     # EmailJS contact form & social links
│   │   ├── Footer.jsx                      # Multi-column footer & copyright
│   │   ├── ThemeToggle.jsx                 # Light/dark mode toggle
│   │   └── ScrollToTop.jsx                 # Smooth scroll-to-top floating button
│   ├── App.jsx                             # Root layout assembler
│   ├── main.jsx                            # React entry point
│   └── index.css                           # Tailwind CSS theme variables & styling
├── index.html
├── vite.config.js
└── package.json
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
