import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Users,
  Workflow,
  BarChart3,
  Award,
  Settings,
  HeartHandshake,
  Briefcase,
  FileText,
  UserPlus,
  ShoppingBag,
  FolderOpen,
  List,
  Play
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';

export function HRSDPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [whatRef, whatInView] = useInView({ threshold: 0.1 });
  const [statRef, statInView] = useInView({ threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1 });
  const [metricsRef, metricsInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1 });
  const [productsRef, productsInView] = useInView({ threshold: 0.1 });
  const [clientsRef, clientsInView] = useInView({ threshold: 0.1 });
  const [finalCtaRef, finalCtaInView] = useInView({ threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const automationBenefits = [
    {
      icon: Workflow,
      title: 'Automated HR Workflows',
      description: 'Streamline routine HR processes with intelligent automation, reducing manual effort and accelerating response times.'
    },
    {
      icon: Users,
      title: 'Employee Self-Service Portal',
      description: 'Empower employees with intuitive self-service capabilities for requests, approvals, and information access.'
    },
    {
      icon: BarChart3,
      title: 'HR Analytics & Reporting',
      description: 'Gain actionable insights with comprehensive dashboards and real-time analytics for data-driven decisions.'
    }
  ];

  const metrics = [
    {
      percentage: '30%',
      description: 'Faster HR case resolution'
    },
    {
      percentage: '40%',
      description: 'Improved HR service efficiency'
    },
    {
      percentage: '25%',
      description: 'Increase in employee satisfaction'
    }
  ];

  const whyChooseFeatures = [
    {
      icon: Award,
      title: 'Experience',
      description: 'Years of proven expertise in ServiceNow HRSD implementations across industries'
    },
    {
      icon: Settings,
      title: 'Tailored Solutions',
      description: 'Customized HRSD configurations aligned with your unique organizational needs'
    },
    {
      icon: HeartHandshake,
      title: 'Continuous Support',
      description: '24/7 support and ongoing optimization to ensure sustained HR transformation success'
    }
  ];

  const hrsdProducts = [
    {
      number: '1',
      icon: Briefcase,
      title: 'Employee Service Center',
      description: 'Centralized hub for all employee inquiries and service requests'
    },
    {
      number: '2',
      icon: FileText,
      title: 'Case & Knowledge Management',
      description: 'Efficient case resolution with integrated knowledge base'
    },
    {
      number: '3',
      icon: UserPlus,
      title: 'HR Onboarding & Offboarding',
      description: 'Seamless employee lifecycle management from hire to retire'
    },
    {
      number: '4',
      icon: ShoppingBag,
      title: 'HR Catalog Services',
      description: 'Self-service catalog for HR services and benefits enrollment'
    },
    {
      number: '5',
      icon: FolderOpen,
      title: 'Employee Document Management',
      description: 'Secure storage and management of employee documents'
    },
    {
      number: '6',
      icon: List,
      title: 'Universal Request Management',
      description: 'Unified platform for all HR-related requests and approvals'
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
                Maximizing Efficiency with ServiceNow HRSD Implementation
              </h1>

              <p className="text-[#64748B] text-xl leading-relaxed mb-4 max-w-[640px]">
                HR transformation with our ServiceNow HRSD implementation services.
              </p>
              <p className="text-[#64748B] text-xl leading-relaxed mb-12 max-w-[640px]">
                Deployment, configuration, optimization, and ongoing support tailored to your organization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('book-call')}
                  className="group bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
                >
                  Request Free Consultation
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
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759884247142-028abd1e8ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODUwODcxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="HR Service Delivery"
                  className="w-full h-[600px] object-cover"
                />
                {/* Abstract geometric overlay */}
                <div className="absolute top-8 right-8 w-32 h-32 border-4 border-[#2ECC71] rounded-2xl rotate-12 opacity-50" />
                <div className="absolute bottom-12 left-12 w-24 h-24 bg-[#2ECC71]/20 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ WHAT'S WITH SERVICENOW HR TRANSFORMATION */}
      <section ref={whatRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whatInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691737543-09a1b2b715fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3Njg0NTAzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="HR Transformation"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right Content Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={whatInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#0E2A47] rounded-3xl p-12 shadow-[0_24px_64px_rgba(0,0,0,0.1)]">
                <h2 className="text-white mb-8 tracking-tight text-3xl lg:text-[48px] font-bold">
                  What's with ServiceNow HR Transformation?
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" strokeWidth={2} />
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Seamless Deployment</h4>
                      <p className="text-white/70 leading-relaxed">
                        Expert implementation of ServiceNow HRSD tailored to your organizational structure
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" strokeWidth={2} />
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Custom Configuration</h4>
                      <p className="text-white/70 leading-relaxed">
                        Platform optimization aligned with your HR policies and workflows
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" strokeWidth={2} />
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">System Integration</h4>
                      <p className="text-white/70 leading-relaxed">
                        Seamless connectivity with existing HRIS, payroll, and enterprise systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" strokeWidth={2} />
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Workflow Automation</h4>
                      <p className="text-white/70 leading-relaxed">
                        Intelligent automation of routine HR tasks to boost efficiency
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" strokeWidth={2} />
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Enhanced Employee Experience</h4>
                      <p className="text-white/70 leading-relaxed">
                        Modern self-service portals that improve employee satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ IMPACT STAT BANNER */}
      <section ref={statRef} className="py-12 bg-[#2ECC71] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <p className="text-[#0E2A47] text-2xl md:text-3xl font-bold leading-tight max-w-[800px]">
              HRSD implementation can reduce HR operations time by up to 30% in the first 6 months
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('case-studies')}
              className="bg-[#0E2A47] text-white px-10 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(14,42,71,0.3)] transition-all whitespace-nowrap"
            >
              Case Studies
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ WHY CHOOSE SERVICENOW HRSD */}
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
            <h2 className="text-white mb-8 tracking-tight text-3xl lg:text-[56px] font-bold">
              Why Choose ServiceNow HRSD?
            </h2>
            <p className="text-white/80 text-xl leading-relaxed max-w-[720px] mx-auto">
              Transform HR operations with digital-first experiences that improve employee engagement, accelerate case resolution, and enable data-driven HR decisions across your organization.
            </p>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[900px] mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)] bg-gradient-to-br from-[#0E2A47] to-[#1a3d5a] aspect-video flex items-center justify-center border border-white/10 cursor-pointer group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxociUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3Njg1NzU2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="HR Analytics Dashboard"
                className="w-full h-full object-cover opacity-50"
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

      {/* 5️⃣ HR AUTOMATION BENEFITS */}
      <section ref={benefitsRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automationBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[#0E2A47]/50 backdrop-blur-xl rounded-2xl p-8 border-2 border-[#2ECC71] hover:border-[#2ECC71] hover:shadow-[0_20px_50px_rgba(46,204,113,0.2)] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#2ECC71]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2ECC71]/30 transition-colors">
                  <benefit.icon className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#2ECC71] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ GARTNER SAYS METRICS */}
      <section ref={metricsRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              Gartner Says, by 2025
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-12 border-2 border-[#2ECC71] shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] transition-all text-center"
              >
                <div className="text-7xl font-bold text-[#2ECC71] mb-6">
                  {metric.percentage}
                </div>
                <p className="text-[#0E2A47] text-xl font-semibold leading-tight">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ STRONG CTA SECTION */}
      <section ref={ctaRef} className="py-20 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-white mb-10 tracking-tight text-3xl lg:text-[56px] font-bold">
              Ready for HR Transformation?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('book-call')}
              className="bg-[#2ECC71] text-[#0E2A47] px-12 py-6 rounded-xl font-semibold text-xl flex items-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all mx-auto"
            >
              Book an Expert Call
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 8️⃣ WHY CHOOSE SOTIOTECH */}
      <section ref={featuresRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Why Choose Sotiotech for HR Transformation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyChooseFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                >
                  <feature.icon className="w-10 h-10 text-[#2ECC71]" strokeWidth={2} />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#0E2A47] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed max-w-[320px] mx-auto">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9️⃣ KEY PRODUCTS & BENEFITS */}
      <section ref={productsRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Key Products & Benefits – HRSD Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hrsdProducts.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#0B1F35] rounded-2xl p-8 shadow-[0_10px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_18px_42px_rgba(46,204,113,0.2)] border border-[#2ECC71]/20 hover:border-[#2ECC71]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#2ECC71] rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xl text-white">
                    {product.number}
                  </div>
                  <div className="w-12 h-12 bg-[#2ECC71]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-6 h-6 text-[#2ECC71]" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {product.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔟 CLIENT LOGOS */}
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

      {/* 1️⃣1️⃣ FINAL CTA STRIP */}
      <section ref={finalCtaRef} className="py-12 bg-[#2ECC71] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={finalCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-[#0E2A47] text-3xl md:text-4xl font-bold leading-tight">
              Schedule Consultation for ServiceNow HRSD Implementation in Saudi Today!
            </h3>
          </motion.div>
        </div>
      </section>

      {/* 1️⃣2️⃣ CONTACT + LEAD FORM SECTION */}
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
                    <span className="text-white/80">You'll be matched with a certified ServiceNow HRSD specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">We'll schedule an expert consultation to understand your HR needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Together we'll define your HRSD objectives and requirements</span>
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
                      placeholder="+966 XX XXX XXXX"
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
                      placeholder="Tell us about your HRSD requirements..."
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
