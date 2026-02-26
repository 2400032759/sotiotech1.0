import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Sparkles, HeadphonesIcon, Users, Puzzle, Palette, Shield } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'IT Support & Gen AI',
    description: 'Transform service delivery with Gen AI-powered solutions for IT and customer support excellence.',
    color: 'from-[#2ED573] to-[#00EE61]',
  },
  {
    icon: Users,
    title: 'HR Service Delivery',
    description: 'Streamline HR processes and enhance employee experiences with intelligent automation.',
    color: 'from-[#2ED573] to-[#00EE61]',
  },
  {
    icon: Puzzle,
    title: 'Platform Integrations',
    description: 'Seamlessly integrate ServiceNow with your existing enterprise ecosystem.',
    color: 'from-[#2ED573] to-[#00EE61]',
  },
  {
    icon: Palette,
    title: 'UI/UX Experience',
    description: 'Design intuitive, user-centric interfaces that drive adoption and productivity.',
    color: 'from-[#2ED573] to-[#00EE61]',
  },
  {
    icon: Shield,
    title: 'Security & Risk',
    description: 'Build robust security frameworks and resilience strategies.',
    color: 'from-[#2ED573] to-[#00EE61]',
  },
  {
    icon: HeadphonesIcon,
    title: 'Intelligent Operations',
    description: 'Leverage AI and automation to optimize operations and accelerate delivery.',
    color: 'from-[#2ED573] to-[#00EE61]',
  },
];

export function ServiceGrid() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-b from-[#2ECC71]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-t from-[#0E2A47]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-[#0E2A47] mb-6 text-3xl sm:text-4xl lg:text-5xl font-[900] tracking-tight">
            Comprehensive ServiceNow Solutions
          </h2>
          <p className="text-[#64748B] text-[17px] max-w-3xl mx-auto leading-relaxed">
            End-to-end capabilities designed to transform your digital landscape
          </p>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#2ECC71] rounded-xl flex items-center justify-center">
                  <service.icon
                    className="w-6 h-6 text-white"
                    strokeWidth={2}
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0E2A47] mb-3">
                {service.title}
              </h3>

              <p className="text-[#64748B] text-[15px] leading-[1.6]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}