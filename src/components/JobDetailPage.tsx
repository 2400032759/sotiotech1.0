import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle, Upload, Send } from 'lucide-react';
import { sanity } from '../lib/sanity';
import { Footer } from './Footer';

interface JobDetailPageProps {
    slug: string;
    onNavigate: (page: string, slug?: string) => void;
}

export function JobDetailPage({ slug, onNavigate }: JobDetailPageProps) {
    const [job, setJob] = useState<any>(null);
    const [loadingJob, setLoadingJob] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function fetchJob() {
            setLoadingJob(true);
            try {
                const query = `*[_type == "jobOpening" && slug.current == $slug][0]{
                    _id,
                    title,
                    department,
                    location,
                    jobType,
                    experience,
                    overview,
                    responsibilities,
                    requirements,
                    niceToHave
                }`;
                const data = await sanity.fetch(query, { slug });
                setJob(data);

                if (data) {
                    document.title = `${data.title} | Careers at Sotiotech`;

                    // Schema.org
                    const script = document.createElement('script');
                    script.type = 'application/ld+json';
                    script.text = JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "JobPosting",
                        "title": data.title,
                        "description": data.overview,
                        "identifier": {
                            "@type": "PropertyValue",
                            "name": "Sotiotech",
                            "value": data._id
                        },
                        "hiringOrganization": {
                            "@type": "Organization",
                            "name": "Sotiotech",
                            "sameAs": "https://sotiotech.com"
                        },
                        "industry": "Technology",
                        "employmentType": data.jobType === 'Full-time' ? 'FULL_TIME' : 'INTERN',
                        "jobLocation": {
                            "@type": "Place",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "IN"
                            }
                        },
                        "datePosted": new Date().toISOString().split('T')[0]
                    });
                    document.head.appendChild(script);
                    return () => {
                        document.head.removeChild(script);
                    };
                }
            } catch (error) {
                console.error('Error fetching job details:', error);
            } finally {
                setLoadingJob(false);
            }
        }
        fetchJob();
    }, [slug]);

    if (loadingJob) {
        return (
            <div className="pt-32 pb-20 flex flex-col items-center justify-center min-h-screen bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2ECC71]"></div>
                <p className="mt-4 text-gray-500">Loading job details...</p>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="pt-32 pb-20 text-center min-h-screen">
                <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
                <button onClick={() => onNavigate('careers')} className="text-[#2ECC71] underline">Back to Careers</button>
            </div>
        );
    }

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
            <section className="bg-[#0E2A47] text-white py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <button
                        onClick={() => onNavigate('careers')}
                        className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Careers
                    </button>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6">{job.title}</h1>

                    <div className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base text-gray-300">
                        <div className="flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-[#2ECC71]" /> {job.department}
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-[#2ECC71]" /> {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-[#2ECC71]" /> {job.experience}
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-[#2ECC71] text-white px-8 py-3 rounded-full font-bold hover:bg-[#27AE60] transition-colors shadow-lg shadow-[#2ECC71]/20"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-3 gap-12">
                {/* Job Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h3 className="text-2xl font-bold text-[#0E2A47] mb-4">Job Overview</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{job.overview}</p>
                    </section>

                    {job.responsibilities && job.responsibilities.length > 0 && (
                        <section>
                            <h3 className="text-2xl font-bold text-[#0E2A47] mb-6">Key Responsibilities</h3>
                            <ul className="space-y-3">
                                {job.responsibilities.map((res: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#2ECC71] shrink-0"></span>
                                        <span className="text-gray-700 leading-relaxed">{res}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {job.requirements && job.requirements.length > 0 && (
                        <section>
                            <h3 className="text-2xl font-bold text-[#0E2A47] mb-6">Requirements</h3>
                            <ul className="space-y-3">
                                {job.requirements.map((req: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#2ECC71] shrink-0 mt-0.5" />
                                        <span className="text-gray-700 leading-relaxed">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {job.niceToHave && job.niceToHave.length > 0 && (
                        <section>
                            <h3 className="text-2xl font-bold text-[#0E2A47] mb-6">Nice to Have</h3>
                            <ul className="space-y-3">
                                {job.niceToHave.map((nth: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-300 shrink-0"></span>
                                        <span className="text-gray-600 leading-relaxed">{nth}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>

                {/* Sidebar / Form */}
                <div className="lg:col-span-1" ref={formRef}>
                    <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 border border-gray-100 sticky top-24">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-[#2ECC71]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0E2A47] mb-2">Application Submitted!</h3>
                                <p className="text-gray-600 mb-6">
                                    Thank you for your interest in Sotiotech. Our team will review your application and get back to you shortly.
                                </p>
                                <button
                                    onClick={() => onNavigate('careers')}
                                    className="bg-[#0E2A47] text-white px-6 py-2 rounded-lg font-semibold"
                                >
                                    Return to Careers
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <h3 className="text-2xl font-bold text-[#0E2A47] mb-2">Apply for this Role</h3>
                                <p className="text-gray-500 text-sm mb-6">Fill out the form below to submit your application.</p>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                                    <input required type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ECC71] outline-none transition-all" placeholder="John Doe" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                                    <input required type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ECC71] outline-none transition-all" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                                    <input required type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ECC71] outline-none transition-all" placeholder="+1 (555) 000-0000" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">LinkedIn URL</label>
                                    <input type="url" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2ECC71] outline-none transition-all" placeholder="https://linkedin.com/in/..." />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Education</label>
                                        <select className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none">
                                            <option>Bachelor's</option>
                                            <option>Master's</option>
                                            <option>PhD</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Experience</label>
                                        <select className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none">
                                            <option>Fresher</option>
                                            <option>1-3 Years</option>
                                            <option>3-5 Years</option>
                                            <option>5+ Years</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Resume/CV *</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#2ECC71] transition-colors cursor-pointer bg-gray-50">
                                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                        <span className="text-sm text-gray-500 block">Click to upload or drag and drop</span>
                                        <span className="text-xs text-gray-400 block mt-1">PDF, DOC, DOCX (Max 2MB)</span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#2ECC71] text-white py-3 rounded-lg font-bold hover:bg-[#27AE60] transition-colors shadow-md flex items-center justify-center gap-2"
                                >
                                    {loading ? 'Submitting...' : 'Submit Application'}
                                    {!loading && <Send className="w-4 h-4" />}
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
