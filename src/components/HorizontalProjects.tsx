"use client";

import { useEffect, useRef, useState } from "react";
import { Heading, Text, Button, Row, Column, Tag, SmartLink } from "@once-ui-system/core";
import styles from "./HorizontalProjects.module.scss";

interface Project {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    link?: string;
  };
}

interface HorizontalProjectsProps {
  projects: Project[];
}

export const HorizontalProjects: React.FC<HorizontalProjectsProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  const getTechStack = (title: string) => {
    const techMap: Record<string, string[]> = {
      "Dewa Smart Ticker": ["Angular", "TypeScript", "HTML/CSS", "APIs"],
      "QComm Client": ["JavaScript", "Bootstrap", "CSS", "APIs"],
      "Digital Signage Project": ["Angular", "TypeScript", "Bootstrap", "APIs"],
      "Loyalty Program System": ["Angular", "TypeScript", "Bootstrap", "APIs"],
      "Cashier System": ["Angular", "TypeScript", "Bootstrap", "APIs"],
      "QComm (Quick Communication Tool)": ["React", "Next.js", "TypeScript", "CSS"],
      "Casa Bella Hotel Website": ["Next.js", "Tailwind CSS"],
      "Orbantis Technologies Company Website": ["Next.js", "Tailwind CSS"],
      "Smart IT Core Solutions Company Website": ["Next.js", "Tailwind CSS"],
    };
    return techMap[title] || ["Angular", "React", "TypeScript"];
  };

  if (!projects || projects.length === 0) {
    return null;
  }

  const currentProject = projects[currentIndex];

  return (
    <section ref={sectionRef} className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <Heading variant="display-strong-l" className={styles.title}>
            Featured Projects
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" className={styles.subtitle}>
            Real-world applications I've built with modern technologies
          </Text>
        </div>

        <div className={styles.projectContainer}>
          <div
            className={styles.projectCard}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={project.slug} className={styles.projectSlide}>
                <div className={styles.projectContent}>
                  <div className={styles.leftSide}>
                    <div className={styles.projectImage}>
                      <div className={styles.imagePlaceholder}>
                        <div className={styles.codePreview}>
                          <div className={styles.codeLine}>
                            <span className={styles.comment}>// {project.metadata.title}</span>
                          </div>
                          <div className={styles.codeLine}>
                            <span className={styles.keyword}>const</span>{" "}
                            <span className={styles.variable}>project</span> = {"{"}
                          </div>
                          <div className={styles.codeLine}>
                            <span className={styles.property}>  tech</span>: [
                            {getTechStack(project.metadata.title).map((tech, i) => (
                              <span key={i}>
                                <span className={styles.string}>"{tech}"</span>
                                {i < getTechStack(project.metadata.title).length - 1 && ","}
                              </span>
                            ))}
                            ],
                          </div>
                          <div className={styles.codeLine}>{"}"}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.rightSide}>
                    <div className={styles.projectNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <Heading variant="heading-strong-xl" className={styles.projectTitle}>
                      {project.metadata.title}
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak" className={styles.projectDescription}>
                      {project.metadata.summary}
                    </Text>

                    <div className={styles.features}>
                      <Text variant="body-default-s" onBackground="brand-weak" className={styles.featuresTitle}>
                        Key Features:
                      </Text>
                      <ul className={styles.featuresList}>
                        {project.metadata.summary.split(".").slice(0, 3).filter(f => f.trim()).map((feature, i) => (
                          <li key={`${project.slug}-feature-${i}`}>
                            <Text variant="body-default-s" onBackground="neutral-weak">
                              {feature.trim()}
                            </Text>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.techStack}>
                      {getTechStack(project.metadata.title).map((tech) => (
                        <Tag key={tech} size="m" className={styles.techTag}>
                          {tech}
                        </Tag>
                      ))}
                    </div>

                    <Row gap="m" className={styles.projectButtons}>
                      <Button
                        href={`/work/${project.slug}`}
                        variant="primary"
                        size="m"
                        data-border="rounded"
                        className={styles.projectButton}
                      >
                        Read Case Study
                      </Button>
                      {project.metadata.link && (
                        <Button
                          href={project.metadata.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="secondary"
                          size="m"
                          data-border="rounded"
                          className={styles.projectButton}
                          prefixIcon="openLink"
                        >
                          View Live
                        </Button>
                      )}
                    </Row>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.navigation}>
            <button
              className={styles.navButton}
              onClick={() =>
                setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1))
              }
              aria-label="Previous project"
            >
              ←
            </button>
            <div className={styles.dots}>
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <button
              className={styles.navButton}
              onClick={() =>
                setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0))
              }
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
