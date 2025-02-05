import { FreeCounsellingIcon } from "@/components/svg-assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BookOpenText, GraduationCap, NotebookPen, School } from "lucide-react";

export const Services = () => {
  return (
    <div
      className="container px-4 lg:px-12 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden pb-20"
      id="services"
    >
      {/* <!-- Services --> */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-bold text-darken my-3 text-3xl">
          <span className="text-yellow-500">What</span> We Bring to the Table
        </h1>
        <p className="text-justify md:text-center leading-relaxed text-gray-500">
          We specialize in student visa consultancy, guiding aspiring students
          toward achieving their dreams of studying abroad. From university
          applications to visa processing, our expert team ensures a smooth
          journey, making your transition to international education seamless
          and stress-free.
        </p>
      </div>
      {/* <!-- card --> */}

      <Carousel className="max-md:relative max-md:flex max-md:flex-col">
        <CarouselContent className="mt-20 mb-6 max-md:flex max-md:flex-col max-md:gap-4">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 max-md:mb-12">
            <div className="h-full bg-white shadow-xl max-md:pb-6 md:p-6 text-center rounded-xl">
              <div
                style={{ background: "#5B72EE" }}
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
              >
                <School className="w-7 h-7 text-white" />
              </div>
              <h1 className="flex flex-col font-medium text-xl max-md:-mt-5 mb-3 lg:px-14 text-darken">
                Study Abroad
                <span className="text-sm text-yellow-500">
                  Student visa processing
                </span>
              </h1>
              <p className="px-4 text-gray-500 text-justify">
                We take immense pride in providing exceptional visa services for
                the <span className="text-yellow-500 font-bold">UK</span>,{" "}
                <span className="text-yellow-500 font-bold">USA</span>,{" "}
                <span className="text-yellow-500 font-bold">Australia</span>,{" "}
                <span className="text-yellow-500 font-bold">Canada</span>, and{" "}
                <span className="text-yellow-500 font-bold">Denmark</span>,
                ensuring honesty and meticulous care at every stage of the
                process. Our dedicated team handles each application with
                precision, offering step-by-step guidance to ensure accuracy and
                compliance with all regulations. Transparency is at the heart of
                what we do, delivering clear explanations and comprehensive
                support to simplify your visa application experience. Trust us
                for genuine, attentive assistance, focused on making your
                journey abroad successful and seamless.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3  max-md:mb-12">
            <div className="h-full bg-white shadow-xl max-md:pb-6 md:p-6 text-center rounded-xl">
              <div
                style={{ background: "#F48C06" }}
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
              >
                <NotebookPen className="w-7 h-7 text-white" />
              </div>
              <h1 className="font-medium text-xl max-md:-mt-5 mb-3 lg:px-14 text-darken">
                IELTS
              </h1>
              <p className="px-4 text-gray-500 text-justify">
                At OSAC, we offer comprehensive IELTS preparation designed to
                meet your unique needs. Our{" "}
                <span className="text-yellow-500 font-bold">
                  Basic to Advanced IELTS Course
                </span>{" "}
                is an in-depth program that covers every aspect of the exam,
                from foundational skills to advanced strategies, ensuring you
                are fully prepared to achieve your desired score. For those with
                limited time, our{" "}
                <span className="text-yellow-500 font-bold">
                  IELTS Crash Course
                </span>{" "}
                provides a focused, intensive approach, honing in on key
                techniques and tips to maximize your performance in a shorter
                timeframe. Whether you’re starting from scratch or looking to
                refine your skills, our expert instructors are here to guide you
                every step of the way, helping you unlock your full potential
                and succeed in your IELTS journey.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3  max-md:mb-12">
            <div className="h-full bg-white shadow-xl max-md:pb-6 md:p-6 text-center rounded-xl">
              <div
                style={{ background: "#2f327d" }}
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
              >
                <BookOpenText className="w-7 h-7 text-white" />
              </div>
              <h1 className="font-medium text-xl max-md:-mt-5 mb-3 lg:px-14 text-darken">
                English courses
              </h1>
              <p className="px-4 text-gray-500 text-justify">
                We understand the importance of mastering English, whether for
                personal growth, academic success, or professional advancement.
                That’s why we offer a range of English courses tailored to your
                needs. Our{" "}
                <span className="text-yellow-500 font-bold">
                  Spoken English Course
                </span>{" "}
                focuses on building confidence and fluency in everyday
                communication, helping you speak naturally and effectively. For
                those starting their journey, the{" "}
                <span className="text-yellow-500 font-bold">
                  Basic English Course
                </span>{" "}
                lays a strong foundation in grammar, vocabulary, and essential
                language skills. And for learners aiming to refine their
                expertise, the{" "}
                <span className="text-yellow-500 font-bold">
                  Advanced English Course
                </span>{" "}
                dives into complex structures, nuanced expressions, and
                professional communication. With experienced instructors and a
                supportive learning environment, we’re here to help you achieve
                your language goals and unlock new opportunities.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3  max-md:mb-12">
            <div className="h-full bg-white shadow-xl max-md:pb-6 md:p-6 text-center rounded-xl">
              <div
                style={{ background: "#57eb78" }}
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
              >
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h1 className="font-medium text-xl max-md:-mt-5 mb-3 lg:px-14 text-darken">
                Admission Help
              </h1>
              <p className="px-4 text-gray-500 text-justify">
                At OSAC, we support students in securing university admissions
                through a wide array of services. We assess academic
                backgrounds, offer career guidance, and assist in identifying
                the right universities and programs. Our team helps students
                with application preparation, including gathering necessary
                documents, creating resumes, and drafting Statements of Purpose
                (SOPs). We also provide assistance with standardized test
                preparation and registration. Furthermore, we ensure
                applications are submitted on time, monitor their progress, and
                help students prepare for admission interviews.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full bg-white shadow-xl max-md:pb-6 md:p-6 text-center rounded-xl">
              <FreeCounsellingIcon />
              <h1 className="font-medium text-xl max-md:-mt-5 mb-3 lg:px-14 text-darken">
                Free Counselling
              </h1>
              <p className="px-4 text-gray-500 text-justify">
                We provide complimentary counseling services to assist students
                in navigating the university admission journey. Our skilled
                counselors deliver tailored guidance, review academic records,
                explore career aspirations, and suggest appropriate universities
                and programs. This guidance empowers students to make
                well-informed choices, paving the way for academic achievement.
                Begin your journey with our free counseling services.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="size-10 max-md:absolute max-md:z-50 max-md:left-[-4px] max-lg:left-[-8px] max-md:hidden" />
        <CarouselNext className="size-10 max-md:absolute max-md:z-50 max-md:right-[-4px] max-lg:right-[-8px] max-md:hidden" />
      </Carousel>
    </div>
  );
};
