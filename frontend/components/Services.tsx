import styles from "../app/styles/page.module.css";
import ServiceCard from "./ui/ServiceCard";

export default function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.titleGroup}>
        <h2>Services</h2>
        <hr />
      </div>
      <div className={styles.cardsGroup}>
        <ServiceCard
          title="Création de site web"
          text="Vous n’avez pas encore de site ? Je crée votre site de A à Z, avec un design personnalisé et une approche sur-mesure."
        />
        <ServiceCard
          title="Site web +"
          text="Votre projet nécessite des fonctionnalités spécifiques ? Espace membres, réservations, paiements : je crée ce dont vous avez besoin."
        />
        <ServiceCard
          title="Refonte de site web"
          text="Votre site date de plusieurs années ? Je lui donne une seconde vie avec un design moderne, de meilleures performances et un référencement optimisé."
        />
      </div>
    </div>
  );
}
