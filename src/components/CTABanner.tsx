import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

interface CTABannerProps {
  onNavigate?: (page: string) => void;
}

export function CTABanner({ onNavigate }: CTABannerProps) {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#F8FAFC] py-12 lg:py-24">
      {/* Modern Enterprise Background - Soft Radial Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[36px] overflow-hidden"
          style={{
            background: '#103851',
            boxShadow: '0 40px 80px -20px rgba(14, 42, 71, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Content */}
          <div className="relative z-10 px-6 py-12 lg:px-12 lg:py-20 text-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-[#2ECC71]/30 bg-[#2ECC71]/10 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-[#2ECC71]" />
              <span className="text-[#2ECC71] font-semibold text-sm uppercase tracking-wider">
                Ready to Transform Your Business?
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="text-white mb-6 text-3xl lg:text-[48px] font-bold leading-tight max-w-[900px] mx-auto"
            >
              Partner with Sotiotech and unlock the full potential of ServiceNow
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="text-white/80 mb-10 mx-auto text-lg lg:text-[20px] leading-relaxed max-w-[700px]"
            >
              Let's build your digital future together with expert ServiceNow consulting and implementation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto px-4 sm:px-0"
            >
              {/* Primary CTA */}
              <motion.button
                whileHover={{
                  y: -2,
                  boxShadow: '0 16px 32px -12px rgba(46, 204, 113, 0.45)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate?.('contact')}
                className="group inline-flex items-center justify-center gap-3 whitespace-nowrap bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white px-8 py-3.5 rounded-full font-semibold text-base lg:text-lg shadow-md w-fit"
                style={{
                  transition: 'all 400ms ease-out'
                }}
              >
                Consult Now
                <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                whileHover={{
                  y: -2,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: '#2ECC71',
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate?.('book-call')}
                className="group inline-flex items-center justify-center gap-3 whitespace-nowrap border-2 border-white/40 text-white px-8 py-3.5 rounded-full font-semibold backdrop-blur-sm text-base lg:text-lg w-fit"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  transition: 'all 400ms ease-out'
                }}
              >
                <Phone className="w-5 h-5" />
                Schedule a Call
              </motion.button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex items-center justify-center gap-2 text-white/60 text-sm"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2ECC71] to-[#27AE60] border-2 border-[#0E2A47]"
                  />
                ))}
              </div>
              <span className="ml-2">Trusted by 50+ enterprise clients worldwide</span>
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2ECC71] to-transparent opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
