import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, Clock, User, Share2, Linkedin, Twitter, Link as LinkIcon, Mail, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { Footer } from './Footer';
import { sanity } from '../lib/sanity';
import { PortableText } from '@portabletext/react';

export function ArticlePage({ slug, onNavigate }: { slug: string; onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });
  const [authorRef, authorInView] = useInView({ threshold: 0.1 });
  const [relatedRef, relatedInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  useEffect(() => {
    async function fetchArticleData() {
      setLoading(true);
      try {
        const articleQuery = `*[_type == "article" && slug.current == $slug][0]{
          title,
          category,
          excerpt,
          readTime,
          publishedAt,
          content,
          "coverImage": coverImage.asset->url,
          author->{
            name,
            role,
            bio,
            linkedin,
            "photo": photo.asset->url
          }
        }`;
        const data = await sanity.fetch(articleQuery, { slug });
        setArticle(data);

        if (data) {
          const relatedQuery = `*[_type == "article" && category == $category && slug.current != $slug][0...3]{
            title,
            category,
            readTime,
            "slug": slug.current,
            "coverImage": coverImage.asset->url
          }`;
          const related = await sanity.fetch(relatedQuery, { category: data.category, slug });
          setRelatedArticles(related);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchArticleData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2ECC71]"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0E2A47] mb-4">Article Not Found</h1>
          <button
            onClick={() => onNavigate?.('articles')}
            className="bg-[#2ECC71] text-[#0E2A47] px-8 py-4 rounded-xl font-semibold"
          >
            Back to Articles
          </button>
        </div>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };

  const handleShare = (platform: 'linkedin' | 'twitter') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);

    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    } else {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    }
  };

  return (
    <div className="bg-white">
      {/* ARTICLE HERO */}
      <section ref={heroRef} className="relative py-32 bg-white overflow-hidden pt-40">
        <div className="max-w-[900px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-full text-sm font-bold bg-[#2ECC71]/10 text-[#2ECC71]">
                Article
              </span>
              {article.category && article.category !== 'Article' && (
                <span className="px-4 py-2 rounded-full text-sm font-bold bg-[#F8FAFC] text-[#64748B]">
                  {article.category}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-[#0E2A47] mb-6 tracking-tight leading-[1.1]" style={{ fontSize: '56px', fontWeight: 700 }}>
              {article.title}
            </h1>

            {/* Summary */}
            <p className="text-[#64748B] text-xl leading-relaxed mb-8">
              {article.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-[#64748B]" />
                <span className="text-[#0E2A47] font-semibold">{article.author.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#64748B]" />
                <span className="text-[#64748B]">{article.readTime}</span>
              </div>
              <div className="text-[#64748B]">{new Date(article.publishedAt).toLocaleDateString()}</div>
            </div>

            {/* Share Icons */}
            <div className="flex items-center gap-4">
              <span className="text-[#64748B] font-semibold">Share:</span>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-10 h-10 rounded-full bg-[#F8FAFC] hover:bg-[#2ECC71]/10 flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-[#64748B] group-hover:text-[#2ECC71]" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="w-10 h-10 rounded-full bg-[#F8FAFC] hover:bg-[#2ECC71]/10 flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-5 h-5 text-[#64748B] group-hover:text-[#2ECC71]" />
              </button>
              <button
                onClick={handleCopyLink}
                className="relative w-10 h-10 rounded-full bg-[#F8FAFC] hover:bg-[#2ECC71]/10 flex items-center justify-center transition-colors group"
              >
                <LinkIcon className="w-5 h-5 text-[#64748B] group-hover:text-[#2ECC71]" />
                {showCopyNotification && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#0E2A47] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap"
                  >
                    Link copied!
                  </motion.div>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]"
          >
            <div className="aspect-video">
              <ImageWithFallback
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section ref={contentRef} className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-[#0E2A47] leading-relaxed space-y-6">
              <PortableText
                value={article.content}
                components={{
                  block: {
                    h2: ({ children }: any) => <h2 className="text-4xl font-bold text-[#0E2A47] mt-12 mb-6">{children}</h2>,
                    h3: ({ children }: any) => <h3 className="text-3xl font-bold text-[#0E2A47] mt-10 mb-4">{children}</h3>,
                    h4: ({ children }: any) => <h4 className="text-2xl font-bold text-[#0E2A47] mt-8 mb-3">{children}</h4>,
                    normal: ({ children }: any) => <p className="text-[#64748B] text-lg leading-relaxed">{children}</p>,
                  },
                  list: {
                    bullet: ({ children }: any) => <ul className="space-y-3 my-6">{children}</ul>,
                  },
                  listItem: {
                    bullet: ({ children }: any) => (
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                        <span className="text-[#64748B] text-lg">{children}</span>
                      </li>
                    ),
                  },
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* INLINE CTA */}
      <section ref={ctaRef} className="py-12 bg-white">
        <div className="max-w-[800px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8FAFC] border-l-4 border-[#2ECC71] rounded-2xl p-10 text-center"
          >
            <h3 className="text-2xl font-bold text-[#0E2A47] mb-4">
              Want expert help implementing ServiceNow?
            </h3>
            <p className="text-[#64748B] text-lg mb-6">
              Our certified consultants can help you design, implement, and optimize your ServiceNow platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('contact')}
              className="bg-[#2ECC71] text-[#0E2A47] px-10 py-4 rounded-xl font-semibold text-lg shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all inline-flex items-center gap-3"
            >
              Talk to a ServiceNow Expert
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section ref={authorRef} className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[800px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-10 shadow-[0_10px_24px_rgba(0,0,0,0.06)] border border-[#E2E8F0]"
          >
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-[#F8FAFC]">
                <ImageWithFallback
                  src={article.author.photo}
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#0E2A47] mb-2">
                  {article.author.name}
                </h3>
                <p className="text-[#2ECC71] font-semibold mb-3">
                  {article.author.role}
                </p>
                <p className="text-[#64748B] leading-relaxed mb-4">
                  {article.author.bio}
                </p>
                <a
                  href={article.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2ECC71] hover:text-[#0E2A47] font-semibold transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section ref={relatedRef} className="py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-[#0E2A47] mb-4 tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
                Related Articles
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, idx) => (
                <motion.div
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => onNavigate?.(relatedArticle.type, relatedArticle.slug)}
                  className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all cursor-pointer group overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={relatedArticle.coverImage}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F8FAFC] text-[#64748B]">
                      {relatedArticle.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#0E2A47] mt-4 mb-3 line-clamp-2 group-hover:text-[#2ECC71] transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-[#64748B] text-sm">{relatedArticle.readTime}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
