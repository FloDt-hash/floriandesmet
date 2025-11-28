import Image from "next/image";
import isometricSiteWeb from "../../public/images/isometric_style_cms.svg";

export default function Services() {
  return (
    <div className="services">
      <div className="title-frame">
        <h2>Services</h2>
        <div className="underline"></div>
      </div>
      <div className="services-cards-frame">
        <div className="service-card">
          <div className="service-card-title">
            <h3>Création de site web</h3>
            <span className="material-symbols-outlined">open_in_new</span>
          </div>
          <div className="service-card-content">
            <div className="image-wrapper">
              <Image
                src={isometricSiteWeb}
                alt="Illustration de la création d'un site web"
              />
            </div>
            <p>
              Créons votre site de A à Z avec un design personnalisé et une
              approche sur-mesure.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-title">
            <h3>Fonctionnalités adaptées à votre activité</h3>
            <span className="material-symbols-outlined">open_in_new</span>
          </div>
          <div className="service-card-content">
            <div className="image-wrapper">
              <Image
                src={isometricSiteWeb}
                alt="Illustration de la création d'un site web"
              />
            </div>
            <p>
              Créons les fonctionnalités spécifiques dont votre activité a
              vraiment besoin.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-title">
            <h3>Donnez une nouvelle vie à votre site</h3>
            <span className="material-symbols-outlined">open_in_new</span>
          </div>
          <div className="service-card-content">
            <div className="image-wrapper">
              <Image
                src={isometricSiteWeb}
                alt="Illustration de la création d'un site web"
              />
            </div>
            <p>
              Modernisons votre site de fond en comble tout en préservant votre
              contenu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
