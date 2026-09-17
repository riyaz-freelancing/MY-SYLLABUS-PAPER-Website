import React from 'react';
import { Phone, Mail, Sparkles, MessageCircle } from 'lucide-react';

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
        <div className="hidden md:flex items-center gap-4 text-slate-400 font-medium text-xs">
          <a href="https://wa.me/917013923933?text=Hi%20My%20Syllabus%20Paper%2C%20I%20want%20to%20know%20more%20about%20your%20courses%20and%20exam%20preparation." target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-green-400 text-green-400 font-semibold transition-colors">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp: +91 70139 23933</span>
          </a>
          <span className="text-slate-700">|</span>
          <a href="tel:+917013923933" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#155EEF]" />
            <span>+91 70139 23933</span>
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
