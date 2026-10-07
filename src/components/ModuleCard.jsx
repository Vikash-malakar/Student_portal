import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  BrainCircuit, 
  Cpu, 
  Eye, 
  Terminal, 
  ShieldCheck, 
  Clock, 
  GraduationCap, 
  ArrowRight,
  FolderGit2
} from 'lucide-react';

const iconComponents = {
  Sparkles,
  BrainCircuit,
  Cpu,
  Eye,
  Terminal,
  ShieldCheck,
};

export default function ModuleCard({ module, onSelectModule, index = 0 }) {
  const IconComponent = iconComponents[module.iconName] || BrainCircuit;

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
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
    <motion.div
      variants={cardVariants}
      onClick={() => onSelectModule(module)}
      className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden text-left"
    >
      {/* Top Ambient Highlight Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />

      {/* Main Content Area */}
      <div className="space-y-4">
        {/* Header line: Icon & Level Tag */}
        <div className="flex items-start justify-between gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 ease-in-out shadow-xs group-hover:scale-105">
            <IconComponent className="w-6 h-6 transition-transform duration-300 ease-in-out" />
          </div>
          
          <div className="text-right">
            <span className="text-xs font-semibold text-orange-600 font-mono tracking-tight">
              {module.badge}
            </span>
            <div className="text-[11px] text-slate-400 font-medium">
              {module.level}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 ease-in-out leading-snug">
          {module.title}
        </h3>

        {/* Clean Unboxed Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium pb-1 border-b border-slate-100">
          <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            {module.grades}
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {module.duration}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
          {module.summary}
        </p>

        {/* Highlighted Hands-on Project */}
        <div className="bg-slate-50 group-hover:bg-blue-50/40 rounded-xl p-3 border border-slate-100 group-hover:border-blue-100 space-y-1 transition-colors duration-300 ease-in-out">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
            <FolderGit2 className="w-3.5 h-3.5 text-orange-500" />
            Hands-on Capstone:
          </div>
          <div className="text-xs font-semibold text-slate-800 line-clamp-1">
            {module.handsOnProject}
          </div>
        </div>
      </div>

      {/* Footer / CTA trigger */}
      <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-bold text-blue-700 group-hover:text-blue-800 group-hover:translate-x-1 transition-all duration-300 ease-in-out inline-flex items-center gap-1.5">
          View Complete Syllabus
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
        <span className="text-[11px] text-slate-400 font-mono">
          {module.chapters?.length || 4} Chapters
        </span>
      </div>
    </motion.div>
  );
}
