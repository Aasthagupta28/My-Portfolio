"use client";

import { useEffect, useRef, useState } from "react";
import { Heading, Text, Column, Row } from "@once-ui-system/core";
import styles from "./ProcessSection.module.scss";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "Understanding your requirements, goals, and target audience to create a strategic plan.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description: "Creating wireframes and prototypes to visualize the user experience before development.",
  },
  {
    number: "03",
    title: "Development",
    description: "Building responsive, performant applications using modern technologies and best practices.",
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description: "Rigorous testing across devices and browsers, followed by performance optimization.",
  },
  {
    number: "05",
    title: "Deployment & Support",
    description: "Smooth deployment and ongoing support to ensure your application runs flawlessly.",
  },
];

export const ProcessSection = () => {
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

  return (
    <section ref={sectionRef} className={styles.processSection}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <Heading variant="display-strong-l" className={styles.title}>
            How I Work
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" className={styles.subtitle}>
            A structured approach to delivering exceptional results.
          </Text>
        </div>

        <div className={styles.processSteps}>
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`${styles.stepCard} ${isVisible ? styles.visible : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <Heading variant="heading-strong-l" className={styles.stepTitle}>
                  {step.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak" className={styles.stepDescription}>
                  {step.description}
                </Text>
              </div>
              {index < processSteps.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.connectorLine}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

