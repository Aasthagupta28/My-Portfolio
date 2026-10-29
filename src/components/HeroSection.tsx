import { Heading } from "@once-ui-system/core";
import styles from "./HeroSection.module.scss";

const facts = [
  { label: "Now", value: "Orbantis Technologies · Remote" },
  { label: "Builds", value: "SaaS, CRM, HRMS, eCommerce" },
];

const ticker = [
  "Next.js",
  "React",
  "TypeScript",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "Tailwind CSS",
  "Payload CMS",
  "Angular",
  "Responsive UI",
  "SEO-ready markup",
];

export const HeroSection = () => {
  const loop = [...ticker, ...ticker];

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Full Stack Developer · Open to full-time and freelance</p>
          <Heading as="h1" variant="display-strong-l" className={styles.title}>
            Aastha
            <span className={styles.titleAccent}> Gupta</span>
          </Heading>
          <p className={styles.lead}>
            Interfaces with a system behind them. Color, type, spacing, and the API that makes the product work.
          </p>
          <p className={styles.body}>
            I build responsive, SEO-friendly web products with Next.js, React, Django, and PostgreSQL — CRM,
            HRMS, eCommerce, and enterprise platforms.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="/work">
              View projects
            </a>
            <a className={styles.secondary} href="/resume">
              Resume
            </a>
            <a className={styles.quiet} href="#contact">
              Start a project
            </a>
          </div>
        </div>

        <div className={styles.stage}>
          <article className={styles.panel}>
            <p className={styles.panelEyebrow}>Currently</p>
            <dl className={styles.facts}>
              {facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className={styles.accentCard}>
            <p className={styles.accentLabel}>Stack</p>
            <p className={styles.accentValue}>Next.js · React · Django · PostgreSQL</p>
          </article>
        </div>
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.track}>
          {loop.map((item, index) => (
            <span key={`${item}-${index}`} className={styles.tick}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
