import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";

const StyledText = ({ children }: { children: ReactNode }) => (
  <span className="bg-sky-700/30 text-cyan-600 py-1 px-3 rounded-full text-sm">
    {children}
  </span>
);

const Projets = () => {
  const projets = [
    {
      title: "Summit Journey",
      description: (
        <>
          Summit Journey est mon premier projet, il utilise{" "}
          <StyledText>React</StyledText> et <StyledText>Django</StyledText> afin
          de créer un site qui se comporte comme votre journal de bord de
          grimpe. N'hésitez pas à créer un compte pour tester les
          fonctionnalités. C'est sans vérification, juste pour pouvoir lier les
          sorties à votre compte.
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
          Ce Portfolio est mon deuxième projet, il utilise{" "}
          <StyledText>React</StyledText> et <StyledText>TailwindCSS</StyledText>
          .
        </>
      ),
      image: "img/portfolio.png",
      link: "#",
      github: "https://github.com/emericriv/portfolio",
    },
    {
      title: "Slider Dragon Ball Z - One Piece",
      description: (
        <>
          Ce projet est un de mes premiers projets web, il utilise les
          technologies de base du web sans aucun framework (
          <StyledText>HTML</StyledText>, <StyledText>CSS</StyledText>,{" "}
          <StyledText>JS</StyledText>). Il s'agit d'un de mes tout premiers
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
      className="min-h-screen flex flex-col items-center justify-center px-4 mb-25 scroll-mt-5 sm:scroll-mt-24 lg:scroll-mt-8"
    >
      <h2
        className="text-3xl text-center font-bold bg-clip-text 
          text-transparent bg-gradient-to-r from-sky-600 to-cyan-400 mb-8"
      >
        Projets
      </h2>
      <div className="w-full max-w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projets.map((projet, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-start rounded-md shadow-md border border-sky-600/30 h-full ${
              projet.title === "Slider Dragon Ball Z - One Piece"
                ? "hidden xl:flex"
                : ""
            }`}
          >
            <img
              src={projet.image}
              alt={projet.title}
              className="w-full h-auto object-cover border-b border-b-slate-300 rounded-md"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-center">{projet.title}</h3>
              <p className="text-justify mt-2 flex-grow">
                {projet.description}
              </p>
              <div className="mt-2 flex items-center justify-between w-full">
                <a
                  href={projet.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 rounded-full border border-sky-600 text-sky-600 transition-all duration-300 hover:bg-sky-600 hover:text-white text-center "
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
