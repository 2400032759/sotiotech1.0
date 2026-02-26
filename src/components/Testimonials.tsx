import { useState, useRef, useEffect } from 'react';
import { motion, useInView as useMotionInView } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Sotiotech's expertise in ServiceNow transformation exceeded our expectations. Their team delivered a solution that not only met our requirements but transformed our entire IT service delivery model. The implementation was seamless and the results speak for themselves.",
    name: 'Mohammed Al-Rashid',
    title: 'CIO',
    company: 'Unikomm',
    initials: 'MA',
  },
  {
    quote: "Working with Sotiotech was a game-changer for our organization. Their deep platform knowledge and commitment to our success resulted in a 60% improvement in operational efficiency. They are true partners in every sense of the word.",
    name: 'Rajesh Kumar',
    title: 'VP of Digital Transformation',
    company: 'Infosys',
    initials: 'RK',
  },
  {
    quote: "The level of professionalism and technical expertise Sotiotech brought to our project was outstanding. They guided us through every step of our ServiceNow journey with precision and care.",
    name: 'Sarah Johnson',
    title: 'Director of IT Operations',
    company: 'Seven',
    initials: 'SJ',
  },
];

function TestimonialCard({
  testimonial,
  isPrimary,
  isLeft,
  isRight,
}: {
  testimonial: typeof testimonials[0];
  isPrimary: boolean;
  isLeft?: boolean;
  isRight?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="absolute"
      initial={false}
      animate={{
        scale: isPrimary ? 1 : 0.88,
        opacity: isPrimary ? 1 : 0.7,
        rotateY: isLeft ? 6 : isRight ? -6 : 0,
        x: typeof window !== 'undefined' && window.innerWidth < 1024
          ? (isLeft ? -40 : isRight ? 40 : 0) // Smaller offset on mobile
          : (isLeft ? -280 : isRight ? 280 : 0),
        z: isPrimary && isHovered ? 40 : isPrimary ? 20 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        width: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'calc(100vw - 48px)' : '720px',
        height: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'auto' : '420px',
        minHeight: typeof window !== 'undefined' && window.innerWidth < 1024 ? '350px' : '420px',
        transformStyle: 'preserve-3d',
        zIndex: isPrimary ? 30 : 10,
      }}
      onMouseEnter={() => isPrimary && setIsHovered(true)}
      onMouseLeave={() => isPrimary && setIsHovered(false)}
    >
      <div
        className="relative w-full h-full bg-white rounded-[36px] flex flex-col"
        style={{
          padding: typeof window !== 'undefined' && window.innerWidth < 1024 ? '24px' : '48px',
          boxShadow: isPrimary && isHovered
            ? '0 40px 100px rgba(0,0,0,0.16)'
            : isPrimary
              ? '0 30px 80px rgba(0,0,0,0.12)'
              : '0 20px 50px rgba(0,0,0,0.08)',
          transition: 'box-shadow 600ms ease-out',
        }}
      >
        {/* Top Row - Authority Strip */}
        <div className="flex items-center justify-between mb-6">
          {/* Company */}
          <div className="text-[#0E2A47] font-bold" style={{ fontSize: '18px' }}>
            {testimonial.company}
          </div>

          {/* Verified Badge */}
          {isPrimary && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20">
              <div className="w-2 h-2 rounded-full bg-[#2ECC71]" />
              <span className="text-[#2ECC71] font-semibold" style={{ fontSize: '13px' }}>
                Verified Enterprise Client
              </span>
            </div>
          )}
        </div>

        {/* Main Content - Quote (HERO) */}
        <div className="flex-1 relative mb-6 overflow-hidden">
          {/* Background Quote Icon */}
          <Quote
            className="absolute top-0 left-0 text-[#2ECC71] opacity-[0.06]"
            style={{ width: '120px', height: '120px' }}
          />

          {/* Quote Text */}
          <p
            className="relative text-[#0E2A47] leading-[1.65]"
            style={{
              fontSize: isPrimary ? '20px' : '18px',
              transition: 'font-size 600ms ease-out',
            }}
          >
            "{testimonial.quote}"
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#0E2A47] opacity-[0.08] mb-5" />

        {/* Bottom Row - Person (Secondary) */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div
            className="rounded-full bg-gradient-to-br from-[#2ECC71] to-[#27AE60] flex items-center justify-center text-white font-bold shrink-0"
            style={{ width: '48px', height: '48px', fontSize: '16px' }}
          >
            {testimonial.initials}
          </div>

          <div>
            <div className="font-semibold text-[#0E2A47]" style={{ fontSize: '16px' }}>
              {testimonial.name}
            </div>
            <div className="text-[#64748B]" style={{ fontSize: '14px' }}>
              {testimonial.title}
            </div>
            <div className="text-[#2ECC71] font-semibold" style={{ fontSize: '14px' }}>
              {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useMotionInView(sectionRef, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotation every 7 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Get visible cards (left, center, right)
  const getVisibleCards = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % testimonials.length;

    return [
      { testimonial: testimonials[prevIndex], position: 'left' as const, index: prevIndex },
      { testimonial: testimonials[currentIndex], position: 'center' as const, index: currentIndex },
      { testimonial: testimonials[nextIndex], position: 'right' as const, index: nextIndex },
    ];
  };

  const visibleCards = getVisibleCards();

  const handlePrev = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8FAFC] py-20 lg:py-[140px]"
    >
      {/* Modern Enterprise Background - Soft Radial Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F8FAFC] to-[#E5E9F0]" />
      </div>

      {/* Soft radial glow behind center card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(46,204,113,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-24 max-w-[820px] mx-auto"
        >
          <div
            className="text-[#64748B] uppercase mb-4"
            style={{
              fontSize: '14px',
              letterSpacing: '0.18em',
              fontWeight: 600,
            }}
          >
            Client Success Stories
          </div>
          <h2
            className="text-[#0E2A47] text-3xl lg:text-[48px] font-bold leading-tight"
          >
            Voices of satisfaction from our<br />valued partners
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative flex items-center justify-center mx-auto w-full lg:w-[720px]"
          style={{
            perspective: '2000px',
            minHeight: '500px',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards */}
          {visibleCards.map((card) => (
            <TestimonialCard
              key={card.index}
              testimonial={card.testimonial}
              isPrimary={card.position === 'center'}
              isLeft={card.position === 'left'}
              isRight={card.position === 'right'}
            />
          ))}

          {/* Desktop Navigation Arrows */}
          <motion.button
            animate={{ x: [-5, 0, -5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 w-12 h-12 rounded-full bg-white border border-[#0E2A47]/10 shadow-lg items-center justify-center text-[#0E2A47] hover:border-[#2ECC71] hover:text-[#2ECC71] transition-all z-40 -translate-x-[60px]"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </motion.button>

          <motion.button
            animate={{ x: [5, 0, 5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="hidden md:flex absolute right-0 w-12 h-12 rounded-full bg-white border border-[#0E2A47]/10 shadow-lg items-center justify-center text-[#0E2A47] hover:border-[#2ECC71] hover:text-[#2ECC71] transition-all z-40 translate-x-[60px]"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2} />
          </motion.button>
        </div>

        {/* Mobile Navigation Arrows - Below carousel */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white border border-[#0E2A47]/10 shadow-lg flex items-center justify-center text-[#0E2A47] hover:border-[#2ECC71] hover:text-[#2ECC71] transition-all"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white border border-[#0E2A47]/10 shadow-lg flex items-center justify-center text-[#0E2A47] hover:border-[#2ECC71] hover:text-[#2ECC71] transition-all"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2} />
          </motion.button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8 md:mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${index === currentIndex
                ? 'w-8 bg-gradient-to-r from-[#2ECC71] to-[#27AE60]'
                : 'w-2 bg-[#0E2A47]/20 hover:bg-[#0E2A47]/40'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}