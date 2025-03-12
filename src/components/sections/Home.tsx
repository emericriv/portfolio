const Home = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center px-4 lg:px-28 gap-6 mb-25 md:mb-10"
    >
      <div className="flex flex-col items-start justify-center text-left w-full md:max-w-3/5">
        <h1
          className="text-5xl text-left font-bold bg-clip-text 
          text-transparent bg-gradient-to-r from-sky-600 to-cyan-400 mb-8"
        >
          Bienvenue, je suis Emeric Rivière, développeur full stack
        </h1>
        <p className="text-lg text-sky-200 mb-6 max-w-lg mx-auto">
          Je suis un développeur full stack, passionné par la programmation et
          les nouvelles technologies. J'adore apprendre des nouvelles
          technologies et continuellement améliorer mes compétences.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-l-2xl bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 hover:scale-105 transition cursor-pointer flex items-center justify-center"
          >
            Me contacter
          </a>
          <a
            href="#parcours"
            className="px-6 py-3 rounded-e-2xl border border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-sky-600 hover:text-white hover:border-sky-600 font-semibold transition cursor-pointer flex items-center justify-center"
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
