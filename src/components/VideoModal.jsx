import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle, Clock } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-950 rounded-2xl max-w-3xl w-full border border-slate-800 shadow-2xl overflow-hidden text-white text-left animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 transition-all duration-300 ease-in-out cursor-pointer"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Screen */}
        <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
          
          <div className="relative z-10 text-center space-y-4 px-6 max-w-lg">
            <div
              className="w-16 h-16 rounded-full bg-orange-600/90 hover:bg-orange-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-orange-600/40 border border-orange-400/40 hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 fill-current ml-1" />}
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-widest text-orange-400 uppercase font-semibold">
                CLASSROOM DOCUMENTARY · 3:20 MIN
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Inside an AI for School Tinkering Lab
              </h3>
              <p className="text-xs text-slate-300">
                Witness Grade 7 and 8 students train their first vision models and build obstacle-avoiding autonomous rovers at Cambridge School.
              </p>
            </div>

            {/* Video Controls Bar */}
            <div className="pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white flex items-center gap-1 transition-colors duration-300 cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  <span>{isMuted ? 'Unmute' : 'Audio ON'}</span>
                </button>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px]">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>01:42 / 03:20</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Key Takeaways Section */}
        <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
            Documentary Highlights & Observations:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-colors duration-300">
              <strong className="block text-white font-semibold mb-0.5">1. Zero Coding Barrier</strong>
              Students start with intuitive visual block logic before transitioning to Python.
            </div>
            <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-colors duration-300">
              <strong className="block text-white font-semibold mb-0.5">2. Physical Hardware</strong>
              Tactile engagement with sensors and servo motors drives 100% attendance.
            </div>
            <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-colors duration-300">
              <strong className="block text-white font-semibold mb-0.5">3. Ethics from Day 1</strong>
              Students explore bias, deepfakes, and societal responsibility.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
