import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ImageCard } from "./image-card";
import { ResponsiveSheet } from "./responsive-sheet";

export const CountriesWeWorkWithSheet = ({ open, onOpenChange }) => {
  return (
    <ResponsiveSheet>
      <SheetTrigger className="px-5 py-3 border border-yellow-500 text-white bg-yellow-500 font-medium mt-8 focus:outline-none transform transition hover:bg-transparent hover:text-yellow-500 duration-300 ease-in-out rounded-full mx-auto block">
        See more
      </SheetTrigger>
      <SheetContent className="!w-full sm:!min-w-[90%] overflow-y-scroll">
        <SheetHeader>
          <SheetTitle className="font-bold text-darken mb-2 text-3xl text-center mt-10">
            <span className="text-yellow-500">European</span> Countries We Offer
            Support
          </SheetTitle>
          <SheetDescription className="leading-relaxed text-gray-500 text-justify md:text-center">
            We provide comprehensive support for visa processing and admission
            assistance in the following European countries. Our dedicated team
            ensures a seamless experience, guiding you through every step of the
            application process. Whether it’s document preparation, compliance
            with requirements, or timely submissions, we are committed to
            helping you achieve your academic and professional goals.
          </SheetDescription>
        </SheetHeader>

        {/* Imagecard component */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-8">
          <ImageCard src="/germany.jpg" name="Germany" />
          <ImageCard src="/sweden.jpg" name="Sweden" />
          <ImageCard src="/france.jpg" name="France" />
          <ImageCard src="/denmark.avif" name="Denmark" />
          <ImageCard src="/finland.jpg" name="Finland" />
          <ImageCard src="/ireland.jpg" name="Ireland" />
          <ImageCard src="/italy.jpg" name="Italy" />
          <ImageCard src="/hungary.jpg" name="Hungary" />
          <ImageCard src="/romania.jpg" name="Romania" />
          <ImageCard src="/bulgaria.jpg" name="Bulgaria" />
          <ImageCard src="/malta.jpg" name="Malta" />
          <ImageCard src="/cyprus.jpg" name="Cyprus" />
        </div>
      </SheetContent>
    </ResponsiveSheet>
  );
};
