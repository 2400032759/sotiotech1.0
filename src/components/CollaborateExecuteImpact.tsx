import { motion, useInView as useMotionInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Users, Star } from 'lucide-react';

function CountUpAnimation({ target, duration = 800 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useMotionInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <div ref={ref}>{count}+</div>;
}

export function CollaborateExecuteImpact() {
  const sectionRef = useRef(null);
  const isInView = useMotionInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-12 lg:py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-[#0E2A47]/10">
      {/* Modern Enterprise Background - Soft Radial Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-24"
        >
          <h2 className="text-[#0E2A47] leading-tight tracking-tight text-3xl sm:text-4xl lg:text-[56px] font-bold">
            Collaborate <span className="text-[#2ECC71]">|</span> Execute <span className="text-[#2ECC71]">|</span> Impact
          </h2>
        </motion.div>

        {/* Top Row: Value Prop (7 cols) + Experts Card (5 cols) */}
        <div className="grid grid-cols-12 gap-8 mb-8">
          {/* Value Proposition Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="col-span-12 lg:col-span-7 bg-white rounded-[28px] p-6 lg:p-10 relative overflow-hidden group"
            style={{
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
              transition: 'box-shadow 300ms ease-out, transform 300ms ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.10)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
            }}
          >
            {/* Subtle accent line */}
            <div className="absolute left-0 top-10 bottom-10 w-[2px] bg-[#2ECC71] opacity-20" />

            <div className="pl-4">
              <h3 className="text-[#0E2A47] mb-6 text-2xl lg:text-[40px] font-semibold">
                Our Value Proposition
              </h3>
              <p className="text-[#64748B] leading-[1.7] mb-6 max-w-[90%] text-base lg:text-lg">
                Our goal is to enable individuals and businesses to realize their complete capabilities of ServiceNow implementation. The focus of our method is on ongoing cooperation, coming together to address challenges with precision and expertise.
              </p>
              <p className="text-[#64748B] leading-[1.7] max-w-[90%] text-base lg:text-lg">
                We deliver comprehensive solutions that transform your digital landscape through strategic planning, expert execution, and measurable business impact across your enterprise.
              </p>
            </div>
          </motion.div>

          {/* ServiceNow Experts Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="col-span-12 lg:col-span-5 bg-[#0E2A47] rounded-[32px] p-6 lg:p-10 relative overflow-hidden group"
            style={{
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
              transition: 'box-shadow 300ms ease-out, transform 300ms ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.10)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
            }}
          >
            {/* Subtle radial glow instead of grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
            </div>

            <div className="relative flex flex-col items-center justify-center h-full text-center">
              {/* Icon cluster */}
              <div className="mb-8 flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2ECC71] to-[#27AE60] border-2 border-white flex items-center justify-center shadow-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#27AE60] to-[#2ECC71] border-2 border-white shadow-lg" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2ECC71] to-[#27AE60] border-2 border-white shadow-lg" />
              </div>

              {/* Count-up number */}
              <div className="text-white mb-3 text-5xl lg:text-[72px] font-bold leading-none">
                <CountUpAnimation target={42} duration={800} />
              </div>

              <div className="text-white/80 text-lg font-semibold">
                ServiceNow Experts
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: CSAT Card (4 cols) + Stats Card (8 cols) */}
        <div className="grid grid-cols-12 gap-8">
          {/* CSAT Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="col-span-12 lg:col-span-4 bg-gradient-to-br from-[#2ECC71] to-[#27AE60] rounded-[32px] p-6 lg:p-10 relative overflow-hidden group"
            style={{
              boxShadow: '0 10px 30px rgba(46,204,113,0.15)',
              transition: 'box-shadow 300ms ease-out, transform 300ms ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(46,204,113,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(46,204,113,0.15)';
            }}
          >
            {/* Subtle radial glow instead of grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
            </div>

            <div className="relative flex flex-col items-center justify-center h-full text-center">
              {/* Icon in soft circle */}
              <div className="mb-6 relative w-16 h-16">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md" />
                <div className="relative w-full h-full bg-white/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
              </div>

              {/* Score */}
              <div className="text-white mb-2 text-5xl lg:text-[56px] font-bold leading-none">
                4.7/5
              </div>

              {/* Label */}
              <div className="text-white uppercase tracking-wider text-base font-semibold tracking-[0.05em]">
                CSAT Score
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="col-span-12 lg:col-span-8 bg-white rounded-[28px] p-6 lg:p-10 relative overflow-hidden"
            style={{
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
              transition: 'box-shadow 300ms ease-out, transform 300ms ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.10)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full items-center">
              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                className="text-center relative"
              >
                <div className="text-[#2ECC71] mb-2 text-4xl lg:text-[40px] font-bold">
                  500+
                </div>
                <div className="text-[#64748B] text-base font-medium">
                  Active Projects
                </div>
                {/* Divider */}
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-[#0E2A47] opacity-10" />
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.62, ease: 'easeOut' }}
                className="text-center relative"
              >
                <div className="text-[#2ECC71] mb-2 text-4xl lg:text-[40px] font-bold">
                  98%
                </div>
                <div className="text-[#64748B] text-base font-medium">
                  Client Retention
                </div>
                {/* Divider */}
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-[#0E2A47] opacity-10" />
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.74, ease: 'easeOut' }}
                className="text-center"
              >
                <div className="text-[#2ECC71] mb-2 text-4xl lg:text-[40px] font-bold">
                  15+
                </div>
                <div className="text-[#64748B] text-base font-medium">
                  Years Experience
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
