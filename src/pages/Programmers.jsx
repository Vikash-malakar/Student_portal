import React from "react";

import {
  GraduationCap,
  ArrowRight,
  PlayCircle,
  Cpu,
  Users,
  Target,
  BriefcaseBusiness,
  MessageCircle,
  Rocket,
  Network,
  Building2,
  ChevronLeft,
  ChevronRight,
  School,
  MonitorPlay,
  RefreshCw,
  Phone
} from "lucide-react";

const Programmers = () => {
  const modes = [
    {
      title: "Classroom Training",
      description:
        "Learn directly from experienced trainers at Cybrom through interactive classroom sessions, practical coding exercises and hands-on projects.",
      icon: School,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Online Training",
      description:
        "Join live instructor-led classes from anywhere with interactive sessions, doubt support, practical assignments and project-based learning.",
      icon: MonitorPlay,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Hybrid Training",
      description:
        "Combine classroom learning with online sessions for greater flexibility, continuous mentor support and hands-on practice.",
      icon: RefreshCw,
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[620px] overflow-hidden bg-[#f5f9ff]">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#f5f9ff] via-[#f5f9ff]/95 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1400px] items-center">
          {/* LEFT CONTENT */}
          <div className="w-full px-6 py-16 md:px-12 lg:w-[52%] lg:px-14">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <GraduationCap size={17} />
              JOB-ORIENTED IT TRAINING
            </div>

            {/* Heading */}
            <h1 className="max-w-[620px] text-5xl font-extrabold leading-[1.05] tracking-tight text-[#101a35] md:text-6xl">
              Build Your
              <br />
              <span className="text-blue-600">Tech</span>{" "}
              <span className="text-[#08a38d]">Career</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[610px] text-base leading-7 text-slate-600 md:text-lg">
              Learn industry-relevant technologies through practical training,
              real-world projects, expert mentorship and career-focused
              programs designed to make you industry-ready.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="group flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl">
                Explore Courses

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600">
                <PlayCircle size={19} className="text-blue-600" />
                Talk to an Expert
              </button>
            </div>

            {/* Features */}
            <div className="mt-9 grid max-w-[650px] grid-cols-1 gap-4 sm:grid-cols-2">
              <Feature
                icon={<Cpu size={17} />}
                text="Industry-Relevant Curriculum"
              />

              <Feature
                icon={<BriefcaseBusiness size={17} />}
                text="Real-World Project Training"
              />

              <Feature
                icon={<Users size={17} />}
                text="Expert Mentorship"
              />

              <Feature
                icon={<Target size={17} />}
                text="Placement Assistance"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute right-0 top-0 hidden h-full w-[52%] lg:block">
            <img
              src="/cybrom_image.png"
              alt="Cybrom student learning technology"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#f5f9ff] via-[#f5f9ff]/35 to-transparent" />

            <div className="absolute right-20 top-20 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="absolute bottom-10 right-32 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* =====================================================
          CYBROM PROGRAMS SECTION
      ===================================================== */}

      <section className="w-full bg-white px-6 py-12 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1240px]">
          {/* DARK PROGRAM CARD */}
          <div className="rounded-[26px] bg-[#091d45] px-7 py-10 text-white shadow-[0_20px_45px_rgba(9,29,69,0.18)] md:px-10 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[330px_1fr] lg:gap-8">
              {/* LEFT CONTENT */}
              <div>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold">
                  <GraduationCap size={14} />
                  FOR STUDENTS & PROFESSIONALS
                </div>

                <h2 className="text-4xl font-extrabold leading-[1.08] md:text-5xl">
                  Choose Your
                  <br />
                  <span className="text-[#08b88d]">Career Path</span>
                </h2>

                <p className="mt-5 max-w-[320px] text-sm leading-6 text-slate-300">
                  Learn in-demand technologies through practical training,
                  real-world projects, expert mentorship and career-focused
                  programs at Cybrom.
                </p>
              </div>

              {/* RIGHT PROGRAMS */}
              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                <ProgramItem
                  icon={<Cpu size={21} />}
                  color="bg-blue-500"
                  title="FULL STACK"
                  heading="Web Development"
                  description="Python, Java, MERN Stack, React, Django and modern web development."
                />

                <ProgramItem
                  icon={<Rocket size={21} />}
                  color="bg-emerald-500"
                  title="AI & ML"
                  heading="Artificial Intelligence"
                  description="AI, Machine Learning, GenAI, AI Agents, MLOps and intelligent applications."
                />

                <ProgramItem
                  icon={<Network size={21} />}
                  color="bg-amber-500"
                  title="DATA"
                  heading="Data Science & Analytics"
                  description="Python, SQL, Power BI, statistics, visualization and real-world data projects."
                />

                <ProgramItem
                  icon={<Target size={21} />}
                  color="bg-red-500"
                  title="SECURITY"
                  heading="Cyber Security"
                  description="Cyber Security, Ethical Hacking, Cloud Security and AI-powered security."
                />

                <ProgramItem
                  icon={<BriefcaseBusiness size={21} />}
                  color="bg-purple-500"
                  title="CLOUD"
                  heading="DevOps & Cloud"
                  description="Cloud computing, DevOps, DevSecOps and modern deployment practices."
                />

                <ProgramItem
                  icon={<Users size={21} />}
                  color="bg-cyan-500"
                  title="DIGITAL"
                  heading="Digital Marketing"
                  description="Build practical digital marketing skills for today's online business world."
                />
              </div>
            </div>
          </div>

          {/* =====================================================
              CYBROM STATS
          ===================================================== */}

          <div className="mt-10 grid overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            <Stat
              icon={<Users size={22} />}
              number="25K+"
              label="Students Trained"
              iconBg="bg-blue-50"
              iconColor="text-blue-600"
            />

            <Stat
              icon={<Building2 size={22} />}
              number="500+"
              label="Hiring Partners"
              iconBg="bg-green-50"
              iconColor="text-green-600"
            />

            <Stat
              icon={<Target size={22} />}
              number="95%"
              label="Placement Assistance"
              iconBg="bg-amber-50"
              iconColor="text-amber-500"
            />

            <Stat
              icon={<GraduationCap size={22} />}
              number="120+"
              label="Expert Trainers"
              iconBg="bg-purple-50"
              iconColor="text-purple-600"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          AUDIENCE CAROUSEL
      ===================================================== */}

      <CybromAudienceCarousel />

      {/* =====================================================
          TRAINING MODES
      ===================================================== */}

      <section className="bg-[#f7f9fc] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold tracking-wide text-blue-600">
              <span className="text-base">✦</span>
              TRAINING MODES
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#111827] md:text-5xl">
              Learn <span className="text-blue-600">Online</span>,{" "}
              <span className="text-green-600">Offline</span> or Both
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-500 md:text-lg">
              Choose the learning mode that works best for you. Cybrom provides
              flexible training options with expert mentors, practical sessions
              and career-focused learning.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {modes.map((mode, index) => {
              const Icon = mode.icon;

              return (
                <div
                  key={index}
                  className={`min-h-[250px] rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    index === 1
                      ? "border-blue-200 shadow-sm"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${mode.bgColor}`}
                  >
                    <Icon
                      size={29}
                      strokeWidth={2.5}
                      className={mode.iconColor}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                    {mode.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] leading-6 text-[#64748b]">
                    {mode.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-10 py-12 bg-white">
  <div className="max-w-7xl mx-auto">
    <div
      className="
        relative overflow-hidden
        rounded-[24px]
        px-8 md:px-12
        py-10 md:py-9
        bg-gradient-to-r from-[#155E82] via-[#126B6B] to-[#137A4D]
        shadow-[0_20px_45px_rgba(30,90,140,0.18)]
        flex flex-col lg:flex-row
        items-center
        justify-between
        gap-8
      "
    >
      {/* Left Content */}
      <div className="text-white max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Not sure which programme fits?
        </h2>

        <p className="text-sm md:text-base text-white/90 leading-relaxed">
          Tell us the classes, the batch size and your timeline. We will map
          the right curriculum and delivery mode for you.
        </p>
      </div>

      {/* Right Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
        {/* Talk To Our Team */}
        <button
          onClick={() => {
            window.open(
              "https://wa.me/919926381513?text=Hi%20Cybrom,%20I%20want%20to%20know%20which%20training%20programme%20is%20right%20for%20me.",
              "_blank"
            );
          }}
          className="
            flex items-center justify-center gap-3
            px-7 py-4
            rounded-full
            bg-[#FFBE0B]
            text-[#111827]
            font-semibold
            text-sm
            shadow-lg
            hover:bg-[#ffca2c]
            hover:scale-105
            transition-all duration-300
            whitespace-nowrap
          "
        >
          Talk to Our Team
          <ArrowRight size={19} />
        </button>

        {/* Call Now */}
        <a
          href="tel:+919926381513"
          className="
            flex items-center justify-center gap-3
            px-7 py-4
            rounded-full
            border border-white/40
            text-white
            font-semibold
            text-sm
            hover:bg-white/10
            hover:border-white
            transition-all duration-300
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

      {/* =====================================================
          WHATSAPP BUTTON
      ===================================================== */}

      <a
        href="https://wa.me/9926381513"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
};

/* =====================================================
   FEATURE COMPONENT
===================================================== */

const Feature = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        {icon}
      </div>

      <span className="text-sm font-medium text-slate-600">{text}</span>
    </div>
  );
};

/* =====================================================
   PROGRAM ITEM COMPONENT
===================================================== */

const ProgramItem = ({
  icon,
  color,
  title,
  heading,
  description,
}) => {
  return (
    <div className="group">
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${color} shadow-lg transition duration-300 group-hover:scale-110`}
      >
        {icon}
      </div>

      <p className="text-xs font-bold text-slate-400">{title}</p>

      <h3 className="mt-1 text-sm font-bold text-white">{heading}</h3>

      <p className="mt-2 max-w-[210px] text-xs leading-5 text-slate-300">
        {description}
      </p>
    </div>
  );
};

/* =====================================================
   STAT COMPONENT
===================================================== */

const Stat = ({
  icon,
  number,
  label,
  iconBg,
  iconColor,
}) => {
  return (
    <div className="flex items-center gap-4 px-8 py-6">
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>

      <div>
        <h3 className="text-3xl font-extrabold leading-none text-[#101a35]">
          {number}
        </h3>

        <p className="mt-2 text-sm text-slate-500">{label}</p>
      </div>
    </div>
  );
};

/* =====================================================
   CYBROM AUDIENCE CAROUSEL
===================================================== */

/* =====================================================
   CYBROM AUDIENCE CAROUSEL
===================================================== */

const CybromAudienceCarousel = () => {
  const [active, setActive] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const cards = [
    {
      tag: "FOR STUDENTS",
      tagColor: "bg-blue-600",
      icon: "🎓",
      title: "Build Your IT Skills",
      description:
        "Start your technology journey with practical training in Full Stack Development, AI, Data Science and more.",
      button: "Explore Programs",
      buttonColor: "text-blue-600",
      image: "/cybrom_image.png",
    },

    {
      tag: "FOR JOB SEEKERS",
      tagColor: "bg-emerald-600",
      icon: "💼",
      title: "Become Job Ready",
      description:
        "Learn industry-relevant technologies, build real-world projects and prepare confidently for IT interviews.",
      button: "Start Learning",
      buttonColor: "text-emerald-600",
      image: "/cybrom_image.png",
    },

    {
      tag: "FOR PROFESSIONALS",
      tagColor: "bg-orange-500",
      icon: "🚀",
      title: "Upskill Your Career",
      description:
        "Upgrade your technical skills with AI, Cloud, Data Science, Cyber Security and modern development technologies.",
      button: "Upskill Now",
      buttonColor: "text-orange-500",
      image: "/cybrom_image.png",
    },

    {
      tag: "CAREER SWITCHERS",
      tagColor: "bg-purple-600",
      icon: "🔄",
      title: "Switch to IT",
      description:
        "Move towards a rewarding IT career with structured learning, hands-on projects and expert mentorship.",
      button: "View Programs",
      buttonColor: "text-purple-600",
      image: "/cybrom_image.png",
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
     AUTOMATIC SLIDER
  ===================================================== */

  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative overflow-hidden bg-white py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* =================================================
          HEADING
      ================================================= */}

      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>

            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-blue-50
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#2476E8]
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#2476E8]" />

              LEARN WITH CYBROM
            </div>

            <h2
              className="
                text-3xl
                font-extrabold
                leading-tight
                text-[#101a35]
                md:text-5xl
              "
            >
              Learning Designed{" "}
              <span className="text-[#2476E8]">
                For You
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-slate-500
                md:text-base
              "
            >
              Whether you are a student, job seeker,
              working professional or planning a career
              switch, Cybrom has a learning path for you.
            </p>

          </div>


          {/* Desktop Controls */}

          <div className="hidden items-center gap-3 md:flex">

            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-600
                shadow-sm
                transition-all
                duration-300
                hover:border-[#2476E8]
                hover:bg-blue-50
                hover:text-[#2476E8]
              "
            >
              <ChevronLeft size={21} />
            </button>


            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#2476E8]
                text-white
                shadow-lg
                shadow-blue-500/20
                transition-all
                duration-300
                hover:bg-[#1764d0]
                hover:scale-105
              "
            >
              <ChevronRight size={21} />
            </button>

          </div>

        </div>


        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div className="relative overflow-hidden rounded-[30px]">

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

            {cards.map((card, index) => (

              <div
                key={index}
                className="
                  min-w-full
                  px-1
                "
              >

                <div
                  className="
                    relative
                    min-h-[360px]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-gradient-to-br
                    from-[#f8fbff]
                    to-white
                    shadow-[0_15px_50px_rgba(15,23,42,0.08)]
                  "
                >

                  {/* Background Decoration */}

                  <div
                    className="
                      absolute
                      -right-24
                      -top-24
                      h-72
                      w-72
                      rounded-full
                      bg-blue-100/60
                      blur-3xl
                    "
                  />

                  <div
                    className="
                      absolute
                      -bottom-28
                      left-1/3
                      h-72
                      w-72
                      rounded-full
                      bg-emerald-100/40
                      blur-3xl
                    "
                  />


                  {/* Content */}

                  <div
                    className="
                      relative
                      z-10
                      grid
                      min-h-[360px]
                      grid-cols-1
                      lg:grid-cols-2
                    "
                  >

                    {/* LEFT */}

                    <div
                      className="
                        flex
                        flex-col
                        justify-center
                        px-7
                        py-10
                        md:px-12
                        lg:px-16
                      "
                    >

                      {/* Tag */}

                      <div
                        className={`
                          mb-5
                          flex
                          w-fit
                          items-center
                          gap-2
                          rounded-full
                          px-4
                          py-2
                          text-xs
                          font-bold
                          tracking-wide
                          text-white
                          ${card.tagColor}
                        `}
                      >
                        <span>
                          {card.icon}
                        </span>

                        {card.tag}
                      </div>


                      {/* Title */}

                      <h3
                        className="
                          max-w-xl
                          text-3xl
                          font-extrabold
                          leading-tight
                          text-[#101a35]
                          md:text-4xl
                          lg:text-5xl
                        "
                      >
                        {card.title}
                      </h3>


                      {/* Description */}

                      <p
                        className="
                          mt-5
                          max-w-xl
                          text-sm
                          leading-7
                          text-slate-500
                          md:text-base
                        "
                      >
                        {card.description}
                      </p>


                      {/* Button */}

                      <button
                        className={`
                          group
                          mt-7
                          flex
                          w-fit
                          items-center
                          gap-2
                          text-sm
                          font-bold
                          ${card.buttonColor}
                        `}
                      >
                        {card.button}

                        <ArrowRight
                          size={18}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </button>

                    </div>


                    {/* RIGHT IMAGE */}

                    <div
                      className="
                        relative
                        hidden
                        min-h-[360px]
                        overflow-hidden
                        lg:block
                      "
                    >

                      {/* Image Background */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-br
                          from-blue-100
                          via-blue-50
                          to-emerald-50
                        "
                      />


                      {/* Image */}

                      <img
                        src={card.image}
                        alt={card.title}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          hover:scale-105
                        "
                      />


                      {/* Overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-r
                          from-white/10
                          via-transparent
                          to-blue-900/10
                        "
                      />

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =================================================
            MOBILE CONTROLS
        ================================================= */}

        <div className="mt-6 flex items-center justify-between md:hidden">

          <button
            onClick={prevSlide}
            className="
              flex
              h-11
              w-11
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


          {/* Dots */}

          <div className="flex items-center gap-2">

            {cards.map((_, index) => (

              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Go to slide ${index + 1}`}
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
              h-11
              w-11
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

        <div className="mt-7 hidden items-center justify-center gap-2 md:flex">

          {cards.map((_, index) => (

            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  active === index
                    ? "w-9 bg-[#2476E8]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }
              `}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Programmers;

