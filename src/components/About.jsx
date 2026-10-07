import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Compass, Award, CheckCircle, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function About({ onOpenPartnerModal }) {
  const missionPillars = [
    {
      icon: Lightbulb,
      title: "From Passive Consumers to Creators",
      desc: "Instead of just scrolling through AI filters or chatting with bots, students deconstruct algorithms, train camera models, and understand how systems make decisions."
    },
    {
      icon: Target,
      title: "Aligned with NEP 2020 & 21st Century Skills",
      desc: "Directly fulfills the mandate of India's National Education Policy for computational thinking, AI literacy, and practical vocational exposure from Grade 6 onwards."
    },
    {
      icon: Cpu,
      title: "Zero Burden on School Infrastructure",
      desc: "SSD Prayas equips your existing computer room with safe hardware kits, cloud sandboxes, and structured semester curricula without costly workstation upgrades."
    },
    {
      icon: Users,
      title: "Dual Teacher-Mentor Classroom Model",
      desc: "Our certified AI instructors work side-by-side with your school's computer faculty, conducting continuous capacity building and hands-on workshops."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold tracking-wide shadow-xs">
            <Compass className="w-3.5 h-3.5 text-orange-600" />
            <span>OUR MISSION & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Why Teaching AI at School Level is No Longer Optional
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Artificial Intelligence is reshaping every career path—from medicine to arts, law, and engineering. Waiting until university leaves students behind. We provide the early cognitive scaffolding students need to lead the future.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Educational Philosophy & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Democratizing Artificial Intelligence for Every K-12 Classroom
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                SSD Prayas conceived the <strong className="text-slate-800 font-semibold">AI for School</strong> initiative with a simple yet transformative conviction: every child, regardless of geographic location or prior programming background, deserves equal access to future technology literacy.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our pedagogical approach rejects passive rote theory. Every single concept—whether training an image classifier, tuning a servo motor, or debating generative AI ethics—is introduced through tangible, hands-on classroom experiments.
              </p>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
              {missionPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center mb-3 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 ease-in-out">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-blue-700 transition-colors duration-300">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Callout bar */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-600 shrink-0" />
                <div className="text-xs sm:text-sm text-amber-900 font-medium">
                  <strong>School Accreditation:</strong> Official completion certificates endorsed by STEM & AI educator councils.
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenPartnerModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-amber-950 underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap"
              >
                <span>Request Curriculum Brochure</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Visual Showcase & Pedagogical Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono tracking-widest text-orange-400 uppercase font-semibold">
                    Pedagogical Blueprint
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
                    The 4-Stage Student Learning Cycle
                  </h4>
                  <p className="text-xs text-slate-300">
                    How students progress from conceptual curiosity to autonomous innovation.
                  </p>
                </div>

                {/* 4 Steps Timeline */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 ease-in-out">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      01
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">Deconstruct & Explore</h5>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Interactive games and visual sandboxes illustrating how datasets teach machines.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 hover:border-indigo-500/50 transition-all duration-300 ease-in-out">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      02
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">Tinker with Sensors & Code</h5>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Physical microcontrollers, ultrasonic rangers, and block/Python code pipelines.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 hover:border-orange-500/50 transition-all duration-300 ease-in-out">
                    <div className="w-8 h-8 rounded-lg bg-orange-600 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      03
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">Prototype Real-World Solutions</h5>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Building smart plant irrigation, gesture games, or waste segregation systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-300 ease-in-out">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      04
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">Ethics, Review & Showcase</h5>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Debating bias, data privacy, and presenting projects to parents & judges.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Safe & Supervised Classrooms</span>
                  </div>
                  <span className="text-orange-400 font-semibold font-mono">100% Student-Centric</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
