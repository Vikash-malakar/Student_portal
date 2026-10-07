import React from 'react';
import { curriculumData } from '../data';
import { 
  Sparkles, 
  BookOpen, 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Terminal, 
  Bot,
  BrainCircuit
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CurriculumPage() {
  return (
    <div className="w-full">
      
      {/* Introduction Header */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold tracking-wide shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>K-12 SPIRAL SYLLABUS FRAMEWORK</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
            AI Curriculum & Syllabus
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </section>

      {/* Level-Based UI: Vertical Timeline */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Four-Tier Progressive Learning Roadmap
            </h2>
            <p className="text-sm text-slate-500">
              Connected sequential levels structured for elementary through high school mastery.
            </p>
          </div>

          {/* Timeline Container with Connected Vertical Line using Tailwind borders */}
          <div className="relative border-l-2 border-blue-600 ml-4 sm:ml-8 md:ml-32 space-y-12 pb-6">
            
            {curriculumData.map((item, index) => (
              <div key={item.id} className="relative pl-6 sm:pl-10 group">
                
                {/* Node Milestone Circle on the border */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center border-4 border-white shadow-md group-hover:scale-110 group-hover:bg-orange-600 transition-all duration-300">
                  {item.id}
                </div>

                {/* Level Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 hover:bg-white hover:-translate-y-1 transition-all duration-300">
                  
                  {/* Level Tag & Target Info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-blue-100 text-blue-800">
                        {item.level}
                      </span>
                      <span className="text-xs font-semibold text-orange-600 font-mono">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1 text-slate-700 font-semibold">
                        <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                        {item.targetGrades}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {/* Dummy Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  {/* 3 Dummy Bullet Points */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-200/70">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Core Syllabus Competencies:
                    </div>
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                    <span>Syllabus Code: LOREM-AI-0{item.id}</span>
                    <Link
                      to="/contact"
                      className="text-blue-700 hover:text-blue-800 font-bold flex items-center gap-1"
                    >
                      Request Lesson Plan <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Bottom CTA Box */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1">
              <h4 className="text-xl font-bold font-display">
                Looking for a Custom Grade Alignment?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md shrink-0"
            >
              Contact Academics Team
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
