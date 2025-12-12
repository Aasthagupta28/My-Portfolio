"use client";

import { useEffect, useRef, useState } from "react";
import { Heading, Text, Column, Row, Button, IconButton } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
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

  const email = person.email;
  const phone = "8629072539";
  const location = "VPO Sajaopiplu Distt Mandi HP, India";

  return (
    <section ref={sectionRef} className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <Heading variant="display-strong-l" className={styles.title}>
            Let's Work Together
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" className={styles.subtitle}>
            I'm open for freelance, full-time, and project-based work.
          </Text>
        </div>

        <div className={styles.content}>
          <div className={styles.leftSide}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Text variant="body-default-s" onBackground="brand-weak" className={styles.label}>
                  Email
                </Text>
                <a href={`mailto:${email}`} className={styles.contactLink}>
                  {email}
                </a>
              </div>

              <div className={styles.contactItem}>
                <Text variant="body-default-s" onBackground="brand-weak" className={styles.label}>
                  Phone
                </Text>
                <a href={`tel:${phone}`} className={styles.contactLink}>
                  {phone}
                </a>
              </div>

              <div className={styles.contactItem}>
                <Text variant="body-default-s" onBackground="brand-weak" className={styles.label}>
                  Location
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak" className={styles.contactText}>
                  {location}
                </Text>
              </div>

              <div className={styles.socialLinks}>
                {social
                  .filter((item) => item.link && item.essential)
                  .map((item) => (
                    <IconButton
                      key={item.name}
                      href={item.link}
                      icon={item.icon}
                      tooltip={item.name}
                      size="l"
                      variant="secondary"
                      className={styles.socialButton}
                    />
                  ))}
              </div>
            </div>
          </div>

          <div className={styles.rightSide}>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="m"
                data-border="rounded"
                className={styles.submitButton}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

