"use client";

import { useEffect, useState } from "react";

const svgDoodles = [
  {
    svg: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M15 2L18 12L28 15L18 18L15 28L12 18L2 15L12 12Z" stroke="#b8d4e8" stroke-width="1.5" fill="none"/></svg>`,
    positions: [
      { top: "20%", left: "5%" },
      { top: "60%", right: "3%" },
      { bottom: "15%", left: "10%" },
    ],
  },
  {
    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#e8a0a0" stroke-width="1.5" stroke-dasharray="3 3"/></svg>`,
    positions: [
      { top: "35%", right: "8%" },
      { top: "75%", left: "3%" },
    ],
  },
  {
    svg: `<svg width="40" height="20" viewBox="0 0 40 20" fill="none"><path d="M2 10H35M35 10L28 3M35 10L28 17" stroke="#9b8ec4" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    positions: [{ top: "45%", left: "2%" }],
  },
];

export const DoodleDecorations = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]" aria-hidden="true">
      {svgDoodles.map((doodle, i) =>
        doodle.positions.map((pos, j) => (
          <div
            key={`${i}-${j}`}
            className="absolute opacity-50"
            style={{
              ...pos,
              animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
            dangerouslySetInnerHTML={{ __html: doodle.svg }}
          />
        ))
      )}
    </div>
  );
};
