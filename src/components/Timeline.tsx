"use client";

import { useEffect, useRef, useState } from "react";
import { Text, Column } from "@once-ui-system/core";
import styles from "./Timeline.module.scss";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll("[data-index]");
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll("[data-index]");
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <div ref={timelineRef} className={styles.timeline}>
      {items.map((item, index) => (
        <div
          key={`timeline-${item.year}-${item.title}-${index}`}
          data-index={index}
          className={`${styles.timelineItem} ${visibleItems.includes(index) ? styles.visible : ""}`}
        >
          <div className={styles.timelineMarker}>
            <div className={styles.markerDot}></div>
            {index < items.length - 1 && <div className={styles.timelineLine}></div>}
          </div>
          <div className={styles.timelineContent}>
            <Text variant="body-default-s" onBackground="brand-weak" className={styles.year}>
              {item.year}
            </Text>
            <Text variant="heading-strong-l" className={styles.title}>
              {item.title}
            </Text>
            <Text variant="body-default-m" onBackground="brand-medium" className={styles.company}>
              {item.company}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak" className={styles.description}>
              {item.description}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

