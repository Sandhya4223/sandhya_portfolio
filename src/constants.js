// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import phpLogo from './assets/tech_logo/php.png';
import laravelLogo from './assets/tech_logo/laravel.png';

// Experience Section Logo's
import scriptvenueLogo from './assets/company_logo/script_venue.jpg';

// Education Section Logo's
import rgpvLogo from './assets/education_logo/rgpvLogo.webp';
import dbuuLogo from './assets/education_logo/dbuuLogo.jpg';
import snsLogo from './assets/education_logo/snsLogo.png';
import nskLogo from './assets/education_logo/nskLogo.jpeg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import lms_logo from './assets/work_logo/lms_logo.png';
import ems_logo from './assets/work_logo/ems_logo.jpg';


export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'PHP', logo: phpLogo },
            { name: 'Laravel', logo: laravelLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'PHP', logo: phpLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'TypeScript', logo: typescriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: scriptvenueLogo,
        role: "Fullstack Developer",
        company: "Script Venue",
        date: "March 2026 - Present",
        desc: "Developed dynamic and scalable full-stack web applications using React.js, Laravel, and MySQL, handling frontend and backend development. Implemented RESTful APIs, multi-role authentication, database optimization, and Razorpay/PayPal payment integrations while collaborating with cross-functional teams to deliver responsive and reliable solutions.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Bootstrap",
            "PHP",
            "Laravel",
            "Restful API",
            "MySQL"
        ],
    },
    {
        id: 1,
        img: scriptvenueLogo,
        role: "Fullstack Intern",
        company: "Script Venue",
        date: "Feb 2025 - Feb 2026",
        desc: "Worked as a Full Stack Developer Intern, developing web applications using React.js, Laravel, and MySQL. Built responsive user interfaces, implemented CRUD operations, RESTful APIs, authentication, and database functionality while collaborating with mentors and team members in an agile development environment.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Bootstrap",
            "PHP",
            "Laravel",
            "Restful API",
            "MySQL"
        ],
    },
];
  
export const education = [
    {
        id: 0,
        img: rgpvLogo,
        school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
        date: "Sept 2025 - Present",
        grade: 'N/A',
        desc: "Pursuing M.Tech with a focus on advanced computer science, software development, web technologies, and emerging computing concepts. Developing strong technical and problem-solving skills through coursework, programming, and practical projects.",
        degree: "Master ofTechnology - M.Tech",
    },
    {
        id: 1,
        img: dbuuLogo,
        school: "Dev Bhoomi Uttarakhand University",
        date: "Sept 2021 - July 2025",
        grade: "8.47 CGPA",
        desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
        degree: "Bachelor's of Technology - B.Tech",
    },
    {
        id: 2,
        img: snsLogo,
        school: "Shiksha Niketan, Jammu",
        date: "Apr 2020 - March 2021",
        grade: "98.4%",
        desc: "I completed my class 12 education from Shiksha Niketan School, Jammu, under the Jammu and Kashmir board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
        degree: "12th - PCM with Computer Science",
    },
    {
        id: 3,
        img: nskLogo,
        school: "Naveen Shiksha Kendra, Jammu",
        date: "Apr 2015 - March 2016",
        grade: "87.5%",
        desc: "I completed my Class 10 education from Naveen Shiksha Kendra, Jammu, under the Jammu and Kashmir Board, where I studied the core subjects as part of my secondary education.",
        degree: "10th",
    },
];
  
export const projects = [
    {
        id: 0,
        title: "Learning & Course Management Platform",
        description: "A comprehensive learning and course management platform designed to manage multiple user roles, including Super Admin, Admin, Instructor, Student, and Client. The platform enables instructors to create and manage courses, while students can enroll in courses, complete their learning activities, and earn certificates upon completion. Clients can manage students, while admins and super admins oversee users, courses, and overall platform operations through dedicated dashboards.",
        image: lms_logo,
        tags: ["HTML", "CSS", "JavaScript", "React JS", "Laravel", "Bootstrap", "Restful API", "MySQL", "DBeaver"],
        // github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
        // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
        id: 1,
        title: "Employee & Client Management System",
        description:
        "A full-stack Employee and Client Management System designed to streamline employee and client operations. The platform enables admins to manage employees and clients, track employee attendance and working schedules, manage leave requests, and monitor employee activities. It also allows admins to manage client projects, track project working hours, generate invoices, and process online payments through Razorpay integration. The system provides dedicated dashboards and efficient workflows for managing day-to-day business operations.",
        image: ems_logo,
        tags: ["React JS", "Laravel", "Bootstrap", "Restful API", "Razorpay", "MySQL"],
        // github: "https://github.com/codingmastr/CSPrep",
        // webapp: "https://csprep.netlify.app/",
    },
    {
        id: 2,
        title: "Movie Recommendation App",
        description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
        image: ems_logo,
        tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/codingmastr/Movie-Recommendation-App",
        webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
];  