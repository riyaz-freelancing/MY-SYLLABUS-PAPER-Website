import React from 'react';
import { Phone, Mail, Sparkles } from 'lucide-react';

export default function NoticeBar() {
  return (
    <div className="bg-[#0F172A] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#155EEF] text-white text-[11px] font-semibold">
            <Sparkles className="w-3 h-3 text-[#F5B800]" />
            <span>Announcement</span>
          </span>
          <span className="text-slate-200">
            Admissions Open for UPSC, APPSC & TGPSC — Start Your Preparation Today
          </span>
        </div>
        <div className="hidden md:flex items-center gap-5 text-slate-400 font-medium text-xs">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#155EEF]" />
            <span>+91 98765 43210</span>
          </a>
          <span className="text-slate-700">|</span>
          <a href="mailto:support@mysyllabuspaper.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#155EEF]" />
            <span>support@mysyllabuspaper.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
