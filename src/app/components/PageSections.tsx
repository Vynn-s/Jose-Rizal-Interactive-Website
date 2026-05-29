import { motion } from 'motion/react';
import { Sparkles, Sun } from 'lucide-react';
import TimelineCard from './TimelineCard';
import RizalPortrait from './RizalPortrait';
import type { TimelineEvent } from '../data/timelineData';

const aboutHighlights = [
  {
    src: 'https://images.unsplash.com/photo-1580127645995-d43fe9598711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Writing and manuscripts',
    delay: 0.1,
  },
  {
    src: 'https://images.unsplash.com/photo-1600181982553-ce7d36051c01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Books and library',
    delay: 0.2,
  },
  {
    src: 'https://images.unsplash.com/photo-1661200796935-e550c61d2c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Philippine tropical flowers',
    delay: 0.3,
  },
] as const;

const floatingParticles = [
  { left: '12%', top: '18%', duration: 3.2, delay: 0.2 },
  { left: '22%', top: '70%', duration: 3.8, delay: 0.9 },
  { left: '38%', top: '28%', duration: 3.5, delay: 0.4 },
  { left: '58%', top: '15%', duration: 4, delay: 1.1 },
  { left: '74%', top: '62%', duration: 3.6, delay: 0.7 },
  { left: '88%', top: '32%', duration: 4.2, delay: 1.4 },
] as const;

