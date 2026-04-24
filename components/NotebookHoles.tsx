"use client";

import React from "react";

/**
 * NotebookHoles component
 *
 * Renders the decorative “notebook holes” that appear at the top of the page.
 * The visual styling is defined in `globals.css` (classes `.notebook-holes`
 * and `.notebook-hole`). This component merely provides the markup.
 */
export const NotebookHoles = () => {
  return (
    <div className="notebook-holes" aria-hidden="true">
      <div className="notebook-hole" />
      <div className="notebook-hole" />
      <div className="notebook-hole" />
      <div className="notebook-hole" />
      <div className="notebook-hole" />
    </div>
  );
};
