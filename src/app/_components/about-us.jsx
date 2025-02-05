export const AboutUs = () => {
  return (
    <div
      className="container px-4 lg:px-12 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden py-20"
      id="about-us"
    >
      {/* <!-- About us --> */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-bold text-darken my-3 text-3xl">
          <span className="text-yellow-500">Who</span> are we
        </h1>
        <p className="text-justify md:text-center leading-relaxed text-gray-500">
          Welcome to Oxford Study & Consultancy, a dedicated study consultancy
          firm committed to transforming your educational aspirations into
          reality. Based in Narsingdi, Dhaka, Bangladesh. We bring together a
          team of seasoned professionals with extensive expertise in
          international education and migration. Our passion for excellence and
          personalized service sets us apart as a trusted partner in your
          journey toward global academic opportunities.
        </p>
      </div>

      {/* <!-- Our Expertise --> */}
      <div className="sm:flex items-center gap-8 sm:space-x-8 mt-14">
        <div className="relative">
          {/* <div className="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div> */}
          <h1 className="font-semibold text-2xl relative z-50 text-darken">
            Our <span className="text-yellow-500">Expertise</span>
          </h1>
          <p className="py-5 text-justify">
            Our experienced team specializes in providing comprehensive visa
            processing services for destinations including the USA, UK, Canada,
            Australia, Denmark, and various European countries. We Carefully
            guide you through every step of the application process, ensuring
            that your documents are in order and your profile stands out. In
            addition, we offer a range of language enhancement programs designed
            to equip you with the skills needed to excel in academic and
            professional settings abroad.
          </p>
        </div>
      </div>

      {/* <!-- IELTS Courses --> */}
      <div className="sm:flex flex-row-reverse items-center gap-8 sm:space-x-8 mt-14">
        <div className="sm:w-1/2 relative sm:left-3 lg:left-32">
          <div className="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
          <h1 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
            IELTS <span className="text-yellow-500">Courses</span>
          </h1>
          <p className="py-5 lg:pr-32">
            Whether you are preparing for the IELTS exam at a basic or advanced
            level, our tailored courses are structured to improve your language
            proficiency, boost your confidence, and help you achieve the scores
            required by top institutions worldwide.
          </p>
        </div>
        <div className="sm:w-1/2 relative !m-0 mt-10 sm:mt-0">
          <div
            style={{ background: "#23BDEE" }}
            className="floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"
          ></div>
          <img
            className="rounded-xl z-40 relative"
            src="/teacher-explaining.png"
            alt=""
          />
          <div className="bg-yellow-500 w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
        </div>
      </div>

      {/* <!-- English Language Courses --> */}
      <div className="sm:flex items-center gap-8 sm:space-x-8 mt-14">
        <div className="sm:w-1/2 relative">
          <div className="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
          <h1 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
            English Language <span className="text-yellow-500">Courses</span>
          </h1>
          <p className="py-5 lg:pr-32">
            Our comprehensive courses cater to varying levels of proficiency,
            from beginners to advanced learners. Each program is designed to
            build a strong foundation in English, facilitating effective
            communication and academic success in international environments.
          </p>
        </div>
        <div className="sm:w-1/2 relative !m-0 mt-10 sm:mt-0">
          <div
            style={{ background: "#23BDEE" }}
            className="floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"
          ></div>
          <img
            className="rounded-xl z-40 relative"
            src="/teacher-explaining.png"
            alt=""
          />
          <div className="bg-yellow-500 w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
        </div>
      </div>

      {/* <!-- Our Commitment --> */}
      <div className="sm:flex items-center gap-8 sm:space-x-8 mt-14">
        <div className="relative">
          {/* <div className="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div> */}
          <h1 className="font-semibold text-2xl relative z-50 text-darken">
            Our <span className="text-yellow-500">Commitment</span>
          </h1>
          <p className="py-5 text-justify">
            At the core of our consultancy is a commitment to personalized
            attention, integrity, and professionalism. We understand that each
            student’s journey is unique, which is why we strive to offer bespoke
            guidance and support. Our mission is to empower you with the
            knowledge, skills, and confidence to pursue your academic dreams on
            a global stage.
            <br />
            Embark on your educational journey with a team that values your
            ambition as much as you do. We are here to provide clear, expert
            advice and support tailored to your individual needs. Contact us
            today to learn how we can help you unlock the door to international
            study opportunities. Let us be your partner in achieving academic
            excellence and a brighter future.
          </p>
        </div>
      </div>

      {/* <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="font-bold text-darken mb-2 text-3xl">
          {" "}
          <span className="text-yellow-500">Who</span> are we
        </h1>

        <p className="leading-relaxed text-gray-500 text-justify md:text-center">
          **About Us** Welcome to Oxford Study & Consultancy, a dedicated study
          consultancy firm committed to transforming your educational
          aspirations into reality. Based in Narsingdi, Dhaka, Bangladesh. We
          bring together a team of seasoned professionals with extensive
          expertise in international education and migration. Our passion for
          excellence and personalized service sets us apart as a trusted partner
          in your journey toward global academic opportunities. **Our
          Expertise** Our experienced team specializes in providing
          comprehensive visa processing services for destinations including the
          USA, UK, Canada, Australia, Denmark, and various European countries.
          We Carefully guide you through every step of the application process,
          ensuring that your documents are in order and your profile stands out.
          In addition, we offer a range of language enhancement programs
          designed to equip you with the skills needed to excel in academic and
          professional settings abroad. **Our Programs** - **IELTS Courses:**
          Whether you are preparing for the IELTS exam at a basic or advanced
          level, our tailored courses are structured to improve your language
          proficiency, boost your confidence, and help you achieve the scores
          required by top institutions worldwide. - **English Language
          Courses:** Our comprehensive courses cater to varying levels of
          proficiency, from beginners to advanced learners. Each program is
          designed to build a strong foundation in English, facilitating
          effective communication and academic success in international
          environments. **Our Commitment** At the core of our consultancy is a
          commitment to personalized attention, integrity, and professionalism.
          We understand that each student’s journey is unique, which is why we
          strive to offer bespoke guidance and support. Our mission is to
          empower you with the knowledge, skills, and confidence to pursue your
          academic dreams on a global stage. **Get in Touch** Embark on your
          educational journey with a team that values your ambition as much as
          you do. We are here to provide clear, expert advice and support
          tailored to your individual needs. Contact us today to learn how we
          can help you unlock the door to international study opportunities. Let
          us be your partner in achieving academic excellence and a brighter
          future.
        </p>
      </div> */}
    </div>
  );
};
