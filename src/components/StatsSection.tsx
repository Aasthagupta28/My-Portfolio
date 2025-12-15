"use client";

import { useEffect, useRef, useState } from "react";
import { Heading, Text, Column, Row } from "@once-ui-system/core";
import styles from "./StatsSection.module.scss";

const stats = [
  { number: "3+", label: "Years Experience", icon: "EXP" },
  { number: "7+", label: "Projects Completed", icon: "PRO" },
  { number: "5", label: "Client Websites", icon: "WEB" },
  { number: "100%", label: "Client Satisfaction", icon: "SAT" },
];

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedStats, setCountedStats] = useState(stats.map((stat) => ({ number: stat.number, label: stat.label })));
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
      const targetValue = stat.number;
      const isPercentage = targetValue.includes("%");
      const numericValue = parseInt(targetValue.replace(/\D/g, "")) || 0;
      
      let current = 0;
      const increment = numericValue / 50;
      const duration = 2000;
      const stepTime = duration / 50;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(timer);
        }
        
        setCountedStats((prev) => {
          const newStats = [...prev];
          newStats[index] = {
            number: isPercentage ? `${Math.floor(current)}%` : `${Math.floor(current)}+`,
            label: stat.label,
          };
          return newStats;
        });
      }, stepTime);
    });
  };

  return (
    <section ref={sectionRef} className={styles.statsSection}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <Heading variant="heading-strong-xl" className={styles.title}>
            By The Numbers
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" className={styles.subtitle}>
            A glimpse into my professional journey and achievements.
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
              <div className={styles.number}>{countedStats[index]?.number || stat.number}</div>
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

