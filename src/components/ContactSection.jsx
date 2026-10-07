import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqsData } from '../data/faqsData';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    schoolName: '',
    contactName: '',
    designation: 'Principal',
    email: '',
    phone: '',
    city: '',
    studentsCount: '100-300 Students',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.schoolName || !formData.email || !formData.phone) {
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide shadow-xs">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>CONNECT WITH OUR ACADEMIC TEAM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Bring AI for School to Your Campus
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Schedule an on-campus interactive AI demonstration, lab viability audit, or customized timetable discussion with SSD Prayas education specialists.
          </p>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out space-y-6">
              <h3 className="text-xl font-bold text-slate-900 font-display">
                National Program Office
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">SSD Prayas Foundation Headquarters</strong>
                    <span>Tech Innovation Centre, Sector 62, Noida / NCR, India & Outreach Hubs in Pune, Bengaluru & Jaipur</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">School Partnership Helpline</strong>
                    <a href="tel:+919876543210" className="hover:text-blue-700 font-medium transition-colors duration-300">
                      +91 98765 43210 / +91 (0120) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Email Enquiries</strong>
                    <a href="mailto:schools@ssdprayas.com" className="hover:text-blue-700 font-medium transition-colors duration-300">
                      schools@ssdprayas.com / support@ssdprayas.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive FAQs Accordion */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                {faqsData.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-800 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? (
                        <ChevronUp className="w-4 h-4 text-blue-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    Thank You, Proposal Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Our Senior Academic Liaison has received your school inquiry for <strong className="text-slate-800">{formData.schoolName || 'your campus'}</strong>. We will contact you at <strong className="text-slate-800">{formData.email}</strong> within 24 business hours to arrange the sample lab kit walkthrough.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="space-y-1 pb-2 border-b border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-900 font-display">
                      Book an On-Campus Demo
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out the form below. Zero fee or obligation for demo sessions.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      School / Institution Name *
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      required
                      placeholder="e.g. Cambridge World School"
                      value={formData.schoolName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 ease-in-out"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        required
                        placeholder="e.g. Dr. R. K. Sharma"
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Designation
                      </label>
                      <select
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 ease-in-out bg-white"
                      >
                        <option value="Principal">Principal / Head of School</option>
                        <option value="Director">Director / Trustee</option>
                        <option value="STEM Coordinator">STEM / Computer HOD</option>
                        <option value="Teacher">Computer Science Teacher</option>
                        <option value="Parent">Parent Representative</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="principal@school.edu.in"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        City & State
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="e.g. Lucknow, UP"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Eligible Students (Grades 5-12)
                      </label>
                      <select
                        name="studentsCount"
                        value={formData.studentsCount}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 ease-in-out bg-white"
                      >
                        <option value="Under 100 Students">Under 100 Students</option>
                        <option value="100-300 Students">100 – 300 Students</option>
                        <option value="300-800 Students">300 – 800 Students</option>
                        <option value="800+ Students">800+ Students</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Specific Requirements or Target Launch Term
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="e.g. Looking to pilot with Grades 6 and 7 during upcoming academic term starting July..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 ease-in-out resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 rounded-xl shadow-md shadow-blue-700/25 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit School Partnership Request</span>
                    </button>
                    <div className="text-center text-[11px] text-slate-400 mt-2">
                      🔒 Your contact information is never shared with third parties.
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
