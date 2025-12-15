"use client";

import { useEffect, useState } from "react";
import {
  Heading,
  Text,
  Button,
  Row,
  Column,
} from "@once-ui-system/core";
import { about, person } from "@/resources";
import styles from "./HeroSection.module.scss";

const typingTexts = [
  "Angular Developer",
  "React & Next.js Developer",
  "UI/UX Focused Developer",
  "Creative Frontend Engineer",
];

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, typingSpeed / 2);
    } else if (!isDeleting && displayText.length === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
      setTypingSpeed(100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, typingSpeed]);

  const handleResumeDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/resume.pdf');
      if (!response.ok) {
        throw new Error('Resume file not found');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Aastha_Gupta_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Resume file not found. Please ensure resume.pdf exists in the public folder.');
    }
  };

  return (
    <div className={styles.heroSection}>
      <div
        className={styles.gradientBg}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(99, 102, 241, 0.3) 0%, 
            rgba(20, 184, 166, 0.2) 50%,
            transparent 70%)`,
        }}
      />
      <div className={styles.particles}>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className={styles.heroContent}>
        <div className={styles.leftSide}>
          <div className={styles.greeting}>
            <Text variant="heading-strong-xl" className={styles.greetingText}>
              Hi, I'm <span className={styles.nameHighlight}>Aastha</span>
            </Text>
          </div>

          <Heading variant="display-strong-l" className={styles.title}>
            Frontend Developer &<br />
            Software Engineer
          </Heading>

          <Text variant="heading-default-xl" onBackground="neutral-weak" className={styles.subtitle}>
            I build fast, modern, and pixel-perfect web experiences.
          </Text>

          <div className={styles.typingContainer}>
            <Text variant="body-default-l" onBackground="brand-weak" className={styles.typingText}>
              {displayText}
              <span className={styles.cursor}>|</span>
            </Text>
          </div>

          <Text variant="body-default-m" onBackground="neutral-weak" className={styles.description}>
            I specialize in building scalable UI systems, real-time applications, and high-performance 
            dashboards with clean architecture and beautiful design.
          </Text>

          <Row gap="m" wrap className={styles.ctaButtons}>
            <Button
              href="/work"
              variant="primary"
              size="m"
              data-border="rounded"
              className={styles.ctaButton}
            >
              View Projects
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="m"
              data-border="rounded"
              className={styles.ctaButton}
            >
              Hire Me
            </Button>
            <Button
              href="/resume.pdf"
              variant="tertiary"
              size="m"
              data-border="rounded"
              className={styles.ctaButton}
              onClick={handleResumeDownload}
            >
              Download Resume
            </Button>
          </Row>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.codeWindow}>
            <div className={styles.codeHeader}>
              <div className={styles.codeDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.codeTitle}>developer.js</div>
            </div>
            <div className={styles.codeContent}>
              <div className={styles.codeLine}>
                <span className={styles.keyword}>const</span>{" "}
                <span className={styles.variable}>developer</span> = {"{"}
              </div>
              <div className={styles.codeLine}>
                <span className={styles.property}>  name</span>:{" "}
                <span className={styles.string}>"Aastha Gupta"</span>,
              </div>
              <div className={styles.codeLine}>
                <span className={styles.property}>  role</span>:{" "}
                <span className={styles.string}>"Frontend Developer"</span>,
              </div>
              <div className={styles.codeLine}>
                <span className={styles.property}>  skills</span>: [
              </div>
              <div className={styles.codeLine}>
                <span className={styles.string}>    "Angular"</span>,
                <span className={styles.string}> "React"</span>,
              </div>
              <div className={styles.codeLine}>
                <span className={styles.string}>    "Next.js"</span>,
                <span className={styles.string}> "TypeScript"</span>
              </div>
              <div className={styles.codeLine}>  ]</div>
              <div className={styles.codeLine}>{"}"}</div>
            </div>
          </div>

          <div className={styles.floatingLogos}>
            {["Angular", "React", "Next.js", "TS", "JS"].map((logo, i) => (
              <div
                key={logo}
                className={styles.logo}
                style={{
                  animationDelay: `${i * 0.5}s`,
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </div>
  );
};
