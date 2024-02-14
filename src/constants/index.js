import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  Agile,
  starbucks,
  tesla,
  shopify,
  carrent,
  crudApp,
  addToCart,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "#",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  }
  // },
  // {
  //   id: "writings",
  //   title: "Writings",
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "WEB Developer Intern",
    company_name: "Agile Solutions",
    icon: Agile,
    iconBg: "#E6DEDD",
    date: "May 2021 - Oct 2021",
    points: [
      "I was in a team responsible for the component development,which is a piece of All Tax Platform software.",
      "My responsibilities include the initial research, planning,managing the project, and creating components using JavaScript and SQL",
      "Had a high level of ownership and commitment as it is a startup environment",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Agile Solutions",
    icon: Agile,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Agile Solutions",
    icon: Agile,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Implemented a tech stack of ReactJS, NodeJS, MySQL and other technologies to build an end-to-end solution for All TaxPlatform.",
      "Led the effort to build a feature that allows users to easily keep track of the day-to-day tax area by automating processes and ensuring accuracy",
      "Gained experience in building highly scalable business applications which involve implementing complex business flows.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mern Crud App",
    description:
      "Web-based platform that allows users to CRUD OPERATION WITH SEARCH,SORT,FILTER FUNCTIONALITY",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: crudApp,
    live_link: "https://mernapp-end-to-end.netlify.app/",
    source_code_link: "https://github.com/dasariabhiram?tab=repositories",
  },
  {
    name: "CART React-redux toolkit",
    description:
      "React redux toolkit website cart application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: addToCart,
    live_link: "https://react-redux-addtocart.netlify.app/",
    source_code_link: "https://github.com/dasariabhiram/addtocart-react-redux",
  },
  {
    name: "CART React-redux toolkit",
    description:
      "React redux toolkit website cart application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: addToCart,
    live_link: "https://react-redux-addtocart.netlify.app/",
    source_code_link: "https://github.com/dasariabhiram/addtocart-react-redux",
  },
  {
    name: "CART React-redux toolkit",
    description:
      "React redux toolkit website cart application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: addToCart,
    live_link: "https://react-redux-addtocart.netlify.app/",
    source_code_link: "https://github.com/dasariabhiram/addtocart-react-redux",
  },
  {
    name: "CART React-redux toolkit",
    description:
      "React redux toolkit website cart application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: addToCart,
    live_link: "https://react-redux-addtocart.netlify.app/",
    source_code_link: "https://github.com/dasariabhiram/addtocart-react-redux",
  },
  {
    name: "CART React-redux toolkit",
    description:
      "React redux toolkit website cart application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: addToCart,
    live_link: "https://react-redux-addtocart.netlify.app/",
    source_code_link: "https://github.com/dasariabhiram/addtocart-react-redux",
  },
  {
    name: "CART React-redux toolkit",
    description:
      "React redux toolkit website cart application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: addToCart,
    live_link: "https://react-redux-addtocart.netlify.app/",
    source_code_link: "https://github.com/dasariabhiram/addtocart-react-redux",
  },

];

export { services, technologies, experiences, testimonials, projects };
