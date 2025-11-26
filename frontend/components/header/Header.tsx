"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";
import ButtonBurger from "../button/ButtonBurger";

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.topNav}>
        <p className={styles.logoName}>Florian Desmet</p>
        <div
          className={`${styles.topNavMenu} ${
            isHidden ? styles.topNavMenuHidden : ""
          }`}
        >
          <Link href="./">Acceuil</Link>
          <Link href="./about/">A propos</Link>
        </div>
        <ButtonBurger onClick={handleClick} />
      </nav>
    </header>
  );
}
