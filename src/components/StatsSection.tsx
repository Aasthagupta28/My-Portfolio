"use client";

import { useEffect, useRef, useState } from "react";
import { Heading, Text, Column, Row } from "@once-ui-system/core";
import styles from "./StatsSection.module.scss";

const stats: Array<{
  value: number;
  suffix: string;
  label: string;
  icon: string;
  staticText?: string;
}> = [
  { value: 3, suffix: "+", label: "Years of experience", icon: "YRS" },
  { value: 9, suffix: "", label: "Products shipped", icon: "PRD" },
  { value: 2, suffix: "", label: "Product companies", icon: "COS" },
  { value: 0, suffix: "", label: "Open to roles & freelance", icon: "NOW", staticText: "Now" },
];

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedStats, setCountedStats] = useState(
    stats.map((stat) => stat.staticText || `0${stat.suffix}`),
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [isVisible]);

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      if (stat.staticText) {
        setCountedStats((prev) => {
          const next = [...prev];
          next[index] = stat.staticText ?? "Now";
          return next;
        });
        return;
      }

      const numericValue = stat.value;
      let current = 0;
      const increment = numericValue / 40;
      const stepTime = 2000 / 40;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(timer);
        }

        setCountedStats((prev) => {
          const next = [...prev];
          next[index] = `${Math.floor(current)}${stat.suffix}`;
          return next;
        });
      }, stepTime);
    });
  };

  return (
    <section ref={sectionRef} className={styles.statsSection}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <Heading as="h2" variant="heading-strong-xl" className={styles.title}>
            At a glance
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" className={styles.subtitle}>
            Full-stack product work across two companies, from enterprise UI to SaaS platforms.
          </Text>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${styles.statCard} ${isVisible ? styles.visible : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.icon}>{stat.icon}</div>
              <div className={styles.number}>{countedStats[index]}</div>
              <Text variant="body-default-m" onBackground="neutral-weak" className={styles.label}>
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

