import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mic2, User, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';
import { getPodcastBySlug } from '../data/podcastsData';

export function PodcastDetailPage({ slug, onNavigate }: { slug: string; onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [guestsRef, guestsInView] = useInView({ threshold: 0.1 });
  const [pointsRef, pointsInView] = useInView({ threshold: 0.1 });

  const podcast = getPodcastBySlug(slug);

  if (!podcast) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0E2A47] mb-4">Podcast Not Found</h1>
          <button
            onClick={() => onNavigate?.('podcasts')}
            className="bg-[#2ECC71] text-[#0E2A47] px-8 py-4 rounded-xl font-semibold"
          >
            Back to Podcasts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* HERO */}
      <section ref={heroRef} className="relative py-32 bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C] overflow-hidden pt-40">
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
              <ImageWithFallback
                src={podcast.coverImage}
                alt={podcast.title}
                className="w-full aspect-square object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Mic2 className="w-6 h-6 text-[#2ECC71]" />
                <span className="text-[#2ECC71] font-bold">Episode {podcast.episodeNumber}</span>
              </div>

              <h1 className="text-white mb-6 tracking-tight leading-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
                {podcast.title}
              </h1>

              <div className="flex items-center gap-6 mb-6 text-white/80">
                <span>{podcast.duration}</span>
                <span>•</span>
                <span>{podcast.publishDate}</span>
              </div>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {podcast.description}
              </p>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center">
                  <span className="text-white/60">Spotify Player Embed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="text-[#0E2A47] mb-8 tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
            Episode Summary
          </h2>
          <p className="text-[#64748B] text-xl leading-relaxed">
            {podcast.summary}
          </p>
        </div>
      </section>

      {/* GUESTS */}
      <section ref={guestsRef} className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={guestsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center">
                <User className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
              </div>
              <h2 className="text-[#0E2A47] tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
                Guests
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {podcast.guests.map((guest, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={guestsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-[#E2E8F0]"
                >
                  <h3 className="text-2xl font-bold text-[#0E2A47] mb-2">{guest.name}</h3>
                  <p className="text-[#2ECC71] font-semibold mb-1">{guest.role}</p>
                  <p className="text-[#64748B] mb-4">{guest.company}</p>
                  <p className="text-[#64748B] leading-relaxed">{guest.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY DISCUSSION POINTS */}
      <section ref={pointsRef} className="py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pointsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0E2A47] mb-12 tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
              Key Discussion Points
            </h2>

            <div className="space-y-4">
              {podcast.keyDiscussionPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={pointsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4 bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                  <p className="text-[#0E2A47] text-lg leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
