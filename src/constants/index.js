import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  csharp, 
  nodejs,
  typescript, reactrouter, mongodb, expressjs, tensorflow, scikit,keras,
  git,
  emotion,
  dia, web, blog, land, commerce, van, tenzies,
  mathwork,
  nwulogo,
} from "../assets";

import por from "../assets/projects/por.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skill",
    title: "Skills",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
  { title: "C#", icon: csharp },
  { title: "JavaScript", icon: javascript },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "React Router", icon: reactrouter },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: expressjs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
];

export const aiFrameworks = [
  { name: "TensorFlow", icon: tensorflow }, 
  { name: "Keras", icon: keras },    // 🟧 Official orange icon
  { name: "Scikit-learn", icon: scikit },       // 🟠🟦 Interlocking circles
  // { name: "Pandas", icon: pandas },             // 🐼 Black-and-white panda face
  // { name: "NumPy", icon: numpy },               // 🟪 Matrix or 'N' cube style
  // { name: "Matplotlib", icon: matplotlib },     // 📊 Colorful circular plot
];

export const experiences = [
  {
    title: "AI/ML Research Assistant",
    company_name: "North Western University, Bangladesh",
    icon: nwulogo,
    iconBg: "#161329",
    date: "Jan 2024 – Apr 2024",
    points: [
      "Worked under Dr. Zahrul Jannat Peya on EEG-based emotion recognition using deep learning models (DNN, LSTM, CNN, CNN-LSTM).",
      "Performed comparative analysis of zero-padding vs. average-padding preprocessing, achieving 83% accuracy with CNN-LSTM.",
      "Evaluated models using accuracy, F1-score, AUC, precision, and recall.",
      "Co-authored a research paper accepted at ICDMIS-2024, to be published in Springer’s Lecture Notes in Networks and Systems.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-employed",
    icon: mathwork, // Replace with actual icon if available
    iconBg: "#161329",
    date: "Feb 2023 – Present",
    points: [
      "Built 10+ responsive, SEO-optimized websites and web apps using HTML, CSS, JavaScript, and React.",
      "Integrated third-party APIs including Google Maps, Stripe, and Facebook to enhance functionality and user experience.",
      "Improved average client site traffic by 15% through SEO strategies and performance optimization.",
      "Managed the full development lifecycle: planning, designing, building, and deploying scalable web solutions.",
    ],
  },
];

export const projects = [
  {
    name: "Analysis of DL Models for Emotion Recognition",
    description:
      "This project explores the performance of various deep learning models for emotion recognition using the SEED-V dataset.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Tensor-Flow", color: "green-text-gradient" },
      { name: "Deep-Learning", color: "pink-text-gradient" },
      { name: "Emotion-Recognition", color: "pink-text-gradient" },
    ],
    image: emotion,
    source_code_link: "https://github.com/sifatahammed/Analysis-of-Deep-Learning-Models-for-Emotion-Recognition",
  },
  {
    name: "Diabetic-Retinopathy-Classification",
    description:
      "A deep learning approach to Diabetic Retinopathy severity classification, comparing state-of-the-art architectures and assessing performance using accuracy and Cohen's Kappa score.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Tensor-Flow", color: "green-text-gradient" },
      { name: "Deep-Learning", color: "pink-text-gradient" },
      { name: "Diabetic-Retinopathy", color: "pink-text-gradient" },
    ],
    image: dia,
    source_code_link: "https://github.com/sifatahammed/Diabetic-Retinopathy-Classification-using-Deep-Learning",
  }, 
  {
    name: "Web App for Text Summarization and NER",
    description:
      "Web application leveraging custom-built machine learning models for text summarization and Named Entity Recognition (NER)",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Tensor-Flow", color: "green-text-gradient" },
      { name: "Machine-Learning", color: "pink-text-gradient" },
      { name: "NLP", color: "pink-text-gradient" },    ],
    image: web,
    source_code_link: "https://github.com/sifatahammed/Web-App-for-Text-Summarization-and-NER",
  },
  {
    name: "Trail & Tale",
    description:
      "A responsive blog website built with React, TypeScript, and Bootstrap. Designed for readability, mobile-friendliness, and easy future enhancement.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "BootStrap", color: "green-text-gradient" },
      { name: "React.js", color: "green-text-gradient" }, 
    ],
    image: blog,
    source_code_link:
      "https://github.com/sifatahammed/Trail-and-Tale",
    demo: "https://sifatahammed.github.io/Trail-and-Tale/",
  },
 
  {
    name: "TimeKeepers",
    description:
      "A easy to deploy Luxury Watches E-Commerce Platform that hosts multiple brands with unique UI/UX design",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    image: commerce,
    source_code_link: "https://github.com/sifatahammed/TimeKeepers-E-Commerce-Platform",
  },
  {
    name: "E-Commerce Landing Page",
    description:
      "A modern, responsive product landing page built with HTML, CSS, Bootstrap, SASS, and JavaScript for a modern, responsive E-Commerce platform.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "BootStrap", color: "green-text-gradient" },
      { name: "SASS", color: "green-text-gradient" }, 
    ],

    image: land,
    source_code_link: "https://github.com/sifatahammed/Time-Keepers-Product-landing-page",
  },
    {
    name: "Van Life",
    description:
      " A React SPA for van rentals with route protection, filtering, and host dashboard features.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" }, 
      { name: "React-Router", color: "green-text-gradient" }, 
    ],
    image: van,
    source_code_link:
      "https://github.com/sifatahammed/Van-Life",
    demo: "https://vanlife8.netlify.app/",
  },  
  {
    name: "Tenzies",
    description:
      "A fun and interactive Tenzies dice game built with React. Roll, hold, and match all dice to win! Features state management, conditional styling, and responsive design.",
    tags: [
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" }, 
    ],
    image: tenzies,
    source_code_link:
      "https://github.com/sifatahammed/Tenzies",
    demo: "https://sifatahammed.github.io/Tenzies/",
  },
  {
    name: "Stardex | Porfolio",
    description:
      "Stardex | A sleek, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion with a focus on front-end technologies and AI-powered projects.",
    tags: [
      { name: "HTML", color: "green-text-gradient" },
      { name: "Tailwind-CSS", color: "pink-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" }, 
    ],
    image: por,
    source_code_link:
      "https://github.com/sifatahammed/Stardex-A-Personal-Portfolio/",
    demo: "",
  },
];
