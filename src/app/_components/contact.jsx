import Image from "next/image";

export const Contact = () => {
  return (
    <div className="p-20">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="font-bold text-darken mb-2 text-3xl">
          {" "}
          <span className="text-yellow-500">Contact</span> us
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="hidden lg:w-1/2 lg:flex justify-center">
          <Image
            src="/contact.svg"
            width={400}
            height={400}
            alt="Contact Image"
          />
        </div>
        {/* get in touct */}
        <div className="w-full lg:w-1/2">
          <div>
            <h1 className="text-darken font-bold text-2xl">Get in touch</h1>
            <p className="leading-relaxed text-gray-500 text-xl">
              Feel free to contact us and we will get back to you as soon as
              possible
            </p>

            <div className="flex justify-start items-center gap-2 mt-4">
              <svg
                className="h-5 w-5"
                fill="#2f327d"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <p className="text-gray-500 font-semibold">+8801711742861</p>
            </div>
            <div className="flex justify-start items-center gap-2 mt-4">
              <svg
                className="h-5 w-5"
                fill="#2f327d"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <a
                className="text-gray-500 font-semibold"
                href="mailto:oxfordstudyconsultancy@gmail.com"
              >
                oxfordstudyconsultancy@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-darken font-bold text-2xl">Connect with us</h1>

            <div className="flex justify-start items-center gap-2 mt-4">
              <svg
                className="h-10 w-10 hover:scale-110 transition-all"
                fill="#2f327d"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
