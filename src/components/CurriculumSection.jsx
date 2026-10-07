import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ModuleCard from './ModuleCard';
import { curriculumModules } from '../data/curriculumData';
import { BookOpen, Sparkles, Filter, Download, ArrowRight } from 'lucide-react';

export default function CurriculumSection({ onSelectModule, onOpenPartnerModal }) {
  const [filterTrack, setFilterTrack] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Modules (Grades 5-12)' },
    { id: 'foundation', label: 'Foundations & ML (Grades 5-8)' },
    { id: 'robotics', label: 'Robotics & Vision (Grades 7-10)' },
    { id: 'advanced', label: 'Python & Ethics (Grades 8-12)' },
  ];

  const filteredModules = curriculumModules.filter((module) => {
    if (filterTrack === 'all') return true;
    if (filterTrack === 'foundation') {
      return module.id === 'intro-ai-prompts' || module.id === 'machine-learning-kids';
    }
    if (filterTrack === 'robotics') {
      return module.id === 'robotics-iot' || module.id === 'computer-vision-apps';
    }
    if (filterTrack === 'advanced') {
      return module.id === 'python-algorithmic-ai' || module.id === 'ai-ethics-citizenship';
    }
    return true;
  });

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>PROGRESSIVE CURRICULUM ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Comprehensive AI & Robotics Curriculum for Schools
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Designed by experienced pedagogy experts and AI engineers. Our spiral syllabus adapts seamlessly to school timetables with zero complex mathematics prerequisites.
          </p>

          {/* Interactive Filter Control */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setFilterTrack(opt.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap ${
                  filterTrack === opt.id
                    ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20 scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Responsive Staggered Grid (1 col mobile, 2 tablet, 3 desktop) */}
        <motion.div
          key={filterTrack}
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredModules.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={module}
              index={index}
              onSelectModule={onSelectModule}
            />
          ))}
        </motion.div>

        {/* Bottom Curriculum Help Box with Hover Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              Need a Customized Syllabus for your School Board (CBSE / ICSE / IB / State)?
            </h4>
            <p className="text-sm text-slate-600">
              Our academic team maps the curriculum directly into your existing annual academic calendar.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenPartnerModal}
              className="px-5 py-2.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer"
            >
              Request School Syllabus PDF
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
