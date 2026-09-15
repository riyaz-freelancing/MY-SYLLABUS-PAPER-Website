import React, { useState } from 'react';
import { 
  FileText, 
  HelpCircle, 
  Edit3, 
  Globe, 
  Phone, 
  MessageCircle, 
  Send, 
  Instagram, 
  User, 
  X, 
  ChevronUp 
} from 'lucide-react';

export default function DailyBriefingSection({ onDownloadPdf }) {
  const [showFloatingMenu, setShowFloatingMenu] = useState(true);

  const cardData = [
    {
      id: 'daily-ca',
      title: 'Daily Current Affairs',
      headerBg: 'bg-[#9333ea]', // Solid Purple Header like reference image 1
      icon: FileText,
      items: [
        '1. CURRENT AFFAIRS – 20-04-2026',
        '2. CURRENT AFFAIRS – 18-04-2026',
        '3. CURRENT AFFAIRS – 16-04-2026',
        '4. CURRENT AFFAIRS – 15-04-2026',
        '5. CURRENT AFFAIRS – 14-04-2026',
        '6. CURRENT AFFAIRS – 13-04-2026',
        '7. CURRENT AFFAIRS – 11-04-2026',
        '8. CURRENT AFFAIRS – 10-04-2026',
        '9. CURRENT AFFAIRS – 08-04-2026',
        '10. CURRENT AFFAIRS – 07-04-2026',
        '11. CURRENT AFFAIRS – 06-04-2026',
        '12. CURRENT AFFAIRS – 04-04-2026',
        '13. CURRENT AFFAIRS – 03-04-2026',
        '14. CURRENT AFFAIRS – 01-04-2026',
      ]
    },
    {
      id: 'ca-quiz',
      title: 'Daily CA Quiz',
      headerBg: 'bg-[#dc2626]', // Solid Red Header like reference image 1
      icon: HelpCircle,
      items: [
        '1. 15 September 2026 Daily Current Affairs Quiz',
        '2. 14 September 2026 Daily Current Affairs Quiz',
        '3. 12 September 2026 Daily Current Affairs Quiz',
        '4. 10 September 2026 Daily Current Affairs Quiz',
        '5. 04 September 2026 Daily Current Affairs Quiz',
        '6. 03 September 2026 Daily Current Affairs Quiz',
        '7. 02 September 2026 Daily Current Affairs Quiz',
        '8. 01 September 2026 Daily Current Affairs Quiz',
        '9. 30 August 2026 Daily Current Affairs Quiz',
        '10. 28 August 2026 Daily Current Affairs Quiz',
        '11. 26 August 2026 Daily Current Affairs Quiz',
        '12. 24 August 2026 Daily Current Affairs Quiz',
        '13. 22 August 2026 Daily Current Affairs Quiz',
        '14. 20 August 2026 Daily Current Affairs Quiz',
      ]
    },
    {
      id: 'mains-writing',
      title: 'Mains Answer Writing',
      headerBg: 'bg-[#0d9488]', // Solid Teal Header like reference image 1
      icon: Edit3,
      items: [
        '1. Mains Answer Writing Practice – 20 April 2026',
        '2. Mains Answer Writing Practice – 18 April 2026',
        '3. Mains Answer Writing Practice – 16 April 2026',
        '4. Mains Answer Writing Practice – 15 April 2026',
        '5. Mains Answer Writing Practice – 14 April 2026',
        '6. Mains Answer Writing Practice – 13 April 2026',
        '7. Mains Answer Writing Practice – 11 April 2026',
        '8. Mains Answer Writing Practice – 10 April 2026',
        '9. Mains Answer Writing Practice – 08 April 2026',
        '10. Mains Answer Writing Practice – 07 April 2026',
        '11. Mains Answer Writing Practice – 06 April 2026',
        '12. Mains Answer Writing Practice – 04 April 2026',
        '13. Mains Answer Writing Practice – 03 April 2026',
        '14. Mains Answer Writing Practice – 01 April 2026',
      ]
    },
    {
      id: 'articles-editorials',
      title: 'Articles / Editorials',
      headerBg: 'bg-[#be185d]', // Solid Magenta Header like reference image 1
      icon: Globe,
      items: [
        '1. Sprouting sustainable, nutrition-sensitive food systems',
        '2. The building blocks of an India-U.S. energy future',
        '3. The post of Deputy Speaker is not symbolic or optional',
        '4. Tackle heatwaves with short- and long-term measures',
        '5. India, rising power demand and the \'hydrogen factor\'',
        '6. Soyuz Spacecraft & Space Exploration Policy',
        '7. Shaping a future-ready workforce for Civil Services',
        '8. The other space race — the geopolitics of satellite net',
        '9. Colossal wastage that is food for thought',
        '10. Federal Structure & Governor Role in State Legislation',
        '11. Monetary Policy Committee & Inflation Targeting',
        '12. Temple Architecture & Cultural Heritage Preservation',
        '13. Ethics in Public Service & Governance Reforms',
        '14. Disaster Management & Climate Resilience Protocols',
      ]
    },
  ];

  return (
    <section id="daily-briefing" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#f3f4f6] border-b border-slate-200 font-sans relative">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full inline-block mb-2">
            DAILY ACADEMIC UPDATES
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight">
            Current Affairs, Quizzes & Editorials
          </h2>
          <p className="mt-2 text-sm text-[#64748B]">
            Daily updated examination links mapped directly to GS Prelims & Mains Syllabus.
          </p>
        </div>

        {/* 4 Column Cards Grid - Exactly Matching Reference Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {cardData.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                {/* Header Banner - Solid Color with Rounded Pills like Image 1 */}
                <div className={`${card.headerBg} p-4 text-white font-bold text-base flex items-center justify-center gap-2 shadow-inner rounded-t-2xl`}>
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                  <span>{card.title}</span>
                </div>

                {/* List Container with Custom Scrollbar & Rose Text like Image 1 */}
                <div className="p-4 max-h-[380px] overflow-y-auto space-y-2 text-xs bg-slate-50/50 scrollbar-thin">
                  {card.items.map((item, iIdx) => (
                    <div 
                      key={iIdx}
                      onClick={() => onDownloadPdf(item)}
                      className="py-2 px-2.5 rounded-lg border-b border-slate-100 text-[#e11d48] font-semibold hover:bg-rose-50 hover:text-rose-700 cursor-pointer transition-colors leading-snug line-clamp-2"
                      title={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
