import styles from "./services.module.css";
import Button from "../button/Button";

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
      <Button>En savoir plus</Button>
    </div>
  );
}
