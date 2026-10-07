import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, BookOpen, ArrowRight, BrainCircuit, Cpu, ShieldCheck, CheckCircle2, Award, Zap } from 'lucide-react';

export default function Hero({ onOpenVideoModal, onOpenPartnerModal }) {
  const [activeInteractiveTab, setActiveInteractiveTab] = useState(0);

  const interactivePillars = [
    { label: "Vision AI", detail: "Real-time webcam gestures & camera classifiers" },
    { label: "Robotics IoT", detail: "Microcontroller sensors & motor rovers" },
    { label: "Python Coding", detail: "Hands-on data & algorithmic reasoning" },
  ];

  // Easing curve
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 w-full">
      {/* Background Subtle Gradient Blobs - clamped to prevent horizontal scroll on 320px screens */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] bg-gradient-to-tr from-blue-200/25 via-indigo-100/20 to-orange-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-200/15 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Staggered Reveal Animation */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Mission Tag / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold tracking-wide shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>National Experiential Tech Initiative by SSD Prayas</span>
              <span className="hidden sm:inline text-slate-300">·</span>
              <span className="text-orange-600 font-bold">NEP 2020 Aligned</span>
            </motion.div>

            {/* 1. Main Headline (Reveals First) */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: smoothEase }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance font-display"
            >
              Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-orange-600">Next Generation</span> of Students with Artificial Intelligence
            </motion.h1>

            {/* 2. Sub-Headline (Reveals 0.2s Later) */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: smoothEase }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl"
            >
              Bringing state-of-the-art AI, robotics, and computational coding labs directly into school classrooms. We turn young learners from passive technology consumers into innovative, future-ready creators.
            </motion.p>

            {/* Supportive Proof Chips (Reveals ~0.3s) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2 pb-2 max-w-xl border-y border-slate-200/70"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Grades 5 – 12 Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Zero GPU Needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Hardware Kits Included</span>
              </div>
            </motion.div>

            {/* 3. CTA Buttons (Reveals 0.4s Later) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4, ease: smoothEase }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-lg shadow-blue-700/25 hover:shadow-xl hover:shadow-blue-700/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <BookOpen className="w-5 h-5" />
                <span>Explore Curriculum</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenVideoModal}
                className="inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 text-sm sm:text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-xs hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-300 ease-in-out cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 ease-in-out">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span>Watch Intro Video</span>
              </button>
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-2.5 pt-1 text-xs text-slate-500 font-medium"
            >
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Trusted by 150+ Progressive Schools & 48,000+ Young Creators Nationwide</span>
            </motion.div>
          </div>

          {/* Right Column: Futuristic Tech/Student Illustration & Interactive Simulator */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, type: "spring", stiffness: 85, damping: 16 }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Visual Container Card */}
            <div className="relative mx-auto w-full max-w-lg bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 text-white overflow-hidden group hover:border-blue-500/60 transition-all duration-300 ease-in-out">
              {/* Background ambient lighting */}
              <div className="absolute -top-16 -right-16 w-52 h-52 bg-blue-600/25 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-orange-600/20 rounded-full blur-2xl pointer-events-none" />

              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800/80 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 pl-1 sm:pl-2">AI-LAB // SSD_PRAYAS</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] sm:text-[11px] font-semibold text-emerald-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Lab Active</span>
                </div>
              </div>

              {/* Graphic Area */}
              <div className="py-4 relative z-10 space-y-4">
                <div className="relative h-52 sm:h-56 rounded-xl bg-gradient-to-br from-slate-900/90 via-blue-950/40 to-slate-900/90 border border-slate-800/90 p-4 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Top Stats */}
                  <div className="relative flex justify-between items-start">
                    <div className="space-y-0.5">
                      <div className="text-[10px] uppercase tracking-wider text-blue-400 font-semibold">
                        Student Model Status
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                        <BrainCircuit className="w-4 h-4 text-orange-400" />
                        <span>Autonomous Rover Vision v2.4</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-emerald-400">99.2%</div>
                      <div className="text-[10px] text-slate-400">Accuracy Score</div>
                    </div>
                  </div>

                  {/* Central Node Illustration */}
                  <div className="relative flex items-center justify-around py-2">
                    <div className="flex flex-col gap-2 items-center">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-600/30 border border-blue-500/60 flex items-center justify-center text-blue-300 text-[10px] sm:text-xs font-bold shadow-sm">
                        CAM
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-600/30 border border-blue-500/60 flex items-center justify-center text-blue-300 text-[10px] sm:text-xs font-bold shadow-sm">
                        SONAR
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">Sensors</div>
                    </div>

                    <div className="flex-1 px-2 sm:px-3 flex flex-col justify-center items-center gap-1 text-slate-500 text-[10px]">
                      <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-indigo-400 to-orange-500 rounded-full" />
                      <div className="font-mono text-slate-400 text-[9px] sm:text-[10px]">Neural Weights</div>
                      <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-400 to-emerald-400 rounded-full" />
                    </div>

                    <div className="flex flex-col gap-2 items-center">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-600/30 border border-orange-500/60 flex items-center justify-center text-orange-300 text-xs font-bold shadow-sm">
                        <Cpu className="w-4 h-4 text-orange-400" />
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-600/30 border border-emerald-500/60 flex items-center justify-center text-emerald-300 text-[10px] sm:text-xs font-bold shadow-sm">
                        DRIVE
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">Actuators</div>
                    </div>
                  </div>

                  {/* Real-time Detection */}
                  <div className="relative flex items-center justify-between text-xs bg-slate-950/70 border border-slate-800 rounded-lg px-2.5 sm:px-3 py-1.5">
                    <span className="text-slate-300 font-mono text-[10px] sm:text-[11px]">Object Detected: Obstacle (32cm)</span>
                    <span className="text-orange-400 font-semibold text-[10px] sm:text-[11px]">Steer Left 25°</span>
                  </div>
                </div>

                {/* Track Selector inside Card */}
                <div className="space-y-2">
                  <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Explore Student Lab Tracks:</div>
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {interactivePillars.map((item, index) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setActiveInteractiveTab(index)}
                        className={`text-left p-2 sm:p-2.5 rounded-lg border text-xs transition-all duration-300 ease-in-out cursor-pointer ${
                          activeInteractiveTab === index
                            ? 'bg-blue-900/40 border-blue-500 text-white font-bold shadow-sm'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        <div className="text-[11px] sm:text-xs font-bold truncate">{item.label}</div>
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 bg-slate-900/70 border border-slate-800/80 rounded-lg px-3 py-2 leading-relaxed">
                    {interactivePillars[activeInteractiveTab].detail}
                  </p>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Child-Safe Sandboxed Tech
                </span>
                <button
                  type="button"
                  onClick={onOpenPartnerModal}
                  className="text-orange-400 hover:text-orange-300 font-bold transition-all duration-300 ease-in-out cursor-pointer"
                >
                  Book School Demo →
                </button>
              </div>
            </div>

            {/* Decorative Floating Badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="hidden sm:flex absolute -bottom-5 -left-4 bg-white rounded-xl shadow-xl border border-slate-200/90 p-3 items-center gap-3 max-w-xs z-20"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm shrink-0">
                100%
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">Hands-on Hardware</div>
                <div className="text-[11px] text-slate-500">Every student builds real projects</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="hidden sm:flex absolute -top-4 -right-3 bg-white rounded-xl shadow-xl border border-slate-200/90 p-3 items-center gap-3 z-20"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">NEP 2020 Aligned</div>
                <div className="text-[11px] text-slate-500">Official Curriculum Fit</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
