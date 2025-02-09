import Image from "next/image";
import Link from "next/link";

import { EmailIcon, FacebookIcon, WhatsAppIcon } from "@/components/svg-assets";

export const Contact = () => {
  return (
    <div
      className="container mx-auto max-md:px-4 max-md:py-20 md:p-20"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="font-bold text-darken mb-2 text-3xl" data-aos="fade-up">
          {" "}
          <span className="text-yellow-500">Contact</span> us
        </h1>
      </div>
      <div className="flex justify-center">
        <div
          className="hidden lg:w-1/2 lg:flex justify-center"
          data-aos="fade-down"
        >
          <Image
            src="/contact.svg"
            width={400}
            height={400}
            alt="Contact Image"
          />
        </div>
        {/* get in touct */}
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div>
            <h1 className="text-darken font-bold text-2xl">Get in touch</h1>
            <p className="leading-relaxed text-gray-500 text-lg md:text-xl">
              Feel free to contact us and we will get back to you as soon as
              possible
            </p>

            <div className="flex justify-start items-center gap-2 mt-8">
              <WhatsAppIcon />

              <p className="text-gray-500 font-semibold">+8801711742861</p>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <EmailIcon />
              <Link
                className="text-gray-500 font-semibold"
                href="mailto:oxfordstudyconsultancy@gmail.com"
              >
                oxfordstudyconsultancy@gmail.com
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-darken font-bold text-2xl">Connect with us</h1>

            <div className="flex justify-start items-center gap-2 mt-2">
              <Link
                href="https://www.facebook.com/profile.php?id=61568780531374"
                target="_blank"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
