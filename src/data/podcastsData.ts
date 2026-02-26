// Podcasts Data Structure
export interface PodcastData {
  id: string;
  slug: string;
  title: string;
  episodeNumber: number;
  publishDate: string;
  duration: string;
  coverImage: string;
  description: string;
  summary: string;
  topics: string[];
  
  guests: {
    name: string;
    role: string;
    company: string;
    bio: string;
  }[];
  
  keyDiscussionPoints: string[];
  
  spotifyEmbedUrl: string;
  applePodcastUrl?: string;
  youtubeUrl?: string;
  
  transcript?: string;
  
  seoTitle: string;
  seoDescription: string;
}

export const podcastsData: PodcastData[] = [
  {
    id: '1',
    slug: 'episode-12-itom-excellence',
    title: 'Achieving ITOM Excellence: Lessons from Enterprise Deployments',
    episodeNumber: 12,
    publishDate: 'January 20, 2026',
    duration: '45 min',
    coverImage: 'https://images.unsplash.com/photo-1627667050609-d4ba6483a368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwcmVjb3JkaW5nJTIwc3R1ZGlvfGVufDF8fHx8MTc2ODQ5OTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'In this episode, we sit down with enterprise IT leaders who have successfully implemented ServiceNow ITOM at scale. Learn about their discovery strategies, CMDB governance, and lessons learned.',
    summary: 'This episode explores real-world ITOM implementations across healthcare, banking, and manufacturing sectors. Our guests share practical insights on discovery planning, MID Server architecture, CMDB data quality, and achieving infrastructure visibility at scale.',
    topics: ['ITOM', 'Discovery', 'CMDB', 'Infrastructure'],
    
    guests: [
      {
        name: 'Sarah Mitchell',
        role: 'VP of IT Operations',
        company: 'Regional Healthcare Network',
        bio: 'Sarah leads IT operations for a 15-hospital healthcare network, overseeing the ServiceNow ITOM implementation that achieved 98% infrastructure visibility.'
      },
      {
        name: 'David Lee',
        role: 'ServiceNow Architect',
        company: 'Sotiotech',
        bio: 'David has led 20+ ITOM implementations across the Middle East and India, specializing in large-scale discovery and service mapping projects.'
      }
    ],
    
    keyDiscussionPoints: [
      'Phased discovery approach for minimizing risk and achieving quick wins',
      'MID Server architecture for multi-region, multi-cloud environments',
      'CMDB data quality strategies and reconciliation policies',
      'Integration patterns with SIEM, monitoring tools, and cloud platforms',
      'Change management and stakeholder engagement for ITOM adoption',
      'ROI measurement and demonstrating business value'
    ],
    
    spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/example',
    applePodcastUrl: 'https://podcasts.apple.com/podcast/example',
    
    seoTitle: 'ITOM Excellence Podcast Episode 12 | ServiceNow Soundbytes',
    seoDescription: 'Learn ITOM best practices from enterprise IT leaders. Discovery strategies, CMDB governance, and infrastructure visibility insights.'
  },
  
  {
    id: '2',
    slug: 'episode-11-security-automation',
    title: 'Security Automation: Building Effective SOAR Playbooks',
    episodeNumber: 11,
    publishDate: 'January 6, 2026',
    duration: '52 min',
    coverImage: 'https://images.unsplash.com/photo-1627667050609-d4ba6483a368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Explore security orchestration and automated response (SOAR) with leading security operations professionals. Learn how to build effective playbooks and measure automation success.',
    summary: 'This episode dives deep into security automation with ServiceNow SecOps. Our guests discuss SOAR playbook development, threat intelligence integration, and measuring the impact of security automation on incident response times and security posture.',
    topics: ['SecOps', 'SOAR', 'Security Automation', 'Incident Response'],
    
    guests: [
      {
        name: 'Michael Rodriguez',
        role: 'CISO',
        company: 'Global Financial Services',
        bio: 'Michael oversees security operations for a multinational financial institution, leading the implementation of automated security orchestration across 40+ countries.'
      },
      {
        name: 'Priya Sharma',
        role: 'Security Operations Lead',
        company: 'Sotiotech',
        bio: 'Priya specializes in ServiceNow SecOps implementations, with expertise in SOAR playbook development and security tool integration.'
      }
    ],
    
    keyDiscussionPoints: [
      'Common security automation use cases and prioritization',
      'SOAR playbook design principles and testing strategies',
      'Threat intelligence integration and enrichment workflows',
      'Measuring automation effectiveness and ROI',
      'Common pitfalls in security automation projects',
      'Change management for security teams transitioning to automation'
    ],
    
    spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/example',
    youtubeUrl: 'https://youtube.com/watch?v=example',
    
    seoTitle: 'Security Automation Podcast Episode 11 | SOAR Best Practices',
    seoDescription: 'Learn SOAR playbook development and security automation strategies from leading security operations professionals.'
  },
  
  {
    id: '3',
    slug: 'episode-10-grc-transformation',
    title: 'GRC Transformation: From Manual to Automated Compliance',
    episodeNumber: 10,
    publishDate: 'December 16, 2025',
    duration: '48 min',
    coverImage: 'https://images.unsplash.com/photo-1627667050609-d4ba6483a368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Discover how organizations are transforming governance, risk, and compliance processes with ServiceNow IRM. Real stories of audit preparation time reduction and compliance automation.',
    summary: 'This episode features compliance and risk management leaders who have successfully automated their GRC processes with ServiceNow. Learn about their journeys from spreadsheet-based compliance to automated policy management, risk assessment, and audit workflows.',
    topics: ['GRC', 'Compliance', 'Risk Management', 'IRM'],
    
    guests: [
      {
        name: 'Fatima Al-Hashimi',
        role: 'Chief Compliance Officer',
        company: 'National Bank',
        bio: 'Fatima led the GRC transformation that reduced audit preparation time by 60% while achieving 100% regulatory compliance across multiple frameworks.'
      },
      {
        name: 'Robert Kim',
        role: 'GRC Solutions Architect',
        company: 'Sotiotech',
        bio: 'Robert has implemented ServiceNow IRM for financial services, healthcare, and government organizations across the Middle East.'
      }
    ],
    
    keyDiscussionPoints: [
      'Building the business case for GRC automation',
      'Policy management and automated attestation workflows',
      'Risk register implementation and integration strategies',
      'Audit preparation and evidence management',
      'Vendor risk assessment automation',
      'Executive visibility and GRC reporting dashboards'
    ],
    
    spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/example',
    applePodcastUrl: 'https://podcasts.apple.com/podcast/example',
    
    seoTitle: 'GRC Transformation Podcast Episode 10 | Compliance Automation',
    seoDescription: 'Learn how organizations automate governance, risk, and compliance with ServiceNow IRM. Real transformation stories and lessons learned.'
  },
  
  {
    id: '4',
    slug: 'episode-9-itsm-service-excellence',
    title: 'ITSM Service Excellence: Building World-Class Service Desks',
    episodeNumber: 9,
    publishDate: 'December 2, 2025',
    duration: '41 min',
    coverImage: 'https://images.unsplash.com/photo-1627667050609-d4ba6483a368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Explore service desk transformation with ServiceNow ITSM. Learn how leading organizations achieve high customer satisfaction while reducing operational costs.',
    summary: 'This episode focuses on ITSM best practices for incident management, service catalog design, and knowledge management. Our guests share strategies for improving first-contact resolution, reducing MTTR, and enhancing end-user experience.',
    topics: ['ITSM', 'Service Desk', 'Incident Management', 'ITIL'],
    
    guests: [
      {
        name: 'Jennifer Chen',
        role: 'Head of IT Service Management',
        company: 'Technology Corporation',
        bio: 'Jennifer transformed her organization\'s service desk, improving CSAT from 65% to 92% while reducing incident resolution time by 45%.'
      },
      {
        name: 'Ahmed Hassan',
        role: 'ITSM Practice Lead',
        company: 'Sotiotech',
        bio: 'Ahmed specializes in service desk optimization and ITSM process improvement for enterprise organizations.'
      }
    ],
    
    keyDiscussionPoints: [
      'Service desk maturity assessment and improvement roadmap',
      'Incident management workflow optimization',
      'Knowledge-centered service (KCS) implementation',
      'Service catalog design and self-service adoption',
      'Measuring and improving customer satisfaction',
      'Agent productivity and workspace optimization'
    ],
    
    spotifyEmbedUrl: 'https://open.spotify.com/embed/episode/example',
    
    seoTitle: 'ITSM Service Excellence Podcast Episode 9 | Service Desk Best Practices',
    seoDescription: 'Learn service desk transformation strategies with ServiceNow ITSM. Improve CSAT, reduce MTTR, and enhance user experience.'
  }
];

export const getPodcastBySlug = (slug: string): PodcastData | undefined => {
  return podcastsData.find(podcast => podcast.slug === slug);
};

export const getLatestPodcasts = (limit?: number): PodcastData[] => {
  return limit ? podcastsData.slice(0, limit) : podcastsData;
};