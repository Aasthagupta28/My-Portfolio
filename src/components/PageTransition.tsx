"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./PageTransition.module.scss";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    // Only trigger transition if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        prevPathnameRef.current = pathname;
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <div className={`${styles.pageTransition} ${isTransitioning ? styles.transitioning : ""}`}>
      {children}
    </div>
  );
};


