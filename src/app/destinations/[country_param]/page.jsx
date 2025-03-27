import {
  BookText,
  CircleCheck,
  FileText,
  HeartPulse,
  School,
  ScrollText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  RoadSign,
  RoadSignLeftArrow,
  RoadSignRightArrow,
} from "@/components/road-sign";
import { SwipperComponent } from "@/components/swipper/swipper-component";

export default async function Country({ params }) {
  const { country_param } = await params;
  return (
    <main>
      {/* <!-- study in selected country --> */}
      <div className="bg-cream px-4 lg:px-12 py-8 flex justify-between gap-10 mb-10">
        <div className="w-full md:w-1/2 text-start" data-aos="flip-up">
          <h1 className="font-bold text-darken mb-2 text-3xl">
            Study In <span className="text-yellow-500">UK</span>
          </h1>
          <p className="text-justify leading-relaxed text-gray-500">
            Welcome to Oxford Study & Consultancy, a dedicated study consultancy
            firm committed to transforming your educational aspirations into
            reality. Based in Narsingdi, Dhaka, Bangladesh. We bring together a
            team of seasoned professionals with extensive expertise in
            international education and migration. Our passion for excellence
            and personalized service sets us apart as a trusted partner in your
            journey toward global academic opportunities.
          </p>
        </div>

        <div className="w-1/2 max-md:hidden">
          <Image
            className="h-80 object-cover rounded"
            src="/uk.png"
            width={1000}
            height={1000}
            alt="UK"
          />
        </div>
      </div>

      {/* visa requirements to stady */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-12 pb-10">
        <div className="w-fit mx-auto mb-16">
          <h1 className="text-3xl font-bold text-darken">
            <span className="text-yellow-500">Visa</span> Requirements to Study
          </h1>
        </div>

        <RoadSign>
          <RoadSignLeftArrow className="text-gray-700">
            <School className="w-12 h-12 mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-5">
              1. Acceptance from a UK University
            </h3>
            <p className="text-sm sm:text-base">
              Before beginning your journey, it is crucial to receive formal
              acceptance from a UK academic institution. This is typically
              confirmed through the issuance of a Confirmation of Acceptance for
              Studies (CAS) from the university.
            </p>
          </RoadSignLeftArrow>

          <RoadSignRightArrow>
            <BookText className="w-12 h-12 mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-5">
              2. English Language Proficiency
            </h3>
            <p className="text-sm sm:text-base">
              Demonstrating proficiency in the English language is essential.
              This can be achieved by taking a certified English exam such as
              TOEFL, IELTS, or PTE Academic. It’s advisable to check the
              specific score requirements on the university’s official webpage
              to ensure compliance.
            </p>
          </RoadSignRightArrow>

          <RoadSignLeftArrow className="text-gray-700">
            <FileText className="w-12 h-12 mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-5">
              3. Financial Requirements
            </h3>
            <p className="text-sm sm:text-base">
              As part of the application process, applicants must prove they
              have sufficient funds to cover tuition and living expenses while
              studying. This may vary depending on the course duration and
              location, requiring evidence such as bank statements or letters of
              financial sponsorship.
            </p>
          </RoadSignLeftArrow>

          <RoadSignRightArrow>
            <ScrollText className="w-12 h-12 mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-5">
              4. Visa Application
            </h3>
            <p className="text-sm sm:text-base">
              Students and those from specified nations must obtain a Tier 4
              (General) Student Visa to study in the United Kingdom. The visa
              application process involves several steps, including submitting
              an online application form and providing evidence of financial
              stability, English language proficiency, and required documents
              such as a valid passport, CAS reference number from the chosen
              university, TB test results (if applicable), passport-size
              photographs, and the visa fee. Additional paperwork may be
              requested by UK embassies or consulates.
            </p>
          </RoadSignRightArrow>

          <RoadSignLeftArrow className="text-gray-700">
            <HeartPulse className="w-12 h-12 mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-5">
              5. Health Insurance
            </h3>
            <p className="text-sm sm:text-base">
              Having adequate health insurance is essential while staying in the
              UK. Students studying for six months or more may be eligible to
              use the National Health Service (NHS), but it is important to
              carefully review both university and NHS regulations regarding
              health insurance coverage before doing so.
            </p>
          </RoadSignLeftArrow>

          <RoadSignRightArrow>
            <ScrollText className="w-12 h-12 mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-5">
              6. Visa Application
            </h3>
            <p className="text-sm sm:text-base">
              Students and those from specified nations must obtain a Tier 4
              (General) Student Visa to study in the United Kingdom. The visa
              application process involves several steps, including submitting
              an online application form and providing evidence of financial
              stability, English language proficiency, and required documents
              such as a valid passport, CAS reference number from the chosen
              university, TB test results (if applicable), passport-size
              photographs, and the visa fee. Additional paperwork may be
              requested by UK embassies or consulates.
            </p>
          </RoadSignRightArrow>
        </RoadSign>
      </div>

      {/* documents required */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-12 pb-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-darken">
            <span className="text-yellow-500">Documents</span> Required
          </h1>
        </div>

        <div className="mb-3">
          <div className="flex items-center gap-2">
            <span>
              <CircleCheck className="w-5 h-5 text-green" />
            </span>
            <p>Academic documents</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <CircleCheck className="w-5 h-5 text-green" />
            </span>
            <p>Visa application form</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <CircleCheck className="w-5 h-5 text-green" />
            </span>
            <p>A valid passport</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <CircleCheck className="w-5 h-5 text-green" />
            </span>
            <p>2 Passport-size photographs</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <CircleCheck className="w-5 h-5 text-green" />
            </span>
            <p>Form I-20 issued by a designated university</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <CircleCheck className="w-5 h-5 text-green" />
            </span>
            <p>Completed Application DS-160 form</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <CircleCheck className="w-5 h-5 text-green" />
            </span>
            <p>SEVIS Application fees payment</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <CircleCheck className="w-5 h-5 text-green" />
            </span>
            <p>Statement of Purpose</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <CircleCheck className="w-5 h-5 text-green" />
            </span>
            <p>Attested academic transcripts</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <CircleCheck className="w-5 h-5 text-green" />
            </span>
            <p>Certified English Proficiency Test scores (TOEFL/ IELTS/ PTE)</p>
          </div>
        </div>

        <div className="mb-3">
          <p className="font-semibold">
            *For a detailed visa application, please speak to our Expert Visa
            Counsellor
          </p>
        </div>

        <div className="w-fit px-8 py-3 text-sm font-medium text-center bg-yellow-500 text-white rounded-full md:hover:scale-105 duration-300 transition">
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </div>

      {/* study in the specific country universuty start */}
      <div className="bg-cream py-24 hidden">
        <div>
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-center text-darken">
              Study In <span className="text-yellow-500">USA</span> University
            </h1>
          </div>

          <div className="w-4/5 h-24 mx-auto">
            <SwipperComponent
              slidesPerView={6}
              spaceBetween={20}
              speed={2500}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
              // centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <div>
                <Image
                  src="/uk/kent.jpg"
                  className="py-5 px-8"
                  width={500}
                  height={500}
                  alt="kent"
                />
              </div>
              <div>
                <Image
                  src="/uk/bangor.jpg"
                  className="py-5 px-8"
                  width={500}
                  height={500}
                  alt="bangor"
                />
              </div>
              <div>
                <Image
                  src="/uk/bradford.webp"
                  className="py-5 px-8"
                  width={500}
                  height={500}
                  alt="bradford"
                />
              </div>
              <div>
                <Image
                  src="/uk/canterbury.png"
                  className="py-5 px-8"
                  width={500}
                  height={500}
                  alt="canterbury"
                />
              </div>
              <div>
                <Image
                  src="/uk/dundee.jpg"
                  className="py-5 px-8"
                  width={500}
                  height={500}
                  alt="dundee"
                />
              </div>
              <div>
                <Image
                  src="/uk/edinburgh.png"
                  className="py-5 px-8"
                  width={500}
                  height={500}
                  alt="edinburgh"
                />
              </div>
              <div>
                <Image
                  src="/uk/greenwich.jpg"
                  className="py-5 px-8"
                  width={500}
                  height={500}
                  alt="greenwich"
                />
              </div>
              <div>
                <Image
                  src="/uk/montfort.png"
                  className="py-5 px-8"
                  width={500}
                  height={500}
                  alt="montfort"
                />
              </div>
              <div>
                <Image
                  src="/uk/ravensbourne.png"
                  className="py-5 px-8"
                  width={500}
                  height={500}
                  alt="ravensbourne"
                />
              </div>
              <div>
                <Image
                  src="/uk/roehampton.png"
                  className="py-5 px-8"
                  width={500}
                  height={500}
                  alt="roehampton"
                />
              </div>
            </SwipperComponent>
          </div>
        </div>
      </div>
      {/* study in the specific country universuty end */}
    </main>
  );
}
