import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaRegBuilding,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiTailwindcss,
  SiJest,
  SiTestinglibrary,
  SiDocker,
} from "react-icons/si";

export const skills = [
  {
    name: "JavaScript",
    icon: (
      <SiJavascript
        className="text-yellow-400"
        title="JavaScript"
        aria-label="JavaScript"
      />
    ),
    level: 90,
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript
        className="text-blue-500"
        title="TypeScript"
        aria-label="TypeScript"
      />
    ),
    level: 80,
  },
  {
    name: "Python",
    icon: (
      <FaPython
        className="text-yellow-500"
        title="Python"
        aria-label="Python"
      />
    ),
    level: 60,
  },
  {
    name: "Java",
    icon: <FaJava className="text-orange-700" title="Java" aria-label="Java" />,
    level: 70,
  },
  {
    name: "React",
    icon: (
      <FaReact className="text-blue-400" title="React" aria-label="React" />
    ),
    level: 85,
  },
  {
    name: "Redux",
    icon: (
      <SiRedux className="text-purple-500" title="Redux" aria-label="Redux" />
    ),
    level: 75,
  },
  {
    name: "HTML5",
    icon: (
      <FaHtml5 className="text-orange-500" title="HTML5" aria-label="HTML5" />
    ),
    level: 95,
  },
  {
    name: "CSS3",
    icon: (
      <FaCss3Alt className="text-blue-500" title="CSS3" aria-label="CSS3" />
    ),
    level: 90,
  },
  {
    name: "Tailwind CSS",
    icon: (
      <SiTailwindcss
        className="text-cyan-400"
        title="Tailwind CSS"
        aria-label="Tailwind CSS"
      />
    ),
    level: 85,
  },
  {
    name: "Node.js",
    icon: (
      <FaNodeJs
        className="text-green-600"
        title="Node.js"
        aria-label="Node.js"
      />
    ),
    level: 80,
  },
  {
    name: "Express",
    icon: (
      <FaNodeJs
        className="text-gray-700"
        title="Express"
        aria-label="Express"
      />
    ),
    level: 75,
  },
  {
    name: "SQL",
    icon: <FaDatabase className="text-blue-800" title="SQL" aria-label="SQL" />,
    level: 75,
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb
        className="text-green-700"
        title="MongoDB"
        aria-label="MongoDB"
      />
    ),
    level: 70,
  },
  {
    name: "Django",
    icon: (
      <SiMongodb
        className="text-green-800"
        title="Django"
        aria-label="Django"
      />
    ),
    level: 65,
  },
  {
    name: "Docker",
    icon: (
      <SiDocker className="text-blue-400" title="Docker" aria-label="Docker" />
    ),
    level: 60,
  },
  {
    name: "Jest",
    icon: <SiJest className="text-red-400" title="Jest" aria-label="Jest" />,
    level: 70,
  },
  {
    name: "React Testing Library",
    icon: (
      <SiTestinglibrary
        className="text-pink-400"
        title="React Testing Library"
        aria-label="React Testing Library"
      />
    ),
    level: 70,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500" title="Git" aria-label="Git" />,
    level: 80,
  },
  {
    name: "REST APIs",
    icon: (
      <FaNodeJs
        className="text-green-600"
        title="REST APIs"
        aria-label="REST APIs"
      />
    ),
    level: 80,
  },
  {
    name: "Agile/Scrum",
    icon: (
      <SiJest
        className="text-green-500"
        title="Agile/Scrum"
        aria-label="Agile/Scrum"
      />
    ),
    level: 80,
  },
  {
    name: "Communication",
    icon: (
      <FaRegBuilding
        className="text-blue-400"
        title="Communication"
        aria-label="Communication"
      />
    ),
    level: 90,
  },
  {
    name: "Teamwork",
    icon: (
      <FaReact
        className="text-gray-500"
        title="Teamwork"
        aria-label="Teamwork"
      />
    ),
    level: 90,
  },
  {
    name: "Problem-solving",
    icon: (
      <FaPython
        className="text-gray-500"
        title="Problem-solving"
        aria-label="Problem-solving"
      />
    ),
    level: 85,
  },
  {
    name: "AI & Machine Learning",
    icon: (
      <FaReact
        className="text-purple-600"
        title="AI & Machine Learning"
        aria-label="AI & Machine Learning"
      />
    ),
    level: 60,
  },
];

export const experience = [
  {
    title: "Full-stack Software Developer",
    company: "Tacton",
    location: "Stockholm, Sweden",
    period: "Nov 2020 - Oct 2024",
    description: [
      "Led several UX improvement initiatives for the cloud-based CPQ (Configure, Price, Quote) application, resulting in significant ROI and positive user sentiment.",
      "Collected and analyzed user feedback using SQL to identify pain points and optimize the interface, leading to a 15% increase in user retention.",
      "Implemented UI improvements based on data-driven insights.",
      "Coordinated work with UX specialists and other stakeholders.",
      "Collaborated with product owners to define technical requirements and project scope.",
      "Used Java and JavaScript to architect, design, and implement scalable and performant features for the CPQ system.",
    ],
  },
  {
    title: "Full-stack Software Developer",
    company: "Salt",
    location: "Stockholm, Sweden",
    period: "Apr 2020 - Jan 2022",
    description: [
      "Co-created a tutoring platform (Eruditio) enabling real-time video calls between users using WebRTC technology.",
      "Developed backend with NodeJS and Express, frontend with ReactJS, and database with MongoDB; later rewrote the project in TypeScript.",
      "Worked for a startup (Tappy) to build the first version of their mobile app using React Native.",
    ],
  },
  {
    title: "Project Assistant",
    company: "Novare Potential",
    location: "Stockholm, Sweden",
    period: "Feb 2020 - Apr 2020",
    description: [
      "Supported coordination of the Software Development Academy, helping students build career profiles and CVs.",
      "Guided students through technical challenges and facilitated workshops on communication and teamwork.",
      "Assisted in analyzing student progress and training effectiveness, optimizing course design based on performance metrics.",
    ],
  },
];

export const education = [
  {
    degree: "System Developer Python and AI",
    institution: "Lexicon IT-Proff",
    location: "Stockholm, Sweden",
    period: "2025",
    description:
      "HTML, CSS, JavaScript, Python, Scum/Agile, UI/UX, Git, GitHub, Web development, Django, Flask, REST, SQL, NoSQL, MongoDB, Cosmos, MySQL, SQLite, Azure, Repl.it, DevOps, Docker, AI- 900, Web3, Introduction to Ai and machine learning, Machine learning, Deep learning, AI ethics, AI Agents",
  },
  {
    degree: "Full-stack JavaScript Development course",
    institution: "School of Applied Technology Salt",
    location: "Stockholm, Sweden",
    period: "2020",
    description:
      "JavaScript, React.js and React Native, Node.js, HTML and CSS, MongoDB/PostgreSQL, Agile Methodologies and Git",
  },
  {
    degree: "Java Software Development course",
    institution: "KTH Software Development Academy",
    location: "Stockholm, Sweden",
    period: "2019",
    description:
      "Object oriented programming with Java, JavaScript, HTML CSS, SQL, Git, Scrum, Agile Methodologies and Enterprise Technologies (Spring, Maven, MongoDB, Docker, Hibernate)",
  },
  {
    degree: "Master's Degree in English Philology",
    institution: "Perm State National Research University",
    location: "Perm, Russia",
    period: "2007-2012",
    description: "",
  },
];
