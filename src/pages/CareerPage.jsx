import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  MapPin,
  Briefcase,
  Award,
} from "lucide-react";

const CareerPage = () => {
  return (
    <div className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/50 py-20 lg:py-28">

        {/* Background decoration */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left */}
            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600">
                <Sparkles className="h-4 w-4" />
                We're Hiring Educators
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

                Build Your Career.
                <br />

                Shape the Future of{" "}

                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AI Education.
                </span>

              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Join our educator community and help students build
                future-ready skills. We train, certify and support educators
                who are passionate about making a difference in classrooms.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-700/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href="#role"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700"
                >
                  Explore the Role
                </a>

              </div>

              <div className="mt-7 flex flex-wrap gap-5 text-sm font-medium text-slate-600">

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  Future-ready education
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  Educator training
                </div>

              </div>

            </div>

            {/* Right - Career Visual */}
            <div className="relative">

              <div className="rounded-3xl bg-slate-950 p-3 shadow-2xl shadow-blue-900/20">

                {/* Browser Header */}
                <div className="rounded-t-2xl bg-slate-900 px-5 py-4">

                  <div className="flex items-center justify-between">

                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>

                    <span className="font-mono text-xs text-blue-300">
                      CAREER://AI_EDUCATOR
                    </span>

                    <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 font-mono text-[10px] text-emerald-400">
                      OPEN
                    </span>

                  </div>

                </div>

                {/* Main Visual */}
                <div className="relative overflow-hidden rounded-b-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 px-7 py-12">

                  <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#3b82f6_1px,transparent_1px)] [background-size:28px_28px]" />
                  </div>

                  <div className="relative text-center">

                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl shadow-blue-500/30">

                      <GraduationCap className="h-12 w-12 text-white" />

                    </div>

                    <h2 className="mt-7 text-2xl font-extrabold text-white">
                      AI Educator
                    </h2>

                    <p className="mt-2 text-sm text-blue-200">
                      Learn • Teach • Inspire
                    </p>

                    <div className="mx-auto mt-8 max-w-sm rounded-xl border border-blue-400/20 bg-white/5 px-5 py-4 backdrop-blur">

                      <p className="font-mono text-sm text-blue-300">
                        educator.prepare()
                      </p>

                      <p className="mt-2 font-mono text-sm text-emerald-400">
                        → impact = 100%
                      </p>

                    </div>

                  </div>

                  <div className="relative mt-10 flex items-center justify-between border-t border-white/10 pt-5 text-xs">

                    <span className="text-slate-400">
                      Future Skills Initiative
                    </span>

                    <span className="font-bold text-orange-400">
                      2026
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-16 lg:py-20">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 lg:px-8">

          {/* Card 1 */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl transition group-hover:bg-blue-600 group-hover:text-white">
              🎯
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Meaningful Impact
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Help students become confident and future-ready learners
              through practical technology education.
            </p>

          </div>


          {/* Card 2 */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl transition group-hover:bg-indigo-600 group-hover:text-white">
              📚
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Learn & Grow
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Get structured training and continuously improve your
              teaching and AI skills.
            </p>

          </div>


          {/* Card 3 */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl transition group-hover:bg-purple-600 group-hover:text-white">
              🇮🇳
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Be Part of a Mission
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Become part of a growing community working towards a
              more skilled and digitally empowered India.
            </p>

          </div>

        </div>

      </section>


      {/* ================= QUOTE ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-6 py-20 text-center text-white">

        <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <p className="text-3xl font-extrabold leading-relaxed sm:text-4xl lg:text-5xl">
            "Better Educators,
            <span className="block text-blue-100">
              Brighter Futures."
            </span>
          </p>

        </div>

      </section>


      {/* ================= ROLE ================= */}
      <section id="role" className="py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              The Role
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Join Us as an AI Educator
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Help students and educators understand AI through practical,
              engaging and meaningful learning experiences.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Role */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200 hover:bg-blue-50/40">

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Briefcase className="h-5 w-5" />
              </div>

              <h3 className="font-bold text-blue-700">
                Role
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                AI Educator / Trainer working with school students
                and teacher-training batches.
              </p>

            </div>


            {/* Work Mode */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-indigo-200 hover:bg-indigo-50/40">

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                <GraduationCap className="h-5 w-5" />
              </div>

              <h3 className="font-bold text-indigo-700">
                Work Mode
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hybrid work including school sessions, online training,
                planning and mentoring.
              </p>

            </div>


            {/* Location */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-purple-200 hover:bg-purple-50/40">

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                <MapPin className="h-5 w-5" />
              </div>

              <h3 className="font-bold text-purple-700">
                Locations
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Opportunities across different project states and
                assigned locations.
              </p>

            </div>


            {/* Certification */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-orange-200 hover:bg-orange-50/40">

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Award className="h-5 w-5" />
              </div>

              <h3 className="font-bold text-orange-600">
                Certification
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Selected educators receive structured training and
                certification before teaching.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHAT YOU'LL DO ================= */}
      <section className="bg-slate-50 py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Responsibilities
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              What You'll Do
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {[
              {
                number: "01",
                title: "Deliver AI Sessions",
                text: "Conduct practical, project-based AI sessions for students in partner schools.",
              },
              {
                number: "02",
                title: "Train Fellow Teachers",
                text: "Support teacher training programmes and help educators build confidence with AI.",
              },
              {
                number: "03",
                title: "Guide Student Projects",
                text: "Mentor students during projects, exhibitions and portfolio-building activities.",
              },
              {
                number: "04",
                title: "Track & Report",
                text: "Maintain attendance, assessments, progress reports and certification readiness.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >

                <span className="text-sm font-extrabold text-blue-600">
                  {item.number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>

                <div className="mt-5 h-1 w-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-16" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= REQUIREMENTS ================= */}
      <section className="py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left */}
            <div>

              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Requirements
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                What We're Looking For
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                We are looking for educators who are comfortable with
                technology and passionate about helping students learn.
              </p>

              <div className="mt-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-7 text-white shadow-xl shadow-blue-700/20">

                <GraduationCap className="h-10 w-10" />

                <h3 className="mt-5 text-2xl font-bold">
                  Teach. Inspire. Transform.
                </h3>

                <p className="mt-3 leading-7 text-blue-100">
                  Your knowledge can help students take their first step
                  towards a future powered by technology and AI.
                </p>

              </div>

            </div>


            {/* Right */}
            <div className="space-y-4">

              {[
                "Graduate or postgraduate qualification",
                "Teaching, training or mentoring experience is preferred",
                "Good computer skills; AI knowledge is an advantage",
                "Willingness to travel within the assigned location",
                "Clear communication in Hindi and English",
                "Strong interest in education and technology",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
                >

                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-500" />

                  <p className="text-slate-700">
                    {item}
                  </p>

                </div>

              ))}


              <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">

                <p className="font-semibold text-slate-700">
                  Freshers are welcome if they have strong teaching,
                  communication and learning skills. Training will be
                  provided.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= APPLY ================= */}
      <section
        id="apply"
        className="bg-gradient-to-b from-blue-50/70 to-slate-50 py-20 lg:py-24"
      >

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="mb-12 text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Application
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Apply as an Educator
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Fill in your details and our hiring team will review
              your profile.
            </p>

          </div>


          <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-8 lg:p-10">

            <div className="grid gap-6 md:grid-cols-2">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name *
                </label>

                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone *
                </label>

                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email *
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Applying For */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Applying For
                </label>

                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">

                  <option value="">
                    Select role
                  </option>

                  <option>
                    AI Educator
                  </option>

                  <option>
                    AI Trainer
                  </option>

                </select>
              </div>


              {/* State */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Preferred State
                </label>

                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">

                  <option value="">
                    Select state
                  </option>

                  <option>
                    Madhya Pradesh
                  </option>

                  <option>
                    Rajasthan
                  </option>

                  <option>
                    Uttar Pradesh
                  </option>

                  <option>
                    Uttarakhand
                  </option>

                  <option>
                    Chhattisgarh
                  </option>

                  <option>
                    Jharkhand
                  </option>

                </select>
              </div>


              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  City / District
                </label>

                <input
                  type="text"
                  placeholder="e.g. Bhopal"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Qualification */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Highest Qualification
                </label>

                <input
                  type="text"
                  placeholder="e.g. B.Tech, MCA, M.Sc"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Experience */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Teaching Experience
                </label>

                <input
                  type="number"
                  min="0"
                  placeholder="Years"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Subject Expertise
                </label>

                <input
                  type="text"
                  placeholder="e.g. Computer Science, Maths"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Work Mode */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Preferred Work Mode
                </label>

                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">

                  <option value="">
                    Select
                  </option>

                  <option>
                    On-site
                  </option>

                  <option>
                    Hybrid
                  </option>

                  <option>
                    Online
                  </option>

                </select>
              </div>


              {/* Resume */}
              <div className="md:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Resume *
                </label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                />

                <p className="mt-2 text-sm text-slate-500">
                  PDF or Word file, maximum 5 MB.
                </p>

              </div>


              {/* Motivation */}
              <div className="md:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Why do you want to teach AI?
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us briefly about your motivation..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

            </div>


            {/* Submit */}
            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
            >
              Submit Application
              <ArrowRight className="h-5 w-5" />
            </button>

          </form>

        </div>

      </section>

    </div>
  );
};

export default CareerPage;