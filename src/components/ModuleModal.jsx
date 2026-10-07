import React from 'react';
import { X, CheckCircle2, Clock, GraduationCap, Wrench, BookOpen, Sparkles, FolderGit2 } from 'lucide-react';

export default function ModuleModal({ module, onClose, onEnrollSchool }) {
  if (!module) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden text-left animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all duration-300 ease-in-out cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-md font-mono">
              {module.badge}
            </span>
            <span className="text-xs text-slate-400 font-medium">·</span>
            <span className="text-xs font-semibold text-slate-600">{module.level}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
            {module.title}
          </h3>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
            <span className="flex items-center gap-1.5 text-blue-700 font-semibold">
              <GraduationCap className="w-4 h-4" />
              {module.grades}
            </span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <Clock className="w-4 h-4 text-slate-400" />
              {module.duration}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="mt-6 space-y-6 max-h-[60vh] overflow-y-auto pr-1">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Course Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {module.summary}
            </p>
          </div>

          {/* Hands-on Project Highlight */}
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-orange-800">
              <FolderGit2 className="w-4 h-4 text-orange-600" />
              Featured Student Capstone Project:
            </div>
            <div className="text-sm font-bold text-slate-900">
              {module.handsOnProject}
            </div>
          </div>

          {/* Chapters / Syllabus Structure */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-600" />
              Structured Syllabus Breakdown
            </h4>
            <div className="space-y-2">
              {module.chapters?.map((ch, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-2.5 hover:bg-slate-100 transition-colors"
                >
                  <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{ch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Learning Outcomes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Key Student Learning Outcomes
            </h4>
            <div className="space-y-2">
              {module.learningOutcomes?.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Kits Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-slate-500" />
              Software Sandboxes & Hardware Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {module.tools?.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Available as an integrated school term or summer camp.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl transition-all duration-300 ease-in-out cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onEnrollSchool(module);
              }}
              className="flex-1 sm:flex-initial px-5 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 rounded-xl shadow-sm transition-all duration-300 ease-in-out cursor-pointer"
            >
              Integrate in My School
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
