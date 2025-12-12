"use client";

import { useEffect, useRef, useState } from "react";
import {
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import styles from "./AnimatedProjectCard.module.scss";

interface AnimatedProjectCardProps {
  href: string;
  title: string;
  description: string;
  content: string;
  index: number;
  link?: string;
}

export const AnimatedProjectCard: React.FC<AnimatedProjectCardProps> = ({
  href,
  title,
  description,
  content,
  index,
  link,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.projectCard} ${isVisible ? styles.visible : ""} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={styles.curtain}>
        <div className={styles.curtainLeft}></div>
        <div className={styles.curtainRight}></div>
      </div>
      <div className={styles.content}>
        <Column fillWidth gap="m" padding="l">
          {title && (
            <Flex flex={5}>
              <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                {title}
              </Heading>
            </Flex>
          )}
          {description?.trim() && (
            <Column flex={7} gap="16">
              <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">
                {description}
              </Text>
              <Flex gap="24" wrap>
                {content?.trim() && (
                  <SmartLink
                    suffixIcon="arrowRight"
                    style={{ margin: "0", width: "fit-content" }}
                    href={href}
                  >
                    <Text variant="body-default-s">Read case study</Text>
                  </SmartLink>
                )}
                {link && (
                  <SmartLink
                    suffixIcon="arrowUpRightFromSquare"
                    style={{ margin: "0", width: "fit-content" }}
                    href={link}
                  >
                    <Text variant="body-default-s">View project</Text>
                  </SmartLink>
                )}
              </Flex>
            </Column>
          )}
        </Column>
      </div>
      <div className={styles.glow}></div>
    </div>
  );
};


