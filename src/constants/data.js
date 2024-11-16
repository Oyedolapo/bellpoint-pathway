import advisor from '../assets/advisor.jpg';
import document from '../assets/document.jpg';
import education from '../assets/education.jpg';
import visa from '../assets/visa.jpg';
import consultant from '../assets/consultant.png';
import documentIcon from '../assets/documentIcon.png';
import financialAid from '../assets/financialAid.png';
import school from '../assets/school.png';
import harvard from '../assets/harvard.png';
import stanford from '../assets/stanford.png';
import oxford from '../assets/oxford.png';
import cambridge from '../assets/cambridge.png';
import mit from '../assets/mit.png';
import princeton from '../assets/princeton.png';
import columbia from '../assets/columbia.png';
import study from '../assets/study.jpg';
import travel from '../assets/travel.jpg';
import budget from '../assets/budget.jpg';
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import adewale from '../assets/adewale.jpg';
import sophia from '../assets/sophia.jpg';
import isabella from '../assets/isabella.jpg';
import ravi from '../assets/ravi.jpg';
import emily from '../assets/emily.jpg';


export const navigationLinks = [
    {name: "Home", link: "#home",},
    {name: "About", link: "#about",},
    {name: "Services", link: "#services",},
    {name: "Blog", link: "#blog",},
    {name: "Contact", link: "#contact",},
]    

export const heroSlides = [
    {
        headline: "Discover Your Future Abroad with BellPoint Pathway",
        subHeading: "Connect with the right educational path, tailored to your dreams."
    },
    {
        headline: "Your Pathway to a New Future",
        subHeading: "Explore academic institutions that align with your goals in the city of your choice."
    },
    {
        headline: "Educational Opportunities for Every Dream",
        subHeading: "Providing expert guidance for documentation, visa processes, and relocation."
    },
]

export const howItWorksCards = [
    {
        id: 1,
        title: "Consult with an Advisor",
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        image: consultant
    },
    {
        id: 2,
        title: "Choose Your School",
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        image: school
    },
    {
        id: 3,
        title: "Apply for Financial Aid",
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        image: financialAid
    },
    {
        id: 4,
        title: "Begin Your Journey",
        description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        image: documentIcon
    },
]

export const serviceCards = [
    {
        id: 1,
        title: "Advisory Services",
        description: "Our experts help you choose the best path based on your aspirations, guiding you through education options and requirements.",
        imgUrl: advisor
    },
    {
        id: 2,
        title: "Educational Connect",
        description: "We match you with educational institutions around the world based on your preferences, ensuring you find the perfect fit.",
        imgUrl: education
    },
    {
        id: 3,
        title: "Documentation",
        description: "Our visa counselors assist you with documentation, application processing, and help you secure travel loans for your study abroad journey.",
        imgUrl: document
    },
    {
        id: 4,
        title: "Visa Counseling & Processing",
        description: "Our visa counselors assist you with documentation, application processing, and help you secure travel loans for your study abroad journey.",
        imgUrl: visa
    }
]

export const testimonials = [
    {
        text: "BellPoint Pathway was my guiding light through the complex process of studying abroad. Their team was incredibly patient and knowledgeable, helping me choose the perfect university and secure my visa seamlessly. I’m now studying at Harvard, living my dream!",
        name: "Sophia Carter",
        school: "Harvard University",
        heading: "A Global Dream Come True",
        imgUrl: sophia
    },
    {
        text: "From choosing the right program to navigating the documentation process, BellPoint Pathway provided expert guidance every step of the way. Thanks to them, I’m pursuing a master’s at Cambridge with a full scholarship!",
        name: "Adewale Johnson,",
        school: "Cambridge University",
        heading: "Expert Guidance, Amazing Results",
        imgUrl: adewale
    },
    {
        text: "The visa process was overwhelming, but BellPoint Pathway made it stress-free. Their counselors were always available to answer my questions and ensured my application was flawless. I’m so grateful for their support.",
        name: " Emily Zhang,",
        school: "Stanford University",
        heading: "Hassle-Free Visa Process",
        imgUrl: emily
    },
    {
        text: "As an international student, funding my education was a major concern. BellPoint Pathway’s team helped me find and apply for scholarships and financial aid. I wouldn’t be here without their help.",
        name: "Ravi Kumar,",
        school: "MIT",
        heading: "Financial Aid Made Simple",
        imgUrl: ravi
    },
    {
        text: "BellPoint Pathway made me feel like I wasn’t alone in this journey. Their personalized approach and constant encouragement gave me the confidence I needed to succeed. Thank you for helping me achieve my dream!",
        name: "Isabella Lopez,",
        school: "Oxford University",
        heading: "Personalized Support, Every Step of the Way",
        imgUrl: isabella
    },
]

export const partners = [
    {
        image: harvard,
        name: 'Harvard University',
    },
    {
        image: stanford,
        name: 'Stanford University',
    },
    {
        image: oxford,
        name: 'Oxford University',
    },
    {
        image: cambridge,
        name: 'Cambridge University',
    },
    {
        image: mit,
        name: 'MIT',
    },
    {
        image: princeton,
        name: 'Princeton University',
    },
    {
        image: columbia,
        name: 'Columbia University',
    },
]

export const blog = [
    {
        id: 1,
        imgUrl: study,
        day: '14',
        month: 'June',
        year: '2024',
        title: "Top 5 Tips for Choosing the Right Study Program",
        note: "Deciding on a study program can be overwhelming. This guide breaks down the essential factors to consider, helping you make a choice that aligns with your career goals and passions."
    },
    {
        id: 2,
        imgUrl: travel,
        day: '20',
        month: 'August',
        year: '2024',
        title: "Navigating Student Visas: A Step-by-Step Guide",
        note: "Get clarity on the visa process with this detailed, easy-to-follow guide. We cover the requirements, documentation, and insider tips to make your application as smooth as possible."
    },
    {
        id: 3,
        imgUrl: budget,
        day: '02',
        month: 'October',
        year: '2024',
        title: "Budgeting Tips for International Students",
        note: "Learn how to manage your finances effectively while studying abroad. Discover practical budgeting tips, financial resources, and ways to save on student essentials."
    },

]

export const footerLinks = [
    {
        category: "Explore",
        links: [
            {name: "About"},
            {name: "Contact"},
            {name: "What We Do"},
            {name: "Services"},
            {name: "Resources"},
            {name: "Blog"},
        ],
    },
    {
        category: "Legal",
        links: [
            {name: "Privacy Policy"},
            {name: "Terms & Conditions"},
        ],
    },
    {
        category: "Company",
        links: [
            {name: "About Us"},
            {name: "Blog"},
            {name: "Careers"},
            {name: "Contact"},
        ],
    },
]

export const socialIcons = [
    {
        name: "Twitter",
        link: "https://www.twitter.com",
        icon: FaXTwitter,
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com",
        icon: FaFacebookF,
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com",
        icon: SiInstagram,
    }
]

// {name: "Advisory Services", link: "#advisory",},
//     {name: "Educational Connect", link: "#education",},
//     {name: "Documentation", link: "#document",},
//     {name: "Visa Counseling & Processing", link: "#visa",},
// ]
