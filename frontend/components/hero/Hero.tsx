import styles from "./hero.module.css";
import Button from "../button/Button";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>Développeur web freelance</h1>
      <p className={styles.catchphrase}>
        Je vous accompagne dans vos projets web de A à Z.
      </p>
      <Button>Parlons-en</Button>
    </div>
  );
}
