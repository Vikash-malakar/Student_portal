import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { partnerLogos, featuresData, statsData } from '../data';
import { 
  Brain, 
  Cpu, 
  Code, 
  Terminal, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  Building2, 
  Bot, 
  Layers
} from 'lucide-react';

const iconMap = {
  Brain,
  Cpu,
  Code,
  Terminal,
  Eye,
  ShieldCheck
};

// Animated Number Counter Component using framer-motion & animation frame
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800; // 1.8s
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-extrabold font-display tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="w-full">
      
      {/* SECTION 2.1: HERO SECTION (50/50 split on desktop) */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 50%: Bold Dummy Headline, Sub-headline, Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold tracking-wide shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Lorem Ipsum AI Initiative · National Framework</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-display">
                Empowering Education with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-orange-600">Lorem Ipsum</span> Technology
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>

              {/* Dual Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/ai-curriculum"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-blue-700 hover:bg-blue-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 rounded-xl shadow-lg shadow-blue-700/25 hover:shadow-xl hover:shadow-blue-700/35 transition-all duration-300 ease-in-out cursor-pointer"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Explore Curriculum</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer"
                >
                  <span>Request Demo</span>
                </Link>
              </div>

              {/* Bullet proof line */}
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Duis aute irure dolor
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Excepteur sint occaecat
                </span>
              </div>
            </motion.div>

            {/* Right 50%: Large Placeholder Graphic / Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative mx-auto w-full rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl overflow-hidden group">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />

                {/* Graphical Placeholder Canvas */}
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-xs font-mono text-slate-400 pl-2">SIMULATOR://LOREM_AI</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      STATUS: ONLINE
                    </span>
                  </div>

                  {/* Graphic Visual Window */}
                  <div className="h-64 sm:h-72 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col items-center justify-center p-6 text-center space-y-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-blue-600/30">
                      <Bot className="w-10 h-10" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white font-display">
                        Placeholder Graphic Canvas
                      </h3>
                      <p className="text-xs text-slate-400 max-w-sm">
                        https://via.placeholder.com/600x400?text=AI+Classroom+Illustration
                      </p>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      <span className="text-blue-400">model.predict(input)</span>
                      <span>→</span>
                      <span className="text-emerald-400">99.8% Confidence</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                    <span>Target Resolution: 1920x1080</span>
                    <span className="text-orange-400 font-mono font-bold">Lorem Ipsum 2026</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2.2: PARTNER / LOGO CAROUSEL (Horizontal Marquee) */}
      <section className="py-8 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
            Trusted by 500+ Partner Schools & Educational Organizations
          </p>
        </div>

        {/* Marquee Banner */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="animate-marquee gap-8 items-center py-2">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm tracking-wide shrink-0 hover:bg-slate-100 transition-colors"
              >
                <span>{partner.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2.3: "WHAT WE DO" (3-Column Features Grid) */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Comprehensive Educational Pillars
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* 3-Column CSS Grid with hover:-translate-y-2 and shadow transitions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feat) => {
              const IconComp = iconMap[feat.icon] || Brain;
              return (
                <div
                  key={feat.id}
                  className="group p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col justify-between text-left cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                        {feat.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-200">
                      {feat.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                    <span className="group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-1.5">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">0{feat.id}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 2.4: GOVERNMENT ALIGNMENT BANNER (Full-width distinct bg light blue/orange) */}
      <section className="py-16 bg-gradient-to-r from-blue-700 via-indigo-700 to-orange-600 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
                <ShieldCheck className="w-8 h-8 text-amber-300" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-white/20 text-xs font-bold font-mono tracking-wider">
                  NATIONAL DIRECTIVE 2026
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                  Aligned with National Educational Policies
                </h3>
                <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <Link
              to="/government"
              className="px-6 py-3.5 text-sm sm:text-base font-bold text-slate-900 bg-white hover:bg-slate-100 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 rounded-xl shadow-lg transition-all duration-300 ease-in-out shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span>View Policy Guidelines</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>
        </div>
      </section>

      {/* SECTION 2.5: AI INTEGRATION TEASER (Futuristic dark-mode UI block) */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left: Code Snippet / Robot Terminal Block */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                    <Terminal className="w-4 h-4 text-blue-400" />
                    <span>neural_kernel_v3.py</span>
                  </div>
                  <span className="text-[11px] font-mono text-orange-400">Python 3.12</span>
                </div>

                {/* Preformatted Code Block */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-slate-300 space-y-1.5 overflow-x-auto">
                  <div className="text-slate-500"># Initializing classroom model pipeline</div>
                  <div><span className="text-purple-400">import</span> tensorflow <span className="text-purple-400">as</span> tf</div>
                  <div><span className="text-purple-400">from</span> school_ai <span className="text-purple-400">import</span> VisionClassifier</div>
                  <div className="pt-2"><span className="text-blue-400">model</span> = VisionClassifier(classes=[<span className="text-emerald-300">"Rover"</span>, <span className="text-emerald-300">"Obstacle"</span>])</div>
                  <div><span className="text-blue-400">model</span>.train(epochs=<span className="text-amber-400">20</span>, batch_size=<span className="text-amber-400">32</span>)</div>
                  <div className="pt-2 text-emerald-400">&gt;&gt; Optimization Complete: 99.4% Accuracy</div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
                  <Bot className="w-4 h-4 text-orange-400" />
                  <span>Integrated with Student Microcontroller Kits</span>
                </div>
              </div>

              {/* Right: Bullet Points Explaining Why AI Matters */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                    PEDAGOGICAL INTEGRATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
                    Why Machine Intelligence Matters in K-12
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/ai-curriculum"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300"
                  >
                    <span>Inspect Full AI Syllabus</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2.6: IMPACT / STATS COUNTER (4-Column Layout with Animated Numbers) */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {statsData.map((stat) => (
              <div
                key={stat.id}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 hover:border-blue-400 hover:bg-blue-50/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-700 tracking-tight">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-base font-bold text-slate-900">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Lorem Ipsum Statistics 2026
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
