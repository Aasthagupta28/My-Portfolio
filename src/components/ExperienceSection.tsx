"use client";

import { useEffect, useRef, useState } from "react";
import { Heading, Text } from "@once-ui-system/core";
import { about } from "@/resources";
import styles from "./ExperienceSection.module.scss";

export const ExperienceSection = () => {
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
      { threshold: 0.15 },
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="experience">
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <Heading as="h2" variant="display-strong-l" className={styles.title}>
            Work Experience
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" className={styles.subtitle}>
            Product engineering across SaaS, HR, commerce, CMS, and enterprise communication.
          </Text>
        </div>

        <div className={styles.list}>
          {about.work.experiences.map((job, index) => (
            <article
              key={job.company}
              className={`${styles.card} ${isVisible ? styles.visible : ""}`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className={styles.meta}>
                <Text variant="label-strong-s" onBackground="brand-weak" className={styles.time}>
                  {job.timeframe}
                  {job.place ? ` · ${job.place}` : ""}
                </Text>
                <Heading as="h3" variant="heading-strong-l" className={styles.role}>
                  {job.role}
                </Heading>
                <Text variant="body-default-m" className={styles.company}>
                  {job.company}
                </Text>
              </div>
              <ul className={styles.points}>
                {job.achievements.map((point) => (
                  <li key={String(point)}>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {point}
                    </Text>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
