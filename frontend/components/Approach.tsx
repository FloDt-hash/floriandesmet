import styles from "../app/styles/page.module.css";
import PrimaryButton from "./ui/PrimaryButton";

export default function Approach() {
  return (
    <div className={styles.approach}>
      <div className={styles.titleGroup}>
        <h2>Mon approche</h2>
        <hr />
      </div>
      <p>
        Votre projet mérite qu&apos;on prenne le temps de le comprendre. Je
        m&apos;investis pleinement pour saisir ce qui vous anime, vos objectifs
        et vos contraintes. Petite association ou grande structure, chaque
        projet reçoit la même attention et le même respect.
      </p>
      <ul>
        <li>Écoute active : Votre projet commence par une vraie discussion.</li>
        <li>Engagement total : Je ne lâche rien en cours de route.</li>
        <li>
          Respect de tous les projets : Petite asso ou grande structure, même
          investissement.
        </li>
        <li>
          Spécialiste des projets à impact : Associations, églises, initiatives
          solidaires.
        </li>
      </ul>
      <PrimaryButton>En savoir plus</PrimaryButton>
    </div>
  );
}
