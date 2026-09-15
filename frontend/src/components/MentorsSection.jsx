import React from 'react';
import { Check, ArrowRight, Award, ShieldCheck, UserCheck } from 'lucide-react';

export default function MentorsSection({ onBookSession }) {
  const benefits = [
    'Personal study strategy',
    'Answer writing feedback',
    'Exam planning',
    'Performance review',
    'Doubt support',
  ];

  const mentors = [
    {
      name: 'Dr. K. R. Sharma',
      role: 'Ex-Civil Servant & Faculty Head',
      experience: '16+ Years Experience in UPSC CSE Mentorship',
      guided: 'Guided 120+ Selected Officers',
      tag: 'UPSC Expert',
    },
    {
      name: 'S. Venkatesh, IRS',
      role: 'Senior State Exam Consultant',
      experience: 'Specialist in APPSC & TGPSC Reorganisation Notes',
      guided: 'Guided 85+ State Rankers',
      tag: 'State PSC Specialist',
    },
  ];

  return (
    <section className="bg-[#0F172A] text-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Mentorship Copy & Benefits */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5B800] bg-yellow-400/10 border border-yellow-400/20 px-3.5 py-1.5 rounded-full inline-block">
              PERSONAL FACULTY GUIDANCE
            </span>

            <h2 className="text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
              Learn From Experience. <br />
              <span className="text-[#F5B800]">Prepare With Direction.</span>
            </h2>

            <p className="text-base lg:text-lg text-slate-300 font-normal leading-relaxed">
              Get guidance from experienced mentors who understand the demands of competitive examinations.
            </p>

            {/* 5 Benefits Checkmarks */}
            <div className="space-y-3 pt-2">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-base font-semibold text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-[#16A34A]/20 border border-[#16A34A] text-[#16A34A] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onBookSession}
                className="flex items-center gap-2 px-8 py-4 bg-[#155EEF] hover:bg-white hover:text-[#0F172A] text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
              >
                <span>Explore Mentorship</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Mentor Profile Cards */}
          <div className="lg:col-span-6 space-y-4">
            {mentors.map((mentor, mIdx) => (
              <div 
                key={mIdx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-[#155EEF] transition-all flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#155EEF] to-indigo-600 text-white font-bold text-xl flex items-center justify-center shrink-0 shadow-md">
                  {mentor.name.charAt(4) || mentor.name.charAt(0)}
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{mentor.name}</h3>
                    <span className="text-[11px] font-semibold text-[#F5B800] bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-0.5 rounded">
                      {mentor.tag}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-300">{mentor.role}</p>
                  <p className="text-xs text-slate-400">{mentor.experience}</p>
                  <div className="text-[11px] font-bold text-emerald-400 pt-1 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{mentor.guided}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
