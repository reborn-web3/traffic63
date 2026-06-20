"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/data";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (!localStorage.getItem("theme")) {
        const nextTheme = mediaQuery.matches ? "dark" : "light";
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        if (nextTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    let currentTheme = savedTheme;
    if (!currentTheme) {
      currentTheme = mediaQuery.matches ? "dark" : "light";
    }
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Set state asynchronously to avoid "setState in effect" warning/error
    setTimeout(() => {
      setTheme(currentTheme!);
      setMounted(true);
    }, 0);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", nextTheme);
  };

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
      className={`header fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 bg-paper/95 backdrop-blur-md ${
        isScrolled ? "border-b border-line-blue/50 shadow-sm" : "border-none"
      }`}
    >
      <div className="container mx-auto px-5 md:px-10 flex items-center justify-between h-[80px] relative">
        {/* Left Column: Navigation Links */}
        <div className="hidden md:flex md:w-1/3 justify-start items-center">
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
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0 md:w-1/3 flex justify-center z-10">
          <Link
            href="/"
            className="font-serif italic text-2xl md:text-3xl font-black text-ink-dark tracking-tight transition-opacity hover:opacity-85"
            onClick={handleLogoClick}
          >
            traffic<span className="text-coral">6<span className="relative" style={{ top: '-0.16em' }}>3</span></span>
          </Link>
        </div>

        {/* Right Column: Secondary Links & Burger */}
        <div className="w-full md:w-1/3 flex justify-end items-center gap-4 md:gap-6 ml-auto z-10">
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

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border border-line-blue hover:border-coral flex items-center justify-center text-ink-dark hover:text-coral transition-colors cursor-pointer select-none"
            aria-label="Переключить тему"
          >
            {!mounted ? (
              <div className="w-4 h-4" />
            ) : theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

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
        className={`fixed top-0 right-0 w-[280px] h-screen bg-paper flex flex-col justify-center gap-6 px-10 border-l border-line-blue shadow-2xl transition-transform duration-400 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0 visible" : "translate-x-full invisible"
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
