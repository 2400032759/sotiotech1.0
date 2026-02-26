export interface CaseStudyData {
  id: string;
  slug: string;
  clientName: string;
  clientLogo: string;
  industry: string;
  modules: string[];
  region: string;
  technologies: string[];
  duration: string;
  impactStatement: string;
  featuredImage: string;
  
  // Detail page content
  title: string;
  outcomeSummary: string;
  
  overview: {
    background: string;
    businessContext: string;
    whyServiceNow: string;
  };
  
  problemStatement: string[];
  
  scope: {
    modulesImplemented: string[];
    timeline: string;
    teamSize?: string;
  };
  
  solution: {
    architecture: string;
    integrations: string[];
    automationWorkflows: string[];
    customizations: string[];
  };
  
  results: {
    metrics: {
      label: string;
      value: string;
      description: string;
    }[];
    qualitativeImpact: string[];
  };
  
  keyTakeaways: string[];
  
  seoTitle: string;
  seoDescription: string;
}

export const caseStudiesData: CaseStudyData[] = [
  {
    id: '1',
    slug: 'deem-itom-discovery',
    clientName: 'DEEM',
    clientLogo: 'DEEM',
    industry: 'Healthcare',
    modules: ['ITOM', 'Discovery'],
    region: 'Middle East',
    technologies: ['Discovery', 'CMDB', 'MID Server'],
    duration: '3 Months',
    impactStatement: '95% improvement in infrastructure visibility and 40% faster incident resolution',
    featuredImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njg1Nzg2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    
    title: 'Complete IT Infrastructure Visibility Transformation for DEEM Healthcare',
    outcomeSummary: 'Achieved 95% infrastructure visibility with automated discovery across 3,000+ assets, reducing incident resolution time by 40% and enabling proactive IT operations.',
    
    overview: {
      background: 'DEEM is a leading healthcare provider in the Middle East with over 3,000 IT assets distributed across multiple facilities and cloud environments.',
      businessContext: 'With rapid digital transformation initiatives, DEEM faced challenges in maintaining visibility across their hybrid infrastructure, leading to delayed incident response and compliance risks.',
      whyServiceNow: 'ServiceNow ITOM was selected for its comprehensive discovery capabilities, native CMDB integration, and proven track record in healthcare environments with strict compliance requirements.'
    },
    
    problemStatement: [
      'No centralized visibility into IT infrastructure assets across on-premise and cloud environments',
      'Manual asset tracking leading to 30% inventory inaccuracy',
      'Delayed incident resolution due to incomplete dependency mapping',
      'Compliance audit challenges with incomplete asset documentation',
      'Shadow IT proliferation with no governance controls'
    ],
    
    scope: {
      modulesImplemented: ['ServiceNow Discovery', 'CMDB', 'Service Mapping', 'Event Management'],
      timeline: '3 months from kickoff to production deployment',
      teamSize: '5-member implementation team (2 architects, 3 consultants)'
    },
    
    solution: {
      architecture: 'Implemented a comprehensive ServiceNow ITOM solution with multi-domain discovery patterns covering network devices, servers, databases, cloud resources (AWS, Azure), and applications. Deployed distributed MID Servers across geographic locations for secure, agent-based and agentless discovery.',
      integrations: [
        'MID Server deployment across 5 data centers',
        'Integration with AWS and Azure cloud platforms',
        'SCCM integration for Windows endpoint discovery',
        'Network device discovery via SNMP and SSH',
        'Database discovery (Oracle, SQL Server, MySQL)',
        'VMware vCenter integration for virtual infrastructure'
      ],
      automationWorkflows: [
        'Automated daily discovery schedules with conflict resolution',
        'Real-time CMDB updates with change tracking',
        'Automated service mapping for critical business services',
        'Scheduled CI relationship validation and reconciliation',
        'Automated compliance reporting for healthcare regulations'
      ],
      customizations: [
        'Custom discovery patterns for proprietary healthcare applications',
        'Healthcare-specific CI classes for medical devices',
        'Custom dashboard for IT asset compliance tracking',
        'Integration with existing ticketing system for seamless migration',
        'Custom workflows for asset lifecycle management'
      ]
    },
    
    results: {
      metrics: [
        {
          label: 'Infrastructure Visibility',
          value: '95%',
          description: 'Complete visibility across all IT assets'
        },
        {
          label: 'Incident Resolution Time',
          value: '-40%',
          description: 'Faster MTTR with accurate dependency mapping'
        },
        {
          label: 'CMDB Accuracy',
          value: '98%',
          description: 'Automated discovery ensuring data quality'
        },
        {
          label: 'Compliance Audit Time',
          value: '-60%',
          description: 'Automated reporting and documentation'
        }
      ],
      qualitativeImpact: [
        'Proactive identification and remediation of infrastructure vulnerabilities',
        'Improved change management with complete impact analysis',
        'Enhanced capacity planning with real-time resource utilization data',
        'Reduced shadow IT risks through comprehensive asset discovery',
        'Faster onboarding of new applications with automated dependency mapping'
      ]
    },
    
    keyTakeaways: [
      'Phased discovery approach starting with critical assets reduced risk and enabled quick wins',
      'Distributed MID Server architecture essential for secure multi-location discovery',
      'Custom discovery patterns crucial for healthcare-specific assets and compliance',
      'Regular CMDB reconciliation policies maintained data quality post-implementation',
      'Strong change management and training drove user adoption across IT teams'
    ],
    
    seoTitle: 'DEEM Healthcare ITOM Discovery Case Study | 95% Infrastructure Visibility',
    seoDescription: 'How DEEM Healthcare achieved 95% infrastructure visibility and 40% faster incident resolution with ServiceNow ITOM Discovery implementation.'
  },
  
  {
    id: '2',
    slug: 'nxp-service-catalog-automation',
    clientName: 'NXP Semiconductors',
    clientLogo: 'NXP',
    industry: 'Manufacturing',
    modules: ['ITSM', 'Service Catalog'],
    region: 'Global',
    technologies: ['Automation', 'Service Catalog', 'CMDB'],
    duration: '4 Months',
    impactStatement: '70% reduction in manual fulfillment tasks and 85% user satisfaction score',
    featuredImage: 'https://images.unsplash.com/photo-1752614672115-adcf3e2596af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3Njg1Nzg2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    
    title: 'Enterprise Service Catalog Automation for NXP Semiconductors',
    outcomeSummary: 'Transformed IT service delivery with 70% reduction in manual tasks, 85% user satisfaction, and complete automation of 50+ service requests across global operations.',
    
    overview: {
      background: 'NXP Semiconductors is a global leader in semiconductor manufacturing with 30,000+ employees across 35 countries requiring standardized IT services.',
      businessContext: 'Manual service request processes led to inconsistent fulfillment, long wait times, and poor user experience, impacting employee productivity and satisfaction.',
      whyServiceNow: 'ServiceNow Service Catalog was chosen for its enterprise scalability, workflow automation capabilities, and proven success in global manufacturing environments.'
    },
    
    problemStatement: [
      'Manual processing of 10,000+ monthly service requests across multiple regions',
      'Inconsistent service delivery with 15+ day average fulfillment time',
      'No standardized service catalog across global locations',
      'Poor visibility into request status causing user frustration',
      'High operational costs with 40% of IT staff time spent on routine requests'
    ],
    
    scope: {
      modulesImplemented: ['Service Catalog', 'Request Management', 'Workflow Engine', 'Knowledge Management'],
      timeline: '4 months including design, development, testing, and global rollout',
      teamSize: '8-member team (1 architect, 4 developers, 2 trainers, 1 PM)'
    },
    
    solution: {
      architecture: 'Designed and implemented a comprehensive service catalog with 50+ automated services, intelligent routing, approval workflows, and multi-language support. Built on ServiceNow platform with integration to backend fulfillment systems.',
      integrations: [
        'Active Directory integration for user provisioning',
        'SCCM integration for software deployment',
        'SAP integration for procurement workflows',
        'Email system integration for automated notifications',
        'Asset management system integration for hardware requests'
      ],
      automationWorkflows: [
        'Automated user onboarding/offboarding workflows',
        'Self-service software installation with SCCM integration',
        'Automated hardware provisioning with approval chains',
        'Access request workflows with compliance checks',
        'Automated license management and allocation'
      ],
      customizations: [
        'Multi-language catalog (English, German, Chinese, Japanese)',
        'Custom approval matrix based on cost and risk',
        'Region-specific service offerings and fulfillment teams',
        'Custom reporting dashboard for service delivery metrics',
        'Branded service portal with role-based catalog views'
      ]
    },
    
    results: {
      metrics: [
        {
          label: 'Manual Tasks Eliminated',
          value: '70%',
          description: 'Automated fulfillment of routine requests'
        },
        {
          label: 'User Satisfaction',
          value: '85%',
          description: 'CSAT score from post-implementation survey'
        },
        {
          label: 'Fulfillment Time',
          value: '-60%',
          description: 'From 15 days to 6 days average'
        },
        {
          label: 'IT Staff Productivity',
          value: '+45%',
          description: 'Time freed for strategic initiatives'
        }
      ],
      qualitativeImpact: [
        'Standardized service delivery experience across all global locations',
        'Improved transparency with real-time request tracking',
        'Enhanced compliance with automated approval workflows',
        'Reduced operational costs through automation and self-service',
        'Better resource planning with predictive analytics on service demand'
      ]
    },
    
    keyTakeaways: [
      'User-centric design with extensive employee feedback drove high adoption rates',
      'Phased rollout by region allowed for localization and continuous improvement',
      'Multi-language support critical for global user experience',
      'Integration with existing tools reduced change management resistance',
      'Comprehensive training program essential for catalog administrators and fulfillment teams'
    ],
    
    seoTitle: 'NXP Service Catalog Automation Case Study | 70% Efficiency Gain',
    seoDescription: 'How NXP Semiconductors achieved 70% reduction in manual tasks and 85% user satisfaction with ServiceNow Service Catalog automation.'
  },
  
  {
    id: '3',
    slug: 'sdb-grc-implementation',
    clientName: 'Social Development Bank',
    clientLogo: 'SDB',
    industry: 'Banking',
    modules: ['GRC', 'IRM'],
    region: 'Middle East',
    technologies: ['GRC', 'Policy Management', 'Risk Management'],
    duration: '5 Months',
    impactStatement: '100% regulatory compliance achieved with 50% reduction in audit preparation time',
    featuredImage: 'https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4NTc4NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    
    title: 'Comprehensive GRC Transformation for Social Development Bank',
    outcomeSummary: 'Achieved 100% regulatory compliance, 50% reduction in audit preparation time, and enterprise-wide risk visibility with ServiceNow IRM implementation.',
    
    overview: {
      background: 'Social Development Bank (SDB) is a government-owned financial institution serving social development initiatives across the region with strict regulatory requirements.',
      businessContext: 'Faced increasing regulatory scrutiny and complex compliance requirements across banking, data privacy, and anti-money laundering regulations with manual, spreadsheet-based processes.',
      whyServiceNow: 'ServiceNow IRM platform selected for its comprehensive GRC capabilities, regulatory content library, and proven success in highly regulated banking environments.'
    },
    
    problemStatement: [
      'Manual compliance tracking across 200+ regulatory requirements',
      'No centralized risk register with fragmented risk data across departments',
      'Audit preparation taking 6+ weeks with extensive manual documentation',
      'Limited visibility into control effectiveness and compliance posture',
      'Policy management challenges with version control and attestation tracking'
    ],
    
    scope: {
      modulesImplemented: ['Policy & Compliance Management', 'Risk Management', 'Audit Management', 'Vendor Risk Management'],
      timeline: '5 months from requirements gathering to production go-live',
      teamSize: '6-member specialized team (2 GRC architects, 3 consultants, 1 compliance SME)'
    },
    
    solution: {
      architecture: 'Implemented end-to-end ServiceNow IRM solution with integrated policy, risk, and compliance management. Configured regulatory change management workflows, automated control testing, and real-time compliance dashboards for executive visibility.',
      integrations: [
        'Integration with core banking system for transaction monitoring',
        'LDAP integration for automated user provisioning and access governance',
        'Document management system integration for evidence storage',
        'SIEM integration for security event correlation',
        'Third-party GRC content library for regulatory updates'
      ],
      automationWorkflows: [
        'Automated policy review and attestation workflows',
        'Risk assessment scheduling and escalation',
        'Automated control testing with evidence collection',
        'Audit planning and issue remediation tracking',
        'Vendor risk assessment automation'
      ],
      customizations: [
        'Custom regulatory framework mapping (SAMA, NDMO, PCI-DSS)',
        'Banking-specific risk taxonomy and scoring model',
        'Executive dashboard with real-time compliance heat maps',
        'Custom audit templates for internal and external audits',
        'Automated regulatory change impact assessment'
      ]
    },
    
    results: {
      metrics: [
        {
          label: 'Regulatory Compliance',
          value: '100%',
          description: 'Full compliance across all frameworks'
        },
        {
          label: 'Audit Preparation Time',
          value: '-50%',
          description: 'From 6 weeks to 3 weeks'
        },
        {
          label: 'Risk Visibility',
          value: '100%',
          description: 'Enterprise-wide risk register'
        },
        {
          label: 'Control Testing',
          value: '-65%',
          description: 'Time savings through automation'
        }
      ],
      qualitativeImpact: [
        'Proactive regulatory change management with automated impact assessments',
        'Enhanced board and executive visibility into risk posture',
        'Improved audit outcomes with comprehensive evidence management',
        'Reduced compliance costs through process automation',
        'Stronger vendor risk management with standardized assessments'
      ]
    },
    
    keyTakeaways: [
      'Executive sponsorship and compliance team involvement critical for success',
      'Regulatory content library accelerated time-to-value with pre-built frameworks',
      'Integration with existing systems essential for comprehensive risk view',
      'Change management focus on compliance culture vs. just technology',
      'Regular compliance reporting to board maintained ongoing engagement and support'
    ],
    
    seoTitle: 'Social Development Bank GRC Case Study | 100% Compliance Achieved',
    seoDescription: 'How Social Development Bank achieved 100% regulatory compliance and 50% faster audits with ServiceNow GRC implementation.'
  },
  
  {
    id: '4',
    slug: 'telecom-csm-transformation',
    clientName: 'Middle East Telecom Provider',
    clientLogo: 'TELECOM',
    industry: 'Telecom',
    modules: ['CSM', 'Field Service'],
    region: 'Middle East',
    technologies: ['CSM', 'Mobile App', 'AI Ops'],
    duration: '6 Months',
    impactStatement: '40% improvement in customer satisfaction and 30% faster field service resolution',
    featuredImage: 'https://images.unsplash.com/photo-1589898424451-21e24dcb143c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY4NTExNTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    
    title: 'Customer Service Transformation for Leading Middle East Telecom Provider',
    outcomeSummary: 'Achieved 40% improvement in CSAT, 30% faster field service resolution, and seamless omnichannel customer experience with ServiceNow CSM.',
    
    overview: {
      background: 'A leading telecommunications provider serving 5+ million subscribers across the Middle East with complex service portfolio including mobile, broadband, and enterprise solutions.',
      businessContext: 'Facing declining customer satisfaction due to siloed service channels, long resolution times, and limited self-service capabilities in highly competitive market.',
      whyServiceNow: 'ServiceNow CSM chosen for omnichannel capabilities, field service management, and AI-powered case routing to deliver superior customer experience.'
    },
    
    problemStatement: [
      'Fragmented customer experience across phone, email, chat, and in-store channels',
      'Average case resolution time of 5+ days impacting customer satisfaction',
      'Limited self-service options forcing customers to contact support',
      'Field service inefficiencies with manual scheduling and dispatch',
      'No unified customer view across service and billing systems'
    ],
    
    scope: {
      modulesImplemented: ['Customer Service Management', 'Field Service Management', 'Knowledge Management', 'Agent Workspace'],
      timeline: '6 months including pilot, full rollout, and agent training',
      teamSize: '12-member team (2 architects, 6 developers, 3 trainers, 1 PM)'
    },
    
    solution: {
      architecture: 'Implemented ServiceNow CSM with omnichannel routing, AI-powered case classification, integrated field service management with mobile app, and self-service portal. Built unified customer view integrating billing, network, and service history.',
      integrations: [
        'CRM integration for unified customer profile',
        'Billing system integration for account information',
        'Network management system for service health data',
        'SMS gateway for proactive customer notifications',
        'Social media integration for social customer service'
      ],
      automationWorkflows: [
        'AI-powered case routing based on skills and workload',
        'Automated field service scheduling and dispatch',
        'Proactive outage notifications to affected customers',
        'Automated SLA management with escalations',
        'Self-service provisioning for common requests'
      ],
      customizations: [
        'Custom mobile app for field technicians with offline capability',
        'Telecom-specific case categories and resolution workflows',
        'Arabic and English bilingual portal and knowledge base',
        'Custom dashboards for contact center performance',
        'Integration with telecom order management system'
      ]
    },
    
    results: {
      metrics: [
        {
          label: 'Customer Satisfaction',
          value: '+40%',
          description: 'CSAT score improvement'
        },
        {
          label: 'Field Service Resolution',
          value: '-30%',
          description: 'Faster on-site issue resolution'
        },
        {
          label: 'Self-Service Adoption',
          value: '65%',
          description: 'Cases resolved without agent'
        },
        {
          label: 'First Contact Resolution',
          value: '+35%',
          description: 'More issues resolved on first contact'
        }
      ],
      qualitativeImpact: [
        'Seamless omnichannel experience with context preservation across channels',
        'Improved agent productivity with unified workspace and AI recommendations',
        'Proactive service with predictive analytics on network issues',
        'Enhanced field service efficiency with optimized routing and mobile tools',
        'Better customer insights through integrated analytics and reporting'
      ]
    },
    
    keyTakeaways: [
      'Pilot program with high-value customers validated approach before full rollout',
      'Agent training and change management critical for workspace adoption',
      'AI-powered routing improved significantly with continuous model training',
      'Mobile field service app drove rapid adoption and productivity gains',
      'Integration with existing systems essential for unified customer view'
    ],
    
    seoTitle: 'Telecom CSM Transformation Case Study | 40% CSAT Improvement',
    seoDescription: 'How a Middle East telecom provider achieved 40% CSAT improvement and 30% faster field service with ServiceNow CSM.'
  },
  
  {
    id: '5',
    slug: 'government-itam-optimization',
    clientName: 'Government Agency',
    clientLogo: 'GOV',
    industry: 'Government',
    modules: ['ITAM', 'SAM'],
    region: 'Middle East',
    technologies: ['ITAM', 'SAM', 'Discovery', 'CMDB'],
    duration: '4 Months',
    impactStatement: '35% cost savings on software licensing and 100% license compliance',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2ODU1NzU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    
    title: 'IT Asset & Software License Optimization for Government Agency',
    outcomeSummary: 'Achieved 35% software licensing cost savings, 100% compliance, and complete asset lifecycle visibility with ServiceNow ITAM implementation.',
    
    overview: {
      background: 'Large government agency with 10,000+ employees and complex IT infrastructure requiring strict asset management and software compliance.',
      businessContext: 'Facing audit findings on software license non-compliance, budget overruns from unused licenses, and lack of visibility into asset lifecycle.',
      whyServiceNow: 'ServiceNow ITAM platform selected for comprehensive asset lifecycle management, software asset management, and integration with discovery for automated inventory.'
    },
    
    problemStatement: [
      'No centralized asset repository with data across multiple spreadsheets',
      'Software license non-compliance exposing organization to audit risks',
      '40% of software licenses unused or underutilized',
      'Manual asset tracking leading to ghost assets and procurement waste',
      'No automated software license reconciliation'
    ],
    
    scope: {
      modulesImplemented: ['Hardware Asset Management', 'Software Asset Management', 'Contract Management', 'Procurement'],
      timeline: '4 months from assessment to full deployment',
      teamSize: '6-member team (1 architect, 3 consultants, 1 SAM specialist, 1 trainer)'
    },
    
    solution: {
      architecture: 'Implemented ServiceNow ITAM with automated discovery integration, software license reconciliation, contract lifecycle management, and procurement workflows. Built comprehensive asset repository with full lifecycle tracking.',
      integrations: [
        'ServiceNow Discovery for automated asset inventory',
        'Microsoft SCCM for software deployment tracking',
        'Procurement system for PO and vendor management',
        'Finance system for cost allocation and chargebacks',
        'HR system for employee onboarding/offboarding'
      ],
      automationWorkflows: [
        'Automated hardware asset lifecycle from procurement to disposal',
        'Software license reconciliation with usage tracking',
        'Automated contract renewal notifications and workflows',
        'Asset compliance checks and remediation workflows',
        'Automated software reclamation from inactive users'
      ],
      customizations: [
        'Government-specific asset classification and tagging',
        'Custom compliance reporting for audit requirements',
        'Asset disposal workflows meeting data security requirements',
        'Department-level cost allocation and chargeback',
        'Custom dashboards for executive asset portfolio visibility'
      ]
    },
    
    results: {
      metrics: [
        {
          label: 'Software Cost Savings',
          value: '35%',
          description: 'Annual licensing cost reduction'
        },
        {
          label: 'License Compliance',
          value: '100%',
          description: 'Full compliance across all vendors'
        },
        {
          label: 'Asset Accuracy',
          value: '99%',
          description: 'Automated discovery and reconciliation'
        },
        {
          label: 'License Utilization',
          value: '+45%',
          description: 'Optimized license allocation'
        }
      ],
      qualitativeImpact: [
        'Eliminated audit findings with comprehensive license compliance',
        'Optimized software procurement through usage analytics',
        'Improved asset security with automated disposal workflows',
        'Enhanced budgeting accuracy with complete asset visibility',
        'Reduced procurement cycle time with automated workflows'
      ]
    },
    
    keyTakeaways: [
      'Initial asset data cleanup essential for accurate baseline',
      'Integration with discovery automated ongoing inventory accuracy',
      'Software publisher-specific rules critical for license compliance',
      'Regular license optimization reviews maintained cost savings',
      'Executive reporting on cost savings maintained ongoing support and investment'
    ],
    
    seoTitle: 'Government ITAM Case Study | 35% Software Cost Savings',
    seoDescription: 'How a government agency achieved 35% software cost savings and 100% license compliance with ServiceNow ITAM.'
  },
  
  {
    id: '6',
    slug: 'manufacturing-secops-implementation',
    clientName: 'Global Manufacturing Corp',
    clientLogo: 'GMC',
    industry: 'Manufacturing',
    modules: ['SecOps', 'SOAR'],
    region: 'Global',
    technologies: ['SecOps', 'SOAR', 'Threat Intelligence', 'SIEM'],
    duration: '5 Months',
    impactStatement: '60% faster threat response and 80% reduction in security incidents',
    featuredImage: 'https://images.unsplash.com/photo-1573633525347-963f98290d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzY4NTc4NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    
    title: 'Security Operations Transformation for Global Manufacturing Leader',
    outcomeSummary: 'Achieved 60% faster threat response, 80% reduction in security incidents, and automated security orchestration with ServiceNow SecOps.',
    
    overview: {
      background: 'Global manufacturing corporation with operations in 40+ countries, 50,000+ employees, and critical OT/IT infrastructure requiring advanced security operations.',
      businessContext: 'Increasing cyber threats targeting manufacturing sector, manual security processes, and fragmented security tools limiting threat response effectiveness.',
      whyServiceNow: 'ServiceNow SecOps chosen for unified security operations, SOAR capabilities, and integration with existing security infrastructure.'
    },
    
    problemStatement: [
      'Manual security incident triage taking 2+ hours per alert',
      'Fragmented security tools with no centralized orchestration',
      'Limited threat intelligence integration and context',
      'Inconsistent incident response across global security teams',
      'No automated vulnerability remediation workflows'
    ],
    
    scope: {
      modulesImplemented: ['Security Incident Response', 'Vulnerability Response', 'Threat Intelligence', 'Security Orchestration (SOAR)'],
      timeline: '5 months including integration, playbook development, and team training',
      teamSize: '8-member specialized team (2 security architects, 4 consultants, 2 SOC trainers)'
    },
    
    solution: {
      architecture: 'Implemented ServiceNow SecOps with automated threat intelligence ingestion, security orchestration playbooks, integrated vulnerability management, and unified security operations workspace. Built automated response workflows for common security scenarios.',
      integrations: [
        'SIEM integration (Splunk) for alert ingestion',
        'EDR platform integration for automated containment',
        'Threat intelligence feeds (MISP, VirusTotal, AlienVault)',
        'Vulnerability scanner integration (Qualys, Tenable)',
        'Firewall and network device integration for automated blocking'
      ],
      automationWorkflows: [
        'Automated security alert triage and enrichment',
        'Phishing response playbooks with automated remediation',
        'Automated vulnerability prioritization and assignment',
        'Threat hunting workflows with intelligence correlation',
        'Automated incident escalation and notification'
      ],
      customizations: [
        'Manufacturing-specific security playbooks for OT environments',
        'Custom threat intelligence scoring for manufacturing threats',
        'Integrated SOC dashboard with real-time security metrics',
        'Custom escalation matrix for global 24x7 SOC operations',
        'Compliance reporting for industry security standards'
      ]
    },
    
    results: {
      metrics: [
        {
          label: 'Threat Response Time',
          value: '-60%',
          description: 'From 2 hours to 48 minutes average'
        },
        {
          label: 'Security Incidents',
          value: '-80%',
          description: 'Proactive prevention and automation'
        },
        {
          label: 'False Positive Rate',
          value: '-70%',
          description: 'Automated enrichment and correlation'
        },
        {
          label: 'Vulnerability Remediation',
          value: '-55%',
          description: 'Faster patch deployment'
        }
      ],
      qualitativeImpact: [
        'Unified security operations across global SOC teams',
        'Proactive threat hunting with integrated intelligence',
        'Improved security team productivity through automation',
        'Enhanced executive visibility into security posture',
        'Reduced security risk with faster vulnerability remediation'
      ]
    },
    
    keyTakeaways: [
      'Security playbook development with SOC team input ensured practical automation',
      'Phased integration approach minimized disruption to SOC operations',
      'Threat intelligence tuning critical for reducing false positives',
      'Metrics-driven approach demonstrated value to executive stakeholders',
      'Continuous playbook optimization maintained effectiveness as threats evolved'
    ],
    
    seoTitle: 'Manufacturing SecOps Case Study | 60% Faster Threat Response',
    seoDescription: 'How a global manufacturer achieved 60% faster threat response and 80% fewer incidents with ServiceNow SecOps implementation.'
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudyData | undefined => {
  return caseStudiesData.find(cs => cs.slug === slug);
};

export const getRelatedCaseStudies = (currentSlug: string, modules: string[], industry: string, limit: number = 3): CaseStudyData[] => {
  return caseStudiesData
    .filter(cs => cs.slug !== currentSlug)
    .filter(cs => 
      cs.modules.some(m => modules.includes(m)) || cs.industry === industry
    )
    .slice(0, limit);
};
