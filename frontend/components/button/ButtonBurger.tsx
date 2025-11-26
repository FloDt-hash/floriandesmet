import styles from "./button.module.css";

export default function ButtonBurger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles.buttonBurger}`}
    >
      <span className={`material-symbols-outlined ${styles.iconBurger}`}>
        menu
      </span>
    </button>
  );
}
