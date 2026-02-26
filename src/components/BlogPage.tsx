import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, Clock, User, Share2, Linkedin, Twitter, Link as LinkIcon, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';
import { getArticleBySlug, getRelatedArticles, ArticleData } from '../data/articlesData';

export function BlogPage({ slug, onNavigate }: { slug: string; onNavigate?: (page: string, slug?: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });
  const [relatedRef, relatedInView] = useInView({ threshold: 0.1 });

  const blog = getArticleBySlug(slug);
  const relatedBlogs = blog ? getRelatedArticles(slug, blog.category) : [];

  const [showCopyNotification, setShowCopyNotification] = useState(false);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0E2A47] mb-4">Blog Not Found</h1>
          <button
            onClick={() => onNavigate?.('articles')}
            className="bg-[#2ECC71] text-[#0E2A47] px-8 py-4 rounded-xl font-semibold"
          >
            Back to Blogs
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
    const text = encodeURIComponent(blog.title);
    
    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    } else {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    }
  };

  return (
    <div className="bg-white">
      {/* BLOG HERO - Dark Navy Background */}
      <section ref={heroRef} className="relative py-32 bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C] overflow-hidden pt-40">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#2ECC71]/20 to-transparent" />
        </div>

        <div className="max-w-[1000px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-bold bg-[#2ECC71] text-[#0E2A47]">
                Blog
              </span>
              <span className="ml-3 px-4 py-2 rounded-full text-sm font-bold bg-white/10 text-white">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6 tracking-tight leading-[1.1]" style={{ fontSize: '56px', fontWeight: 700 }}>
              {blog.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-2xl leading-relaxed mb-8">
              {blog.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-white/60" />
                <span className="text-white font-semibold">{blog.author.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white/60" />
                <span className="text-white/80">{blog.readTime}</span>
              </div>
              <div className="text-white/80">{blog.publishedDate}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED IMAGE with Gradient Overlay */}
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
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOG CONTENT - More Conversational */}
      <section ref={contentRef} className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-[#0E2A47] leading-relaxed space-y-6">
              {blog.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h2 key={idx} className="text-4xl font-bold text-[#0E2A47] mt-12 mb-6">
                      {paragraph.replace('# ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('## ')) {
                  return (
                    <div key={idx} className="relative my-10">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2ECC71] rounded-full" />
                      <h3 className="text-3xl font-bold text-[#0E2A47] pl-6">
                        {paragraph.replace('## ', '')}
                      </h3>
                    </div>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h4 key={idx} className="text-2xl font-bold text-[#0E2A47] mt-8 mb-3">
                      {paragraph.replace('### ', '')}
                    </h4>
                  );
                } else if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                  return (
                    <ul key={idx} className="space-y-2 my-6 list-disc list-inside">
                      {items.map((item, i) => (
                        <li key={i} className="text-[#64748B] text-lg">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  );
                } else {
                  return (
                    <p key={idx} className="text-[#64748B] text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
          </motion.div>

          {/* QUOTE / INSIGHT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="my-12 bg-gradient-to-br from-[#2ECC71]/10 to-[#2ECC71]/5 border-l-4 border-[#2ECC71] rounded-2xl p-8"
          >
            <p className="text-2xl font-semibold text-[#0E2A47] italic leading-relaxed">
              "The future of {blog.category} isn't just about technology—it's about people, process, and platform working together."
            </p>
            <p className="text-[#64748B] mt-4 font-semibold">
              — {blog.author.name}
            </p>
          </motion.div>
        </div>
      </section>

      {/* END-OF-BLOG CTA - Dark Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#0A3D5C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(90deg, #2ECC71 1px, transparent 1px), linear-gradient(#2ECC71 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="max-w-[900px] mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">
              Need help applying these insights to your ServiceNow platform?
            </h3>
            <p className="text-white/80 text-xl mb-8 max-w-[700px] mx-auto">
              Our expert consultants can help you implement best practices and optimize your ServiceNow environment for maximum business impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('contact')}
              className="bg-[#2ECC71] text-[#0E2A47] px-12 py-5 rounded-xl font-semibold text-lg shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all inline-flex items-center gap-3"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* TAGS & SHARE */}
      <section className="py-12 bg-white">
        <div className="max-w-[800px] mx-auto px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 border-t border-b border-[#E2E8F0]">
            {/* Tags */}
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-5 h-5 text-[#64748B]" />
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-[#F8FAFC] text-[#64748B] font-semibold text-sm hover:bg-[#2ECC71]/10 hover:text-[#2ECC71] transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Icons */}
            <div className="flex items-center gap-3">
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
          </div>
        </div>
      </section>

      {/* AUTHOR INFO */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[800px] mx-auto px-8">
          <div className="bg-white rounded-2xl p-10 shadow-[0_10px_24px_rgba(0,0,0,0.06)] border border-[#E2E8F0]">
            <h3 className="text-xl font-bold text-[#0E2A47] mb-6">About the Author</h3>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-[#F8FAFC]">
                <ImageWithFallback
                  src={blog.author.photo}
                  alt={blog.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-[#0E2A47] mb-1">
                  {blog.author.name}
                </h4>
                <p className="text-[#2ECC71] font-semibold mb-3">
                  {blog.author.role}
                </p>
                <p className="text-[#64748B] leading-relaxed mb-4">
                  {blog.author.bio}
                </p>
                <a
                  href={blog.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2ECC71] hover:text-[#0E2A47] font-semibold transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED BLOGS */}
      {relatedBlogs.length > 0 && (
        <section ref={relatedRef} className="py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-[#0E2A47] mb-4 tracking-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
                Related Insights
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog, idx) => (
                <motion.div
                  key={relatedBlog.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => onNavigate?.(relatedBlog.type, relatedBlog.slug)}
                  className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all cursor-pointer group overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={relatedBlog.featuredImage}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      relatedBlog.type === 'blog'
                        ? 'bg-[#0E2A47]/10 text-[#0E2A47]'
                        : 'bg-[#2ECC71]/10 text-[#2ECC71]'
                    }`}>
                      {relatedBlog.type === 'blog' ? 'Blog' : 'Article'}
                    </span>
                    <h3 className="text-xl font-bold text-[#0E2A47] mt-4 mb-3 line-clamp-2 group-hover:text-[#2ECC71] transition-colors">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-[#64748B] text-sm">{relatedBlog.readTime}</p>
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
