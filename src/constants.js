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
        title: "GitHub Profile Detective",
        description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
        image: githubdetLogo,
        tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
        github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
        webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
        id: 1,
        title: "CS Prep",
        description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
        image: csprepLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/codingmastr/CSPrep",
        webapp: "https://csprep.netlify.app/",
    },
    {
        id: 2,
        title: "Movie Recommendation App",
        description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
        image: movierecLogo,
        tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/codingmastr/Movie-Recommendation-App",
        webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
        id: 3,
        title: "Email Validator NPM Package",
        description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
        image: npmLogo,
        tags: ["React JS", "Node.js", "NPM", "Validation"],
        github: "https://github.com/codingmastr/cmtk-email-validator",
        webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
        id: 4,
        title: "Task Reminder Chrome Extension Tool",
        description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
        image: taskremLogo,
        tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
        github: "https://github.com/codingmastr/Task-Reminder-Tool",
        webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
        id: 5,
        title: "Webverse Digital",
        description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
        image: webverLogo,
        tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
        github: "https://github.com/codingmastr/Webverse-Digital",
        webapp: "https://webversedigital.com/",
    },
    {
        id: 6,
        title: "Coding Master",
        description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
        image: cmLogo,
        tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
        github: "https://codingmasterweb.in/",
        webapp: "https://codingmasterweb.in/",
    },
    {
        id: 7,
        title: "Image Search App",
        description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
        image: imagesearchLogo,
        tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
        github: "https://github.com/codingmastr/Image-Search-App",
        webapp: "https://imagsearch.netlify.app/",
    },
    {
        id: 8,
        title: "Image Background Remover",
        description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
        image: removebgLogo,
        tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
        github: "https://github.com/codingmastr/Image-Background-Remover",
        webapp: "https://removeyourbg.netlify.app/",
    },
];  