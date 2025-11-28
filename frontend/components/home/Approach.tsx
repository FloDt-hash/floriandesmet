import Image from "next/image";
import isometricSiteWeb from "../../public/images/isometric_style_cms.svg";

export default function Approach() {
  return (
    <div className="approach">
      <div className="title-frame">
        <h2>Mon approche</h2>
        <div className="underline"></div>
      </div>
      <div className="approach-section">
        <div className="image-wrapper">
          <Image
            src={isometricSiteWeb}
            alt="Illustration de la création d'un site web"
          />
        </div>
        <div className="text-wrapper">
          <p>
            Votre projet mérite qu&apos;on prenne le temps de le comprendre. Je
            m&apos;investis pleinement pour saisir ce qui vous anime, vos
            objectifs et vos contraintes. Petite association ou grande
            structure, chaque projet reçoit la même attention et le même
            respect.
          </p>
          <ul>
            <li>
              Écoute active : Votre projet commence par une vraie discussion.
            </li>
            <li>Engagement total : Je ne lâche rien en cours de route.</li>
            <li>
              Respect de tous les projets : Petite asso ou grande structure,
              même investissement.
            </li>
            <li>
              Spécialiste des projets à impact : Associations, églises,
              initiatives solidaires.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
