import {
  AdmissionHelpIcon,
  EnglishCoursesIcon,
  FreeCounsellingIcon,
  IeltsIcon,
  StudyAbroadIcon,
} from "@/components/svg-assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Services = () => {
  return (
    <div className="container px-4 lg:px-12 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden pb-20">
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
      {/* <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20">
        <div className="bg-white shadow-xl p-6 text-center rounded-xl">
          <div
            style={{ background: "#5B72EE" }}
            className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
          >
            <svg
              className="w-7 h-7 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="white"
            >
              <path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2 .3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4 .2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2 .2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2 .1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z" />
            </svg>
          </div>
          <h1 className="flex flex-col font-medium text-xl mb-3 lg:px-14 text-darken">
            Study Abroad
            <span className="text-sm text-yellow-500">
              Student visa processing
            </span>
          </h1>
          <p className="px-4 text-gray-500">
            We take immense pride in providing exceptional visa services for the{" "}
            <span className="text-yellow-500 font-bold">UK</span>,{" "}
            <span className="text-yellow-500 font-bold">USA</span>,
            <span className="text-yellow-500 font-bold">Australia</span>,{" "}
            <span className="text-yellow-500 font-bold">Canada</span>, and{" "}
            <span className="text-yellow-500 font-bold">Denmark</span>, ensuring
            honesty and meticulous care at every stage of the process. Our
            dedicated team handles each application with precision, offering
            step-by-step guidance to ensure accuracy and compliance with all
            regulations. Transparency is at the heart of what we do, delivering
            clear explanations and comprehensive support to simplify your visa
            application experience. Trust us for genuine, attentive assistance,
            focused on making your journey abroad successful and seamless.
          </p>
        </div>

        <div className="bg-white shadow-xl p-6 text-center rounded-xl">
          <div
            style={{ background: "#F48C06" }}
            className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
          >
            <svg
              className="w-7 h-7 text-white"
              viewBox="0 0 33 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
            Admission Help
          </h1>
          <p className="px-4 text-gray-500">
            At OSAC, we support students in securing university admissions
            through a wide array of services. We assess academic backgrounds,
            offer career guidance, and assist in identifying the right
            universities and programs. Our team helps students with application
            preparation, including gathering necessary documents, creating
            resumes, and drafting Statements of Purpose (SOPs). We also provide
            assistance with standardized test preparation and registration.
            Furthermore, we ensure applications are submitted on time, monitor
            their progress, and help students prepare for admission interviews.
          </p>
        </div>

        <div className="bg-white shadow-xl p-6 text-center rounded-xl">
          <div
            style={{ background: "#29B9E7" }}
            className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
          >
            <svg
              className="w-7 h-7 text-white"
              viewBox="0 0 55 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
            Free Counselling
          </h1>
          <p className="px-4 text-gray-500">
            We provide complimentary counseling services to assist students in
            navigating the university admission journey. Our skilled counselors
            deliver tailored guidance, review academic records, explore career
            aspirations, and suggest appropriate universities and programs. This
            guidance empowers students to make well-informed choices, paving the
            way for academic achievement. Begin your journey with our free
            counseling services.
          </p>
        </div>
      </div> */}

      <Carousel className="max-md:relative max-md:flex max-md:flex-col">
        <CarouselContent className="mt-20 mb-6 max-md:flex max-md:flex-col max-md:gap-4">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 max-md:mb-12">
            <div className="h-full bg-white shadow-xl max-md:pb-6 md:p-6 text-center rounded-xl">
              <StudyAbroadIcon />
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
              <IeltsIcon />
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
              <EnglishCoursesIcon />
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
              <AdmissionHelpIcon />
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
        <CarouselPrevious className="size-10 max-md:absolute max-md:z-50 max-md:left-[-4px] max-md:hidden" />
        <CarouselNext className="size-10 max-md:absolute max-md:z-50 max-md:right-[-4px] max-md:hidden" />
      </Carousel>
    </div>
  );
};
