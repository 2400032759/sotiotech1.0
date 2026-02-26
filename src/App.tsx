
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CollaborateExecuteImpact } from './components/CollaborateExecuteImpact';
import { ServiceGrid } from './components/ServiceGrid';
import { WorkflowSection } from './components/WorkflowSection';
import { Testimonials } from './components/Testimonials';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { AdvisoryPage } from './components/AdvisoryPage';
import { ImplementationPage } from './components/ImplementationPage';
import { DigitalTransformationPage } from './components/DigitalTransformationPage';
import { ManagedSupportPage } from './components/ManagedSupportPage';
import { ITSMPage } from './components/ITSMPage';
import { ITOMPage } from './components/ITOMPage';
import { HRSDPage } from './components/HRSDPage';
import { CSMPage } from './components/CSMPage';
import { ITBMPage } from './components/ITBMPage';
import { GRCPage } from './components/GRCPage';
import { ITAMPage } from './components/ITAMPage';
import { SecOpsPage } from './components/SecOpsPage';
import { ArticlesAndBlogsPage } from './components/ArticlesAndBlogsPage';
import { ArticlePage } from './components/ArticlePage';
import { BlogPage } from './components/BlogPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { CaseStudyDetailPage } from './components/CaseStudyDetailPage';
import { EventsAndInsightsHubPage } from './components/EventsAndInsightsHubPage';
import { EventsListingPage } from './components/EventsListingPage';
import { EventDetailPage } from './components/EventDetailPage';
import { PodcastsListingPage } from './components/PodcastsListingPage';
import { PodcastDetailPage } from './components/PodcastDetailPage';
import { VideosListingPage } from './components/VideosListingPage';
import { VideoDetailPage } from './components/VideoDetailPage';
import { NewslettersPage } from './components/NewslettersPage';
import { CareersPage } from './components/CareersPage';
import { JobDetailPage } from './components/JobDetailPage';
import { InternshipApplicationPage } from './components/InternshipApplicationPage';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import { BookCallModal, SuccessModal } from './components/BookCallModal';

// Wrappers for pages that need slug
const ArticlePageWrapper = ({ onNavigate }: { onNavigate: (page: string, slug?: string) => void }) => {
  const { slug } = useParams();
  return <ArticlePage slug={slug || ''} onNavigate={onNavigate} />;
};
const BlogPageWrapper = ({ onNavigate }: { onNavigate: (page: string, slug?: string) => void }) => {
  const { slug } = useParams();
  return <BlogPage slug={slug || ''} onNavigate={onNavigate} />;
};
const CaseStudyWrapper = ({ onNavigate }: { onNavigate: (page: string, slug?: string) => void }) => {
  const { slug } = useParams();
  return <CaseStudyDetailPage slug={slug || ''} onNavigate={onNavigate} />;
};
const EventWrapper = ({ onNavigate }: { onNavigate: (page: string, slug?: string) => void }) => {
  const { slug } = useParams();
  return <EventDetailPage slug={slug || ''} onNavigate={onNavigate} />;
};
const PodcastWrapper = ({ onNavigate }: { onNavigate: (page: string, slug?: string) => void }) => {
  const { slug } = useParams();
  return <PodcastDetailPage slug={slug || ''} onNavigate={onNavigate} />;
};
const VideoWrapper = ({ onNavigate }: { onNavigate: (page: string, slug?: string) => void }) => {
  const { slug } = useParams();
  return <VideoDetailPage slug={slug || ''} onNavigate={onNavigate} />;
};
const JobDetailWrapper = ({ onNavigate }: { onNavigate: (page: string, slug?: string) => void }) => {
  const { slug } = useParams();
  return <JobDetailPage slug={slug || ''} onNavigate={onNavigate} />;
};

import { IndustryPage } from './components/IndustryPage';


