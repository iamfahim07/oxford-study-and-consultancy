import { CountriesWeWorkWithSheet } from "@/components/countries-we-work-with-sheet";
import { ImageCard } from "@/components/image-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CountriesWeOfferSupport() {
  return (
    <div>
      {/* heading text */}
      <div className="bg-cream px-4 md:px-20 py-8 mb-10">
        <div className="max-w-4xl mx-auto text-center" data-aos="flip-down">
          <h1 className="font-bold text-darken mb-2 text-3xl">
            {" "}
            <span className="text-yellow-500">Countries</span> We Offer Support
          </h1>
          <p className="leading-relaxed text-gray-500 text-justify md:text-center">
            We provide comprehensive support for visa processing and admission
            assistance in the following countries. Our dedicated team ensures a
            seamless experience, guiding you through every step of the
            application process. Whether it’s document preparation, compliance
            with requirements, or timely submissions, we are committed to
            helping you achieve your academic and professional goals.
          </p>
        </div>
      </div>

      {/* <!-- card --> */}
      <div className="px-4 md:px-20 pb-20 max-w-screen-2xl mx-auto">
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
    </div>
  );
}
