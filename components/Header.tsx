"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/data";

const dropdownServices = [
  { label: "РАЗРАБОТКА САЙТОВ", href: "/services/web-development" },
  { label: "НАСТРОЙКА РЕКЛАМЫ", href: "/services/advertising" },
  { label: "УМНЫЕ ЧАТ-БОТЫ", href: "/services/chatbots" },
  { label: "ВЕДЕНИЕ СОЦСЕТЕЙ", href: "/services/smm" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [lang, setLang] = useState<"ru" | "en">("ru");

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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      id="header"
      className={`header fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 bg-paper/95 backdrop-blur-md ${isScrolled ? "border-b border-line-blue/50 shadow-sm" : "border-none"
        }`}
    >
      <div className="container mx-auto px-5 md:px-10 flex items-center justify-between h-[80px] relative">
        {/* Left Column: Navigation Links */}
        <div className="hidden md:flex md:w-1/3 justify-end items-center pr-12 lg:pr-16">
          <nav className="hidden md:flex items-center gap-6">
            {/* Dropdown Container */}
            <div
              className="relative py-4"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 font-body text-[11px] font-bold uppercase tracking-widest text-pencil hover:text-ink-dark transition-colors cursor-pointer outline-none select-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span>Услуги</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-300 text-pencil/80 ${isDropdownOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-[90%] left-0 mt-1 w-[260px] bg-paper/95 dark:bg-paper-dark/95 backdrop-blur-md border border-line-blue/50 dark:border-white/5 rounded-2xl shadow-2xl p-3 flex flex-col gap-1 transition-all duration-300 z-50 ${isDropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
              >
                {dropdownServices.map((svc) => (
                  <Link
                    key={svc.label}
                    href={svc.href}
                    className="font-body text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-300 text-left text-pencil hover:text-ink-dark hover:bg-line-blue/30 dark:hover:bg-line-blue/20"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {svc.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/services"
              className="font-body text-[11px] font-bold uppercase tracking-widest text-pencil hover:text-ink-dark transition-colors"
            >
              Цены
            </Link>
          </nav>
        </div>

        {/* Center Column: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0 md:w-1/3 flex justify-center z-10">
          <Link
            href="/"
            className="flex items-center text-2xl md:text-3xl font-black text-ink-dark transition-opacity hover:opacity-85"
            onClick={handleLogoClick}
          >
            <svg className="inline-block h-[1.15em] w-auto align-middle select-none" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="24" fontFamily="Georgia, ui-serif, serif" fontWeight="900" fontStyle="italic" fontSize="28px" fill="currentColor">
                traffic
              </text>
              <text x="92" y="24" fontFamily="Georgia, ui-serif, serif" fontWeight="900" fontStyle="italic" fontSize="28px" fill="var(--coral)">
                6
              </text>
              <text x="110" y="19.5" fontFamily="Georgia, ui-serif, serif" fontWeight="900" fontStyle="italic" fontSize="28px" fill="var(--coral)">
                3
              </text>
            </svg>
          </Link>
        </div>

        {/* Right Column: Secondary Links & Burger */}
        <div className="w-full md:w-1/3 flex justify-end md:justify-between items-center gap-4 md:gap-0 pl-12 lg:pl-16 ml-auto z-10">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/blog"
              className="font-body text-[11px] font-bold uppercase tracking-widest text-pencil hover:text-ink-dark transition-colors"
            >
              Блог
            </Link>
            <Link
              href="/contacts"
              className="font-body text-[11px] font-bold uppercase tracking-widest text-pencil hover:text-ink-dark transition-colors"
            >
              Контакты
            </Link>
          </nav>

          <div className="flex items-center gap-3">
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

            {/* Language Switcher */}
            <div className="relative flex items-center bg-line-blue-light dark:bg-white/5 rounded-full p-0.5 border border-line-blue dark:border-white/5 h-8 w-20 select-none">
              {/* Sliding backdrop */}
              <div
                className="absolute top-0.5 bottom-0.5 left-0.5 bg-paper dark:bg-paper-dark shadow-[0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.4)] border border-line-blue/20 dark:border-white/10 rounded-full transition-all duration-300 ease-out"
                style={{
                  width: "calc(50% - 1px)",
                  transform: lang === "ru" ? "translateX(0)" : "translateX(100%)",
                }}
              />
              
              <button
                onClick={() => setLang("ru")}
                className={`relative z-10 w-1/2 h-full flex items-center justify-center text-[9px] font-extrabold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                  lang === "ru" ? "text-ink-dark" : "text-pencil/40 hover:text-pencil"
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLang("en")}
                className={`relative z-10 w-1/2 h-full flex items-center justify-center text-[9px] font-extrabold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                  lang === "en" ? "text-ink-dark" : "text-pencil/40 hover:text-pencil"
                }`}
              >
                EN
              </button>
            </div>
          </div>

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
        className={`fixed top-0 right-0 w-[280px] h-screen bg-paper flex flex-col justify-center gap-6 px-10 border-l border-line-blue shadow-2xl transition-transform duration-400 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0 visible" : "translate-x-full invisible"
          }`}
      >
        <div className="flex flex-col">
          <button
            className="flex items-center justify-between w-full font-body text-xs font-bold uppercase tracking-widest text-ink-dark py-2 outline-none cursor-pointer select-none"
            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
          >
            <span>Услуги</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div
            className={`flex flex-col gap-3 pl-4 border-l border-line-blue/60 ml-2 transition-all duration-300 overflow-hidden ${isMobileServicesOpen ? "max-h-[300px] mt-2 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
              }`}
          >
            {dropdownServices.map((svc) => (
              <Link
                key={svc.label}
                href={svc.href}
                className="font-body text-[11px] font-bold uppercase tracking-wider py-1 text-pencil hover:text-ink-dark"
                onClick={closeMenu}
              >
                {svc.label}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/services"
          className="font-body text-xs font-bold uppercase tracking-widest text-ink-dark py-2"
          onClick={closeMenu}
        >
          Цены
        </Link>


        <Link
          href="/blog"
          className="font-body text-xs font-bold uppercase tracking-widest text-ink-dark py-2"
          onClick={closeMenu}
        >
          Блог
        </Link>
        <Link
          href="/contacts"
          className="font-body text-xs font-bold uppercase tracking-widest text-ink-dark py-2"
          onClick={closeMenu}
        >
          Контакты
        </Link>
      </nav>
    </header>
  );
};
