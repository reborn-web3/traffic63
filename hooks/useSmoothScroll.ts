"use client";

import { useEffect } from "react";

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");

      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const element = document.querySelector(href);
        const header = document.getElementById("header");

        if (element) {
          const offset = header ? header.offsetHeight + 20 : 0;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll as unknown as EventListener);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll as unknown as EventListener);
      });
    };
  }, []);
};
