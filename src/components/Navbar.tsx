import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown, Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { BookCallModal, SuccessModal } from './BookCallModal';

const logoImage = 'https://image2url.com/r2/default/images/1772005300282-29e58bca-d0c4-4b09-8b1e-88ced6f0b8ed.png';

const megaMenuContent = {
  services: [
    'Advisory & Consulting',
    'Implementation Services',
    'Digital transformation',
    'Managed Support Services',
  ],
  solutions: [
    'IT Service Management & UX',
    'IT Operation Management',
    'Human Resource Automation',
    'Customer Service Management',
    'Project & Portfolio Management',
    'Governance, Risk, and Compliance',
    'CMDB & IT Assets Management',
    'Security Operations (SecOps)',
  ],
  industries: [
    'Healthcare and life science',
    'Public Sector',
    'Finance Services',
    'Telecom, Media & Tech',
    'Retail and Manufacturing',
    'Service Provider',
    'Higher Education',
    'Energy and Utilities',
  ],
  resources: [
    {
      title: 'Blogs & Articles',
      description: 'Expert insights and updates on industry trends and innovations.',
    },
    {
      title: 'Our Case Studies',
      description: 'Detailed analyses of successful projects and client solutions.',
    },
    {
      title: 'Events and Insights',
      description: 'Upcoming events and key takeaways from industry happenings.',
    },
    {
      title: 'Career & Internship',
      description: 'Explore job opportunities and internships to advance your career.',
    },
  ],
};

