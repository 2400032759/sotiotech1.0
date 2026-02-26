import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, ArrowRight, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Footer } from './Footer';
import { newslettersData } from '../data/newslettersData';

export function NewslettersPage({ onNavigate }: { onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section ref={heroRef} className="relative py-32 bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C] overflow-hidden pt-40">
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Mail className="w-16 h-16 text-[#2ECC71]" strokeWidth={2} />
            </div>
            <h1 className="text-white mb-8 tracking-tight" style={{ fontSize: '64px', fontWeight: 700 }}>
              Newsletter Archive
            </h1>
            <p className="text-white/80 text-2xl leading-relaxed max-w-[800px] mx-auto mb-12">
              Explore past newsletters featuring platform updates, industry insights, and exclusive content
            </p>

            <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                required
                className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 focus:border-[#2ECC71] focus:outline-none transition-colors text-white bg-white/10 backdrop-blur-xl placeholder-white/60"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2ECC71] text-[#0E2A47] px-8 py-4 rounded-xl font-semibold shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* NEWSLETTERS GRID */}
      <section ref={contentRef} className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="space-y-8">
            {newslettersData.map((newsletter, idx) => (
              <motion.div
                key={newsletter.id}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all overflow-hidden"
              >
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-[#2ECC71]" />
                    <span className="text-[#64748B] font-semibold">{newsletter.publishDate}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-[#0E2A47] mb-4">
                    {newsletter.title}
                  </h2>

                  <p className="text-[#64748B] text-lg leading-relaxed mb-6">
                    {newsletter.preview}
                  </p>

                  {newsletter.featured.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-[#0E2A47] mb-4 uppercase">Featured In This Issue</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {newsletter.featured.map((item, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              const parts = item.link.split('/');
                              if (parts.length > 2) {
                                onNavigate?.(parts[1], parts[2]);
                              }
                            }}
                            className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E2E8F0] hover:border-[#2ECC71] transition-all cursor-pointer group"
                          >
                            <h4 className="text-sm font-bold text-[#0E2A47] mb-2 group-hover:text-[#2ECC71] transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#64748B]">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {newsletter.topics.map((topic, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-[#2ECC71]/10 text-[#2ECC71] text-sm font-semibold">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#F8FAFC] px-10 py-6 border-t border-[#E2E8F0]">
                  <button className="flex items-center gap-2 text-[#2ECC71] font-semibold hover:gap-3 transition-all">
                    <span>Read Full Newsletter</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-[#2ECC71] to-[#27AE60]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-[#0E2A47] mb-4">
              Never Miss an Update
            </h3>
            <p className="text-[#0E2A47]/80 text-xl mb-8 max-w-[700px] mx-auto">
              Get monthly ServiceNow insights, event invitations, and exclusive content delivered to your inbox
            </p>

            <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto flex flex-col sm:flex-row gap-4">
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
