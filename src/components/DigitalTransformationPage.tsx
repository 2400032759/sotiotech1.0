import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { CheckCircle2, ArrowRight, Mail, Zap, BarChart3, TrendingUp, Target, Headphones, Code, Users2, Lightbulb, Settings, Rocket, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';
import { BookCallModal, SuccessModal } from './BookCallModal';

const blogPosts = [
  {
    title: 'ServiceNow Vendor Risk Management: Simplifying Third-Party Risks',
    excerpt: 'Learn how to streamline vendor risk assessment and compliance.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
  },
  {
    title: 'ServiceNow Project Management: Transforming Project Delivery',
    excerpt: 'Discover best practices for project portfolio management.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
  },
  {
    title: 'ServiceNow Security Incident Response for Proactive Threat Response',
    excerpt: 'Enhance your security posture with automated incident response.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
  },
  {
    title: 'Modernize Problem Resolution Workflows with ServiceNow',
    excerpt: 'Transform how your organization handles problems and incidents.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80'
  },
  {
    title: 'Transform HR Services with ServiceNow Case Management',
    excerpt: 'Streamline HR service delivery and employee experiences.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80'
  },
  {
    title: 'Streamline Internal Audits with ServiceNow Audit Management',
    excerpt: 'Automate and optimize your audit processes for compliance.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
  }
];

export function DigitalTransformationPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [strategyRef, strategyInView] = useInView({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1 });
  const [offeringsRef, offeringsInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ threshold: 0.1 });
  const [insightsRef, insightsInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const benefits = [
    {
      icon: Zap,
      title: 'Enhanced Efficiency',
      description: 'Manage routine procedures and workflows. Teams focus on strategic goals.',
      color: 'from-[#2ECC71] to-[#27AE60]'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decision Making',
      description: 'Turn data into actionable insights. Support informed business decisions.',
      color: 'from-[#3498DB] to-[#2980B9]'
    },
    {
      icon: TrendingUp,
      title: 'Scalability and Flexibility',
      description: 'ServiceNow Managed Services. Scale with business growth. Remain competitive and agile.',
      color: 'from-[#9B59B6] to-[#8E44AD]'
    }
  ];

  const offerings = [
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Understand challenges and goals. Personalized digital transformation plan. IT Operations Management aligned with vision.'
    },
    {
      icon: Headphones,
      title: 'End to End Support',
      description: 'From initial discussion to execution. Ongoing support. Covers IT Service Management lifecycle.'
    },
    {
      icon: Code,
      title: 'Technology Expertise',
      description: 'Cloud computing, AI, IoT, Data analytics. Access to modern, efficient tools.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation & Discovery',
      description: 'Study present situation. Identify pain points. Establish digital transformation goals.',
      icon: Users2
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Create complete digital strategy. Align with business goals. Smooth transition planning.',
      icon: Lightbulb
    },
    {
      number: '03',
      title: 'Develop & Implement',
      description: 'Integrate digital solutions. Minimal business impact. Includes Customer Service Management.',
      icon: Settings
    },
    {
      number: '04',
      title: 'Ongoing Optimization',
      description: 'Continuous assistance. Optimization. Ensure transformation evolves with business needs.',
      icon: Rocket
    }
  ];

  const faqs = [
    {
      question: 'What is Digital Transformation as a Service (DTaaS)?',
      answer: 'End-to-end digital transformation using personalized solutions. Consulting, strategy, implementation, and ongoing support. Improves efficiency and innovation.'
    },
    {
      question: 'How does ServiceNow enhance digital transformation for businesses?',
      answer: 'ServiceNow provides a unified platform that streamlines workflows, automates processes, and integrates systems across your organization. This enables faster decision-making, improved collaboration, and enhanced operational efficiency.'
    },
    {
      question: 'Why is a digital transformation strategy important for my business?',
      answer: 'A digital transformation strategy ensures your business stays competitive in a rapidly evolving landscape. It helps you leverage technology to improve customer experiences, optimize operations, and drive innovation while managing risks and costs effectively.'
    },
    {
      question: 'What industries benefit most from digital transformation?',
      answer: 'All industries benefit from digital transformation, including healthcare, finance, manufacturing, retail, telecommunications, and public sector. Each industry has unique challenges that digital transformation addresses through tailored solutions.'
    },
    {
      question: "What are the key benefits of Sotiotech's Digital Transformation Strategy?",
      answer: 'Our strategy delivers enhanced operational efficiency, data-driven decision making, scalability and flexibility, improved customer experiences, and continuous innovation. We provide end-to-end support with tailored solutions aligned to your business goals.'
    }
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

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
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

              <h1 className="text-[#0E2A47] mb-6 tracking-tight leading-[1.1] text-5xl lg:text-7xl font-extrabold max-w-[640px]">
                Innovative <span className="text-[#2ECC71]">Digital</span> Transformation Strategy
              </h1>

              <p className="text-[#475569] text-xl leading-relaxed mb-10 max-w-[540px] font-medium">
                Gain access to your organization's full potential with personalized digital solutions that accelerate growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  onClick={() => onNavigate('book-call')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-[#0E2A47] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(14,42,71,0.2)] hover:shadow-[0_15px_40px_rgba(14,42,71,0.3)] transition-all overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10">Get Started Today</span>
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
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Digital Transformation Team"
                    className="w-full object-cover h-[400px] lg:h-[500px]"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/80 via-transparent to-transparent" />
                  
                  {/* Floating Stat Card */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px]">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#2ECC71]/10 p-2 rounded-lg">
                          <Zap className="w-5 h-5 text-[#2ECC71]" />
                        </div>
                        <span className="text-sm font-semibold text-slate-600">Efficiency</span>
                     </div>
                     <p className="text-[#0E2A47] font-bold text-lg">+40%</p>
                     <p className="text-xs text-slate-500">Increase in productivity</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION STRATEGY WITH SOTIOTECH */}
      <section ref={strategyRef} className="pt-[8rem] pb-16 lg:pt-[12rem] lg:pb-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={strategyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-2"
            >
              <h2 className="text-[#0E2A47] mb-6 tracking-tight text-3xl lg:text-[48px] font-bold">
                Digital Transformation Strategy with Sotiotech
              </h2>
              <div className="text-[#64748B] text-lg leading-relaxed space-y-4">
                <p>
                  Digital landscape is changing rapidly. A strong digital transformation strategy is essential.
                </p>
                <p>
                  This goes beyond adopting new technology. Sotiotech provides Digital Transformation as a Service to help businesses shift into the digital age.
                </p>
                <p>
                  We improve operational efficiency while driving creativity and innovation across your organization.
                </p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={strategyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 hidden lg:block relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODQ2OTEyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Digital transformation technology"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section ref={benefitsRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              Key Benefits of Digital Transformation Strategy
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-[#0E2A47]/8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] p-10 h-full"
              >
                <div className="w-16 h-16 bg-[#0E2A47] rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <benefit.icon className="w-8 h-8 text-[#2ECC71]" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#0E2A47] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#64748B] text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE OFFERING DETAILS (DARK SECTION) */}
      <section ref={offeringsRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={offeringsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              Service Offering Details
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((offering, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={offeringsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-10 h-full"
              >
                <div className="w-16 h-16 bg-[#2ECC71] rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <offering.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {offering.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {offering.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS OVERVIEW */}
      <section ref={processRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              Our Digital Transformation Strategy Process Overview
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-[#0E2A47]/8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] p-10"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2ECC71] to-[#27AE60] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="text-4xl font-bold text-[#2ECC71]/20">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0E2A47] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs SECTION */}
      <section ref={faqRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              FAQ's
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-[#0E2A47]/8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="text-lg font-bold text-[#0E2A47] pr-8">
                    {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#2ECC71] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748B] flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-[#64748B] text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-20 bg-gradient-to-r from-[#2ECC71] to-[#27AE60] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Transform Your Business? Contact Us Today
            </h2>
            <motion.button
              onClick={() => onNavigate('book-call')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#2ECC71] px-10 py-5 rounded-full font-semibold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all whitespace-nowrap"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* INSIGHTS / BLOG SECTION */}
      <section ref={insightsRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={insightsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight max-w-4xl mx-auto text-3xl lg:text-[48px] font-bold">
              Explore our latest insights on digital transformation Strategy and stay ahead of the curve
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={insightsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-[#0E2A47]/8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] overflow-hidden group hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] hover:border-[#2ECC71] transition-all duration-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#0E2A47] mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-[#64748B] mb-6">
                    {post.excerpt}
                  </p>
                  <a href="#" className="text-[#2ECC71] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-[#2ECC71] text-[#2ECC71] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ECC71] hover:text-white transition-all"
            >
              Load More
            </motion.button>
          </div>
        </div>
      </section>

      {/* CONTACT & FORM SECTION */}
      <section ref={ctaRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
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
                <h4 className="text-xl font-bold text-white mb-4">
                  What happens after you fill out the form?
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Match with ServiceNow specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Expert discussion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Share objectives & requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Develop comprehensive plan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Execute with ongoing support</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-white/20 shadow-[0_24px_64px_rgba(0,0,0,0.3)] p-10">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0E2A47] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-[#0E2A47]/10 focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47]"
                      placeholder="Enter your name"
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
                      className="w-full px-5 py-4 rounded-xl border border-[#0E2A47]/10 focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47]"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0E2A47] mb-2">
                      Phone No.
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-[#0E2A47]/10 focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47]"
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
                      className="w-full px-5 py-4 rounded-xl border border-[#0E2A47]/10 focus:border-[#2ECC71] focus:outline-none transition-colors text-[#0E2A47] resize-none"
                      placeholder="Tell us about your transformation goals..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white px-8 py-5 rounded-xl font-semibold text-lg shadow-[0_10px_30px_rgba(46,204,113,0.3)] hover:shadow-[0_15px_40px_rgba(46,204,113,0.4)] transition-all"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <BookCallModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        onSuccess={() => { setIsBookModalOpen(false); setIsSuccessModalOpen(true); }}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      <Footer />
    </div>
  );
}