export function Navbar({ onNavigate }: { onNavigate?: (page: string, slug?: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);
  const [showMobileIndustries, setShowMobileIndustries] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true); // Default to true to avoid flash on desktop
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setShowMegaMenu(false);
    setShowResourcesMenu(false);
    setMobileMenuOpen(false);
    setShowMobileServices(false);
    setShowMobileSolutions(false);
    setShowMobileIndustries(false);
    setMobileResourcesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };

    // Initial check
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <div
        className="transition-all duration-300"
        style={{
          background: scrolled || mobileMenuOpen
            ? 'rgba(255, 255, 255, 0.72)'
            : 'rgba(255, 255, 255, 0.55)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: '0.5px solid rgba(0,0,0,0.12)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => onNavigate?.('home')}
          >
            <img
              src={logoImage}
              alt="Sotiotech"
              className="h-10 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Nav links */}
          {isDesktop && (
            <div className="flex items-center gap-8 xl:gap-10">
              {/* What We Do with Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <button
                  className="text-sm font-semibold text-[#0E2A47] hover:text-[#2ECC71] transition-colors duration-300 flex items-center gap-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  WHAT WE DO
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${showMegaMenu ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {showMegaMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="absolute left-1/2 -translate-x-1/2 pt-6 items-center"
                      style={{ top: '100%', minWidth: '1000px' }}
                    >
                      <div
                        className="bg-white rounded-2xl border border-[#E2E8F0] p-8"
                        style={{
                          boxShadow: '0 20px 60px -10px rgba(14, 42, 71, 0.15), 0 0 0 1px rgba(14, 42, 71, 0.05)',
                        }}
                      >
                        <div className="grid grid-cols-3 gap-12 mb-8">
                          {/* SERVICES Column */}
                          <div>
                            <h3 className="text-[#2ECC71] font-bold text-sm uppercase tracking-wider mb-6">
                              SERVICES
                            </h3>
                            <ul className="space-y-4">
                              {megaMenuContent.services.map((item, idx) => (
                                <li key={idx}>
                                  <a
                                    href="#"
                                    className="text-[#64748B] hover:text-[#0E2A47] transition-colors duration-200 text-sm block"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (item === 'Advisory & Consulting') onNavigate?.('advisory');
                                      else if (item === 'Implementation Services') onNavigate?.('implementation');
                                      else if (item === 'Digital transformation') onNavigate?.('digital-transformation');
                                      else if (item === 'Managed Support Services') onNavigate?.('managed-support');
                                    }}
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* OUR SOLUTION Column */}
                          <div>
                            <h3 className="text-[#2ECC71] font-bold text-sm uppercase tracking-wider mb-6">
                              OUR SOLUTION
                            </h3>
                            <ul className="space-y-4">
                              {megaMenuContent.solutions.map((item, idx) => (
                                <li key={idx}>
                                  <a
                                    href="#"
                                    className="text-[#64748B] hover:text-[#0E2A47] transition-colors duration-200 text-sm block"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (item === 'IT Service Management & UX') onNavigate?.('itsm');
                                      else if (item === 'IT Operation Management') onNavigate?.('itom');
                                      else if (item === 'Human Resource Automation') onNavigate?.('hrsd');
                                      else if (item === 'Customer Service Management') onNavigate?.('csm');
                                      else if (item === 'Project & Portfolio Management') onNavigate?.('itbm');
                                      else if (item === 'Governance, Risk, and Compliance') onNavigate?.('grc');
                                      else if (item === 'CMDB & IT Assets Management') onNavigate?.('itam');
                                      else if (item === 'Security Operations (SecOps)') onNavigate?.('secops');
                                    }}
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* WHO WE SERVE Column */}
                          <div>
                            <h3 className="text-[#2ECC71] font-bold text-sm uppercase tracking-wider mb-6">
                              WHO WE SERVE
                            </h3>
                            <ul className="space-y-4">
                              {megaMenuContent.industries.map((item, idx) => (
                                <li key={idx}>
                                  <a
                                    href="#"
                                    className="text-[#64748B] hover:text-[#0E2A47] transition-colors duration-200 text-sm block"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (item === 'Healthcare and life science') onNavigate?.('industry', 'healthcare');
                                      else if (item === 'Public Sector') onNavigate?.('industry', 'public-sector');
                                      else if (item === 'Finance Services') onNavigate?.('industry', 'finance');
                                      else if (item === 'Telecom, Media & Tech') onNavigate?.('industry', 'telecom-media-tech');
                                      else if (item === 'Retail and Manufacturing') onNavigate?.('industry', 'retail-manufacturing');
                                      else if (item === 'Service Provider') onNavigate?.('industry', 'service-provider');
                                      else if (item === 'Higher Education') onNavigate?.('industry', 'higher-education');
                                      else if (item === 'Energy and Utilities') onNavigate?.('industry', 'energy-utilities');
                                    }}
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                          <div>
                            <h4 className="text-[#0E2A47] font-bold text-md mb-1">
                              Need help choosing the right solution?
                            </h4>
                            <p className="text-sm text-[#64748B]">
                              Our experts are here to guide you through your ServiceNow journey
                            </p>
                          </div>
                          <button
                            onClick={() => onNavigate?.('contact')}
                            className="bg-[#2ECC71] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#27AE60] transition-colors flex items-center gap-2 shadow-lg shadow-[#2ECC71]/20"
                          >
                            Talk to Expert <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Menu */}
              <div
                className="relative"
                onMouseEnter={() => setShowResourcesMenu(true)}
                onMouseLeave={() => setShowResourcesMenu(false)}
              >
                <button
                  className="text-sm font-semibold text-[#0E2A47] hover:text-[#2ECC71] transition-colors duration-300 flex items-center gap-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  RESOURCES
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${showResourcesMenu ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {showResourcesMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="absolute left-1/2 -translate-x-1/2 pt-6"
                      style={{ top: '100%', minWidth: '600px' }}
                    >
                      <div
                        className="bg-white rounded-2xl border border-[#E2E8F0] p-8"
                        style={{
                          boxShadow: '0 20px 60px -10px rgba(14, 42, 71, 0.15), 0 0 0 1px rgba(14, 42, 71, 0.05)',
                        }}
                      >
                        <div className="grid grid-cols-2 gap-8">
                          {megaMenuContent.resources.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              className="group cursor-pointer"
                              onClick={() => {
                                setShowResourcesMenu(false);
                                if (item.title === 'Blogs & Articles') onNavigate?.('articles');
                                else if (item.title === 'Our Case Studies') onNavigate?.('case-studies');
                                else if (item.title === 'Events and Insights') onNavigate?.('events-and-insights');
                                else if (item.title === 'Career & Internship') onNavigate?.('careers');

                                if (item.title === 'Blogs & Articles' || item.title === 'Our Case Studies' || item.title === 'Events and Insights' || item.title === 'Career & Internship') {
                                  setShowResourcesMenu(false);
                                }
                              }}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-bold text-[#0E2A47] group-hover:text-[#2ECC71] transition-colors">
                                  {item.title}
                                </h4>
                                <ArrowUpRight className="w-4 h-4 text-[#2ECC71] opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-sm text-gray-500 line-clamp-2">
                                {item.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#"
                className="text-sm font-semibold text-[#0E2A47] hover:text-[#2ECC71] transition-colors duration-300"
                onClick={(e) => { e.preventDefault(); onNavigate?.('about'); }}
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-[#0E2A47] hover:text-[#2ECC71] transition-colors duration-300"
                onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}
              >
                CONTACT US
              </a>
            </div>
          )}

          {/* CTA Button - Desktop */}
          {isDesktop && (
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage(lang => lang === 'en' ? 'ar' : 'en')}
                className="text-sm font-semibold text-[#0E2A47] hover:text-[#2ECC71] transition-colors duration-300 flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'ENG' : 'عربي'}</span>
              </button>
              <button
                onClick={() => onNavigate?.('book-call')}
                className="bg-[#0E2A47] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2ECC71] transition-all duration-300 shadow-lg shadow-[#0E2A47]/20 hover:shadow-[#2ECC71]/30 flex items-center whitespace-nowrap"
              >
                Book an Expert Call <ArrowRight className="w-4 h-4 ml-2 inline h-full" />
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          {!isDesktop && (
            <button
              className="p-2 text-[#0E2A47]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl overflow-hidden rounded-b-2xl"
            >
              <div className="flex flex-col p-6 space-y-4 max-h-[calc(100vh-110px)] overflow-y-auto pb-40">
                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setShowMobileServices(!showMobileServices)}
                    className="flex items-center justify-between w-full text-lg font-semibold text-[#0E2A47]"
                  >
                    SERVICES <ChevronDown className={`w-5 h-5 transition-transform ${showMobileServices ? 'rotate-180' : ''}`} />
                  </button>
                  {showMobileServices && (
                    <div className="pl-4 mt-2 space-y-3 border-l-2 border-[#2ECC71]/20 ml-1">
                      {megaMenuContent.services.map((item, idx) => (
                        <a key={idx} href="#" className="block text-gray-600 py-1" onClick={(e) => {
                          e.preventDefault(); setMobileMenuOpen(false);
                          if (item === 'Advisory & Consulting') onNavigate?.('advisory');
                          else if (item === 'Implementation Services') onNavigate?.('implementation');
                          else if (item === 'Digital transformation') onNavigate?.('digital-transformation');
                          else if (item === 'Managed Support Services') onNavigate?.('managed-support');
                        }}>{item}</a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Solutions Accordion */}
                <div>
                  <button
                    onClick={() => setShowMobileSolutions(!showMobileSolutions)}
                    className="flex items-center justify-between w-full text-lg font-semibold text-[#0E2A47]"
                  >
                    OUR SOLUTION <ChevronDown className={`w-5 h-5 transition-transform ${showMobileSolutions ? 'rotate-180' : ''}`} />
                  </button>
                  {showMobileSolutions && (
                    <div className="pl-4 mt-2 space-y-3 border-l-2 border-[#2ECC71]/20 ml-1">
                      {megaMenuContent.solutions.map((item, idx) => (
                        <a key={idx} href="#" className="block text-gray-600 py-1" onClick={(e) => {
                          e.preventDefault(); setMobileMenuOpen(false);
                          if (item === 'IT Service Management & UX') onNavigate?.('itsm');
                          else if (item === 'IT Operation Management') onNavigate?.('itom');
                          else if (item === 'Human Resource Automation') onNavigate?.('hrsd');
                          else if (item === 'Customer Service Management') onNavigate?.('csm');
                          else if (item === 'Project & Portfolio Management') onNavigate?.('itbm');
                          else if (item === 'Governance, Risk, and Compliance') onNavigate?.('grc');
                          else if (item === 'CMDB & IT Assets Management') onNavigate?.('itam');
                          else if (item === 'Security Operations (SecOps)') onNavigate?.('secops');
                        }}>{item}</a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Industries Accordion */}
                <div>
                  <button
                    onClick={() => setShowMobileIndustries(!showMobileIndustries)}
                    className="flex items-center justify-between w-full text-lg font-semibold text-[#0E2A47]"
                  >
                    INDUSTRIES <ChevronDown className={`w-5 h-5 transition-transform ${showMobileIndustries ? 'rotate-180' : ''}`} />
                  </button>
                  {showMobileIndustries && (
                    <div className="pl-4 mt-2 space-y-3 border-l-2 border-[#2ECC71]/20 ml-1">
                      {megaMenuContent.industries.map((item, idx) => (
                        <a key={idx} href="#" className="block text-gray-600 py-1" onClick={(e) => {
                          e.preventDefault(); setMobileMenuOpen(false);
                          if (item === 'Healthcare and life science') onNavigate?.('industry', 'healthcare');
                          else if (item === 'Public Sector') onNavigate?.('industry', 'public-sector');
                          else if (item === 'Finance Services') onNavigate?.('industry', 'finance');
                          else if (item === 'Telecom, Media & Tech') onNavigate?.('industry', 'telecom-media-tech');
                          else if (item === 'Retail and Manufacturing') onNavigate?.('industry', 'retail-manufacturing');
                          else if (item === 'Service Provider') onNavigate?.('industry', 'service-provider');
                          else if (item === 'Higher Education') onNavigate?.('industry', 'higher-education');
                          else if (item === 'Energy and Utilities') onNavigate?.('industry', 'energy-utilities');
                        }}>{item}</a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Resources Accordion */}
                <div>
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="flex items-center justify-between w-full text-lg font-semibold text-[#0E2A47]"
                  >
                    RESOURCES <ChevronDown className={`w-5 h-5 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileResourcesOpen && (
                    <div className="pl-4 mt-2 space-y-3 border-l-2 border-[#2ECC71]/20 ml-1">
                      {megaMenuContent.resources.map((item, idx) => (
                        <a key={idx} href="#" className="block text-gray-600 py-1" onClick={(e) => {
                          e.preventDefault(); setMobileMenuOpen(false);
                          if (item.title === 'Blogs & Articles') onNavigate?.('articles');
                          else if (item.title === 'Our Case Studies') onNavigate?.('case-studies');
                          else if (item.title === 'Events and Insights') onNavigate?.('events-and-insights');
                          else if (item.title === 'Career & Internship') onNavigate?.('careers');
                        }}>{item.title}</a>
                      ))}
                    </div>
                  )}
                </div>
                <a href="#" className="text-lg font-semibold text-[#0E2A47]" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('about'); }}>ABOUT US</a>
                <a href="#" className="text-lg font-semibold text-[#0E2A47]" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('contact'); }}>CONTACT US</a>

                <button
                  onClick={() => { setMobileMenuOpen(false); onNavigate?.('book-call'); }}
                  className="bg-[#0E2A47] text-white w-full py-4 rounded-xl text-lg font-semibold hover:bg-[#2ECC71] transition-all mt-4 mb-2"
                >
                  Book an Expert Call →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav >
  );
}
