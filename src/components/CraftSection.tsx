"use client";

import { useEffect, useRef, useState } from "react";
import { Heading } from "@once-ui-system/core";
import styles from "./CraftSection.module.scss";

const colors = [
  { name: "Ink", hex: "#1A1612", tone: "ink" },
  { name: "Pine", hex: "#1F4D3A", tone: "pine" },
  { name: "Clay", hex: "#C4622D", tone: "clay" },
  { name: "Paper", hex: "#F6F1E8", tone: "paper" },
] as const;

const principles = [
  {
    index: "01",
    title: "Color with a job",
    text: "Pine is for action. Clay is for emphasis. Ink is for reading. Nothing is decoration without a role.",
  },
  {
    index: "02",
    title: "Type that scans",
    text: "One strong headline, a quiet supporting line, and body copy with room to breathe.",
  },
  {
    index: "03",
    title: "Spacing in rhythm",
    text: "Sections, cards, and type sit on a consistent scale so the page feels intentional, not crowded.",
  },
  {
    index: "04",
    title: "Motion with purpose",
    text: "Cards lift, numbers count, and content arrives on scroll. Movement points at the work.",
  },
  {
    index: "05",
    title: "SEO in the markup",
    text: "Real headings, readable text, and structured data. Search engines and recruiters both get the page.",
  },
  {
    index: "06",
    title: "Responsive by layout",
    text: "The same composition stacks on a phone. Spacing and type scale down instead of shrinking a desktop page.",
  },
];

export const CraftSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section} id="craft">
      <div className={styles.inner}>
        <div className={`${styles.intro} ${visible ? styles.visible : ""}`}>
          <p className={styles.kicker}>Design thinking</p>
          <Heading as="h2" variant="display-strong-l" className={styles.title}>
            The page is the proof
          </Heading>
          <p className={styles.lead}>
            Color, type, spacing, motion, and structure are chosen together. This portfolio is built the same way I build client products.
          </p>
        </div>

        <div className={styles.palette} aria-label="Color palette">
          {colors.map((color) => (
            <div key={color.name} className={`${styles.swatch} ${styles[color.tone]}`}>
              <span className={styles.swatchName}>{color.name}</span>
              <span className={styles.swatchHex}>{color.hex}</span>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {principles.map((item, index) => (
            <article
              key={item.index}
              className={`${styles.card} ${visible ? styles.visible : ""}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className={styles.index}>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
