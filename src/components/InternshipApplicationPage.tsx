
import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Upload, Send, Users, Sparkles, BookOpen, UserPlus } from 'lucide-react';
import { Footer } from './Footer';

interface InternshipApplicationPageProps {
    onNavigate: (page: string, slug?: string) => void;
}

export function InternshipApplicationPage({ onNavigate }: InternshipApplicationPageProps) {
    const formRef = useRef<HTMLDivElement>(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    };

    return (
        <div className="pt-32 min-h-screen bg-gray-50 font-sans">

            {/* Header */}
            <section className="bg-gradient-to-r from-[#0E2A47] to-[#1a3a5f] text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <button
                        onClick={() => onNavigate('careers')}
                        className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Careers
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Sotiotech Internship Program</h1>
                        <p className="text-xl text-gray-200 max-w-2xl">
                            Launch your career with hands-on experience in the ServiceNow ecosystem. Learn, grow, and innovate with industry experts.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-3 gap-12">
                {/* Info Column */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-[#0E2A47] mb-6">Program Highlights</h3>
                        <ul className="space-y-6">
                            {[
                                { icon: Users, title: "Mentorship", desc: "1-on-1 guidance from Senior Architects." },
                                { icon: Sparkles, title: "Real Projects", desc: "Work on live client implementations." },
                                { icon: BookOpen, title: "Certification", desc: "Support for ServiceNow certifications." },
                                { icon: UserPlus, title: "PPO Opportunity", desc: "Pre-placement offer for top performers." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center text-[#2ECC71] shrink-0">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0E2A47]">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#0E2A47] rounded-2xl p-8 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-4">Who are we looking for?</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#2ECC71] shrink-0 mt-0.5" />
                                    <span>Final year students or fresh graduates (CS/IT backgrounds).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#2ECC71] shrink-0 mt-0.5" />
                                    <span>Strong problem-solving skills and willingness to learn.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#2ECC71] shrink-0 mt-0.5" />
                                    <span>Basic knowledge of JavaScript & OOP concepts.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Form Column */}
                <div className="lg:col-span-2" ref={formRef}>
                    <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10"
                            >
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-12 h-12 text-[#2ECC71]" />
                                </div>
                                <h3 className="text-3xl font-bold text-[#0E2A47] mb-4">Application Received!</h3>
                                <p className="text-gray-600 mb-8 max-w-lg mx-auto text-lg">
                                    Thank you for applying to the Sotiotech Internship Program. We will review your profile and reach out if you are shortlisted for the next round.
                                </p>
                                <button
                                    onClick={() => onNavigate('careers')}
                                    className="bg-[#0E2A47] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1a3a5f] transition-colors"
                                >
                                    Back to Careers
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-[#0E2A47] mb-2">Internship Application Form</h2>
                                    <p className="text-gray-500">Please fill in your details accurately. Fields marked with * are mandatory.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ECC71] outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Jane" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ECC71] outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                        <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ECC71] outline-none transition-all bg-gray-50 focus:bg-white" placeholder="jane@student.edu" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                        <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ECC71] outline-none transition-all bg-gray-50 focus:bg-white" placeholder="+91 98765 43210" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">University / College *</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ECC71] outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Enter your university name" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Graduation Year *</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none bg-gray-50 focus:bg-white">
                                            <option>2024</option>
                                            <option>2025</option>
                                            <option>2026</option>
                                            <option>2027</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Degree *</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none bg-gray-50 focus:bg-white">
                                            <option>B.Tech / B.E</option>
                                            <option>M.Tech / M.E</option>
                                            <option>BCA / MCA</option>
                                            <option>B.Sc / M.Sc</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn Profile URL</label>
                                    <input type="url" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ECC71] outline-none transition-all bg-gray-50 focus:bg-white" placeholder="https://linkedin.com/in/..." />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Why do you want to join Sotiotech? *</label>
                                    <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ECC71] outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Tell us about your motivation..."></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Resume / CV (PDF max 2MB) *</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#2ECC71] hover:bg-green-50/30 transition-all cursor-pointer bg-gray-50">
                                        <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                                        <span className="text-base text-gray-600 font-medium block">Click to upload or drag and drop</span>
                                        <span className="text-sm text-gray-400 block mt-1">Supported formats: PDF, DOCX</span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#2ECC71] text-white py-4 rounded-xl font-bold hover:bg-[#27AE60] transition-colors shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2"
                                >
                                    {loading ? 'Submitting Application...' : 'Submit Internship Application'}
                                    {!loading && <Send className="w-5 h-5" />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
