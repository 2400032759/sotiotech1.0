import { ArrowRight, CheckCircle2, TrendingUp, Shield, Layers, BarChart3, Users, Globe, Zap, Factory, GraduationCap, ShoppingBag, Heart, Server } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Footer } from './Footer';

interface IndustryData {
    title: string;
    heroImage: string;
    overview: {
        heading: string;
        description: string;
        challenges: {
            title: string;
            description: string;
            icon: any;
        }[];
    };
    useCases: {
        title: string;
        description: string;
    }[];
    caseStudies: {
        industry: string;
        problem: string;
        solution: string;
        outcome: string;
    }[];
}

const industriesData: Record<string, IndustryData> = {
    'finance': {
        title: "Financial Services",
        heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        overview: {
            heading: "Secure, Compliant, and Efficient Financial Operations",
            description: "Financial institutions face unprecedented pressure from evolving regulations, rising customer expectations, and the need for operational resilience. ServiceNow provides a unified platform to automate compliance, streamline back-office operations, and deliver secure, consumer-grade banking experiences—all while reducing risk and costs.",
            challenges: [
                {
                    title: "Regulatory Compliance",
                    description: "Navigating complex and evolving global financial regulations.",
                    icon: Shield
                },
                {
                    title: "Operational Visibility",
                    description: "Lack of real-time insights into back-office and client interactions.",
                    icon: Layers
                },
                {
                    title: "Customer Loyalty",
                    description: "High expectations for seamless, 24/7 banking experiences.",
                    icon: Users
                },
                {
                    title: "Legacy Systems",
                    description: "Modernizing core banking systems without disrupting operations.",
                    icon: Server
                }
            ]
        },
        useCases: [
            {
                title: "Visible & Efficient Back Office",
                description: "Improve service levels and productivity with better visibility into client interactions."
            },
            {
                title: "Transformation Mapping",
                description: "Develop a strategic plan to evaluate your existing systems and processes."
            },
            {
                title: "Enhanced Compliance Competencies",
                description: "Manage audits proactively and prove adherence to external regulators in record time."
            },
            {
                title: "Call Center Transformation",
                description: "Earn customer loyalty with better service, even during peak contact times."
            }
        ],
        caseStudies: [
            {
                industry: "Global Retail Bank",
                problem: "Fragmented customer data led to slow resolution times.",
                solution: "Unified CSM and FSO to provide a single view of the customer.",
                outcome: "40% reduction in call handling time."
            },
            {
                industry: "Insurance Provider",
                problem: "Manual compliance reporting was error-prone and slow.",
                solution: "Automated GRC controls and reporting workflows.",
                outcome: "100% audit readiness and 60% less manual effort."
            },
            {
                industry: "FinTech Firm",
                problem: "Rapid growth overwhelmed IT support and onboarding.",
                solution: "Self-service IT and HR portals with automated fulfillment.",
                outcome: "50% faster employee onboarding."
            }
        ]
    },
    'telecom-media-tech': {
        title: "Technology, Media & Telecom",
        heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        overview: {
            heading: "Accelerating Innovation While Managing Complexity",
            description: "In fast-paced industries like telecom, media, and technology, delivering seamless services and managing complex infrastructures requires precision and agility. Our ServiceNow solutions are designed to streamline operations, eliminate swivel chairing, and create a single source of truth with industry-specific CMDB structures and workflows.",
            challenges: [
                {
                    title: "Operational Complexity",
                    description: "Managing hybrid legacy and next-gen networks while controlling costs.",
                    icon: Layers
                },
                {
                    title: "Regulatory Pressure",
                    description: "Navigating strict data privacy laws (GDPR, localized mandates) and vendor risk.",
                    icon: Shield
                },
                {
                    title: "Customer Retention",
                    description: "Disconnected BSS/OSS systems leading to disjointed customer support experiences.",
                    icon: Users
                },
                {
                    title: "Digital Transformation Gaps",
                    description: "Bridging the divide between traditional telco operations and modern tech-co agility.",
                    icon: Globe
                }
            ]
        },
        useCases: [
            {
                title: "Industry-specific CMDB and workflows",
                description: "Leverage the CSDM to create scalable, standardized offerings aligned with best practices and client needs."
            },
            {
                title: "Network and service management",
                description: "Streamline the management of complex network assets, media services, and technology ecosystems to improve uptime and performance."
            },
            {
                title: "Streamline contract to billing",
                description: "Automate and optimize the full process from contract signature to billing and invoicing, ensuring faster and more accurate service delivery."
            },
            {
                title: "Operational efficiency at scale",
                description: "Automate repetitive tasks and standardize service delivery across multiple clients to improve performance and reduce costs."
            }
        ],
        caseStudies: [
            {
                industry: "Global Telecommunications Provider",
                problem: "Siloed network and IT teams resulted in high MTTR.",
                solution: "Implemented ServiceNow TSM to unify Network and IT operations.",
                outcome: "35% reduction in resolution time."
            },
            {
                industry: "Streaming Media Giant",
                problem: "Inefficient content asset management and high cloud costs.",
                solution: "Deployed ITAM and Cloud Management for full visibility.",
                outcome: "20% reduction in annual infrastructure spend."
            },
            {
                industry: "Tech Enterprise",
                problem: "Slow B2B contract processing delayed revenue recognition.",
                solution: "Automated contract-to-cash workflows.",
                outcome: "40% faster billing cycles."
            }
        ]
    },
    'higher-education': {
        title: "Higher Education",
        heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        overview: {
            heading: "Modernizing the Campus Experience",
            description: "The evolving demands of higher education institutions call for a partner who understands the unique challenges of managing complex ecosystems of students, faculty, and staff. Our ServiceNow solutions empower universities and colleges to modernize service delivery, optimize campus operations, and create seamless user experiences.",
            challenges: [
                {
                    title: "Siloed Information",
                    description: "Disconnected systems across departments hinder unified student services.",
                    icon: Layers
                },
                {
                    title: "Student Expectations",
                    description: "Students demand consumer-grade digital experiences for all campus services.",
                    icon: Users
                },
                {
                    title: "Administrative Burden",
                    description: "Manual processes for grants and administration consume valuable time.",
                    icon: BarChart3
                },
                {
                    title: "Data Visibility",
                    description: "Lack of central data makes strategic decision-making difficult.",
                    icon: Globe
                }
            ]
        },
        useCases: [
            {
                title: "Modernize Student Services",
                description: "Build intuitive, self-service portals and workflows tailored to the needs of students, enabling quicker resolution of issues and improved satisfaction."
            },
            {
                title: "Faculty and Staff Support",
                description: "Automate workflows for onboarding, IT support, HR requests, and research administration, freeing faculty and staff to focus on education and innovation."
            },
            {
                title: "End-to-End Process Automation",
                description: "Simplify and accelerate complex workflows like grant approvals, course scheduling, and event planning."
            },
            {
                title: "Data-Driven Decision-Making",
                description: "Centralize data from across the institution to provide actionable insights for leadership, identifying opportunities for improvement and innovation."
            }
        ],
        caseStudies: [
            {
                industry: "Major Research University",
                problem: "Fragmented IT support across colleges frustrated students.",
                solution: "Implemented a unified ITSM and self-service portal.",
                outcome: "90% student satisfaction score."
            },
            {
                industry: "State College System",
                problem: "Manual HR processes delayed faculty onboarding.",
                solution: "Automated HRSD workflows for rapid onboarding.",
                outcome: "Onboarding time reduced from weeks to days."
            }
        ]
    },
    'service-provider': {
        title: "Service Providers / MSPs",
        heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        overview: {
            heading: "Scalable Service Delivery for Growth",
            description: "Managing service delivery across multiple clients demands a partner who understands the unique challenges of the MSP industry. Our solutions help MSPs build a robust service portfolio aligned with the Common Service Data Model (CSDM), ensuring scalable and standardized offerings. We specialize in architecting domain separation to support clients properly.",
            challenges: [
                {
                    title: "Client Segregation",
                    description: "Ensuring strict data isolation and security between multiple tenants.",
                    icon: Shield
                },
                {
                    title: "Service consistency",
                    description: "Delivering standardized services while allowing for client-specific value.",
                    icon: CheckCircle2
                },
                {
                    title: "Operational Costs",
                    description: "Keeping margins healthy by automating delivery at scale.",
                    icon: TrendingUp
                },
                {
                    title: "Billing Complexity",
                    description: "Accurately tracking and billing for varying service consumption.",
                    icon: BarChart3
                }
            ]
        },
        useCases: [
            {
                title: "Build a robust service portfolio",
                description: "Leverage the CSDM to create scalable, standardized offerings aligned with best practices and client needs."
            },
            {
                title: "Domain separation architecture",
                description: "Implement secure domain separation to manage client-specific workflows, visibility, and reporting."
            },
            {
                title: "Operational efficiency at scale",
                description: "Automate repetitive tasks and standardize service delivery across multiple clients to improve performance and reduce costs."
            },
            {
                title: "Streamline contract to billing",
                description: "Automate and optimize the full process from contract signature to billing and invoicing, ensuring faster and more accurate service delivery."
            }
        ],
        caseStudies: [
            {
                industry: "Global MSP",
                problem: "Onboarding new clients took months due to manual setup.",
                solution: "Automated domain separation onboarding.",
                outcome: "New client operational readiness in 2 weeks."
            },
            {
                industry: "IT Services Firm",
                problem: "Billing leakage due to untracked service hours.",
                solution: "Integrated time tracking and automated billing.",
                outcome: "15% increase in recognized revenue."
            }
        ]
    },
    'manufacturing': {
        title: "Manufacturing",
        heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        overview: {
            heading: "Achieving Factory 4.0 Connected Operations",
            description: "Achieve factory 4.0 by implementing technology to establish truly connected operations, improve productivity, and enhance customer service. Streamline workflows, automate common activities, and innovate to solve problems faster and create an effective approach to preventative plant maintenance.",
            challenges: [
                {
                    title: "Supply Chain Risk",
                    description: "Lack of visibility into supplier performance and material flow.",
                    icon: Globe
                },
                {
                    title: "Asset Downtime",
                    description: "Unplanned equipment failure disrupting production schedules.",
                    icon: Factory
                },
                {
                    title: "Workforce Safety",
                    description: "Managing safety compliance and incident reporting on the shop floor.",
                    icon: Shield
                },
                {
                    title: "Siloed Operations",
                    description: "Disconnect between OT (Operational Tech) and IT systems.",
                    icon: Layers
                }
            ]
        },
        useCases: [
            {
                title: "Supply Chain Visibility",
                description: "Connect and automate workflows to keep supply chains resilient and responsive."
            },
            {
                title: "Asset & Plant Operations",
                description: "Monitor and manage equipment health to reduce downtime and extend asset life."
            },
            {
                title: "Workforce Efficiency",
                description: "Streamline shop floor and back-office processes so teams can focus on production, not paperwork."
            },
            {
                title: "Quality & Compliance",
                description: "Automate tracking and reporting to meet safety, environmental, and regulatory requirements."
            }
        ],
        caseStudies: [
            {
                industry: "Auto Manufacturer",
                problem: "Production delays due to reactively managed equipment repairs.",
                solution: "Predictive maintenance workflows using ServiceNow OT Management.",
                outcome: "25% reduction in unplanned downtime."
            },
            {
                industry: "Consumer Goods",
                problem: "Supply chain visibility gaps led to stockouts.",
                solution: "Integrated vendor risk and supply chain workflows.",
                outcome: "Real-time visibility into tier 1 & 2 suppliers."
            }
        ]
    },
    'healthcare': {
        title: "Healthcare & Life Sciences",
        heroImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        overview: {
            heading: "Delivering Better Outcomes & Patient Care",
            description: "Deliver better outcomes and experiences for patients by rethinking outdated infrastructure, optimizing workflows, and modernizing IT to streamline processes, reduce costs, and enhance patient care. By connecting teams, personalizing care, and managing data and compliance, you can transform the business.",
            challenges: [
                {
                    title: "Patient Experience",
                    description: "Fragmented scheduling and support systems frustrate patients.",
                    icon: Heart
                },
                {
                    title: "Compliance Burden",
                    description: "Strict HIPAA and FDA regulations requiring rigorous audit trails.",
                    icon: Shield
                },
                {
                    title: "Staff Burnout",
                    description: "Administrative overhead taking time away from patient care.",
                    icon: Users
                },
                {
                    title: "Operational Silos",
                    description: "Disconnect between clinical systems and IT support.",
                    icon: Layers
                }
            ]
        },
        useCases: [
            {
                title: "Patient & Member Experience",
                description: "Improve access and satisfaction with self-service portals and AI-assisted support."
            },
            {
                title: "Regulatory Compliance",
                description: "Automate documentation and audit readiness to stay compliant with HIPAA, FDA, and other regulations."
            },
            {
                title: "Clinical & Research Operations",
                description: "Streamline workflows to reduce delays in trials, treatments, and lab operations."
            },
            {
                title: "Workforce Productivity",
                description: "Free up clinicians and staff from repetitive tasks with automated service delivery and intelligent routing."
            }
        ],
        caseStudies: [
            {
                industry: "Hospital Network",
                problem: "Clinicians spent too much time on IT interactions.",
                solution: "Mobile-first IT support and EMR integration.",
                outcome: "30% more time returned to patient care."
            },
            {
                industry: "Pharma Company",
                problem: "Slow clinical trial setup due to manual approvals.",
                solution: "Automated workflow for trial initiation and vendor management.",
                outcome: "Trial setup accelerated by 4 weeks."
            }
        ]
    },
    'energy-utilities': {
        title: "Energy & Utilities",
        heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        overview: {
            heading: "Powering the Future with Connected Operations",
            description: "Automate critical operations and provide modern service delivery. Unite legacy systems to create a fully integrated ecosystem, gain end-to-end data visibility, and enhance employee experiences through automated workflows. Elevate the customer journey with simplified experiences and proactive issue detection.",
            challenges: [
                {
                    title: "Infrastructure Aging",
                    description: "Maintaining reliability across aging grids and assets.",
                    icon: Zap
                },
                {
                    title: "Regulatory Pressure",
                    description: "Meeting evolving energy and environmental reporting standards.",
                    icon: Shield
                },
                {
                    title: "Cybersecurity",
                    description: "Protecting critical infrastructure from increasing cyber threats.",
                    icon: Shield
                },
                {
                    title: "Field Efficiency",
                    description: "Optimizing dispatch and information access for field crews.",
                    icon: Users
                }
            ]
        },
        useCases: [
            {
                title: "Grid Reliability",
                description: "Predict and prevent outages with AI-powered service operations that keep energy flowing without disruption."
            },
            {
                title: "Regulatory Compliance",
                description: "Automate reporting and oversight to stay ahead of evolving energy and environmental regulations."
            },
            {
                title: "Asset Management",
                description: "Gain full visibility into equipment health and lifecycle to reduce downtime and extend asset performance."
            },
            {
                title: "Customer Experience",
                description: "Deliver faster, more reliable service with self-service and digital workflows that improve customer satisfaction."
            }
        ],
        caseStudies: [
            {
                industry: "National Grid Operator",
                problem: "Reactive maintenance led to preventable outages.",
                solution: "Predictive asset management and field service automation.",
                outcome: "15% reduction in outage duration."
            },
            {
                industry: "Utility Provider",
                problem: "High call volumes during storms overwhelmed support.",
                solution: "AI-driven proactive customer notifications and self-service.",
                outcome: "40% reduction in call volume during events."
            }
        ]
    },
    'retail': {
        title: "Retail",
        heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        overview: {
            heading: "Revolutionizing the Retail Experience",
            description: "Gain a competitive advantage by digitizing and automating workflows to improve the customer experience both online and in-store. This includes reimagining the retail experience, streamlining operations, and empowering employees to create exceptional customer experiences.",
            challenges: [
                {
                    title: "Omnichannel consistency",
                    description: "Bridging the gap between online and brick-and-mortar experiences.",
                    icon: ShoppingBag
                },
                {
                    title: "Supply Chain Agility",
                    description: "Responding quickly to shifting consumer demands and disruptions.",
                    icon: Globe
                },
                {
                    title: "Employee turnover",
                    description: "Rapidly onboarding and enabling season staff.",
                    icon: Users
                },
                {
                    title: "Loss Prevention",
                    description: "Managing security and shrink across many locations.",
                    icon: Shield
                }
            ]
        },
        useCases: [
            {
                title: "Omnichannel Experience",
                description: "Deliver seamless service across online and in-store channels with AI-driven support."
            },
            {
                title: "Inventory & Supply Chain",
                description: "Improve visibility and automate workflows to keep products stocked and customers happy."
            },
            {
                title: "Employee Enablement",
                description: "Streamline onboarding, scheduling, and support so staff can focus on serving customers."
            },
            {
                title: "Compliance & Risk",
                description: "Automate audits and reporting to stay ahead of safety, labor, and data privacy requirements."
            }
        ],
        caseStudies: [
            {
                industry: "Global Retailer",
                problem: "Store employees spent hours on back-office IT tasks.",
                solution: "Mobile store operations app on ServiceNow.",
                outcome: "20% productivity gain for store associates."
            },
            {
                industry: "Fashion Brand",
                problem: "Disconnect between e-commerce support and logistics.",
                solution: "Unified CSM with supply chain workflows.",
                outcome: "50% faster resolution for order inquiries."
            }
        ]
    },
    'retail-manufacturing': {
        title: "Retail & Manufacturing",
        heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        overview: {
            heading: "Connected Operations for Retail & Manufacturing",
            description: "Seamlessly connecting production to consumption. Whether on the factory floor or the retail floor, we help organizations streamline operations, enhance visibility, and deliver superior customer experiences through properly integrated ServiceNow solutions.",
            challenges: [
                {
                    title: "Supply Chain visibility",
                    description: "End-to-end tracking from raw material to point of sale.",
                    icon: Globe
                },
                {
                    title: "Operational Efficiency",
                    description: "Reducing waste and downtime in production and retail operations.",
                    icon: TrendingUp
                },
                {
                    title: "Workforce Management",
                    description: "Managing a diverse workforce across plants and stores.",
                    icon: Users
                },
                {
                    title: "Customer Demand",
                    description: "Rapidly adapting production and inventory to shifting consumer trends.",
                    icon: ShoppingBag
                }
            ]
        },
        useCases: [
            {
                title: "Supply Chain Visibility",
                description: "Connect and automate workflows to keep supply chains resilient and responsive."
            },
            {
                title: "Asset & Plant Operations",
                description: "Monitor and manage equipment health to reduce downtime and extend asset life."
            },
            {
                title: "Omnichannel Experience",
                description: "Deliver seamless service across online and in-store channels with AI-driven support."
            },
            {
                title: "Quality & Compliance",
                description: "Automate tracking and reporting to meet safety, environmental, and regulatory requirements."
            }
        ],
        caseStudies: [
            {
                industry: "Consumer Electronics",
                problem: "Supply chain disruptions impacted product launch availability.",
                solution: "End-to-end supply chain visibility and risk management.",
                outcome: "98% on-time product availability during launch."
            },
            {
                industry: "Global Retail Chain",
                problem: "Inconsistent store operations impacted customer experience.",
                solution: "Standardized store operations workflows.",
                outcome: "Consistent 4.8/5 CSAT across all regions."
            }
        ]

    }
};

