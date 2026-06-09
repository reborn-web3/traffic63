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
      className={`header fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled ? "border-b border-line-blue/50 shadow-sm" : "border-none"
      }`}
    >
      <div className="container mx-auto px-5 md:px-10 flex items-center justify-between h-[80px]">
        {/* Left Column: Navigation Links */}
        <div className="w-1/3 flex justify-start items-center">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[11px] font-bold uppercase tracking-widest text-pencil hover:text-ink-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center Column: Logo */}
        <div className="w-1/3 flex justify-center">
          <Link
            href="/"
            className="font-serif italic text-2xl md:text-3xl font-black text-ink-dark tracking-tight transition-opacity hover:opacity-85"
            onClick={handleLogoClick}
          >
            traffic<span className="text-coral">63</span>
          </Link>
        </div>

        {/* Right Column: Secondary Links & Burger */}
        <div className="w-1/3 flex justify-end items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[11px] font-bold uppercase tracking-widest text-pencil hover:text-ink-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="font-body text-[11px] font-black uppercase tracking-widest text-ink-blue hover:text-coral transition-colors"
            >
              Обсудить проект
            </Link>
          </nav>

          {/* Mobile Burger */}
          <button
            className="flex md:hidden flex-col gap-1.25 p-2 z-[1001] cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            <span className={`w-6 h-0.5 bg-ink-dark rounded transition-all ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-6 h-0.5 bg-ink-dark rounded transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-ink-dark rounded transition-all ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`fixed top-0 right-0 w-[280px] h-screen bg-white flex flex-col justify-center gap-6 px-10 border-l border-line-blue shadow-2xl transition-all duration-400 ease-in-out md:hidden ${
          isMenuOpen ? "right-0" : "-right-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-body text-xs font-bold uppercase tracking-widest text-ink-dark py-2"
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          className="mt-6 font-body text-xs font-black uppercase tracking-widest text-ink-blue py-2"
          onClick={closeMenu}
        >
          Обсудить проект
        </Link>
      </nav>
    </header>
  );
};
