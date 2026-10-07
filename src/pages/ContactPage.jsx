import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Map, 
  Building2, 
  Clock,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.schoolName.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    // Basic regex check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMsg('Please provide a valid email format.');
      return;
    }

    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      schoolName: '',
      message: ''
    });
  };

  return (
    <div className="w-full">
      
      {/* Header Banner */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold tracking-wide shadow-xs">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>CONNECT WITH OUR CAMPUS LIAISONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
            Contact & School Demonstration
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </section>

      {/* Contact Layout: 50/50 Split */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Side 50%: Functional React Form with Validation States */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm text-left">
                
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-display">
                      Message Successfully Sent!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our representative will contact <strong>{formData.name}</strong> at <strong>{formData.email}</strong> regarding {formData.schoolName}.
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-4 px-6 py-2.5 text-xs font-bold text-blue-700 bg-blue-100 rounded-xl hover:bg-blue-200 transition-colors cursor-pointer"
                    >
                      Submit Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1 pb-2 border-b border-slate-200">
                      <h2 className="text-2xl font-bold text-slate-900 font-display">
                        Send an Inquiry
                      </h2>
                      <p className="text-xs text-slate-500">
                        Please provide your school coordinates. Fields with asterisk (*) are required.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none bg-white transition-all"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="john.doe@school.edu"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+1 (555) 019-2834"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* School Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        School / Institution Name *
                      </label>
                      <input
                        type="text"
                        name="schoolName"
                        required
                        placeholder="e.g. Apex High School"
                        value={formData.schoolName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none bg-white transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Message / Request Details
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none bg-white transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 rounded-xl shadow-md transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Demonstration Request</span>
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>

            {/* Right Side 50%: Info & Google Maps Placeholder */}
            <div className="lg:col-span-6 space-y-8 text-left">
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Headquarters & Academic Operations
                </h3>

                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold">Dummy Office Address</strong>
                      <span>123 Innovation Boulevard, Tech Park West, Suite 400, Silicon Valley, CA 94016</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold">Dummy Phone Number</strong>
                      <a href="tel:+15551234567" className="hover:text-blue-700">
                        +1 (555) 123-4567 / +1 (555) 987-6543
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold">Dummy Official Email</strong>
                      <a href="mailto:contact@loremipsum-ai.org" className="hover:text-blue-700">
                        contact@loremipsum-ai.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grey rectangular div acting as a Google Maps placeholder */}
              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-200/80 h-72 sm:h-80 flex flex-col items-center justify-center p-6 text-center space-y-3 relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-slate-300 text-slate-600 flex items-center justify-center shadow-xs">
                  <Map className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-800 font-display">
                    Interactive Map Canvas Placeholder
                  </div>
                  <p className="text-xs text-slate-500 font-mono">
                    Google Maps API Embed Simulation · Lat 37.4220° N, Long 122.0841° W
                  </p>
                </div>
                <div className="text-[11px] text-slate-400 bg-white/70 px-3 py-1 rounded-full border border-slate-300">
                  Embed Container: 100% width x 320px height
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
