import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Play, Sparkles, RefreshCw, CheckCircle2, Sliders, Eye, Layers } from 'lucide-react';

export default function InteractiveAiDemo() {
  const [selectedSample, setSelectedSample] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [confidenceThreshold, setConfidenceThreshold] = useState(85);

  const samples = [
    {
      id: "rover",
      name: "Autonomous Rover (Hardware)",
      category: "Robotics Kit",
      icon: "🤖",
      features: ["Ultrasonic Sensor Detected", "Dual DC Motors", "Chassis Contour Match"],
      confidence: 96.8,
      secondary: "RC Car",
      secondaryConf: 3.2,
      decision: "Rover identified with high confidence. Actuator command: Navigate Waypoint 4."
    },
    {
      id: "waste",
      name: "Plastic Bottle (EcoSort)",
      category: "Recyclable Item",
      icon: "🥤",
      features: ["Transparent PET Material", "Cap Ridge Signature", "Cylinder Geometry"],
      confidence: 94.2,
      secondary: "Glass Jar",
      secondaryConf: 5.8,
      decision: "Recyclable classified. Actuator command: Open Blue Recycling Bin Lid."
    },
    {
      id: "gesture",
      name: "Open Palm Wave",
      category: "Hand Landmark",
      icon: "✋",
      features: ["5 Fingertip Coordinates", "Palm Center Vector", "Wrist Orientation"],
      confidence: 98.4,
      secondary: "Fist Gesture",
      secondaryConf: 1.6,
      decision: "Gesture recognized. Action trigger: Register Student Morning Check-in."
    },
    {
      id: "leaf",
      name: "Plant Leaf Health Scan",
      category: "Agri-Vision",
      icon: "🍃",
      features: ["Chlorophyll Pixel Index", "Edge Venation Pattern", "Zero Discoloration"],
      confidence: 91.5,
      secondary: "Leaf Blight",
      secondaryConf: 8.5,
      decision: "Healthy Leaf Confirmed. Soil irrigation scheduler maintained."
    }
  ];

  const currentSample = samples[selectedSample];

  const handleTestSample = (idx) => {
    setIsProcessing(true);
    setSelectedSample(idx);
    setTimeout(() => {
      setIsProcessing(false);
    }, 300);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide shadow-xs">
            <BrainCircuit className="w-3.5 h-3.5 text-blue-600" />
            <span>INTERACTIVE STUDENT LAB SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Experience What Students Build in Week 4
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Test our interactive Teachable Machine simulator below. Students collect image samples, train neural weights, and deploy autonomous triggers right in school.
          </p>
        </motion.div>

        {/* Simulator Sandbox Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Input Selection */}
            <div className="md:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Step 1: Choose Camera Input Sample
                </span>
                <p className="text-xs text-slate-500 mt-0.5">
                  Simulating webcam feeds trained by school students:
                </p>
              </div>

              <div className="space-y-2.5">
                {samples.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => handleTestSample(idx)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all duration-300 ease-in-out cursor-pointer ${
                      selectedSample === idx
                        ? 'bg-blue-50/90 border-blue-500 ring-2 ring-blue-500/20 shadow-sm scale-[1.02]'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl" role="img" aria-label={s.name}>
                        {s.icon}
                      </span>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{s.name}</div>
                        <div className="text-[11px] text-slate-500">{s.category}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-700">
                      {s.confidence}%
                    </span>
                  </button>
                ))}
              </div>

              {/* Threshold Slider */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-slate-400" />
                    Classification Threshold:
                  </span>
                  <span className="font-mono font-bold text-slate-900">{confidenceThreshold}%</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="95"
                  value={confidenceThreshold}
                  onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg transition-all duration-300 ease-in-out"
                />
              </div>
            </div>

            {/* Right: Neural Prediction Visualizer */}
            <div className="md:col-span-7 bg-slate-900 rounded-2xl p-5 sm:p-6 text-white space-y-5 border border-slate-800">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300">NEURAL INFERENCE ACTIVE</span>
                </div>
                <span className="text-xs font-mono text-orange-400">Latency: 14ms</span>
              </div>

              {/* Sample Target Visual */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-slate-900 flex items-center justify-center text-3xl border border-slate-700 shrink-0">
                  {currentSample.icon}
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                    Target Detected
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {currentSample.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    Category: <span className="text-slate-200">{currentSample.category}</span>
                  </div>
                </div>
              </div>

              {/* Neural Probability Bars */}
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">{currentSample.name} (Primary)</span>
                    <span className="text-emerald-400 font-bold">{currentSample.confidence}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-500 ease-out rounded-full"
                      style={{ width: `${currentSample.confidence}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">{currentSample.secondary} (Alternative)</span>
                    <span className="text-slate-400">{currentSample.secondaryConf}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-slate-600 transition-all duration-500 ease-out rounded-full"
                      style={{ width: `${currentSample.secondaryConf}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Extracted Features List */}
              <div className="space-y-2 pt-1 border-t border-slate-800">
                <div className="text-[11px] font-mono text-slate-400 uppercase flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  Extracted Tensor Features:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentSample.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-0.5 rounded-md"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Output Decision Trigger */}
              <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-800/80 text-xs text-blue-200">
                <strong className="text-white">Autonomous Decision Rule:</strong> {currentSample.decision}
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
