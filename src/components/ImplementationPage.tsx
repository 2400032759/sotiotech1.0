import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { CheckCircle2, ArrowRight, Mail, Settings, Database, Users2, TestTube, GraduationCap, Rocket, TrendingUp, Shield, Headphones, UserCog, ShoppingCart, Briefcase, MonitorCog, HardDrive, FileCheck, ShieldAlert } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Footer } from './Footer';
import { BookCallModal, SuccessModal } from './BookCallModal';

const platformModules = {
  itsm: {
    title: 'ServiceNow IT Service Management (ITSM)',
    description: 'How We Offer ITSM Solutions',
    features: [
      'Assessment of processes & workflows',
      'Custom ServiceNow configuration',
      'Incident, problem, change, request management',
      'Tool integration',
      'Training & enablement',
      'Minimal disruption'
    ],
    benefits: {
      title: 'Benefits of ITSM Implementation',
      list: [
        'Faster incident resolution',
        'Streamlined workflows',
        'Enhanced visibility',
        'Better decision-making',
        'Automation of routine tasks',
        'Continuous improvement culture'
      ]
    },
    icon: Settings
  },
  hrsd: {
    title: 'Human Resource Service Delivery',
    description: 'Comprehensive HR Solutions',
    features: [
      'Employee lifecycle management',
      'Case & knowledge management',
      'Self-service portal configuration',
      'Workflow automation',
      'Integration with HRIS systems',
      'Employee experience optimization'
    ],
    benefits: {
      title: 'Benefits of HR Service Delivery',
      list: [
        'Improved employee satisfaction',
        'Reduced HR operation costs',
        'Automated onboarding/offboarding',
        'Centralized employee services',
        'Data-driven HR insights',
        'Compliance management'
      ]
    },
    icon: UserCog
  },
  csm: {
    title: 'Customer Service Management',
    description: 'Deliver Exceptional Customer Experiences',
    features: [
      'Omnichannel customer support',
      'Case routing & escalation',
      'Customer portal implementation',
      'SLA management',
      'Integration with CRM systems',
      'Customer journey optimization'
    ],
    benefits: {
      title: 'Benefits of CSM Implementation',
      list: [
        'Enhanced customer satisfaction',
        'Faster case resolution',
        'Proactive service delivery',
        'Unified customer view',
        'Reduced service costs',
        'Improved agent productivity'
      ]
    },
    icon: Headphones
  },
  spm: {
    title: 'Strategic Portfolio Management',
    description: 'Align Projects with Business Strategy',
    features: [
      'Portfolio planning & prioritization',
      'Resource capacity management',
      'Project tracking & reporting',
      'Demand management',
      'Financial planning integration',
      'Agile & waterfall methodologies'
    ],
    benefits: {
      title: 'Benefits of SPM Implementation',
      list: [
        'Better resource allocation',
        'Improved project visibility',
        'Strategic alignment',
        'Risk mitigation',
        'Enhanced collaboration',
        'Data-driven decisions'
      ]
    },
    icon: Briefcase
  },
  itom: {
    title: 'IT Operations Management',
    description: 'Optimize IT Infrastructure & Operations',
    features: [
      'Discovery & service mapping',
      'Event management',
      'Cloud management',
      'AIOps implementation',
      'Health monitoring',
      'Operational intelligence'
    ],
    benefits: {
      title: 'Benefits of ITOM Implementation',
      list: [
        'Reduced downtime',
        'Proactive issue resolution',
        'Improved infrastructure visibility',
        'Cost optimization',
        'Automated remediation',
        'Enhanced service quality'
      ]
    },
    icon: MonitorCog
  },
  ham: {
    title: 'Hardware & Software Asset Management',
    description: 'Comprehensive Asset Lifecycle Management',
    features: [
      'Asset discovery & tracking',
      'License management',
      'Software compliance',
      'Contract management',
      'Cost optimization',
      'Asset lifecycle automation'
    ],
    benefits: {
      title: 'Benefits of Asset Management',
      list: [
        'Reduced software costs',
        'License compliance',
        'Better asset utilization',
        'Risk reduction',
        'Automated tracking',
        'Improved audit readiness'
      ]
    },
    icon: HardDrive
  },
  grc: {
    title: 'Governance, Risk, and Compliance',
    description: 'Enterprise Risk & Compliance Management',
    features: [
      'Risk assessment & monitoring',
      'Policy & compliance management',
      'Audit management',
      'Vendor risk management',
      'Regulatory compliance',
      'Control testing'
    ],
    benefits: {
      title: 'Benefits of GRC Implementation',
      list: [
        'Reduced compliance risk',
        'Streamlined audit processes',
        'Centralized risk visibility',
        'Automated controls',
        'Regulatory adherence',
        'Enhanced governance'
      ]
    },
    icon: FileCheck
  },
  secops: {
    title: 'Security Operations',
    description: 'Advanced Security Incident Response',
    features: [
      'Security incident response',
      'Vulnerability management',
      'Threat intelligence',
      'Security orchestration',
      'Compliance monitoring',
      'Security analytics'
    ],
    benefits: {
      title: 'Benefits of SecOps Implementation',
      list: [
        'Faster threat response',
        'Reduced security risks',
        'Automated workflows',
        'Enhanced visibility',
        'Compliance assurance',
        'Proactive security posture'
      ]
    },
    icon: ShieldAlert
  }
};

