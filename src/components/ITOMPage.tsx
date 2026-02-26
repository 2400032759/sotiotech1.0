import { motion, useAnimation } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Eye,
  Zap,
  TrendingDown,
  TrendingUp,
  Brain,
  Search,
  Share2,
  Cloud,
  Gauge,
  Workflow,
  BarChart3,
  RefreshCw,
  Database,
  Plus,
  Minus,
  MessageCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { Footer } from './Footer';

export function ITOMPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [statRef, statInView] = useInView({ threshold: 0.1 });
  const [whatWhyRef, whatWhyInView] = useInView({ threshold: 0.1 });
  const [solutionsRef, solutionsInView] = useInView({ threshold: 0.1 });
  const [caseStudyRef, caseStudyInView] = useInView({ threshold: 0.1 });
  const [howRef, howInView] = useInView({ threshold: 0.1 });
  const [clientsRef, clientsInView] = useInView({ threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Animated counter for stats
  const [efficiency, setEfficiency] = useState(0);
  const [downtime, setDowntime] = useState(0);

  useEffect(() => {
    if (statInView) {
      let efficiencyCounter = 0;
      let downtimeCounter = 0;
      const interval = setInterval(() => {
        if (efficiencyCounter < 25) {
          efficiencyCounter += 1;
          setEfficiency(efficiencyCounter);
        }
        if (downtimeCounter < 15) {
          downtimeCounter += 1;
          setDowntime(downtimeCounter);
        }
        if (efficiencyCounter >= 25 && downtimeCounter >= 15) {
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [statInView]);

  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatWhyFeatures = [
    {
      icon: Eye,
      title: 'Enhanced Visibility & Control',
      description: 'Gain complete visibility into your IT infrastructure with real-time monitoring and control capabilities.'
    },
    {
      icon: Zap,
      title: 'Automated Operations & Incident Management',
      description: 'Automate routine tasks and incident response to reduce manual effort and accelerate resolution.'
    },
    {
      icon: TrendingUp,
      title: 'Improved Efficiency & Cost Savings',
      description: 'Optimize resource utilization and reduce operational costs through intelligent automation.'
    },
    {
      icon: Brain,
      title: 'Proactive Problem Management & Predictive Insights',
      description: 'Leverage AI and machine learning to predict and prevent issues before they impact business.'
    }
  ];

  const solutions = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery',
      description: 'Automatically discover and map your entire IT infrastructure with comprehensive asset visibility.'
    },
    {
      number: '02',
      icon: Share2,
      title: 'Service Mapping',
      description: 'Visualize business service dependencies and understand the impact of changes across your infrastructure.'
    },
    {
      number: '03',
      icon: Cloud,
      title: 'Cloud Management',
      description: 'Manage multi-cloud environments with unified visibility and governance across all platforms.'
    },
    {
      number: '04',
      icon: Gauge,
      title: 'Capacity Management',
      description: 'Optimize resource allocation and plan for future capacity needs with predictive analytics.'
    },
    {
      number: '05',
      icon: Workflow,
      title: 'Automation & Workflow Management',
      description: 'Streamline IT operations with intelligent automation and orchestration workflows.'
    },
    {
      number: '06',
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Monitor and analyze IT performance metrics to drive continuous improvement initiatives.'
    },
    {
      number: '07',
      icon: RefreshCw,
      title: 'Change Management',
      description: 'Control and track all IT changes with risk assessment and approval workflows.'
    },
    {
      number: '08',
      icon: Database,
      title: 'Configuration Management Database (CMDB)',
      description: 'Maintain accurate configuration data as the foundation for all IT operations management.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Assessment',
      description: 'We conduct a comprehensive evaluation of your current IT operations, identifying gaps and opportunities for improvement.'
    },
    {
      number: '02',
      title: 'Implementation',
      description: 'Our experts deploy ServiceNow ITOM modules with seamless integration into your existing technology ecosystem.'
    },
    {
      number: '03',
      title: 'Optimization',
      description: 'We fine-tune workflows, automate processes, and configure the platform for maximum operational efficiency.'
    },
    {
      number: '04',
      title: 'Support',
      description: 'Ongoing support ensures your ITOM solution evolves with your business needs and industry best practices.'
    }
  ];

  const faqs = [
    {
      question: 'What is ITOM?',
      answer: 'IT Operations Management (ITOM) is a comprehensive approach to managing and monitoring IT infrastructure, applications, and services. It provides visibility, control, and automation across your entire IT environment to ensure optimal performance and efficiency.'
    },
    {
      question: 'What are the prerequisites for implementing ITOM?',
      answer: 'Key prerequisites include a clear understanding of your IT infrastructure, defined business objectives, executive sponsorship, and basic ServiceNow platform access. Our team will guide you through the complete readiness assessment.'
    },
    {
      question: 'How long does it take to implement ITOM?',
      answer: 'Implementation timelines vary based on your environment complexity and requirements. Typically, a standard ITOM deployment takes 12-16 weeks, while complex enterprise implementations may take 20-24 weeks. We provide detailed project timelines during the assessment phase.'
    },
    {
      question: 'What are common implementation issues and how do you address them?',
      answer: 'Common challenges include data quality issues, integration complexities, and change management. We proactively address these through comprehensive discovery, proven integration frameworks, and dedicated change management support throughout the implementation.'
    },
    {
      question: 'How does ITOM integrate with other ServiceNow components?',
      answer: 'ITOM seamlessly integrates with ITSM, ITBM, and other ServiceNow modules through native connectors and APIs. This integration provides end-to-end visibility from infrastructure to business services, enabling better decision-making and faster incident resolution.'
    },
    {
      question: 'What kind of post-implementation support do you provide?',
      answer: 'We offer comprehensive support including 24/7 helpdesk, regular health checks, platform upgrades, continuous optimization, and training. Our managed services ensure your ITOM solution continues to deliver value as your business evolves.'
    }
  ];

  const clients = [
    { name: 'US Bank', logo: 'US BANK' },
    { name: 'BT', logo: 'BT' },
    { name: 'John Deere', logo: 'JOHN DEERE' }
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

        {/* Animated curved background shape */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-bl from-[#2ECC71]/10 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-tr from-[#2ECC71]/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-6 lg:mb-8 tracking-tight leading-[1.1] text-4xl md:text-5xl lg:text-[64px] font-bold">
                ServiceNow IT Operations Management Solutions: Achieve Seamless IT Integration and Efficiency
              </h1>

              <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 max-w-[640px]">
                Transform your IT operations with ServiceNow ITOM. Gain complete visibility, automate workflows, and optimize performance across your entire technology ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('book-call')}
                  className="group bg-[#2ECC71] text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                  src="https://images.unsplash.com/photo-1765433739388-e8881db50808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODUzNzQyNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="IT Operations Management"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ TRUST METRIC STRIP */}
      <section ref={statRef} className="py-12 bg-[#2ECC71] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-white text-xl md:text-3xl font-bold leading-tight px-4">
              Businesses with strong ITOM processes experience up to{' '}
              <span className="block md:inline text-4xl md:text-5xl font-extrabold mt-2 md:mt-0">{efficiency}%</span> increase in operational efficiency &
              <span className="block md:inline text-4xl md:text-5xl font-extrabold ml-0 md:ml-2 mt-2 md:mt-0">{downtime}%</span> decrease in downtime
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ WHAT & WHY ITOM SECTION */}
      <section ref={whatWhyRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whatWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-6 tracking-tight text-3xl lg:text-[56px] font-bold">
              ServiceNow IT Operations <span className="block lg:inline">Management – What and Why?</span>
            </h2>
            <p className="text-[#64748B] text-xl leading-relaxed max-w-[720px] mx-auto">
              ITOM provides the visibility, control, and automation needed to manage complex IT environments effectively, ensuring optimal performance and reliability.
            </p>
          </motion.div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWhyFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={whatWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] border border-transparent hover:border-[#2ECC71] transition-all duration-300 h-full group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-6"
                >
                  <feature.icon className="w-7 h-7 text-[#2ECC71]" strokeWidth={2} />
                </motion.div>
                <h3 className="text-xl font-bold text-[#0E2A47] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 h-1 w-0 bg-[#2ECC71] group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ SOLUTIONS FOR MANAGING IT OPERATIONS */}
      <section ref={solutionsRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Our Solutions for Managing IT Operations with ServiceNow
            </h2>
          </motion.div>

          {/* 8 Solution Cards - 4x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] hover:bg-gradient-to-br hover:from-white hover:to-[#2ECC71]/5 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-bold text-[#2ECC71]/20 group-hover:text-[#2ECC71]/40 transition-colors">
                    {solution.number}
                  </span>
                </div>
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2ECC71]/20 transition-colors"
                >
                  <solution.icon className="w-7 h-7 text-[#2ECC71]" strokeWidth={2} />
                </motion.div>
                <h3 className="text-xl font-bold text-[#0E2A47] mb-3">
                  {solution.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed text-sm">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ CASE STUDIES BANNER */}
      <section ref={caseStudyRef} className="py-16 lg:py-20 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={caseStudyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-[640px]">
              <p className="text-white text-xl leading-relaxed">
                Discover how leading enterprises have transformed their IT operations with our ServiceNow ITOM solutions. Explore real-world implementations, measurable outcomes, and best practices from our client success stories.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('case-studies')}
              className="bg-[#2ECC71] text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all whitespace-nowrap"
            >
              Our ITOM Case Studies
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ HOW WE DO IT — PROCESS */}
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
            className="text-center mb-4"
          >
            <h2 className="text-[#0E2A47] mb-2 tracking-tight text-3xl lg:text-[56px] font-bold">
              How we do it?
            </h2>
            <p className="text-[#2ECC71] text-xl lg:text-2xl font-semibold">
              Transformative ServiceNow ITOM Implementations
            </p>
          </motion.div>

          {/* 2x2 Grid with Timeline Connectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 relative">
            {/* Timeline connectors - hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-8rem)] h-[calc(100%-8rem)]">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="0" stroke="#2ECC71" strokeWidth="0.5" opacity="0.3" />
                <line x1="100" y1="0" x2="100" y2="100" stroke="#2ECC71" strokeWidth="0.5" opacity="0.3" />
                <line x1="100" y1="100" x2="0" y2="100" stroke="#2ECC71" strokeWidth="0.5" opacity="0.3" />
              </svg>
            </div>

            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={howInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative ${idx === 0 ? 'md:col-start-1 md:row-start-1' :
                  idx === 1 ? 'md:col-start-2 md:row-start-1' :
                    idx === 2 ? 'md:col-start-2 md:row-start-2' :
                      'md:col-start-1 md:row-start-2'
                  }`}
              >
                <div className="bg-white rounded-2xl p-10 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] border border-transparent hover:border-[#2ECC71] transition-all duration-300 h-full">
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-[#2ECC71]/20 block mb-4">
                      {step.number}
                    </span>

                  </div>
                  <h3 className="text-2xl font-bold text-[#0E2A47] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ CLIENT LOGOS */}
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
            <h2 className="text-[#0E2A47] mb-8 lg:mb-16 tracking-tight text-3xl lg:text-[48px] font-bold">
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

      {/* 8️⃣ FAQ SECTION */}
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
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="text-base lg:text-lg font-bold text-[#0E2A47] pr-4 lg:pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFaq === idx ? (
                      <Minus className="w-5 h-5 text-[#2ECC71] flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#64748B] flex-shrink-0" />
                    )}
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === idx ? 'auto' : 0,
                    opacity: openFaq === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-[#64748B] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9️⃣ FINAL CONTACT / CONVERSION SECTION */}
      <section ref={contactRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden">
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
                  What happens after you submit the form?
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">You'll be matched with a certified ServiceNow ITOM specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">We'll schedule an expert consultation to understand your infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Together we'll define your ITOM objectives and requirements</span>
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

            {/* Right Column - Glassmorphism Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-[0_24px_64px_rgba(0,0,0,0.3)] p-10">
                <h3 className="text-2xl font-bold text-white mb-8">Talk To A Trusted Advisor</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#2ECC71] focus:bg-white/15 focus:outline-none transition-all text-white placeholder:text-white/50"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#2ECC71] focus:bg-white/15 focus:outline-none transition-all text-white placeholder:text-white/50"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#2ECC71] focus:bg-white/15 focus:outline-none transition-all text-white placeholder:text-white/50"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#2ECC71] focus:bg-white/15 focus:outline-none transition-all text-white placeholder:text-white/50 resize-none"
                      placeholder="Tell us about your ITOM requirements..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#2ECC71] text-white px-8 py-5 rounded-xl font-semibold text-lg shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showWhatsApp ? 1 : 0,
          scale: showWhatsApp ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all z-50 flex items-center gap-0 md:gap-3"
      >
        <MessageCircle className="w-6 h-6 md:w-6 md:h-6" />
        <span className="hidden md:block font-semibold pr-2">Connect to ServiceNow Expert?</span>
      </motion.button>

      <Footer />
    </div>
  );
}
