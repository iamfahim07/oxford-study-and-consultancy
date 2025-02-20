import { AboutUs } from "@/app/_components/about-us";
import { Contact } from "@/app/_components/contact";
import { CountriesWeWorkWith } from "@/app/_components/countries-we-work-with";
import { Footer } from "@/app/_components/footer";
import { HeroSection } from "@/app/_components/hero-section";
// import { Navbar } from "@/app/_components/navbar";
import { Services } from "@/app/_components/services";
import { AOSInitializer } from "@/components/aos-initializer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <AOSInitializer />
      {/* <Navbar /> */}
      <HeroSection />
      <Services />
      <CountriesWeWorkWith />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}
