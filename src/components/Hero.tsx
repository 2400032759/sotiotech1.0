import { motion } from 'motion/react';
import { TrendingUp, Zap } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const logos = [
    { name: 'Infosys', url: 'https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg' },
    { name: 'Partner', url: 'https://dypdvfcjkqkg2.cloudfront.net/large/1797615-2907.png' },
];

interface HeroProps {
    onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24">
            {/* Modern Enterprise Background - White */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-white" />
            </div>

            {/* Inner Glow Vignette */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2ECC71]/[0.02] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/[0.03] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A47]/[0.02] via-transparent to-[#0E2A47]/[0.02]" />
            </div>

            {/* Live Ticker - Top Right */}
            <div className="hidden lg:flex absolute top-32 right-8 gap-3 z-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-white/60 backdrop-blur-xl border border-[#0E2A47]/10 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-lg"
                >
                    <TrendingUp className="w-4 h-4 text-[#2ECC71]" />
                    <span className="text-sm font-semibold text-[#0E2A47] tracking-tight">500+ Active Projects</span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="bg-white/60 backdrop-blur-xl border border-[#0E2A47]/10 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-lg"
                >
                    <Zap className="w-4 h-4 text-[#2ECC71]" />
                    <span className="text-sm font-semibold text-[#0E2A47] tracking-tight">98% CSAT Score</span>
                </motion.div>
            </div>

            <div className="max-w-[1400px] mx-auto px-8 py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                {/* Left column - Content */}
                <div className="space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-[#0E2A47] leading-[1.1] tracking-[0.03em] text-6xl lg:text-[90px] font-bold"
                        style={{ fontFamily: '"Russo One", sans-serif', letterSpacing: '0.03em' }}
                    >
                        Transform Your Business with{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-[#0E2A47]" style={{ fontFamily: '"Russo One", sans-serif', letterSpacing: '0.03em' }}>Sotiotech</span>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#2ECC71] origin-left"
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        className="text-black text-lg lg:text-xl leading-relaxed max-w-xl"
                    >
                        We are the leading experts in digital transformation, helping you collaborate, execute, and create impact at scale.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onNavigate?.('contact')}
                            className="group bg-[#2ECC71] text-[#00282B] px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Let's Talk
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>

                        <button
                            onClick={() => onNavigate?.('case-studies')}
                            className="text-[#0E2A47] font-semibold text-lg hover:text-[#2ECC71] transition-colors py-3 sm:py-0"
                        >
                            View Case Studies
                        </button>
                    </motion.div>

                    {/* Trusted By - Bottom Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="pt-12 border-t border-[#0E2A47]/10"
                    >
                        <p className="text-sm font-bold tracking-widest uppercase text-[#64748B] mb-6">
                            Trusted by Enterprises Globally
                        </p>

                        {/* Infinite Marquee Animation - Seamless Loop */}
                        <div className="relative overflow-hidden">
                            {/* Fade edges for polish */}
                            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

                            <div className="flex">
                                {/* First track - continuous loop */}
                                <motion.div
                                    className="flex items-center gap-16 flex-shrink-0"
                                    animate={{
                                        x: [0, -100 * logos.length],
                                    }}
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 25,
                                            ease: "linear",
                                        },
                                    }}
                                >
                                    {logos.map((logo, idx) => (
                                        <motion.div
                                            key={`track1-${idx}`}
                                            whileHover={{ scale: 1.15, y: -5 }}
                                            className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer flex-shrink-0"
                                        >
                                            <img
                                                src={logo.url}
                                                alt={logo.name}
                                                className="h-16 w-auto object-contain"
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Second track - seamless duplicate */}
                                <motion.div
                                    className="flex items-center gap-16 flex-shrink-0 ml-16"
                                    animate={{
                                        x: [0, -100 * logos.length],
                                    }}
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 25,
                                            ease: "linear",
                                        },
                                    }}
                                >
                                    {logos.map((logo, idx) => (
                                        <motion.div
                                            key={`track2-${idx}`}
                                            whileHover={{ scale: 1.15, y: -5 }}
                                            className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer flex-shrink-0"
                                        >
                                            <img
                                                src={logo.url}
                                                alt={logo.name}
                                                className="h-16 w-auto object-contain"
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Third track - additional duplicate for perfect seamlessness */}
                                <motion.div
                                    className="flex items-center gap-16 flex-shrink-0 ml-16"
                                    animate={{
                                        x: [0, -100 * logos.length],
                                    }}
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 25,
                                            ease: "linear",
                                        },
                                    }}
                                >
                                    {logos.map((logo, idx) => (
                                        <motion.div
                                            key={`track3-${idx}`}
                                            whileHover={{ scale: 1.15, y: -5 }}
                                            className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer flex-shrink-0"
                                        >
                                            <img
                                                src={logo.url}
                                                alt={logo.name}
                                                className="h-16 w-auto object-contain"
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right column - Glass Dashboard */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden lg:block relative h-[700px]"
                >
                    {/* Main glass dashboard */}
                    <div
                        className="absolute top-20 right-0 w-[550px] h-[400px]"
                    >
                        {/* Glass panel */}
                        <div className="relative w-full h-full bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-[0_20px_60px_rgba(14,42,71,0.15)] overflow-hidden">
                            {/* Dashboard content */}
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="https://www.servicenow.com/favicon.ico"
                                            alt="ServiceNow"
                                            className="w-4 h-4"
                                        />
                                        <span className="text-sm font-semibold text-[#0E2A47]">ServiceNow Dashboard</span>
                                    </div>
                                    <div className="text-xs text-[#64748B]">Real-time Analytics</div>
                                </div>

                                {/* Charts visualization */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-[#2ECC71]/10 to-[#27AE60]/5 rounded-2xl p-4 border border-[#2ECC71]/20">
                                        <div className="text-3xl font-bold text-[#0E2A47] mb-1">847</div>
                                        <div className="text-xs text-[#64748B]">Active Tickets</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#0E2A47]/5 to-[#0E2A47]/10 rounded-2xl p-4 border border-[#0E2A47]/10">
                                        <div className="text-3xl font-bold text-[#0E2A47] mb-1">94%</div>
                                        <div className="text-xs text-[#64748B]">Resolution Rate</div>
                                    </div>
                                </div>

                                {/* Workflow bars */}
                                <div className="space-y-3">
                                    {[85, 92, 78, 88].map((value, idx) => (
                                        <div key={idx} className="space-y-1">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-[#64748B]">Workflow {idx + 1}</span>
                                                <span className="font-semibold text-[#0E2A47]">{value}%</span>
                                            </div>
                                            <div className="h-2 bg-[#0E2A47]/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${value}%` }}
                                                    transition={{ duration: 1, delay: 0.8 + idx * 0.1 }}
                                                    className="h-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60] rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Notification badge */}
                        <motion.div
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.2,
                                type: 'spring',
                                stiffness: 200
                            }}
                            className="absolute -top-4 -right-4 bg-gradient-to-br from-[#2ECC71] to-[#27AE60] text-white px-5 py-3 rounded-2xl shadow-xl border-4 border-[#F8FAFC]"
                        >
                            <div className="text-xs font-bold">Optimization Complete</div>
                            <div className="text-lg font-bold">+24%</div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}