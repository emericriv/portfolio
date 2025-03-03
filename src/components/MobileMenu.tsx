import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Navbar mobile */}
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#071923] to-[#031826] border-b border-cyan-500/30 shadow-md shadow-cyan-500/20">
        <a href="/" className="text-white font-semibold">
          Emeric<span className="text-cyan-400">.riv</span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-black/40 border border-cyan-500/30 text-white"
        >
          {isOpen ? "❌" : "☰"}
        </button>
      </div>

      {/* Menu déroulant */}
      <div
        className={`overflow-hidden bg-black/90 backdrop-blur-md text-white text-2xl flex flex-col items-center gap-10 transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 py-10" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <a href="#home" onClick={() => setIsOpen(false)}>
          Accueil
        </a>
        <a href="#experience" onClick={() => setIsOpen(false)}>
          Expérience
        </a>
        <a href="#projects" onClick={() => setIsOpen(false)}>
          Projets
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default MobileMenu;
