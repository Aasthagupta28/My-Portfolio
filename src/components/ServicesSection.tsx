"use client";

import { useEffect, useRef, useState } from "react";
import { Heading, Text, Column, Row } from "@once-ui-system/core";
import styles from "./ServicesSection.module.scss";

const services = [
  {
    icon: "🎨",
    title: "UI/UX Development",
    description: "Creating intuitive and beautiful user interfaces with modern design principles and responsive layouts.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description: "Building fast, scalable applications with optimized code, lazy loading, and efficient rendering.",
  },
  {
    icon: "🔌",
    title: "API Integration",
    description: "Seamless integration with RESTful APIs, real-time data handling, and dynamic content management.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Mobile-first approach ensuring perfect user experience across all devices and screen sizes.",
  },
  {
    icon: "🛠️",
    title: "Code Quality",
    description: "Clean, maintainable code following best practices, TypeScript, and modern development standards.",
  },
  {
    icon: "🚀",
    title: "Project Delivery",
    description: "End-to-end project management from design to deployment with timely delivery and quality assurance.",
  },
];

export const ServicesSection = () => {
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
    <section ref={sectionRef} className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <Heading variant="display-strong-l" className={styles.title}>
            What I Offer
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" className={styles.subtitle}>
            Comprehensive frontend development services to bring your vision to life.
          </Text>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${styles.serviceCard} ${isVisible ? styles.visible : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <Heading variant="heading-strong-l" className={styles.serviceTitle}>
                {service.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak" className={styles.description}>
                {service.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

