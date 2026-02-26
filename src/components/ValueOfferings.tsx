import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Sparkles, HeadphonesIcon, Users, Puzzle, Palette, Shield } from 'lucide-react';

const offerings = [
  {
    icon: Sparkles,
    title: 'Empower Full Potential',
    description: 'Unlock the complete capabilities of ServiceNow implementation with strategic guidance and expert execution.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Elevate IT & Customer Support',
    description: 'Transform service delivery with Gen AI-powered solutions for IT and customer support excellence.',
  },
  {
    icon: Users,
    title: 'Efficient Employee & HR Support',
    description: 'Streamline HR processes and enhance employee experiences with intelligent automation.',
  },
  {
    icon: Puzzle,
    title: 'Platform & Integrations',
    description: 'Seamlessly integrate ServiceNow with your existing enterprise ecosystem for unified operations.',
  },
  {
    icon: Palette,
    title: 'UI/UX Experience',
    description: 'Design intuitive, user-centric interfaces that drive adoption and productivity.',
  },
  {
    icon: Shield,
    title: 'Security, Risk & Resilience',
    description: 'Build robust security frameworks and resilience strategies to protect your digital assets.',
  },
];

export function ValueOfferings() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#00d98e]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-gray-900 mb-6">
            Our Value Offerings as Your{' '}
            <span className="bg-gradient-to-r from-[#00d98e] to-[#00b377] bg-clip-text text-transparent">
              ServiceNow Partner
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to transform your digital landscape and drive measurable business impact
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200/50 hover:border-[#00d98e]/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-[#00d98e]/10"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d98e]/0 to-[#00b377]/0 group-hover:from-[#00d98e]/5 group-hover:to-[#00b377]/5 rounded-3xl transition-all duration-300" />
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00d98e] to-[#00b377] rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#00d98e]/10 to-[#00b377]/10 group-hover:from-[#00d98e] group-hover:to-[#00b377] rounded-2xl flex items-center justify-center transition-all duration-300">
                    <offering.icon className="w-8 h-8 text-[#00d98e] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0d3b4d] transition-colors">
                  {offering.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {offering.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
