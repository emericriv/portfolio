const Navbar = () => {
  return (
    <nav className="fixed top-6 w-full flex items-center">
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex justify-between items-center py-3 px-6 rounded-2xl backdrop-blur-md border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
          <a href="/" className="text-white font-semibold">
            Emeric<span className="text-cyan-400">.riv</span>
          </a>

          <div className="flex gap-6 items-center">
            {["Accueil", "Experience", "Projets", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-200 uppercase hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
