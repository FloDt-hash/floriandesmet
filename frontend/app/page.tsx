import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <h1>{"< Florian Desmet />"}</h1>
        <p>
          Développeur web freelance. J&apos;accompagne vos projets web de A à Z
        </p>
        <div className="button-border-wrap">
          <button className="call-to-action">Parlons-en ↗</button>
        </div>
      </div>
    </main>
  );
}
