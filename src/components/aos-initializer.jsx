"use client";

import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";

export const AOSInitializer = () => {
  useEffect(() => {
    // Initialize AOS with configuration
    AOS.init({
      once: true,
    });

    const handleScroll = () => AOS.refresh();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return null; // This component doesn't render anything
};
