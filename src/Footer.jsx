import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/berlinsinju"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/berlin-sinju-godfree-95a6441b7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedinIn className="text-lg" />
            </a>

            <a
              href="mailto:sinjugodwin@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Berlin Sinju Godfree. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
