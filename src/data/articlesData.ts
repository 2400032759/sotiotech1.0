export interface ArticleData {
  id: string;
  slug: string;
  type: 'article' | 'blog';
  category: string;
  tags: string[];
  title: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    bio: string;
    photo: string;
    linkedin: string;
  };
  featuredImage: string;
  publishedDate: string;
  readTime: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
}

export const articlesData: ArticleData[] = [
  {
    id: '1',
    slug: 'how-servicenow-itom-reduces-downtime',
    type: 'article',
    category: 'ITOM',
    tags: ['ITOM', 'Infrastructure', 'Monitoring'],
    title: 'How ServiceNow ITOM Reduces Downtime and Improves Infrastructure Visibility',
    excerpt: 'Learn how IT Operations Management (ITOM) enables real-time monitoring, predictive analytics, and automated remediation to minimize downtime.',
    author: {
      name: 'Sarah Mitchell',
      role: 'Senior ServiceNow Consultant',
      bio: 'Sarah has 10+ years of experience implementing ServiceNow ITOM solutions for Fortune 500 companies.',
      photo: 'https://images.unsplash.com/photo-1629904888132-038af9df34ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      linkedin: 'https://linkedin.com'
    },
    featuredImage: 'https://images.unsplash.com/photo-1768483538267-fce52de424d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMG9wZXJhdGlvbnMlMjBkYXRhfGVufDF8fHx8MTc2ODU3ODI0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    publishedDate: 'January 10, 2026',
    readTime: '5 min read',
    content: `# How ServiceNow ITOM Reduces Downtime

IT Operations Management (ITOM) is critical for maintaining service reliability and minimizing costly downtime.

## Key Benefits of ServiceNow ITOM

### 1. Real-Time Infrastructure Visibility
ServiceNow ITOM provides comprehensive visibility across your entire IT infrastructure, from on-premise servers to cloud resources.

### 2. Predictive Analytics
Leverage AI and machine learning to predict potential failures before they impact your business.

### 3. Automated Remediation
Automate common remediation tasks to reduce MTTR (Mean Time To Resolve) by up to 50%.

## Implementation Best Practices

- Start with discovery and service mapping
- Integrate with existing monitoring tools
- Define clear SLAs and KPIs
- Train your operations team

## Conclusion

ServiceNow ITOM transforms reactive IT operations into proactive, data-driven infrastructure management.`,
    seoTitle: 'How ServiceNow ITOM Reduces Downtime | Sotiotech',
    seoDescription: 'Discover how ServiceNow ITOM enables real-time monitoring and automated remediation to minimize downtime and improve infrastructure visibility.'
  },
  {
    id: '2',
    slug: 'future-of-secops-2026',
    type: 'blog',
    category: 'SecOps',
    tags: ['SecOps', 'Security', 'Trends'],
    title: 'The Future of Security Operations: Trends to Watch in 2026',
    excerpt: 'As cyber threats evolve, security operations must adapt. Explore the emerging trends shaping SecOps in 2026 and beyond.',
    author: {
      name: 'Michael Rodriguez',
      role: 'Security Operations Lead',
      bio: 'Michael specializes in enterprise security operations and has led SecOps transformations across regulated industries.',
      photo: 'https://images.unsplash.com/photo-1763128516808-785e80c1dd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      linkedin: 'https://linkedin.com'
    },
    featuredImage: 'https://images.unsplash.com/photo-1763128516808-785e80c1dd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODUxMjczNXww&ixlib=rb-4.1.0&q=80&w=1080',
    publishedDate: 'January 8, 2026',
    readTime: '7 min read',
    content: `# The Future of Security Operations

Security operations are undergoing a massive transformation. Here's what's coming.

## Trend #1: AI-Powered Threat Detection

Machine learning models are now capable of identifying threats that traditional signature-based systems miss.

## Trend #2: Zero Trust Architecture

Organizations are moving away from perimeter-based security to zero trust models.

## Trend #3: Security Orchestration

Automated playbooks are becoming the standard for incident response.

## My Take

The future of SecOps isn't just about technology—it's about people, process, and platform working together.`,
    seoTitle: 'Future of Security Operations 2026 | Sotiotech Blog',
    seoDescription: 'Explore emerging trends in security operations including AI-powered threat detection, zero trust architecture, and security orchestration.'
  },
  {
    id: '3',
    slug: 'itsm-best-practices-2026',
    type: 'article',
    category: 'ITSM',
    tags: ['ITSM', 'Best Practices', 'Service Management'],
    title: 'ServiceNow ITSM Best Practices for Enterprise Organizations',
    excerpt: 'A comprehensive guide to implementing ServiceNow ITSM with proven best practices for incident management, change management, and service catalog optimization.',
    author: {
      name: 'Jennifer Chen',
      role: 'ITSM Practice Lead',
      bio: 'Jennifer has implemented ServiceNow ITSM for over 50 enterprise organizations globally.',
      photo: 'https://images.unsplash.com/photo-1629904888132-038af9df34ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      linkedin: 'https://linkedin.com'
    },
    featuredImage: 'https://images.unsplash.com/photo-1629904888132-038af9df34ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBvZmZpY2V8ZW58MXx8fHwxNzY4NTU1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    publishedDate: 'January 5, 2026',
    readTime: '6 min read',
    content: `# ServiceNow ITSM Best Practices

Implementing ITSM correctly is critical for success.

## Incident Management
- Define clear priority matrices
- Automate routing and assignment
- Measure and optimize MTTR

## Change Management
- Implement proper approval workflows
- Risk assessment for all changes
- Post-implementation review process

## Service Catalog
- User-friendly design
- Clear service descriptions
- Automated fulfillment where possible`,
    seoTitle: 'ServiceNow ITSM Best Practices | Sotiotech',
    seoDescription: 'Learn proven best practices for implementing ServiceNow ITSM including incident management, change management, and service catalog optimization.'
  },
  {
    id: '4',
    slug: 'why-grc-matters',
    type: 'blog',
    category: 'GRC',
    tags: ['GRC', 'Compliance', 'Risk Management'],
    title: 'Why Governance, Risk, and Compliance Should Be Your Top Priority',
    excerpt: 'In an era of increasing regulation and cyber threats, GRC is no longer optional. Here\'s why your organization needs to prioritize it now.',
    author: {
      name: 'David Thompson',
      role: 'GRC Solutions Architect',
      bio: 'David helps organizations build comprehensive GRC programs with ServiceNow.',
      photo: 'https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      linkedin: 'https://linkedin.com'
    },
    featuredImage: 'https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3Njg1NDAyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    publishedDate: 'January 3, 2026',
    readTime: '4 min read',
    content: `# Why GRC Matters

Governance, Risk, and Compliance isn't just a checkbox—it's a strategic advantage.

## The Business Case
- Avoid costly penalties
- Build customer trust
- Streamline audits
- Reduce operational risk

## Where to Start
Most organizations struggle with GRC because they treat it as a technology problem. It's not. It's a business problem that technology can solve.`,
    seoTitle: 'Why GRC Matters for Your Business | Sotiotech Blog',
    seoDescription: 'Learn why Governance, Risk, and Compliance should be a top priority for your organization in 2026.'
  },
  {
    id: '5',
    slug: 'hrsd-employee-experience',
    type: 'article',
    category: 'HRSD',
    tags: ['HRSD', 'Employee Experience', 'HR Automation'],
    title: 'Transforming Employee Experience with ServiceNow HRSD',
    excerpt: 'Discover how ServiceNow HR Service Delivery streamlines HR processes and creates exceptional employee experiences from onboarding to retirement.',
    author: {
      name: 'Lisa Anderson',
      role: 'HR Technology Consultant',
      bio: 'Lisa specializes in employee experience transformation through ServiceNow HRSD implementations.',
      photo: 'https://images.unsplash.com/photo-1644325349124-d1756b79dd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      linkedin: 'https://linkedin.com'
    },
    featuredImage: 'https://images.unsplash.com/photo-1644325349124-d1756b79dd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzY4NTE3MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    publishedDate: 'December 28, 2025',
    readTime: '5 min read',
    content: `# Transforming Employee Experience

ServiceNow HRSD is revolutionizing how organizations deliver HR services.

## Key Capabilities
- Automated onboarding workflows
- Self-service portal
- Case management
- Knowledge base
- Employee lifecycle management

## Impact on Employee Experience
When HR processes are streamlined, employees spend less time on administrative tasks and more time on meaningful work.`,
    seoTitle: 'Transform Employee Experience with ServiceNow HRSD | Sotiotech',
    seoDescription: 'Learn how ServiceNow HR Service Delivery creates exceptional employee experiences through automation and self-service.'
  },
  {
    id: '6',
    slug: 'csm-customer-journey',
    type: 'article',
    category: 'CSM',
    tags: ['CSM', 'Customer Experience', 'Service Management'],
    title: 'Building Seamless Customer Journeys with ServiceNow CSM',
    excerpt: 'Explore how Customer Service Management enables organizations to deliver consistent, omnichannel customer experiences at scale.',
    author: {
      name: 'Robert Kim',
      role: 'Customer Experience Strategist',
      bio: 'Robert helps organizations design and implement customer-centric service strategies with ServiceNow CSM.',
      photo: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      linkedin: 'https://linkedin.com'
    },
    featuredImage: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc2ODUzOTQyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    publishedDate: 'December 22, 2025',
    readTime: '6 min read',
    content: `# Building Seamless Customer Journeys

Customer expectations have never been higher. ServiceNow CSM helps you meet them.

## Omnichannel Support
- Email, chat, phone, social media
- Unified case management
- Consistent experience across channels

## Proactive Service
- Predictive issue detection
- Automated notifications
- Self-service knowledge base

## Measuring Success
Track CSAT, NPS, and resolution times to continuously improve.`,
    seoTitle: 'Build Customer Journeys with ServiceNow CSM | Sotiotech',
    seoDescription: 'Discover how ServiceNow Customer Service Management enables seamless omnichannel customer experiences.'
  }
];

export const getArticleBySlug = (slug: string): ArticleData | undefined => {
  return articlesData.find(article => article.slug === slug);
};

export const getRelatedArticles = (currentSlug: string, category: string, limit: number = 3): ArticleData[] => {
  return articlesData
    .filter(article => article.slug !== currentSlug && article.category === category)
    .slice(0, limit);
};
