import styles from "./services.module.css";
import Section from "../section/Section";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <Section title="Services">
      <div className={styles.servicesCardsGroup}>
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
    </Section>
  );
}
