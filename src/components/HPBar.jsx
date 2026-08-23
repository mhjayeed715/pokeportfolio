import { motion } from 'framer-motion'

export default function HPBar({
  value = 100,
  max = 100,
  label = 'PWR',
  size = 'md', // 'sm' | 'md' | 'lg'
  showValues = true,
  className = '',
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  // In-battle color dynamics: Green (>50%) -> Yellow (20-50%) -> Red (<20%)
  const getGradient = (pct) => {
    if (pct > 50) return 'from-emerald-500 via-emerald-400 to-green-300'
    if (pct > 20) return 'from-amber-500 via-amber-400 to-yellow-300'
    return 'from-red-600 via-red-500 to-rose-400 animate-pulse'
  }

  const heightClass = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  }[size] || 'h-3'

  return (
    <div className={`space-y-1 select-none ${className}`}>
      <div className="flex items-center justify-between font-mono text-xs">
        {/* Battle Label Pill */}
        <div className="flex items-center gap-1.5">
          <span className="font-pixel text-[8px] font-black px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 border border-slate-900 shadow-sm">
            {label}
          </span>
          <span className="font-heading text-[11px] font-bold text-foreground tracking-wide">
            STATUS GAUGE
          </span>
        </div>

        {/* Value readout */}
        {showValues && (
          <div className="font-mono text-xs font-bold text-foreground">
            <span className={percentage > 50 ? 'text-emerald-600 dark:text-emerald-400' : percentage > 20 ? 'text-amber-500' : 'text-red-500'}>
              {value}
            </span>
            <span className="text-muted-foreground font-normal"> / {max}</span>
          </div>
        )}
      </div>

      {/* Battle Notch Frame */}
      <div className={`w-full ${heightClass} rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 p-0.5 overflow-hidden shadow-inner relative`}>
        {/* Animated Segment Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${getGradient(percentage)} shadow-sm relative overflow-hidden`}
        >
          {/* Subtle glossy scanline highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/20" />
        </motion.div>
      </div>
    </div>
  )
}
