"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./ScrollReveal.module.scss";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeoutId = setTimeout(() => {
              setIsVisible(true);
            }, delay);
            return () => clearTimeout(timeoutId);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${styles.scrollReveal} ${styles[direction]} ${isVisible ? styles.visible : ""} ${className}`}
    >
      {children}
    </div>
  );
};


