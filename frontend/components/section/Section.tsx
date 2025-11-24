import React from "react";
import styles from "./section.module.css";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        <h2>{title}</h2>
        <div className={styles.hr}></div>
      </div>
      {children}
    </div>
  );
}
