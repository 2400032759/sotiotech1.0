import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Play, CheckCircle2, Link as LinkIcon } from 'lucide-react';
import { Footer } from './Footer';
import { getVideoBySlug } from '../data/videosData';

export function VideoDetailPage({ slug, onNavigate }: { slug: string; onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [topicsRef, topicsInView] = useInView({ threshold: 0.1 });

  const video = getVideoBySlug(slug);

  if (!video) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0E2A47] mb-4">Video Not Found</h1>
          <button
            onClick={() => onNavigate?.('videos')}
            className="bg-[#2ECC71] text-[#0E2A47] px-8 py-4 rounded-xl font-semibold"
          >
            Back to Videos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section ref={heroRef} className="relative py-32 bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C] overflow-hidden pt-40">
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Play className="w-6 h-6 text-[#2ECC71]" />
              <div className="flex flex-wrap gap-2">
                {video.topics.map((topic, i) => (
                  <span key={i} className="text-[#2ECC71] font-bold">{topic}</span>
                ))}
              </div>
            </div>

            <h1 className="text-white mb-6 tracking-tight leading-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
              {video.title}
            </h1>

            <div className="flex items-center gap-6 mb-8 text-white/80">
              <span>{video.duration}</span>
              <span>•</span>
              <span>{video.publishDate}</span>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center">
                <span className="text-white/60 text-lg">YouTube Video Player</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="text-[#0E2A47] mb-8 tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
            About This Video
          </h2>
          <p className="text-[#64748B] text-xl leading-relaxed">
            {video.description}
          </p>
        </div>
      </section>

      <section ref={topicsRef} className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1000px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={topicsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0E2A47] mb-12 tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
              Topics Covered
            </h2>

            <div className="space-y-4">
              {video.topicsCovered.map((topic, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={topicsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-[#E2E8F0]"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                  <p className="text-[#0E2A47] text-lg leading-relaxed">{topic}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {video.relatedResources && (
        <section className="py-32 bg-white">
          <div className="max-w-[1000px] mx-auto px-8">
            <h2 className="text-[#0E2A47] mb-8 tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
              Related Resources
            </h2>

            <div className="space-y-4">
              {video.relatedResources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.url}
                  className="flex items-center justify-between p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] hover:border-[#2ECC71] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkIcon className="w-5 h-5 text-[#2ECC71]" />
                    <span className="text-[#0E2A47] font-semibold group-hover:text-[#2ECC71] transition-colors">
                      {resource.title}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
