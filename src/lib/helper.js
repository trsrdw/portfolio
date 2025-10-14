export const navigations = [
    { label: "HOME", key: "hero" },
    { label: "ABOUT", key: "about" },
    { label: "PROJECTS", key: "projects" },
    { label: "CONTACTS", key: "contacts" },
];

export const educations = [
    {
        id: 1,
        school: "Widyatama University",
        major: "Bachelor of Informatics Engineering, Information Technology",
        year: "2015 - 2020",
    },
];

export const tools = [
    { label: "Next.js", logo: "/tools/next.png", link: "https://nextjs.org/" },
    { label: "React.js", logo: "/tools/react.png", link: "https://react.dev/" },
    { label: "Strapi", logo: "/tools/strapi.png", link: "https://strapi.io/" },
    { label: "Javascript", logo: "/tools/javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { label: "Typescript", logo: "/tools/typescript.png", link: "https://www.typescriptlang.org/" },
    { label: "Sass", logo: "/tools/sass.png", link: "https://sass-lang.com/" },
    { label: "Bootstrap", logo: "/tools/bootstrap-5.png", link: "https://getbootstrap.com/" },
    // { label: "Laravel", logo: "/tools/laravel.png", link: "https://laravel.com/" },
    { label: "Codeigniter", logo: "/tools/codeigniter.png", link: "https://www.codeigniter.com/" },
    { label: "MySQL", logo: "/tools/mysql.png", link: "https://www.mysql.com/" },
    // { label: "PostgreSQL", logo: "/tools/postgresql.png", link: "https://www.postgresql.org/" },
    // { label: "Gulp.js", logo: "/tools/gulp.png", link: "https://gulpjs.com/" },
    // { label: "Ionic", logo: "/tools/ionic.png", link: "https://ionicframework.com/" },
    // { label: "Firebase", logo: "/tools/firebase.png", link: "https://firebase.google.com/" },
    // { label: "Github", logo: "/tools/github.png", link: "https://github.com/" },
    // { label: "Typescript", logo: "/tools/typescript.png", link: "https://www.typescriptlang.org/" },
    // { label: "Node.js", logo: "/tools/node.png", link: "https://nodejs.org/en" },
    { label: "Git", logo: "/tools/git.png", link: "https://git-scm.com/" },
];

export const experiences = [
    {
        id: 1,
        company: "Greeneration Foundation",
        position: [
            {
                id: 11,
                title: "Fullstack Developer",
                description: "Maintaining and optimizing GF's digital products",
                year: "Jan 2024 - Present",
            },
            {
                id: 12,
                title: "Frontend Engineer",
                description: "Developing GFDP frontend",
                year: "May 2023 - Dec 2023",
            }
        ],
        location: "Bandung, Indonesia",
        logo: {
            path: "/exp/gf.png",
            width: 160,
            height: 160,
            alt: "Logo GF"
        },
    },
    {
        id: 2,
        company: "Senja Solutions",
        position: [
            {
                id: 21,
                title: "Web Developer",
                description: "Developing Arrow landing page and tweaking several small web projects",
                year: "Jan 2021 - Jun 2021",
            },
        ],
        location: "Bandung, Indonesia",
        logo: {
            path: "/exp/senja.png",
            width: 400,
            height: 400,
            alt: "Logo Widyatama"
        },
    },
    {
        id: 3,
        company: "E-Learning Widyatama University",
        position: [
            {
                id: 31,
                title: "Programmer (Internship)",
                description: "Developing information system for e-learning attendance",
                year: "Jul 2018 - Aug 2018",
            },
        ],
        location: "Bandung, Indonesia",
        logo: {
            path: "/exp/widyatama-logo.png",
            width: 400,
            height: 367,
            alt: "Logo Widyatama"
        },
    },
];

export const projects = [
    {
        id: 1,
        type: "personal",
        items: [
            {
                id: 10,
                banner: "/projects/ricknmorty.png",
                title: "Rick and Morty Explorer",
                description: "Dynamic character, episode, and location listings with search and pagination features, custom error handling (including dedicated error pages), fully responsive layout, and smooth loading states implemented with React Suspense and lazy loading.",
                tools: [
                    { label: "Next.js", logo: "/tools/next.png" },
                    { label: "Typescript", logo: "/tools/typescript.png" },
                    { label: "Sass", logo: "/tools/sass.png" },
                ],
                link: "https://ricknmorty.tiarasd.site/",
                status: "Live",
            },
            {
                id: 11,
                banner: "/projects/invee.png",
                title: "invee",
                description: "A web app that lets users RSVP to events and check in using a QR code, with attendance tracking and admin tools.",
                tools: [
                    { label: "Next.js", logo: "/tools/next.png" },
                    { label: "Typescript", logo: "/tools/typescript.png" },
                    { label: "Sass", logo: "/tools/sass.png" },
                    { label: "MySQL", logo: "/tools/mysql.png" },
                ],
                link: "",
                status: "Development",
            },
            {
                id: 12,
                banner: "/projects/portfolio.png",
                title: "Portfolio",
                description: "A personal portfolio website showcasing selected projects, built to demonstrate frontend development skills and responsive design.",
                tools: [
                    { label: "Next.js", logo: "/tools/next.png" },
                    { label: "Javascript", logo: "/tools/javascript.png" },
                    { label: "Sass", logo: "/tools/sass.png" },
                ],
                link: `${process.env.NEXT_PUBLIC_BASE_URL}`,
                status: "Live",
            },
            {
                id: 13,
                banner: "/projects/flippo.png",
                title: "Final Project: Flippo App",
                description: "A recommendation tool developed as a final assignment project. The app helps users choose the most suitable laptop based on their preferences and requirements. It features user authentication using Google OAuth and stores data using Firebase's NoSQL database.",
                tools: [
                    { label: "Ionic", logo: "/tools/ionic.png" },
                    { label: "Angular", logo: "/tools/angular.png" },
                    { label: "Firebase", logo: "/tools/firebase.png" },
                    { label: "Typescript", logo: "/tools/typescript.png" },
                    { label: "Bootstrap", logo: "/tools/bootstrap-5.png" },
                ],
                link: "",
                status: "Archived",
            },
            {
                id: 14,
                banner: "/projects/mm.png",
                title: "Assignment: Money Management",
                description: "A simple web application developed for budgeting and expense tracking. Users can record income and expenses, categorize transactions, and view financial summaries.",
                tools: [
                    { label: "PHP", logo: "/tools/php.png" },
                    { label: "JQuery", logo: "/tools/jquery.png" },
                    { label: "Javascript", logo: "/tools/javascript.png" },
                    { label: "Bootstrap", logo: "/tools/bootstrap-5.png" },
                ],
                link: "",
                status: "Archived",
            },
            {
                id: 15,
                banner: "/projects/gebook.png",
                title: "Assignment: GEBook",
                description: "A simple online bookstore developed as an assignment project. It allows users to browse available books, view details, and simulate purchases through a clean and user-friendly interface.",
                tools: [
                    { label: "HTML", logo: "/tools/html5.png" },
                    { label: "CSS", logo: "/tools/css3.png" },
                    { label: "Javascript", logo: "/tools/javascript.png" },
                    { label: "Bootstrap", logo: "/tools/bootstrap-5.png" },
                ],
                link: "",
                status: "Archived",
            }
        ],
    },
    {
        id: 2,
        type: "featured",
        items: [
            {
                id: 21,
                banner: "/projects/gf-compro.png",
                title: "Greeneration Foundation Company Profile",
                description: "Redeveloped both frontend and backend of the company profile site, migrating from WordPress to a modern stack using Next.js and Strapi.",
                tools: [
                    { label: "Next.js", logo: "/tools/next.png" },
                    { label: "Strapi", logo: "/tools/strapi.png" },
                    { label: "Javascript", logo: "/tools/javascript.png" },
                    { label: "Sass", logo: "/tools/sass.png" },
                    { label: "Bootstrap", logo: "/tools/bootstrap-5.png" },
                    { label: "MySQL", logo: "/tools/mysql.png" },
                    { label: "Node.js", logo: "/tools/node.png" },
                ],
                link: "",
                status: "Development",
            },
            {
                id: 22,
                banner: "/projects/gfdp-hero.png",
                title: "Green Fund Digital Philanthropy",
                description: "Contributed to rebuilding the frontend of a digital donation platform using Next.js, transitioning from legacy PHP CodeIgniter code.",
                tools: [
                    { label: "Next.js", logo: "/tools/next.png" },
                    // { label: "React.js", logo: "/tools/react.png" },
                    { label: "Javascript", logo: "/tools/javascript.png" },
                    { label: "Sass", logo: "/tools/sass.png" },
                    { label: "Bootstrap", logo: "/tools/bootstrap-5.png" },
                    { label: "Codeigniter", logo: "/tools/codeigniter.png" },
                    { label: "MySQL", logo: "/tools/mysql.png" },
                    { label: "Node.js", logo: "/tools/node.png" },
                ],
                link: "https://donation.greeneration.org/",
                status: "Live",
            },
            {
                id: 23,
                banner: "/projects/arrow.png",
                title: "Arrow Landing Page",
                description: "A clean and responsive landing page created to promote the Arrow Checkout.",
                tools: [
                    { label: "Gulp.js", logo: "/tools/gulp.png" },
                    { label: "Javascript", logo: "/tools/javascript.png" },
                    { label: "Sass", logo: "/tools/sass.png" },
                ],
                link: "",
                status: "Down",
            },
            {
                id: 24,
                banner: "/projects/communit.png",
                title: "Communi-T Landing Page",
                description: "A clean and responsive landing page created to promote the CommuniT brand.",
                tools: [
                    { label: "React.js", logo: "/tools/react.png" },
                    { label: "Typescript", logo: "/tools/typescript.png" },
                    { label: "Sass", logo: "/tools/sass.png" },
                ],
                link: "",
                status: "Archived",
            },
            {
                id: 25,
                banner: "/projects/lincus.png",
                title: "Lincus Landing Page",
                description: "A clean and responsive landing page created to promote the Lincus App.",
                tools: [
                    { label: "React.js", logo: "/tools/react.png" },
                    { label: "Typescript", logo: "/tools/typescript.png" },
                    { label: "Sass", logo: "/tools/sass.png" },
                ],
                link: "",
                status: "Archived",
            },
            {
                id: 26,
                banner: "/projects/sisfo.png",
                title: "E-learning Attendance",
                description: "An information system for managing e-learning attendance at Widyatama University, enabling lecturers and students to track presence effectively.",
                tools: [
                    { label: "Codeigniter", logo: "/tools/codeigniter.png" },
                    { label: "Javascript", logo: "/tools/javascript.png" },
                    { label: "JQuery", logo: "/tools/jquery.png" },
                    { label: "MySQL", logo: "/tools/mysql.png" },
                    { label: "Bootstrap", logo: "/tools/bootstrap-5.png" },
                ],
                link: "",
                status: "Archived",
            }
        ],
    },
];

export const contacts = [
    { label: "LinkedIn", logo: "/contacts/linkedin.svg", link: "https://www.linkedin.com/in/tiarasdewi" },
    { label: "Github", logo: "/contacts/github.svg", link: "https://github.com/trsrdw" },
    { label: "Email", logo: "/contacts/paper-plane.svg", link: "mailto:tiarasd.work@gmail.com" },
];
