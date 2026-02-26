import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, Calendar, Mic2, Play, Mail, Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';
import { getUpcomingEvents } from '../data/eventsData';
import { getLatestPodcasts } from '../data/podcastsData';
import { getLatestVideos } from '../data/videosData';

export function EventsAndInsightsHubPage({ onNavigate }: { onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [featuredRef, featuredInView] = useInView({ threshold: 0.1 });
  const [eventsRef, eventsInView] = useInView({ threshold: 0.1 });
  const [podcastsRef, podcastsInView] = useInView({ threshold: 0.1 });
  const [videosRef, videosInView] = useInView({ threshold: 0.1 });
  const [socialRef, socialInView] = useInView({ threshold: 0.1 });
  const [newsletterRef, newsletterInView] = useInView({ threshold: 0.1 });

  const [email, setEmail] = useState('');

  const upcomingEvents = getUpcomingEvents(3);
  const latestPodcasts = getLatestPodcasts(3);
  const latestVideos = getLatestVideos(4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C] pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#2ECC71]/20 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10 w-full">
          <div className="max-w-[1000px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-8 tracking-tight leading-[1.1] text-4xl md:text-6xl lg:text-[72px] font-bold">
                Join Our Live Events and Tune into Our Latest Podcasts
              </h1>

              <p className="text-white/80 text-lg md:text-2xl leading-relaxed mb-12 max-w-[800px]">
                Connect, learn, and stay ahead in the ServiceNow ecosystem
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate?.('events')}
                  className="bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
                >
                  Explore Events
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate?.('newsletters')}
                  className="bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all flex items-center gap-3"
                >
                  Subscribe to Newsletter
                  <Mail className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENT - SOTIOCON */}
      <section ref={featuredRef} className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            onClick={() => onNavigate?.('event', 'sotiocon-2026')}
            className="bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.15)] cursor-pointer group border-2 border-transparent hover:border-[#2ECC71] transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: Event Branding */}
              <div className="relative aspect-video lg:aspect-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBldmVudHxlbnwxfHx8fDE3Njg0ODU3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="SotioCon 2026"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A47]/50 to-transparent" />
              </div>

              {/* Right: Event Details */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-block bg-[#2ECC71] text-[#0E2A47] px-4 py-2 rounded-full text-sm font-bold mb-6 self-start">
                  FEATURED EVENT
                </div>

                <h2 className="text-white mb-6 tracking-tight text-3xl lg:text-[48px] font-bold">
                  Join Our Seasonal Event: SotioCon
                </h2>

                <p className="text-white/80 text-xl leading-relaxed mb-8">
                  The Middle East's premier ServiceNow innovation summit. Join enterprise leaders, technical experts, and the ServiceNow community for two days of keynotes, workshops, and networking at Dubai World Trade Centre.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
                    <Calendar className="w-4 h-4 text-[#2ECC71]" />
                    <span className="text-white font-semibold">March 15-16, 2026</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
                    <span className="text-white font-semibold">Dubai World Trade Centre</span>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 text-[#2ECC71] font-bold text-lg group-hover:gap-4 transition-all"
                >
                  View Event Details
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UPCOMING EVENTS SECTION */}
      <section ref={eventsRef} className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-6 tracking-tight text-3xl lg:text-[56px] font-bold">
              Upcoming Events
            </h2>
            <p className="text-[#64748B] text-xl max-w-[800px] mx-auto">
              Join our webinars, meetups, and conferences to connect with ServiceNow experts and peers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                  <h3 className="text-xl font-bold text-[#0E2A47] mb-3 line-clamp-2 group-hover:text-[#2ECC71] transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3 text-sm text-[#64748B]">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
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

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('events')}
              className="bg-[#0E2A47] text-white px-8 py-4 rounded-xl font-semibold shadow-[0_10px_30px_rgba(14,42,71,0.3)] hover:shadow-[0_15px_40px_rgba(14,42,71,0.4)] transition-all"
            >
              View All Events
            </motion.button>
          </div>
        </div>
      </section>

      {/* PODCASTS SECTION */}
      <section ref={podcastsRef} className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={podcastsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Mic2 className="w-12 h-12 text-[#2ECC71]" strokeWidth={2} />
              <h2 className="text-[#0E2A47] tracking-tight text-3xl lg:text-[56px] font-bold">
                ServiceNow Soundbytes
              </h2>
            </div>
            <p className="text-[#64748B] text-xl max-w-[800px] mx-auto">
              Listen to conversations with ServiceNow experts, enterprise leaders, and industry innovators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {latestPodcasts.map((podcast, idx) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 30 }}
                animate={podcastsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => onNavigate?.('podcast', podcast.slug)}
                className="bg-[#F8FAFC] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all cursor-pointer group overflow-hidden"
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
                    <span>{podcast.duration}</span>
                    <span>{podcast.publishDate}</span>
                  </div>

                  <div className="flex gap-2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 bg-[#2ECC71] text-[#0E2A47] px-4 py-3 rounded-lg font-semibold text-sm text-center"
                    >
                      Listen Now
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white text-[#0E2A47] px-4 py-3 rounded-lg font-semibold text-sm border-2 border-[#E2E8F0] hover:border-[#2ECC71] transition-colors"
                    >
                      View Episode
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('podcasts')}
              className="bg-[#0E2A47] text-white px-8 py-4 rounded-xl font-semibold shadow-[0_10px_30px_rgba(14,42,71,0.3)] hover:shadow-[0_15px_40px_rgba(14,42,71,0.4)] transition-all"
            >
              View All Podcasts
            </motion.button>
          </div>
        </div>
      </section>

      {/* VIDEOS SECTION */}
      <section ref={videosRef} className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Play className="w-12 h-12 text-[#2ECC71]" strokeWidth={2} />
              <h2 className="text-[#0E2A47] tracking-tight text-3xl lg:text-[56px] font-bold">
                Sotiotech Visuals
              </h2>
            </div>
            <p className="text-[#64748B] text-xl max-w-[800px] mx-auto">
              Watch technical tutorials, demos, and deep-dives on ServiceNow implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {latestVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={videosInView ? { opacity: 1, y: 0 } : {}}
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

                <div className="p-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {video.topics.slice(0, 2).map((topic, i) => (
                      <span key={i} className="text-xs font-bold text-[#2ECC71] bg-[#2ECC71]/10 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-sm font-bold text-[#0E2A47] line-clamp-2 group-hover:text-[#2ECC71] transition-colors">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('videos')}
              className="bg-[#0E2A47] text-white px-8 py-4 rounded-xl font-semibold shadow-[0_10px_30px_rgba(14,42,71,0.3)] hover:shadow-[0_15px_40px_rgba(14,42,71,0.4)] transition-all"
            >
              View All Videos
            </motion.button>
          </div>
        </div>
      </section>

      {/* SOCIAL PRESENCE STRIP */}
      <section ref={socialRef} className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={socialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-[#0E2A47] mb-4">
              Join our network and stay connected
            </h3>
            <p className="text-[#64748B] text-lg mb-8">
              Follow us on social media for daily insights, updates, and community highlights
            </p>

            <div className="flex items-center justify-center gap-6">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-full flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] transition-all group"
              >
                <Linkedin className="w-7 h-7 text-[#0077B5] group-hover:text-white transition-colors" />
              </motion.a>

              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-full flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] transition-all group"
              >
                <Youtube className="w-7 h-7 text-[#FF0000] group-hover:text-white transition-colors" />
              </motion.a>

              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#F58529] hover:to-[#C13584] hover:border-[#C13584] transition-all group"
              >
                <Instagram className="w-7 h-7 text-[#C13584] group-hover:text-white transition-colors" />
              </motion.a>

              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-full flex items-center justify-center hover:bg-[#000000] hover:border-[#000000] transition-all group"
              >
                <Twitter className="w-7 h-7 text-[#000000] group-hover:text-white transition-colors" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEWSLETTER CTA BAND */}
      <section ref={newsletterRef} className="py-20 bg-gradient-to-r from-[#2ECC71] to-[#27AE60]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={newsletterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-[#0E2A47] mb-4">
              Unlock Expert ServiceNow Insights — Join Our Newsletter!
            </h3>
            <p className="text-[#0E2A47]/80 text-xl mb-8 max-w-[700px] mx-auto">
              Get monthly platform updates, industry trends, event invitations, and exclusive content delivered to your inbox
            </p>

            <form onSubmit={handleNewsletterSubmit} className="max-w-[600px] mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                required
                className="flex-1 px-6 py-4 rounded-xl border-2 border-[#0E2A47]/20 focus:border-[#0E2A47] focus:outline-none transition-colors text-[#0E2A47] bg-white/90"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0E2A47] text-white px-8 py-4 rounded-xl font-semibold shadow-[0_10px_30px_rgba(14,42,71,0.3)] hover:shadow-[0_15px_40px_rgba(14,42,71,0.4)] transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
