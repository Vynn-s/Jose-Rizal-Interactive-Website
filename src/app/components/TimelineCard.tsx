import { motion } from 'motion/react';
import { GraduationCap, Plane, BookOpen, Users, Scale, LucideIcon } from 'lucide-react';

interface TimelineCardProps {
  year: string;
  category: 'Education' | 'Travel' | 'Works' | 'Family' | 'Political';
  title: string;
  description: string;
  index: number;
  imageUrl?: string;
  onClick?: () => void;
}

const categoryConfig: Record<string, { icon: LucideIcon; color: string; emoji: string }> = {
  Education: { icon: GraduationCap, color: '#0038A8', emoji: '🎓' },
  Travel: { icon: Plane, color: '#FCD116', emoji: '✈️' },
  Works: { icon: BookOpen, color: '#C9973A', emoji: '📖' },
  Family: { icon: Users, color: '#8B4513', emoji: '👨‍👩‍👧' },
  Political: { icon: Scale, color: '#DC143C', emoji: '⚖️' },
};

export default function TimelineCard({ year, category, title, description, index, imageUrl, onClick }: TimelineCardProps) {
  const isLeft = index % 2 === 0;
  const config = categoryConfig[category];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 md:gap-8 mb-12`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{
            y: -8,
            boxShadow: '0 20px 40px rgba(59, 35, 20, 0.3), 0 0 30px rgba(201, 151, 58, 0.2)'
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={onClick}
          className="bg-gradient-to-br from-white to-[#FDFBF7] rounded-2xl shadow-xl border-2 border-[#C9973A]/30 relative overflow-hidden group cursor-pointer"
        >
          {/* Decorative accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
            style={{ background: `linear-gradient(90deg, transparent, ${config.color}, transparent)` }}
          />

          {/* Image at the top */}
          {imageUrl && (
            <div className="h-32 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <img
                src={imageUrl}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ willChange: 'transform' }}
              />
            </div>
          )}

          <div className="p-6">
            {/* Decorative corner with glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-20"
              style={{
                background: `radial-gradient(circle at top right, ${config.color}, transparent 70%)`,
              }}
            />

            {/* Category badge with modern styling */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3 shadow-md border ${isLeft ? 'md:ml-auto' : ''}`}
              style={{
                backgroundColor: `${config.color}15`,
                borderColor: `${config.color}40`
              }}
            >
              <Icon size={14} style={{ color: config.color }} />
              <span className="text-xs font-medium" style={{ color: config.color, fontFamily: 'var(--font-display)' }}>
                {category}
              </span>
            </div>

            <h3 className="mb-3 text-[#3B2314] text-xl" style={{ fontFamily: 'var(--font-display)' }}>
              {title}
            </h3>
            <p className="text-[#3B2314]/80 leading-relaxed">
              {description}
            </p>

            {/* Click to read more indicator */}
            <div className="mt-4 pt-4 border-t border-[#C9973A]/20">
              <span className="text-xs text-[#C9973A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'var(--font-display)' }}>
                Click to read more →
              </span>
            </div>
          </div>

          {/* Subtle bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9973A]/30 to-transparent" />
        </motion.div>
      </div>

      {/* Timeline Spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl relative z-10 ring-4 ring-[#FCD116]/30"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, #FCD116 0%, #C9973A 50%, #8B6914 100%)
            `,
          }}
        >
          <div className="absolute inset-2 rounded-full border-2 border-[#3B2314]/20" />
          <span className="text-[#3B2314] font-bold relative z-10" style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem' }}>
            {year}
          </span>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
