const skills = [
  {
    id: 1,
    title: "Frontend Developer",
    span: "More than 2 years",
    icon: "brackets",
    list: [
      { id: 11, skill: "HTML", level: "Advanced" },
      { id: 12, skill: "CSS", level: "Advanced" },
      { id: 13, skill: "JavaScript", level: "Intermediate" },
      { id: 14, skill: "Sass", level: "Intermediate" },
      { id: 15, skill: "React Js", level: "Intermediate" },
      { id: 16, skill: "Bootstrap", level: "Advanced" },
      { id: 17, skill: "TailwindCss", level: "Advanced" },
    ],
  },
  {
    id: 2,
    title: "Designer",
    span: "More than 1 year",
    icon: "design",
    list: [
      { id: 21, skill: "Figma", level: "Intermediate" },
      { id: 22, skill: "Adobe XD", level: "Intermediate" },
      { id: 23, skill: "Adobe Photoshop", level: "Intermediate" },
      { id: 24, skill: "Adobe Illustrator", level: "Intermediate" },
    ],
  },
  {
    id: 3,
    title: "Backend Developer",
    span: "More than 1 year",
    icon: "server",
    list: [
      { id: 31, skill: "PHP", level: "Intermediate" },
      { id: 32, skill: "Node Js", level: "Intermediate" },
      { id: 33, skill: "Python", level: "Basic" },
      { id: 34, skill: "Express", level: "Basic" },
      { id: 35, skill: "CodeIgniter", level: "Intermediate" },
      { id: 36, skill: "Laravel 9", level: "Basic" },
    ],
  },
  {
    id: 4,
    title: "Databases",
    span: "More than 1 year",
    icon: "database",
    list: [
      { id: 41, skill: "MySql", level: "Intermediate" },
      { id: 42, skill: "MongoDb", level: "Intermediate" },
      { id: 43, skill: "Oracle", level: "Intermediate" },
      { id: 44, skill: "Microsoft SQL Server", level: "Intermediate" },
      { id: 45, skill: "MariaDB", level: "Basic" },
    ],
  },
];

const education = [
  {
    id: "e1",
    place: "Antenor Orrego Private University",
    title: "Systems Engineer",
    startYear: "2013",
    finishYear: "2021",
  },
  {
    id: "e2",
    place: "Udemy - Virtual Course",
    title: "Modern Natural Language Processing in Python",
    startYear: "2020",
    finishYear: "2020",
  },
  {
    id: "e3",
    place: "Udemy - Virtual Course",
    title: "Complete Web Development with Html5, Css3, Js, Ajax, PHP",
    startYear: "2019",
    finishYear: "2020",
  },
  {
    id: "e4",
    place: "Udemy - Virtual Course",
    title: "Modern Javascript The Definitive Guide",
    startYear: "2022",
    finishYear: "2022",
  },
  {
    id: "e5",
    place: "Udemy - Virtual Course",
    title: "React, The Complete Guide",
    startYear: "2022",
    finishYear: "Present",
  },
];

const works = [
  {
    id: "w1",
    place: "Creavity SAC",
    title: "Front-End Developer - Professional Internship",
    startYear: "2021",
    finishYear: "2021",
  },
  {
    id: "w2",
    place: "Moreno Enterprise",
    title: "Full-Stack Developer",
    startYear: "2021",
    finishYear: "2022",
  },
  {
    id: "w3",
    place: "New Rent Car E.I.R.L.",
    title: "Web Design",
    startYear: "2022",
    finishYear: "2023",
  },
  {
    id: "w4",
    place: "FreeLancer",
    title: "Web Design",
    startYear: "2023",
    finishYear: "Present",
  },
];

const services = [
  {
    id: 1,
    name: "Web Designer",
    icon: "web",
    description:
      "Service with more than 1 year of experience. Providing quality work to clients and companies",
    data: [
      {
        id: "ser1-1",
        description: "I design web corporate",
      },
      {
        id: "ser1-2",
        description: "Design of responsive web pages",
      },
      {
        id: "ser1-3",
        description: "Web update and redesign",
      },
      {
        id: "ser1-4",
        description: "Web maintenance",
      },
      {
        id: "ser1-5",
        description: "Graphic design and branding",
      },
      {
        id: "ser1-6",
        description: "Design and mockups of products for companies",
      },
      {
        id: "ser1-7",
        description: "Website Translation",
      },
    ],
  },
  {
    id: 2,
    name: "Front-End Developer",
    icon: "frontend",
    description:
      "Service with more than 2 year of experience. Providing quality work to clients and companies",
    data: [
      {
        id: "ser2-1",
        description: "I develop the user interface",
      },
      {
        id: "ser2-2",
        description: "Web page development",
      },
      {
        id: "ser2-3",
        description: "I create ux elements interactions",
      },
      {
        id: "ser2-4",
        description: "Integration of CMS Systems",
      },
      {
        id: "ser2-5",
        description: "I create custom web applications",
      },
      {
        id: "ser2-6",
        description: "React Developer",
      },
      {
        id: "ser2-7",
        description: "API Integration",
      },
    ],
  },
];
const stringsProfile = [
  "Front-End Developer",
  "Web Designer",
  "UI Designer",
  "Full-Stack Developer",
];

const about = {
  presentation:
    "I help bring to life the ideas of small agencies and companies that require web systems adaptable to their needs. I have a passion to continue learning and increase my knowledge in this broad world of development.",
  description:
    "I am a knowledgeable and experienced web developer, working on web technologies, UI/UX design, and modern tools that entail quality work delivery.",
};

export { skills, education, works, services, stringsProfile, about };
