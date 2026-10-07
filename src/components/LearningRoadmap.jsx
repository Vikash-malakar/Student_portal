import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { learningLevels } from '../data/roadmapData';
import { 
  Sparkles, 
  Binary, 
  BrainCircuit, 
  Cpu, 
  Terminal, 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  GraduationCap, 
  Wrench,
  Award,
  ChevronRight
} from 'lucide-react';

const iconMap = {
  Sparkles,
  Binary,
  BrainCircuit,
  Cpu,
  Terminal,
  Trophy,
};

export default function LearningRoadmap({ onOpenPartnerModal }) {
  const [activeLevel, setActiveLevel] = useState(1);
  const [hoveredLevel, setHoveredLevel] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14
      }
    }
  };

  return (
    <section id="roadmap" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold tracking-wide shadow-xs">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>LEVEL-BASED PROGRESSION PATHWAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display text-balance">
            The 6-Level AI Curriculum Roadmap
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From absolute kindergarten/primary basics to building national award-winning autonomous rovers. A continuous, age-appropriate spiral journey designed for every school year.
          </p>

          {/* Quick interactive jump buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {learningLevels.map((lvl) => (
              <button
                key={lvl.level}
                onClick={() => setActiveLevel(lvl.level)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeLevel === lvl.level
                    ? 'bg-blue-700 text-white shadow-md shadow-blue-700/25 scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                L{lvl.level}: {lvl.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline Progression Layout */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Animated Connecting Line (draws smoothly while in view) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-1 md:w-1.5 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-blue-600 via-indigo-600 via-orange-500 to-rose-600 rounded-full"
            />
          </div>

          {/* Timeline Nodes Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12 md:space-y-16 relative"
          >
            {learningLevels.map((item, index) => {
              const Icon = iconMap[item.iconName] || Sparkles;
              const isEven = index % 2 === 0;
              const isActive = activeLevel === item.level;

              return (
                <motion.div
                  key={item.level}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredLevel(item.level)}
                  onMouseLeave={() => setHoveredLevel(null)}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Card Content Column */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-left'}`}>
                    <div
                      onClick={() => setActiveLevel(item.level)}
                      className={`group p-6 sm:p-7 rounded-2xl bg-white border transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden ${
                        isActive
                          ? 'border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20 scale-[1.02]'
                          : 'border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-xl hover:-translate-y-1'
                      }`}
                    >
                      {/* Top Accent Gradient Bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />

                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-1 rounded-md text-xs font-bold border font-mono ${item.badgeColor}`}>
                            Level 0{item.level}
                          </span>
                          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                            {item.grade}
                          </span>
                        </div>

                        <span className="text-[11px] font-bold text-orange-600 font-mono">
                          {item.milestoneBadge}
                        </span>
                      </div>

                      {/* Titles */}
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <div className="text-xs font-semibold text-slate-400 mb-2">
                        {item.subtitle}
                      </div>

                      {/* Summary */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      {/* Skills Covered Tags */}
                      <div className="space-y-2 pt-3 border-t border-slate-100">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Core Competencies:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hands-on Capstone preview */}
                      <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Wrench className="w-4 h-4 text-orange-500 shrink-0" />
                          <span className="font-semibold text-slate-800 line-clamp-1">
                            Capstone: {item.capstone}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform shrink-0" />
                      </div>
                    </div>
                  </div>

                  {/* Central Node Circle (pops into place) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      whileHover={{ scale: 1.25, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg cursor-pointer transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-700 ring-4 ring-blue-200 scale-110 shadow-blue-600/30'
                          : 'bg-slate-900 hover:bg-blue-600'
                      }`}
                      onClick={() => setActiveLevel(item.level)}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Empty Column for Balanced Desktop Zig-zag */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* Level Progression Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 rounded-2xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-orange-400 font-bold uppercase">
              <Award className="w-4 h-4 text-orange-400" />
              <span>Full K-12 Accreditation Pathway</span>
            </div>
            <h4 className="text-xl font-bold font-display">
              Ready to implement this progressive ladder in your school?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Each student earns verifiable digital certificates and lab milestone badges at every level completion.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenPartnerModal}
            className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
          >
            Deploy Levels in My School
          </button>
        </motion.div>

      </div>
    </section>
  );
}
