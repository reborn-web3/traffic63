// traffic63\components\SmoothScroll.tsx
"use client";

import { useEffect } from "react";

/**
 * SmoothScroll component
 *
 * Attaches a click handler to all internal anchor links (href starting with "#")
 * and scrolls smoothly to the target element, taking the site header height
 * into account if a fixed header exists.
 *
 * The component does not render any JSX; it only sets up the effect.
 *
 * Usage: <SmoothScroll /> placed near the root of your app (e.g., inside
 * app/page.tsx or a layout) to enable smooth scrolling globally.
 */
export const SmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");
      // Guard against empty, null or just "#" which is not a valid selector
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const header = document.getElementById("header");
      const offset = header?.offsetHeight ?? 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    // Cleanup on unmount
    return () => {
      links.forEach((link) => link.removeEventListener("click", handleSmoothScroll));
    };
  }, []);

  return null;
};
