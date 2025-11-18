import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <h1>
          Florian <span className={styles.name}>Desmet</span>
        </h1>
        <p className={styles.catchphrase}>
          Développeur web freelance. Je vous accompagne dans vos projets web de
          A à Z.
        </p>
        <div className="button-border-wrap">
          <button className="call-to-action">
            Parlons-en{" "}
            <span className="material-symbols-outlined">arrow_outward</span>
          </button>
        </div>
      </div>
    </main>
  );
}
