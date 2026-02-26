
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { sanity } from '../lib/sanity';
import {
    ArrowRight,
    MapPin,
    Clock,
    Briefcase,
    Users,
    Zap,
    Globe,
    Search,
    Filter,
    CheckCircle,
    Code,
    LineChart,
    Shield
} from 'lucide-react';
import { Footer } from './Footer';


export function CareersPage({ onNavigate }: { onNavigate: (page: string, slug?: string) => void }) {
    const [filterRole, setFilterRole] = useState('All');
    const [filterLocation, setFilterLocation] = useState('All');
    const [jobs, setJobs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchJobs() {
            setLoading(true);
            try {
                const query = `*[_type == "jobOpening" && isActive == true && defined(publishedAt)] 
                    | order(publishedAt desc) {
                    _id,
                    title,
                    department,
                    location,
                    jobType,
                    experience,
                    "slug": slug.current
                }`;
                const data = await sanity.fetch(query);
                setJobs(data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []);

    const filteredJobs = useMemo(() => {
        return jobs.filter(job => {
            const roleMatch = filterRole === 'All' || job.department === filterRole || (filterRole === 'Internship' && job.jobType === 'Internship');
            const locMatch = filterLocation === 'All' || job.location === filterLocation;
            return roleMatch && locMatch;
        });
    }, [jobs, filterRole, filterLocation]);

    return (
        <div className="bg-neutral-50 font-sans">
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden bg-[#0E2A47] text-white pt-32 pb-20 lg:pt-40 lg:pb-32">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0E2A47]/80 to-[#0E2A47]"></div>

                <div className="relative container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-[#2ECC71]/20 text-[#2ECC71] font-semibold text-sm mb-6 border border-[#2ECC71]/30">
                            Careers at Sotiotech
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Empower Your Future Today – Join Sotiotech and <span className="text-[#2ECC71]">Shape Tomorrow</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Join a team of innovators, creators, and problem solvers. Work on the cutting edge of ServiceNow ecosystem and drive digital transformation for global enterprises.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-[#2ECC71] text-white rounded-full font-bold hover:bg-[#27AE60] transition-all transform hover:scale-105 shadow-lg shadow-[#2ECC71]/30 flex items-center justify-center gap-2"
                            >
                                View Open Roles <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => document.getElementById('internships')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center"
                            >
                                Internship Program
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Life at Sotiotech */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0E2A47] mb-6">Life at Sotiotech</h2>
                        <p className="text-lg text-gray-600">
                            We believe in a culture that fosters innovation, ownership, and continuous learning. At Sotiotech, you're not just an employee; you're a partner in our success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Zap, title: "Innovation", desc: "We challenge the status quo and push boundaries." },
                            { icon: Users, title: "Collaboration", desc: "We win together through open communication and teamwork." },
                            { icon: Globe, title: "Ownership", desc: "We take pride in our work and accountability for results." },
                            { icon: Briefcase, title: "Growth", desc: "Continuous learning and career development paths." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-[#2ECC71]/30 transition-all text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-[#0E2A47]/5 rounded-full flex items-center justify-center text-[#2ECC71] mb-6">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0E2A47] mb-3">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Hiring Process */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0E2A47] mb-16 text-center">Our Hiring Process</h2>

                    <div className="relative">
                        {/* Line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                            {[
                                { step: "01", title: "Application", desc: "Submit your profile and portfolio.", icon: Briefcase },
                                { step: "02", title: "Evaluation", desc: "Skill assessment and screening.", icon: Search },
                                { step: "03", title: "Discussion", desc: "Technical & HR interviews.", icon: Users },
                                { step: "04", title: "Onboarding", desc: "Welcome to the team!", icon: CheckCircle }
                            ].map((s, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-20 h-20 mx-auto bg-white border-4 border-[#2ECC71] rounded-full flex items-center justify-center text-[#0E2A47] text-2xl font-bold mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                        <s.icon className="w-8 h-8 text-[#2ECC71]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0E2A47] mb-2">{s.title}</h3>
                                    <p className="text-gray-500">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Open Positions */}
            <section id="open-roles" className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2A47] mb-4">Current Openings</h2>
                            <p className="text-gray-600">Explore opportunities to join our growing team.</p>
                        </div>

                        {/* Filters */}
                        <div className="flex gap-4 mt-6 md:mt-0">
                            <select
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] outline-none"
                                value={filterRole}
                                onChange={(e) => setFilterRole(e.target.value)}
                            >
                                <option value="All">All Roles</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Consulting">Consulting</option>
                                <option value="Design">Design</option>
                                <option value="Internship">Internship</option>
                            </select>
                            <select
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] outline-none"
                                value={filterLocation}
                                onChange={(e) => setFilterLocation(e.target.value)}
                            >
                                <option value="All">All Locations</option>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Onsite">Onsite</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading ? (
                            <div className="col-span-full py-20 flex justify-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2ECC71]"></div>
                            </div>
                        ) : filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => (
                                <motion.div
                                    key={job._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all border-l-4 border-l-[#2ECC71]"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="bg-blue-50 text-[#0E2A47] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{job.department}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0E2A47] mb-3 line-clamp-2">{job.title}</h3>
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center text-gray-500 text-sm gap-2">
                                            <MapPin className="w-4 h-4" /> {job.location}
                                        </div>
                                        <div className="flex items-center text-gray-500 text-sm gap-2">
                                            <Briefcase className="w-4 h-4" /> {job.jobType}
                                        </div>
                                        <div className="flex items-center text-gray-500 text-sm gap-2">
                                            <Clock className="w-4 h-4" /> {job.experience}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => onNavigate('job-detail', job.slug)}
                                        className="w-full py-3 rounded-lg border border-[#0E2A47] text-[#0E2A47] font-semibold hover:bg-[#0E2A47] hover:text-white transition-colors flex items-center justify-center gap-2 group"
                                    >
                                        View Details
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center text-gray-500">
                                No positions found matching your criteria.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 5. Internship CTA */}
            <section id="internships" className="py-20 bg-[#0E2A47] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Users className="w-96 h-96" />
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-2xl">
                        <span className="text-[#2ECC71] font-bold tracking-wider mb-2 block uppercase">Start Your Career</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Sotiotech Internship Program</h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Get real-world experience, mentorship from industry experts, and a chance to secure a Pre-Placement Offer (PPO).
                            Work on live ServiceNow projects and get certified.
                        </p>
                        <ul className="mb-8 space-y-3">
                            {[
                                "Real ServiceNow Project Experience",
                                "Mentorship by Senior Architects",
                                "PPO Opportunities for Top Performers",
                                "Certification & Training Support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                                    <span className="text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => onNavigate('internship-application')}
                            className="bg-[#2ECC71] text-white px-8 py-4 rounded-full font-bold hover:bg-[#27AE60] transition-colors shadow-lg shadow-[#2ECC71]/30"
                        >
                            Apply for Internship
                        </button>
                    </div>
                </div>
            </section>

            {/* 6. Recruiter Contact */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0E2A47] mb-6">Questions? Talk to our Recruiter</h2>
                    <p className="text-gray-600 mb-8">
                        Not sure which role fits you best? Reach out to our talent acquisition team.
                    </p>
                    <a href="mailto:careers@sotiotech.com" className="inline-flex items-center gap-2 text-xl font-bold text-[#2ECC71] hover:underline">
                        careers@sotiotech.com <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
