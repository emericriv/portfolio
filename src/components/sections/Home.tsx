const Home = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center px-4 lg:px-28 gap-6 mb-25 md:mb-10"
    >
      <div className="flex flex-col items-start justify-center text-left w-full md:max-w-3/5">
        <h1 className="text-5xl text-left font-bold text-header mb-8 text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
          Bienvenue, je suis Emeric Rivière, développeur full stack
        </h1>
        <p className="text-lg text-text-color mb-6 max-w-lg mx-auto">
          Je suis un développeur full stack, passionné par la programmation et
          les nouvelles technologies. J'adore apprendre des nouvelles
          technologies et continuellement améliorer mes compétences.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-l-2xl bg-secondary text-text-color font-semibold shadow-md hover:shadow-lg hover:brightness-110 hover:scale-105 transition cursor-pointer flex items-center justify-center"
          >
            Me contacter
          </a>
          <a
            href="#parcours"
            className="px-6 py-3 rounded-e-2xl border border-secondary text-secondary hover:bg-secondary hover:text-text-color hover:border-secondary font-semibold transition cursor-pointer flex items-center justify-center"
          >
            En savoir plus
          </a>
        </div>
      </div>
      <div className="relative w-90 hidden lg:block">
        <img
          src="/img/moi.jpg"
          alt="Développeur"
          className="w-96 rounded-4xl object-cover filter brightness-95"
        />
      </div>
    </section>
  );
};

export default Home;
