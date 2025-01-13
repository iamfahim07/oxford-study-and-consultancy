import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

import { Card } from "./card";

export const Services = () => {
  return (
    <section className="w-full h-[720px]  py-8 px-8">
      <h1 className={`${poppins.className} text-center text-7xl`}>
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20">
        <Card
          title="Visa Services"
          description="We take immense pride in our visa services, ensuring honesty and
        meticulous care at every stage of the process. Our committed team
        manages each visa application with precision, offering step-by-step
        guidance to guarantee accuracy and adherence to all regulations.
        Transparency is our priority, as we provide clear explanations and
        comprehensive support to simplify the visa application experience. Rely
        on us for genuine and attentive visa assistance, focused on making your
        journey abroad a successful and seamless one."
        />

        <Card
          title="Admission Help"
          description="At OSAC, we support students in securing university admissions through a wide array of services. We assess academic backgrounds, offer career guidance, and assist in identifying the right universities and programs. Our team helps students with application preparation, including gathering necessary documents, creating resumes, and drafting Statements of Purpose (SOPs). We also provide assistance with standardized test preparation and registration. Furthermore, we ensure applications are submitted on time, monitor their progress, and help students prepare for admission interviews."
        />

        <Card
          title="Free Counselling"
          description="We provide complimentary counseling services to assist students in navigating the university admission journey. Our skilled counselors deliver tailored guidance, review academic records, explore career aspirations, and suggest appropriate universities and programs. This guidance empowers students to make well-informed choices, paving the way for academic achievement. Begin your journey with our free counseling services."
        />
      </div>
    </section>
  );
};
