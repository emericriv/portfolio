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
      title: "Réseau Social",
      description: (
        <>
          Ce projet est issu d'une formation qui m'a permis de découvrir et
          d'utiliser des technolgoies innovantes. Elle utilise <Tag>React</Tag>{" "}
          côté frontend et <Tag>Supabase</Tag> côté backend, qui gère
          l'authentification, paramétrée uniquement avec <Tag>GitHub</Tag>. Le
          déploiement est fait via <Tag>Vercel</Tag>.
        </>
      ),
      image: "img/social-media.png",
      link: "https://social-media-website-ten-rouge.vercel.app",
      github: "https://github.com/emericriv/social-media",
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
                <a
                  href={projet.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 rounded-full border border-secondary text-secondary transition-all duration-300 hover:bg-secondary hover:text-text-color text-center "
                >
                  Voir le projet
                </a>
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
