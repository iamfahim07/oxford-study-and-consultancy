"use client";

import AOS from "aos";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AOSInitializer = () => {
  const router = useRouter();

  useEffect(() => {
    // Initialize AOS with configuration
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    // Refresh AOS when route changes
    const handleRouteChange = () => {
      AOS.refresh();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      AOS.refresh();
    };
  }, [router.events]);

  return null; // This component doesn't render anything
};

export default AOSInitializer;
