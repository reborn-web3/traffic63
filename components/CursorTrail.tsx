// traffic63\components\CursorTrail.tsx
"use client";

import { useEffect, useRef } from "react";

/**
 * CursorTrail component
 *
 * Adds a subtle trailing dot that follows the mouse cursor.
 * The component is lightweight and does not render any visible JSX.
 * All visual elements are created and managed via the DOM API.
 *
 * Usage: simply render <CursorTrail /> at the root of your application
 * (e.g., inside `app/page.tsx` or a layout) to enable the effect globally.
 */
export const CursorTrail = () => {
  // Ref is not used for rendering, but keeps a stable reference across renders
  const lastTrailRef = useRef<number>(0);

  useEffect(() => {
    // Disable on touch-only devices to save resources and prevent tap lag/glitches
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    // Disable if the user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTrailRef.current < 80) return; // throttle to ~12fps
      lastTrailRef.current = now;

      const trail = document.createElement("div");
      trail.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 4px;
        height: 4px;
        background: var(--line-blue);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.3;
        transition: opacity 0.6s ease, transform 0.6s ease;
      `;
      document.body.appendChild(trail);

      // Trigger fade‑out & scale‑down
      requestAnimationFrame(() => {
        trail.style.opacity = "0";
        trail.style.transform = "scale(0)";
      });

      // Clean up after the transition finishes
      setTimeout(() => trail.remove(), 600);
    };

    document.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    // Cleanup on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // This component does not render any DOM node itself
  return null;
};
