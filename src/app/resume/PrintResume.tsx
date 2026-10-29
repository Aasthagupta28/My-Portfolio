"use client";

import styles from "./resume.module.css";

export const PrintResume = () => {
  return (
    <button type="button" className={styles.printButton} onClick={() => window.print()}>
      Save as PDF
    </button>
  );
};
