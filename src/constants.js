import PORTFOLIO from "./images/portfolioProject.png";
import TEAMS_ROUTER from "./images/teamsRouterProject.png";
import MINI_BLOG_POSTS from './images/miniBlogPostsProject.png'
import TIC_TAC_TOE from './images/ticTacToeProject.png'
import BASIC_CALCULATOR from './images/basicCalculatorProject.png'

export const OBJECT_DESCRIPTION = {
  role: "Full Stack Developer",
  passion: "Create digital experiences uniques",
  status: "Available for projects",
};

export const JSON_DESCRIPTION = {
  name: "Jeisson",
  alias: "JSON",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "Git",
    "GitHub",
    "SQL",
  ],
  available: true,
};

export const CARDS_INFO = [
  { label: "Projects", value: "10+" },
  { label: "Experience", value: "2+" },
  { label: "Clients", value: "0" },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Portfolio",
    description: "My personal portfolio with a modern and responsive design. Was inspired by the JSON format.",
    technologies: ["React", 'Css'],
    image: PORTFOLIO,
    status: "development",
    link: "https://github.com/Jeisson-Acosta/PORTFOLIO.git",
  },
  {
    id: 2,
    title: "Student Project",
    description: "A project with full system for the schools, universities and high school.",
    technologies: ["React", "Css", "Express.js", "Git", "GitHub", "SQL", "Zod"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    status: "development",
    link: "https://github.com/yourusername/ai-chat",
  },
  {
    id: 3,
    title: "Tour Payments",
    description: "Is an small project full stack for family tour payments that i created for keep the accounts by person.",
    technologies: ["React", "Css", "Express.js", "MYSql"],
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop",
    status: "production",
    link: "https://github.com/Jeisson-Acosta/PROYECTO-PASEO-PAGOS-FULLSTACK.git",
  },
  {
    id: 4,
    title: "Teams Router",
    description: "A project focused on a small copy of teams (focused more in the chat option).",
    technologies: ["React", "Css", "React Router"],
    image: TEAMS_ROUTER,
    status: "production",
    link: "https://github.com/Jeisson-Acosta/TEAMS-ROUTER.git",
  },
  {
    id: 5,
    title: "Mini Blog Posts",
    description: "A mini blog posts project with a list that allow see details posts.",
    technologies: ["React", "React Router"],
    image: MINI_BLOG_POSTS,
    status: "production",
    link: "https://github.com/Jeisson-Acosta/MINI-BLOG-POSTS.git",
  },
  {
    id: 6,
    title: "Tic Tac Toe",
    description: "A Tic Tac Toe game with state management, local storage and components.",
    technologies: ["React", "Css"],
    image: TIC_TAC_TOE,
    status: "production",
    link: "https://github.com/Jeisson-Acosta/REACT-TIC-TAC-TOE-IMPROVED.git",
  },
  {
    id: 7,
    title: "Calculator",
    description: "Basic calculator with beautiful design.",
    technologies: ["HTML", "Css", "JavaScript"],
    image: BASIC_CALCULATOR,
    status: "production",
    link: "https://github.com/Jeisson-Acosta/proyecto-calculadora.git",
  },
];