function SectionHeader({ title, center = true }: { title: string; center?: boolean }) {
  return (
    <>
      <h2
        className={`text-4xl md:text-5xl mb-6 text-[#3B2314] ${center ? 'text-center' : ''}`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      <div className="relative h-1 w-32 mx-auto mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9973A] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FCD116] to-transparent blur-sm" />
      </div>
    </>
  );
}

function WorkCard({
  year,
  titleLineOne,
  titleLineTwo,
  accentClass,
  yearClass,
  description,
  hoverShadow,
  transitionDelay,
}: {
  year: string;
  titleLineOne: string;
  titleLineTwo: string;
  accentClass: string;
  yearClass: string;
  description: string;
  hoverShadow: string;
  transitionDelay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: transitionDelay, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -12, boxShadow: hoverShadow }}
      className="flex-shrink-0 w-72 sm:w-80 bg-gradient-to-br from-[#F5EDD6] to-[#E8DCC8] rounded-2xl shadow-2xl border-2 border-[#C9973A]/40 overflow-hidden group"
    >
      <div className={`h-64 ${accentClass} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23C9973A' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3B2314] via-transparent to-transparent" />
        <div className="text-center z-10 p-6 transition-transform duration-500 group-hover:scale-110">
          <div className={`text-6xl mb-4 drop-shadow-lg ${yearClass}`} style={{ fontFamily: 'var(--font-display)' }}>
            {titleLineOne}
          </div>
          <div className={yearClass.replace('text-6xl', 'text-4xl')} style={{ fontFamily: 'var(--font-display)' }}>
            {titleLineTwo}
          </div>
        </div>
      </div>
      <div className="p-6 relative">
        <div className={`absolute top-0 left-0 w-full h-1 ${yearClass.includes('FCD116') ? 'bg-gradient-to-r from-transparent via-[#C9973A] to-transparent' : 'bg-gradient-to-r from-transparent via-[#0038A8] to-transparent'}`} />
        <div className="text-[#C9973A] mb-2 font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>{year}</div>
        <p className="text-[#3B2314] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export interface TimelineSectionProps {
  categories: readonly string[];
  selectedCategory: string;
  filteredTimeline: TimelineEvent[];
  onCategoryChange: (category: string) => void;
  onEventClick: (event: TimelineEvent) => void;
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 50% 20%, rgba(252, 209, 22, 0.15), transparent 50%),
          linear-gradient(180deg, rgba(59, 35, 20, 0.95) 0%, rgba(59, 35, 20, 0.85) 100%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9973A' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <RizalPortrait />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-4 text-[#F5EDD6]" style={{ fontFamily: 'var(--font-display)' }}>
            José Rizal
          </h1>

          <div className="text-xl md:text-2xl text-[#C9973A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            1861 – 1896
          </div>

          <p className="text-lg md:text-xl text-[#F5EDD6]/90 max-w-3xl mx-auto italic mb-8">
            Doctor. Novelist. Polyglot. Martyr.
            <br />
            National Hero of the Philippines.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-[#C9973A]" />
            <Sparkles size={20} className="text-[#C9973A]" />
            <div className="h-px w-24 bg-[#C9973A]" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[#F5EDD6]/70 max-w-2xl mx-auto"
          >
            A journey through the life of the Filipino polymath whose pen awakened a nation and whose sacrifice
            inspired a revolution for freedom and dignity.
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingParticles.map((particle, index) => (
          <motion.div
            key={`${particle.left}-${particle.top}-${index}`}
            className="absolute w-2 h-2 rounded-full bg-[#C9973A]/30"
            style={{ left: particle.left, top: particle.top, willChange: 'transform, opacity' }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
          <SectionHeader title="About This Timeline" />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {aboutHighlights.map((card) => (
              <motion.div
                key={card.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: card.delay, duration: 0.4, ease: 'easeOut' }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-[#C9973A]/30 group"
              >
                <img src={card.src} alt={card.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" style={{ willChange: 'transform' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2314]/90 via-[#3B2314]/30 to-transparent" />
              </motion.div>
            ))}
          </div>

          <div className="relative bg-gradient-to-br from-[#F5EDD6] to-[#E8DCC8] p-8 rounded-2xl border-2 border-[#C9973A]/40 shadow-2xl backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FCD116]/5 to-transparent rounded-2xl pointer-events-none" />
            <div className="relative z-10">
              <p className="text-[#3B2314] leading-relaxed mb-4 text-lg">
                This interactive timeline chronicles the extraordinary life of José Rizal—physician, novelist,
                poet, and reformist—whose intellectual brilliance and moral courage helped ignite the Philippine
                Revolution. Through his writings and sacrifice, he became the symbol of Filipino nationalism and
                the fight against colonial oppression.
              </p>
              <p className="text-[#3B2314] leading-relaxed text-lg">
                Explore the key moments that shaped Rizal's journey from a gifted student in Calamba to a martyred
                hero whose legacy continues to inspire generations. Each entry reveals not just historical facts,
                but the human story of a man who chose the pen over the sword, and truth over tyranny.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TimelineSection({ categories, selectedCategory, filteredTimeline, onCategoryChange, onEventClick }: TimelineSectionProps) {
  return (
    <section id="timeline" className="py-20 bg-[#F5EDD6]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} className="text-center mb-12">
          <SectionHeader title="Life Timeline" />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => onCategoryChange(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#3B2314] to-[#5a4030] text-[#F5EDD6] shadow-xl scale-105 border-2 border-[#C9973A]'
                    : 'bg-white text-[#3B2314] hover:bg-gradient-to-r hover:from-[#C9973A]/20 hover:to-[#FCD116]/20 border-2 border-[#C9973A]/30 hover:border-[#C9973A]/60 shadow-md hover:shadow-lg'
                }`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-[#C9973A] via-[#3B2314] to-[#C9973A]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FCD116] via-transparent to-[#FCD116] blur-sm" />
          </div>

          <div className="space-y-0">
            {filteredTimeline.map((event, index) => (
              <TimelineCard
                key={`${event.year}-${event.title}`}
                {...event}
                index={index}
                onClick={() => onEventClick(event)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function InfluencesSection() {
  return (
    <section id="influences" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
          <SectionHeader title="Biological & Environmental Influences" />

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              className="bg-gradient-to-br from-[#F5EDD6] to-[#E8DCC8] rounded-2xl border-2 border-[#C9973A]/40 shadow-xl overflow-hidden group"
            >
              <div className="h-32 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0038A8]/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1698130540990-69bae53ae99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" alt="Biological heritage" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0038A8]/10 to-transparent rounded-full blur-3xl" />
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0038A8] to-[#002a7a] flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <h3 className="text-[#3B2314] text-2xl" style={{ fontFamily: 'var(--font-display)' }}>Biological Factors</h3>
                </div>
                <ul className="space-y-3 text-[#3B2314]">
                  <li className="flex gap-2"><span className="text-[#C9973A]">•</span><span>Born into a wealthy, educated Chinese-Filipino mestizo family</span></li>
                  <li className="flex gap-2"><span className="text-[#C9973A]">•</span><span>Exceptional intellectual gifts evident from early childhood</span></li>
                  <li className="flex gap-2"><span className="text-[#C9973A]">•</span><span>Multilingual abilities (spoke 22 languages including Tagalog, Spanish, French, German)</span></li>
                  <li className="flex gap-2"><span className="text-[#C9973A]">•</span><span>Frail health yet remarkable mental stamina and discipline</span></li>
                  <li className="flex gap-2"><span className="text-[#C9973A]">•</span><span>Inherited artistic talents from his mother Teodora Alonso</span></li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              className="bg-gradient-to-br from-[#F5EDD6] to-[#E8DCC8] rounded-2xl border-2 border-[#C9973A]/40 shadow-xl overflow-hidden group"
            >
              <div className="h-32 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#FCD116]/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1661200793999-9ac964c56de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" alt="Environmental context" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FCD116]/10 to-transparent rounded-full blur-3xl" />
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FCD116] to-[#C9973A] flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🌏</span>
                  </div>
                  <h3 className="text-[#3B2314] text-2xl" style={{ fontFamily: 'var(--font-display)' }}>Environmental Factors</h3>
                </div>
                <ul className="space-y-3 text-[#3B2314]">
                  <li className="flex gap-2"><span className="text-[#C9973A]">•</span><span>Grew up under oppressive Spanish colonial rule in the Philippines</span></li>
                  <li className="flex gap-2"><span className="text-[#C9973A]">•</span><span>Witnessed injustices against his family and fellow Filipinos</span></li>
                  <li className="flex gap-2"><span className="text-[#C9973A]">•</span><span>Exposed to Enlightenment ideals during European education</span></li>
                  <li className="flex gap-2"><span className="text-[#C9973A]">•</span><span>Influenced by liberal Spanish and European intellectuals</span></li>
                  <li className="flex gap-2"><span className="text-[#C9973A]">•</span><span>Political climate of rising Filipino consciousness and nationalism</span></li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CharacterSection() {
  return (
    <section id="character" className="py-20 bg-[#F5EDD6]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
          <SectionHeader title="Strengths & Weaknesses" />

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px rgba(201, 151, 58, 0.25)' }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0038A8] via-[#C9973A] to-[#FCD116]" />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23FFFFFF' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
              <div className="relative p-8 text-[#F5EDD6]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-2xl" style={{ fontFamily: 'var(--font-display)' }}>Strengths</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-2"><span>✦</span><span><strong>Intellect:</strong> Exceptional analytical mind, wide scholarship, and fluency in many languages</span></li>
                  <li className="flex gap-2"><span>✦</span><span><strong>Discipline:</strong> Converted talent into sustained study, medical training, and scientific work</span></li>
                  <li className="flex gap-2"><span>✦</span><span><strong>Compassion:</strong> Used his skills to serve others through medicine, teaching, and civic work</span></li>
                  <li className="flex gap-2"><span>✦</span><span><strong>Courage:</strong> Challenged colonial abuses with writing instead of silence</span></li>
                  <li className="flex gap-2"><span>✦</span><span><strong>Practicality:</strong> Combined ideas with real-world projects in Dapitan</span></li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px rgba(252, 209, 22, 0.3)' }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FCD116] via-[#C9973A] to-[#8B6914]" />
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
              <div className="relative p-8 text-[#3B2314]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Sun size={20} />
                  </div>
                  <h3 className="text-2xl" style={{ fontFamily: 'var(--font-display)' }}>Weaknesses</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-2"><span>✦</span><span><strong>Idealism:</strong> Perhaps too optimistic about peaceful reform in a violent system</span></li>
                  <li className="flex gap-2"><span>✦</span><span><strong>Isolation:</strong> His elite education created distance from the masses</span></li>
                  <li className="flex gap-2"><span>✦</span><span><strong>Romantic Entanglements:</strong> Multiple complex relationships caused personal turmoil</span></li>
                  <li className="flex gap-2"><span>✦</span><span><strong>Reluctance to Violence:</strong> Opposed armed revolution even when it became inevitable</span></li>
                  <li className="flex gap-2"><span>✦</span><span><strong>Trust in Reason:</strong> Underestimated the entrenched power of colonial interests</span></li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function WorksSection() {
  return (
    <section id="works" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src="https://images.unsplash.com/photo-1613324766451-2d03b2ea8190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" alt="Books background" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} className="text-center mb-12">
          <SectionHeader title="Major Works" />
        </motion.div>

        <div className="flex overflow-x-auto gap-6 pb-8 px-4 md:justify-center">
          <a href="https://en.wikipedia.org/wiki/Noli_Me_Tangere" target="_blank" rel="noopener noreferrer" className="block no-underline">
            <WorkCard
              year="1887"
              titleLineOne="Noli Me"
              titleLineTwo="Tangere"
              accentClass="bg-gradient-to-br from-[#3B2314] via-[#4a3520] to-[#5a4030]"
              yearClass="text-[#FCD116] text-6xl"
              description='"Touch Me Not" — A scathing social novel exposing corruption, abuse, and hypocrisy in colonial Philippine society under Spanish rule and the Catholic Church.'
              hoverShadow="0 30px 60px rgba(59, 35, 20, 0.3), 0 0 40px rgba(201, 151, 58, 0.2)"
              transitionDelay={0}
            />
          </a>
          <a href="https://en.wikipedia.org/wiki/El_Filibusterismo" target="_blank" rel="noopener noreferrer" className="block no-underline">
            <WorkCard
              year="1891"
              titleLineOne="El Filibusterismo"
              titleLineTwo="The Reign of Greed"
              accentClass="bg-gradient-to-br from-[#0038A8] via-[#002a7a] to-[#001f5a]"
              yearClass="text-[#FCD116] text-5xl"
              description="A darker sequel exploring the failure of reforms and the growing revolutionary sentiment. It depicts a society pushed to the brink, where only radical change seems possible."
              hoverShadow="0 30px 60px rgba(0, 56, 168, 0.3), 0 0 40px rgba(252, 209, 22, 0.2)"
              transitionDelay={0.1}
            />
          </a>
          <a href="https://en.wikipedia.org/wiki/Mi_%C3%9Altimo_Adios" target="_blank" rel="noopener noreferrer" className="block no-underline">
            <WorkCard
              year="Various Years"
              titleLineOne="Essays &"
              titleLineTwo="Poetry"
              accentClass="bg-gradient-to-br from-[#C9973A] via-[#A17D2F] to-[#8B6914]"
              yearClass="text-[#3B2314] text-5xl"
              description='Including "Mi Último Adiós" (My Last Farewell), "To the Filipino Youth," and "The Philippines A Century Hence" — works that inspired national identity and hope.'
              hoverShadow="0 30px 60px rgba(201, 151, 58, 0.3), 0 0 40px rgba(139, 105, 20, 0.2)"
              transitionDelay={0.2}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export function ReferencesSection() {
  return (
    <section id="references" className="py-20 bg-[#F5EDD6] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-48 opacity-10">
        <img src="https://images.unsplash.com/photo-1625053376622-e462848c453f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" alt="Books and manuscripts" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
          <SectionHeader title="References" />

          <div className="bg-gradient-to-br from-white to-[#FDFBF7] p-8 rounded-2xl shadow-2xl border-2 border-[#C9973A]/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9973A] to-transparent" />
            <div className="space-y-4 text-[#3B2314] relative z-10">
              <div className="border-l-4 border-[#C9973A] pl-4 py-2 hover:bg-[#C9973A]/5 transition-colors duration-300 rounded-r">
                <p className="text-sm leading-relaxed">Ocampo, A. R. (2012). <em>Rizal Without the Overcoat</em>. Anvil Publishing, Inc.</p>
              </div>
              <div className="border-l-4 border-[#C9973A] pl-4 py-2 hover:bg-[#C9973A]/5 transition-colors duration-300 rounded-r">
                <p className="text-sm leading-relaxed">Zaide, G. F., & Zaide, S. M. (1999). <em>José Rizal: Life, Works, and Writings of a Genius, Writer, Scientist, and National Hero</em>. All-Nations Publishing Co.</p>
              </div>
              <div className="border-l-4 border-[#C9973A] pl-4 py-2 hover:bg-[#C9973A]/5 transition-colors duration-300 rounded-r">
                <p className="text-sm leading-relaxed">Coates, A. (1992). <em>Rizal: Philippine Nationalist and Martyr</em>. Oxford University Press.</p>
              </div>
              <div className="border-l-4 border-[#C9973A] pl-4 py-2 hover:bg-[#C9973A]/5 transition-colors duration-300 rounded-r">
                <p className="text-sm leading-relaxed">National Historical Commission of the Philippines. <em>The Trial of Rizal</em>. Manila: NHCP.</p>
              </div>
              <div className="border-l-4 border-[#C9973A] pl-4 py-2 hover:bg-[#C9973A]/5 transition-colors duration-300 rounded-r">
                <p className="text-sm leading-relaxed">Guerrero, L. M. (1998). <em>The First Filipino: A Biography of José Rizal</em>. National Historical Institute.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-b from-[#3B2314] to-[#2a1f14] text-[#F5EDD6] py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9973A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FCD116] to-[#C9973A] flex items-center justify-center shadow-2xl ring-4 ring-[#FCD116]/20">
            <Sun size={32} className="text-[#3B2314]" />
          </div>
        </div>
        <p className="mb-2 text-xl" style={{ fontFamily: 'var(--font-display)' }}>José Rizal: A Life Remembered</p>
        <p className="text-[#C9973A]">Created as an educational resource for Philippine history students</p>
        <div className="mt-6 pt-6 border-t border-[#C9973A]/30">
          <p className="text-sm text-[#F5EDD6]/80 italic">"The youth is the hope of our future." — José Rizal</p>
        </div>
      </div>
    </footer>
  );
}