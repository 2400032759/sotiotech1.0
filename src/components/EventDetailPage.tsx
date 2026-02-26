import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, Calendar, MapPin, Clock, User, CheckCircle2, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';
import { getEventBySlug } from '../data/eventsData';

export function EventDetailPage({ slug, onNavigate }: { slug: string; onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [speakersRef, speakersInView] = useInView({ threshold: 0.1 });
  const [agendaRef, agendaInView] = useInView({ threshold: 0.1 });
  const [takeawaysRef, takeawaysInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  const event = getEventBySlug(slug);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0E2A47] mb-4">Event Not Found</h1>
          <button
            onClick={() => onNavigate?.('events')}
            className="bg-[#2ECC71] text-[#0E2A47] px-8 py-4 rounded-xl font-semibold"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

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
          >
            <div className="mb-6">
              <span className="bg-[#2ECC71] text-[#0E2A47] px-4 py-2 rounded-full text-sm font-bold">
                {event.type}
              </span>
            </div>

            <h1 className="text-white mb-8 tracking-tight leading-[1.1]" style={{ fontSize: '56px', fontWeight: 700 }}>
              {event.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl px-4 py-3 rounded-xl border border-white/20">
                <Calendar className="w-5 h-5 text-[#2ECC71]" />
                <div>
                  <div className="text-white/60 text-xs">Date</div>
                  <div className="text-white font-semibold">{event.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl px-4 py-3 rounded-xl border border-white/20">
                <Clock className="w-5 h-5 text-[#2ECC71]" />
                <div>
                  <div className="text-white/60 text-xs">Time</div>
                  <div className="text-white font-semibold">{event.time}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl px-4 py-3 rounded-xl border border-white/20">
                <MapPin className="w-5 h-5 text-[#2ECC71]" />
                <div>
                  <div className="text-white/60 text-xs">Location</div>
                  <div className="text-white font-semibold">{event.location}</div>
                </div>
              </div>
            </div>

            {event.status === 'upcoming' ? (
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all flex items-center gap-3"
              >
                Watch Recording
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="relative -mt-20 z-10">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.2)]"
          >
            <div className="aspect-video relative">
              <ImageWithFallback
                src={event.bannerImage}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* EVENT DESCRIPTION */}
      <section className="py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-8">
          <p className="text-[#64748B] text-xl leading-relaxed mb-6">
            {event.fullDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {event.topics.map((topic, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-[#2ECC71]/10 text-[#2ECC71] font-semibold">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS SECTION */}
      <section ref={speakersRef} className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={speakersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center">
                <User className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
              </div>
              <h2 className="text-[#0E2A47] tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
                Speakers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {event.speakers.map((speaker, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={speakersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-[#E2E8F0]"
                >
                  <div className="w-20 h-20 rounded-full bg-[#F8FAFC] mb-4 overflow-hidden">
                    <ImageWithFallback
                      src={speaker.avatar}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#0E2A47] mb-1">{speaker.name}</h3>
                  <p className="text-sm text-[#2ECC71] font-semibold mb-1">{speaker.role}</p>
                  <p className="text-sm text-[#64748B]">{speaker.company}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AGENDA TIMELINE */}
      <section ref={agendaRef} className="py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={agendaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0E2A47] mb-12 tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
              Event Agenda
            </h2>

            <div className="space-y-6">
              {event.agenda.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={agendaInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-0 w-8 h-8 bg-[#2ECC71] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>
                  
                  {idx < event.agenda.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-full bg-[#E2E8F0]" />
                  )}

                  <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-[#2ECC71]" />
                      <span className="text-[#2ECC71] font-semibold">{item.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0E2A47] mb-2">{item.title}</h3>
                    <p className="text-[#64748B] leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      <section ref={takeawaysRef} className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1000px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={takeawaysInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
              </div>
              <h2 className="text-[#0E2A47] tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
                Key Takeaways
              </h2>
            </div>

            <div className="space-y-4">
              {event.keyTakeaways.map((takeaway, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={takeawaysInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-[#E2E8F0]"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                  <p className="text-[#0E2A47] text-lg leading-relaxed">
                    {takeaway}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section ref={ctaRef} className="py-32 bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C]">
        <div className="max-w-[900px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">
              {event.status === 'upcoming' ? 'Ready to Join Us?' : 'Interested in Future Events?'}
            </h3>
            <p className="text-white/80 text-xl mb-8">
              {event.status === 'upcoming' 
                ? 'Register now to secure your spot and receive event updates'
                : 'Stay connected with our upcoming events and exclusive content'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {event.status === 'upcoming' ? (
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all flex items-center gap-3"
                >
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all flex items-center gap-3"
                >
                  Watch Recording
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate?.('contact')}
                className="bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
