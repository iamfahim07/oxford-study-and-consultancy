import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <Services />
    </main>
  );
}
