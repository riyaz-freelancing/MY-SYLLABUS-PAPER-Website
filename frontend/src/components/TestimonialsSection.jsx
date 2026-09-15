import React from 'react';
import { Star, Award, CheckCircle2, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'K. Suresh Kumar',
      exam: 'APPSC Group 1 Services',
      achievement: 'Rank 14 — Deputy Collector',
      year: '2025 Selection',
      quote: 'MSP helped me create a consistent preparation routine and improved my answer writing. The micro-syllabus breakdown made complex subjects manageable.',
      imageBg: 'from-blue-600 to-indigo-700',
    },
    {
      name: 'Ananya Reddy',
      exam: 'UPSC Civil Services',
      achievement: 'AIR 84 — Indian Administrative Service',
      year: '2024 Selection',
      quote: 'The daily current affairs mapping to GS Mains paper topics saved me 2 hours every day. Highly recommended for any serious UPSC aspirant.',
      imageBg: 'from-[#155EEF] to-[#0F172A]',
    },
    {
      name: 'M. Rajeshwar Rao',
      exam: 'TGPSC Group 1 Services',
      achievement: 'Rank 8 — Commercial Tax Officer',
      year: '2025 Selection',
      quote: 'Telangana Movement and State Economy notes were exceptionally accurate to official paper questions. Evaluators feedback was invaluable.',
      imageBg: 'from-purple-600 to-slate-900',
    },
  ];

  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E8F0] font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Left Aligned Section Title */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] tracking-tight leading-tight">
            From MSP Aspirants to Serving Officers
          </h2>
          <p className="mt-3 text-base lg:text-lg text-[#64748B] font-normal leading-relaxed">
            Hear how our structured syllabus approach helped aspirants achieve top ranks.
          </p>
        </div>

        {/* 3 Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 flex flex-col justify-between hover:border-[#155EEF] transition-all shadow-sm"
            >
              <div className="space-y-4">
                
                {/* Header: Avatar, Name & Achievement */}
                <div className="flex items-center gap-3 pb-4 border-b border-[#E2E8F0]">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.imageBg} text-white font-bold text-lg flex items-center justify-center shrink-0`}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A]">{item.name}</h3>
                    <span className="text-xs font-semibold text-[#155EEF] block">{item.achievement}</span>
                    <span className="text-[11px] text-[#64748B]">{item.exam} • {item.year}</span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#0F172A] font-medium leading-relaxed italic">
                  "{item.quote}"
                </p>

              </div>

              {/* Verified Tag */}
              <div className="pt-4 mt-6 border-t border-[#E2E8F0] flex items-center gap-1.5 text-xs font-semibold text-[#16A34A]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Verified Selection Outcome</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
