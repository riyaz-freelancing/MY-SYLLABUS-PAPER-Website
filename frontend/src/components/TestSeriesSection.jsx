import React from 'react';
import { CheckCircle2, ArrowRight, Award, Zap, Sparkles, HelpCircle, Layers } from 'lucide-react';

export default function TestSeriesSection({ onEnroll }) {
  const testPlans = [
    {
      id: 'upsc-tests',
      badge: 'UPSC CSE 2026',
      featured: true,
      featuredText: 'Most Popular',
      title: 'UPSC Civil Services Test Series',
      description: 'Comprehensive All-India Prelims & Mains test series with detailed model answers and Rank Predictor.',
      testCount: '48 Full Length & Sectional Tests',
      questionCount: '4,500+ Exam-Standard Questions',
      difficulty: 'Simulated UPSC Level (Moderate to High)',
      price: '₹4,999',
      originalPrice: '₹9,999',
      features: [
        '30 Prelims GS Paper 1 & CSAT Mocks',
        '18 Mains GS 1-4 Model Paper Tests',
        'Detailed Explanation PDF & Video Solutions',
        'All-India Ranking & Percentile Analytics',
      ],
    },
    {
      id: 'appsc-tests',
      badge: 'APPSC STATE SPECIAL',
      featured: false,
      title: 'APPSC Group 1 & 2 Test Series',
      description: 'State-specific mock papers engineered for Andhra Pradesh Civil Services examination pattern.',
      testCount: '36 Dedicated Mock Papers',
      questionCount: '3,200+ Practice Questions',
      difficulty: 'Official APPSC Pattern & Difficulty',
      price: '₹2,999',
      originalPrice: '₹5,999',
      features: [
        'AP History & Economy Special Test Papers',
        'AP Reorganisation Act & Welfare Schemes',
        'Full Length Prelims & Mains Mock Exams',
        'Verified Answer Keys with Explanations',
      ],
    },
    {
      id: 'tgpsc-tests',
      badge: 'TGPSC STATE SPECIAL',
      featured: false,
      title: 'TGPSC Group 1 & 2 Test Series',
      description: 'Tailored practice papers covering Telangana Movement, State Economy & General Studies.',
      testCount: '32 Full Length Mock Tests',
      questionCount: '3,000+ Subject MCQs',
      difficulty: 'Exact TGPSC Exam Format',
      price: '₹2,999',
      originalPrice: '₹5,999',
      features: [
        'Telangana History, Culture & Movement Notes',
        'General Studies & Mental Ability Tests',
        'Paper 1 - Paper 6 Mains Model Papers',
        'Performance Scorecard & Time Analysis',
      ],
    },
  ];

  return (
    <section id="test-series" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-[#E2E8F0] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Left Aligned Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            EVALUATION & MOCK TESTS
          </span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] tracking-tight leading-tight">
            All-India Prelims & Mains Test Series
          </h2>
          <p className="mt-3 text-base lg:text-lg text-[#64748B] font-normal leading-relaxed">
            Practice with exam-focused tests designed to improve accuracy, speed and confidence.
          </p>
        </div>

        {/* 3 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl p-8 flex flex-col justify-between relative transition-all ${
                plan.featured 
                  ? 'border-2 border-[#155EEF] shadow-xl hover:shadow-2xl' 
                  : 'border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#155EEF]'
              }`}
            >
              {/* Featured Ribbon Badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#155EEF] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F5B800]" />
                  <span>{plan.featuredText}</span>
                </div>
              )}

              <div className="space-y-6">
                
                {/* Badge & Title */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-[#0F172A] border border-[#E2E8F0]">
                    {plan.badge}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#0F172A] mt-4 leading-snug">
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#64748B] font-normal leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Metadata Tags */}
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 text-xs font-semibold text-[#0F172A]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Total Tests:</span>
                    <span className="text-[#155EEF]">{plan.testCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Questions:</span>
                    <span>{plan.questionCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Difficulty:</span>
                    <span className="text-emerald-700">{plan.difficulty}</span>
                  </div>
                </div>

                {/* Feature Checkmarks */}
                <ul className="space-y-2.5 pt-2">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs font-medium text-[#0F172A]">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Price & CTA */}
              <div className="pt-6 mt-6 border-t border-[#E2E8F0] space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#0F172A]">{plan.price}</span>
                  <span className="text-xs text-[#64748B] line-through font-medium">{plan.originalPrice}</span>
                  <span className="text-xs font-semibold text-[#16A34A] bg-emerald-50 px-2 py-0.5 rounded">
                    50% OFF
                  </span>
                </div>

                <button
                  onClick={() => onEnroll(plan.title)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm ${
                    plan.featured 
                      ? 'bg-[#155EEF] hover:bg-[#0F172A] text-white' 
                      : 'bg-slate-900 hover:bg-[#155EEF] text-white'
                  }`}
                >
                  <span>View Test Series</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
