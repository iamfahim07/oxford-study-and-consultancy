import { Footer } from "@/app/_components/footer";
import { Navbar } from "@/app/_components/navbar";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="w-full h-28 bg-cream" />
        {children}
      </main>
      <Footer />
    </div>
  );
};
