// Newsletters Data Structure
export interface NewsletterData {
  id: string;
  slug: string;
  title: string;
  publishDate: string;
  subject: string;
  preview: string;
  content: string;
  topics: string[];
  
  featured: {
    title: string;
    description: string;
    link: string;
  }[];
  
  seoTitle: string;
  seoDescription: string;
}

export const newslettersData: NewsletterData[] = [
  {
    id: '1',
    slug: 'january-2026-servicenow-insights',
    title: 'January 2026: ServiceNow Platform Updates & Industry Insights',
    publishDate: 'January 1, 2026',
    subject: 'Start 2026 with ServiceNow Innovation',
    preview: 'Discover the latest ServiceNow platform updates, upcoming events, and expert insights to kickstart your digital transformation in 2026.',
    content: `
# ServiceNow Platform Updates

The January 2026 release brings exciting new capabilities across ITOM, SecOps, and CSM modules. Key highlights include enhanced AI-powered incident prediction, expanded cloud discovery patterns, and improved security orchestration workflows.

## Feature Spotlight: Predictive Intelligence

ServiceNow's enhanced Predictive Intelligence now offers real-time anomaly detection across infrastructure metrics, enabling proactive issue resolution before business impact.

## Upcoming Events

- **SotioCon 2026** - March 15-16, Dubai World Trade Centre
- **ITOM Discovery Webinar** - February 10, Virtual
- **SecOps Meetup Riyadh** - February 20, Saudi Arabia

## Industry Insights

Enterprise organizations are increasingly adopting automation-first strategies for IT operations. Our recent survey shows 78% of IT leaders prioritize ITOM and discovery investments in 2026.

## Case Study Highlight

Read how a leading healthcare provider achieved 95% infrastructure visibility with ServiceNow Discovery in just 3 months.
    `,
    topics: ['Platform Updates', 'Events', 'Industry Trends'],
    
    featured: [
      {
        title: 'ServiceNow Discovery Deep Dive',
        description: 'Watch our latest video tutorial on Discovery configuration',
        link: '/videos/servicenow-discovery-deep-dive'
      },
      {
        title: 'ITOM Excellence Podcast',
        description: 'Listen to enterprise IT leaders share their transformation stories',
        link: '/podcasts/episode-12-itom-excellence'
      },
      {
        title: 'DEEM Healthcare Case Study',
        description: 'Learn how DEEM achieved 95% infrastructure visibility',
        link: '/case-studies/deem-itom-discovery'
      }
    ],
    
    seoTitle: 'January 2026 ServiceNow Newsletter | Platform Updates & Insights',
    seoDescription: 'Read the latest ServiceNow platform updates, upcoming events, and industry insights for January 2026.'
  },
  
  {
    id: '2',
    slug: 'december-2025-year-in-review',
    title: 'December 2025: Year in Review & 2026 Predictions',
    publishDate: 'December 1, 2025',
    subject: '2025 ServiceNow Achievements & 2026 Outlook',
    preview: 'Reflect on ServiceNow innovations in 2025 and explore what\'s ahead for digital transformation in 2026.',
    content: `
# 2025 Year in Review

2025 was a transformative year for ServiceNow and our community. We witnessed unprecedented adoption of automation, AI-powered operations, and integrated risk management across enterprises.

## Top Trends of 2025

1. **AI-Powered Operations** - 65% increase in Predictive Intelligence adoption
2. **Security Automation** - SOAR implementations grew by 120%
3. **GRC Automation** - Compliance automation became a C-suite priority
4. **Hybrid Cloud Discovery** - Multi-cloud visibility became standard

## 2026 Predictions

### Prediction 1: Platform Engineering Takes Center Stage
Organizations will shift from application-centric to platform-centric IT operations, with ServiceNow becoming the enterprise operating platform.

### Prediction 2: Security & IT Convergence Accelerates
SecOps and ITOM integration will become critical as organizations seek unified operational intelligence.

### Prediction 3: Sustainability Metrics Integration
ServiceNow will play a central role in tracking and optimizing IT infrastructure carbon footprint.

## Community Highlights

- 50+ webinars delivered to 10,000+ professionals
- 12 podcast episodes featuring industry leaders
- 25+ technical deep-dive videos published
- 6 major events across Middle East and India

## Thank You

Thank you for being part of our ServiceNow community. Here's to an innovative 2026!
    `,
    topics: ['Year in Review', 'Predictions', 'Community'],
    
    featured: [
      {
        title: 'GRC Transformation Podcast',
        description: 'Listen to compliance automation success stories',
        link: '/podcasts/episode-10-grc-transformation'
      },
      {
        title: 'Security Automation Podcast',
        description: 'Learn SOAR best practices from security leaders',
        link: '/podcasts/episode-11-security-automation'
      },
      {
        title: 'All Case Studies',
        description: 'Explore real-world ServiceNow transformation stories',
        link: '/case-studies'
      }
    ],
    
    seoTitle: 'December 2025 ServiceNow Newsletter | Year in Review',
    seoDescription: 'Reflect on ServiceNow achievements in 2025 and explore predictions for digital transformation in 2026.'
  }
];

export const getNewsletterBySlug = (slug: string): NewsletterData | undefined => {
  return newslettersData.find(newsletter => newsletter.slug === slug);
};

export const getLatestNewsletters = (limit?: number): NewsletterData[] => {
  return limit ? newslettersData.slice(0, limit) : newslettersData;
};