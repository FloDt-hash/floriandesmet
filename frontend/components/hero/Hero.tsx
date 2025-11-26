import styles from "./hero.module.css";
import ButtonPrimary from "../button/ButtonPrimary";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>Développeur web freelance</h1>
      <p className={styles.catchphrase}>
        Je vous accompagne dans vos projets web de A à Z.
      </p>
      <ButtonPrimary>Parlons-en</ButtonPrimary>
    </div>
  );
}
