import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun } from 'lucide-react';
import Navigation from './components/Navigation';
import TimelineCard from './components/TimelineCard';
import RizalPortrait from './components/RizalPortrait';
import EventModal from './components/EventModal';

interface TimelineEvent {
  year: string;
  category: 'Education' | 'Travel' | 'Works' | 'Family' | 'Political';
  title: string;
  description: string;
  imageUrl?: string;
  fullDetails?: string;
  significance?: string;
  impact?: string;
}

const timelineData: TimelineEvent[] = [
  {
    year: '1861',
    category: 'Family',
    title: 'Birth in Calamba, Laguna',
    description: 'José Protasio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, Laguna, to a wealthy family of farmers. He was the seventh of eleven children.',
    fullDetails: 'José Rizal was born in a two-story house in Calamba, a town in the province of Laguna. His parents, Francisco Mercado and Teodora Alonso, were well-educated and belonged to the principalía, the Filipino elite class during Spanish colonial rule.\n\nHis family background was diverse: Chinese, Japanese, and Spanish ancestry mixed with native Tagalog blood. This multicultural heritage would later influence his worldview and writings.\n\nFrom an early age, Rizal showed exceptional intelligence. His mother, Teodora, became his first teacher, teaching him the alphabet and instilling in him a love for learning and the arts.',
    significance: 'Rizal\'s birth into a privileged family gave him access to education and opportunities unavailable to most Filipinos during Spanish colonial rule. This social position, combined with his natural gifts, set the stage for his future as a reformist and national hero.',
    impact: 'His early experiences in Calamba—witnessing both the privileges of his class and the injustices suffered by Filipino farmers—shaped his later advocacy for social reform and his critique of colonial oppression in his novels.',
  },
  {
    year: '1872',
    category: 'Education',
    title: 'Studies at Ateneo Municipal',
    description: 'Enrolled at Ateneo Municipal de Manila, where he excelled academically and won numerous literary competitions. This period shaped his intellectual foundation and love for learning.',
    imageUrl: 'https://images.unsplash.com/photo-1595123550441-d377e017de6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    fullDetails: 'At age 11, Rizal enrolled at Ateneo Municipal de Manila, a prestigious Jesuit-run school. Despite initial difficulties (he was placed in a lower class due to his small stature), he quickly distinguished himself as a brilliant student.\n\nHe consistently topped his class, earning the title "Emperor" in the school\'s merit system. He excelled in poetry, debate, and the sciences. His literary talents blossomed here—he won several poetry competitions and began to develop his voice as a writer.\n\nThe rigorous Jesuit education emphasized logic, classical studies, and moral philosophy, which deeply influenced his intellectual development and later reformist ideas.',
    significance: 'The Ateneo education instilled in Rizal a disciplined mind, a love of learning, and the confidence to compete intellectually with the Spanish elite. It was here that he first encountered discrimination, which awakened his consciousness about colonial injustice.',
    impact: 'The values and skills Rizal acquired at Ateneo—critical thinking, eloquence, and a commitment to excellence—became the foundation for his later work as a writer, reformist, and national hero.',
  },
  {
    year: '1877',
    category: 'Education',
    title: 'University of Santo Tomas',
    description: 'Began studying Philosophy and Letters, then later Medicine at the University of Santo Tomas. His education was interrupted by increasing awareness of colonial injustices.',
    imageUrl: 'https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    year: '1882',
    category: 'Travel',
    title: 'Departure for Europe',
    description: 'Left the Philippines for Spain to continue his medical studies at Universidad Central de Madrid. This marked the beginning of his life as an expatriate and reformist writer.',
  },
  {
    year: '1885',
    category: 'Education',
    title: 'Medical Degree Completed',
    description: 'Earned his degree in Medicine and later studied ophthalmology in Paris and Heidelberg, specializing in eye diseases to help his mother who was going blind.',
  },
  {
    year: '1887',
    category: 'Works',
    title: 'Publication of Noli Me Tangere',
    description: 'Published his groundbreaking novel "Noli Me Tangere" (Touch Me Not) in Berlin, exposing the abuses of Spanish colonial rule and the Catholic Church in the Philippines.',
    imageUrl: 'https://images.unsplash.com/photo-1478641300939-0ec5188d3802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    fullDetails: 'Written during his time in Europe, "Noli Me Tangere" was published in Berlin on March 21, 1887. The novel cost Rizal his entire savings to print, and he even pawned some of his belongings to complete the publication.\n\nThe title comes from Latin, meaning "Touch Me Not," taken from the Bible (John 20:17). The novel tells the story of Crisóstomo Ibarra, a young Filipino who returns from Europe to find his country suffering under corrupt Spanish friars and civil authorities.\n\nThrough vivid characters like the idealistic Ibarra, the cynical Elías, and the tragic María Clara, Rizal painted a damning portrait of colonial society—its hypocrisy, abuse, and systemic corruption.',
    significance: 'The novel became an instant sensation and was immediately banned in the Philippines by Spanish authorities who recognized its seditious nature. It awakened Filipino consciousness and became a foundational text of the Philippine independence movement.',
    impact: 'Noli Me Tangere is considered the spark that ignited the Philippine Revolution. It inspired a generation of Filipinos to question colonial rule and fight for reform and, eventually, independence. The novel remains required reading in Philippine schools today.',
  },
  {
    year: '1891',
    category: 'Works',
    title: 'El Filibusterismo Published',
    description: 'Released his second novel "El Filibusterismo" (The Reign of Greed), a darker sequel that portrayed the failures of reform and the stirrings of revolution.',
    imageUrl: 'https://images.unsplash.com/photo-1592781920723-2d37095ec0ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    fullDetails: 'Published in Ghent, Belgium in September 1891, "El Filibusterismo" was written as a sequel to "Noli Me Tangere." The title translates to "The Reign of Greed" or "Subversion."\n\nThe novel is considerably darker than its predecessor. It follows the story of Simoun, a wealthy jeweler (revealed to be Crisóstomo Ibarra from the first novel) who has abandoned peaceful reform and now plots a violent revolution against the Spanish colonial government.\n\nThrough Simoun\'s tragic arc and his ultimate disillusionment, Rizal explored themes of vengeance, the moral costs of revolution, and the corruption that makes peaceful change impossible. The ending is deliberately ambiguous and tragic.',
    significance: 'While "Noli" awakened Filipino consciousness, "El Fili" radicalized it. The novel reflected Rizal\'s growing pessimism about peaceful reform and his understanding that change might require more drastic measures, even as he personally opposed violent revolution.',
    impact: 'The novel became a rallying text for revolutionaries, though ironically Rizal himself advocated for education and peaceful reform. It strengthened the intellectual case for Philippine independence and remains a masterpiece of political fiction.',
  },
  {
    year: '1892',
    category: 'Political',
    title: 'Founded La Liga Filipina',
    description: 'Established La Liga Filipina, a civic organization aimed at uniting Filipinos and advocating for reforms. He was arrested and exiled to Dapitan shortly after.',
    fullDetails: 'On July 3, 1892, Rizal founded La Liga Filipina (The Philippine League) in Manila. The organization\'s goals were peaceful: mutual protection, defense of Filipino rights, education, agriculture, and commerce development.\n\nThe Liga was meant to be a progressive civic organization that would unite the Filipino people in advocating for reforms within the Spanish colonial system. Its motto was "Unus Instar Omnium" (One Like All).\n\nHowever, just four days after its founding—on July 7, 1892—Rizal was arrested by Spanish authorities who viewed the organization as seditious. He was immediately exiled to Dapitan in Mindanao, effectively ending La Liga\'s brief existence under his leadership.',
    significance: 'Though short-lived, La Liga Filipina represented Rizal\'s final attempt at peaceful, organized reform. Its failure convinced many Filipinos that reform was impossible under Spanish rule, leading some members to form the revolutionary Katipunan.',
    impact: 'The dissolution of La Liga and Rizal\'s exile radicalized the Filipino reform movement. Andrés Bonifacio and others who attended the Liga\'s founding meeting would go on to establish the Katipunan, the secret revolutionary society that launched the Philippine Revolution in 1896.',
  },
  {
    year: '1892-96',
    category: 'Travel',
    title: 'Exile in Dapitan',
    description: 'Spent four years in exile in Dapitan, Zamboanga del Norte, where he practiced medicine, taught students, conducted scientific research, and built community infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1660233247590-93242541a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    fullDetails: 'Exiled to Dapitan, a remote town in Mindanao, Rizal made the most of his banishment. He established a school for boys, teaching them languages, science, and practical skills. He practiced ophthalmology, treating hundreds of patients including his own mother whose eyesight he helped restore.\n\nRizal designed and helped build the town\'s water system, bringing fresh water to residents. He cultivated crops, introduced new farming methods, and even won a lottery, using his winnings to purchase land and establish a model farming community.\n\nHe continued his scientific work, collecting specimens of rare flora and fauna. He discovered several new species, including a type of beetle (Apogonia rizali) and a flying frog, both later named in his honor. He corresponded with European scientists and maintained his intellectual life despite isolation.',
    significance: 'Dapitan demonstrated that Rizal was not merely a theorist or agitator, but a practical man of action. His exile years proved that reform and progress were possible through education, science, and community development—his preferred methods over revolution.',
    impact: 'The Dapitan years cemented Rizal\'s reputation as a polymath and renaissance man. His work there—from medicine to engineering to education—showed Filipinos what they could achieve. Today, Dapitan is a pilgrimage site for Filipinos honoring his memory.',
  },
  {
    year: '1896',
    category: 'Political',
    title: 'Execution at Bagumbayan',
    description: 'Arrested upon his return voyage, falsely implicated in the Philippine Revolution. Executed by firing squad on December 30, 1896, at Bagumbayan (now Luneta Park), becoming a martyr.',
    fullDetails: 'On December 30, 1896, at 7:03 AM, José Rizal was executed by firing squad at Bagumbayan Field (now Rizal Park/Luneta). Despite his opposition to violent revolution, Spanish authorities accused him of being the intellectual leader of the Philippine Revolution that had erupted months earlier.\n\nOn the eve of his execution, Rizal wrote his final masterpiece, "Mi Último Adiós" (My Last Farewell), a poem hidden inside an alcohol cooking stove and later given to his family. In it, he bid farewell to his beloved Philippines and expressed his hope for its future freedom.\n\nHis last words were reported to be "Consummatum est" (It is finished). Before the firing squad, Rizal refused the blindfold and requested to face his executioners, but was denied. He was shot in the back as a traitor.',
    significance: 'Rizal\'s execution transformed him from a reformist writer into a martyr and the symbolic leader of Philippine nationalism. His death unified Filipinos across social classes and intensified the revolutionary fervor against Spanish rule.',
    impact: 'The execution backfired spectacularly for Spain. Rather than quelling dissent, it galvanized the revolution. Within two years, the Philippines declared independence. Rizal became the national hero—the embodiment of Filipino identity, intellect, and the peaceful pursuit of justice. December 30 is now a national holiday in the Philippines: Rizal Day.',
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Education', 'Travel', 'Works', 'Family', 'Political'];

  const filteredTimeline = selectedCategory === 'All'
    ? timelineData
    : timelineData.filter(event => event.category === selectedCategory);

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <EventModal isOpen={isModalOpen} onClose={handleCloseModal} event={selectedEvent} />

      {/* Hero Section */}
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
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <RizalPortrait />
            </motion.div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl mb-4 text-[#F5EDD6]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
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

            {/* Decorative divider */}
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

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#C9973A]/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                willChange: 'transform, opacity',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#3B2314] text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              About This Timeline
            </h2>

            <div className="relative h-1 w-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9973A] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FCD116] to-transparent blur-sm" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-[#C9973A]/30 group"
              >
                <img
                  src="https://images.unsplash.com/photo-1580127645995-d43fe9598711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                  alt="Writing and manuscripts"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ willChange: 'transform' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2314]/90 via-[#3B2314]/30 to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-[#C9973A]/30 group"
              >
                <img
                  src="https://images.unsplash.com/photo-1600181982553-ce7d36051c01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                  alt="Books and library"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ willChange: 'transform' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2314]/90 via-[#3B2314]/30 to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-[#C9973A]/30 group"
              >
                <img
                  src="https://images.unsplash.com/photo-1661200796935-e550c61d2c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                  alt="Philippine tropical flowers"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ willChange: 'transform' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2314]/90 via-[#3B2314]/30 to-transparent" />
              </motion.div>
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

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-[#F5EDD6]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#3B2314]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Life Timeline
            </h2>
            <div className="relative h-1 w-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9973A] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FCD116] to-transparent blur-sm" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
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

          {/* Timeline Spine */}
          <div className="relative">
            {/* Vertical line with glow */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
              <div className="absolute inset-0 bg-gradient-to-b from-[#C9973A] via-[#3B2314] to-[#C9973A]" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#FCD116] via-transparent to-[#FCD116] blur-sm" />
            </div>

            {/* Timeline Cards */}
            <div className="space-y-0">
              {filteredTimeline.map((event, index) => (
                <TimelineCard
                  key={`${event.year}-${event.title}`}
                  {...event}
                  index={index}
                  onClick={() => handleEventClick(event)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Influences Section */}
      <section id="influences" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#3B2314] text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Biological & Environmental Influences
            </h2>
            <div className="relative h-1 w-32 mx-auto mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9973A] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FCD116] to-transparent blur-sm" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Biological Factors */}
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
                  <img
                    src="https://images.unsplash.com/photo-1698130540990-69bae53ae99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                    alt="Biological heritage"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0038A8]/10 to-transparent rounded-full blur-3xl" />
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0038A8] to-[#002a7a] flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🧬</span>
                    </div>
                    <h3 className="text-[#3B2314] text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                      Biological Factors
                    </h3>
                  </div>
                <ul className="space-y-3 text-[#3B2314]">
                  <li className="flex gap-2">
                    <span className="text-[#C9973A]">•</span>
                    <span>Born into a wealthy, educated Chinese-Filipino mestizo family</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C9973A]">•</span>
                    <span>Exceptional intellectual gifts evident from early childhood</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C9973A]">•</span>
                    <span>Multilingual abilities (spoke 22 languages including Tagalog, Spanish, French, German)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C9973A]">•</span>
                    <span>Frail health yet remarkable mental stamina and discipline</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C9973A]">•</span>
                    <span>Inherited artistic talents from his mother Teodora Alonso</span>
                  </li>
                </ul>
                </div>
              </motion.div>

              {/* Environmental Factors */}
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
                  <img
                    src="https://images.unsplash.com/photo-1661200793999-9ac964c56de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                    alt="Environmental context"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FCD116]/10 to-transparent rounded-full blur-3xl" />
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FCD116] to-[#C9973A] flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🌏</span>
                    </div>
                    <h3 className="text-[#3B2314] text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                      Environmental Factors
                    </h3>
                  </div>
                <ul className="space-y-3 text-[#3B2314]">
                  <li className="flex gap-2">
                    <span className="text-[#C9973A]">•</span>
                    <span>Grew up under oppressive Spanish colonial rule in the Philippines</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C9973A]">•</span>
                    <span>Witnessed injustices against his family and fellow Filipinos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C9973A]">•</span>
                    <span>Exposed to Enlightenment ideals during European education</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C9973A]">•</span>
                    <span>Influenced by liberal Spanish and European intellectuals</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C9973A]">•</span>
                    <span>Political climate of rising Filipino consciousness and nationalism</span>
                  </li>
                </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Character Section */}
      <section id="character" className="py-20 bg-[#F5EDD6]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#3B2314] text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Strengths & Weaknesses
            </h2>
            <div className="relative h-1 w-32 mx-auto mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9973A] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FCD116] to-transparent blur-sm" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Strengths */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                whileHover={{ scale: 1.02, boxShadow: '0 25px 50px rgba(252, 209, 22, 0.3)' }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FCD116] via-[#C9973A] to-[#8B6914]" />
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
                  }}
                />
                <div className="relative p-8 text-[#3B2314]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#3B2314]/20 flex items-center justify-center">
                      <Sun size={28} className="text-[#3B2314]" />
                    </div>
                    <h3 className="text-2xl" style={{ fontFamily: 'var(--font-display)' }}>Strengths</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <span>✦</span>
                      <span><strong>Intellectual Brilliance:</strong> Mastery of multiple disciplines and languages</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✦</span>
                      <span><strong>Moral Courage:</strong> Unwavering commitment to truth despite personal risk</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✦</span>
                      <span><strong>Peaceful Reform:</strong> Advocated for change through education and enlightenment</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✦</span>
                      <span><strong>Versatility:</strong> Skilled as doctor, writer, artist, scientist, and educator</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✦</span>
                      <span><strong>Compassion:</strong> Deep empathy for the suffering of his people</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Weaknesses */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                whileHover={{ scale: 1.02, boxShadow: '0 25px 50px rgba(59, 35, 20, 0.4)' }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B2314] via-[#4a3520] to-[#5a4030]" />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
                  }}
                />
                <div className="relative p-8 text-[#F5EDD6]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#F5EDD6]/20 flex items-center justify-center">
                      <span className="text-[#F5EDD6] text-2xl">⚖</span>
                    </div>
                    <h3 className="text-2xl" style={{ fontFamily: 'var(--font-display)' }}>Weaknesses</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <span>✦</span>
                      <span><strong>Idealism:</strong> Perhaps too optimistic about peaceful reform in a violent system</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✦</span>
                      <span><strong>Isolation:</strong> His elite education created distance from the masses</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✦</span>
                      <span><strong>Romantic Entanglements:</strong> Multiple complex relationships caused personal turmoil</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✦</span>
                      <span><strong>Reluctance to Violence:</strong> Opposed armed revolution even when it became inevitable</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✦</span>
                      <span><strong>Trust in Reason:</strong> Underestimated the entrenched power of colonial interests</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Major Works Section */}
      <section id="works" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1613324766451-2d03b2ea8190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Books background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#3B2314]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Major Works
            </h2>
            <div className="relative h-1 w-32 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9973A] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FCD116] to-transparent blur-sm" />
            </div>
          </motion.div>

          <div className="flex overflow-x-auto gap-6 pb-8 px-4 md:justify-center">
            {/* Noli Me Tangere */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -12, boxShadow: '0 30px 60px rgba(59, 35, 20, 0.3), 0 0 40px rgba(201, 151, 58, 0.2)' }}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-[#F5EDD6] to-[#E8DCC8] rounded-2xl shadow-2xl border-2 border-[#C9973A]/40 overflow-hidden group"
            >
              <div className="h-64 bg-gradient-to-br from-[#3B2314] via-[#4a3520] to-[#5a4030] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23C9973A' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2314] via-transparent to-transparent" />
                <div className="text-center z-10 p-6 transition-transform duration-500 group-hover:scale-110">
                  <div className="text-[#FCD116] text-6xl mb-4 drop-shadow-lg" style={{ fontFamily: 'var(--font-display)' }}>
                    Noli Me
                  </div>
                  <div className="text-[#C9973A] text-4xl drop-shadow-lg" style={{ fontFamily: 'var(--font-display)' }}>
                    Tangere
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9973A] to-transparent" />
                <div className="text-[#C9973A] mb-2 font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>1887</div>
                <p className="text-[#3B2314] text-sm leading-relaxed">
                  "Touch Me Not" — A scathing social novel exposing corruption, abuse, and hypocrisy in colonial
                  Philippine society under Spanish rule and the Catholic Church.
                </p>
              </div>
            </motion.div>

            {/* El Filibusterismo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -12, boxShadow: '0 30px 60px rgba(0, 56, 168, 0.3), 0 0 40px rgba(252, 209, 22, 0.2)' }}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-[#F5EDD6] to-[#E8DCC8] rounded-2xl shadow-2xl border-2 border-[#C9973A]/40 overflow-hidden group"
            >
              <div className="h-64 bg-gradient-to-br from-[#0038A8] via-[#002a7a] to-[#001f5a] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23FCD116' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0038A8] via-transparent to-transparent" />
                <div className="text-center z-10 p-6 transition-transform duration-500 group-hover:scale-110">
                  <div className="text-[#FCD116] text-5xl mb-4 drop-shadow-lg" style={{ fontFamily: 'var(--font-display)' }}>
                    El Filibusterismo
                  </div>
                  <div className="text-[#C9973A] text-2xl drop-shadow-lg" style={{ fontFamily: 'var(--font-display)' }}>
                    The Reign of Greed
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0038A8] to-transparent" />
                <div className="text-[#C9973A] mb-2 font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>1891</div>
                <p className="text-[#3B2314] text-sm leading-relaxed">
                  A darker sequel exploring the failure of reforms and the growing revolutionary sentiment. It depicts
                  a society pushed to the brink, where only radical change seems possible.
                </p>
              </div>
            </motion.div>

            {/* Essays & Poems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -12, boxShadow: '0 30px 60px rgba(201, 151, 58, 0.3), 0 0 40px rgba(139, 105, 20, 0.2)' }}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-[#F5EDD6] to-[#E8DCC8] rounded-2xl shadow-2xl border-2 border-[#C9973A]/40 overflow-hidden group"
            >
              <div className="h-64 bg-gradient-to-br from-[#C9973A] via-[#A17D2F] to-[#8B6914] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%233B2314' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B6914] via-transparent to-transparent" />
                <div className="text-center z-10 p-6 transition-transform duration-500 group-hover:scale-110">
                  <div className="text-[#3B2314] text-5xl mb-4 drop-shadow-lg" style={{ fontFamily: 'var(--font-display)' }}>
                    Essays &
                  </div>
                  <div className="text-[#F5EDD6] text-4xl drop-shadow-lg" style={{ fontFamily: 'var(--font-display)' }}>
                    Poetry
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9973A] to-transparent" />
                <div className="text-[#C9973A] mb-2 font-semibold text-lg" style={{ fontFamily: 'var(--font-display)' }}>Various Years</div>
                <p className="text-[#3B2314] text-sm leading-relaxed">
                  Including "Mi Último Adiós" (My Last Farewell), "To the Filipino Youth," and "The Philippines A
                  Century Hence" — works that inspired national identity and hope.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="py-20 bg-[#F5EDD6] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-48 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1625053376622-e462848c453f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Books and manuscripts"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#3B2314] text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              References
            </h2>
            <div className="relative h-1 w-32 mx-auto mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9973A] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FCD116] to-transparent blur-sm" />
            </div>

            <div className="bg-gradient-to-br from-white to-[#FDFBF7] p-8 rounded-2xl shadow-2xl border-2 border-[#C9973A]/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9973A] to-transparent" />
              <div className="space-y-4 text-[#3B2314] relative z-10">
                <div className="border-l-4 border-[#C9973A] pl-4 py-2 hover:bg-[#C9973A]/5 transition-colors duration-300 rounded-r">
                  <p className="text-sm leading-relaxed">
                    Ocampo, A. R. (2012). <em>Rizal Without the Overcoat</em>. Anvil Publishing, Inc.
                  </p>
                </div>
                <div className="border-l-4 border-[#C9973A] pl-4 py-2 hover:bg-[#C9973A]/5 transition-colors duration-300 rounded-r">
                  <p className="text-sm leading-relaxed">
                    Zaide, G. F., & Zaide, S. M. (1999). <em>José Rizal: Life, Works, and Writings of a Genius,
                    Writer, Scientist, and National Hero</em>. All-Nations Publishing Co.
                  </p>
                </div>
                <div className="border-l-4 border-[#C9973A] pl-4 py-2 hover:bg-[#C9973A]/5 transition-colors duration-300 rounded-r">
                  <p className="text-sm leading-relaxed">
                    Coates, A. (1992). <em>Rizal: Philippine Nationalist and Martyr</em>. Oxford University Press.
                  </p>
                </div>
                <div className="border-l-4 border-[#C9973A] pl-4 py-2 hover:bg-[#C9973A]/5 transition-colors duration-300 rounded-r">
                  <p className="text-sm leading-relaxed">
                    National Historical Commission of the Philippines. <em>The Trial of Rizal</em>. Manila: NHCP.
                  </p>
                </div>
                <div className="border-l-4 border-[#C9973A] pl-4 py-2 hover:bg-[#C9973A]/5 transition-colors duration-300 rounded-r">
                  <p className="text-sm leading-relaxed">
                    Guerrero, L. M. (1998). <em>The First Filipino: A Biography of José Rizal</em>. National
                    Historical Institute.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-[#3B2314] to-[#2a1f14] text-[#F5EDD6] py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9973A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FCD116] to-[#C9973A] flex items-center justify-center shadow-2xl ring-4 ring-[#FCD116]/20">
              <Sun size={32} className="text-[#3B2314]" />
            </div>
          </div>
          <p className="mb-2 text-xl" style={{ fontFamily: 'var(--font-display)' }}>
            José Rizal: A Life Remembered
          </p>
          <p className="text-[#C9973A]">
            Created as an educational resource for Philippine history students
          </p>
          <div className="mt-6 pt-6 border-t border-[#C9973A]/30">
            <p className="text-sm text-[#F5EDD6]/80 italic">"The youth is the hope of our future." — José Rizal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
