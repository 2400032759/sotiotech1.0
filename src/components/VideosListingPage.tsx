import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Play, Filter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useMemo } from 'react';
import { Footer } from './Footer';
import { videosData } from '../data/videosData';

export function VideosListingPage({ onNavigate }: { onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });

  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const topics = ['All Topics', 'ITOM', 'ITSM', 'GRC', 'SecOps', 'ITAM', 'CSM', 'ITBM'];

  const filteredVideos = useMemo(() => {
    return videosData.filter(video => {
      return selectedTopic === 'All Topics' || video.topics.includes(selectedTopic);
    });
  }, [selectedTopic]);

  return (
    <div className="bg-white">
      <section ref={heroRef} className="relative py-32 bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C] overflow-hidden pt-40">
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Play className="w-16 h-16 text-[#2ECC71]" strokeWidth={2} />
            </div>
            <h1 className="text-white mb-8 tracking-tight" style={{ fontSize: '64px', fontWeight: 700 }}>
              Sotiotech Visuals
            </h1>
            <p className="text-white/80 text-2xl leading-relaxed max-w-[800px] mx-auto">
              Watch technical tutorials, demos, and deep-dives on ServiceNow implementation
            </p>
          </motion.div>
        </div>
      </section>

      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-sm">
        <div className="max-w-[1440px] mx-auto px-8 py-6">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-[#2ECC71]" />
            <span className="text-[#0E2A47] font-bold text-lg">Filter Videos</span>
          </div>

          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full max-w-md px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47] font-semibold bg-white"
          >
            {topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
          </select>
        </div>
      </div>

      <section ref={contentRef} className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => onNavigate?.('video', video.slug)}
                className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all cursor-pointer group overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden bg-[#0E2A47]">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-[#0E2A47] ml-1" fill="#0E2A47" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                      {video.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {video.topics.slice(0, 2).map((topic, i) => (
                      <span key={i} className="text-xs font-bold text-[#2ECC71] bg-[#2ECC71]/10 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-[#0E2A47] mb-2 line-clamp-2 group-hover:text-[#2ECC71] transition-colors">
                    {video.title}
                  </h3>

                  <p className="text-sm text-[#64748B]">{video.publishDate}</p>
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
