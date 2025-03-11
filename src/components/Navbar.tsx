import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = ["Accueil", "Experience", "Parcours", "Projets", "Contact"];

  return (
    <>
      {/* Overlay div that darken the background when the menu is open */}
      <div
        className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex 
          flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${
        isOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
      ></div>

      {/* Navbar  */}
      <nav
        ref={navRef}
        className={`fixed w-full flex items-center z-50 transition-all duration-500 ${
          isOpen ? "top-1/2 -translate-y-1/2" : "top-3 md:top-6 translate-y-0"
        }`}
      >
        <div
          className={`md:max-w-3xl sm:max-w-md max-w-xs w-full mx-auto flex md:block items-center 
            flex-col rounded-2xl backdrop-blur-md border border-cyan-500/30 bg-black/50 
            transition-all duration-500 ${
              isOpen
                ? "shadow-2xl shadow-cyan-400/30"
                : "shadow-lg shadow-cyan-500/10"
            }`}
        >
          <div className="flex justify-between items-center w-full md:gap-0 py-3 px-6">
            <a href="#" className="text-white font-semibold">
              Emeric<span className="text-cyan-400">.riv</span>
            </a>

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-6 items-center">
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

            {/* Affichage des réseaux sur le manu mobile */}
            <div className="md:hidden flex gap-3 items-center">
              <a
                href="https://github.com/emericriv"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white rounded-full bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-black ml-auto"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/riviere-emeric/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white rounded-full bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-black ml-auto"
              >
                <FaLinkedin size={16} />
              </a>

              {/* Bouton Mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-8 h-8 flex items-center justify-center border border-white rounded-full bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-black ml-auto cursor-pointer"
              >
                {isOpen ? "⨉" : "☰"}
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          <div
            className={`w-full overflow-hidden transition-all duration-500 ${
              isOpen ? "max-h-75 py-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-8 uppercase">
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
