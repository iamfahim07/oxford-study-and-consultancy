import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="bg-cream" id="home">
      <div className="max-w-screen-xl px-0 md:px-8 mx-auto flex flex-col lg:flex-row items-start">
        {/* <!--Left Col--> */}
        <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
          <h1 className="w-full my-4 text-[40px] md:text-5xl font-bold leading-tight text-darken max-lg:text-center">
            <span className="text-yellow-500">Oxford</span> Study & Consultancy
          </h1>
          <p className="leading-normal text-xl md:text-2xl mb-8">
            Your dream of studying abroad starts right here, where opportunities
            meet preparation, and your future begins to take shape
          </p>
          <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
            <Link href="#contact">
              <button className="lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-50">
                Book a Meating
              </button>
            </Link>
          </div>
        </div>
        {/* <!--Right Col--> */}
        <div className="flex justify-center items-center w-full lg:w-6/12 relative overflow-hidden">
          <Image
            className="w-[560px] -translate-x-24"
            width={560}
            height={560}
            src="/boy.png"
            alt="Boy image"
          />

          <Image
            className="w-[540px] absolute translate-x-24 translate-y-4"
            width={540}
            height={540}
            src="/girl.png"
            alt="Girl image"
          />
        </div>
      </div>
      <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
        <svg
          className="xl:h-40 xl:w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="bg-white w-full h-20 -mt-px"></div>
      </div>
    </div>
  );
};
