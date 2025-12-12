"use client";

import { Heading, Text, Row, IconButton } from "@once-ui-system/core";
import { useState, useEffect } from "react";
import styles from "./IntroSection.module.scss";

interface IntroSectionProps {
  name: string;
  role: string;
  social: Array<{
    name: string;
    icon: string;
    link: string;
    essential?: boolean;
  }>;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ name, role, social }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredSocial = social?.filter((item) => item?.essential && item?.link) || [];

  return (
    <div className={`${styles.introSection} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.backgroundGradient}></div>
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={`particle-${i}`} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}></div>
        ))}
      </div>
      
      <div className={styles.content}>
        <div className={styles.greeting}>
          <Text variant="body-default-l" className={styles.greetingText}>
            Hi, I'm <span className={styles.nameHighlight}>{name}</span>
          </Text>
        </div>
        
        <Heading variant="display-strong-xl" className={styles.name}>
          {name}
        </Heading>
        
        <Text
          variant="display-default-xs"
          onBackground="neutral-weak"
          className={styles.role}
        >
          {role}
        </Text>

        <div className={styles.divider}></div>

        {filteredSocial.length > 0 && (
          <Row
            className={styles.socialRow}
            paddingTop="20"
            paddingBottom="8"
            gap="8"
            wrap
            horizontal="center"
            fitWidth
          >
            {filteredSocial.map((item, index) => (
              <IconButton
                key={`social-${item.name}-${index}`}
                href={item.link}
                icon={item.icon}
                size="l"
                variant="secondary"
                className={styles.socialButton}
              />
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

