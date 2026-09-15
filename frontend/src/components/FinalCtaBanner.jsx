import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function FinalCtaBanner({ onOpenDiagnostic }) {
  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A] font-sans">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-slate-800 p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
        
        <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#F5B800] border border-[#F5B800]/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#F5B800]" />
            <span>START YOUR PREPARATION TODAY</span>
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-tight text-white">
            Don't Leave Your Preparation to Chance. <br />
            <span className="text-[#F5B800]">Own Your Syllabus. Own Your Preparation.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Build a structured preparation plan with MSP and take your next step with confidence.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={onOpenDiagnostic}
              className="flex items-center gap-2 px-8 py-4 bg-[#F5B800] hover:bg-yellow-400 text-[#0F172A] font-bold text-sm rounded-xl shadow-lg transition-all active:scale-95"
            >
              <span>Start Your Preparation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDiagnostic}
              className="flex items-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 font-bold text-sm rounded-xl transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Talk to a Mentor</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
