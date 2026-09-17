import React from 'react';
import logoImg from '../assets/logo-msp.jpeg';
import { Youtube, Instagram, Linkedin, AtSign, Phone, MessageCircle, Send } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-[#0F172A] text-slate-300 font-sans border-t border-slate-800 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 5 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Logo & Brand Description (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#top" className="flex items-center gap-3 shrink-0">
              <img 
                src={logoImg} 
                alt="My Syllabus Paper Logo" 
                className="w-11 h-11 object-contain rounded-full bg-white p-0.5 border border-slate-700 shadow-sm" 
              />
              <span className="text-lg font-bold tracking-tight text-white leading-tight">
                MY SYLLABUS PAPER
              </span>
            </a>
            <p className="text-sm text-slate-300 font-medium leading-relaxed max-w-sm">
              My Syllabus Paper helps UPSC, APPSC and TGPSC aspirants prepare with structured courses, tests, current affairs and mentorship.
            </p>
            
            {/* Social Media & Contact Icons inside Footer */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a href="tel:+917013923933" className="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors shadow-sm" title="Call +91 7013923933">
                <Phone className="w-4.5 h-4.5" />
              </a>
              <a href="https://wa.me/917013923933?text=Hi%20My%20Syllabus%20Paper%2C%20I%20want%20to%20know%20more%20about%20your%20courses%20and%20exam%20preparation." target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-green-600 hover:bg-green-500 text-white flex items-center justify-center transition-colors shadow-sm" title="Chat on WhatsApp (+91 7013923933)">
                <MessageCircle className="w-4.5 h-4.5" />
              </a>
              <a href="https://t.me" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-sky-500 hover:bg-sky-400 text-white flex items-center justify-center transition-colors shadow-sm" title="Telegram">
                <Send className="w-4.5 h-4.5" />
              </a>
              <a href="https://www.instagram.com/mysyllabuspaper?stkn=MTdqd2E2cGY1ZXJuMA==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-pink-600 hover:bg-pink-500 text-white flex items-center justify-center transition-colors shadow-sm" title="Follow us on Instagram (@mysyllabuspaper)">
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-red-600 hover:bg-red-500 text-white flex items-center justify-center transition-colors shadow-sm" title="YouTube">
                <Youtube className="w-4.5 h-4.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-colors shadow-sm" title="LinkedIn">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a href="https://threads.net" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#155EEF] text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-sm" title="Threads">
                <AtSign className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Exams (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Exams</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li><a href="#syllabus-hubs" className="hover:text-white transition-colors">UPSC Civil Services</a></li>
              <li><a href="#syllabus-hubs" className="hover:text-white transition-colors">APPSC Group 1 & 2</a></li>
              <li><a href="#syllabus-hubs" className="hover:text-white transition-colors">TGPSC Group 1 & 2</a></li>
            </ul>
          </div>

          {/* Column 3: Learn (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Learn</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li><a href="#live-cohorts" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#test-series" className="hover:text-white transition-colors">Test Series</a></li>
              <li><a href="#daily-briefing" className="hover:text-white transition-colors">Current Affairs</a></li>
              <li><a href="#revision-vault" className="hover:text-white transition-colors">Study Material</a></li>
              <li><a href="#blogs" className="hover:text-white transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Column 4: Company (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li><a href="#top" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#top" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#top" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#top" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 5: Support (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Support</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li><a href="#top" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#top" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#top" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#top" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-400 font-medium flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 My Syllabus Paper. All rights reserved.</p>
          <p className="text-xs text-slate-400 font-medium">Built for UPSC, APPSC & TGPSC Civil Services Aspirants</p>
        </div>

      </div>
    </footer>
  );
}
