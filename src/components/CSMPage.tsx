import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Smile,
  TrendingUp,
  BarChart3,
  Layers,
  Zap,
  Target,
  Eye,
  Users,
  MessageSquare,
  BookOpen,
  ShoppingBag,
  Bot,
  Headphones,
  LineChart,
  Wrench,
  ThumbsUp,
  UserCheck,
  Briefcase,
  Play,
  Settings,
  Award,
  HeartHandshake
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';

export function CSMPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [whatRef, whatInView] = useInView({ threshold: 0.1 });
  const [videoRef, videoInView] = useInView({ threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [howRef, howInView] = useInView({ threshold: 0.1 });
  const [sotiotechRef, sotiotechInView] = useInView({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1 });
  const [modulesRef, modulesInView] = useInView({ threshold: 0.1 });
  const [clientsRef, clientsInView] = useInView({ threshold: 0.1 });
  const [finalCtaRef, finalCtaInView] = useInView({ threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });

  const [selectedStep, setSelectedStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const whatHighlights = [
    {
      icon: Smile,
      title: 'Enhanced Customer Experience',
      description: 'Deliver personalized, proactive support across every touchpoint.'
    },
    {
      icon: TrendingUp,
      title: 'Increased Operational Efficiency',
      description: 'Automate workflows and reduce manual tasks by up to 60%.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Real-time analytics to optimize service performance.'
    },
    {
      icon: Layers,
      title: 'Scalable & Flexible Platform',
      description: 'Grow seamlessly from startup to enterprise scale.'
    }
  ];

  const whyBenefits = [
    {
      icon: Smile,
      title: 'Improved Customer Experience',
      description: 'Deliver personalized, seamless support across all channels'
    },
    {
      icon: Zap,
      title: 'Higher Productivity',
      description: 'Automate routine tasks and empower agents with AI-driven tools'
    },
    {
      icon: Eye,
      title: 'Real-Time Insights',
      description: 'Access comprehensive analytics for data-driven decisions'
    },
    {
      icon: Target,
      title: 'Easy Scalability',
      description: 'Grow your customer service capabilities with your business'
    }
  ];

  const processFlow = [
    {
      title: 'Automate Case Handling',
      description: 'Intelligent routing and automated workflows reduce manual effort'
    },
    {
      title: 'Unified Omnichannel Support',
      description: 'Seamless experience across email, chat, phone, and social media'
    },
    {
      title: 'Advanced Analytics & Reporting',
      description: 'Real-time dashboards and insights for continuous improvement'
    },
    {
      title: 'Workflow Automation',
      description: 'Streamline processes and accelerate resolution times'
    }
  ];

  const implementationSteps = [
    {
      title: 'Discovery & Planning',
      content: [
        'Stakeholder interviews and requirements gathering',
        'Process mapping of current customer service workflows',
        'Goal definition aligned with customer experience objectives',
        'Alignment with CX KPIs and SLA requirements'
      ]
    },
    {
      title: 'Customization & Configuration',
      content: [
        'Platform configuration tailored to your business needs',
        'Custom workflow development and automation setup',
        'User interface customization for optimal agent experience',
        'SLA & response-time optimization'
      ]
    },
    {
      title: 'System Integration',
      content: [
        'Integration with existing CRM, ERP, and business systems',
        'Data migration and validation processes',
        'API configuration for third-party tools',
        'Omnichannel connectivity setup'
      ]
    },
    {
      title: 'Training & Enablement',
      content: [
        'Comprehensive agent training programs',
        'Administrator certification and knowledge transfer',
        'Best practices workshops for team leads',
        'User documentation and support materials'
      ]
    },
    {
      title: 'Continuous Improvement',
      content: [
        'Post-implementation performance monitoring',
        'Regular optimization reviews and updates',
        'Ongoing support and troubleshooting',
        'Evolution with ServiceNow platform enhancements'
      ]
    }
  ];

  const sotiotechFeatures = [
    {
      icon: Settings,
      title: 'Tailored Solutions for Optimal Performance',
      description: 'Custom CSM configurations designed to meet your unique customer service requirements'
    },
    {
      icon: Layers,
      title: 'Unified Systems for Streamlined Operations',
      description: 'Seamless integration with existing business systems for end-to-end efficiency'
    },
    {
      icon: Award,
      title: 'In-Depth Team Enablement & Knowledge Transfer',
      description: 'Comprehensive training programs to empower your customer service teams'
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Long-Term Support & Optimization',
      description: '24/7 support and continuous platform optimization for sustained success'
    }
  ];

  const csmBenefits = [
    {
      icon: Headphones,
      title: 'Deliver Seamless & Personalized Support',
      description: 'Provide consistent, personalized customer experiences across all touchpoints with unified case management and customer history.'
    },
    {
      icon: Zap,
      title: 'Automate & Streamline Service Processes',
      description: 'Reduce manual effort and accelerate resolution times with intelligent automation and workflow orchestration.'
    },
    {
      icon: LineChart,
      title: 'Stay Ahead with Powerful Analytics',
      description: 'Gain actionable insights from real-time dashboards, predictive analytics, and comprehensive reporting capabilities.'
    },
    {
      icon: TrendingUp,
      title: 'Scale Easily with Business Growth',
      description: 'Expand your customer service operations effortlessly with a flexible platform that grows with your business needs.'
    }
  ];

  const csmModules = [
    {
      icon: MessageSquare,
      title: 'Case Management',
      description: 'Centralized case tracking and resolution'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Management',
      description: 'Self-service knowledge base for customers'
    },
    {
      icon: ShoppingBag,
      title: 'Service Catalog',
      description: 'Organized catalog of customer services'
    },
    {
      icon: Bot,
      title: 'Virtual Agent',
      description: 'AI-powered chatbot for instant support'
    },
    {
      icon: Headphones,
      title: 'Omni-Channel Support',
      description: 'Unified support across all channels'
    },
    {
      icon: BarChart3,
      title: 'Customer Service Analytics',
      description: 'Real-time insights and reporting'
    },
    {
      icon: Wrench,
      title: 'Field Service Management',
      description: 'Coordinate on-site service delivery'
    },
    {
      icon: ThumbsUp,
      title: 'Customer Feedback & Surveys',
      description: 'Capture and analyze customer sentiment'
    },
    {
      icon: Target,
      title: 'Service Level Management',
      description: 'SLA tracking and automated escalation'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Customer community and peer support'
    },
    {
      icon: UserCheck,
      title: 'Onboarding & Transitions',
      description: 'Smooth customer onboarding processes'
    },
    {
      icon: Briefcase,
      title: 'Asset Management',
      description: 'Track customer assets and entitlements'
    }
  ];

  const clients = [
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
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#0E2A47] pt-24 pb-12 lg:pt-32 lg:pb-20">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        {/* Diagonal green accent shape */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#2ECC71]/10 to-transparent transform skew-x-12" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 items-center">
            {/* Left Content (60%) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-8 tracking-tight leading-[1.1] text-4xl md:text-5xl lg:text-[64px] font-bold">
                ServiceNow Customer Service Management
              </h1>

              <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-12 max-w-[640px]">
                Omnichannel, people-centric ServiceNow CSM solutions that elevate customer experience and accelerate resolution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('book-call')}
                  className="group bg-[#2ECC71] text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
                >
                  Request a Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('book-call')}
                  className="text-white hover:text-[#2ECC71] font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  Talk to a CSM Expert
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Visual (40%) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/60 to-transparent z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4NTU3NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Customer Service Management"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ WHAT IS SERVICENOW CSM */}
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
            <span className="inline-block px-4 py-2 bg-[#2ECC71]/10 text-[#2ECC71] font-semibold rounded-full text-sm mb-4">
              PLATFORM OVERVIEW
            </span>
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              What is CSM in ServiceNow?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whatInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-[#64748B] text-lg lg:text-xl leading-relaxed">
                ServiceNow Customer Service Management (CSM) is a powerful platform designed to streamline customer interactions, automate service processes, and deliver seamless omnichannel support. It integrates case management, workflows, analytics, and AI to improve response times, customer satisfaction, and operational efficiency.
              </p>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-[#2ECC71]/5 to-[#2ECC71]/10 border border-[#2ECC71]/20">
                  <div className="text-3xl lg:text-4xl font-bold text-[#2ECC71] mb-1">60%</div>
                  <div className="text-xs lg:text-sm text-[#64748B]">Faster Resolution</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-[#0E2A47]/5 to-[#0E2A47]/10 border border-[#0E2A47]/10">
                  <div className="text-3xl lg:text-4xl font-bold text-[#0E2A47] mb-1">40%</div>
                  <div className="text-xs lg:text-sm text-[#64748B]">Cost Reduction</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-[#2ECC71]/5 to-[#2ECC71]/10 border border-[#2ECC71]/20">
                  <div className="text-3xl lg:text-4xl font-bold text-[#2ECC71] mb-1">95%</div>
                  <div className="text-xs lg:text-sm text-[#64748B]">CSAT Score</div>
                </div>
              </div>
            </motion.div>

            {/* Right Highlights - 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {whatHighlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={whatInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="group bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[#E2E8F0] hover:border-[#2ECC71] hover:shadow-[0_20px_50px_rgba(46,204,113,0.15)] transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2ECC71] to-[#27AE60] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="text-[#0E2A47] font-bold text-lg mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ VIDEO SECTION */}
      <section ref={videoRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Unlocking the Power of ServiceNow CSM Globally
            </h2>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[900px] mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.1)] bg-[#0E2A47] aspect-video flex items-center justify-center border border-[#2ECC71]/20 cursor-pointer group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njg1NjQ2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="CSM Analytics Dashboard"
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
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ WHY SERVICENOW CSM */}
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
              Why ServiceNow CSM?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Benefits */}
            <div className="space-y-6">
              {whyBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={whyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#2ECC71] rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Process Flow */}
            <div className="relative">
              {/* Curved line connector */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#2ECC71] to-[#2ECC71]/20" />

              <div className="space-y-8">
                {processFlow.map((process, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    animate={whyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 w-12 h-12 bg-[#2ECC71]/20 rounded-full flex items-center justify-center border-4 border-[#0E2A47]">
                      <div className="w-4 h-4 bg-[#2ECC71] rounded-full" />
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                      <h4 className="text-lg font-bold text-white mb-2">
                        {process.title}
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ HOW WE DO IT */}
      <section ref={howRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              How We Do It
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12">
            {/* Left - Step Navigation */}
            <div className="space-y-3">
              {implementationSteps.map((step, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={howInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setSelectedStep(idx)}
                  className={`w-full text-left px-6 py-5 rounded-xl font-semibold text-lg transition-all ${selectedStep === idx
                    ? 'bg-[#2ECC71] text-white shadow-[0_10px_30px_rgba(46,204,113,0.3)]'
                    : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0]'
                    }`}
                >
                  {step.title}
                </motion.button>
              ))}
            </div>

            {/* Right - Content Box */}
            <motion.div
              key={selectedStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F8FAFC] rounded-3xl p-10 border border-[#E2E8F0]"
            >
              <h3 className="text-2xl font-bold text-[#0E2A47] mb-6">
                {implementationSteps[selectedStep].title}
              </h3>
              <ul className="space-y-4">
                {implementationSteps[selectedStep].content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[#64748B] text-lg leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6️⃣ WHY SOTIOTECH FOR CSM */}
      <section ref={sotiotechRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sotiotechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-8 tracking-tight text-3xl lg:text-[56px] font-bold">
              Why Sotiotech for CSM?
            </h2>
            <p className="text-white/80 text-xl leading-relaxed max-w-[800px] mx-auto">
              Choose Sotiotech for ServiceNow CSM and elevate your customer relationship management with enterprise-grade expertise and regional excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sotiotechFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={sotiotechInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[#103851] rounded-2xl p-8 shadow-[0_10px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.15)] transition-all"
                style={{ backgroundColor: '#103851' }}
              >
                <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8" strokeWidth={2} style={{ color: '#2ADD94' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2ADD94' }}>
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ BENEFITS OF SERVICENOW CSM */}
      <section ref={benefitsRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              The Benefits of ServiceNow CSM Implementation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {csmBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#103851] rounded-2xl p-8 shadow-lg border border-transparent hover:border-[#00EE61] transition-all group"
                style={{ backgroundColor: '#103851' }}
              >
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7" strokeWidth={2} style={{ color: '#2ADD94' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2ADD94' }}>
                  {benefit.title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <div className="h-1 w-0 bg-[#2ECC71] group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ SERVICENOW CSM MODULES */}
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
              Explore Our Full Range of ServiceNow CSM Modules
            </h2>
          </motion.div>

          {/* 12 Module Cards - 3x4 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {csmModules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={modulesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-[#103851] rounded-2xl p-6 shadow-lg border border-[#E2E8F0]/10 hover:border-[#00EE61] hover:shadow-[0_12px_28px_rgba(46,204,113,0.15)] transition-all cursor-pointer group"
                style={{ backgroundColor: '#103851' }}
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4">
                  <module.icon className="w-6 h-6" strokeWidth={2} style={{ color: '#2ADD94' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#2ADD94' }}>
                  {module.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9️⃣ CLIENT LOGOS */}
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

      {/* 🔟 FINAL CTA STRIP */}
      <section ref={finalCtaRef} className="py-12 bg-[#2ECC71] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={finalCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <h3 className="text-[#0E2A47] text-3xl md:text-4xl font-bold leading-tight max-w-[700px]">
              Get in Touch for ServiceNow CSM Solutions – Contact Us Today!
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('book-call')}
              className="bg-[#0E2A47] text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(14,42,71,0.3)] transition-all whitespace-nowrap"
            >
              Book an Expert Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 1️⃣1️⃣ CONTACT SECTION */}
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
                  What happens after you fill the form?
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Matched with a ServiceNow CSM specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Expert discussion on your customer service challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Detailed requirement analysis and gap assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Customized implementation roadmap development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Execution and ongoing support for sustained success</span>
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
                      placeholder="Tell us about your customer service requirements..."
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
