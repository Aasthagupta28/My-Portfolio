"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./PageTransition.module.scss";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`${styles.pageTransition} ${isTransitioning ? styles.transitioning : ""}`}>
      {children}
    </div>
  );
};


