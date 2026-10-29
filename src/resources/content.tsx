import React from "react";
import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aastha",
  lastName: "Gupta",
  name: "Aastha Gupta",
  role: "Full Stack Developer",
  avatar: "/images/photo.jpeg",
  email: "guptaaastha282002@gmail.com",
  phone: "+91 8219469104",
  locationLabel: "VPO Sajaopiplu, Distt. Mandi, Himachal Pradesh, India",
  location: "Asia/Kolkata",
  languages: ["English · Professional", "Hindi · Professional", "Punjabi · Native"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Notes on product engineering and full-stack delivery</>,
};

const social: Social = [
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
  title: "Aastha Gupta | Full Stack Developer",
  description:
    "Full Stack Developer in India. Next.js, React, TypeScript, Django, FastAPI, and PostgreSQL. SaaS, CRM, HRMS, and eCommerce. Open to full-time and freelance.",
  headline: <>Full Stack Developer for SaaS, business platforms, and product workflows</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          AgencyFlow CRM
        </Text>
      </Row>
    ),
    href: "/work/agencyflow-crm",
  },
  subline: (
    <>
      I build scalable web applications, business platforms, and SaaS products with{" "}
      <Text as="span" size="xl" weight="strong">
        Next.js, React, Django, and PostgreSQL
      </Text>
      .
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About Aastha Gupta | Full Stack Developer",
  description:
    "Full Stack Developer with experience at Orbantis Technologies and 2B Innovations. Next.js, React, Angular, Django, FastAPI, PostgreSQL, and Payload CMS.",
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
        Aastha Gupta is a Full Stack Developer who builds web
        applications, business platforms, and SaaS products — from responsive interfaces to the
        APIs, workflows, and data models behind them. Her work spans HRMS, CRM, eCommerce, CMS, and
        enterprise communication systems using Next.js, React, TypeScript, Django, FastAPI, and
        PostgreSQL.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Orbantis Technologies Pvt. Ltd.",
        timeframe: "Dec 2025 – Present",
        place: "Remote",
        role: "Frontend / Full Stack Developer",
        achievements: [
          "Developed full-stack web applications using Next.js, React, Tailwind CSS, Django, and PostgreSQL.",
          "Built responsive, scalable interfaces with modern UI practices for HRMS, eCommerce, and corporate CMS products.",
          "Integrated Django APIs and customized Payload CMS for enterprise content workflows, translations, and admin tooling.",
          "Shipped product features for AgencyFlow CRM, One World 3D, Smart HRMS, and Wooden Showpieces.",
        ],
        images: [],
      },
      {
        company: "2B Innovations Pvt. Ltd.",
        timeframe: "Jan 2023 – Nov 2025",
        place: "Mohali",
        role: "Frontend Developer / Intern",
        achievements: [
          "Developed enterprise web applications using Angular, React, Next.js, Bootstrap, and TypeScript.",
          "Built responsive UI components and integrated REST APIs with dynamic data handling.",
          "Worked on QComm, Digital Signage, Loyalty Program, and Cashier System.",
          "Improved frontend performance, debugging, testing, and cross-browser compatibility.",
          "Collaborated with development teams using Git and Agile workflows.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "B.Tech, Computer Science and Engineering · 7.77 CGPA",
        description: <>Eternal University, Sirmour · Aug 2019 – Jun 2023</>,
      },
      {
        name: "Class XII · 73%",
        description: <>Government Senior Secondary School, Bharari, Mandi (HP) · Apr 2018 – Mar 2019</>,
      },
      {
        name: "Class X · 79%",
        description: <>Shivalik Public School, Bharari, Mandi (HP) · Apr 2016 – Mar 2017</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            Product interfaces, dashboards, and reusable UI for web applications and business
            platforms.
          </>
        ),
        tags: [
          { name: "React.js", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Angular", icon: "angular" },
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "HTML5", icon: "html" },
          { name: "CSS3", icon: "css" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
          { name: "Bootstrap", icon: "bootstrap" },
        ],
        images: [],
      },
      {
        title: "Backend",
        description: <>APIs, business workflows, and server-side features for SaaS and enterprise apps.</>,
        tags: [
          { name: "Django", icon: "django" },
          { name: "FastAPI", icon: "fastapi" },
          { name: "Python", icon: "python" },
          { name: "REST APIs", icon: "globe" },
        ],
        images: [],
      },
      {
        title: "Databases & CMS",
        description: <>Relational data and content systems for admin, commerce, and multi-language products.</>,
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Payload CMS", icon: "document" },
        ],
        images: [],
      },
      {
        title: "Tools & AI",
        description: <>Delivery workflow plus AI services used in production features.</>,
        tags: [
          { name: "GitHub", icon: "github" },
          { name: "Git", icon: "git" },
          { name: "OpenAI API", icon: "openai" },
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
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: "Projects | Aastha Gupta, Full Stack Developer",
  description:
    "Case studies in CRM, AI production, HRMS, eCommerce, CMS, and enterprise alert systems built with Next.js, React, Django, FastAPI, and PostgreSQL.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
