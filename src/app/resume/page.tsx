import { Column, Meta, Schema, Text } from "@once-ui-system/core";
import { about, baseURL, person } from "@/resources";
import { PrintResume } from "./PrintResume";
import styles from "./resume.module.css";

export async function generateMetadata() {
  return Meta.generate({
    title: "Resume | Aastha Gupta, Full Stack Developer",
    description:
      "ATS-friendly resume for Aastha Gupta, Full Stack Developer. Next.js, React, Django, FastAPI, PostgreSQL. Orbantis Technologies and 2B Innovations.",
    baseURL,
    path: "/resume",
    image: "/images/og/home.jpg",
  });
}

export default function ResumePage() {
  return (
    <Column fillWidth horizontal="center" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/resume"
        title="Resume | Aastha Gupta, Full Stack Developer"
        description="ATS-friendly resume for Aastha Gupta, Full Stack Developer."
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div className={styles.actions}>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Single-column resume. Use Save as PDF when a portal asks for a file.
        </Text>
        <PrintResume />
      </div>
      <article className={styles.sheet}>
        <header className={styles.header}>
          <h1>Aastha Gupta</h1>
          <p className={styles.role}>Full Stack Developer</p>
          <p className={styles.contact}>
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <span> · </span>
            <a href="tel:+918219469104">+91 8219469104</a>
            <span> · </span>
            <span>VPO Sajaopiplu, Distt. Mandi, HP, India</span>
          </p>
          <p className={styles.contact}>
            <a href="https://www.linkedin.com/in/aastha-gupta-a42037218">
              linkedin.com/in/aastha-gupta-a42037218
            </a>
            <span> · </span>
            <a href="https://github.com/Aasthagupta28">github.com/Aasthagupta28</a>
          </p>
        </header>

        <section>
          <h2>Summary</h2>
          <p>
            Full Stack Developer with experience building web applications, business platforms, and
            SaaS solutions. Skilled in developing application features and implementing business
            workflows to deliver scalable, user-friendly products with Next.js, React, TypeScript,
            Django, FastAPI, and PostgreSQL.
          </p>
        </section>

        <section>
          <h2>Work Experience</h2>
          {about.work.experiences.map((job) => (
            <div key={job.company} className={styles.block}>
              <div className={styles.row}>
                <h3>
                  {job.company} — {job.role}
                </h3>
                <p>
                  {job.timeframe}
                  {job.place ? ` · ${job.place}` : ""}
                </p>
              </div>
              <ul>
                {job.achievements.map((point) => (
                  <li key={String(point)}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Projects</h2>
          <div className={styles.block}>
            <h3>One World 3D — AI-Powered Global Production Platform</h3>
            <p className={styles.stack}>Next.js, React, Tailwind CSS, Django, Celery, OpenAI, fal.ai</p>
            <ul>
              <li>Built interfaces for a platform that turns written stories into AI-assisted production plans and media.</li>
              <li>Contributed to script-parsing and production-planning workflows with Django, React, and Celery.</li>
              <li>Integrated OpenAI and fal.ai for text, voice, video, and 3D asset generation.</li>
            </ul>
          </div>
          <div className={styles.block}>
            <h3>AgencyFlow CRM — CRM and Agency Management Platform</h3>
            <p className={styles.stack}>Next.js, React, TypeScript, FastAPI, PostgreSQL</p>
            <ul>
              <li>Built a CRM for agency sales, client delivery, finance, and team operations.</li>
              <li>Implemented Kanban pipelines for leads, deals, clients, and projects.</li>
              <li>Built GST invoicing, financial reporting, and responsive operational dashboards.</li>
            </ul>
          </div>
          <div className={styles.block}>
            <h3>Smart HRMS — Full Stack HR Management System</h3>
            <p className={styles.stack}>Next.js, React, Tailwind CSS, Django, Python</p>
            <ul>
              <li>Built a role-based HRMS with employee, attendance, leave, and recruitment modules.</li>
              <li>Designed responsive dashboards and integrated secure APIs.</li>
            </ul>
          </div>
          <div className={styles.block}>
            <h3>Wooden Showpieces — eCommerce Platform</h3>
            <p className={styles.stack}>Next.js, React, Django, Tailwind CSS</p>
            <ul>
              <li>Developed a full-stack store with responsive product pages and shopping workflows.</li>
            </ul>
          </div>
          <div className={styles.block}>
            <h3>Payload CMS Integration</h3>
            <p className={styles.stack}>Payload CMS, Next.js, NestJS, PostgreSQL</p>
            <ul>
              <li>Customized Payload CMS with a Next.js admin panel and NestJS APIs.</li>
              <li>Handled content, translations, and a PostgreSQL-backed CMS architecture.</li>
            </ul>
          </div>
          <div className={styles.block}>
            <h3>QComm and QComm Client — Enterprise Alert System</h3>
            <p className={styles.stack}>Angular, TypeScript, JavaScript, Bootstrap</p>
            <ul>
              <li>Built real-time alert modules for popup, video, quiz, and message alerts.</li>
              <li>Integrated APIs for alert delivery and client-side alert management.</li>
            </ul>
          </div>
          <div className={styles.block}>
            <h3>Digital Signage</h3>
            <p className={styles.stack}>Angular, TypeScript, Bootstrap</p>
            <ul>
              <li>Built a responsive frontend for centralized media management.</li>
              <li>Implemented scheduling, playlists, and portrait and landscape display support.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Education</h2>
          <div className={styles.block}>
            <div className={styles.row}>
              <h3>B.Tech, Computer Science and Engineering · 7.77 CGPA</h3>
              <p>Aug 2019 – Jun 2023</p>
            </div>
            <p>Eternal University, Sirmour</p>
          </div>
          <div className={styles.block}>
            <div className={styles.row}>
              <h3>Class XII · 73%</h3>
              <p>Apr 2018 – Mar 2019</p>
            </div>
            <p>Government Senior Secondary School, Bharari, Mandi (HP)</p>
          </div>
          <div className={styles.block}>
            <div className={styles.row}>
              <h3>Class X · 79%</h3>
              <p>Apr 2016 – Mar 2017</p>
            </div>
            <p>Shivalik Public School, Bharari, Mandi (HP)</p>
          </div>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <p>
            <strong>Frontend: </strong>
            React.js, Next.js, Angular, TypeScript, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS, Tailwind UI
          </p>
          <p>
            <strong>Backend: </strong>
            Django, FastAPI, Python, REST APIs, API development and integration
          </p>
          <p>
            <strong>Databases and CMS: </strong>
            PostgreSQL, Payload CMS
          </p>
          <p>
            <strong>Tools: </strong>
            GitHub, Git, OpenAI API, fal.ai
          </p>
        </section>

        <section>
          <h2>Languages</h2>
          <p>English — Full professional proficiency</p>
          <p>Hindi — Full professional proficiency</p>
          <p>Punjabi — Native or bilingual proficiency</p>
        </section>
      </article>
    </Column>
  );
}
