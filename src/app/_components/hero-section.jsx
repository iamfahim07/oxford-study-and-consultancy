export const HeroSection = () => {
  return (
    <div className="bg-cream">
      <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
        {/* <!--Left Col--> */}
        <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
          <h1 className="my-4 text-5xl font-bold leading-tight text-darken">
            <span className="text-yellow-500">Oxford</span> Study & Consultancy
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Your dream of studying abroad starts right here, where opportunities
            meet preparation, and your future begins to take shape
          </p>
          <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
            <button className="lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out z-50">
              Book a Meating
            </button>
          </div>
        </div>
        {/* <!--Right Col--> */}
        <div className="flex justify-center items-center w-full lg:w-6/12 relative">
          <img className="w-[560px] -translate-x-24" src="boy.png" />

          <img
            className="w-[540px] absolute translate-x-24 translate-y-4"
            src="girl.png"
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
