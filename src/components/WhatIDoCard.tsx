"use client";

import { Text } from "@once-ui-system/core";
import { useState } from "react";
import styles from "./WhatIDoCard.module.scss";

interface WhatIDoCardProps {
  title: string;
  description: string;
  index: number;
}

export const WhatIDoCard: React.FC<WhatIDoCardProps> = ({ title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.glow}></div>
      <Text variant="heading-strong-m" className={styles.title}>
        {title}
      </Text>
      <Text variant="body-default-s" onBackground="neutral-weak" className={styles.description}>
        {description}
      </Text>
    </div>
  );
};

