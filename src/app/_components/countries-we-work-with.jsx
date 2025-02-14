import { CountriesWeWorkWithSheet } from "@/components/countries-we-work-with-sheet";
import { ImageCard } from "@/components/image-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CountriesWeWorkWith = () => {
  return (
    <div
      className="container mx-auto bg-cream max-md:px-4 max-md:py-20 md:p-20 mb-20"
      id="countries-we-offer-support"
    >
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
            <ImageCard src="/usa.jpeg" name="USA" />
          </CarouselItem>

          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            data-aos="fade-up"
          >
            <ImageCard src="/uk.png" name="UK" />
          </CarouselItem>

          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            data-aos="fade-up"
          >
            <ImageCard src="/australia.webp" name="Australia" />
          </CarouselItem>

          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            data-aos="fade-up"
          >
            <ImageCard src="/canada.webp" name="Canada" />
          </CarouselItem>

          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            data-aos="fade-up"
          >
            <ImageCard src="/europe.jpg" name="Europe" />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="size-10 max-md:absolute max-md:z-50 max-md:left-[calc(100%-90px)] max-md:top-[108%]" />
        <CarouselNext className="size-10 max-md:absolute max-md:z-50 max-md:right-[-4px] max-md:top-[108%]" />
      </Carousel>

      {/* sheet component */}
      <CountriesWeWorkWithSheet />
    </div>
  );
};
