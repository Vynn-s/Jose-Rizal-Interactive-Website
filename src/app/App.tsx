import { useState } from 'react';
import Navigation from './components/Navigation';
import EventModal from './components/EventModal';
import {
  AboutSection,
  CharacterSection,
  FooterSection,
  HeroSection,
  InfluencesSection,
  ReferencesSection,
  TimelineSection,
  WorksSection,
} from './components/PageSections';
import { timelineData, type TimelineEvent } from './data/timelineData';

const categories = ['All', 'Education', 'Travel', 'Works', 'Family', 'Political'] as const;

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>('All');
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <HeroSection />
      <AboutSection />
      <TimelineSection
        categories={categories}
        selectedCategory={selectedCategory}
        filteredTimeline={filteredTimeline}
        onCategoryChange={(c: string) => setSelectedCategory(c as (typeof categories)[number])}
        onEventClick={handleEventClick}
      />
      <InfluencesSection />
      <CharacterSection />
      <WorksSection />
      <ReferencesSection />
      <FooterSection />
    </div>
  );
}

