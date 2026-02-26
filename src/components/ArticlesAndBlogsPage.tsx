import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Search, ArrowRight, Clock, User, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useMemo, useEffect } from 'react';
import { Footer } from './Footer';
import { sanity } from '../lib/sanity';

export function ArticlesAndBlogsPage({ onNavigate }: { onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const itemsPerPage = 9;

  const filters = ['All', 'Articles', 'Blogs', 'ITSM', 'ITOM', 'SecOps', 'GRC', 'HRSD', 'CSM'];

  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      try {
        const query = `*[_type == "article"] | order(publishedAt desc) {
          _id,
          _type,
          title,
          category,
          excerpt,
          readTime,
          publishedAt,
          "slug": slug.current,
          "featuredImage": coverImage.asset->url,
          author->{
            name
          }
        }`;
        const data = await sanity.fetch(query);
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  // Filter and search logic
  const filteredArticles = useMemo(() => {
    let filtered = articles;

    // Apply category filter
    if (selectedFilter !== 'All') {
      filtered = filtered.filter(article => {
        if (selectedFilter === 'Articles') return article._type === 'article';
        if (selectedFilter === 'Blogs') return article.category === 'Blog';
        return article.category === selectedFilter;
      });
    }

    // Apply search
    if (searchQuery.trim()) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [articles, searchQuery, selectedFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleArticleClick = (article: any) => {
    onNavigate?.('article', article.slug);
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C] pt-32 pb-20">
        {/* Diagonal overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#2ECC71]/20 to-transparent"
            style={{ clipPath: 'polygon(100% 0, 100% 100%, 30% 100%, 0 0)' }} />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[1000px] mx-auto"
          >
            <h1 className="text-white mb-8 tracking-tight leading-[1.1]" style={{ fontSize: '72px', fontWeight: 700 }}>
              Articles & Blogs
            </h1>
            <p className="text-white/80 text-2xl leading-relaxed mb-12 max-w-[800px] mx-auto">
              Insights, updates, and expert perspectives on ServiceNow, IT transformation, and digital operations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all mx-auto"
            >
              Subscribe for Updates
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section ref={contentRef} className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2ECC71]"></div>
            </div>
          ) : paginatedArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#64748B] text-xl">No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {paginatedArticles.map((article, idx) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    onClick={() => handleArticleClick(article)}
                    className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all cursor-pointer group overflow-hidden"
                  >
                    {/* Featured Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={article.featuredImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Badges */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#2ECC71]/10 text-[#2ECC71]">
                          Article
                        </span>
                        {article.category && article.category !== 'Article' && (
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F8FAFC] text-[#64748B]">
                            {article.category}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#0E2A47] mb-3 line-clamp-2 group-hover:text-[#2ECC71] transition-colors">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-[#64748B] leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                        <div className="flex items-center gap-2 text-sm text-[#64748B]">
                          <User className="w-4 h-4" />
                          <span>{article.author.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#64748B]">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="mt-3 text-sm text-[#64748B]">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-5 py-3 rounded-xl bg-white border border-[#E2E8F0] text-[#0E2A47] font-semibold hover:bg-[#F8FAFC] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-12 h-12 rounded-xl font-semibold transition-all ${currentPage === page
                        ? 'bg-[#2ECC71] text-white shadow-[0_4px_12px_rgba(46,204,113,0.3)]'
                        : 'bg-white border border-[#E2E8F0] text-[#0E2A47] hover:bg-[#F8FAFC]'
                        }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-5 py-3 rounded-xl bg-white border border-[#E2E8F0] text-[#0E2A47] font-semibold hover:bg-[#F8FAFC] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
