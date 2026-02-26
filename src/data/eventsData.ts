// Events Data Structure
export interface EventData {
  id: string;
  slug: string;
  title: string;
  type: 'Webinar' | 'Meetup' | 'Conference';
  date: string;
  time: string;
  location: string;
  timezone?: string;
  bannerImage: string;
  shortDescription: string;
  fullDescription: string;
  topics: string[];
  status: 'upcoming' | 'past';
  
  speakers: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  }[];
  
  agenda: {
    time: string;
    title: string;
    description: string;
  }[];
  
  keyTakeaways: string[];
  
  registrationLink?: string;
  recordingLink?: string;
  
  seoTitle: string;
  seoDescription: string;
}

export const eventsData: EventData[] = [
  {
    id: '1',
    slug: 'sotiocon-2026',
    title: 'SotioCon 2026: ServiceNow Innovation Summit',
    type: 'Conference',
    date: 'March 15-16, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Dubai World Trade Centre, UAE',
    timezone: 'GST',
    bannerImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBldmVudHxlbnwxfHx8fDE3Njg0ODU3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    shortDescription: 'Join the Middle East\'s premier ServiceNow innovation summit featuring enterprise leaders, technical deep-dives, and hands-on workshops.',
    fullDescription: 'SotioCon 2026 brings together ServiceNow practitioners, business leaders, and technology innovators for two days of immersive learning, networking, and knowledge sharing. Experience keynote presentations from ServiceNow executives, technical breakout sessions, live product demonstrations, and exclusive insights into digital transformation strategies.',
    topics: ['ITOM', 'ITSM', 'GRC', 'SecOps', 'ITAM', 'CSM'],
    status: 'upcoming',
    
    speakers: [
      {
        name: 'Sarah Al-Mansoori',
        role: 'Chief Digital Officer',
        company: 'Emirates Group',
        avatar: 'https://images.unsplash.com/photo-1709377303352-7c845ac999ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
      },
      {
        name: 'Michael Chen',
        role: 'VP of Technology',
        company: 'ServiceNow',
        avatar: 'https://images.unsplash.com/photo-1709377303352-7c845ac999ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
      },
      {
        name: 'Priya Sharma',
        role: 'Head of Security Operations',
        company: 'ADNOC',
        avatar: 'https://images.unsplash.com/photo-1709377303352-7c845ac999ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
      },
      {
        name: 'Ahmed Hassan',
        role: 'ServiceNow Architect',
        company: 'Sotiotech',
        avatar: 'https://images.unsplash.com/photo-1709377303352-7c845ac999ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
      }
    ],
    
    agenda: [
      {
        time: '9:00 AM - 9:45 AM',
        title: 'Opening Keynote: The Future of Enterprise Operations',
        description: 'ServiceNow platform vision and roadmap for 2026-2027'
      },
      {
        time: '10:00 AM - 11:30 AM',
        title: 'Technical Deep Dive: ServiceNow ITOM at Scale',
        description: 'Architecture patterns and best practices for large-scale ITOM implementations'
      },
      {
        time: '11:45 AM - 1:00 PM',
        title: 'Customer Panel: Digital Transformation Success Stories',
        description: 'Regional enterprises share their ServiceNow transformation journeys'
      },
      {
        time: '2:00 PM - 3:30 PM',
        title: 'Hands-On Workshop: Security Operations Automation',
        description: 'Build automated security playbooks with ServiceNow SecOps'
      },
      {
        time: '3:45 PM - 5:00 PM',
        title: 'Networking Reception & Demo Showcase',
        description: 'Connect with peers and explore innovative ServiceNow solutions'
      }
    ],
    
    keyTakeaways: [
      'Latest ServiceNow platform innovations and roadmap insights',
      'Proven implementation patterns from enterprise customers',
      'Hands-on experience with advanced ServiceNow capabilities',
      'Networking opportunities with regional ServiceNow community',
      'Technical certifications and learning paths guidance'
    ],
    
    registrationLink: '#',
    
    seoTitle: 'SotioCon 2026 - ServiceNow Innovation Summit | Dubai',
    seoDescription: 'Join the Middle East\'s premier ServiceNow event. Two days of keynotes, workshops, and networking at Dubai World Trade Centre.'
  },
  
  {
    id: '2',
    slug: 'itom-discovery-webinar',
    title: 'Mastering ServiceNow Discovery: From Zero to Full Visibility',
    type: 'Webinar',
    date: 'February 10, 2026',
    time: '2:00 PM - 3:30 PM',
    location: 'Virtual',
    timezone: 'GST',
    bannerImage: 'https://images.unsplash.com/photo-1758598306845-8630d064a244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJpbmFyJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2ODUzOTI5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    shortDescription: 'Learn how to implement ServiceNow Discovery to achieve complete infrastructure visibility in under 90 days.',
    fullDescription: 'This technical webinar covers the end-to-end implementation of ServiceNow Discovery, from initial scoping to production deployment. Learn discovery patterns, MID Server architecture, CMDB integration strategies, and troubleshooting techniques from experienced ServiceNow architects.',
    topics: ['ITOM', 'Discovery', 'CMDB'],
    status: 'upcoming',
    
    speakers: [
      {
        name: 'David Thompson',
        role: 'Senior ITOM Architect',
        company: 'Sotiotech',
        avatar: 'https://images.unsplash.com/photo-1709377303352-7c845ac999ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
      },
      {
        name: 'Lisa Anderson',
        role: 'Discovery Technical Lead',
        company: 'Sotiotech',
        avatar: 'https://images.unsplash.com/photo-1709377303352-7c845ac999ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
      }
    ],
    
    agenda: [
      {
        time: '2:00 PM - 2:15 PM',
        title: 'Introduction to ServiceNow Discovery',
        description: 'Discovery capabilities and business value'
      },
      {
        time: '2:15 PM - 2:45 PM',
        title: 'Discovery Architecture & Planning',
        description: 'MID Server deployment, network access, and discovery scope'
      },
      {
        time: '2:45 PM - 3:15 PM',
        title: 'Live Demo: Configuring Discovery',
        description: 'Step-by-step walkthrough of discovery configuration'
      },
      {
        time: '3:15 PM - 3:30 PM',
        title: 'Q&A Session',
        description: 'Open discussion and troubleshooting tips'
      }
    ],
    
    keyTakeaways: [
      'Discovery architecture best practices for enterprise environments',
      'MID Server sizing and deployment strategies',
      'CMDB integration and data quality management',
      'Common discovery patterns for cloud and on-premise infrastructure',
      'Troubleshooting techniques for discovery issues'
    ],
    
    registrationLink: '#',
    
    seoTitle: 'ServiceNow Discovery Webinar | Sotiotech',
    seoDescription: 'Master ServiceNow Discovery implementation in this technical webinar. Learn MID Server architecture, discovery patterns, and CMDB integration.'
  },
  
  {
    id: '3',
    slug: 'servicenow-secops-meetup-riyadh',
    title: 'ServiceNow SecOps Meetup - Riyadh',
    type: 'Meetup',
    date: 'February 20, 2026',
    time: '6:00 PM - 9:00 PM',
    location: 'Riyadh, Saudi Arabia',
    timezone: 'AST',
    bannerImage: 'https://images.unsplash.com/photo-1733222765056-b0790217baa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbWVldHVwfGVufDF8fHx8MTc2ODU3OTAyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    shortDescription: 'Connect with security professionals and learn how leading organizations are automating security operations with ServiceNow.',
    fullDescription: 'Join security operations professionals for an evening of networking, knowledge sharing, and practical insights on ServiceNow SecOps. This informal meetup features lightning talks from practitioners, live demos, and open discussions on security automation challenges and solutions.',
    topics: ['SecOps', 'Security', 'SOAR'],
    status: 'upcoming',
    
    speakers: [
      {
        name: 'Mohammed Al-Khalifa',
        role: 'CISO',
        company: 'Saudi Telecom Company',
        avatar: 'https://images.unsplash.com/photo-1709377303352-7c845ac999ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
      },
      {
        name: 'Jennifer Park',
        role: 'Security Architect',
        company: 'Aramco Digital',
        avatar: 'https://images.unsplash.com/photo-1709377303352-7c845ac999ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
      }
    ],
    
    agenda: [
      {
        time: '6:00 PM - 6:30 PM',
        title: 'Registration & Networking',
        description: 'Connect with fellow security professionals'
      },
      {
        time: '6:30 PM - 7:00 PM',
        title: 'Lightning Talk: Automating Incident Response',
        description: 'Real-world SecOps automation use cases'
      },
      {
        time: '7:00 PM - 7:30 PM',
        title: 'Panel Discussion: Security Orchestration Challenges',
        description: 'Open discussion on SOAR implementation'
      },
      {
        time: '7:30 PM - 9:00 PM',
        title: 'Networking & Refreshments',
        description: 'Continue conversations and build connections'
      }
    ],
    
    keyTakeaways: [
      'Real-world security automation patterns',
      'Lessons learned from SecOps implementations',
      'Networking with regional security community',
      'Practical SOAR playbook examples',
      'Integration strategies for security tools'
    ],
    
    registrationLink: '#',
    
    seoTitle: 'ServiceNow SecOps Meetup Riyadh | February 2026',
    seoDescription: 'Join security professionals in Riyadh for networking and insights on ServiceNow SecOps automation.'
  },
  
  {
    id: '4',
    slug: 'grc-compliance-automation-2025',
    title: 'GRC Compliance Automation Summit 2025',
    type: 'Conference',
    date: 'December 5, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Mumbai, India',
    bannerImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    shortDescription: 'Enterprise governance, risk, and compliance leaders share automation strategies and regulatory insights.',
    fullDescription: 'This conference brought together GRC professionals to explore compliance automation, regulatory change management, and integrated risk management with ServiceNow IRM platform.',
    topics: ['GRC', 'Compliance', 'Risk Management'],
    status: 'past',
    
    speakers: [
      {
        name: 'Rajesh Kumar',
        role: 'Head of Compliance',
        company: 'ICICI Bank',
        avatar: 'https://images.unsplash.com/photo-1709377303352-7c845ac999ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
      },
      {
        name: 'Anjali Mehta',
        role: 'Risk Management Director',
        company: 'Tata Consultancy Services',
        avatar: 'https://images.unsplash.com/photo-1709377303352-7c845ac999ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
      }
    ],
    
    agenda: [
      {
        time: '9:00 AM - 10:00 AM',
        title: 'Keynote: The Future of Regulatory Compliance',
        description: 'Emerging compliance trends and automation opportunities'
      },
      {
        time: '10:15 AM - 11:45 AM',
        title: 'Workshop: Building a Risk Register',
        description: 'Hands-on ServiceNow IRM configuration'
      },
      {
        time: '1:00 PM - 2:30 PM',
        title: 'Case Studies: GRC Transformation',
        description: 'Banking and financial services compliance automation'
      },
      {
        time: '2:45 PM - 4:00 PM',
        title: 'Panel: Vendor Risk Management',
        description: 'Third-party risk assessment strategies'
      }
    ],
    
    keyTakeaways: [
      'Compliance automation frameworks for regulated industries',
      'Vendor risk management best practices',
      'Policy management and attestation workflows',
      'Integration with audit and control testing',
      'Executive reporting and risk dashboards'
    ],
    
    recordingLink: '#',
    
    seoTitle: 'GRC Compliance Automation Summit 2025 | Mumbai',
    seoDescription: 'Watch recordings from the GRC Compliance Automation Summit featuring ServiceNow IRM implementation insights.'
  }
];

export const getEventBySlug = (slug: string): EventData | undefined => {
  return eventsData.find(event => event.slug === slug);
};

export const getUpcomingEvents = (limit?: number): EventData[] => {
  const upcoming = eventsData.filter(event => event.status === 'upcoming');
  return limit ? upcoming.slice(0, limit) : upcoming;
};

export const getPastEvents = (limit?: number): EventData[] => {
  const past = eventsData.filter(event => event.status === 'past');
  return limit ? past.slice(0, limit) : past;
};