import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { keyBenefits, schoolChecklist } from '../data/benefitsData';
import { 
  Binary, 
  Wrench, 
  BookOpenCheck, 
  Award, 
  Trophy, 
  Rocket, 
  CheckCircle2, 
  Check, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Binary,
  Wrench,
  BookOpenCheck,
  Award,
  Trophy,
  Rocket
};

export default function BenefitsSection({ onOpenPartnerModal }) {
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
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>MEASURABLE STUDENT & SCHOOL IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Why Schools Choose SSD Prayas AI Education
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We don't just sell software licenses. We partner with school leaders to build an end-to-end, inspiring ecosystem that cultivates curious young thinkers and future leaders.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
        >
          {keyBenefits.map((benefit) => {
            const Icon = iconMap[benefit.iconName] || Award;
            return (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                className="group p-6 sm:p-7 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-400 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top line with Icon and Metric */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-xs group-hover:bg-blue-700 group-hover:text-white group-hover:scale-105 transition-all duration-300 ease-in-out">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-extrabold text-slate-900 font-mono">
                        {benefit.metric}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium max-w-[130px] line-clamp-1">
                        {benefit.metricLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 ease-in-out leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom Custom Checkmark Guarantee */}
                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 ease-in-out">
                    <Check className="w-3 h-3 text-emerald-700 group-hover:text-white stroke-[3]" />
                  </div>
                  <span>Verified Classroom Outcome</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* School Partnership Turnkey Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl border border-slate-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono tracking-widest text-orange-400 uppercase font-bold">
                TURNKEY IMPLEMENTATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
                Everything Included for a Zero-Hassle Lab Launch
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Schools have zero administrative overhead. We deliver all equipment, train your teachers, provide lesson slides, and manage student assessments.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenPartnerModal}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-98 rounded-xl shadow-md transition-all duration-300 ease-in-out cursor-pointer"
                >
                  <span>Schedule School Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Checklist items */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {schoolChecklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 ease-in-out"
                >
                  <div className="w-5 h-5 rounded-md bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
