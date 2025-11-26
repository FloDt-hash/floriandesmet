import styles from "./services.module.css";
import ButtonPrimary from "../button/ButtonPrimary";

export default function ServiceCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className={styles.serviceCard}>
      <h3>{title}</h3>
      <p>{text}</p>
      <ButtonPrimary>En savoir plus</ButtonPrimary>
    </div>
  );
}
