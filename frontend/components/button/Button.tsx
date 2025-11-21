import React from "react";
import styles from "./button.module.css";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.buttonBorderWrap}>
      <button className={styles.button}>{children}</button>
    </div>
  );
}
