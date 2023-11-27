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
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    sass,
    vue,
    angular,
    someday,
    appsus,
    finance,
    oneStyle,
    jobsFinder,
    snapgram,
    travelapp,
    marketplace,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile Developer",
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
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "sass",
      icon: sass,
    },
    {
      name: "vue",
      icon: vue,
    },
    {
      name: "angular",
      icon: angular,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "AI-marketplace",
      description:
        "A marketplace for selling AI images prompts. Artists, developers, and enthusiasts share a common passion for pushing the boundaries of what is possible and sell it on the market and follow their sales.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "ts",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
      ],
      image: marketplace,
      source_code_link: "https://github.com/DorTeri/AI-Marketplace",
      source_demo_link: "https://ai-marketplace-neon.vercel.app/",
    },
    {
      name: "Snapgram",
      description:
        "A social media app as Instagram, where you can share your photos, like posts , save posts , search for posts on the explore and watch people profiles. Soon enough there will be stories and more.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "ts",
          color: "green-text-gradient",
        },
        {
          name: "appwrite",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
      ],
      image: snapgram,
      source_code_link: "https://github.com/DorTeri/Snapgram",
      source_demo_link: "https://snapgram-zeta.vercel.app/",
    },
    {
      name: "Someday",
      description:
        "An end-to-end team managment app inspired by Monday.com , help teams and organizations with operational efficiency by tracking projects and workflows, visualizing data, and team collaboration.",
      tags: [
        {
          name: "vue.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
      ],
      image: someday,
      source_code_link: "https://github.com/DorTeri/Someday",
      source_demo_link: "https://someday-com.onrender.com",
    },
    {
      name: "OneStyleIsrael",
      description:
        "A shoes store in development, built for a client. With OneStyleIsrael you can search for your next shoe, add it to your bag or to your favorites list and checkout with a credit card (will be able in production).",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
      ],
      image: oneStyle,
      source_code_link: "https://github.com/DorTeri/OneStyleIsrael",
      source_demo_link: "https://onestyleisrael.onrender.com/#/",
    },
    {
      name: "AppSus",
      description:
        "An all-in-one app including mail, notes and 2 book shops inspired by Gmail and Google Keep. This app built in 3 days, it can help you remember things by writing notes and even send them to the email.",
      tags: [
        {
          name: "vue.js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: appsus,
      source_code_link: "https://github.com/DorTeri/AppSus",
      source_demo_link: "https://dorteri.github.io/AppSus/#/",
    },
    {
      name: "TravelApp",
      description:
        "A landing page and call to actions for dwonloading a travel app for seeking journeys around the world. Built with next.js and tailwindcss pixel perfect responsive to mobile and desktop.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: travelapp,
      source_code_link: "https://github.com/DorTeri/TravelApp",
      source_demo_link: "https://travel-app-inky-gamma.vercel.app/",
    },
    {
      name: "JobsFinder",
      description:
        "A jobs app, my first app with React Native. With JobsFinder you can find the popular jobs, nearby jobs , search for what ever job you would like and to apply to each one of the jobs.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "expo",
          color: "green-text-gradient",
        },
        {
          name: "expo router",
          color: "pink-text-gradient",
        },
      ],
      image: jobsFinder,
      source_code_link: "https://github.com/DorTeri/JobsFinder",
      source_demo_link: "https://github.com/DorTeri/JobsFinder",
    },
    {
      name: "Finance",
      description:
        "A Bitcoin app, my first app with React.js. With Finance you can send BTC to your contacts, deposit more money to your account, add more contacts to your contacts list and watch BTC statistics.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: finance,
      source_code_link: "https://github.com/DorTeri/Finance",
      source_demo_link: "https://dorteri.github.io/Finance/#/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };