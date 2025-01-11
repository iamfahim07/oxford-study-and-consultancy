"use client";

import Lottie from "react-lottie";
import HeroAnimation from "./../../public/hero-animation.json";
import { Button } from "./ui/button";

export const HeroSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HeroAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center gap-y-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-50">
        <p className="text-6xl font-bold">
          IGNITE YOUR PASSION. FUEL YOUR SUCCESS.
        </p>

        <Button className="border-none text-lg" size="lg">
          Book a Meating
        </Button>
      </div>
      <div className="h-[600px] pointer-events-none">
        <Lottie
          options={defaultOptions}
          // width={630}
          // height={630}
          isStopped={false}
          isPaused={false}
          style={{ opacity: 0.4 }}
        />
      </div>
    </div>
  );
};
