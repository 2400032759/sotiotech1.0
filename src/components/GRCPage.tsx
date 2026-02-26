import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Shield,
  FileCheck,
  BarChart3,
  Bell,
  Users,
  Layers,
  FileText,
  AlertTriangle,
  ClipboardCheck,
  Building2,
  Activity,
  Layout,
  Target,
  Lightbulb,
  UserCheck,
  Zap,
  Play,
  ChevronDown
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';

export function GRCPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [impactRef, impactInView] = useInView({ threshold: 0.1 });
  const [whatRef, whatInView] = useInView({ threshold: 0.1 });
  const [advantagesRef, advantagesInView] = useInView({ threshold: 0.1 });
  const [videoRef, videoInView] = useInView({ threshold: 0.1 });
  const [modulesRef, modulesInView] = useInView({ threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [clientsRef, clientsInView] = useInView({ threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const advantages = [
    {
      icon: Shield,
      title: 'Integrated Risk Management',
      description: 'Unified platform for identifying, assessing, and mitigating risks across the enterprise'
    },
    {
      icon: FileCheck,
      title: 'Automated Compliance Management',
      description: 'Streamline regulatory compliance with automated workflows and audit trails'
    },
    {
      icon: BarChart3,
      title: 'Enhanced Visibility & Reporting',
      description: 'Real-time dashboards and comprehensive reporting for informed decision-making'
    },
    {
      icon: Bell,
      title: 'Optimized Incident Response',
      description: 'Rapid identification and resolution of compliance incidents and risks'
    },
    {
      icon: Users,
      title: 'Improved Collaboration & Accountability',
      description: 'Cross-functional collaboration with clear ownership and responsibilities'
    },
    {
      icon: Layers,
      title: 'Scalable & Configurable Architecture',
      description: 'Flexible platform that grows with your organization\'s evolving needs'
    }
  ];

  const grcModules = [
    {
      icon: FileText,
      title: 'Policy & Compliance Management',
      description: 'Centralized policy library with automated compliance tracking and attestation',
      dark: false
    },
    {
      icon: AlertTriangle,
      title: 'Risk Management',
      description: 'Comprehensive risk identification, assessment, and mitigation workflows',
      dark: true
    },
    {
      icon: ClipboardCheck,
      title: 'Audit Management',
      description: 'Streamlined audit planning, execution, and issue tracking capabilities',
      dark: false
    },
    {
      icon: Building2,
      title: 'Vendor Risk Management',
      description: 'Third-party risk assessment and continuous vendor monitoring',
      dark: true
    },
    {
      icon: Activity,
      title: 'Business Continuity Management',
      description: 'Ensure operational resilience with comprehensive BCM planning',
      dark: false
    },
    {
      icon: Layout,
      title: 'GRC Portal & Workspace',
      description: 'Customizable dashboards and executive reporting for stakeholders',
      dark: true
    }
  ];

  const whyPoints = [
    'Innovative Integration Expertise',
    'User-Centric Implementation Approach',
    'Scalable Enterprise-Grade Solutions',
    'Dedicated GRC Specialists'
  ];

  const faqs = [
    {
      question: 'How does ServiceNow GRC improve risk management?',
      answer: 'ServiceNow GRC provides a centralized platform for identifying, assessing, and mitigating risks across your organization. With automated workflows, real-time dashboards, and integrated risk assessments, you gain complete visibility into your risk landscape. The platform enables proactive risk management through continuous monitoring, intelligent alerts, and comprehensive reporting capabilities.'
    },
    {
      question: 'What are the benefits of using ServiceNow GRC?',
      answer: 'Key benefits include: unified governance framework, automated compliance workflows, real-time risk visibility, streamlined audit management, improved collaboration across teams, reduced manual effort through automation, comprehensive reporting and analytics, and seamless integration with other ServiceNow modules. Organizations typically see 35% improvement in risk response time and higher compliance accuracy.'
    },
    {
      question: 'Can ServiceNow GRC be customized?',
      answer: 'Yes, ServiceNow GRC is highly configurable and can be tailored to your organization\'s specific requirements. You can customize workflows, risk frameworks, compliance policies, assessment templates, and reporting dashboards. The platform supports industry-specific regulations and can be adapted to meet unique governance structures and risk appetites.'
    },
    {
      question: 'How does GRC integrate with other ServiceNow modules?',
      answer: 'ServiceNow GRC seamlessly integrates with ITSM, ITOM, SecOps, and other ServiceNow modules on the Now Platform. This integration enables end-to-end visibility across IT operations, security, and compliance. For example, security incidents can automatically trigger risk assessments, and IT changes can be evaluated against compliance policies in real-time.'
    },
    {
      question: 'Do you provide GRC implementation in Middle East regions?',
      answer: 'Yes, Sotiotech provides comprehensive ServiceNow GRC implementation services across Middle East regions including Saudi Arabia, UAE, and other GCC countries. Our regional expertise ensures compliance with local regulations and industry standards while delivering enterprise-grade GRC solutions tailored to your market requirements.'
    }
  ];

  const clients = [
    { name: 'Harman', logo: 'HARMAN' },
    { name: 'John Deere', logo: 'JOHN DEERE' },
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

        {/* Subtle geometric shapes */}
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
                ServiceNow GRC Solutions – Streamline Governance, Risk & Compliance
              </h1>

              <p className="text-[#64748B] text-xl leading-relaxed mb-12 max-w-[640px]">
                Automate risk management, strengthen compliance, and gain real-time visibility into governance with ServiceNow GRC.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('book-call')}
                  className="group bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
                >
                  Talk to an Expert
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('case-studies')}
                  className="px-10 py-5 rounded-xl font-semibold text-lg border-2 border-[#0E2A47] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white transition-all"
                >
                  View Case Studies
                </motion.button>
              </div>
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
                  src="https://images.unsplash.com/photo-1767972464040-8bfee42d7bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZ292ZXJuYW5jZSUyMGNvbXBsaWFuY2V8ZW58MXx8fHwxNzY4NTc2NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="GRC Governance Risk Compliance"
                  className="w-full h-[600px] object-cover"
                />
                {/* Abstract overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ IMPACT STRIP */}
      <section ref={impactRef} className="py-12 bg-[#2ECC71] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[#0E2A47] text-xl md:text-3xl font-bold leading-tight max-w-[1000px] mx-auto">
              Organizations using ServiceNow GRC see up to 35% improvement in risk response time and higher compliance accuracy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ WHAT IS SERVICENOW GRC */}
      <section ref={whatRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whatInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              What is ServiceNow GRC?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whatInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#64748B] text-xl leading-relaxed max-w-[640px]">
                ServiceNow GRC integrates governance, risk, and compliance into a single platform, enabling organizations to identify risks, enforce policies, ensure regulatory compliance, and gain real-time insights across the enterprise.
              </p>
            </motion.div>

            {/* Right Flow Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={whatInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[400px] flex items-center justify-center">
                {/* Circular Flow */}
                <div className="relative w-[350px] h-[350px]">
                  {/* Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-[#2ECC71] rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(46,204,113,0.3)]">
                      <Shield className="w-16 h-16 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Governance */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={whatInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4"
                  >
                    <div className="bg-white border-2 border-[#2ECC71] rounded-xl px-6 py-3 shadow-lg">
                      <p className="text-[#0E2A47] font-bold whitespace-nowrap">Governance</p>
                    </div>
                  </motion.div>

                  {/* Risk */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={whatInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"
                  >
                    <div className="bg-white border-2 border-[#2ECC71] rounded-xl px-6 py-3 shadow-lg">
                      <p className="text-[#0E2A47] font-bold whitespace-nowrap">Risk</p>
                    </div>
                  </motion.div>

                  {/* Compliance */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={whatInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4"
                  >
                    <div className="bg-white border-2 border-[#2ECC71] rounded-xl px-6 py-3 shadow-lg">
                      <p className="text-[#0E2A47] font-bold whitespace-nowrap">Compliance</p>
                    </div>
                  </motion.div>

                  {/* Monitoring */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={whatInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"
                  >
                    <div className="bg-white border-2 border-[#2ECC71] rounded-xl px-6 py-3 shadow-lg">
                      <p className="text-[#0E2A47] font-bold whitespace-nowrap">Monitoring</p>
                    </div>
                  </motion.div>

                  {/* Connecting Circle */}
                  <div className="absolute inset-0 border-2 border-dashed border-[#2ECC71]/30 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ ADVANTAGES OF SERVICENOW GRC */}
      <section ref={advantagesRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Advantages of ServiceNow GRC
            </h2>
          </motion.div>

          {/* 2 rows × 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] transition-all"
              >
                <div className="w-14 h-14 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-6">
                  <advantage.icon className="w-7 h-7 text-[#2ECC71]" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-[#0E2A47] mb-3">
                  {advantage.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ VIDEO / EXPLAINER */}
      <section ref={videoRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              How ServiceNow GRC Works
            </h2>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)] bg-gradient-to-br from-[#0E2A47] to-[#1a3d5a] aspect-video flex items-center justify-center border border-[#2ECC71]/20 cursor-pointer group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1591492835122-79ae33cd19f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXNrJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njg1NzY0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="GRC Dashboard"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/80 to-transparent" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute w-24 h-24 bg-[#2ECC71] rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(46,204,113,0.4)] group-hover:shadow-[0_25px_60px_rgba(46,204,113,0.6)] transition-all"
              >
                <Play className="w-12 h-12 text-white ml-2" fill="white" />
              </motion.div>
            </div>
            <p className="text-white/60 text-center mt-6 text-sm">
              Discover how ServiceNow GRC transforms governance, risk, and compliance management
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ MODULES OVERVIEW */}
      <section ref={modulesRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={modulesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              ServiceNow GRC Modules
            </h2>
          </motion.div>

          {/* 2 × 3 Grid with alternating dark/light */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grcModules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={modulesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`rounded-2xl p-8 shadow-[0_10px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.15)] transition-all ${module.dark
                  ? 'bg-[#0E2A47] border border-[#2ECC71]/20'
                  : 'bg-white border border-[#E2E8F0]'
                  }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${module.dark ? 'bg-[#2ECC71]' : 'bg-[#2ECC71]/10'
                  }`}>
                  <module.icon className={`w-7 h-7 ${module.dark ? 'text-white' : 'text-[#2ECC71]'}`} strokeWidth={2} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${module.dark ? 'text-white' : 'text-[#0E2A47]'}`}>
                  {module.title}
                </h3>
                <p className={`leading-relaxed ${module.dark ? 'text-white/70' : 'text-[#64748B]'}`}>
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ WHY GRC WITH SOTIOTECH */}
      <section ref={whyRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Why GRC with Sotiotech
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Bullet Points */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {whyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2ECC71] rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {point}
                    </h3>
                  </div>
                </div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('case-studies')}
                className="group bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all mt-8"
              >
                View GRC Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Right Column - Visual Checklist */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Target className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                    <p className="text-white text-lg">Strategic GRC alignment</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Lightbulb className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                    <p className="text-white text-lg">Innovative automation</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <UserCheck className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                    <p className="text-white text-lg">Certified specialists</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Zap className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                    <p className="text-white text-lg">Rapid deployment</p>
                  </div>
                </div>

                {/* Abstract graphic */}
                <div className="mt-10 relative h-40">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2ECC71]/20 to-transparent rounded-2xl" />
                  <div className="absolute top-1/2 left-1/4 w-20 h-20 border-4 border-[#2ECC71] rounded-full -translate-y-1/2 opacity-30" />
                  <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#2ECC71]/20 rounded-xl -translate-y-1/2 rotate-12" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8️⃣ CLIENT LOGOS */}
      <section ref={clientsRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

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
      </section>

      {/* 9️⃣ FAQ SECTION */}
      <section ref={faqRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1000px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden border border-[#E2E8F0]"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#F8FAFC] transition-colors"
                >
                  <h3 className="text-lg font-bold text-[#0E2A47] pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaqIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#2ECC71] flex-shrink-0" strokeWidth={2} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-[#64748B] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔟 FINAL CTA + CONTACT */}
      <section ref={contactRef} className="py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-bold text-white mb-4">Talk to a Trusted Advisor</h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Get expert guidance on implementing ServiceNow GRC solutions tailored to your organization's governance, risk, and compliance requirements.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#2ECC71] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <a href="mailto:connect@sotiotech.com" className="text-white/80 hover:text-[#2ECC71] transition-colors text-lg">
                  connect@sotiotech.com
                </a>
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
                      placeholder="Tell us about your GRC requirements..."
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
      </section>

      <Footer />
    </div>
  );
}
