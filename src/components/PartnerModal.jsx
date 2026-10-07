import React, { useState } from 'react';
import { X, CheckCircle2, Building2, Send, Sparkles } from 'lucide-react';

export default function PartnerModal({ isOpen, onClose, preselectedModule }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    city: '',
    contactPerson: '',
    designation: 'Principal',
    phone: '',
    email: '',
    studentCount: '150-300 Students',
    trackInterest: preselectedModule ? preselectedModule.title : 'Full Annual Curriculum (Grades 5-10)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden text-left animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all duration-300 ease-in-out cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              School Partnership Requested!
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We have dispatched your inquiry to our Regional Schools Team. An academic coordinator will get in touch with you shortly to schedule an on-campus AI demonstration.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 px-6 py-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-all duration-300 ease-in-out cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1 pr-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>INSTITUTIONAL ENROLLMENT</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Partner with AI for School
              </h3>
              <p className="text-xs text-slate-500">
                Equip your school with verified AI labs, certified faculty, and hands-on tinkering kits.
              </p>
            </div>

            {preselectedModule && (
              <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-xs text-orange-900">
                Inquiring specifically for: <strong>{preselectedModule.title}</strong>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                School Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. St. Francis High School"
                value={formData.schoolName}
                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all duration-300 ease-in-out"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Principal / Trustee"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all duration-300 ease-in-out"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  City, State *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pune, MH"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all duration-300 ease-in-out"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Official Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="admin@school.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all duration-300 ease-in-out"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all duration-300 ease-in-out"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Estimated Number of Students
              </label>
              <select
                value={formData.studentCount}
                onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none bg-white transition-all duration-300 ease-in-out"
              >
                <option value="50-150 Students">50 – 150 Students (Single Grade Pilot)</option>
                <option value="150-300 Students">150 – 300 Students (Middle School)</option>
                <option value="300-600 Students">300 – 600 Students (K-12 Wing)</option>
                <option value="600+ Students">600+ Students (Whole Campus)</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 rounded-xl shadow-md transition-all duration-300 ease-in-out cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit School Demo Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