export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isBookCallModalOpen, setIsBookCallModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const handleNavigate = (page: string, slug?: string) => {
    switch (page) {
      case 'home': navigate('/'); break;
      case 'contact': navigate('/contact'); break;
      case 'about': navigate('/about'); break;
      case 'advisory': navigate('/advisory'); break;
      case 'implementation': navigate('/implementation'); break;
      case 'digital-transformation': navigate('/digital-transformation'); break;
      case 'managed-support': navigate('/managed-support'); break;
      case 'itsm': navigate('/itsm'); break;
      case 'itom': navigate('/itom'); break;
      case 'hrsd': navigate('/hrsd'); break;
      case 'csm': navigate('/csm'); break;
      case 'itbm': navigate('/itbm'); break;
      case 'grc': navigate('/grc'); break;
      case 'itam': navigate('/itam'); break;
      case 'secops': navigate('/secops'); break;
      case 'articles': navigate('/articles'); break;
      case 'article': navigate(`/articles/${slug}`); break;
      case 'blog': navigate(`/blog/${slug}`); break;
      case 'case-studies': navigate('/case-studies'); break;
      case 'case-study': navigate(`/case-studies/${slug}`); break;
      case 'events-and-insights': navigate('/events-and-insights'); break;
      case 'events': navigate('/events'); break;
      case 'event': navigate(`/events/${slug}`); break;
      case 'podcasts': navigate('/podcasts'); break;
      case 'podcast': navigate(`/podcasts/${slug}`); break;
      case 'videos': navigate('/videos'); break;
      case 'video': navigate(`/videos/${slug}`); break;
      case 'newsletters': navigate('/newsletters'); break;
      case 'careers': navigate('/careers'); break;
      case 'job-detail': navigate(`/careers/${slug}`); break;
      case 'industry': navigate(`/industries/${slug}`); break;
      case 'internship-application': navigate('/internship-application'); break;
      case 'book-call': setIsBookCallModalOpen(true); break;
      default: navigate('/'); break;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      <Navbar onNavigate={handleNavigate} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero onNavigate={handleNavigate} />
            <CollaborateExecuteImpact />
            <ServiceGrid />
            <WorkflowSection onNavigate={handleNavigate} />
            <Testimonials />
            <CTABanner onNavigate={handleNavigate} />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
        <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
        <Route path="/advisory" element={<AdvisoryPage onNavigate={handleNavigate} />} />
        <Route path="/implementation" element={<ImplementationPage onNavigate={handleNavigate} />} />
        <Route path="/digital-transformation" element={<DigitalTransformationPage onNavigate={handleNavigate} />} />
        <Route path="/managed-support" element={<ManagedSupportPage onNavigate={handleNavigate} />} />
        <Route path="/itsm" element={<ITSMPage onNavigate={handleNavigate} />} />
        <Route path="/itom" element={<ITOMPage onNavigate={handleNavigate} />} />
        <Route path="/hrsd" element={<HRSDPage onNavigate={handleNavigate} />} />
        <Route path="/csm" element={<CSMPage onNavigate={handleNavigate} />} />
        <Route path="/itbm" element={<ITBMPage onNavigate={handleNavigate} />} />
        <Route path="/grc" element={<GRCPage onNavigate={handleNavigate} />} />
        <Route path="/itam" element={<ITAMPage onNavigate={handleNavigate} />} />
        <Route path="/secops" element={<SecOpsPage onNavigate={handleNavigate} />} />

        <Route path="/articles" element={<ArticlesAndBlogsPage onNavigate={handleNavigate} />} />
        <Route path="/articles/:slug" element={<ArticlePageWrapper onNavigate={handleNavigate} />} />
        <Route path="/blog/:slug" element={<BlogPageWrapper onNavigate={handleNavigate} />} />

        <Route path="/case-studies" element={<CaseStudiesPage onNavigate={handleNavigate} />} />
        <Route path="/case-studies/:slug" element={<CaseStudyWrapper onNavigate={handleNavigate} />} />

        <Route path="/events-and-insights" element={<EventsAndInsightsHubPage onNavigate={handleNavigate} />} />
        <Route path="/events" element={<EventsListingPage onNavigate={handleNavigate} />} />
        <Route path="/events/:slug" element={<EventWrapper onNavigate={handleNavigate} />} />

        <Route path="/podcasts" element={<PodcastsListingPage onNavigate={handleNavigate} />} />
        <Route path="/podcasts/:slug" element={<PodcastWrapper onNavigate={handleNavigate} />} />

        <Route path="/videos" element={<VideosListingPage onNavigate={handleNavigate} />} />
        <Route path="/videos/:slug" element={<VideoWrapper onNavigate={handleNavigate} />} />

        <Route path="/newsletters" element={<NewslettersPage onNavigate={handleNavigate} />} />

        <Route path="/careers" element={<CareersPage onNavigate={handleNavigate} />} />
        <Route path="/careers/:slug" element={<JobDetailWrapper onNavigate={handleNavigate} />} />
        <Route path="/industries/:slug" element={<IndustryPage onNavigate={handleNavigate} />} />
        <Route path="/internship-application" element={<InternshipApplicationPage onNavigate={handleNavigate} />} />
      </Routes>

      <BookCallModal
        isOpen={isBookCallModalOpen}
        onClose={() => setIsBookCallModalOpen(false)}
        onSuccess={() => setIsSuccessModalOpen(true)}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
}