import React from "react";
import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aastha",
  lastName: "Gupta",
  name: `Aastha Gupta`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "guptaaastha282002@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Punjabi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Aasthagupta28",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aastha-gupta-a42037218",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting Digital Experiences with Code & Creativity</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Dewa Smart Ticker
        </Text>
      </Row>
    ),
    href: "/work/dewa-smart-ticker",
  },
  subline: (
    <>
    I'm Aastha, a <Text as="span" size="xl" weight="strong">Software Engineer</Text> passionate about building <br /> responsive web applications and creating seamless user experiences.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aastha is a Software Engineer based in India with a passion for building responsive web applications 
        and creating seamless user experiences. With expertise in Angular, React, Next.js, and modern front-end 
        technologies, she specializes in developing scalable applications and implementing dynamic functionality 
        through API integrations.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "2B Innovations Pvt. Ltd. (Mohali)",
        timeframe: "11/2024 – Present",
        role: "Junior Frontend Developer",
        achievements: [
          <React.Fragment key="achievement-1">
            Developed and maintained multiple web applications including QComm and Digital Signage, 
            using Angular, TypeScript, Bootstrap, and CSS to create responsive and user-friendly interfaces.
          </React.Fragment>,
          <React.Fragment key="achievement-2">
            Rebuilt the QComm project using Next.js and React, improving performance and scalability, 
            while implementing RESTful APIs and reusable UI components.
          </React.Fragment>,
          <React.Fragment key="achievement-3">
            Designed and developed a mobile application and created client-specific UI designs using Bootstrap, 
            and implemented dynamic functionality by integrating APIs using JavaScript.
          </React.Fragment>,
          <React.Fragment key="achievement-4">
            Integrated dynamic APIs, handled real-time data, and optimized front-end performance for 
            smooth user experience.
          </React.Fragment>,
          <React.Fragment key="achievement-5">
            Collaborated with cross-functional teams including designers and backend developers, 
            following Agile development practices and regular sprint reviews.
          </React.Fragment>,
          <React.Fragment key="achievement-6">
            Created 6 custom client-facing websites using WordPress, ensuring SEO compatibility, 
            responsiveness, and adherence to client branding requirements.
          </React.Fragment>,
          <React.Fragment key="achievement-7">
            Conducted testing, debugging, and code reviews to ensure quality delivery across all platforms.
          </React.Fragment>,
        ],
        images: [],
      },
      {
        company: "2B Innovations Pvt. Ltd. (Mohali)",
        timeframe: "02/2023 – 10/2023",
        role: "Front End Developer Intern",
        achievements: [
          <React.Fragment key="intern-achievement-1">
            Worked as part of a team on a real-time project called Loyalty Program, contributing to 
            the design, development, and testing phases.
          </React.Fragment>,
          <React.Fragment key="intern-achievement-2">
            Built responsive and interactive UI using Bootstrap 5, CSS, and Angular, ensuring 
            cross-browser compatibility and mobile responsiveness.
          </React.Fragment>,
          <React.Fragment key="intern-achievement-3">
            Implemented APIs and handled dynamic data binding using Angular and TypeScript.
          </React.Fragment>,
          <React.Fragment key="intern-achievement-4">
            Actively collaborated with senior developers and followed best coding practices using Git 
            for version control and daily commits.
          </React.Fragment>,
          <React.Fragment key="intern-achievement-5">
            Gained hands-on experience in teamwork, and real-time project workflows.
          </React.Fragment>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "B.Tech (CSE) with 7.77 CGPA",
        description: <>Eternal University Sirmour (08/2019 – 06/2023)</>,
      },
      {
        name: "XII with 73%",
        description: <>Government Senior Secondary School Bharari Mandi (HP) (04/2018 – 03/2019)</>,
      },
      {
        name: "Matrix with 79%",
        description: <>Shivalik Public School Bharari Mandi (HP) (04/2016 – 03/2017)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Technologies",
        description: (
          <>Expertise in modern frontend frameworks and libraries for building responsive web applications.</>
        ),
        tags: [
          {
            name: "HTML/CSS",
            icon: "html",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Angular",
            icon: "angular",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Bootstrap",
            icon: "bootstrap",
          },
        ],
        images: [],
      },
      {
        title: "Tools & Design",
        description: (
          <>Proficient in design tools and version control systems for efficient development workflows.</>
        ),
        tags: [
          {
            name: "Photoshop",
            icon: "photoshop",
          },
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "WordPress",
            icon: "wordpress",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };





