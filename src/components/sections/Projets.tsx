import { FaGithub } from "react-icons/fa";
import Tag from "../Tag";

const Projets = () => {
  const projets = [
    {
      title: "Summit Journey",
      description: (
        <>
          Summit Journey est mon premier projet, il utilise <Tag>React</Tag> et{" "}
          <Tag>Django</Tag> afin de créer un site qui se comporte comme votre
          journal de bord de grimpe. N'hésitez pas à créer un compte pour tester
          les fonctionnalités. C'est sans vérification, juste pour pouvoir lier
          les sorties à votre compte.
        </>
      ),
      image: "img/summit-journey.png",
      link: "https://summit-journey.emeric-riviere.com",
      github: null,
    },
    {
      title: "Maudit mot dit",
      description: (
        <>
          Il s'agit d'un projet personnel sur lequel je travaille actuellement.
          Il s'agit de l'adaptation d'un jeu de société en ligne, j'utilise pour
          ça ma stack principale : <Tag>React</Tag> et <Tag>Django</Tag>. Pour
          l'aspect jeu en live, j'utilise <Tag>WebSockets</Tag> avec{" "}
          <Tag>Redis</Tag>. Le principal du jeu est terminé, les repositories
          sont en accès public, vous pouvez suivre les instructions pour le
          dupliquer mais je devrais le mettre en ligne prochainement. Retrouvez
          le front end dans le lien, pour le backend, je vous invite à le
          trouver à ses côtés sur github.
        </>
      ),
      image: "img/maudit-mot-dit.png",
      link: null,
      github: "https://github.com/emericriv/maudit_mot_dit_frontend",
    },
    {
      title: "Mon Portfolio",
      description: (
        <>
          Ce Portfolio est mon deuxième projet, il utilise <Tag>React</Tag> et{" "}
          <Tag>TailwindCSS</Tag>.
        </>
      ),
      image: "img/portfolio.png",
      link: "#",
      github: "https://github.com/emericriv/portfolio",
    },
    {
      title: "Landing Page IA",
      description: (
        <>
          Ce projet met en scène une landing page (anglaise) très moderne pour
          un produit d'intelligence artificielle. Il s'agit d'un projet fictif,
          utilisant <Tag>React</Tag> et <Tag>TailwindCSS</Tag> et met en place
          la possibilité de choisir le thème de l'interface. Le déploiement est
          fait via <Tag>Vercel</Tag>.
        </>
      ),
      image: "img/landing.png",
      link: "https://react-landing-page-ai.vercel.app",
      github: "https://github.com/emericriv/react-landing-page-ai",
    },
    {
      title: "Slider Dragon Ball Z - One Piece",
      description: (
        <>
          Ce projet est un de mes premiers projets web, il utilise les
          technologies de base du web sans aucun framework (<Tag>HTML</Tag>,{" "}
          <Tag>CSS</Tag>, <Tag>JS</Tag>). Il s'agit d'un de mes tout premiers
          projets, sur lequel le responsive n'a pas été travaillé. Pour le
          moment, il ne rend bien que sur PC, son amélioration n'est pas prévue
          pour le moment.
        </>
      ),
      image: "img/slider.png",
      link: "https://dbz-op-slider.emeric-riviere.com",
      github: "https://github.com/emericriv/Maquette-DBZ-OP",
    },
  ];

  return (
    <section
      id="projets"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-28 mb-25 scroll-mt-24"
    >
      <h2 className="text-3xl text-center font-bold text-primary mb-8">
        Projets
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projets.map((projet, index) => (
          <div
            key={index}
            className={`relative bg-background-lighten border p-0.5 flex flex-col items-center justify-start rounded-md shadow-md h-full ${
              projet.title === "Slider Dragon Ball Z - One Piece"
                ? "hidden xl:flex"
                : ""
            }`}
          >
            <img
              src={projet.image}
              alt={projet.title}
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-secondary text-xl font-bold text-left">
                {projet.title}
              </h3>
              <p className="text-text-color text-justify mt-2 flex-grow mb-4 text-base">
                {projet.description}
              </p>
              <div className="mt-2 flex items-center justify-between w-full">
                {projet.link && (
                  <a
                    href={projet.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2 rounded-full border border-secondary text-secondary transition-all duration-300 hover:bg-secondary hover:text-text-color text-center "
                  >
                    Voir le projet
                  </a>
                )}
                {projet.github && (
                  <a
                    href={projet.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-white rounded-full bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-black ml-auto"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projets;
