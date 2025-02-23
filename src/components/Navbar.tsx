import { useEffect } from "react";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-blod text-white">
            Emeric<span className="text-blue-500">.Rivière</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Accueil
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              A Propos
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
