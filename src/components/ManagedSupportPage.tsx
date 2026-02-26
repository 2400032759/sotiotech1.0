import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Database,
  Code,
  TrendingUp,
  Link2,
  Settings,
  RefreshCw,
  DollarSign,
  Maximize2,
  Activity,
  Target
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';

export function ManagedSupportPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [capabilitiesRef, capabilitiesInView] = useInView({ threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [benefit1Ref, benefit1InView] = useInView({ threshold: 0.1 });
  const [benefit2Ref, benefit2InView] = useInView({ threshold: 0.1 });
  const [benefit3Ref, benefit3InView] = useInView({ threshold: 0.1 });
  const [benefit4Ref, benefit4InView] = useInView({ threshold: 0.1 });
  const [topBenefitsRef, topBenefitsInView] = useInView({ threshold: 0.1 });
  const [metricsRef, metricsInView] = useInView({ threshold: 0.1 });
  const [ctaStripRef, ctaStripInView] = useInView({ threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const capabilities = [
    {
      icon: Database,
      title: 'Platform Migration',
      description: 'Seamless migration with zero downtime and business continuity assurance.'
    },
    {
      icon: Code,
      title: 'Development & Management',
      description: 'Ongoing enhancements, scoped development, and release governance.'
    },
    {
      icon: TrendingUp,
      title: 'Process Improvement',
      description: 'Continuous workflow optimization to improve efficiency and ROI.'
    },
    {
      icon: Link2,
      title: 'Integrations',
      description: 'Secure integrations across enterprise systems and tools.'
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Day-to-day platform operations, roles, access, configurations.'
    },
    {
      icon: RefreshCw,
      title: 'Upgrades & Patch Management',
      description: 'Scheduled upgrades, security patches, and feature adoption.'
    }
  ];

  const topBenefits = [
    'Certified ServiceNow experts',
    '24/7 operational support',
    'Flexible scaling models',
    'Frees internal teams',
    'Lower cost vs in-house',
    'Continuous optimization'
  ];

  const metrics = [
    { value: '40+', label: 'ServiceNow Experts' },
    { value: '6+', label: 'Years Platform Experience' },
    { value: '24/7', label: 'Support Coverage' },
    { value: 'SLA', label: 'Enterprise SLA-Driven Delivery' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50 pt-40 pb-24 lg:pt-52 lg:pb-32">
        {/* Modern Enterprise Background - Sophisticated Texture */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(46,204,113,0.1),rgba(255,255,255,0))]" />
          
          {/* Premium Floating Decorative Elements */}
          <motion.div
            animate={{ 
              y: [0, -30, 0], 
              rotate: [0, 5, 0],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-0 lg:right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#2ECC71]/10 to-[#27AE60]/5 rounded-full blur-[80px]"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0], 
              x: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0E2A47]/5 to-[#1976D2]/5 rounded-full blur-[100px]"
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="inline-flex mb-8 group pl-2">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="relative flex items-center gap-3 bg-white/50 backdrop-blur-md border border-[#2ECC71]/20 rounded-full px-5 py-2 shadow-sm hover:shadow-md hover:border-[#2ECC71]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src="https://www.servicenow.com/favicon.ico"
                      alt="ServiceNow"
                      className="w-5 h-5 drop-shadow-sm"
                    />
                    <span className="text-sm font-semibold text-[#0E2A47]">ServiceNow</span>
                  </div>
                  <span className="text-[#94A3B8] text-xs px-1">×</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#2ECC71] rounded-full animate-pulse" />
                    <span className="text-sm font-bold text-[#0E2A47]">Sotiotech</span>
                  </div>
                </motion.div>
              </div>

              <h1 className="text-[#0E2A47] mb-6 tracking-tight leading-[1.1] text-4xl lg:text-6xl font-extrabold max-w-[640px]">
                Enterprise-Grade ServiceNow <span className="text-[#2ECC71]">Managed Support</span>
              </h1>

              <p className="text-[#475569] text-xl leading-relaxed mb-10 max-w-[540px] font-medium">
                We manage, optimize, and continuously improve your ServiceNow platform — so your teams can focus on outcomes, not operations.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  onClick={() => onNavigate('book-call')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-[#0E2A47] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(14,42,71,0.2)] hover:shadow-[0_15px_40px_rgba(14,42,71,0.3)] transition-all overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10">Talk to an Advisor</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[600px]">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Managed Support Team"
                    className="w-full object-cover h-[400px] lg:h-[500px]"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/80 via-transparent to-transparent" />
                  
                  {/* Floating Stat Card */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px]">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#2ECC71]/10 p-2 rounded-lg">
                          <Activity className="w-5 h-5 text-[#2ECC71]" />
                        </div>
                        <span className="text-sm font-semibold text-slate-600">Uptime</span>
                     </div>
                     <p className="text-[#0E2A47] font-bold text-lg">99.9%</p>
                     <p className="text-xs text-slate-500">Service availability</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICE CAPABILITIES GRID */}
      <section ref={capabilitiesRef} className="pt-[8rem] pb-16 lg:pt-[12rem] lg:pb-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0B2E3F] mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              Liberate your time. We handle the platform.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0F3A4D] rounded-2xl p-8 h-full hover:shadow-[0_12px_32px_rgba(30,215,96,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#1ED760]/10 rounded-xl flex items-center justify-center mb-6">
                  <capability.icon className="w-7 h-7 text-[#1ED760]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-[#6B7C85] leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MANAGED SUPPORT SECTION */}
      <section ref={whyRef} className="mt-8 lg:mt-10 py-10 lg:py-14 bg-[#0B2E3F] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1320px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-white mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              Why enterprises choose managed ServiceNow support
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Outsource complexity. Gain stability, speed, and confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFIT 1: COST EFFICIENCY */}
      <section ref={benefit1Ref} className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={benefit1InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#1ED760]/10 px-4 py-2 rounded-full mb-6">
                <DollarSign className="w-5 h-5 text-[#1ED760]" />
                <span className="text-sm font-semibold text-[#0B2E3F]">Cost Efficiency</span>
              </div>
              <h3 className="text-[#0B2E3F] mb-6 tracking-tight text-2xl lg:text-[40px] font-bold">
                Cost Efficiency
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1ED760] flex-shrink-0 mt-1" />
                  <span className="text-[#6B7C85] text-lg">Predictable subscription-based pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1ED760] flex-shrink-0 mt-1" />
                  <span className="text-[#6B7C85] text-lg">Reduced internal staffing overhead</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1ED760] flex-shrink-0 mt-1" />
                  <span className="text-[#6B7C85] text-lg">Lower risk of costly errors</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={benefit1InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neSUyMHBsYXRmb3JtfGVufDF8fHx8MTc2ODU3MDA0OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cost efficiency"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFIT 2: SCALABILITY & FLEXIBILITY */}
      <section ref={benefit2Ref} className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={benefit2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691737217-77302c5f988f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGVmZmljaWVuY3klMjB0ZWFtfGVufDF8fHx8MTc2ODU3MDA0OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Scalability and flexibility"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={benefit2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-[#1ED760]/10 px-4 py-2 rounded-full mb-6">
                <Maximize2 className="w-5 h-5 text-[#1ED760]" />
                <span className="text-sm font-semibold text-[#0B2E3F]">Scalability & Flexibility</span>
              </div>
              <h3 className="text-[#0B2E3F] mb-6 tracking-tight text-2xl lg:text-[40px] font-bold">
                Scale without friction
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1ED760] flex-shrink-0 mt-1" />
                  <span className="text-[#6B7C85] text-lg">Scale support up or down instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1ED760] flex-shrink-0 mt-1" />
                  <span className="text-[#6B7C85] text-lg">Rapid adoption of new ServiceNow features</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1ED760] flex-shrink-0 mt-1" />
                  <span className="text-[#6B7C85] text-lg">No infrastructure investment</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFIT 3: PERFORMANCE & RELIABILITY */}
      <section ref={benefit3Ref} className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={benefit3InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#1ED760]/10 px-4 py-2 rounded-full mb-6">
                <Activity className="w-5 h-5 text-[#1ED760]" />
                <span className="text-sm font-semibold text-[#0B2E3F]">Performance & Reliability</span>
              </div>
              <h3 className="text-[#0B2E3F] mb-6 tracking-tight text-2xl lg:text-[40px] font-bold">
                Proactive, not reactive
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1ED760] flex-shrink-0 mt-1" />
                  <span className="text-[#6B7C85] text-lg">Continuous monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1ED760] flex-shrink-0 mt-1" />
                  <span className="text-[#6B7C85] text-lg">SLA-driven response</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1ED760] flex-shrink-0 mt-1" />
                  <span className="text-[#6B7C85] text-lg">Improved uptime and platform performance</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={benefit3InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGVyZm9ybWFuY2UlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY4NTcwMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Performance and reliability"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFIT 4: FOCUS ON CORE BUSINESS */}
      <section ref={benefit4Ref} className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={benefit4InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767650563433-69ccbaa44a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzdHJhdGVneSUyMGZvY3VzfGVufDF8fHx8MTc2ODU3MDA1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Focus on core business"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={benefit4InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-[#1ED760]/10 px-4 py-2 rounded-full mb-6">
                <Target className="w-5 h-5 text-[#1ED760]" />
                <span className="text-sm font-semibold text-[#0B2E3F]">Focus on Core Business</span>
              </div>
              <h3 className="text-[#0B2E3F] mb-6 tracking-tight text-2xl lg:text-[40px] font-bold">
                Your teams focus on strategy
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1ED760] flex-shrink-0 mt-1" />
                  <span className="text-[#6B7C85] text-lg">Platform operations fully offloaded</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1ED760] flex-shrink-0 mt-1" />
                  <span className="text-[#6B7C85] text-lg">Better IT-business alignment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1ED760] flex-shrink-0 mt-1" />
                  <span className="text-[#6B7C85] text-lg">Faster innovation cycles</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TOP BENEFITS VISUAL (HEXAGONAL INFOGRAPHIC) */}
      <section ref={topBenefitsRef} className="py-8 lg:py-12 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={topBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-[#0B2E3F] mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              Top Benefits of ServiceNow Managed Services from Sotiotech
            </h2>
          </motion.div>

          {/* Circular Diagram - Hidden on Mobile */}
          <div className="hidden lg:flex relative mx-auto items-center justify-center" style={{ minHeight: '240px', maxWidth: '900px' }}>
            {/* Center Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={topBenefitsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative z-20 w-56 h-56 bg-gradient-to-br from-[#1ED760] to-[#17B34E] rounded-full flex items-center justify-center shadow-[0_24px_64px_rgba(30,215,96,0.3)]"
            >
              <div className="text-center text-white px-6">
                <p className="text-2xl font-bold leading-tight">Sotiotech</p>
                <p className="text-sm mt-1">Managed Services</p>
              </div>
            </motion.div>

            {/* Orbiting Benefits */}
            {topBenefits.map((benefit, idx) => {
              const radius = 130;
              const angleRad = ((360 / 6) * idx - 90) * (Math.PI / 180);
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={topBenefitsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <div className="bg-[#0F3A4D] rounded-xl border border-[#1ED760]/20 shadow-[0_10px_24px_rgba(0,0,0,0.1)] p-6 w-48 text-center hover:shadow-[0_18px_42px_rgba(30,215,96,0.2)] hover:border-[#1ED760] transition-all duration-200">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#1ED760]/20 rounded-lg mb-3 mx-auto">
                      <CheckCircle2 className="w-5 h-5 text-[#1ED760]" strokeWidth={2.5} />
                    </div>
                    <p className="text-sm font-semibold text-white leading-tight">
                      {benefit}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST & DIFFERENTIATION METRICS */}
      <section ref={metricsRef} className="py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1320px] mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#1ED760] mb-2">{metric.value}</div>
                <div className="text-[#6B7C85] font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section ref={ctaStripRef} className="py-12 lg:py-20 bg-[#0B2E3F] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1320px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaStripInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 max-w-4xl mx-auto">
              Ready to stop worrying about your ServiceNow platform?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('book-call')}
                className="bg-white text-[#0B2E3F] px-10 py-5 rounded-full font-semibold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all"
              >
                Talk to a Trusted Advisor
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('book-call')}
                className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Book an Expert Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section ref={contactRef} className="py-16 lg:py-32 bg-[#0B2E3F] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#1ED760]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#1ED760]/10 rounded-full blur-3xl" />

        <div className="max-w-[1320px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#1ED760] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <a href="mailto:connect@sotiotech.com" className="text-white/80 hover:text-[#1ED760] transition-colors text-lg">
                  connect@sotiotech.com
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-4">
                  What happens next?
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1ED760] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Matched with ServiceNow specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1ED760] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Requirement discussion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1ED760] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Roadmap alignment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1ED760] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Ongoing managed support</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-white/20 shadow-[0_24px_64px_rgba(0,0,0,0.3)] p-10">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0B2E3F] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-[#0B2E3F]/10 focus:border-[#1ED760] focus:outline-none transition-colors text-[#0B2E3F]"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0B2E3F] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-[#0B2E3F]/10 focus:border-[#1ED760] focus:outline-none transition-colors text-[#0B2E3F]"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0B2E3F] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-[#0B2E3F]/10 focus:border-[#1ED760] focus:outline-none transition-colors text-[#0B2E3F]"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0B2E3F] mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl border border-[#0B2E3F]/10 focus:border-[#1ED760] focus:outline-none transition-colors text-[#0B2E3F] resize-none"
                      placeholder="Tell us about your ServiceNow needs..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#1ED760] text-white px-8 py-5 rounded-xl font-semibold text-lg shadow-[0_10px_30px_rgba(30,215,96,0.3)] hover:shadow-[0_15px_40px_rgba(30,215,96,0.4)] transition-all"
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
