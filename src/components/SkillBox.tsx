"use client";

import { useState, useRef, useEffect } from "react";
import { Tag } from "@once-ui-system/core";
import styles from "./SkillBox.module.scss";

interface SkillBoxProps {
  title: string;
  description?: React.ReactNode;
  tags: Array<{ name: string; icon?: string }>;
  index: number;
}

export const SkillBox: React.FC<SkillBoxProps> = ({
  title,
  description,
  tags,
  index,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

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

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={`${styles.skillBox} ${isVisible ? styles.visible : ""} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles.boxContent}>
        <h3 className={styles.title}>{title}</h3>
        {description && <div className={styles.description}>{description}</div>}
        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, tagIndex) => (
              <Tag
                key={`skill-tag-${title}-${tag.name}-${tagIndex}`}
                size="l"
                prefixIcon={tag.icon}
                className={styles.tag}
              >
                {tag.name}
              </Tag>
            ))}
          </div>
        )}
      </div>
      <div className={styles.glowEffect}></div>
      <div className={styles.borderAnimation}></div>
    </div>
  );
};

