import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Target, Lightbulb, CheckCircle2, ArrowRight, Mail, ClipboardCheck, TrendingUp, Users2, Cog, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';
import { BookCallModal, SuccessModal } from './BookCallModal';

export function AdvisoryPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [visionRef, visionInView] = useInView({ threshold: 0.1 });
  const [darkRef, darkInView] = useInView({ threshold: 0.1 });
  const [stepsRef, stepsInView] = useInView({ threshold: 0.1 });
  const [authorityRef, authorityInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const processSteps = [
    {
      number: '01',
      title: 'Strategic Planning',
      description: 'Develop strategic roadmap aligned with business goals. Define goals, KPIs, strategic initiatives. Clear and actionable direction.',
      icon: Target
    },
    {
      number: '02',
      title: 'Solution Design',
      description: 'Design solutions tailored to needs. Enhance ServiceNow capabilities. Detailed design specs, module selection, workflow customization. Best practices & industry standards.',
      icon: Lightbulb
    },
    {
      number: '03',
      title: 'Implementation & Integration',
      description: 'Implement designed solutions. Seamless integration with existing systems. Configuration to data migration. Smooth transition with minimal disruption. Comprehensive testing.',
      icon: Cog
    },
    {
      number: '04',
      title: 'Optimization & Support',
      description: 'Continuous improvement. Performance monitoring. Feedback-driven enhancements. Long-term value and success.',
      icon: TrendingUp
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
                Create a <span className="text-[#2ECC71]">Customized</span> ServiceNow Strategy
              </h1>

              <p className="text-[#475569] text-xl leading-relaxed mb-10 max-w-[540px] font-medium">
                Integrate seamlessly with your core business goals and drive sustainable growth through expert advisory services.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  onClick={() => onNavigate('book-call')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-[#0E2A47] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(14,42,71,0.2)] hover:shadow-[0_15px_40px_rgba(14,42,71,0.3)] transition-all overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10">Get Expert Advice</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  onClick={() => {
                    const el = document.getElementById('process-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full font-semibold text-[#0E2A47] bg-white border border-slate-200 hover:border-[#2ECC71] hover:text-[#2ECC71] transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  How We Work
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Modern Image Composition - v2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[600px]">
                {/* Main Business Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Strategic Advisory Team" 
                    className="w-full object-cover h-[400px] lg:h-[500px]"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/80 via-transparent to-transparent" />
                  
                  {/* Floating Stat Card - Bottom Left */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px]">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#2ECC71]/10 p-2 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-[#2ECC71]" />
                        </div>
                        <span className="text-sm font-semibold text-slate-600">Growth</span>
                     </div>
                     <p className="text-[#0E2A47] font-bold text-lg">250% ROI</p>
                     <p className="text-xs text-slate-500">Average client return</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION FRAMEWORK SECTION */}
      <section ref={visionRef} className="pt-[8rem] pb-12 lg:pt-[12rem] lg:pb-20 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-[#0E2A47]/8 shadow-[0_24px_64px_rgba(0,0,0,0.08)] p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Text */}
              <div>
                <h2 className="text-[#0E2A47] mb-6 tracking-tight text-3xl lg:text-[48px] font-bold">
                  Vision Framework
                </h2>
                <p className="text-[#64748B] text-xl leading-relaxed mb-8">
                  A well-defined strategy and roadmap are crucial for the successful implementation of ServiceNow.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-[#64748B] text-lg">Establishing a clear vision and setting goals for ServiceNow initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-[#64748B] text-lg">Developing a practical plan to realize them</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-[#64748B] text-lg">Outcome: faster and more impactful results</span>
                  </li>
                </ul>
              </div>

              {/* Right - Visual */}
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-[500px]">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[32px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(14,42,71,0.08)] border border-gray-50"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0E2A47] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#0E2A47]/20">
                      <Target className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                    </div>
                    <p className="text-[#0E2A47] font-bold text-sm sm:text-base tracking-tight">Strategy</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[32px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(14,42,71,0.08)] border border-gray-50"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0E2A47] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#0E2A47]/20">
                      <ClipboardCheck className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                    </div>
                    <p className="text-[#0E2A47] font-bold text-sm sm:text-base tracking-tight">Roadmap</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[32px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(14,42,71,0.08)] border border-gray-50"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0E2A47] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#0E2A47]/20">
                      <Cog className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                    </div>
                    <p className="text-[#0E2A47] font-bold text-sm sm:text-base tracking-tight">Process</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[32px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(14,42,71,0.08)] border border-gray-50"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0E2A47] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#0E2A47]/20">
                      <Lightbulb className="w-8 h-8 text-[#2ECC71]" strokeWidth={2} />
                    </div>
                    <p className="text-[#0E2A47] font-bold text-sm sm:text-base tracking-tight">Innovation</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE DIGITAL ADVISORY (DARK SECTION) */}
      <section ref={darkRef} className="mt-4 lg:mt-5 py-24 lg:py-40 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={darkInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-white mb-6 tracking-tight text-3xl lg:text-[48px] font-bold">
                Why Choose Digital Advisory Services
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  Enterprises need clear vision for alignment with strategic objectives. ServiceNow implementations often fail due to project-based, non-integrated approaches.
                </p>
                <p>
                  This results in misalignment with business goals. Advisory services bridge business + IT, focusing on:
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span>Comprehensive ServiceNow strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span>Strategic roadmaps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span>Maximizing opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span>Minimizing risk and cost</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={darkInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Business strategy meeting"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DISCOVERY & ASSESSMENT HEADER */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              Discovery & Assessment
            </h2>
            <p className="text-[#2ECC71] text-xl font-semibold mb-4">
              Sotiotech Advisory & Consulting
            </p>
            <p className="text-[#64748B] text-lg max-w-3xl mx-auto">
              Journey begins with a comprehensive discovery phase. Assessment of current IT landscape and business processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DETAILED PROCESS STEPS */}
      <section ref={stepsRef} className="py-12 lg:py-20 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="space-y-12">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-3xl border border-[#0E2A47]/8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] p-6 lg:p-10"
              >
                <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#2ECC71] to-[#27AE60] rounded-2xl flex items-center justify-center shadow-lg">
                      <step.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <span className="text-4xl lg:text-6xl font-bold text-[#2ECC71]/20">{step.number}</span>
                      <h3 className="text-xl lg:text-3xl font-bold text-[#0E2A47]">{step.title}</h3>
                    </div>
                    <p className="text-[#64748B] text-base lg:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SOTIOTECH (AUTHORITY) */}
      <section ref={authorityRef} className="py-24 lg:py-40 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={authorityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                  alt="Executive leadership"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={authorityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-white mb-6 tracking-tight text-3xl lg:text-[48px] font-bold">
                Why Choose Sotiotech, One of the Largest Consulting Firms?
              </h2>
              <div className="text-white/80 text-lg leading-relaxed space-y-4">
                <p>
                  High-quality ServiceNow implementations with precision and performance focus. From planning to deployment, we solve complex challenges with seamless integration.
                </p>
                <p>
                  Our collaboration with clients & partners ensures commitment to meaningful results and success.
                </p>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span>Proven track record of enterprise-scale implementations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users2 className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span>Expert team of certified ServiceNow professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span>Continuous optimization and long-term partnership</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONNECT WITH OUR TEAM (CTA + FORM) */}
      <section ref={ctaRef} className="py-24 lg:py-40 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              Connect with Our Team!
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[#0E2A47] mb-6">Contact Us</h3>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#2ECC71] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <a href="mailto:connect@sotiotech.com" className="text-[#64748B] hover:text-[#2ECC71] transition-colors text-lg">
                  connect@sotiotech.com
                </a>
              </div>

              <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-2xl p-8 border border-[#2ECC71]/20">
                <h4 className="text-xl font-bold text-[#0E2A47] mb-4">
                  What happens after you fill out the form?
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-[#64748B]">Match with ServiceNow specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-[#64748B]">Expert reaches out</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-[#64748B]">Discuss objectives & requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-[#64748B]">Develop comprehensive plan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-[#64748B]">Execute and provide ongoing support</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-[32px] border border-[#0E2A47]/8 shadow-[0_32px_80px_rgba(14,42,71,0.08)] p-12 relative overflow-hidden">
                {/* Modern Enterprise Background - Soft Radial Gradient */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
                </div>

                <div className="relative z-10 space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[#0E2A47] mb-2 ml-1 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl border border-[#0E2A47]/10 focus:border-[#2ECC71] focus:ring-4 focus:ring-[#2ECC71]/10 outline-none transition-all text-[#0E2A47] shadow-sm hover:border-[#CBD5E1] bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0E2A47] mb-2 ml-1 uppercase tracking-wider">
                      Work Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl border border-[#0E2A47]/10 focus:border-[#2ECC71] focus:ring-4 focus:ring-[#2ECC71]/10 outline-none transition-all text-[#0E2A47] shadow-sm hover:border-[#CBD5E1] bg-white/50 backdrop-blur-sm"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0E2A47] mb-2 ml-1 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl border border-[#0E2A47]/10 focus:border-[#2ECC71] focus:ring-4 focus:ring-[#2ECC71]/10 outline-none transition-all text-[#0E2A47] shadow-sm hover:border-[#CBD5E1] bg-white/50 backdrop-blur-sm"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0E2A47] mb-2 ml-1 uppercase tracking-wider">
                      Tell us about your needs
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-6 py-4 rounded-2xl border border-[#0E2A47]/10 focus:border-[#2ECC71] focus:ring-4 focus:ring-[#2ECC71]/10 outline-none transition-all text-[#0E2A47] resize-none shadow-sm hover:border-[#CBD5E1] bg-white/50 backdrop-blur-sm"
                      placeholder="Briefly describe your objectives..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-[0_12px_32px_rgba(46,204,113,0.3)] hover:shadow-[0_20px_50px_rgba(46,204,113,0.4)] transition-all flex items-center justify-center gap-3"
                  >
                    Send My Message
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      <BookCallModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        onSuccess={() => setIsSuccessModalOpen(true)}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
}
