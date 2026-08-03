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
  const [isAtBottom, setIsAtBottom] = useState(false);

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

  const setThemeMode = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    setThemeMode(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300;
      setIsAtBottom(scrolledToBottom);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

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
    <>
      <header
        id="header"
        className={`header fixed top-0 left-0 right-0 z-[1000] bg-paper/95 backdrop-blur-md ${
          isScrolled ? "border-b border-line-blue/50 shadow-sm" : "border-none"
        }`}
        style={{ 
          transform: isAtBottom ? 'translateY(-100%)' : 'translateY(0)',
          opacity: isAtBottom ? 0 : 1,
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.3s ease',
          pointerEvents: isAtBottom ? 'none' : 'auto'
        }}
      >
        <div className="container mx-auto px-5 md:px-10 flex items-center justify-between h-[80px] relative">
          {/* Left Column: Logo & Main Navigation */}
          <div className="flex items-center gap-8 lg:gap-12">
            <Link
              href="/"
              className="flex items-center text-2xl md:text-3xl font-black text-ink-dark transition-opacity hover:opacity-85 select-none"
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

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {/* Dropdown Container */}
              <div
                className="relative py-4"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1.5 font-body text-[12px] lg:text-[13px] font-bold uppercase tracking-wider text-pencil hover:text-ink-dark transition-colors cursor-pointer outline-none select-none"
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
                href="/prices"
                className="font-body text-[12px] lg:text-[13px] font-bold uppercase tracking-wider text-pencil hover:text-ink-dark transition-colors"
              >
                Цены
              </Link>
              <Link
                href="/#cases"
                className="font-body text-[12px] lg:text-[13px] font-bold uppercase tracking-wider text-pencil hover:text-ink-dark transition-colors"
              >
                Кейсы
              </Link>
              <Link
                href="/blog"
                className="font-body text-[12px] lg:text-[13px] font-bold uppercase tracking-wider text-pencil hover:text-ink-dark transition-colors"
              >
                Блог
              </Link>
              <Link
                href="/contacts"
                className="font-body text-[12px] lg:text-[13px] font-bold uppercase tracking-wider text-pencil hover:text-ink-dark transition-colors"
              >
                Контакты
              </Link>
            </nav>
          </div>

          {/* Right Column: Theme Toggle & CTA Button */}
          <div className="flex items-center gap-4 lg:gap-6 z-10">
            <div className="hidden md:flex items-center">
              {/* Theme Switcher Pill */}
              <div className="relative flex items-center bg-line-blue-light dark:bg-white/5 rounded-full p-0.5 border border-line-blue dark:border-white/5 h-8 w-20 select-none">
                {/* Sliding backdrop */}
                <div
                  className="absolute top-0.5 bottom-0.5 left-0.5 bg-paper dark:bg-paper-dark shadow-[0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.4)] border border-line-blue/20 dark:border-white/10 rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: "calc(50% - 1px)",
                    transform: theme === "light" ? "translateX(0)" : "translateX(100%)",
                  }}
                />
                
                <button
                  onClick={() => setThemeMode("light")}
                  className={`relative z-10 w-1/2 h-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${
                    theme === "light" ? "text-ink-dark" : "text-pencil/40 hover:text-coral"
                  }`}
                  aria-label="Светлая тема"
                >
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
                </button>
                <button
                  onClick={() => setThemeMode("dark")}
                  className={`relative z-10 w-1/2 h-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${
                    theme === "dark" ? "text-ink-dark" : "text-pencil/40 hover:text-coral"
                  }`}
                  aria-label="Темная тема"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Header Primary CTA Button */}
            <Link
              href="/contacts"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-body text-xs font-bold transition-all duration-300 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5"
            >
              <span>Обсудить проект</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            {/* Mobile Burger */}
            <button
              className="flex md:hidden flex-col gap-1.25 p-2 z-[1001] cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Открыть меню"
            >
              <span className="w-6 h-0.5 bg-ink-dark rounded" />
              <span className="w-6 h-0.5 bg-ink-dark rounded" />
              <span className="w-6 h-0.5 bg-ink-dark rounded" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 z-[1010] bg-paper/95 dark:bg-paper-dark/95 backdrop-blur-2xl flex flex-col justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        {/* Mobile Nav Top Bar */}
        <div className="absolute top-0 left-0 right-0 h-[80px] px-5 flex items-center justify-between z-10">
          <div className="absolute left-1/2 -translate-x-1/2 flex justify-center">
            <Link
              href="/"
              className="flex items-center text-2xl font-black text-ink-dark transition-opacity hover:opacity-85"
              onClick={(e) => { closeMenu(); handleLogoClick(e); }}
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
          
          <div className="w-auto ml-auto flex justify-end items-center relative z-20">
            <button
              className="flex flex-col gap-1.25 p-2 cursor-pointer"
              onClick={closeMenu}
              aria-label="Закрыть меню"
            >
              <span className="w-6 h-0.5 bg-ink-dark rounded rotate-45 translate-y-[7px]" />
              <span className="w-6 h-0.5 bg-ink-dark rounded opacity-0" />
              <span className="w-6 h-0.5 bg-ink-dark rounded -rotate-45 -translate-y-[7px]" />
            </button>
          </div>
        </div>

        <div className={`flex flex-col items-center justify-center gap-6 px-10 w-full h-full transition-all duration-700 delay-100 ${isMenuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}`}>
          <div className="flex flex-col items-center w-full max-w-sm mt-12">
            <button
              className="flex items-center justify-center gap-2 w-full font-heading text-3xl font-extrabold text-ink-dark py-4 outline-none cursor-pointer select-none"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              <span>Услуги</span>
              <svg
                className={`w-6 h-6 transition-transform duration-300 text-coral ${isMobileServicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div
              className={`flex flex-col items-center gap-4 transition-all duration-400 overflow-hidden ${isMobileServicesOpen ? "max-h-[400px] opacity-100 mb-4" : "max-h-0 opacity-0 mb-0"
                }`}
            >
              {dropdownServices.map((svc) => (
                <Link
                  key={svc.label}
                  href={svc.href}
                  className="font-body text-sm font-bold uppercase tracking-widest py-2 text-pencil hover:text-ink-dark"
                  onClick={closeMenu}
                >
                  {svc.label}
                </Link>
              ))}
            </div>

            <Link href="/prices" className="font-heading text-3xl font-extrabold text-ink-dark py-4" onClick={closeMenu}>
              Цены
            </Link>
            <Link href="/#cases" className="font-heading text-3xl font-extrabold text-ink-dark py-4" onClick={closeMenu}>
              Кейсы
            </Link>
            <Link href="/blog" className="font-heading text-3xl font-extrabold text-ink-dark py-4" onClick={closeMenu}>
              Блог
            </Link>
            <Link href="/contacts" className="font-heading text-3xl font-extrabold text-ink-dark py-4" onClick={closeMenu}>
              Контакты
            </Link>
          </div>

          {/* Mobile Theme Control */}
          <div className="flex items-center mt-8 pt-8 border-t border-line-blue/30 w-full max-w-xs justify-center">
            <div className="relative flex items-center bg-line-blue-light dark:bg-white/5 rounded-full p-1 border border-line-blue dark:border-white/5 h-12 w-28 select-none">
              <div
                className="absolute top-1 bottom-1 left-1 bg-paper dark:bg-paper-dark shadow-[0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.4)] border border-line-blue/20 dark:border-white/10 rounded-full transition-all duration-300 ease-out"
                style={{
                  width: "calc(50% - 2px)",
                  transform: theme === "light" ? "translateX(0)" : "translateX(100%)",
                }}
              />
              <button
                onClick={() => setThemeMode("light")}
                className={`relative z-10 w-1/2 h-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${
                  theme === "light" ? "text-ink-dark" : "text-pencil/40 hover:text-coral"
                }`}
                aria-label="Светлая тема"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              </button>
              <button
                onClick={() => setThemeMode("dark")}
                className={`relative z-10 w-1/2 h-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${
                  theme === "dark" ? "text-ink-dark" : "text-pencil/40 hover:text-coral"
                }`}
                aria-label="Темная тема"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
