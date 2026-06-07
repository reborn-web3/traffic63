"use client";

import { useEffect } from "react";

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a") as HTMLAnchorElement;
      if (!target) return;

      const href = target.getAttribute("href");

      // Handle both #anchor and /#anchor
      if (href && (href.startsWith("#") || (href.startsWith("/#") && window.location.pathname === "/"))) {
        const id = href.startsWith("/#") ? href.substring(1) : href;
        if (id === "#" || id === "/#") return;

        const element = document.querySelector(id);
        const header = document.getElementById("header");

        if (element) {
          e.preventDefault();
          const offset = header ? header.offsetHeight : 0;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Close mobile menu if it's open (custom event or just assuming it might be needed)
          // But here we just handle the scroll
        }
      }
    };

    const links = document.querySelectorAll('a[href*="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll as EventListener);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll as EventListener);
      });
    };
  }, []);
};
