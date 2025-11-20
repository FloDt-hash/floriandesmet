import styles from "./hero.module.css";
import Button from "../button/Button";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Florian <span className={styles.name}>Desmet</span>
      </h1>
      <p className={styles.catchphrase}>
        Développeur web freelance. Je vous accompagne dans vos projets web de A
        à Z.
      </p>
      <Button>Parlons-en</Button>
    </div>
  );
}
