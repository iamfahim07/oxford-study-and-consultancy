import Image from "next/image";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center gap-y-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-50">
        <p className="text-6xl font-bold">IGNITE YOUR PASSION.</p>

        <p className="text-5xl font-bold">FUEL YOUR SUCCESS.</p>

        <Button className="border-none text-lg" size="lg">
          Book a Meating
        </Button>
      </div>
      <div className="h-[600px] pointer-events-none">
        <Image
          className="opacity-40"
          src="/bg.jpg"
          fill={true}
          style={{ objectFit: "cover" }}
          alt="bg"
        />
      </div>
    </div>
  );
};