export function ImplementationPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [stepsRef, stepsInView] = useInView({ threshold: 0.1 });
  const [platformRef, platformInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  const [selectedPlatform, setSelectedPlatform] = useState<keyof typeof platformModules>('itsm');
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const detailedSteps = [
    {
      number: '01',
      title: 'Initial Assessment',
      description: 'We align with your team to understand the current landscape and define success metrics.',
      duration: '1-2 Weeks',
      items: [
        'Initial consultation & workshops',
        'Understand business needs & goals',
        'Identify existing process gaps'
      ],
      icon: Users2
    },
    {
      number: '02',
      title: 'Solution Design',
      description: 'Our architects design a scalable ServiceNow blueprint tailored to your workflows.',
      duration: '2-3 Weeks',
      items: [
        'Customization & architecture planning',
        'Solution modification blueprint',
        'Resource & timeline definition',
        'Alignment with business goals'
      ],
      icon: Settings
    },
    {
      number: '03',
      title: 'Implementation & Configuration',
      description: 'The core build phase where we configure the platform and migrate your data.',
      duration: '4-8 Weeks',
      items: [
        'Core system configuration',
        'Module setup & integrations',
        'Data migration & validation',
        'Workflow automation setup'
      ],
      icon: Database
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing to ensure glitch-free performance and user acceptance.',
      duration: '2-3 Weeks',
      items: [
        'End-to-end functional testing',
        'User Acceptance Testing (UAT)',
        'Issue resolution & refinement',
        'Performance stress testing'
      ],
      icon: TestTube
    },
    {
      number: '05',
      title: 'Training & Adoption',
      description: 'Empowering your team with the knowledge to utilize the new system effectively.',
      duration: '1-2 Weeks',
      items: [
        'Admin & end-user training',
        'Process documentation',
        'Change management support',
        'Knowledge base creation'
      ],
      icon: GraduationCap
    },
    {
      number: '06',
      title: 'Go-Live & Support',
      description: 'A smooth transition to production with dedicated hyper-care support.',
      duration: '1-2 Weeks',
      items: [
        'Production deployment',
        'Go-live support (Hyper-care)',
        'Immediate issue resolution',
        'System stability monitoring'
      ],
      icon: Rocket
    },
    {
      number: '07',
      title: 'Continuous Improvement',
      description: 'We ensure your ServiceNow instance evolves with your business needs.',
      duration: 'Ongoing',
      items: [
        'Regular performance reviews',
        'Feature optimization',
        'Roadmap planning',
        'Upgrade support'
      ],
      icon: TrendingUp
    }
  ];

  const platformTabs = [
    { key: 'itsm', label: 'IT Service Management (ITSM)' },
    { key: 'hrsd', label: 'Human Resource Service Delivery' },
    { key: 'csm', label: 'Customer Service Management' },
    { key: 'spm', label: 'Strategic Portfolio Management' },
    { key: 'itom', label: 'IT Operations Management' },
    { key: 'ham', label: 'Hardware & Software Asset Management' },
    { key: 'grc', label: 'Governance, Risk, and Compliance' },
    { key: 'secops', label: 'Security Operations' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const currentPlatform = platformModules[selectedPlatform];

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
                Leading ServiceNow <span className="text-[#2ECC71]">Implementation</span> Specialist
              </h1>

              <div className="text-[#475569] text-lg leading-relaxed space-y-3 mb-10 font-medium text-left">
                <p className="flex items-center gap-3">
                  <span className="bg-[#2ECC71]/10 p-1.5 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-[#2ECC71] flex-shrink-0" />
                  </span>
                  40+ certified ServiceNow experts
                </p>
                <p className="flex items-center gap-3">
                  <span className="bg-[#2ECC71]/10 p-1.5 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-[#2ECC71] flex-shrink-0" />
                  </span>
                  6+ years of hands-on experience
                </p>
                <p className="flex items-center gap-3">
                  <span className="bg-[#2ECC71]/10 p-1.5 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-[#2ECC71] flex-shrink-0" />
                  </span>
                  Seamless implementation flows
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  onClick={() => onNavigate('book-call')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-[#0E2A47] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(14,42,71,0.2)] hover:shadow-[0_15px_40px_rgba(14,42,71,0.3)] transition-all overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10">Start Your Project</span>
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
                    src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY4NTM1ODEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Enterprise team collaboration"
                    className="w-full object-cover h-[400px] lg:h-[500px]"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/80 via-transparent to-transparent" />
                  
                  {/* Floating Stat Card */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px]">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#2ECC71]/10 p-2 rounded-lg">
                          <CheckCircle2 className="w-5 h-5 text-[#2ECC71]" />
                        </div>
                        <span className="text-sm font-semibold text-slate-600">Success Rate</span>
                     </div>
                     <p className="text-[#0E2A47] font-bold text-lg">99.8%</p>
                     <p className="text-xs text-slate-500">Project delivery rate</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SOTIOTECH */}
      <section ref={whyRef} className="pt-[8rem] pb-16 lg:pt-[12rem] lg:pb-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-2"
            >
              <h2 className="text-[#0E2A47] mb-6 tracking-tight text-3xl lg:text-[48px] font-bold">
                Why Choose Sotiotech?
              </h2>
              <div className="text-[#64748B] text-lg leading-relaxed space-y-4">
                <p>
                  High-performance ServiceNow implementation services with coverage from planning → deployment → ongoing support.
                </p>
                <p>
                  Innovative problem solvers who convert complex challenges into opportunities through collaboration-driven execution.
                </p>
                <p>
                  We provide the tools, support, and guidance for long-term success.
                </p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 hidden lg:block relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1660854088062-c178a98550cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlcnNoaXAlMjBzdWNjZXNzfGVufDF8fHx8MTc2ODU2OTIyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business leadership success"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW DO WE ENSURE SUCCESS? (DETAILED STEPS) */}
      <section ref={stepsRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              How Do We Ensure Success?
            </h2>
          </motion.div>

          <div className="space-y-6">
            {detailedSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-[#0E2A47]/8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] p-10"
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2ECC71] to-[#27AE60] rounded-2xl flex items-center justify-center shadow-lg">
                      <step.icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl font-bold text-[#2ECC71]/20">{step.number}</span>
                      <h3 className="text-3xl font-bold text-[#0E2A47]">{step.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {step.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                          <span className="text-[#64748B] text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM SOLUTIONS (TABBED MODULES) */}
      <section ref={platformRef} className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={platformInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#0E2A47] mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              Partner with Our Pro ServiceNow Implementation Specialist for Solutions
            </h2>
          </motion.div>

          {/* Tabs */}
          <div
            className="mb-12 -mx-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex gap-3 px-8 min-w-max pb-4">
              {platformTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedPlatform(tab.key as keyof typeof platformModules)}
                  className={`snap-start px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap ${selectedPlatform === tab.key
                    ? 'bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white shadow-[0_8px_24px_rgba(46,204,113,0.3)]'
                    : 'bg-white text-[#64748B] border border-[#0E2A47]/8 hover:border-[#2ECC71] hover:text-[#0E2A47]'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
              {/* Spacer for right padding */}
              <div className="w-5 shrink-0" />
            </div>
          </div>

          {/* Platform Content */}
          <motion.div
            key={selectedPlatform}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl border border-[#0E2A47]/8 shadow-[0_24px_64px_rgba(0,0,0,0.08)] p-6 lg:p-12"
          >
            <div className="flex items-start gap-6 mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2ECC71] to-[#27AE60] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <currentPlatform.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#0E2A47] mb-3">{currentPlatform.title}</h3>
                <p className="text-xl text-[#2ECC71] font-semibold">{currentPlatform.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Features */}
              <div>
                <h4 className="text-xl font-bold text-[#0E2A47] mb-6">How We Deliver</h4>
                <ul className="space-y-4">
                  {currentPlatform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-[#64748B] text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xl font-bold text-[#0E2A47] mb-6">{currentPlatform.benefits.title}</h4>
                <ul className="space-y-4">
                  {currentPlatform.benefits.list.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-[#64748B] text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT & CTA SECTION */}
      <section ref={ctaRef} className="py-16 lg:py-32 bg-[#0E2A47] relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4 tracking-tight text-3xl lg:text-[48px] font-bold">
              Ready to Transform Your Business?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                    <span className="text-white/80">Objective & requirement sharing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Plan creation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                    <span className="text-white/80">Execution + ongoing support</span>
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
                      placeholder="Tell us about your implementation needs..."
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