import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Shield,
  AlertTriangle,
  Activity,
  Eye,
  FileText,
  Zap,
  Users,
  TrendingUp,
  BarChart3,
  Lock,
  Network,
  Search,
  Settings,
  Play,
  ChevronDown,
  Target,
  Lightbulb,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';

export function SecOpsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [statRef, statInView] = useInView({ threshold: 0.1 });
  const [explainedRef, explainedInView] = useInView({ threshold: 0.1 });
  const [prosRef, prosInView] = useInView({ threshold: 0.1 });
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

  const secOpsSteps = [
    '01 — Link Security Products',
    '02 — Assess and Prioritize',
    '03 — Respond and Remediate',
    '04 — Monitor and Review',
    '05 — Report and Optimize'
  ];

  const prosCards = [
    {
      icon: Zap,
      title: 'Improved Response to Incidents',
      description: 'Reduce mean time to respond (MTTR) with automated workflows and unified security operations'
    },
    {
      icon: Users,
      title: 'Enhanced Collaboration',
      description: 'Break down silos between Security and IT teams for seamless incident management'
    },
    {
      icon: ShieldCheck,
      title: 'Proactive Risk Management',
      description: 'Identify and mitigate vulnerabilities before they become critical security incidents'
    },
    {
      icon: Settings,
      title: 'Automation of Processes',
      description: 'Automate repetitive security tasks and orchestrate responses across your security stack'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Leverage real-time analytics and reporting to make informed security decisions'
    },
    {
      icon: Eye,
      title: 'Increased Visibility',
      description: 'Gain complete visibility across your security landscape with centralized monitoring'
    }
  ];

  const modules = [
    {
      title: 'Security Incident Response (SIR)',
      description: 'Streamline security incident workflows with automated case management and orchestration',
      dark: false
    },
    {
      title: 'Vulnerability Response (VR)',
      description: 'Prioritize and remediate vulnerabilities based on risk and business impact',
      dark: true
    },
    {
      title: 'Threat Intelligence (TI)',
      description: 'Integrate threat feeds and intelligence sources for proactive threat detection',
      dark: true
    },
    {
      title: 'Security Orchestration, Automation & Response (SOAR)',
      description: 'Automate security operations and orchestrate responses across security tools',
      dark: false
    },
    {
      title: 'Privacy Management',
      description: 'Manage data privacy compliance and respond to privacy incidents efficiently',
      dark: false
    },
    {
      title: 'SecOps Workspace & Portal',
      description: 'Unified workspace for security teams with role-based access and dashboards',
      dark: true
    }
  ];

  const whyReasons = [
    {
      title: 'Expertise',
      description: 'Deep ServiceNow SecOps experience with certified security professionals'
    },
    {
      title: 'Tailored Solutions',
      description: 'Customized security workflows aligned with your organizational security requirements'
    },
    {
      title: 'Proven Track Record',
      description: 'Enterprise implementations across regulated industries with complex security needs'
    },
    {
      title: 'Comprehensive Support',
      description: 'End-to-end implementation and ongoing support for your security operations'
    }
  ];

  const clients = [
    { name: 'Syneos Health', logo: 'SYNEOS HEALTH' },
    { name: 'Harman', logo: 'HARMAN' },
    { name: 'US Bank', logo: 'US BANK' }
  ];

  const faqs = [
    {
      question: 'What is ServiceNow SecOps?',
      answer: 'ServiceNow Security Operations (SecOps) is a comprehensive platform that integrates security and IT operations to streamline incident response, vulnerability management, and threat intelligence. It enables organizations to detect, investigate, and respond to security threats faster by automating workflows and breaking down silos between teams.'
    },
    {
      question: 'How does ServiceNow SecOps improve incident response?',
      answer: 'ServiceNow SecOps improves incident response by automating security workflows, orchestrating responses across security tools, and providing unified visibility into security incidents. This reduces mean time to respond (MTTR) by up to 50% and enables security teams to prioritize and remediate threats based on risk and business impact.'
    },
    {
      question: 'Which modules are included in ServiceNow SecOps?',
      answer: 'ServiceNow SecOps includes Security Incident Response (SIR), Vulnerability Response (VR), Threat Intelligence (TI), Security Orchestration, Automation & Response (SOAR), Privacy Management, and SecOps Workspace & Portal. Each module integrates seamlessly to provide end-to-end security operations management.'
    },
    {
      question: 'How do I implement ServiceNow SecOps in my organization?',
      answer: 'Implementation begins with an assessment of your current security operations, followed by designing customized workflows, configuring modules, integrating security tools, training your team, and going live with ongoing optimization. Sotiotech provides end-to-end implementation services tailored to your organization\'s security requirements.'
    },
    {
      question: 'What does ServiceNow SecOps cost?',
      answer: 'ServiceNow SecOps pricing depends on your organization size, required modules, and implementation complexity. Contact our SecOps experts for a customized quote based on your specific security operations requirements and organizational needs.'
    },
    {
      question: 'Who is the best implementation partner for ServiceNow SecOps?',
      answer: 'Sotiotech is a trusted ServiceNow implementation partner with deep expertise in Security Operations, certified professionals, and a proven track record of successful enterprise implementations. We provide tailored solutions and comprehensive support throughout your SecOps journey.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white">
      {/* 1️⃣ HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#0E2A47] pt-24 pb-12 lg:pt-32 lg:pb-20">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-8 tracking-tight leading-[1.1] text-4xl md:text-5xl lg:text-[64px] font-bold">
                Enhancing Incident Response and Threat Management with ServiceNow SecOps Implementation
              </h1>

              <p className="text-white/80 text-xl lg:text-2xl leading-relaxed mb-12 max-w-[640px]">
                Leverage ServiceNow SecOps to enhance the efficiency of your security operations
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('book-call')}
                className="group bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
              >
                Talk To Our SecOps Expert
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
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1693314184947-af516631ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc2ODU1NTUzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="ServiceNow Security Operations"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2ECC71]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ STAT HIGHLIGHT STRIP */}
      <section ref={statRef} className="py-12 bg-[#2ECC71] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[#0E2A47] text-xl md:text-3xl font-bold leading-tight">
              SecOps implementation accelerates security processes by up to 50% by automating workflows and improving collaboration between Security and IT teams
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ SERVICENOW SECOPS EXPLAINED */}
      <section ref={explainedRef} className="py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Vertical Steps Diagram */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={explainedInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Vertical connecting line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-[#2ECC71]/30" />

              <div className="space-y-6">
                {secOpsSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={explainedInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="relative flex items-center gap-6"
                  >
                    {/* Number circle */}
                    <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_20px_rgba(46,204,113,0.5)]">
                      <span className="text-[#0E2A47] font-bold text-xl">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Step text */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex-1">
                      <p className="text-white text-lg font-semibold">
                        {step.split(' — ')[1]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Explanatory Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={explainedInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-white mb-8 tracking-tight text-3xl lg:text-[56px] font-bold">
                ServiceNow SecOps Explained
              </h2>
              <div className="space-y-6 text-white/80 text-xl leading-relaxed">
                <p>
                  ServiceNow Security Operations (SecOps) integrates Security and IT Operations into a unified platform, enabling organizations to detect, investigate, and respond to security threats faster and more efficiently.
                </p>
                <p>
                  By automating security workflows and orchestrating responses across your security stack, SecOps reduces the impact of threats and improves overall security posture.
                </p>
                <p>
                  With built-in vulnerability management, threat intelligence integration, and automated incident response capabilities, SecOps empowers your security teams to stay ahead of emerging threats.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ PROS OF SERVICENOW SECURITY OPERATIONS */}
      <section ref={prosRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={prosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Pros of ServiceNow Security Operations
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prosCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={prosInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all"
              >
                <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-6">
                  <card.icon className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[#0E2A47] mb-4">
                  {card.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ VIDEO SECTION */}
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
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              How ServiceNow Security Operations Can Benefit Your Business
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={videoInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)] mb-12"
          >
            <div className="relative bg-gradient-to-br from-[#1a3a52] to-[#0E2A47] aspect-video flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767972464040-8bfee42d7bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2VjdXJpdHklMjBsb2NrfGVufDF8fHx8MTc2ODQ1Mjg1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="ServiceNow SecOps Benefits"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-24 h-24 bg-[#2ECC71] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(46,204,113,0.6)] hover:shadow-[0_0_60px_rgba(46,204,113,0.8)] transition-all"
              >
                <Play className="w-10 h-10 text-white ml-1" fill="white" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#2ECC71] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <p className="text-[#0E2A47] text-xl font-semibold">
              Reduce security incident response time from hours to minutes with automated workflows
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('case-studies')}
              className="bg-[#0E2A47] text-white px-10 py-4 rounded-xl font-semibold whitespace-nowrap shadow-[0_10px_30px_rgba(14,42,71,0.3)] transition-all"
            >
              Case Studies
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ EXPLORE KEY MODULES */}
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
              Explore the Key Modules of ServiceNow SecOps
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={modulesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`rounded-2xl p-8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] border transition-all ${module.dark
                  ? 'bg-[#0E2A47] border-[#2ECC71]/20 hover:border-[#2ECC71]'
                  : 'bg-white border-[#E2E8F0] hover:border-[#2ECC71]'
                  }`}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className={`w-7 h-7 flex-shrink-0 mt-1 ${module.dark ? 'text-[#2ECC71]' : 'text-[#2ECC71]'}`} strokeWidth={2} />
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${module.dark ? 'text-white' : 'text-[#0E2A47]'}`}>
                      {module.title}
                    </h3>
                    <p className={`leading-relaxed ${module.dark ? 'text-white/70' : 'text-[#64748B]'}`}>
                      {module.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ WHY SECOPS WITH SOTIOTECH */}
      <section ref={whyRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Why SecOps with Sotiotech?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {whyReasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#2ECC71] transition-all"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-[#2ECC71] flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('case-studies')}
              className="bg-[#2ECC71] text-[#0E2A47] px-12 py-5 rounded-xl font-semibold text-lg shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
            >
              Explore Case Studies
            </motion.button>
          </motion.div>
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

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
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
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-[#E2E8F0] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="text-xl font-bold text-[#0E2A47] pr-4">
                    {faq.question}
                  </span>
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
                      <div className="px-8 pb-8 pt-0">
                        <p className="text-[#64748B] text-lg leading-relaxed">
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

      {/* 🔟 CONTACT SECTION */}
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
                  What happens after you fill out the form?
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">We connect you with a ServiceNow SecOps specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Detailed security operations assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Customized SecOps implementation roadmap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Implementation & ongoing security support</span>
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
                      placeholder="Tell us about your security operations requirements..."
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
