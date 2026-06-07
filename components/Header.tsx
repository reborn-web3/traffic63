"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationLinks } from "@/lib/data";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = navigationLinks;

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      id="header"
      className={`header fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 border-b-2 border-line-blue bg-paper/85 backdrop-blur-lg ${isScrolled ? "scrolled shadow-lg translate-y-0" : ""
        }`}
    >
      <div className="container mx-auto px-5 md:px-10 flex items-center justify-between h-[72px]">
        <Link
          href="/"
          className="logo font-handwritten text-3xl font-bold text-ink-blue transition-transform hover:-rotate-2 hover:scale-105"
          onClick={handleLogoClick}
        >
          traffic<span className="text-coral">63</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative font-body text-sm font-semibold text-ink-dark px-4 py-2 rounded-lg transition-all hover:text-ink-blue hover:bg-line-blue/20 group"
            >
              {link.label}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-coral scale-x-0 transition-transform origin-right group-hover:scale-x-100 group-hover:origin-left" />
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-2 bg-coral text-white px-6 py-2.5 rounded-full font-bold shadow-md shadow-coral/30 transition-all hover:bg-coral-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-coral/40"
          >
            Обсудить проект
          </Link>
        </nav>

        {/* Mobile Burger */}
        <button
          className="flex md:hidden flex-col gap-1.25 p-2 z-[1001]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Открыть меню"
        >
          <span className={`w-7 h-0.75 bg-ink-dark rounded-full transition-all ${isMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`w-7 h-0.75 bg-ink-dark rounded-full transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-7 h-0.75 bg-ink-dark rounded-full transition-all ${isMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>

        {/* Mobile Nav */}
        <nav
          className={`fixed top-0 right-0 w-[280px] h-screen bg-paper flex flex-col justify-center gap-4 px-10 border-l-2 border-line-blue shadow-2xl transition-all duration-400 ease-in-out md:hidden ${isMenuOpen ? "right-0" : "-right-full"
            }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-lg font-semibold text-ink-dark py-3"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-4 bg-coral text-white px-6 py-3 rounded-full font-bold text-center"
            onClick={closeMenu}
          >
            Обсудить проект
          </Link>
        </nav>
      </div>
    </header>
  );
};
