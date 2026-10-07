import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { statsData, schoolTestimonials, studentProjects } from '../data/impactData';
import { Award, Quote, Trophy, Users, Star, ArrowRight, School, ChevronRight } from 'lucide-react';

export default function ImpactSection({ onOpenPartnerModal }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="impact" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-blue-600" />
            <span>PROVEN INSTITUTIONAL RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Real Impact Across 150+ Schools
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From tier-1 metropolitan schools to visionary regional institutions, see how students and educators are achieving national acclaim with SSD Prayas.
          </p>
        </motion.div>

        {/* Quantified Stats Grid (Tabular numerals compliant) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center space-y-2 hover:border-blue-300 hover:bg-blue-50/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-700 font-display tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 leading-snug">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Student Project Inventions Showcase */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-1">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider font-mono">
                Student Inventions
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Featured School Capstone Innovations
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Real projects designed, wired, coded, and demonstrated by students in Grades 7–10.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 ease-in-out group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      {proj.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {proj.hardware}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                    {proj.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="text-slate-800 font-semibold">{proj.student}</span>
                  <span className="text-slate-400">{proj.school}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* School Testimonials (Attributable) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between border-b border-blue-800/80 pb-4">
              <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <Quote className="w-5 h-5 fill-current" />
                <span>Voices from Partner Schools</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-slate-100 font-display">
              "{schoolTestimonials[activeTestimonial].quote}"
            </blockquote>

            {/* Author Credit & Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-blue-800/80">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-800 border-2 border-blue-500/60 flex items-center justify-center font-bold text-white text-base">
                  {schoolTestimonials[activeTestimonial].initials}
                </div>
                <div>
                  <div className="text-base font-bold text-white">
                    {schoolTestimonials[activeTestimonial].name}
                  </div>
                  <div className="text-xs text-blue-200">
                    {schoolTestimonials[activeTestimonial].role} · {schoolTestimonials[activeTestimonial].location}
                  </div>
                </div>
              </div>

              {/* Testimonial Nav dots */}
              <div className="flex items-center gap-2">
                {schoolTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${
                      activeTestimonial === idx ? 'w-8 bg-orange-400 scale-105' : 'w-2.5 bg-blue-700 hover:bg-blue-600'
                    }`}
                    aria-label={`View testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
