import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Github,
  Youtube,
  Mail,
  ArrowRight,
  Sparkles,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (input) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim());
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 overflow-hidden">

      {/* ================= TOP CTA ================= */}
      <div className="relative border-b border-slate-800 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                AI-Powered Education
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Ready to shape the{" "}
                <span className="text-blue-500">future of education?</span>
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                Explore AI-powered learning resources and help us build a
                smarter, more accessible education ecosystem.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/20 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">

          {/* ================= BRAND ================= */}
          <div className="sm:col-span-2 lg:col-span-1">

            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">
                    AI for School
                  </span>

                  <span className="text-[9px] font-bold tracking-wider bg-orange-500 text-white px-1.5 py-0.5 rounded">
                    INITIATIVE
                  </span>
                </div>

                <span className="text-[11px] text-slate-500">
                  Educational Technology Platform
                </span>
              </div>
            </Link>

            <p className="mt-5 text-sm text-slate-400 leading-relaxed">
              Empowering students, educators and institutions with
              responsible AI education, practical learning resources and
              future-ready digital skills.
            </p>

            {/* Contact Info */}
            <div className="mt-5 space-y-3">

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>hello@aiforschool.org</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <span>India</span>
              </div>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">

              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["AI Curriculum", "/ai-curriculum"],
                ["Government", "/government"],
                ["Careers", "/careers"],
                ["Contact", "/contact"],
              ].map(([name, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= RESOURCES ================= */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Resources
            </h4>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/ai-curriculum"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Learning Resources
                </Link>
              </li>

              <li>
                <Link
                  to="/ai-curriculum"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  AI Curriculum
                </Link>
              </li>

              <li>
                <Link
                  to="/government"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Education Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Our Initiative
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Request a Demo
                </Link>
              </li>

            </ul>
          </div>

          {/* ================= NEWSLETTER ================= */}
          <div>

            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Stay Connected
            </h4>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Subscribe to receive updates about AI education, learning
              resources and our latest initiatives.
            </p>

            <AnimatePresence mode="wait">

              {status === "success" ? (

                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />

                    <span className="text-sm font-semibold text-white">
                      Successfully subscribed!
                    </span>
                  </div>

                  <p className="text-xs text-emerald-300 mt-2">
                    Thank you for joining our education community.
                  </p>

                  <button
                    onClick={resetForm}
                    className="text-xs text-emerald-400 hover:text-emerald-300 underline mt-3"
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
                >

                  <div className="flex flex-col gap-2">

                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);

                        if (status === "error") {
                          setStatus("idle");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 outline-none transition-all ${
                        status === "error"
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      }`}
                    />

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                    >

                      {status === "loading" ? (
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Subscribe
                          <Send className="w-4 h-4" />
                        </>
                      )}

                    </button>

                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 mt-2 text-xs text-red-400"
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errorMessage}
                    </motion.div>
                  )}

                </motion.form>

              )}

            </AnimatePresence>

            {/* Social */}
            <div className="mt-6">

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Follow Us
              </p>

              <div className="flex items-center gap-2">

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-all duration-200"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                <a
                  href="mailto:hello@aiforschool.org"
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>

              </div>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-slate-500 text-center md:text-left">
            © {currentYear} AI for School. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">

            <button className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>

            <button className="hover:text-slate-300 transition-colors">
              Terms of Service
            </button>

            <button className="hover:text-slate-300 transition-colors">
              Student Safety
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}