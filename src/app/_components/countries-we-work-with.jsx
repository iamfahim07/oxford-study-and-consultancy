import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CountriesWeWorkWith = () => {
  return (
    <div className="p-20 bg-cream">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="font-bold text-darken mb-2 text-3xl">
          {" "}
          <span className="text-yellow-500">Countries</span> We Offer Support
        </h1>
        <p className="leading-relaxed text-gray-500">
          We provide comprehensive support for visa processing and admission
          assistance in the following countries. Our dedicated team ensures a
          seamless experience, guiding you through every step of the application
          process. Whether it’s document preparation, compliance with
          requirements, or timely submissions, we are committed to helping you
          achieve your academic and professional goals.
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card src="/usa.jpeg" name="USA" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card src="/uk.png" name="UK" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card src="/australia.webp" name="Australia" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card src="/canada.webp" name="Canada" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card src="/denmark.avif" name="Denmark" />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="size-10" />
        <CarouselNext className="size-10" />
      </Carousel>
    </div>
  );
};

const Card = ({ src, name }) => {
  return (
    <div className="h-[350px] p-5 bg-white shadow rounded overflow-hidden relative border border-gray-300 group">
      <div className="relative w-full h-full overflow-hidden">
        <img
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
