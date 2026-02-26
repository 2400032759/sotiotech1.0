
export interface Job {
    id: string;
    title: string;
    department: string;
    type: string;
    location: string;
    experience: string;
    slug: string;
    featured?: boolean;
    description: string;
    responsibilities: string[];
    requirements: string[];
    niceToHave?: string[];
}

export const jobsData: Job[] = [
    {
        id: '1',
        title: 'Senior ServiceNow Developer',
        department: 'Engineering',
        type: 'Full-time',
        location: 'Remote',
        experience: '5+ Years',
        slug: 'senior-servicenow-developer',
        featured: true,
        description: "We are looking for an experienced Senior ServiceNow Developer to lead technical implementations and drive digital transformation for our enterprise clients. You will be responsible for designing, developing, and deploying ServiceNow solutions.",
        responsibilities: [
            "Design and develop ServiceNow applications and integrations.",
            "Lead technical workshops and requirement gathering sessions.",
            "Mentor junior developers and participate in code reviews.",
            "Customize ServiceNow UI/UX using Widget and Angular.",
            "Implement ITSM, ITOM, and CSM modules."
        ],
        requirements: [
            "5+ years of experience with ServiceNow platform.",
            "Strong proficiency in JavaScript, HTML, CSS, and Angular.",
            "Experience with ServiceNow APIs (REST, SOAP).",
            "ServiceNow Certified Application Developer (CAD).",
            "Deep understanding of ITSM processes."
        ],
        niceToHave: [
            "Experience with Service Portal widgets.",
            "Knowledge of ITOM Discovery and Mapping.",
            "Experience in a consulting environment."
        ]
    },
    {
        id: '2',
        title: 'ServiceNow Consultant',
        department: 'Consulting',
        type: 'Full-time',
        location: 'Hybrid',
        experience: '3-5 Years',
        slug: 'servicenow-consultant',
        featured: true,
        description: "Join our consulting team to help clients optimize their business processes using ServiceNow. You will act as a bridge between business stakeholders and technical teams.",
        responsibilities: [
            "Analyze business requirements and map them to ServiceNow capabilities.",
            "Configure ServiceNow forms, workflows, and business rules.",
            "Conduct user training and documentation.",
            "Manage client expectations and project timelines."
        ],
        requirements: [
            "3+ years of ServiceNow implementation experience.",
            "Strong analytical and problem-solving skills.",
            "Excellent communication and presentation skills.",
            "ServiceNow Certified System Administrator (CSA)."
        ],
        niceToHave: [
            "ITIL V4 Foundation Certification.",
            "Experience with Agile/Scrum methodologies."
        ]
    },
    {
        id: '3',
        title: 'UI/UX Designer',
        department: 'Design',
        type: 'Full-time',
        location: 'Onsite',
        experience: '3+ Years',
        slug: 'ui-ux-designer',
        description: "We need a creative UI/UX Designer to craft intuitive and beautiful experiences for our ServiceNow applications and portals.",
        responsibilities: [
            "Create wireframes, prototypes, and high-fidelity designs.",
            "Conduct user research and usability testing.",
            "Collaborate with developers to ensure design fidelity.",
            "Maintain and evolve the Sotiotech design system."
        ],
        requirements: [
            "3+ years of product design experience.",
            "Proficiency in Figma, Adobe XD, or Sketch.",
            "Strong portfolio showcasing web and mobile apps.",
            "Understanding of HTML/CSS constraints."
        ]
    },
    {
        id: '4',
        title: 'Frontend Developer (React)',
        department: 'Engineering',
        type: 'Full-time',
        location: 'Remote',
        experience: '2-4 Years',
        slug: 'frontend-developer',
        description: "Build modern, responsive web applications using React and Next.js. You will work closely with our backend team to deliver high-performance user interfaces.",
        responsibilities: [
            "Develop new user-facing features using React.",
            "Build reusable components and libraries.",
            "Optimize applications for maximum speed and scalability.",
            "Ensure technical feasibility of UI/UX designs."
        ],
        requirements: [
            "2+ years of experience with React.js.",
            "Strong proficiency in JavaScript (ES6+) and TypeScript.",
            "Experience with state management (Redux, Zustand, Context).",
            "Familiarity with RESTful APIs."
        ]
    },
    {
        id: '5',
        title: 'ServiceNow Intern',
        department: 'Internship',
        type: 'Internship',
        location: 'Hybrid',
        experience: 'Fresher',
        slug: 'servicenow-intern',
        description: "Kickstart your career with our intense ServiceNow Internship Program. Learn from the best and work on real-world projects.",
        responsibilities: [
            "Undergo training on ServiceNow fundamentals.",
            "Assist senior developers in configuration and scripting.",
            "Participate in testing and documentation.",
            "Complete assigned mini-projects."
        ],
        requirements: [
            "Final year student or recent graduate (CS/IT).",
            "Basic knowledge of JavaScript and OOP concepts.",
            "Eager to learn and adaptable.",
            "Good communication skills."
        ]
    }
];
