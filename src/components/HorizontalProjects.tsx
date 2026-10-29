"use client";

import { useEffect, useRef, useState } from "react";
import { Heading } from "@once-ui-system/core";
import styles from "./HorizontalProjects.module.scss";

interface Project {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    link?: string;
    stack?: string[];
    highlights?: string[];
    context?: string;
  };
}

interface HorizontalProjectsProps {
  projects: Project[];
}

export const HorizontalProjects: React.FC<HorizontalProjectsProps> = ({ projects }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <Heading as="h2" variant="display-strong-l" className={styles.title}>
            Selected Projects
          </Heading>
          <p className={styles.subtitle}>
            SaaS, CRM, HRMS, eCommerce, CMS, and enterprise platforms I have shipped.
          </p>
        </div>

        <div className={styles.workList}>
          {projects.map((project, index) => {
            const [company, role] = (project.metadata.context || "Product work").split(" · ");
            return (
              <a
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`${styles.workItem} ${isVisible ? styles.visible : ""}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={styles.workMeta}>
                  <span className={styles.workIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <p className={styles.workCompany}>{company}</p>
                  {role && <p className={styles.workRole}>{role}</p>}
                </div>
                <div className={styles.workBody}>
                  <Heading as="h3" variant="heading-strong-l" className={styles.workTitle}>
                    {project.metadata.title}
                  </Heading>
                  <p className={styles.workSummary}>{project.metadata.summary}</p>
                  {project.metadata.highlights && project.metadata.highlights.length > 0 && (
                    <>
                      <p className={styles.workBuilt}>What I built</p>
                      <ul className={styles.workPoints}>
                        {project.metadata.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {project.metadata.stack && project.metadata.stack.length > 0 && (
                    <p className={styles.workStack}>{project.metadata.stack.join(" · ")}</p>
                  )}
                  <span className={styles.workLink}>Read the case study</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
