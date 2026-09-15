import React from 'react';

export default function StatsCounterBar() {
  const stats = [
    { value: '350+', label: 'Official Syllabus Papers' },
    { value: '1,420+', label: 'Active Enrolled Aspirants' },
    { value: '10,000+', label: 'Solved PYQs & Keys' },
    { value: '15+', label: 'Top 50 State Ranks' },
    { value: '3 Core', label: 'APPSC • TGPSC • UPSC' },
  ];

  return (
    <section className="bg-white border-b border-[#E2E8F0] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0]">
          {stats.map((item, idx) => (
            <div key={idx} className={`flex flex-col items-center justify-center px-2 ${idx > 0 ? 'pt-4 md:pt-0' : ''}`}>
              <span className="text-2xl lg:text-3xl font-bold text-[#155EEF] tracking-tight">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#64748B] mt-1 text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
