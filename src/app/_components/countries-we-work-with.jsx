import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const CountriesWeWorkWith = () => {
  return (
    <div className="container mx-auto bg-cream max-md:px-4 max-md:py-20 md:p-20 mb-20">
      <div className="max-w-4xl mx-auto text-center mb-10" data-aos="flip-down">
        <h1 className="font-bold text-darken mb-2 text-3xl">
          {" "}
          <span className="text-yellow-500">Countries</span> We Offer Support
        </h1>
        <p className="leading-relaxed text-gray-500 text-justify md:text-center">
          We provide comprehensive support for visa processing and admission
          assistance in the following countries. Our dedicated team ensures a
          seamless experience, guiding you through every step of the application
          process. Whether it’s document preparation, compliance with
          requirements, or timely submissions, we are committed to helping you
          achieve your academic and professional goals.
        </p>
      </div>
      <Carousel className="max-md:relative">
        <CarouselContent>
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            data-aos="fade-up"
          >
            <Card src="/usa.jpeg" name="USA" />
          </CarouselItem>

          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            data-aos="fade-up"
          >
            <Card src="/uk.png" name="UK" />
          </CarouselItem>

          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            data-aos="fade-up"
          >
            <Card src="/australia.webp" name="Australia" />
          </CarouselItem>

          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            data-aos="fade-up"
          >
            <Card src="/canada.webp" name="Canada" />
          </CarouselItem>

          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            data-aos="fade-up"
          >
            <Card src="/europe.jpg" name="Europe" />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="size-10 max-md:absolute max-md:z-50 max-md:left-[calc(100%-90px)] max-md:top-[108%]" />
        <CarouselNext className="size-10 max-md:absolute max-md:z-50 max-md:right-[-4px] max-md:top-[108%]" />
      </Carousel>

      {/* sheet component */}
      <Sheet>
        <SheetTrigger className="px-5 py-3 border border-yellow-500 text-white bg-yellow-500 font-medium mt-8 focus:outline-none transform transition hover:bg-transparent hover:text-yellow-500 duration-300 ease-in-out rounded-full mx-auto block">
          See more
        </SheetTrigger>
        <SheetContent className="!w-full sm:!min-w-[90%] overflow-y-scroll">
          <SheetHeader>
            <SheetTitle className="font-bold text-darken mb-2 text-3xl text-center mt-10">
              <span className="text-yellow-500">European</span> Countries We
              Offer Support
            </SheetTitle>
            <SheetDescription className="leading-relaxed text-gray-500 text-justify md:text-center">
              We provide comprehensive support for visa processing and admission
              assistance in the following European countries. Our dedicated team
              ensures a seamless experience, guiding you through every step of
              the application process. Whether it’s document preparation,
              compliance with requirements, or timely submissions, we are
              committed to helping you achieve your academic and professional
              goals.
            </SheetDescription>
          </SheetHeader>

          {/* card component */}
          <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-8">
            <Card src="/germany.jpg" name="Germany" />
            <Card src="/sweden.jpg" name="Sweden" />
            <Card src="/france.jpg" name="France" />
            <Card src="/denmark.avif" name="Denmark" />
            <Card src="/finland.jpg" name="Finland" />
            <Card src="/ireland.jpg" name="Ireland" />
            <Card src="/italy.jpg" name="Italy" />
            <Card src="/hungary.jpg" name="Hungary" />
            <Card src="/romania.jpg" name="Romania" />
            <Card src="/bulgaria.jpg" name="Bulgaria" />
            <Card src="/malta.jpg" name="Malta" />
            <Card src="/cyprus.jpg" name="Cyprus" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const Card = ({ src, name }) => {
  return (
    <div className="h-[350px] p-5 bg-white shadow rounded overflow-hidden relative border border-gray-300 group">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src={src}
          alt={name}
          className="w-full h-full aspect-video object-cover rounded group-hover:scale-110 transition-all"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded"></div>
      </div>
      <h2 className="font-bold text-4xl text-white absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {name}
      </h2>
    </div>
  );
};
