"use client";

import { useEffect } from "react";

/**
 * Smooth Scroll Provider
 * Initializes smooth scrolling polyfill for cross-browser support
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Import and initialize smoothscroll polyfill
    import("smoothscroll-polyfill").then((smoothscroll) => {
      smoothscroll.polyfill();
    });
  }, []);

  return <>{children}</>;
}
