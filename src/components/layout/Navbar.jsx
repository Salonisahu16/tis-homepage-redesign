import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      {/* Desktop / Main Navbar */}
      <nav className="w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl">

        <div className="mx-auto flex h-[82px] w-[92%] max-w-[1180px] items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
              T
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Tulas
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                International School
              </p>
            </div>
          </a>


          {/* Desktop Links */}
          <div className="hidden items-center gap-10 md:flex">

            <a
              href="#about"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              About
            </a>

            <a
              href="#academics"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Academics
            </a>

            <a
              href="#campus"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Campus
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Admissions
            </a>

          </div>


          {/* Desktop Apply Button */}
          <a
            href="#contact"
            className="hidden min-w-[125px] items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-700 md:flex"
          >
            Apply Now
            <ArrowUpRight size={16} />
          </a>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-100 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

        </div>
      </nav>


      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-b border-slate-200 bg-white transition-all duration-300 md:hidden ${isMenuOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 opacity-0"
          }`}
      >
        <div className="mx-auto flex w-[92%] max-w-[1180px] flex-col gap-2 py-5">

          <a
            href="#about"
            onClick={closeMenu}
            className="rounded-2xl px-5 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            About
          </a>

          <a
            href="#academics"
            onClick={closeMenu}
            className="rounded-2xl px-5 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Academics
          </a>

          <a
            href="#campus"
            onClick={closeMenu}
            className="rounded-2xl px-5 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Campus
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="rounded-2xl px-5 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Admissions
          </a>


          {/* Mobile Apply */}
            <a
            href="https://admission.tis.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-4 text-sm font-semibold text-white"
          >
            Apply Now
            <ArrowUpRight size={16} />
          </a>

        </div>
      </div>

    </header>
  );
}

export default Navbar;