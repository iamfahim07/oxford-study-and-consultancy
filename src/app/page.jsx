import { Contact } from "@/app/_components/contact";
import { CountriesWeWorkWith } from "@/app/_components/countries-we-work-with";
import { HeroSection } from "@/app/_components/hero-section";
import { Navbar } from "@/app/_components/navbar";
import { Services } from "@/app/_components/services";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <Services />
      <CountriesWeWorkWith />
      <Contact />
    </main>
  );
}
