"use client";

import { useEffect, useRef, useState } from "react";
import { Heading, Text, Column } from "@once-ui-system/core";
import { SkillBox } from "./SkillBox";
import styles from "./SkillsSection.module.scss";

const skillGroups = [
  {
    title: "Frontend Frameworks",
    skills: [
      { name: "Angular", icon: "angular" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    title: "Design & Styling",
    skills: [
      { name: "HTML/CSS", icon: "html" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "SCSS", icon: "css" },
      { name: "Photoshop", icon: "photoshop" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: "git" },
      { name: "API Integration", icon: "javascript" },
      { name: "Agile", icon: "javascript" },
      { name: "Debugging", icon: "javascript" },
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
          <Heading variant="display-strong-l" className={styles.title}>
            My Tech Stack
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" className={styles.subtitle}>
            Tools I use to build beautiful digital experiences.
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


