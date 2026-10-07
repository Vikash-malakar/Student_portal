import React from 'react';
import { teamData } from '../data';
import { Target, Eye, Users, Linkedin, Twitter, Mail, CheckCircle2, Award, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full">
      
      {/* Hero Banner: Full width banner with centered title */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-400 text-xs font-bold font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>INSTITUTIONAL BACKGROUND</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white">
            About Our Initiative
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </section>

      {/* Mission & Vision: Two Distinct Layout Blocks */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Block 1: Image Left / Text Right (Our Mission) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Placeholder on Left */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-gradient-to-br from-blue-100 via-slate-100 to-blue-50 border border-slate-200 h-80 sm:h-96 flex flex-col items-center justify-center p-8 text-center shadow-lg relative overflow-hidden group">
                <div className="w-20 h-20 rounded-2xl bg-blue-700 text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Target className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-slate-800 font-display">
                  Mission Graphic Placeholder
                </div>
                <p className="text-xs text-slate-500 max-w-xs mt-1">
                  https://via.placeholder.com/600x400?text=Educational+Mission
                </p>
                <div className="absolute bottom-4 text-[11px] font-mono text-slate-400">
                  Figure 1.0 · Pedagogical Scaffolding
                </div>
              </div>
            </div>

            {/* Text on Right */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-bold font-mono">
                PILLAR 01 · OUR MISSION
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                Democratizing Computational Literacy
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Lorem ipsum dolor sit amet consectetur</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sed do eiusmod tempor incididunt ut labore</span>
                </div>
              </div>
            </div>

          </div>

          {/* Block 2: Text Left / Image Right (Our Vision) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text on Left */}
            <div className="lg:col-span-6 space-y-4 text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-orange-50 text-orange-700 text-xs font-bold font-mono">
                PILLAR 02 · OUR VISION
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                Building Future-Ready Young Innovators
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Excepteur sint occaecat cupidatat non proident</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sunt in culpa qui officia deserunt mollit anim</span>
                </div>
              </div>
            </div>

            {/* Image Placeholder on Right */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-100 via-slate-100 to-indigo-50 border border-slate-200 h-80 sm:h-96 flex flex-col items-center justify-center p-8 text-center shadow-lg relative overflow-hidden group">
                <div className="w-20 h-20 rounded-2xl bg-indigo-700 text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Eye className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-slate-800 font-display">
                  Vision Graphic Placeholder
                </div>
                <p className="text-xs text-slate-500 max-w-xs mt-1">
                  https://via.placeholder.com/600x400?text=Future+Vision+Framework
                </p>
                <div className="absolute bottom-4 text-[11px] font-mono text-slate-400">
                  Figure 2.0 · K-12 Long-Term Roadmap
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Team Section: Grid of Profile Cards */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>ACADEMIC LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              Meet Our Leadership Team
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Grid of Profile Cards with circular placeholder image, dummy name, title, social links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Circular Placeholder Image */}
                  <div className="relative mx-auto w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <div className={`w-full h-full ${member.avatarBg} text-white flex items-center justify-center text-xl font-bold font-mono`}>
                      {member.image}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-blue-700 mt-0.5">
                      {member.title}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a
                    href="#linkedin"
                    className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-700 hover:border-blue-300 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#twitter"
                    className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-700 hover:border-blue-300 transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#mail"
                    className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-700 hover:border-blue-300 transition-colors"
                    aria-label="Email Address"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
