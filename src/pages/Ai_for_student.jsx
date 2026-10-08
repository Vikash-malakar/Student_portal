import React, { useState } from "react";

import {
  GraduationCap,
    CheckCircle2,
    XCircle,
  Cpu,
  Target,
  BriefcaseBusiness,
  Rocket,
  ArrowRight,
  MessageCircle,
  Building2,
   Plus, 
   Minus ,
   Users,
  MapPin,
  ChevronLeft ,
   
  ChevronRight,
  Phone,
 
} from "lucide-react";

const Ai_for_student = () => {
    const [openFaq, setOpenFaq] = React.useState(null);
    const faqs = [
  {
    question: "Who can join Cybrom training programmes?",
    answer:
      "Cybrom programmes are designed for students, freshers, job seekers and working professionals who want to build or upgrade their IT skills."
  },
  {
    question: "Do I need prior programming knowledge?",
    answer:
      "No. Many of our programmes are beginner-friendly. The curriculum starts with the fundamentals and gradually moves towards advanced concepts and practical projects."
  },
  {
    question: "Which technologies can I learn at Cybrom?",
    answer:
      "You can learn technologies and domains such as Python, Django, React, Full Stack Development, Data Science, AI & ML, SQL, Cloud, Cyber Security and other industry-relevant skills."
  },
  {
    question: "Is the training classroom-based or online?",
    answer:
      "Cybrom provides flexible learning options including classroom training, online training and selected hybrid programmes depending on the course."
  },
  {
    question: "Will I work on real-world projects?",
    answer:
      "Yes. Practical assignments and real-world projects are an important part of the learning experience so you can build your portfolio and apply your technical knowledge."
  },
  {
    question: "Does Cybrom provide career and placement guidance?",
    answer:
      "Yes. Students receive career guidance, resume support, interview preparation and technical interview practice to help them prepare for IT job opportunities."
  }
];
  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[620px] overflow-hidden bg-[#f4f8ff]">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/cybrom_image.png"
            alt="Cybrom IT Training"
            className="w-full h-full object-cover object-center"
          />

          {/* Left Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4f8ff] via-[#f4f8ff]/95 to-transparent" />

          {/* Bottom Soft Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f4f8ff]/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-20">
          <div className="max-w-[620px]">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-7">
              <span>Home</span>
              <span>/</span>
              <span className="text-slate-700">
                IT Training & Career Programs
              </span>
            </div>

            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-green-100
                text-green-700
                text-sm font-semibold
                mb-6
              "
            >
              <GraduationCap size={18} />
              CAREER-FOCUSED IT TRAINING
            </div>

            {/* Heading */}
            <h1
              className="
                text-5xl
                md:text-6xl
                lg:text-[64px]
                leading-[1.05]
                font-bold
                text-[#111827]
              "
            >
              Build Your{" "}
              <span className="text-[#2476E8]">
                Tech Career
              </span>{" "}
              with{" "}
              <span className="text-[#16804B]">
                Cybrom
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base md:text-lg leading-7 text-slate-600 max-w-[590px]">
              Learn industry-ready skills with practical IT training
              designed for students, freshers and working professionals.
              Build real projects, strengthen your technical skills and
              prepare yourself for a successful career in the IT industry.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              {/* Explore Programs */}
              <button
                onClick={() => {
                  document
                    .getElementById("programs")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-4
                  rounded-full
                  bg-[#2476E8]
                  text-white
                  font-semibold
                  shadow-lg
                  shadow-blue-500/25
                  hover:bg-[#1764d0]
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                Explore Our Programs

                <ArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {/* Talk to Counsellor */}
              <a
                href="https://wa.me/919926381513?text=Hi%20Cybrom,%20I%20want%20to%20know%20about%20your%20IT%20training%20programs."
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-4
                  rounded-full
                  bg-white
                  border
                  border-slate-200
                  text-slate-800
                  font-semibold
                  shadow-sm
                  hover:border-green-400
                  hover:text-green-600
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                <MessageCircle
                  size={19}
                  className="text-green-500"
                />

                Talk to a Counsellor
              </a>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          WHAT'S INCLUDED SECTION
      ===================================================== */}
      <section className="bg-white py-20 px-6 md:px-10">

        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-14">

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                border
                border-blue-200
                bg-blue-50
                text-[#2476E8]
                text-sm
                font-semibold
                mb-6
              "
            >
              <GraduationCap size={17} />
              WHAT'S INCLUDED
            </div>

            {/* Heading */}
            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-[#111827]
                tracking-tight
              "
            >
              What You Get at{" "}
              <span className="text-[#2476E8]">
                Cybrom
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-base md:text-lg text-slate-500">
              Everything you need to learn, build and become
              industry-ready.
            </p>

          </div>


          {/* =================================================
              BENEFITS GRID
          ================================================= */}
         <CybromBenefitsCarousel />
        </div>
      </section>


      {/* =====================================================
          FLOATING WHATSAPP BUTTON
      ===================================================== */}
      <a
        href="https://wa.me/919926381513"
        target="_blank"
        rel="noreferrer"
        className="
          fixed
          bottom-6
          right-6
          z-50
          w-16
          h-16
          rounded-full
          bg-[#25D366]
          text-white
          flex
          items-center
          justify-center
          shadow-xl
          shadow-green-500/30
          hover:scale-110
          transition-transform
          duration-300
        "
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      {/* =====================================================
    HOW THE PROGRAMME RUNS
===================================================== */}
<section className="bg-[#f3f8fd] py-20 px-6 md:px-10">
  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16">

      {/* =================================================
          LEFT - PROGRAMME STEPS
      ================================================= */}
      <div>

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
            How the{" "}
            <span className="text-[#2476E8]">
              Programme Runs
            </span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-500 max-w-xl leading-7">
            From your first counselling session to becoming
            industry-ready, your Cybrom learning journey moves
            through five practical stages.
          </p>
        </div>


        {/* Timeline */}
        <div className="relative ml-4 md:ml-5">

          {/* Vertical Line */}
          <div className="absolute left-[16px] top-4 bottom-0 w-[2px] bg-[#2476E8]" />

          {/* STEP 01 */}
          <div className="relative flex gap-5 pb-8">

            <div
              className="
                relative z-10
                w-[34px] h-[34px]
                shrink-0
                rounded-full
                border-2
                border-[#2476E8]
                bg-white
                text-[#2476E8]
                flex items-center justify-center
                text-sm font-bold
              "
            >
              01
            </div>

            <div className="pt-0">
              <h3 className="text-lg md:text-xl font-bold text-[#111827]">
                01 — Career Counselling
              </h3>

              <p className="mt-1 text-sm md:text-base text-slate-500 leading-6 max-w-2xl">
                Understand your goals, interests and current skill level.
                Our counsellors help you choose the right technology
                programme for your career.
              </p>
            </div>

          </div>


          {/* STEP 02 */}
          <div className="relative flex gap-5 pb-8">

            <div
              className="
                relative z-10
                w-[34px] h-[34px]
                shrink-0
                rounded-full
                border-2
                border-[#2476E8]
                bg-white
                text-[#2476E8]
                flex items-center justify-center
                text-sm font-bold
              "
            >
              02
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#111827]">
                02 — Structured Learning
              </h3>

              <p className="mt-1 text-sm md:text-base text-slate-500 leading-6 max-w-2xl">
                Learn programming, development, data, AI and other
                industry-relevant technologies through a structured
                curriculum designed for practical learning.
              </p>
            </div>

          </div>


          {/* STEP 03 */}
          <div className="relative flex gap-5 pb-8">

            <div
              className="
                relative z-10
                w-[34px] h-[34px]
                shrink-0
                rounded-full
                border-2
                border-[#2476E8]
                bg-white
                text-[#2476E8]
                flex items-center justify-center
                text-sm font-bold
              "
            >
              03
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#111827]">
                03 — Hands-on Practice
              </h3>

              <p className="mt-1 text-sm md:text-base text-slate-500 leading-6 max-w-2xl">
                Apply concepts through coding exercises, assignments
                and real-world projects so that you learn by building,
                not just by watching.
              </p>
            </div>

          </div>


          {/* STEP 04 */}
          <div className="relative flex gap-5 pb-8">

            <div
              className="
                relative z-10
                w-[34px] h-[34px]
                shrink-0
                rounded-full
                border-2
                border-[#2476E8]
                bg-white
                text-[#2476E8]
                flex items-center justify-center
                text-sm font-bold
              "
            >
              04
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#111827]">
                04 — Projects & Assessment
              </h3>

              <p className="mt-1 text-sm md:text-base text-slate-500 leading-6 max-w-2xl">
                Work on portfolio-ready projects, regular assessments
                and practical tasks to measure your progress and
                strengthen your technical foundation.
              </p>
            </div>

          </div>


          {/* STEP 05 */}
          <div className="relative flex gap-5">

            <div
              className="
                relative z-10
                w-[34px] h-[34px]
                shrink-0
                rounded-full
                border-2
                border-[#2476E8]
                bg-white
                text-[#2476E8]
                flex items-center justify-center
                text-sm font-bold
              "
            >
              05
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#111827]">
                05 — Career & Placement Preparation
              </h3>

              <p className="mt-1 text-sm md:text-base text-slate-500 leading-6 max-w-2xl">
                Prepare for interviews, improve your resume, practise
                technical questions and build the confidence required
                to step into the IT industry.
              </p>
            </div>

          </div>

        </div>
      </div>


      {/* =================================================
          RIGHT - REQUIREMENTS
      ================================================= */}
      <div className="space-y-6">

        {/* What You Get */}
        <div
          className="
            bg-white
            rounded-3xl
            p-7 md:p-8
            shadow-sm
            border border-slate-100
          "
        >

          <h3 className="flex items-center gap-3 text-xl font-bold text-[#111827] mb-6">
            <span
              className="
                w-9 h-9
                rounded-full
                bg-green-50
                text-green-600
                flex items-center justify-center
              "
            >
              <CheckCircle2 size={20} />
            </span>

            What You Get
          </h3>


          <div className="space-y-5">

            <div className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="text-green-600 mt-0.5 shrink-0"
              />
              <span className="text-sm md:text-base text-slate-600">
                Expert-led practical IT training
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="text-green-600 mt-0.5 shrink-0"
              />
              <span className="text-sm md:text-base text-slate-600">
                Real-world projects and assignments
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="text-green-600 mt-0.5 shrink-0"
              />
              <span className="text-sm md:text-base text-slate-600">
                Live classroom and online learning options
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="text-green-600 mt-0.5 shrink-0"
              />
              <span className="text-sm md:text-base text-slate-600">
                Projects for your portfolio
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="text-green-600 mt-0.5 shrink-0"
              />
              <span className="text-sm md:text-base text-slate-600">
                Interview and placement preparation
              </span>
            </div>

          </div>
        </div>


        {/* What You Don't Need */}
        <div
          className="
            bg-white
            rounded-3xl
            p-7 md:p-8
            shadow-sm
            border border-slate-100
          "
        >

          <h3 className="flex items-center gap-3 text-xl font-bold text-[#111827] mb-6">
            <span
              className="
                w-9 h-9
                rounded-full
                bg-red-50
                text-red-500
                flex items-center justify-center
              "
            >
              <XCircle size={20} />
            </span>

            What You Don't Need
          </h3>


          <div className="space-y-5">

            <div className="flex items-start gap-3">
              <XCircle
                size={18}
                className="text-red-500 mt-0.5 shrink-0"
              />
              <span className="text-sm md:text-base text-slate-600">
                Prior professional IT experience
              </span>
            </div>

            <div className="flex items-start gap-3">
              <XCircle
                size={18}
                className="text-red-500 mt-0.5 shrink-0"
              />
              <span className="text-sm md:text-base text-slate-600">
                Advanced programming knowledge
              </span>
            </div>

            <div className="flex items-start gap-3">
              <XCircle
                size={18}
                className="text-red-500 mt-0.5 shrink-0"
              />
              <span className="text-sm md:text-base text-slate-600">
                Expensive hardware or software
              </span>
            </div>

            <div className="flex items-start gap-3">
              <XCircle
                size={18}
                className="text-red-500 mt-0.5 shrink-0"
              />
              <span className="text-sm md:text-base text-slate-600">
                Perfect technical background
              </span>
            </div>

            <div className="flex items-start gap-3">
              <XCircle
                size={18}
                className="text-red-500 mt-0.5 shrink-0"
              />
              <span className="text-sm md:text-base text-slate-600">
                Previous project experience
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</section>

{/* =====================================================
    CYBROM STATS SECTION
===================================================== */}
<section className="bg-[#f3f8fd] px-6 md:px-10 pb-20">
  <div className="max-w-7xl mx-auto">

    <div
      className="
        bg-gradient-to-r
        from-[#1949A5]
        via-[#1853BA]
        to-[#1E5ACB]
        rounded-2xl
        px-8
        md:px-10
        py-6
        shadow-[0_15px_35px_rgba(25,73,165,0.20)]
      "
    >

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">

        {/* Stat 1 */}
        <div className="flex items-center gap-4">
          <div
            className="
              w-12 h-12
              shrink-0
              rounded-full
              bg-white/20
              flex items-center justify-center
              text-white
            "
          >
            <Building2 size={23} />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              20+
            </h3>

            <p className="text-sm text-white/80 font-medium">
              Years of Excellence
            </p>
          </div>
        </div>


        {/* Stat 2 */}
        <div className="flex items-center gap-4">
          <div
            className="
              w-12 h-12
              shrink-0
              rounded-full
              bg-green-500/80
              flex items-center justify-center
              text-white
            "
          >
            <GraduationCap size={23} />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              10,000+
            </h3>

            <p className="text-sm text-white/80 font-medium">
              Students Trained
            </p>
          </div>
        </div>


        {/* Stat 3 */}
        <div className="flex items-center gap-4">
          <div
            className="
              w-12 h-12
              shrink-0
              rounded-full
              bg-cyan-500/80
              flex items-center justify-center
              text-white
            "
          >
            <Users size={23} />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              25+
            </h3>

            <p className="text-sm text-white/80 font-medium">
              Industry Programs
            </p>
          </div>
        </div>


        {/* Stat 4 */}
        <div className="flex items-center gap-4">
          <div
            className="
              w-12 h-12
              shrink-0
              rounded-full
              bg-teal-500/80
              flex items-center justify-center
              text-white
            "
          >
            <MapPin size={23} />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              2+
            </h3>

            <p className="text-sm text-white/80 font-medium">
              Training Locations
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>


{/* =====================================================
    COMMON QUESTIONS / FAQ
===================================================== */}
<section className="bg-white py-20 px-6 md:px-10">

  <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">

      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#111827]
          tracking-tight
        "
      >
        Common{" "}
        <span className="text-[#2476E8]">
          Questions
        </span>
      </h2>

      <p className="mt-4 text-base md:text-lg text-slate-500">
        Everything you need to know about learning at Cybrom.
      </p>

    </div>


    {/* FAQ List */}
    <div className="space-y-3">

      {faqs.map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <div
            key={index}
            className={`
              rounded-2xl
              border
              transition-all
              duration-300
              overflow-hidden
              ${
                isOpen
                  ? "border-blue-200 shadow-md bg-blue-50/30"
                  : "border-slate-200 bg-white"
              }
            `}
          >

            {/* Question */}
            <button
              onClick={() =>
                setOpenFaq(isOpen ? null : index)
              }
              className="
                w-full
                flex
                items-center
                justify-between
                gap-5
                px-7
                py-5
                text-left
                hover:bg-slate-50
                transition-colors
              "
            >

              <span
                className={`
                  text-base
                  md:text-lg
                  font-semibold
                  ${
                    isOpen
                      ? "text-[#2476E8]"
                      : "text-[#1F2937]"
                  }
                `}
              >
                {faq.question}
              </span>

              <span
                className={`
                  shrink-0
                  w-8
                  h-8
                  rounded-full
                  flex
                  items-center
                  justify-center
                  transition-all
                  ${
                    isOpen
                      ? "bg-[#2476E8] text-white"
                      : "bg-blue-50 text-[#2476E8]"
                  }
                `}
              >
                {isOpen ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}
              </span>

            </button>


            {/* Answer */}
            <div
              className={`
                grid
                transition-all
                duration-300
                ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >
              <div className="overflow-hidden">

                <p className="px-7 pb-6 pr-16 text-sm md:text-base leading-7 text-slate-500">
                  {faq.answer}
                </p>

              </div>
            </div>

          </div>
        );
      })}

    </div>

  </div>

</section>

{/* =====================================================
    FINAL CTA SECTION
===================================================== */}
<section className="bg-white px-6 md:px-10 py-16">

  <div className="max-w-7xl mx-auto">

    <div
      className="
        relative
        overflow-hidden
        rounded-[24px]
        px-7
        md:px-10
        py-8
        md:py-9
        bg-gradient-to-r
        from-[#1557B8]
        via-[#126B6B]
        to-[#16843F]
        shadow-[0_20px_45px_rgba(25,80,150,0.20)]
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-7
      "
    >

      {/* Left Content */}
      <div className="flex items-center gap-6">

        {/* Image */}
        <div
          className="
            hidden
            sm:flex
            w-[120px]
            h-[80px]
            shrink-0
            rounded-xl
            overflow-hidden
            border-2
            border-white/70
            bg-white/20
          "
        >
          <img
            src="/cybrom_image.png"
            alt="Cybrom Training"
            className="w-full h-full object-cover"
          />
        </div>


        {/* Text */}
        <div className="text-white">

          <h2
            className="
              text-2xl
              md:text-3xl
              font-bold
              leading-tight
            "
          >
            Start Your IT Career with Cybrom
          </h2>

          <p
            className="
              mt-2
              text-sm
              md:text-base
              text-white/90
              leading-6
              max-w-xl
            "
          >
            Tell us about your career goals and we'll help you
            choose the right programme, batch and learning mode.
          </p>

        </div>

      </div>


      {/* Right Buttons */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          gap-3
          shrink-0
        "
      >

        {/* Talk to Counsellor */}
        <a
          href="https://wa.me/919926381513?text=Hi%20Cybrom,%20I%20want%20to%20know%20about%20your%20IT%20training%20programmes."
          target="_blank"
          rel="noreferrer"
          className="
            group
            flex
            items-center
            justify-center
            gap-3
            px-7
            py-4
            rounded-full
            bg-[#FFBE0B]
            text-[#111827]
            font-semibold
            text-sm
            shadow-lg
            hover:bg-[#ffca2c]
            hover:scale-105
            transition-all
            duration-300
            whitespace-nowrap
          "
        >
          Talk to a Counsellor

          <ArrowRight
            size={18}
            className="
              group-hover:translate-x-1
              transition-transform
            "
          />
        </a>


        {/* Call Now */}
        <a
          href="tel:+919926381513"
          className="
            flex
            items-center
            justify-center
            gap-2
            px-7
            py-4
            rounded-full
            border
            border-white/40
            text-white
            font-semibold
            text-sm
            hover:bg-white/10
            hover:border-white
            transition-all
            duration-300
            whitespace-nowrap
          "
        >
          <Phone size={18} />

          Call Now
        </a>

      </div>

    </div>

  </div>

</section>


    </>
  );
};
/* =====================================================
   CYBROM BENEFITS CAROUSEL
===================================================== */

const CybromBenefitsCarousel = () => {
  const [active, setActive] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const cards = [
    {
      icon: GraduationCap,
      title: "Industry-Ready Training",
      description:
        "Learn the latest technologies and practical skills required by today's IT industry.",
      iconBg: "bg-blue-50",
      iconColor: "text-[#2476E8]",
      hoverBg: "group-hover:bg-[#2476E8]",
      hoverBorder: "hover:border-blue-200",
    },

    {
      icon: Cpu,
      title: "Hands-on Projects",
      description:
        "Build real-world projects that strengthen your portfolio and practical development skills.",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      hoverBg: "group-hover:bg-green-600",
      hoverBorder: "hover:border-green-200",
    },

    {
      icon: Users,
      title: "Expert Mentorship",
      description:
        "Get guidance from experienced trainers who help you understand concepts and solve real problems.",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      hoverBg: "group-hover:bg-purple-600",
      hoverBorder: "hover:border-purple-200",
    },

    {
      icon: BriefcaseBusiness,
      title: "Career Preparation",
      description:
        "Prepare for interviews, improve your resume and develop the confidence needed for IT careers.",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      hoverBg: "group-hover:bg-orange-500",
      hoverBorder: "hover:border-orange-200",
    },

    {
      icon: Target,
      title: "Placement Guidance",
      description:
        "Get structured guidance to improve your job search and move confidently towards your career goals.",
      iconBg: "bg-pink-50",
      iconColor: "text-pink-500",
      hoverBg: "group-hover:bg-pink-500",
      hoverBorder: "hover:border-pink-200",
    },

    {
      icon: Rocket,
      title: "Career Growth",
      description:
        "Build a strong technical foundation and take the next step towards long-term career growth.",
      iconBg: "bg-teal-50",
      iconColor: "text-teal-600",
      hoverBg: "group-hover:bg-teal-600",
      hoverBorder: "hover:border-teal-200",
    },
  ];

  /* =====================================================
     NEXT SLIDE
  ===================================================== */

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  /* =====================================================
     PREVIOUS SLIDE
  ===================================================== */

  const prevSlide = () => {
    setActive(
      (prev) => (prev - 1 + cards.length) % cards.length
    );
  };

  /* =====================================================
     AUTOMATIC SLIDE
  ===================================================== */

  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, cards.length]);

  return (
    <section
      className="bg-white py-16 md:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* =================================================
          SECTION HEADING
      ================================================= */}

      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <div className="mb-10 text-center">

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-5
              py-2
              text-sm
              font-semibold
              text-[#2476E8]
            "
          >
            <GraduationCap size={17} />

            WHAT'S INCLUDED
          </div>

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-[#111827]
              md:text-5xl
            "
          >
            What You Get at{" "}
            <span className="text-[#2476E8]">
              Cybrom
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-slate-500
              md:text-lg
            "
          >
            Everything you need to learn, build and become
            industry-ready.
          </p>

        </div>


        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div className="relative mx-auto max-w-5xl">

          {/* LEFT ARROW */}

          <button
            onClick={prevSlide}
            aria-label="Previous card"
            className="
              absolute
              left-0
              top-1/2
              z-20
              hidden
              h-12
              w-12
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-600
              shadow-lg
              transition-all
              duration-300
              hover:border-[#2476E8]
              hover:bg-blue-50
              hover:text-[#2476E8]
              md:flex
            "
          >
            <ChevronLeft size={22} />
          </button>


          {/* CAROUSEL WINDOW */}

          <div className="overflow-hidden rounded-3xl">

            {/* CAROUSEL TRACK */}

            <div
              className="
                flex
                transition-transform
                duration-700
                ease-in-out
              "
              style={{
                transform: `translateX(-${active * 100}%)`,
              }}
            >

              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={index}
                    className="
                      min-w-full
                      px-2
                    "
                  >

                    <div
                      className={`
                        group
                        mx-auto
                        max-w-3xl
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        p-8
                        shadow-[0_10px_40px_rgba(15,23,42,0.07)]
                        transition-all
                        duration-300
                        md:p-10
                        ${card.hoverBorder}
                        hover:-translate-y-1
                        hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]
                      `}
                    >

                      {/* TOP */}

                      <div
                        className="
                          flex
                          flex-col
                          items-start
                          gap-6
                          sm:flex-row
                          sm:items-center
                        "
                      >

                        {/* ICON */}

                        <div
                          className={`
                            flex
                            h-16
                            w-16
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            ${card.iconBg}
                            ${card.iconColor}
                            ${card.hoverBg}
                            group-hover:text-white
                            transition-all
                            duration-300
                          `}
                        >
                          <Icon size={30} />
                        </div>


                        {/* TITLE */}

                        <div>

                          <p
                            className="
                              mb-2
                              text-xs
                              font-bold
                              uppercase
                              tracking-wider
                              text-[#2476E8]
                            "
                          >
                            Cybrom Advantage
                          </p>

                          <h3
                            className="
                              text-2xl
                              font-bold
                              text-[#111827]
                              md:text-3xl
                            "
                          >
                            {card.title}
                          </h3>

                        </div>

                      </div>


                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-6
                          max-w-2xl
                          text-sm
                          leading-7
                          text-slate-500
                          md:text-base
                        "
                      >
                        {card.description}
                      </p>


                      {/* BOTTOM */}

                      <div
                        className="
                          mt-7
                          flex
                          items-center
                          justify-between
                          border-t
                          border-slate-100
                          pt-6
                        "
                      >

                        <span
                          className="
                            text-sm
                            font-semibold
                            text-slate-400
                          "
                        >
                          Learn • Build • Grow
                        </span>

                        <span
                          className="
                            text-sm
                            font-bold
                            text-[#2476E8]
                          "
                        >
                          Cybrom Training
                        </span>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>


          {/* RIGHT ARROW */}

          <button
            onClick={nextSlide}
            aria-label="Next card"
            className="
              absolute
              right-0
              top-1/2
              z-20
              hidden
              h-12
              w-12
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#2476E8]
              text-white
              shadow-lg
              shadow-blue-500/20
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#1764d0]
              md:flex
            "
          >
            <ChevronRight size={22} />
          </button>

        </div>


        {/* =================================================
            MOBILE ARROWS
        ================================================= */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-4
            md:hidden
          "
        >

          <button
            onClick={prevSlide}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-600
              shadow-sm
            "
          >
            <ChevronLeft size={19} />
          </button>


          {/* DOTS */}

          <div className="flex items-center gap-2">

            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Go to card ${index + 1}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    active === index
                      ? "w-8 bg-[#2476E8]"
                      : "w-2 bg-slate-300"
                  }
                `}
              />
            ))}

          </div>


          <button
            onClick={nextSlide}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#2476E8]
              text-white
              shadow-md
            "
          >
            <ChevronRight size={19} />
          </button>

        </div>


        {/* =================================================
            DESKTOP DOTS
        ================================================= */}

        <div
          className="
            mt-8
            hidden
            items-center
            justify-center
            gap-2
            md:flex
          "
        >

          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Go to card ${index + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  active === index
                    ? "w-8 bg-[#2476E8]"
                    : "w-2 bg-slate-300"
                }
              `}
            />
          ))}

        </div>

      </div>

    </section>
  );
};
export default Ai_for_student;