import Image from "next/image";
import Link from "next/link";

import { EmailIcon, FacebookIcon, WhatsAppIcon } from "@/components/svg-assets";

export default function ContactUs() {
  return (
    <div id="contact">
      {/* contact us */}
      <div className="bg-cream px-4 lg:px-12 py-8">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 className="font-bold text-darken mb-2 text-3xl">
            {" "}
            <span className="text-yellow-500">Contact</span> Us
          </h1>
          <p className="leading-relaxed text-gray-500 text-justify md:text-center">
            Welcome to our Contact page at Oxford Study & Consultancy. We’re
            eager to connect with you and kickstart your journey toward global
            education. Based in Narsingdi, Dhaka, Bangladesh, our team is always
            ready to offer personalized guidance, answer your queries, and help
            you navigate the path to international academic opportunities.
            Whether you’re looking for advice on study abroad programs,
            migration details, or simply want to learn more about how we can
            support your ambitions, we invite you to reach out. Use our
            convenient contact form, call us, or drop an email—your academic
            dreams deserve attentive care, and we’re here to deliver just that.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 py-20">
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
                <WhatsAppIcon className="w-[25px] h-[25px]" />

                <p className="text-gray-500">+8801711742861</p>
              </div>
              <div className="flex justify-start items-center gap-2 mt-2">
                <EmailIcon className="w-[23px] h-[23px]" />
                <Link
                  className="text-gray-500"
                  href="mailto:oxfordstudyconsultancy@gmail.com"
                >
                  oxfordstudyconsultancy@gmail.com
                </Link>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-darken font-bold text-2xl">
                Connect with us
              </h1>

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
    </div>
  );
}
