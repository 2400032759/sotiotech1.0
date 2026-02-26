import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, Building2, Globe2, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useMemo, useEffect } from 'react';
import { Footer } from './Footer';
import { sanity } from '../lib/sanity';

export function CaseStudiesPage({ onNavigate }: { onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });

  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedModule, setSelectedModule] = useState('All Modules');
  const [selectedTechnology, setSelectedTechnology] = useState('All Technologies');

  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCaseStudies() {
      setLoading(true);
      try {
        const query = `*[_type == "caseStudy" && defined(publishedAt)] | order(publishedAt desc) {
          _id,
          id,
          clientName,
          title,
          industry,
          tags,
          timeline,
          "slug": slug.current,
          "image": coverImage.asset->url,
          metrics,
          modulesImplemented
        }`;
        const data = await sanity.fetch(query);
        setCaseStudies(data);
      } catch (error) {
        console.error('Error fetching case studies:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchCaseStudies();
  }, []);

  // Filter case studies
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(cs => {
      const industryMatch = selectedIndustry === 'All Industries' || cs.industry === selectedIndustry;
      const moduleMatch = selectedModule === 'All Modules' || (cs.modulesImplemented && cs.modulesImplemented.includes(selectedModule)) ||
        (selectedModule === 'ITBM/SPM' && cs.modulesImplemented && cs.modulesImplemented.includes('ITBM'));
      const techMatch = selectedTechnology === 'All Technologies' || (cs.tags && cs.tags.some((t: string) => t === selectedTechnology));

      return industryMatch && moduleMatch && techMatch;
    });
  }, [caseStudies, selectedIndustry, selectedModule, selectedTechnology]);

  const handleCaseStudyClick = (slug: string) => {
    onNavigate?.('case-study', slug);
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C] pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#2ECC71]/20 to-transparent"
            style={{ clipPath: 'polygon(100% 0, 100% 100%, 30% 100%, 0 0)' }} />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10 w-full">
          <div className="max-w-[1000px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-8 tracking-tight leading-[1.1] text-4xl md:text-5xl lg:text-[72px] font-bold">
                Industry Proven Results with ServiceNow
              </h1>
              <p className="text-white/80 text-lg md:text-2xl leading-relaxed mb-12 max-w-[800px] mx-auto">
                Real-world ServiceNow transformations delivering measurable business outcomes
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate?.('book-call')}
                  className="bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
                >
                  Talk to a ServiceNow Expert
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section id="case-studies-grid" ref={contentRef} className="py-16 lg:py-32 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2ECC71]"></div>
            </div>
          ) : filteredCaseStudies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#64748B] text-xl">No case studies match your current filters.</p>
              <button
                onClick={() => {
                  setSelectedIndustry('All Industries');
                  setSelectedModule('All Modules');
                  setSelectedTechnology('All Technologies');
                }}
                className="mt-6 text-[#2ECC71] font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <p className="text-[#64748B] text-lg">
                  Showing <span className="font-bold text-[#2ECC71]">{filteredCaseStudies.length}</span> case {filteredCaseStudies.length === 1 ? 'study' : 'studies'}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.map((caseStudy, idx) => (
                  <motion.div
                    key={caseStudy._id || idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    onClick={() => handleCaseStudyClick(caseStudy.slug)}
                    className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all cursor-pointer group overflow-hidden"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={caseStudy.image}
                        alt={caseStudy.clientName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
                          <span className="text-[#0E2A47] font-bold text-xl">{caseStudy.clientName}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#0E2A47] mb-3 group-hover:text-[#2ECC71] transition-colors">
                        {caseStudy.clientName}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <Building2 className="w-4 h-4 text-[#64748B]" />
                        <span className="text-sm font-semibold text-[#64748B]">{caseStudy.industry}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseStudy.modulesImplemented?.map((module: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-bold bg-[#2ECC71]/10 text-[#2ECC71]"
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                      <p className="text-[#0E2A47] font-semibold mb-4 leading-relaxed line-clamp-2">
                        {caseStudy.metrics?.[0] ? `${caseStudy.metrics[0].value} ${caseStudy.metrics[0].label} - ${caseStudy.metrics[0].description}` : caseStudy.title}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                        <div className="flex items-center gap-2 text-sm text-[#64748B]">
                          <Clock className="w-4 h-4" />
                          <span>{caseStudy.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#64748B]">
                          <Globe2 className="w-4 h-4" />
                          <span>Global</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-[#2ECC71] font-semibold group-hover:gap-3 transition-all">
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
