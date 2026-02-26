import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, CheckCircle2, TrendingUp, Target, Lightbulb, AlertTriangle, Settings, Mail, Building2, Globe2, Clock, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { Footer } from './Footer';
import { sanity } from '../lib/sanity';

export function CaseStudyDetailPage({ slug, onNavigate }: { slug: string; onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1 });
  const [problemRef, problemInView] = useInView({ threshold: 0.1 });
  const [solutionRef, solutionInView] = useInView({ threshold: 0.1 });
  const [resultsRef, resultsInView] = useInView({ threshold: 0.1 });
  const [takeawaysRef, takeawaysInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    async function fetchCaseStudy() {
      setLoading(true);
      try {
        const query = `*[_type == "caseStudy" && slug.current == $slug][0]{
          clientName,
          title,
          subtitle,
          industry,
          tags,
          ctaText,
          "coverImage": coverImage.asset->url,
          clientBackground,
          businessContext,
          whyServiceNow,
          problems,
          modulesImplemented,
          timeline,
          teamSize,
          architecture,
          integrations,
          automationWorkflows,
          customizations,
          metrics,
          additionalImpact,
          keyTakeaways
        }`;
        const data = await sanity.fetch(query, { slug });
        setCaseStudy(data);
      } catch (error) {
        console.error('Error fetching case study:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchCaseStudy();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2ECC71]"></div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0E2A47] mb-4">Case Study Not Found</h1>
          <button
            onClick={() => onNavigate?.('case-studies')}
            className="bg-[#2ECC71] text-[#0E2A47] px-8 py-4 rounded-xl font-semibold"
          >
            Back to Case Studies
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl">
                <span className="text-white font-bold text-4xl">{caseStudy.clientName}</span>
              </div>
            </div>

            <h1 className="text-white mb-6 tracking-tight leading-[1.1]" style={{ fontSize: '56px', fontWeight: 700 }}>
              {caseStudy.title}
            </h1>

            <p className="text-white/90 text-2xl leading-relaxed mb-8 max-w-[900px]">
              {caseStudy.subtitle}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
                <Building2 className="w-4 h-4 text-[#2ECC71]" />
                <span className="text-white font-semibold">{caseStudy.industry || 'ServiceNow'}</span>
              </div>
              {caseStudy.tags?.map((tag: string, i: number) => (
                <div key={i} className="flex items-center gap-2 bg-[#2ECC71]/20 backdrop-blur-xl px-4 py-2 rounded-full border border-[#2ECC71]/30">
                  <Tag className="w-4 h-4 text-[#2ECC71]" />
                  <span className="text-white font-semibold">{tag}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
                <Globe2 className="w-4 h-4 text-[#2ECC71]" />
                <span className="text-white font-semibold">Global</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('contact')}
              className="bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
            >
              {caseStudy.ctaText || 'Contact Us'}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
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
                src={caseStudy.coverImage}
                alt={caseStudy.clientName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section ref={overviewRef} className="py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0E2A47] mb-12 tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
              Overview
            </h2>
            <div className="space-y-8">
              {caseStudy.clientBackground && (
                <div>
                  <h3 className="text-2xl font-bold text-[#0E2A47] mb-4">Client Background</h3>
                  <p className="text-[#64748B] text-lg leading-relaxed">{caseStudy.clientBackground}</p>
                </div>
              )}
              {caseStudy.businessContext && (
                <div>
                  <h3 className="text-2xl font-bold text-[#0E2A47] mb-4">Business Context</h3>
                  <p className="text-[#64748B] text-lg leading-relaxed">{caseStudy.businessContext}</p>
                </div>
              )}
              {caseStudy.whyServiceNow && (
                <div>
                  <h3 className="text-2xl font-bold text-[#0E2A47] mb-4">Why ServiceNow</h3>
                  <p className="text-[#64748B] text-lg leading-relaxed">{caseStudy.whyServiceNow}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      {caseStudy.problems && caseStudy.problems.length > 0 && (
        <section ref={problemRef} className="py-32 bg-[#F8FAFC]">
          <div className="max-w-[1000px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                </div>
                <h2 className="text-[#0E2A47] tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
                  Problem Statement
                </h2>
              </div>
              <div className="space-y-4">
                {caseStudy.problems.map((problem: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-[#E2E8F0]">
                    <div className="w-2 h-2 bg-[#2ECC71] rounded-full flex-shrink-0 mt-3" />
                    <p className="text-[#0E2A47] text-lg leading-relaxed font-medium">{problem}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* SCOPE & DURATION */}
      <section className="py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center">
              <Target className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
            </div>
            <h2 className="text-[#0E2A47] tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
              Scope & Duration
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0E2A47] mb-6">Modules Implemented</h3>
              <ul className="space-y-3">
                {caseStudy.modulesImplemented?.map((module: string, i: number) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0" />
                    <span className="text-[#64748B] font-medium">{module}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-[#2ECC71]" />
                  <h3 className="text-xl font-bold text-[#0E2A47]">Timeline</h3>
                </div>
                <p className="text-[#64748B] text-lg">{caseStudy.timeline}</p>
              </div>
              {caseStudy.teamSize && (
                <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-[#2ECC71]" />
                    <h3 className="text-xl font-bold text-[#0E2A47]">Team Size</h3>
                  </div>
                  <p className="text-[#64748B] text-lg">{caseStudy.teamSize}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION DELIVERED */}
      <section ref={solutionRef} className="py-32 bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C]">
        <div className="max-w-[1000px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-[#2ECC71] rounded-xl flex items-center justify-center">
                <Settings className="w-8 h-8 text-[#0E2A47]" strokeWidth={2} />
              </div>
              <h2 className="text-white tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
                Solution Delivered
              </h2>
            </div>
            {caseStudy.architecture && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">Architecture</h3>
                <p className="text-white/80 text-lg leading-relaxed">{caseStudy.architecture}</p>
              </div>
            )}
            {caseStudy.integrations && caseStudy.integrations.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Integrations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.integrations.map((integration: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{integration}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {caseStudy.automationWorkflows && caseStudy.automationWorkflows.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Automation Workflows</h3>
                <div className="space-y-3">
                  {caseStudy.automationWorkflows.map((workflow: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                      <div className="w-2 h-2 bg-[#2ECC71] rounded-full flex-shrink-0 mt-2" />
                      <span className="text-white/90">{workflow}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {caseStudy.customizations && caseStudy.customizations.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Customizations</h3>
                <div className="grid grid-cols-1 gap-3">
                  {caseStudy.customizations.map((customization: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{customization}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* RESULTS & BUSINESS IMPACT */}
      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <section ref={resultsRef} className="py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-16 justify-center">
                <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                </div>
                <h2 className="text-[#0E2A47] tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
                  Results & Business Impact
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {caseStudy.metrics.map((metric: any, idx: number) => (
                  <div key={idx} className="bg-gradient-to-br from-[#2ECC71]/10 to-[#2ECC71]/5 rounded-2xl p-8 border-2 border-[#2ECC71]/20 hover:border-[#2ECC71] transition-all">
                    <div className="text-6xl font-bold text-[#2ECC71] mb-4">{metric.value}</div>
                    <h3 className="text-xl font-bold text-[#0E2A47] mb-3">{metric.label}</h3>
                    <p className="text-[#64748B] leading-relaxed">{metric.description}</p>
                  </div>
                ))}
              </div>
              {caseStudy.additionalImpact && caseStudy.additionalImpact.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-[#0E2A47] mb-8">Additional Impact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {caseStudy.additionalImpact.map((impact: string, i: number) => (
                      <div key={i} className="flex items-start gap-4 bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                        <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                        <p className="text-[#0E2A47] text-lg leading-relaxed">{impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* KEY TAKEAWAYS */}
      {caseStudy.keyTakeaways && caseStudy.keyTakeaways.length > 0 && (
        <section ref={takeawaysRef} className="py-32 bg-[#F8FAFC]">
          <div className="max-w-[1000px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
              <div className="space-y-6">
                {caseStudy.keyTakeaways.map((takeaway: string, idx: number) => (
                  <div key={idx} className="relative">
                    <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border-l-4 border-[#2ECC71]">
                      <div className="w-8 h-8 bg-[#2ECC71] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-[#0E2A47] text-lg leading-relaxed">{takeaway}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <section ref={ctaRef} className="py-32 bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(90deg, #2ECC71 1px, transparent 1px), linear-gradient(#2ECC71 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-bold text-white mb-6">Ready to achieve similar results?</h3>
              <p className="text-white/80 text-xl leading-relaxed mb-8">
                Let's discuss how ServiceNow can transform your operations and deliver measurable business outcomes.
              </p>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#2ECC71] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <a href="mailto:connect@sotiotech.com" className="text-white/80 hover:text-[#2ECC71] transition-colors text-lg">
                  connect@sotiotech.com
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6">What happens next?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Discovery session to understand your requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Customized solution proposal and roadmap</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.3)] p-10">
                <h3 className="text-2xl font-bold text-[#0E2A47] mb-8">Get Started Today</h3>
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-5 py-4 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    className="w-full px-5 py-4 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47]"
                    required
                  />
                  <textarea
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47] resize-none"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#2ECC71] text-[#0E2A47] px-8 py-5 rounded-xl font-semibold text-lg shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
