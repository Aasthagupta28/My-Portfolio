"use client";

import { useEffect, useRef, useState } from "react";
import { Heading, Text, IconButton } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "opened">("idle");
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
  const phone = person.phone || "";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const from = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const url =
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      encodeURIComponent(email) +
      "&su=" +
      encodeURIComponent(`Portfolio inquiry from ${name}`) +
      "&body=" +
      encodeURIComponent(`Name: ${name}\nEmail: ${from}\n\n${message}`);

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setStatus("opened");
  };

  return (
    <section ref={sectionRef} className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <Heading as="h2" variant="display-strong-l" className={styles.title}>
            Let's work together
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" className={styles.subtitle}>
            I am open to full-time roles, freelance projects, and client proposals. Tell me what you need built.
          </Text>
        </div>

        <div className={styles.content}>
          <div className={styles.leftSide}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Text variant="body-default-s" onBackground="brand-weak" className={styles.label}>
                  Email
                </Text>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
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
            <form className={styles.contactForm} onSubmit={handleSubmit}>
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
                  placeholder="What should we build?"
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send inquiry
              </button>
              <p className={styles.formNote} role="status">
                {status === "opened"
                  ? `Gmail opened with this message to ${email}. Press Send there.`
                  : `Opens Gmail with your message, ready to send to ${email}.`}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

