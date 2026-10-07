import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube, 
  Mail, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (input) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim());
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter an email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g. name@school.edu).');
      return;
    }

    setStatus('loading');

    // Simulate network latency & success animation
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  const resetForm = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Col 1: Logo & Brief Dummy Text */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-700/30 group-hover:scale-105 transition-all duration-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white font-display">
                AI for School
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            <div className="text-xs text-slate-500 space-y-1">
              <div>© 2026 AI for School Foundation</div>
              <div>Educational Initiative · Non-Profit Model</div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200">
                  Home Landing
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-200">
                  About Our Initiative
                </Link>
              </li>
              <li>
                <Link to="/ai-curriculum" className="hover:text-white transition-colors duration-200">
                  AI Curriculum Syllabus
                </Link>
              </li>
              <li>
                <Link to="/government" className="hover:text-white transition-colors duration-200">
                  Government Policy Alignment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-200">
                  Contact & Demonstrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Privacy */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Legal & Privacy
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <span className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Lorem Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Terms of Service Agreement
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Student Safety Charter
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Academic Compliance Standards
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Institutional Disclaimer
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription Input Box with State Validation & Social Media */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Newsletter Subscription
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
            </p>

            {/* Newsletter Form Area */}
            <div className="space-y-2.5">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </motion.div>
                      <span className="text-xs font-bold text-white">Subscribed Successfully!</span>
                    </div>
                    <p className="text-[11px] text-emerald-300 leading-snug">
                      Thank you! You have been added to our quarterly educational dispatch.
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-2 cursor-pointer pt-1 block"
                    >
                      Subscribe another email
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleNewsletterSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1">
                        <input
                          type="email"
                          placeholder="Enter your email..."
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === 'error') setStatus('idle');
                          }}
                          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-900 border text-white placeholder-slate-500 outline-none transition-all duration-300 ${
                            status === 'error'
                              ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                              : 'border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                          }`}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:opacity-60 rounded-xl transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-1.5 shrink-0 shadow-md shadow-blue-600/20"
                      >
                        {status === 'loading' ? (
                          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Join</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1.5 text-rose-400 text-xs pt-0.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Social Media Icons */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="#twitter"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#linkedin"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#github"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#youtube"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#mail"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            AI for School Platform Prototype · Populated with Dummy Data & Schemas
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Security Protocol</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Engagement</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Charter</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
