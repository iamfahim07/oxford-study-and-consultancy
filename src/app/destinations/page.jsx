import { ImageCard } from "@/components/image-card";

export default function Destinations() {
  return (
    <main>
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

      {/* Imagecard component */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-auto mt-8">
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
    </main>
  );
}
