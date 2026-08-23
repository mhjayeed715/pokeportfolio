export default function PokeBallIcon({ type = 'pokeball', size = 28, className = '' }) {
  const normType = (type || 'pokeball').toLowerCase().replace(/[^a-z]/g, '')

  switch (normType) {
    case 'masterball':
    case 'master':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#111827" strokeWidth="4" />
          {/* Top Half Purple */}
          <path d="M 2 50 A 48 48 0 0 1 98 50 Z" fill="#6d28d9" stroke="#111827" strokeWidth="3" />
          {/* Dual Pink Nodules */}
          <circle cx="28" cy="30" r="11" fill="#ec4899" />
          <circle cx="72" cy="30" r="11" fill="#ec4899" />
          {/* Center White 'M' */}
          <path d="M 38 23 L 45 35 L 50 28 L 55 35 L 62 23" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Center Line & Button */}
          <line x1="2" y1="50" x2="98" y2="50" stroke="#111827" strokeWidth="6" />
          <circle cx="50" cy="50" r="16" fill="#ffffff" stroke="#111827" strokeWidth="5" />
          <circle cx="50" cy="50" r="7" fill="#ffffff" stroke="#111827" strokeWidth="2" />
        </svg>
      )

    case 'ultraball':
    case 'ultra':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#111827" strokeWidth="4" />
          {/* Top Half Black */}
          <path d="M 2 50 A 48 48 0 0 1 98 50 Z" fill="#18181b" stroke="#111827" strokeWidth="3" />
          {/* Yellow H / Curved Stripes */}
          <path d="M 18 50 A 36 36 0 0 1 38 16 L 46 16 L 30 50 Z" fill="#facc15" />
          <path d="M 82 50 A 36 36 0 0 0 62 16 L 54 16 L 70 50 Z" fill="#facc15" />
          <rect x="36" y="23" width="28" height="6.5" rx="3" fill="#facc15" />
          {/* Center Line & Button */}
          <line x1="2" y1="50" x2="98" y2="50" stroke="#111827" strokeWidth="6" />
          <circle cx="50" cy="50" r="16" fill="#ffffff" stroke="#111827" strokeWidth="5" />
          <circle cx="50" cy="50" r="7" fill="#ffffff" stroke="#111827" strokeWidth="2" />
        </svg>
      )

    case 'greatball':
    case 'great':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#111827" strokeWidth="4" />
          {/* Top Half Cobalt Blue */}
          <path d="M 2 50 A 48 48 0 0 1 98 50 Z" fill="#2563eb" stroke="#111827" strokeWidth="3" />
          {/* Red Stripes on Top */}
          <path d="M 18 42 C 22 24 34 16 42 12 L 40 20 C 34 24 24 32 22 44 Z" fill="#ef4444" />
          <path d="M 82 42 C 78 24 66 16 58 12 L 60 20 C 66 24 76 32 78 44 Z" fill="#ef4444" />
          {/* Center Line & Button */}
          <line x1="2" y1="50" x2="98" y2="50" stroke="#111827" strokeWidth="6" />
          <circle cx="50" cy="50" r="16" fill="#ffffff" stroke="#111827" strokeWidth="5" />
          <circle cx="50" cy="50" r="7" fill="#ffffff" stroke="#111827" strokeWidth="2" />
        </svg>
      )

    case 'premierball':
    case 'premier':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="48" fill="#f8fafc" stroke="#111827" strokeWidth="4" />
          {/* Red Center Ring */}
          <line x1="2" y1="50" x2="98" y2="50" stroke="#dc2626" strokeWidth="6" />
          <circle cx="50" cy="50" r="16" fill="#f8fafc" stroke="#dc2626" strokeWidth="5" />
          <circle cx="50" cy="50" r="7" fill="#f8fafc" stroke="#dc2626" strokeWidth="2" />
        </svg>
      )

    case 'safariball':
    case 'safari':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#111827" strokeWidth="4" />
          {/* Top Green Camouflage */}
          <path d="M 2 50 A 48 48 0 0 1 98 50 Z" fill="#15803d" stroke="#111827" strokeWidth="3" />
          <circle cx="34" cy="28" r="10" fill="#a3e635" opacity="0.85" />
          <circle cx="68" cy="34" r="12" fill="#ca8a04" opacity="0.85" />
          {/* Center Line & Button */}
          <line x1="2" y1="50" x2="98" y2="50" stroke="#111827" strokeWidth="6" />
          <circle cx="50" cy="50" r="16" fill="#ffffff" stroke="#111827" strokeWidth="5" />
          <circle cx="50" cy="50" r="7" fill="#ffffff" stroke="#111827" strokeWidth="2" />
        </svg>
      )

    case 'quickball':
    case 'quick':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#111827" strokeWidth="4" />
          {/* Top Half Cyan */}
          <path d="M 2 50 A 48 48 0 0 1 98 50 Z" fill="#06b6d4" stroke="#111827" strokeWidth="3" />
          {/* Yellow Lightning X */}
          <path d="M 50 10 L 62 38 L 84 32 L 66 48 L 50 50 L 34 48 L 16 32 L 38 38 Z" fill="#facc15" />
          {/* Center Line & Button */}
          <line x1="2" y1="50" x2="98" y2="50" stroke="#111827" strokeWidth="6" />
          <circle cx="50" cy="50" r="16" fill="#ffffff" stroke="#111827" strokeWidth="5" />
          <circle cx="50" cy="50" r="7" fill="#ffffff" stroke="#111827" strokeWidth="2" />
        </svg>
      )

    case 'pokeball':
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#111827" strokeWidth="4" />
          {/* Top Half Red */}
          <path d="M 2 50 A 48 48 0 0 1 98 50 Z" fill="#dc2626" stroke="#111827" strokeWidth="3" />
          {/* Glint Highlight */}
          <path d="M 20 25 A 35 35 0 0 1 45 12" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.65" />
          {/* Center Line & Button */}
          <line x1="2" y1="50" x2="98" y2="50" stroke="#111827" strokeWidth="6" />
          <circle cx="50" cy="50" r="16" fill="#ffffff" stroke="#111827" strokeWidth="5" />
          <circle cx="50" cy="50" r="7" fill="#ffffff" stroke="#111827" strokeWidth="2" />
        </svg>
      )
  }
}
