import React from 'react';
import { ArrowRight, CheckCircle2, BookOpen, Layers, Award, FileText } from 'lucide-react';

export default function TargetedExamHubs({ onPreview }) {
  const examHubs = [
    {
      id: 'upsc',
      badge: 'UPSC CSE',
      badgeColor: 'bg-blue-50 text-[#155EEF] border-blue-200',
      title: 'Civil Services Examination',
      subtitle: 'Structured preparation for Prelims, Mains and Interview.',
      countTag: '42 Courses • 180+ Test Series',
      features: [
        'Complete Prelims GS Paper 1 & CSAT Coverage',
        'GS Mains Papers 1 - 4 Detailed Micro-Syllabus',
        'Daily Current Affairs & Editorials Mapping',
        '10 Years Solved PYQ Bank with Explanations'
      ],
      pdfName: 'UPSC_CSE_Micro_Syllabus_Sheet_2026.pdf',
      ctaText: 'Explore UPSC',
    },
    {
      id: 'appsc',
      badge: 'APPSC',
      badgeColor: 'bg-emerald-50 text-[#16A34A] border-emerald-200',
      title: 'Andhra Pradesh Public Service Commission',
      subtitle: 'Complete preparation for APPSC Group examinations.',
      countTag: '28 Courses • 120+ Test Series',
      features: [
        'APPSC Group 1 & Group 2 Official Paper Mapping',
        'AP History, Economy & State Reorganisation',
        'Telugu & English Medium Study Material',
        'Solved Question Papers with Verified Official Key'
      ],
      pdfName: 'APPSC_Group1_Group2_Syllabus_2026.pdf',
      ctaText: 'Explore APPSC',
    },
    {
      id: 'tgpsc',
      badge: 'TGPSC',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      title: 'Telangana Public Service Commission',
      subtitle: 'Focused preparation for Telangana government examinations.',
      countTag: '24 Courses • 95+ Test Series',
      features: [
        'TGPSC Group 1 & Group 2 Services Syllabus',
        'Telangana Movement, State Economy & Culture Notes',
        'High-Yield General Studies Exam Notes',
        'Full Length Prelims & Mains Mock Papers'
      ],
      pdfName: 'TGPSC_Group1_Group2_Syllabus_2026.pdf',
      ctaText: 'Explore TGPSC',
    },
  ];

  return (
    <section id="syllabus-hubs" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-[#E2E8F0] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Left Aligned Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            TARGETED PATHWAYS
          </span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Choose Your Exam
          </h2>
          <p className="mt-3 text-base lg:text-lg text-[#64748B] font-normal leading-relaxed">
            Focused preparation paths designed for your target examination.
          </p>
        </div>

        {/* 3 Equal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examHubs.map((hub) => (
            <div 
              key={hub.id}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm hover:shadow-md hover:border-[#155EEF] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Exam Badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${hub.badgeColor}`}>
                    {hub.badge}
                  </span>
                  <span className="text-xs font-semibold text-[#64748B] bg-slate-100 px-2.5 py-1 rounded-lg">
                    {hub.countTag}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#0F172A] group-hover:text-[#155EEF] transition-colors leading-snug">
                    {hub.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#64748B] font-normal leading-relaxed">
                    {hub.subtitle}
                  </p>
                </div>

                {/* 4 Feature Bullet Points */}
                <ul className="space-y-3 pt-2 border-t border-[#E2E8F0]">
                  {hub.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-sm font-medium text-[#0F172A]">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Card Footer CTA */}
              <div className="pt-8 mt-6 border-t border-[#E2E8F0]">
                <button
                  onClick={() => onPreview({ title: hub.title, pdfName: hub.pdfName })}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-50 hover:bg-[#155EEF] text-[#0F172A] hover:text-white font-bold text-sm rounded-xl border border-[#E2E8F0] hover:border-[#155EEF] transition-all group/btn shadow-sm"
                >
                  <span>{hub.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
