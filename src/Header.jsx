import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fcf7f0] ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl sm:text-2xl font-extrabold tracking-tight select-none"
        >
          tapfor
          <span className="text-purple-500">Sinju</span>
          <span className="text-rose-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px] font-medium text-gray-900">
          {/* My Work */}
          <li>
            <Link
              to="/projects"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              My Work
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              to="/about"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              About Me
            </Link>
          </li>

          {/* Resume */}
          <li>
            <a
              href="https://drive.google.com/file/d/16OPaLngXiafR7VGNe1VmVUbh02ZgTo9l/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              Resume
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/berlin-sinju-godfree-95a6441b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 -mr-2 text-gray-900"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden px-6 pb-6 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-base font-medium text-gray-900 border-t border-gray-200 pt-4">
          {/* My Work */}
          <li>
            <Link
              to="/projects"
              onClick={closeMenu}
              className="block py-1 hover:text-purple-600 transition-colors"
            >
              My Work
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block py-1 hover:text-purple-600 transition-colors"
            >
              About Me
            </Link>
          </li>

          {/* Resume */}
          <li>
            <a
              href="https://drive.google.com/file/d/16OPaLngXiafR7VGNe1VmVUbh02ZgTo9l/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block py-1 hover:text-purple-600 transition-colors"
            >
              Resume
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/berlin-sinju-godfree-95a6441b7/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block py-1 hover:text-purple-600 transition-colors"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
