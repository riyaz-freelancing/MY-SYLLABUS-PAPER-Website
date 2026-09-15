import React from 'react';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

export default function EditorialInsightsSection() {
  const articles = [
    {
      title: 'How to Prepare for UPSC Prelims GS Paper 1',
      category: 'UPSC Strategy',
      description: 'Step-by-step roadmap to cover ancient history, economy, polity and current affairs with high revision yield.',
      date: '12 Sep 2026',
      readTime: '8 min read',
      href: '#top',
    },
    {
      title: 'UPSC Mains Answer Writing Strategy & Structure',
      category: 'Mains Mastery',
      description: 'How to frame introduction, core arguments, diagrams and conclusion within time and word limits.',
      date: '10 Sep 2026',
      readTime: '6 min read',
      href: '#top',
    },
    {
      title: 'How to Read Current Affairs for Competitive Exams',
      category: 'Current Affairs',
      description: 'Filter newspaper editorials efficiently and map news articles directly to official syllabus papers.',
      date: '08 Sep 2026',
      readTime: '5 min read',
      href: '#top',
    },
    {
      title: 'APPSC & TGPSC Preparation Strategy for State Officers',
      category: 'State PSC',
      description: 'Master regional history, economy, geography and state reorganisation acts for top state PSC ranks.',
      date: '05 Sep 2026',
      readTime: '7 min read',
      href: '#top',
    },
  ];

  return (
    <section id="blogs" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-[#E2E8F0] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Left Aligned Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            STRATEGY & INSIGHTS
          </span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Strategy Guides & Editorial Insights
          </h2>
          <p className="mt-3 text-base lg:text-lg text-[#64748B] font-normal leading-relaxed">
            In-depth preparation guides, syllabus strategies, and exam analysis written by experts.
          </p>
        </div>

        {/* 4 Article Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((art, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md hover:border-[#155EEF] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#64748B]">
                  <span className="font-bold text-[#155EEF] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                    {art.category}
                  </span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#155EEF] transition-colors leading-snug line-clamp-2">
                  {art.title}
                </h3>

                <p className="text-xs text-[#64748B] font-normal leading-relaxed line-clamp-3">
                  {art.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                <span className="text-[#64748B] font-medium">{art.date}</span>
                <a 
                  href={art.href}
                  className="font-bold text-[#155EEF] hover:text-[#0F172A] inline-flex items-center gap-1 group/btn"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
