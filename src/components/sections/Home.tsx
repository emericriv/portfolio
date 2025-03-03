const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1
        className="text-5xl md:text-7xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-cyan-400 mb-8
"
      >
        Bienvenue, je suis Emeric Rivière, développeur full stack
      </h1>
      <p className="text-lg text-sky-200 mb-8 max-w-lg mx-auto">
        Je suis un développeur full stack, passionné par la programmation et les
        nouvelles technologies. J'adore apprendre des nouvelles technologies et
        continuellement améliorer mes compétences.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-l-2xl bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 hover:scale-105 transition">
          Me contacter
        </button>
        <button className="px-6 py-3 rounded-e-2xl border border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-sky-600 hover:text-white hover:border-sky-600 font-semibold transition">
          En savoir plus
        </button>
      </div>
    </section>
  );
};

export default Home;
