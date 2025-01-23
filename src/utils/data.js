export const experiences = [
    {
        period: 'Jan 2023 - Present',
        company: 'She Code Africa',
        role: 'Frontend Technical Lead',
        description: 'Overseeing the activities and initiatives of the frontend community at SCA, I also organize and host monthly webinars designed to support, educate, and inspire community members. Additionally, I provide mentoring and guidance to those new to the frontend field.'
    },
    {
        period: 'Apr 2022 - Present',
        company: 'Building Bloques Creative Studio',
        role: 'Product Manager',
        description: 'Currently leading the team at BBCS where I drive the development of strategies that align user needs with business objectives, cultivating a culture of teamwork and creative problem-solving to enhance product offerings and improve user experience.'
    },
    {
        period: 'Mar 2023 - Jan 2025',
        company: 'Supreme Marketing Limited',
        role: 'Lead Frontend Developer',
        description: 'Led an Agile team of front-end developers in the creation and ongoing maintenance of innovative fintech applications tailored to meet the diverse needs of clients across Europe.'
    },
    {
        period: 'Mar 2022 - Nov 2022',
        company: 'Coloring Cultures',
        role: 'Product Manager',
        description: 'Successfully recruited a team of 6 developers (3 mobile, 2 web, 1 backend), a QA tester, and a UI/UX designer within 2 weeks. Led the development of a mobile and web application, coordinating the process to ensure timely delivery within client specifications and budget. Also contributed to the app’s web dashboard and completed the landing page.'
    },
];

export const projects = [
    {
        name: 'Firmco Admin',
        tags: 'Portfolio Management App',
        description: 'This app manages and supervises all aspects of financial transactions and user management within the Firmco platform.',
        image: '/image/project-screenshot1.png',
        link: 'https://firmco-admin.vercel.app/',
    },
    {
        name: 'Firmco Client',
        tags: 'Portfolio Management App',
        description: 'The Firmco online portfolio management client application is developed using React, Tailwind, and Firebase. This app is managed through the Firmco Admin Platform.',
        image: '/image/project-screenshot1.png',
        link: 'https://firmco-client.vercel.app/'
    },
    {
        name: 'Plannr',
        tags: 'Personal Finance App',
        description: 'Currently managing the team building Plannr, a personal financial management app that is designed to help users keep track and manage their all their money in one interface.',
        image: '/image/project-screenshot2.jpeg',
        link: '/'
    },
    {
        name: 'BeBlended',
        tags: 'Web Application',
        description: 'BeBlended is an online platform connecting Black clients with specialized hairstylists. As a developer, my focus was on building key features for a seamless experience for clients, stylists, and administrators.',
        image: '/image/project-screenshot3.png',
        link: 'https://www.beblended.ca/'
    },
    {
        name: 'Cloudnimi',
        tags: 'Landing Page',
        description: 'Cloudnimi is a one-page B2B website for a Nigerian company focused on business growth through production-grade solutions. Built with React.js and styled with CSS, it provides essential information about the company and its services.',
        image: '/image/project-screenshot4.png',
        link: 'https://cloudnimi.netlify.app/'
    }
];

export const stacks = [
    {
        name: 'Next Js',
        tags: 'Javascript Framework',
        description: 'Next.js is an open-source web development framework created by the private company Vercel providing React.',
        image: '/image/next.png'
    },
    {
        name: 'Express Js',
        tags: 'Javascript Framework',
        description: 'Express.js is a back end web application framework for building RESTful APIs with Node.js and designed for building web applications and APIs.',
        image: '/image/express.png'
    },
    {
        name: 'Node Js',
        tags: 'Javascript Framework',
        description: 'Node.js is a cross-platform, open-source JavaScript runtime environment that runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.',
        image: '/image/node.png'
    },
    {
        name: 'React Js',
        tags: 'Javascript Framework',
        description: 'React is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless".',
        image: '/image/react.png'
    }
];

export const navSections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'stacks', label: 'Stacks' },
    { id: 'now', label: 'Now' },
    { id: 'contact', label: 'Contact' }
];

export const desSections = [
    { id: 'desktop-about', label: 'About' },
    { id: 'desktop-experience', label: 'Experience' },
    { id: 'desktop-project', label: 'Projects' },
    { id: 'desktop-stack', label: 'Stacks' },
    { id: 'desktop-now', label: 'Now' },
    { id: 'desktop-contact', label: 'Contact' }
];

export const themeConfig = {
    default: {
        background: '#242424',
        primaryText: '#FFFFFF',
        secondaryText: 'rgba(209, 209, 214, 1)',
        accent: '#F5BF6A',
        card: '#2E2E2E'
    },
    darkCyan: {
        background: '#051a1c',
        primaryText: '#c3ebf1',
        secondaryText: 'rgba(183, 212, 245, 0.4)',
        accent: '#2998a1',
        card: '#1b4d51'
    },
    oceanDusk: {
        background: '#182938',
        primaryText: '#b7d4f5',
        secondaryText: 'rgba(183, 212, 245, 0.01)',
        accent: '#1872be',
        card: '#2e475d'
    },
    twilightLavender: {
        background: '#2e3248',
        primaryText: '#cfbcec',
        secondaryText: 'rgba(154, 109, 223, 0.5)',
        accent: '#855ccd',
        card: '#3a3f5d'
    },
    pastelRose: {
        background: '#40364f',
        primaryText: '#f8a6d3',
        secondaryText: 'rgba(208, 138, 178, 0.6)',
        accent: '#f66aa8',
        card: '#4e4160'
    },
    strawberryCream: {
        background: '#ffcfe9',
        primaryText: '#40364f',
        secondaryText: 'rgba(255, 207, 233, 0.15)',
        accent: '#ff8fcc',
        card: '#fddfef'
    },
    vintageBeige: {
        background: '#f3e6cf',
        primaryText: '#774e34',
        secondaryText: 'rgba(119, 78, 52, 0.25)',
        accent: '#f9ac5e',
        card: '#F6EDD6'
    },
    iceBlue: {
        background: '#deebee',
        primaryText: '#1e282a',
        secondaryText: 'rgba(46, 62, 64, 0.5)',
        accent: '#28b3cf',
        card: '#e5fbff'
    },
    frostedGlass: {
        background: '#f2fbfd',
        primaryText: '#12191a',
        secondaryText: 'rgba(18, 25, 26, 0.3)',
        accent: '#40c3cb',
        card: '#D5E2E5'
    },
    light: {
        background: '#ffffff',
        primaryText: '#000000',
        secondaryText: 'rgba(82, 82, 91, 0.5)',
        accent: '#D94A1F',
        card: '#F8F8F8'
    },
};