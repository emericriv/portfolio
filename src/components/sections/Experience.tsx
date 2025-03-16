import Tag from "../Tag";

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
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-28 scroll-mt-16 sm:scroll-mt-6 lg:scroll-mt-0 mb-25 md:mb-10"
    >
      <h2 className="text-3xl text-center font-bold text-primary mb-8">
        Experience
      </h2>
      <div className="bg-background-lighten rounded-2xl py-6 px-6 sm:px-10 w-full md:max-w-4xl flex flex-col items-center justify-items-start">
        <p className="text-white mb-6 text-justify">
          J'ai découvert en 2022 une forte appétence pour la programmation, je
          me suis formé en ligne, notamment avec FUN MOOC, sur du{" "}
          <Tag>Python</Tag> pour des besoins de banc de tests pour l'alternance
          que j'ai réalisé pendant mon cursus ingénieur. Pendant ce même cursus,
          je me suis intéressé au développement web, j'ai d'abord commencé par
          du pur <Tag>HTLM/CSS/JS</Tag>, puis grâce à la formation de
          Jean-Baptiste Brasselet, j'ai découvert tout l'environnement web, j'ai
          pu réaliser des projets personnels avec <Tag>React</Tag>,{" "}
          <Tag>Django</Tag> et <Tag>AWS</Tag>. Je continue de me former dessus
          et à découvrir de nouvelles technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-3">
            <h3 className="text-secondary text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill, key) => (
                <Tag key={key}>{skill}</Tag>
              ))}
            </div>
          </div>
          <div className="p-3">
            <h3 className="text-secondary text-xl font-bold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill, key) => (
                <Tag key={key}>{skill}</Tag>
              ))}
            </div>
          </div>
          <div className="p-3">
            <h3 className="text-secondary text-xl font-bold mb-4">DevOps</h3>
            <div className="flex flex-wrap gap-2">
              <Tag>AWS</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
