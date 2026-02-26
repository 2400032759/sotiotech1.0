import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Target,
  DollarSign,
  Users,
  TrendingUp,
  Layers,
  Eye,
  Zap,
  BarChart3,
  Briefcase,
  Wallet,
  UserCheck,
  GitBranch,
  LineChart,
  Layout,
  Play
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';

export function ITBMPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [whatRef, whatInView] = useInView({ threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  const [modulesRef, modulesInView] = useInView({ threshold: 0.1 });
  const [impactRef, impactInView] = useInView({ threshold: 0.1 });
  const [clientsRef, clientsInView] = useInView({ threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const whyStats = [
    {
      icon: Target,
      title: 'Alignment with Business Goals',
      description: 'Ensure every initiative supports strategic objectives'
    },
    {
      icon: DollarSign,
      title: 'Real-Time Financial Visibility',
      description: 'Track costs, budgets, and ROI across portfolios'
    },
    {
      icon: Users,
      title: 'Improved Resource Utilization',
      description: 'Optimize workforce and capacity planning'
    },
    {
      icon: TrendingUp,
      title: 'Faster Decision Making',
      description: 'Data-backed prioritization and forecasting'
    },
    {
      icon: Layers,
      title: 'Scalable Enterprise Framework',
      description: 'Grows with organizational complexity'
    }
  ];

  const keyBenefits = [
    {
      icon: Eye,
      title: 'Project Visibility & Control',
      description: 'Gain end-to-end visibility across all initiatives'
    },
    {
      icon: Users,
      title: 'Improved Resource Optimization',
      description: 'Reduce underutilization and delivery bottlenecks'
    },
    {
      icon: Target,
      title: 'Higher Project Success Rates',
      description: 'Increase delivery predictability and outcomes'
    },
    {
      icon: DollarSign,
      title: 'Financial Governance & Forecasting',
      description: 'Control spend and reduce overruns'
    }
  ];

  const implementationSteps = [
    {
      number: '1',
      title: 'Assessment & Strategy',
      description: 'Evaluate current portfolio maturity and goals'
    },
    {
      number: '2',
      title: 'Demand & Portfolio Design',
      description: 'Define intake, prioritization, and governance models'
    },
    {
      number: '3',
      title: 'Implementation & Integration',
      description: 'Configure ServiceNow ITBM modules and integrations'
    },
    {
      number: '4',
      title: 'Optimization & Automation',
      description: 'Enhance workflows, reporting, and analytics'
    },
    {
      number: '5',
      title: 'Continuous Improvement',
      description: 'Ongoing tuning aligned with business evolution'
    }
  ];

  const itbmModules = [
    {
      icon: Briefcase,
      title: 'Demand Management',
      description: 'Centralized intake and prioritization of business demands'
    },
    {
      icon: BarChart3,
      title: 'Project Portfolio Management (PPM)',
      description: 'Comprehensive project planning, tracking, and delivery'
    },
    {
      icon: Wallet,
      title: 'Financial Management',
      description: 'Cost tracking, budgeting, and financial planning'
    },
    {
      icon: UserCheck,
      title: 'Resource Management',
      description: 'Capacity planning and workforce optimization'
    },
    {
      icon: GitBranch,
      title: 'Agile Development',
      description: 'Agile portfolio and sprint management capabilities'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Align initiatives with strategic business objectives'
    },
    {
      icon: Layout,
      title: 'Workspace & Reporting',
      description: 'Customizable dashboards and executive reporting'
    }
  ];

  const impactMetrics = [
    {
      percentage: '30%',
      description: 'improvement in project success rates'
    },
    {
      percentage: '25%',
      description: 'reduction in budget overruns'
    },
    {
      percentage: '40%',
      description: 'faster strategic decision-making'
    }
  ];

  const clients = [
    { name: 'BT', logo: 'BT' },
    { name: 'US Bank', logo: 'US BANK' },
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
                Transform IT Business Management with ServiceNow ITBM
              </h1>

              <p className="text-[#64748B] text-xl leading-relaxed mb-12 max-w-[640px]">
                Align strategy, investments, and execution with ServiceNow Strategic Portfolio Management to maximize business value.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(46,204,113,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('book-call')}
                  className="group bg-[#2ECC71] text-[#0E2A47] px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(46,204,113,0.3)] transition-all"
                >
                  Request a Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('case-studies')}
                  className="text-[#0E2A47] hover:text-[#2ECC71] font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  View Case Studies
                  <ArrowRight className="w-5 h-5" />
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
                  src="https://images.unsplash.com/photo-1758599543146-f263d3b3321e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZyUyMGV4ZWN1dGl2ZXN8ZW58MXx8fHwxNzY4NTc2MjQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="IT Business Management Strategy"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ WHAT IS ITBM? */}
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
              What is IT Business Management (ITBM)?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whatInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#64748B] text-xl leading-relaxed max-w-[720px]">
                ServiceNow IT Business Management (ITBM), also known as Strategic Portfolio Management (SPM), enables organizations to align IT investments with business objectives. It brings together demand management, portfolio planning, financial tracking, and execution visibility—helping enterprises prioritize the right initiatives, control costs, and deliver measurable outcomes.
              </p>
            </motion.div>

            {/* Right Visual - Video Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={whatInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.1)] bg-[#0E2A47] aspect-video flex items-center justify-center border border-[#2ECC71]/20 cursor-pointer group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBtYW5hZ2VtZW50JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2ODU3NjI0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="ITBM Dashboard"
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
        </div>
      </section>

      {/* 3️⃣ WHY SERVICENOW ITBM? (STATS) */}
      <section ref={whyRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Why ServiceNow ITBM?
            </h2>
          </motion.div>

          {/* 5 Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all"
              >
                <div className="w-14 h-14 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-[#2ECC71]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-[#0E2A47] mb-2">
                  {stat.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ KEY BENEFITS (DARK SECTION) */}
      <section ref={benefitsRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Key Benefits
            </h2>
          </motion.div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
            {keyBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#0B1F35] rounded-2xl p-10 shadow-[0_10px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_18px_42px_rgba(46,204,113,0.2)] border border-[#2ECC71]/20 hover:border-[#2ECC71]/50 transition-all"
              >
                <div className="w-16 h-16 bg-[#2ECC71] rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ HOW WE IMPLEMENT ITBM (PROCESS FLOW) */}
      <section ref={processRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              How We Implement ITBM
            </h2>
          </motion.div>

          {/* Horizontal Step Flow */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[50px] left-0 right-0 h-1 bg-gradient-to-r from-[#2ECC71]/20 via-[#2ECC71] to-[#2ECC71]/20" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {implementationSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Number Badge */}
                  <div className="w-24 h-24 bg-[#2ECC71] rounded-full flex items-center justify-center mb-6 mx-auto shadow-[0_10px_30px_rgba(46,204,113,0.3)] relative z-10">
                    <span className="text-white text-3xl font-bold">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#0E2A47] mb-3">
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
        </div>
      </section>

      {/* 6️⃣ ITBM MODULES WE IMPLEMENT */}
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
              ITBM Modules We Implement
            </h2>
          </motion.div>

          {/* 3 per row grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itbmModules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={modulesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10)] border border-[#E2E8F0] hover:border-[#2ECC71] transition-all"
              >
                <div className="w-14 h-14 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-6">
                  <module.icon className="w-7 h-7 text-[#2ECC71]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[#0E2A47] mb-3">
                  {module.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ BUSINESS IMPACT SECTION (METRICS) */}
      <section ref={impactRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[56px] font-bold">
              Business Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {impactMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={impactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-7xl font-bold text-[#2ECC71] mb-4">
                  {metric.percentage}
                </div>
                <p className="text-[#0E2A47] text-xl font-semibold leading-tight">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="inline-block bg-[#2ECC71]/10 border-2 border-[#2ECC71] rounded-2xl px-12 py-8">
              <p className="text-2xl font-bold text-[#0E2A47]">
                Enterprise-wide visibility across portfolios
              </p>
            </div>
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

      {/* 9️⃣ FINAL CTA + CONTACT SECTION */}
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
                  What happens after you submit the form?
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Matched with a ServiceNow ITBM specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Expert consultation call to understand your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Customized roadmap aligned with your business goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Implementation planning and resource allocation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Ongoing enterprise support and optimization</span>
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
                      placeholder="Tell us about your ITBM requirements..."
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
