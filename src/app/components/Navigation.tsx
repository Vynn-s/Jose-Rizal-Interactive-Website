import { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'influences', label: 'Influences' },
  { id: 'character', label: 'Character' },
  { id: 'works', label: 'Works' },
  { id: 'references', label: 'References' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#3B2314]/95 backdrop-blur-md shadow-2xl border-b border-[#C9973A]/30' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9973A] to-[#FCD116] flex items-center justify-center shadow-lg ring-2 ring-[#FCD116]/30">
              <span className="text-[#3B2314] font-bold" style={{ fontFamily: 'var(--font-display)' }}>JR</span>
            </div>
            <span className="text-[#F5EDD6] hidden md:block text-lg" style={{ fontFamily: 'var(--font-display)' }}>
              José Rizal
            </span>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#C9973A] to-[#FCD116] text-[#3B2314] shadow-lg scale-105'
                    : 'text-[#F5EDD6] hover:bg-[#C9973A]/20 hover:scale-105'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
