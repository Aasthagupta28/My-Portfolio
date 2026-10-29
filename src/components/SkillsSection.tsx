"use client";

import { useEffect, useRef, useState } from "react";
import { Heading, Text, Column } from "@once-ui-system/core";
import { SkillBox } from "./SkillBox";
import styles from "./SkillsSection.module.scss";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Angular", icon: "angular" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", icon: "django" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Python", icon: "python" },
      { name: "REST APIs", icon: "globe" },
    ],
  },
  {
    title: "Data, CMS & AI",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Payload CMS", icon: "document" },
      { name: "OpenAI API", icon: "openai" },
      { name: "fal.ai", icon: "rocket" },
      { name: "GitHub", icon: "github" },
    ],
  },
];

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <Heading as="h2" variant="display-strong-l" className={styles.title}>
            Technical Skills
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" className={styles.subtitle}>
            The stack I use to ship full-stack products: interfaces, APIs, data, and AI features.
          </Text>
        </div>

        <div className={styles.skillsGrid}>
          {skillGroups.map((group, index) => (
            <SkillBox
              key={group.title}
              title={group.title}
              tags={group.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


