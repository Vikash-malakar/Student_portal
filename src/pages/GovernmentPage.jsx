import React from 'react';
import { governmentSchemes } from '../data';
import { 
  ShieldCheck, 
  FileText, 
  Building2, 
  CheckCircle2, 
  Download, 
  ArrowRight,
  Landmark,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GovernmentPage() {
  return (
    <div className="w-full">
      
      {/* Government Policy Hero */}
      <section className="py-20 lg:py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold font-mono tracking-wider shadow-xs">
            <Landmark className="w-3.5 h-3.5" />
            <span>OFFICIAL NATIONAL DIRECTIVE COMPLIANCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display">
            Government Policy Alignment
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </section>

      {/* Policy Section: Formal Two-Column Official Document Style */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-2 text-left">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
              SECTION 4.0 · STATUTORY GUIDELINES
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              National Policy Regulatory Framework
            </h2>
            <p className="text-sm text-slate-500">
              Official pedagogical document extracts governing K-12 artificial intelligence and robotics laboratories.
            </p>
          </div>

          {/* Two-Column Grid Mimicking Official Document Style */}
          <div className="p-8 sm:p-12 rounded-2xl bg-slate-50 border-2 border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 text-left">
              
              {/* Document Column 1 */}
              <div className="space-y-6 border-b lg:border-b-0 lg:border-r border-slate-200 pb-8 lg:pb-0 lg:pr-8">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pb-2 border-b border-slate-200">
                  <FileText className="w-4 h-4 text-blue-700" />
                  <span>REGULATION CLAUSE 12-A · SUBSECTION I</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  1. Mandated Computational Hours in School Curricula
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris fusce nec tellus sed augue.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
                </p>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 text-xs">
                  <strong className="block text-slate-800">Direct Compliance Mandate:</strong>
                  <span className="text-slate-500">
                    All participating institutions allocate minimum 90 minutes weekly of supervised lab prototyping.
                  </span>
                </div>
              </div>

              {/* Document Column 2 */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pb-2 border-b border-slate-200">
                  <Scale className="w-4 h-4 text-orange-600" />
                  <span>REGULATION CLAUSE 14-B · SUBSECTION II</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  2. Student Data Privacy & Sandboxed Hardware Protocols
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Pellentesque nibh felis, tristique in, tempus eu, placerat vel, felis. Mauris adipiscing mauris vitae odio. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Aliquam erat volutpat. Nulla facilisi. Sed a libero. Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce vel dui. Vivamus aliquet mauris eget magna. Excepteur sint occaecat cupidatat non proident.
                </p>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 text-xs">
                  <strong className="block text-slate-800">Verification Seal:</strong>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5 pt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Passed Audit 2026-GOV-9871
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Initiatives Cards: Grid with Official Shield Badges */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
              CENTRAL & STATE SCHEMES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              Integrated Government Initiatives
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          {/* Grid of Cards with Official Shield Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governmentSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 flex items-center justify-center shadow-xs">
                      <ShieldCheck className="w-7 h-7" />
                    </div>

                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {scheme.status}
                      </span>
                      <div className="text-[11px] font-mono text-slate-400 mt-1">
                        {scheme.code}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {scheme.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {scheme.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-700">{scheme.department}</span>
                  <span className="text-blue-700 font-semibold cursor-pointer hover:underline">
                    View Circular
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-md transition-all"
            >
              <span>Download Complete Government Policy Dossier</span>
              <Download className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
