import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Package,
  FileKey,
  HardDrive,
  Shield,
  Eye,
  DollarSign,
  Zap,
  Database,
  Target,
  Lightbulb,
  Settings,
  TrendingUp,
  BarChart3,
  FileText,
  Calendar,
  Search,
  LineChart,
  Boxes,
  Clock,
  ShoppingCart,
  AlertTriangle,
  Activity
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';

export function ITAMPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [impactRef, impactInView] = useInView({ threshold: 0.1 });
  const [whatRef, whatInView] = useInView({ threshold: 0.1 });
  const [pillarsRef, pillarsInView] = useInView({ threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1 });
  const [sotiotechRef, sotiotechInView] = useInView({ threshold: 0.1 });
  const [approachRef, approachInView] = useInView({ threshold: 0.1 });
  const [samRef, samInView] = useInView({ threshold: 0.1 });
  const [hamRef, hamInView] = useInView({ threshold: 0.1 });
  const [successRef, successInView] = useInView({ threshold: 0.1 });
  const [clientsRef, clientsInView] = useInView({ threshold: 0.1 });
  const [readyRef, readyInView] = useInView({ threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const itamEnsures = [
    'Accurate asset inventories',
    'License compliance',
    'Cost control',
    'Risk mitigation',
    'Audit readiness'
  ];

  const itamPillars = [
    {
      icon: FileKey,
      title: 'Software Asset Management (SAM)',
      features: [
        'License usage & entitlement tracking',
        'Audit risk reduction',
        'Renewal automation',
        'Software optimization insights'
      ]
    },
    {
      icon: HardDrive,
      title: 'Hardware Asset Management (HAM)',
      features: [
        'End-to-end asset lifecycle tracking',
        'Inventory accuracy',
        'Asset utilization optimization',
        'Warranty & contract governance'
      ]
    }
  ];

  const whyAdvantages = [
    {
      icon: Eye,
      title: 'Centralized Asset Visibility',
      description: 'View all hardware, software, and contracts in one system'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Identify underutilized licenses and unused hardware'
    },
    {
      icon: Shield,
      title: 'Automated Compliance',
      description: 'Reduce audit risk with policy-driven controls'
    },
    {
      icon: Zap,
      title: 'Lifecycle Governance',
      description: 'Manage assets from request → procurement → usage → retirement'
    },
    {
      icon: Database,
      title: 'Native CMDB Integration',
      description: 'Maintain a single source of truth across IT operations'
    }
  ];

  const hamBenefits = [
    'Cost savings through asset rationalization',
    'Real-time inventory tracking',
    'End-to-end lifecycle governance',
    'Risk mitigation through proactive monitoring',
    'Compliance with internal & regulatory standards'
  ];

  const samBenefits = [
    'License optimization & cost reduction',
    'Automated renewals & entitlement tracking',
    'Improved security posture',
    'Usage analytics for better purchasing decisions',
    'Audit readiness & compliance assurance'
  ];

  const sotiotechReasons = [
    {
      number: '1',
      title: 'Deep ITAM Expertise',
      description: 'Extensive experience implementing ITAM across industries with certified ServiceNow professionals'
    },
    {
      number: '2',
      title: 'Tailored Implementations',
      description: 'Customized ITAM workflows aligned with your business, procurement, and ITSM processes'
    },
    {
      number: '3',
      title: 'Fast & Secure Deployment',
      description: 'Proven frameworks to accelerate implementation while minimizing business disruption'
    }
  ];

  const implementationSteps = [
    'Initial Assessment & Planning',
    'Design & Strategy Development',
    'Configuration & Customization',
    'Data Migration & Validation',
    'Training & Adoption',
    'Go-Live & Support',
    'Continuous Optimization'
  ];

  const samFeatures = [
    { icon: FileKey, title: 'License Management' },
    { icon: Activity, title: 'Usage Tracking' },
    { icon: FileText, title: 'Contract & Renewal Management' },
    { icon: Search, title: 'Automated Software Discovery' },
    { icon: BarChart3, title: 'Reporting & Analytics' }
  ];

  const hamFeatures = [
    { icon: Boxes, title: 'Asset Inventory Management' },
    { icon: Clock, title: 'Lifecycle & Warranty Tracking' },
    { icon: ShoppingCart, title: 'Procurement & Vendor Management' },
    { icon: Shield, title: 'Compliance & Auditing' },
    { icon: LineChart, title: 'Performance & Cost Analytics' }
  ];

  const successStats = [
    'Up to 30% reduction in asset-related costs',
    'Significant reduction in audit penalties',
    'Improved IT governance and security posture'
  ];

  const clients = [
    { name: 'BT', logo: 'BT' },
    { name: 'Harman', logo: 'HARMAN' },
    { name: 'US Bank', logo: 'US BANK' },
    { name: 'Syneos Health', logo: 'SYNEOS HEALTH' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white">
      {/* 1️⃣ HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24 pb-12 lg:pt-32 lg:pb-20">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        {/* Angular decorative shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#2ECC71]/10 to-transparent" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#0E2A47]/5 to-transparent" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }} />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[#0E2A47] mb-8 tracking-tight leading-[1.1] text-4xl md:text-5xl lg:text-[64px] font-bold">
                ServiceNow IT Asset Management (ITAM)
              </h1>

              <p className="text-[#0E2A47] text-xl lg:text-2xl font-semibold mb-6">
                Gain Complete Visibility, Control & Optimization of Your IT Assets
              </p>

              <p className="text-[#64748B] text-lg lg:text-xl leading-relaxed mb-12 max-w-[640px]">
                ServiceNow IT Asset Management (ITAM) helps organizations track, optimize, and govern hardware and software assets across their entire lifecycle—reducing costs, improving compliance, and increasing ROI.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('book-call')}
                className="group bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
              >
                Talk to an ITAM Expert
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1589898424451-21e24dcb143c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGluZnJhc3RydWN0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njg1NzY5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="IT Asset Management"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section >

      {/* 2️⃣ BUSINESS IMPACT BANNER */}
      < section ref={impactRef} className="py-12 bg-[#2ECC71] relative overflow-hidden" >
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[#0E2A47] text-xl md:text-3xl font-bold leading-tight">
              Organizations using ServiceNow ITAM achieve up to 30% reduction in IT asset costs through lifecycle optimization and license compliance
            </p>
          </motion.div>
        </div>
      </section >

      {/* 3️⃣ WHAT IS SERVICENOW ITAM? */}
      < section ref={whatRef} className="py-16 lg:py-32 bg-white relative overflow-hidden" >
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        < div className="absolute inset-0 pointer-events-none" >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div >

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whatInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-8 tracking-tight text-3xl lg:text-[56px] font-bold">
              What is ServiceNow IT Asset Management (ITAM)?
            </h2>
            <p className="text-[#64748B] text-xl leading-relaxed max-w-[800px] mx-auto mb-12">
              ServiceNow IT Asset Management is a unified platform that enables organizations to manage hardware, software, and cloud assets from procurement to retirement. ITAM integrates seamlessly with CMDB, ITSM, and ITOM to provide real-time visibility, governance, and automation across the IT estate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whatInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F8FAFC] rounded-3xl p-12 border border-[#E2E8F0]"
          >
            <h3 className="text-2xl font-bold text-[#0E2A47] mb-8 text-center">ITAM ensures:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itamEnsures.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={whatInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0" strokeWidth={2} />
                  <span className="text-[#0E2A47] text-lg font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section >

      {/* 4️⃣ ITAM PILLARS */}
      < section ref={pillarsRef} className="py-16 lg:py-32 bg-white relative overflow-hidden" >
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        < div className="absolute inset-0 pointer-events-none" >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div >

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              ITAM Pillars
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
            {itamPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-10 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all"
              >
                <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-6">
                  <pillar.icon className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#0E2A47] mb-6">
                  {pillar.title}
                </h3>
                <ul className="space-y-3">
                  {pillar.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-[#64748B] text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* 5️⃣ WHY SERVICENOW ITAM? */}
      < section ref={whyRef} className="py-16 lg:py-32 bg-white relative overflow-hidden" >
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        < div className="absolute inset-0 pointer-events-none" >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div >

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-8 tracking-tight text-3xl lg:text-[56px] font-bold">
              Why ServiceNow ITAM?
            </h2>
            <p className="text-[#0E2A47] text-2xl font-semibold mb-4">Key Advantages</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyAdvantages.map((advantage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all"
              >
                <div className="w-14 h-14 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-4">
                  <advantage.icon className="w-7 h-7 text-[#2ECC71]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-[#0E2A47] mb-2">
                  {advantage.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* 6️⃣ BENEFITS OF SERVICENOW ITAM */}
      < section ref={benefitsRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden" >
        {/* Subtle radial glow for dark section */}
        < div className="absolute inset-0 opacity-20" >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div >

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-8 tracking-tight text-3xl lg:text-[56px] font-bold">
              Benefits of ServiceNow ITAM – Global Perspective
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
            {/* Hardware Asset Management */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10"
            >
              <div className="w-16 h-16 bg-[#2ECC71] rounded-xl flex items-center justify-center mb-6">
                <HardDrive className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Hardware Asset Management
              </h3>
              <ul className="space-y-4">
                {hamBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" strokeWidth={2} />
                    <span className="text-white/80 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Software Asset Management */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10"
            >
              <div className="w-16 h-16 bg-[#2ECC71] rounded-xl flex items-center justify-center mb-6">
                <FileKey className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Software Asset Management
              </h3>
              <ul className="space-y-4">
                {samBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" strokeWidth={2} />
                    <span className="text-white/80 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section >

      {/* 7️⃣ WHY SOTIOTECH */}
      < section ref={sotiotechRef} className="py-16 lg:py-32 bg-white relative overflow-hidden" >
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        < div className="absolute inset-0 pointer-events-none" >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div >

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sotiotechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Why Sotiotech for ServiceNow ITAM Implementation?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sotiotechReasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={sotiotechInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#2ECC71] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] transition-all"
              >
                <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold">
                  {reason.number}
                </div>
                <h3 className="text-xl font-bold text-[#0E2A47] mb-3">
                  {reason.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* 8️⃣ OUR ITAM IMPLEMENTATION APPROACH */}
      < section ref={approachRef} className="py-16 lg:py-32 bg-white relative overflow-hidden" >
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        < div className="absolute inset-0 pointer-events-none" >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div >

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Our ITAM Implementation Approach
            </h2>
            <p className="text-[#0E2A47] text-2xl font-semibold">Your 7-Step ITAM Success Framework</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {implementationSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={approachInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all h-full">
                  <div className="w-12 h-12 bg-[#2ECC71] rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold mx-auto">
                    {idx + 1}
                  </div>
                  <p className="text-[#0E2A47] font-semibold text-center leading-tight">
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* 9️⃣ WHAT YOU GET WITH SAM */}
      < section ref={samRef} className="py-16 lg:py-32 bg-white relative overflow-hidden" >
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        < div className="absolute inset-0 pointer-events-none" >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div >

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={samInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              What You Get with ServiceNow Software Asset Management (SAM)
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {samFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={samInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all text-center"
              >
                <div className="w-14 h-14 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-7 h-7 text-[#2ECC71]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-[#0E2A47]">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* 🔟 WHAT YOU GET WITH HAM */}
      < section ref={hamRef} className="py-16 lg:py-32 bg-white relative overflow-hidden" >
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        < div className="absolute inset-0 pointer-events-none" >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div >

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              What You Get with ServiceNow Hardware Asset Management (HAM)
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {hamFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={hamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all text-center"
              >
                <div className="w-14 h-14 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-7 h-7 text-[#2ECC71]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-[#0E2A47]">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* 1️⃣1️⃣ CLIENT SUCCESS IMPACT */}
      < section ref={successRef} className="py-16 lg:py-32 bg-white relative overflow-hidden" >
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        < div className="absolute inset-0 pointer-events-none" >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div >

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={successInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-12 tracking-tight text-3xl lg:text-[56px] font-bold">
              Client Success Impact
            </h2>
            <p className="text-[#64748B] text-xl mb-12">Organizations implementing ServiceNow ITAM report:</p>
          </motion.div>

          <div className="space-y-6">
            {successStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={successInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F8FAFC] rounded-2xl p-8 border-l-4 border-[#2ECC71] shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] transition-all"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-[#2ECC71] flex-shrink-0" strokeWidth={2} />
                  <p className="text-[#0E2A47] text-xl font-semibold">{stat}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* 1️⃣2️⃣ CLIENT LOGOS */}
      < section ref={clientsRef} className="py-16 lg:py-32 bg-white relative overflow-hidden" >
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        < div className="absolute inset-0 pointer-events-none" >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div >

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-[#0E2A47] mb-16 tracking-tight text-3xl lg:text-[48px] font-bold">
              Some of Our Clients
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-20">
              {clients.map((client, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={clientsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl font-bold text-[#64748B]">
                    {client.logo}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section >

      {/* 1️⃣3️⃣ READY TO OPTIMIZE CTA */}
      < section ref={readyRef} className="py-20 bg-[#0E2A47] relative overflow-hidden" >
        {/* Subtle radial glow for dark section */}
        < div className="absolute inset-0 opacity-20" >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div >

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={readyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-white mb-6 tracking-tight text-3xl lg:text-[48px] font-bold">
              Ready to Optimize Your IT Assets?
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-[720px] mx-auto">
              Schedule a consultation with our ServiceNow ITAM experts and unlock maximum value from your IT investments.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('book-call')}
              className="bg-[#2ECC71] text-[#0E2A47] px-12 py-6 rounded-xl font-semibold text-xl flex items-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all mx-auto"
            >
              Talk to a Trusted Advisor
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div >
      </section >

      {/* 1️⃣4️⃣ CONTACT SECTION */}
      < section ref={contactRef} className="py-32 bg-[#0E2A47] relative overflow-hidden" >
        {/* Subtle radial glow for dark section */}
        < div className="absolute inset-0 opacity-20" >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div >

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Contact Us</h3>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#2ECC71] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <a href="mailto:connect@sotiotech.com" className="text-white/80 hover:text-[#2ECC71] transition-colors text-lg">
                  connect@sotiotech.com
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6">
                  What happens after you submit the form?
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">We connect you with a ServiceNow ITAM specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Detailed requirement assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Customized ITAM roadmap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Implementation & ongoing support</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.3)] p-10">
                <h3 className="text-2xl font-bold text-[#0E2A47] mb-8">Get Started Today</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0E2A47] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47]"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0E2A47] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47]"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0E2A47] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47]"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0E2A47] mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl border border-[#E2E8F0] focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47] resize-none"
                      placeholder="Tell us about your ITAM requirements..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#2ECC71] text-[#0E2A47] px-8 py-5 rounded-xl font-semibold text-lg shadow-[0_10px_30px_rgba(46,204,113,0.3)] hover:shadow-[0_15px_40px_rgba(46,204,113,0.4)] transition-all"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section >

      <Footer />
    </div >
  );
}
