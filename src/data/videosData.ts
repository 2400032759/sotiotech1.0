// Videos Data Structure
export interface VideoData {
  id: string;
  slug: string;
  title: string;
  publishDate: string;
  duration: string;
  thumbnail: string;
  description: string;
  topics: string[];
  
  youtubeVideoId: string;
  
  topicsCovered: string[];
  
  relatedResources?: {
    title: string;
    url: string;
  }[];
  
  seoTitle: string;
  seoDescription: string;
}

export const videosData: VideoData[] = [
  {
    id: '1',
    slug: 'servicenow-discovery-deep-dive',
    title: 'ServiceNow Discovery Deep Dive: Configuration & Best Practices',
    publishDate: 'January 15, 2026',
    duration: '28 min',
    thumbnail: 'https://images.unsplash.com/photo-1632187989763-c9c620420b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzY4NTYyMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Watch a comprehensive walkthrough of ServiceNow Discovery configuration, including MID Server setup, discovery schedules, and CMDB integration.',
    topics: ['ITOM', 'Discovery', 'CMDB'],
    
    youtubeVideoId: 'dQw4w9WgXcQ',
    
    topicsCovered: [
      'MID Server installation and configuration',
      'Discovery schedule creation and management',
      'Credential configuration for different device types',
      'Pattern-based discovery vs horizontal discovery',
      'CMDB identification and reconciliation rules',
      'Discovery troubleshooting and debugging'
    ],
    
    relatedResources: [
      {
        title: 'ServiceNow Discovery Documentation',
        url: '#'
      },
      {
        title: 'MID Server Architecture Guide',
        url: '#'
      }
    ],
    
    seoTitle: 'ServiceNow Discovery Configuration Tutorial | Video Guide',
    seoDescription: 'Learn ServiceNow Discovery configuration with this comprehensive video tutorial covering MID Server setup and CMDB integration.'
  },
  
  {
    id: '2',
    slug: 'building-soar-playbooks',
    title: 'Building Effective SOAR Playbooks in ServiceNow SecOps',
    publishDate: 'January 8, 2026',
    duration: '35 min',
    thumbnail: 'https://images.unsplash.com/photo-1632187989763-c9c620420b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Learn how to design and implement automated security playbooks for common incident response scenarios using ServiceNow Security Operations.',
    topics: ['SecOps', 'SOAR', 'Security Automation'],
    
    youtubeVideoId: 'dQw4w9WgXcQ',
    
    topicsCovered: [
      'SOAR playbook design principles',
      'Phishing response automation walkthrough',
      'Threat intelligence integration',
      'Automated containment actions',
      'Playbook testing and validation',
      'Measuring playbook effectiveness'
    ],
    
    relatedResources: [
      {
        title: 'ServiceNow SecOps Documentation',
        url: '#'
      },
      {
        title: 'SOAR Playbook Templates',
        url: '#'
      }
    ],
    
    seoTitle: 'SOAR Playbook Tutorial | ServiceNow Security Automation',
    seoDescription: 'Build automated security playbooks with ServiceNow SecOps. Step-by-step tutorial for incident response automation.'
  },
  
  {
    id: '3',
    slug: 'grc-policy-management',
    title: 'Automated Policy Management with ServiceNow GRC',
    publishDate: 'December 28, 2025',
    duration: '22 min',
    thumbnail: 'https://images.unsplash.com/photo-1632187989763-c9c620420b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Discover how to implement automated policy lifecycle management, including creation, review, approval, and attestation workflows.',
    topics: ['GRC', 'Policy Management', 'Compliance'],
    
    youtubeVideoId: 'dQw4w9WgXcQ',
    
    topicsCovered: [
      'Policy hierarchy and classification',
      'Automated policy review workflows',
      'Approval routing and escalation',
      'Employee policy attestation',
      'Policy version control',
      'Compliance reporting dashboards'
    ],
    
    relatedResources: [
      {
        title: 'ServiceNow GRC Implementation Guide',
        url: '#'
      },
      {
        title: 'Policy Management Best Practices',
        url: '#'
      }
    ],
    
    seoTitle: 'Policy Management Automation | ServiceNow GRC Video',
    seoDescription: 'Automate policy lifecycle management with ServiceNow GRC. Learn workflows for policy review, approval, and attestation.'
  },
  
  {
    id: '4',
    slug: 'itam-software-license-optimization',
    title: 'Software License Optimization with ServiceNow ITAM',
    publishDate: 'December 15, 2025',
    duration: '26 min',
    thumbnail: 'https://images.unsplash.com/photo-1632187989763-c9c620420b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Learn strategies for optimizing software licensing costs and ensuring compliance through ServiceNow IT Asset Management.',
    topics: ['ITAM', 'SAM', 'License Management'],
    
    youtubeVideoId: 'dQw4w9WgXcQ',
    
    topicsCovered: [
      'Software asset discovery and normalization',
      'License entitlement management',
      'Usage tracking and optimization',
      'Software reclamation workflows',
      'Publisher-specific license rules',
      'Compliance dashboards and reporting'
    ],
    
    relatedResources: [
      {
        title: 'ServiceNow ITAM Documentation',
        url: '#'
      },
      {
        title: 'Software License Optimization Guide',
        url: '#'
      }
    ],
    
    seoTitle: 'Software License Optimization | ServiceNow ITAM Video',
    seoDescription: 'Optimize software licensing costs with ServiceNow ITAM. Learn license management and compliance strategies.'
  },
  
  {
    id: '5',
    slug: 'csm-omnichannel-experience',
    title: 'Building Omnichannel Customer Experiences with ServiceNow CSM',
    publishDate: 'December 1, 2025',
    duration: '31 min',
    thumbnail: 'https://images.unsplash.com/photo-1632187989763-c9c620420b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Explore how to implement seamless omnichannel customer service across email, chat, phone, and social media channels.',
    topics: ['CSM', 'Customer Experience', 'Omnichannel'],
    
    youtubeVideoId: 'dQw4w9WgXcQ',
    
    topicsCovered: [
      'Omnichannel routing configuration',
      'Agent workspace optimization',
      'Customer context and history',
      'Self-service portal design',
      'AI-powered case classification',
      'Customer satisfaction measurement'
    ],
    
    relatedResources: [
      {
        title: 'ServiceNow CSM Documentation',
        url: '#'
      },
      {
        title: 'Omnichannel Strategy Guide',
        url: '#'
      }
    ],
    
    seoTitle: 'Omnichannel Customer Service | ServiceNow CSM Video',
    seoDescription: 'Build seamless omnichannel customer experiences with ServiceNow CSM. Learn routing, agent workspace, and self-service strategies.'
  },
  
  {
    id: '6',
    slug: 'itbm-portfolio-planning',
    title: 'Strategic Portfolio Planning with ServiceNow ITBM',
    publishDate: 'November 20, 2025',
    duration: '29 min',
    thumbnail: 'https://images.unsplash.com/photo-1632187989763-c9c620420b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Learn how to implement strategic portfolio planning, demand management, and project portfolio optimization with ServiceNow ITBM.',
    topics: ['ITBM', 'SPM', 'Project Management'],
    
    youtubeVideoId: 'dQw4w9WgXcQ',
    
    topicsCovered: [
      'Demand intake and evaluation',
      'Portfolio prioritization frameworks',
      'Resource capacity planning',
      'Project tracking and governance',
      'Financial management integration',
      'Executive portfolio dashboards'
    ],
    
    relatedResources: [
      {
        title: 'ServiceNow ITBM Documentation',
        url: '#'
      },
      {
        title: 'Portfolio Planning Best Practices',
        url: '#'
      }
    ],
    
    seoTitle: 'Portfolio Planning Tutorial | ServiceNow ITBM Video',
    seoDescription: 'Master strategic portfolio planning with ServiceNow ITBM. Learn demand management and project optimization strategies.'
  }
];

export const getVideoBySlug = (slug: string): VideoData | undefined => {
  return videosData.find(video => video.slug === slug);
};

export const getLatestVideos = (limit?: number): VideoData[] => {
  return limit ? videosData.slice(0, limit) : videosData;
};
