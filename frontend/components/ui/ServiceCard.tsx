import styles from "../../app/styles/page.module.css";
import PrimaryButton from "./PrimaryButton";

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
      <PrimaryButton>En savoir plus</PrimaryButton>
    </div>
  );
}