export function IndustryPage({ onNavigate }: { onNavigate: (page: string, slug?: string) => void }) {
    const { slug } = useParams();
    const normalizeSlug = (s?: string) => {
        if (s === 'financial-services') return 'finance';
        return s;
    };
    const activeSlug = normalizeSlug(slug);
    const data = industriesData[activeSlug || ''] || industriesData['telecom-media-tech'];

    if (!data) {
        return <div className="min-h-screen flex items-center justify-center">Industry not found</div>;
    }

    return (
        <div className="min-h-screen bg-white font-sans text-[#0E2A47]">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#021223] text-white">
                <div className="absolute inset-0 z-0">
                    <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#021223] via-[#021223]/80 to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20 text-[#2ECC71] text-sm font-semibold mb-6">
                            Industries We Serve
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            {data.title}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            {/* Subheading derived or static? User prompt said: "Subheading: We bring more than platform expertise..." static for all. */}
                            We bring more than platform expertise — with deep industry knowledge and ServiceNow-powered innovation, we solve your industry’s most complex challenges.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Industry Overview & Challenges */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Overview</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We’re one of the last true pure-play ServiceNow partners — this is what we do, day in and day out. Our crew of certified experts brings deep platform mastery, proven accelerators, and a practical approach to help organizations in the {data.title} sector achieve faster time-to-value and sustainable transformation.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold mb-4">Why ServiceNow for {data.title}?</h3>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                {data.overview.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {data.overview.challenges.map((challenge, idx) => (
                            <div key={idx} className="p-6 rounded-xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 hover:border-[#2ECC71]/30 transition-all">
                                <div className="w-12 h-12 bg-[#0E2A47]/5 rounded-lg flex items-center justify-center text-[#2ECC71] mb-4">
                                    <challenge.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-3">{challenge.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{challenge.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Our Approach */}
            <section className="py-16 bg-[#F9FAFB] relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-[36px] font-bold text-[#0E2A47] mb-6 relative inline-block">
                            Our Approach
                            <span className="block h-1 w-20 bg-[#2ECC71] mt-4 mx-auto rounded-full" />
                        </h2>
                        <p className="text-lg text-gray-600 max-w-[720px] mx-auto leading-relaxed">
                            As a pure-play ServiceNow partner, we combine certified expertise with proven accelerators to drive faster time-to-value.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                icon: CheckCircle2,
                                title: "Pure-Play Expertise",
                                desc: "100% focus on ServiceNow ensures deep platform mastery and specialized knowledge that generalist firms can't match."
                            },
                            {
                                icon: TrendingUp,
                                title: "Proven Accelerators",
                                desc: "Industry-aligned frameworks and pre-built models that significantly reduce implementation time and risk."
                            },
                            {
                                icon: BarChart3,
                                title: "Outcome-Driven",
                                desc: "KPI-led delivery focused on cost optimization, risk reduction, and measurable experience improvements."
                            }
                        ].map((item, idx, array) => (
                            <div
                                key={idx}
                                className={`bg-white p-8 rounded-2xl border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-start text-left group ${idx === array.length - 1 ? 'md:col-span-2 md:justify-self-center md:max-w-[600px] w-full' : ''
                                    }`}
                            >
                                <div className="w-16 h-16 bg-[#0E2A47] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#0E2A47]/10">
                                    <item.icon className="w-8 h-8 text-[#2ECC71]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[20px] font-semibold text-[#0E2A47] mb-3">{item.title}</h3>
                                <p className="text-[16px] text-gray-500 leading-relaxed max-w-[90%]">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Industry Use Cases */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">Industry Use Cases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data.useCases.map((useCase, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#2ECC71] transition-all duration-300">
                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#2ECC71] transition-colors">{useCase.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Case Studies */}
            <section className="py-20 bg-[#0E2A47] text-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Relevant Case Studies</h2>
                            <p className="text-white/60">Real-world results for {data.title} leaders.</p>
                        </div>
                        <button
                            onClick={() => onNavigate('case-studies')}
                            className="hidden md:flex items-center gap-2 text-[#2ECC71] hover:text-white transition-colors"
                        >
                            View All Case Studies <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {data.caseStudies.map((study, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="text-[#2ECC71] text-sm font-semibold mb-4 uppercase tracking-wider">{study.industry}</div>
                                <h3 className="text-xl font-bold mb-4 min-h-[56px]">{study.problem}</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-white/40 text-xs uppercase mb-1">Solution</div>
                                        <div className="text-sm text-gray-300">{study.solution}</div>
                                    </div>
                                    <div>
                                        <div className="text-white/40 text-xs uppercase mb-1">Outcome</div>
                                        <div className="text-sm font-semibold text-white">{study.outcome}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0E2A47] mb-8">
                        Let’s Transform {data.title} Operations with ServiceNow
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => onNavigate('case-studies')}
                            className="px-8 py-4 rounded-full border-2 border-[#0E2A47] text-[#0E2A47] font-bold hover:bg-[#0E2A47] hover:text-white transition-all"
                        >
                            Explore Case Studies
                        </button>
                        <button
                            onClick={() => onNavigate('book-call')}
                            className="px-8 py-4 rounded-full bg-[#2ECC71] text-white font-bold hover:bg-[#27AE60] shadow-lg shadow-[#2ECC71]/30 transition-all"
                        >
                            Talk to an Industry Expert
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
