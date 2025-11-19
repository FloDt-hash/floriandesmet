import styles from "../app/styles/page.module.css";
import PrimaryButton from "./ui/PrimaryButton";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1>
        Florian <span className={styles.name}>Desmet</span>
      </h1>
      <p className={styles.catchphrase}>
        Développeur web freelance. Je vous accompagne dans vos projets web de A
        à Z.
      </p>
      <PrimaryButton>Parlons-en</PrimaryButton>
    </div>
  );
}
