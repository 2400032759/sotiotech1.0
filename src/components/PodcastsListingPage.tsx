import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, Mic2, Clock, Filter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useMemo } from 'react';
import { Footer } from './Footer';
import { podcastsData } from '../data/podcastsData';

export function PodcastsListingPage({ onNavigate }: { onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });

  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [selectedYear, setSelectedYear] = useState('All Years');

  const topics = ['All Topics', 'ITOM', 'ITSM', 'GRC', 'SecOps', 'ITAM', 'CSM'];
  const years = ['All Years', '2026', '2025'];

  const filteredPodcasts = useMemo(() => {
    return podcastsData.filter(podcast => {
      const topicMatch = selectedTopic === 'All Topics' || podcast.topics.includes(selectedTopic);
      const yearMatch = selectedYear === 'All Years' || podcast.publishDate.includes(selectedYear);
      return topicMatch && yearMatch;
    });
  }, [selectedTopic, selectedYear]);

  return (
    <div className="bg-white">
      {/* HERO */}
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
            <div className="flex items-center justify-center gap-4 mb-6">
              <Mic2 className="w-16 h-16 text-[#2ECC71]" strokeWidth={2} />
            </div>
            <h1 className="text-white mb-8 tracking-tight" style={{ fontSize: '64px', fontWeight: 700 }}>
              ServiceNow Soundbytes
            </h1>
            <p className="text-white/80 text-2xl leading-relaxed max-w-[800px] mx-auto">
              Conversations with ServiceNow experts, enterprise leaders, and industry innovators
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTERS */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-sm">
        <div className="max-w-[1440px] mx-auto px-8 py-6">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-[#2ECC71]" />
            <span className="text-[#0E2A47] font-bold text-lg">Filter Podcasts</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47] font-semibold bg-white"
            >
              {topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47] font-semibold bg-white"
            >
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* PODCASTS GRID */}
      <section ref={contentRef} className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPodcasts.map((podcast, idx) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => onNavigate?.('podcast', podcast.slug)}
                className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all cursor-pointer group overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={podcast.coverImage}
                    alt={podcast.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#2ECC71] text-[#0E2A47] px-3 py-1 rounded-full text-xs font-bold">
                      Episode {podcast.episodeNumber}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0E2A47] mb-3 line-clamp-2 group-hover:text-[#2ECC71] transition-colors">
                    {podcast.title}
                  </h3>

                  <div className="flex items-center justify-between mb-4 text-sm text-[#64748B]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{podcast.duration}</span>
                    </div>
                    <span>{podcast.publishDate}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[#2ECC71] font-semibold group-hover:gap-3 transition-all">
                    <span>Listen Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
