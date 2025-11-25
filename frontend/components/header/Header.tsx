import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <p className={styles.logoName}>Florian Desmet</p>
        <div className={`${styles.navBarMenu} ${styles.hidden}`}>
          <button className={styles.btnClosed}>X</button>
          <Link href="./">Acceuil</Link>
          <Link href="./about/">A propos</Link>
        </div>
        <button className={styles.btnBurger}>◣ Menu</button>
      </nav>
    </header>
  );
}
