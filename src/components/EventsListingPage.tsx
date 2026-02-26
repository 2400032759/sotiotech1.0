import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, Calendar, MapPin, Clock, Filter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useMemo } from 'react';
import { Footer } from './Footer';
import { eventsData, EventData } from '../data/eventsData';

export function EventsListingPage({ onNavigate }: { onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });

  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [showUpcoming, setShowUpcoming] = useState(true);

  const types = ['All Types', 'Webinar', 'Meetup', 'Conference'];
  const years = ['All Years', '2026', '2025'];
  const locations = ['All Locations', 'Dubai', 'Riyadh', 'Mumbai', 'Virtual'];
  const topics = ['All Topics', 'ITOM', 'ITSM', 'GRC', 'SecOps', 'ITAM', 'CSM'];

  const filteredEvents = useMemo(() => {
    return eventsData.filter(event => {
      const typeMatch = selectedType === 'All Types' || event.type === selectedType;
      const yearMatch = selectedYear === 'All Years' || event.date.includes(selectedYear);
      const locationMatch = selectedLocation === 'All Locations' || event.location.includes(selectedLocation);
      const topicMatch = selectedTopic === 'All Topics' || event.topics.includes(selectedTopic);
      const statusMatch = showUpcoming ? event.status === 'upcoming' : event.status === 'past';
      
      return typeMatch && yearMatch && locationMatch && topicMatch && statusMatch;
    });
  }, [selectedType, selectedYear, selectedLocation, selectedTopic, showUpcoming]);

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative py-32 bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C] overflow-hidden pt-40">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#2ECC71]/20 to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-white mb-8 tracking-tight" style={{ fontSize: '64px', fontWeight: 700 }}>
              ServiceNow Events
            </h1>
            <p className="text-white/80 text-2xl leading-relaxed max-w-[800px] mx-auto">
              Join webinars, meetups, and conferences to connect with ServiceNow experts and grow your expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTERS */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-sm">
        <div className="max-w-[1440px] mx-auto px-8 py-6">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-[#2ECC71]" />
            <span className="text-[#0E2A47] font-bold text-lg">Filter Events</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47] font-semibold bg-white"
              >
                {types.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>

            <div>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47] font-semibold bg-white"
              >
                {years.map(year => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>

            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47] font-semibold bg-white"
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>

            <div>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47] font-semibold bg-white"
              >
                {topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
              </select>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowUpcoming(true)}
                className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all ${
                  showUpcoming
                    ? 'bg-[#2ECC71] text-[#0E2A47] shadow-[0_4px_12px_rgba(46,204,113,0.3)]'
                    : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0]'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setShowUpcoming(false)}
                className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all ${
                  !showUpcoming
                    ? 'bg-[#2ECC71] text-[#0E2A47] shadow-[0_4px_12px_rgba(46,204,113,0.3)]'
                    : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0]'
                }`}
              >
                Past
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* EVENTS GRID */}
      <section ref={contentRef} className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#64748B] text-xl">No events match your current filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={() => onNavigate?.('event', event.slug)}
                  className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all cursor-pointer group overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={event.bannerImage}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#2ECC71] text-[#0E2A47] px-3 py-1 rounded-full text-xs font-bold">
                        {event.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0E2A47] mb-4 line-clamp-2 group-hover:text-[#2ECC71] transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-[#64748B]">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#64748B]">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#64748B]">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-[#64748B] leading-relaxed mb-4 line-clamp-2">
                      {event.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 text-[#2ECC71] font-semibold group-hover:gap-3 transition-all">
                      <span>View Event</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
