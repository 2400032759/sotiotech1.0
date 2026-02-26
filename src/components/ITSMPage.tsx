import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Zap,
  Users,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  Wrench,
  RefreshCw,
  FileText,
  Bot,
  Brain,
  Database,
  MapPin,
  BookOpen,
  Grid,
  BarChart3,
  Clock
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';

export function ITSMPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1 });
  const [howRef, howInView] = useInView({ threshold: 0.1 });
  const [advanceRef, advanceInView] = useInView({ threshold: 0.1 });
  const [suiteRef, suiteInView] = useInView({ threshold: 0.1 });
  const [modulesRef, modulesInView] = useInView({ threshold: 0.1 });
  const [clientsRef, clientsInView] = useInView({ threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const whyChooseFeatures = [
    {
      icon: Zap,
      title: 'Streamlined Operations',
      description: 'Automate workflows and reduce manual intervention for faster service delivery'
    },
    {
      icon: Users,
      title: 'Enhanced User Experience',
      description: 'Intuitive self-service portals and intelligent automation improve satisfaction'
    },
    {
      icon: TrendingUp,
      title: 'Easy Platform Scalability',
      description: 'Scale effortlessly as your business grows with flexible ServiceNow architecture'
    },
    {
      icon: DollarSign,
      title: 'Integration & Maximize ROI',
      description: 'Seamlessly integrate with existing systems to maximize investment returns'
    }
  ];

  const processSteps = [
    {
      title: 'Assessment & Strategy Development',
      description: 'We analyze your current IT environment and design a tailored ITSM strategy aligned with your business objectives.'
    },
    {
      title: 'Implementation & Integration',
      description: 'Our experts deploy ServiceNow ITSM with seamless integration into your existing technology ecosystem.'
    },
    {
      title: 'Optimization & Automation',
      description: 'We configure workflows, automate processes, and optimize the platform for maximum efficiency.'
    },
    {
      title: 'Support & Continuous Improvement',
      description: 'Ongoing support ensures your ITSM platform evolves with your business needs and industry best practices.'
    }
  ];

  const itsmModules = [
    {
      icon: AlertTriangle,
      title: 'Incident Management',
      description: 'Rapid incident resolution with intelligent routing and prioritization'
    },
    {
      icon: Wrench,
      title: 'Problem Management',
      description: 'Root cause analysis to eliminate recurring issues'
    },
    {
      icon: RefreshCw,
      title: 'Change & Release Management',
      description: 'Controlled deployment with risk assessment and approval workflows'
    },
    {
      icon: FileText,
      title: 'Request Management',
      description: 'Streamlined service request fulfillment and tracking'
    },
    {
      icon: Bot,
      title: 'Virtual Agent',
      description: 'AI-powered chatbot for instant user support'
    },
    {
      icon: Brain,
      title: 'Predictive Intelligence',
      description: 'Machine learning for proactive issue prevention'
    },
    {
      icon: Database,
      title: 'CMDB',
      description: 'Comprehensive configuration management database'
    },
    {
      icon: MapPin,
      title: 'Walk-up Experience',
      description: 'Self-service kiosks for on-site support requests'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Management',
      description: 'Centralized knowledge base for self-service solutions'
    },
    {
      icon: Grid,
      title: 'Service Catalog',
      description: 'Customizable catalog of IT services and offerings'
    },
    {
      icon: BarChart3,
      title: 'Reports & Dashboards',
      description: 'Real-time insights and analytics for decision-making'
    },
    {
      icon: Clock,
      title: 'Service Level Management',
      description: 'SLA tracking and automated escalation processes'
    }
  ];

  const clients = [
    { name: 'BT', logo: 'BT' },
    { name: 'Harman', logo: 'HARMAN' },
    { name: 'Syneos Health', logo: 'SYNEOS HEALTH' }
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
              <h1 className="text-white mb-8 tracking-tight leading-[1.1] text-6xl md:text-7xl lg:text-[72px] font-bold">
                IT Service Management
              </h1>

              <p className="text-white/80 text-xl leading-relaxed mb-12 max-w-[640px]">
                With years of expertise and ServiceNow specialization, we deliver enterprise-grade ITSM solutions that transform IT operations across the Middle East and beyond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('book-call')}
                  className="group bg-[#2ECC71] text-white px-10 py-5 rounded-full font-semibold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] hover:shadow-[0_15px_40px_rgba(46,204,113,0.4)] transition-all"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('book-call')}
                  className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-semibold text-lg hover:border-[#2ECC71] hover:bg-[#2ECC71]/10 transition-all"
                >
                  Talk to an Expert
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
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/60 to-transparent z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neSUyMG1lZXRpbmd8ZW58MXx8fHwxNzY4NTc0NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Enterprise ITSM"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ WHY & WHAT IS ITSM */}
      <section ref={whyRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-6 tracking-tight text-3xl lg:text-[56px] font-bold">
              Why and What is ITSM?
            </h2>
            <p className="text-[#64748B] text-xl leading-relaxed max-w-[720px] mx-auto">
              In today's digital enterprise landscape, ITSM is the foundation for efficient IT operations, ensuring seamless service delivery and business continuity.
            </p>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block max-w-[900px] mx-auto"
          >
            <div className="rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)] bg-[#F8FAFC] aspect-video flex items-center justify-center border border-[#E2E8F0]">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#2ECC71]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#2ECC71] border-b-8 border-b-transparent ml-1" />
                </div>
                <p className="text-[#64748B] font-medium">Video: Introduction to ITSM Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ WHY CHOOSE SERVICENOW FOR ITSM */}
      <section ref={whyChooseRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Why Choose ServiceNow for ITSM
            </h2>
          </motion.div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {whyChooseFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] hover:border-[#2ECC71] border border-transparent transition-all duration-300 h-full"
              >
                <div className="w-14 h-14 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#2ECC71]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[#0E2A47] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Highlight Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-12 shadow-[0_10px_24px_rgba(0,0,0,0.06)] border-l-4 border-[#2ECC71]"
          >
            <p className="text-[#0E2A47] text-3xl font-bold text-center leading-tight">
              30% increase in IT efficiency & 20% reduction in operational costs
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ HOW WE DO IT */}
      <section ref={howRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              How We Do It — Transformative ServiceNow Implementations
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={howInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={howInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-[#2ECC71] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={howInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1644325349124-d1756b79dd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBhYnN0cmFjdHxlbnwxfHx8fDE3Njg1NzQ3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="ServiceNow Implementation"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* CTA Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <p className="text-white text-2xl font-semibold max-w-[600px]">
              "Organizations using ServiceNow ITSM see a 35% increase in first-contact resolution rates."
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('case-studies')}
              className="bg-[#2ECC71] text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] hover:shadow-[0_15px_40px_rgba(46,204,113,0.4)] transition-all whitespace-nowrap"
            >
              Case Studies
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 5️⃣ READY TO ADVANCE */}
      <section ref={advanceRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={advanceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-[#0E2A47] mb-6 tracking-tight text-3xl lg:text-[56px] font-bold">
              Ready to Advance or Refine Your ITSM Processes?
            </h2>
            <p className="text-[#64748B] text-xl leading-relaxed max-w-[720px] mx-auto mb-12">
              Transform your IT operations with our expert ServiceNow ITSM implementation and optimization services. Let's build the future of your IT service delivery together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="bg-[#2ECC71] text-white px-12 py-5 rounded-full font-semibold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] hover:shadow-[0_15px_40px_rgba(46,204,113,0.4)] transition-all mx-auto"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ IT SERVICE MANAGEMENT SUITE */}
      <section ref={suiteRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={suiteInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#0E2A47] mb-6 tracking-tight text-3xl lg:text-[56px] font-bold">
                IT Service Management Suite — What Do You Get
              </h2>
              <p className="text-[#64748B] text-xl leading-relaxed max-w-[640px]">
                A comprehensive platform that drives optimization, automation, and analytics. Our ITSM suite enables continuous improvement across all IT service delivery functions, delivering measurable business value.
              </p>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={suiteInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4NTI4NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="ITSM Suite"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7️⃣ ITSM MODULES GRID */}
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
              ITSM Modules
            </h2>
          </motion.div>

          {/* 12 Module Cards - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itsmModules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={modulesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] hover:border-[#2ECC71] border border-transparent transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-6 h-6 text-[#2ECC71]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0E2A47] mb-2">
                      {module.title}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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

            <div className="flex flex-wrap items-center justify-center gap-16">
              {clients.map((client, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={clientsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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

      {/* 9️⃣ CONTACT & TRUSTED ADVISOR */}
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
              <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>

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
                    <span className="text-white/80">You'll be matched with a certified ServiceNow specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">We'll schedule an expert consultation to discuss your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Together we'll define your ITSM objectives and requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">We'll develop a comprehensive implementation roadmap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Our team will execute with ongoing support and optimization</span>
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
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-white/20 shadow-[0_24px_64px_rgba(0,0,0,0.3)] p-10">
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
                      placeholder="Tell us about your ITSM requirements..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#2ECC71] text-white px-8 py-5 rounded-xl font-semibold text-lg shadow-[0_10px_30px_rgba(46,204,113,0.3)] hover:shadow-[0_15px_40px_rgba(46,204,113,0.4)] transition-all"
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
