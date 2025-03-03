import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Accueil", "Experience", "Projets", "Contact"];

  return (
    <>
      <nav className="fixed top-6 w-full flex items-center z-50">
        <div className="md:max-w-3xl max-w-md w-full mx-auto">
          <div className="flex justify-between items-center py-3 px-6 rounded-2xl backdrop-blur-md border border-cyan-500/30 shadow-lg shadow-cyan-500/10 bg-black/50">
            <a href="/" className="text-white font-semibold">
              Emeric<span className="text-cyan-400">.riv</span>
            </a>

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-6 items-center">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-200 uppercase hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-all"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Bouton Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? "❌" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-2xl text-slate-200 uppercase z-40">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 hover:scale-110 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
