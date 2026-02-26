import { motion } from 'motion/react';
import { Check, Target, Zap, TrendingUp, Users, Award, Lightbulb, Shield, ArrowRight, Linkedin, Twitter, Facebook, Youtube, Settings, User, Headphones, Briefcase, Lock, Smartphone, Layers, RefreshCw } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import { Footer } from './Footer';

const guidingPrinciples = [
  {
    title: 'Collaborate',
    description: 'We believe in the power of teamwork. By working together and sharing ideas, we create solutions that are greater than the sum of their parts.',
    image: 'https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2ODI5NjA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Execute',
    description: 'We are committed to turning visions into reality with precision and efficiency. Our focus is on turning plans into reality with precision and efficiency.',
    image: 'https://images.unsplash.com/photo-1763665814482-bdf1016e4d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGJsb2NrcyUyMHBsYW5uaW5nfGVufDF8fHx8MTc2ODQwODA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Impact',
    description: 'We aim to make a difference. Our goal is to create meaningful and lasting outcomes that drive positive change for our clients and beyond.',
    image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGlubm92YXRpb258ZW58MXx8fHwxNzY4NDA4MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

const coreValues = [
  {
    icon: Target,
    title: 'Excellence in Execution',
    description: 'Sotiotech is synonymous with precision and quality. From planning to deployment, ensuring optimized performance for your solutions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Problem Solvers',
    description: 'Our team excels at solving complex challenges with creative and analytical solutions, turning obstacles into opportunities for project success.',
  },
  {
    icon: Users,
    title: 'Seamless Collaboration for Maximum Impact',
    description: 'We prioritize collaboration, working closely with clients and partners to drive impactful solutions and shared success.',
  },
  {
    icon: TrendingUp,
    title: 'Empowering Solutions for a Brighter Future',
    description: 'We empower our clients by providing tools and support needed to excel, fostering an environment where innovative and transformative views thrive.',
  },
];

const stats = [
  { number: '6+', label: 'Years of Excellence', description: 'A legacy of innovation and superior results, built over more than a decade.' },
  { number: '51+', label: 'Successful Projects', description: 'Transforming challenges into achievements with a diverse portfolio of impactful projects.' },
  { number: '42+', label: 'ServiceNow Experts', description: 'A team of dedicated professionals, certified and skilled in delivering premier ServiceNow solutions.' },
  { number: '7+', label: 'Industry Qualified Areas', description: 'Bringing specialized knowledge and tailored solutions across a wide range of industries.' },
  { number: '5+', label: 'Global Offices', description: 'A global footprint that allows us to serve clients with exceptional reach and flexibility.' },
];

const services = [
  { title: 'Digital Transformation Services', icon: RefreshCw },
  { title: 'Professional & Upgrade Services', icon: Users },
  { title: 'Customer Experience Solutions', icon: Target },
  { title: 'Employee & HR Experience Solutions', icon: Briefcase },
  { title: 'ServiceNow Support & Integrations', icon: Headphones },
  { title: 'Portal, Workspace & Mobile Apps', icon: Smartphone },
  { title: 'Platform Implementation & Consulting', icon: Layers },
  { title: 'Platform Governance & Security', icon: Lock },
  { title: 'Enable Change Management Services', icon: Settings },
];

const blogPosts = [
  {
    image: 'https://images.unsplash.com/photo-1615216057273-cbef9ec5636a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGJsb2clMjBhcnRpY2xlfGVufDF8fHx8MTc2ODQwODA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Transforming Enterprise Workflows with ServiceNow',
    date: 'January 10, 2026',
    category: 'Digital Transformation',
  },
  {
    image: 'https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2ODM1NzUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'The Future of IT Service Management in 2026',
    date: 'January 8, 2026',
    category: 'ITSM',
  },
  {
    image: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjgzNDY5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Building High-Performance Teams with HR Automation',
    date: 'January 5, 2026',
    category: 'HR Solutions',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2ODMwNzc1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Data-Driven Decision Making with Analytics',
    date: 'January 3, 2026',
    category: 'Analytics',
  },
  {
    image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3NjgzNTYxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Cloud Migration Strategies for Enterprise Success',
    date: 'December 28, 2025',
    category: 'Cloud Computing',
  },
  {
    image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2ODM5NDAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Best Practices for ServiceNow Development',
    date: 'December 25, 2025',
    category: 'Development',
  },
  {
    image: 'https://images.unsplash.com/photo-1615216057273-cbef9ec5636a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGJsb2clMjBhcnRpY2xlfGVufDF8fHx8MTc2ODQwODA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Security Operations: Protecting Your Digital Assets',
    date: 'December 20, 2025',
    category: 'Security',
  },
  {
    image: 'https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2ODM1NzUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Customer Service Excellence Through Automation',
    date: 'December 18, 2025',
    category: 'Customer Service',
  },
  {
    image: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjgzNDY5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Governance, Risk, and Compliance Made Simple',
    date: 'December 15, 2025',
    category: 'GRC',
  },
];

export function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#0E2A47] pt-32 pb-24">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        {/* Animated Green Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#2ECC71] rounded-full blur-[120px]"
        />

        <div className="relative max-w-[1400px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-white mb-6">
              About Sotiotech
            </h1>
            <p className="text-2xl text-[#2ECC71] font-semibold tracking-wide">
              YOUR PARTNER IN SERVICENOW SUCCESS
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Guiding Principles */}
      <div className="bg-white py-24 relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#0E2A47] mb-16"
          >
            Our Guiding Principles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guidingPrinciples.map((principle, idx) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-3xl overflow-hidden border border-[#E2E8F0] group"
                style={{
                  boxShadow: '0 10px 40px -10px rgba(46, 204, 113, 0.1)',
                }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-[#2ECC71] text-2xl font-bold mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-[#64748B] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values Define Who We Are */}
      <div className="bg-white py-24 relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#0E2A47] mb-16"
          >
            Our values define who we are
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2ECC71] to-[#27AE60] flex items-center justify-center mx-auto mb-6 shadow-lg"
                  style={{
                    boxShadow: '0 10px 30px -10px rgba(46, 204, 113, 0.5)',
                  }}
                >
                  <value.icon className="w-10 h-10 text-white" strokeWidth={2} />
                </motion.div>
                <h3 className="text-[#0E2A47] font-bold text-lg mb-3">
                  {value.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className="relative bg-gradient-to-r from-[#2ECC71] to-[#27AE60] py-20 lg:pb-24 overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-4 lg:px-8">
          {/* Centered Content Stack */}
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col items-center"
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight lg:leading-[1.1] max-w-[90%] lg:max-w-[1000px] drop-shadow-sm">
                Our Commitment to Collaborative Growth and Innovation at Sotiotech
              </h2>
              <p className="text-white text-lg lg:text-xl leading-[1.6] mb-10 max-w-[90%] lg:max-w-[840px] opacity-95">
                Welcome to Sotiotech! Our goal is to help people and businesses reach their full potential. We believe that using our abilities is essential for making a positive difference in the world. We know that tackling problems, helping each other, and sharing ideas are crucial for success. By collaborating, we create a space where innovation and growth can thrive for both our clients and our team.
              </p>
              <motion.button
                onClick={() => {
                  console.log('Book Call triggered from About Commitment section');
                  onNavigate('book-call');
                }}
                whileHover={{ scale: 1.05, backgroundColor: '#1a3a5c' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0E2A47] text-[#2ECC71] px-10 py-5 rounded-full font-bold text-base flex items-center gap-3 shadow-[0_20px_40px_-12px_rgba(14,42,71,0.3)] hover:shadow-2xl transition-all mb-16 relative z-10"
              >
                Connect With Expert
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Centered Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[960px]"
            >
              <div className="rounded-3xl shadow-2xl overflow-hidden aspect-[16/9] lg:aspect-[21/9] relative mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
                  alt="Sotiotech Team Collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-20 relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="mb-4">
                  <div className="text-5xl font-bold text-[#2ECC71] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#0E2A47] font-bold text-sm mb-2">
                    {stat.label}
                  </div>
                </div>
                <p className="text-[#64748B] text-xs leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-[#0E2A47] py-24 relative overflow-hidden">
        {/* Subtle radial glow for dark section */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Discover Sotiotech: Our Vision, Mission, and Identity
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              boxShadow: '0 30px 80px -20px rgba(46, 204, 113, 0.3)',
            }}
          >
            <div className="aspect-video bg-[#0E2A47]/50 flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Sotiotech Vision"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="bg-white py-24 relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#2ECC71] text-4xl font-bold mb-4">
              What do we offer ?
            </h2>
            <p className="text-[#0E2A47] text-2xl font-semibold mb-6">
              "We Simplify Your Workflows"
            </p>
            <p className="text-[#64748B] text-lg max-w-4xl mx-auto leading-relaxed">
              Whether you're looking to improve the employee experience, streamline IT processes, make the enterprise more secure and resilient, or enhance customer service, our team of problem solvers at sotiotech are here to help you achieve your goals with best-in-class solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              const serviceMaps: Record<string, string> = {
                'Digital Transformation Services': 'digital-transformation',
                'Professional & Upgrade Services': 'implementation',
                'Customer Experience Solutions': 'csm',
                'Employee & HR Experience Solutions': 'hrsd',
                'ServiceNow Support & Integrations': 'managed-support',
                'Portal, Workspace & Mobile Apps': 'itsm',
                'Platform Implementation & Consulting': 'implementation',
                'Platform Governance & Security': 'grc',
                'Enable Change Management Services': 'advisory',
              };
              return (
                <motion.div
                  key={service.title}
                  onClick={() => onNavigate(serviceMaps[service.title] || 'home')}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 border-2 border-[#E2E8F0] hover:border-[#2ECC71]/40 transition-all cursor-pointer group"
                  style={{
                    boxShadow: '0 4px 20px -5px rgba(14, 42, 71, 0.1)',
                  }}
                >
                  <div className="mb-4">
                    <IconComponent className="w-12 h-12 text-[#2ECC71] group-hover:text-[#27AE60] transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#0E2A47] font-bold text-lg group-hover:text-[#2ECC71] transition-colors">
                    {service.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-white py-24 relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#0E2A47] mb-16"
          >
            Latest Insights & Articles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={idx}
                onClick={() => onNavigate('articles')}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] group cursor-pointer"
                style={{
                  boxShadow: '0 10px 40px -10px rgba(46, 204, 113, 0.1)',
                }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#2ECC71] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#64748B] text-sm mb-2">{post.date}</p>
                  <h3 className="text-[#0E2A47] font-bold text-lg group-hover:text-[#2ECC71] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Read More Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('articles')}
              className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 mx-auto group shadow-lg hover:shadow-xl transition-all"
              style={{
                boxShadow: '0 10px 30px -10px rgba(46, 204, 113, 0.5)',
              }}
            >
              Read More Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-white py-16 relative overflow-hidden">
        {/* Modern Enterprise Background - Soft Radial Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-[#0E2A47] text-3xl font-bold mb-8">
              Join Our Social Media Handles
            </h3>
            <div className="flex items-center justify-center gap-6">
              {[
                { icon: Linkedin, name: 'LinkedIn', color: '#0077B5' },
                { icon: Youtube, name: 'YouTube', color: '#FF0000' },
                { icon: Facebook, name: 'Facebook', color: '#1877F2' },
                { icon: Twitter, name: 'Twitter', color: '#1DA1F2' },
              ].map((social, idx) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-14 h-14 rounded-full border-2 border-[#E2E8F0] flex items-center justify-center hover:border-[#2ECC71] transition-all group"
                >
                  <social.icon className="w-6 h-6 text-[#64748B] group-hover:text-[#2ECC71] transition-colors" />
                </motion.a>
              ))}
            </div>
            <motion.button
              onClick={() => {
                console.log('Book Call triggered from About Social section');
                onNavigate('book-call');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all relative z-10"
            >
              Connect With Expert
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}