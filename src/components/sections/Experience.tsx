const Experience = () => {
  const frontendSkills: string[] = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwindcss",
    "Bootstrap",
  ];

  const backendSkills: string[] = ["Django (Python)", "Node.js", "PostgreSQL"];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-28 scroll-mt-16 sm:scroll-mt-0 mb-25 md:mb-10"
    >
      <h2 className="text-3xl text-center font-bold text-primary mb-8">
        Experience
      </h2>
      <div className="bg-background-lighten rounded-2xl py-6 px-6 sm:px-10 w-full md:max-w-4xl flex flex-col items-center justify-items-start">
        <p className="text-white mb-6 text-justify">
          J'ai découvert en 2022 une forte appétence pour la programmation, je
          me suis formé en ligne, notamment avec FUN MOOC, sur du{" "}
          <span className="bg-secondary/30 text-custom-green py-1 px-3 rounded-full text-sm">
            Python
          </span>{" "}
          pour des besoins de banc de tests pour l'alternance que j'ai réalisé
          pendant mon cursus ingénieur. Pendant ce même cursus, je me suis
          intéressé au développement web, j'ai d'abord commencé par du pur{" "}
          <span className="bg-secondary/30 text-custom-green py-1 px-3 rounded-full text-sm">
            HTLM/CSS/JS
          </span>
          , puis grâce à la formation de Jean-Baptiste Brasselet, j'ai découvert
          tout l'environnement web, j'ai pu réaliser des projets personnels avec{" "}
          <span className="bg-secondary/30 text-custom-green py-1 px-3 rounded-full text-sm">
            React
          </span>
          ,{" "}
          <span className="bg-secondary/30 text-custom-green py-1 px-3 rounded-full text-sm">
            Django
          </span>{" "}
          et{" "}
          <span className="bg-secondary/30 text-custom-green py-1 px-3 rounded-full text-sm">
            AWS
          </span>
          . Je continue de me former dessus et à découvrir de nouvelles
          technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-3">
            <h3 className="text-secondary text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill, key) => (
                <span
                  key={key}
                  className="bg-secondary/30 text-custom-green py-1 px-3 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="p-3">
            <h3 className="text-secondary text-xl font-bold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill, key) => (
                <span
                  key={key}
                  className="bg-secondary/30 text-custom-green py-1 px-3 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="p-3">
            <h3 className="text-secondary text-xl font-bold mb-4">DevOps</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-secondary/30 text-custom-green py-1 px-3 rounded-full text-sm">
                AWS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
