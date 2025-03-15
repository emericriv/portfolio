const Parcours = () => {
  return (
    <section
      id="parcours"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-28 scroll-mt-24 md:scroll-mt-20 xl:scroll-mt-6  mb-25"
    >
      <h2 className="text-3xl text-center font-bold text-primary mb-8">
        Parcours
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          id="ecoles"
          className="bg-background-lighten rounded-2xl py-6 px-6 sm:px-10 w-full md:max-w-4xl flex flex-col items-center justify-items-start text-justify"
        >
          <h3 className="text-xl text-center font-bold text-secondary mb-8">
            Formation Scolaire
          </h3>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>
              <strong>Ecole d'Ingénieur </strong> - ENSEEIHT Toulouse
              (2022-2025)
              <ul className="mt-1 list-disc list-inside pl-5 space-y-1 marker:text-secondary">
                <li>
                  Spécialité Electronique et systèmes communicants
                  (Radiofréquences)
                </li>
                <li>Chaque année validée au dessus de 16 de moyenne</li>
              </ul>
            </li>
            <li>
              <strong>DUT Mesures Physiques </strong> - Université de Limoges
              (2020-2022)
              <ul className="mt-1 list-disc list-inside pl-5 space-y-1 marker:text-secondary">
                <li>Majorant de promotion</li>
              </ul>
            </li>
            <li>
              <strong>Bac Scientifique </strong> - Lycée d'Arsonval (2017-2020)
              <ul className="mt-1 list-disc list-inside pl-5 space-y-1 marker:text-secondary">
                <li>Mention Très Bien</li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          id="xp-pro"
          className="bg-background-lighten rounded-2xl py-6 px-6 sm:px-10 w-full md:max-w-4xl flex flex-col items-center justify-items-start text-justify"
        >
          <h3 className="text-xl text-center font-bold text-secondary mb-8">
            Expériences Professionnelles
          </h3>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>
              <strong>Apprenti Ingénieur Radiofréquences</strong> - Continental
              Toulouse (2022-2025)
              <ul className="mt-1 list-disc list-inside pl-5 space-y-1 marker:text-secondary">
                <li>
                  Projet de fin d'études sur la mise en place d'un banc de test
                  permettant de caractériser l'étage UWB de produits de
                  localisation afin de caratériser leurs performances RF.
                </li>
                <li>
                  Programmation en Python dans le but d'optimiser des programmes
                  de bancs de tests déjà existants ou de les créer si besoin.
                </li>
              </ul>
            </li>
            <li>
              <strong>Apprenti Technicien d'Essais </strong> - Centre
              Scientifique et Technique du Bâtiment (CSTB) Nantes (2021-2022)
              <ul className="mt-1 list-disc list-inside pl-5 space-y-1 marker:text-secondary">
                <li>
                  Experience sur une chaîne de mesure complete / essai de
                  flexion 3 points selon la norme NF EN ISO 11296-4
                </li>
                <li>
                  Etude statistique basée sur les données de 2021 visant à
                  mettre en évidence (ou non) des critères responsables de
                  non-conformité
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Parcours;
