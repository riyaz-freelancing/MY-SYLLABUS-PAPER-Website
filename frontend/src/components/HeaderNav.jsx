import React, { useState } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  User, 
  ArrowRight
} from 'lucide-react';
import logoSvg from '../assets/msp-logo.svg';

export default function HeaderNav({ onOpenAuth, onOpenPortal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navCategories = [
    {
      name: 'UPSC',
      href: '#syllabus-hubs',
      dropdown: [
        { label: 'Civil Services Prelims GS Paper 1', desc: 'Syllabus, topics & PYQs', href: '#syllabus-hubs' },
        { label: 'Civil Services Mains GS 1 - 4', desc: 'Answer writing syllabus', href: '#syllabus-hubs' },
        { label: 'UPSC Micro-Syllabus Sheet (PDF)', desc: 'Instant 1-click download', href: '#revision-vault' },
      ],
    },
    {
      name: 'APPSC',
      href: '#syllabus-hubs',
      dropdown: [
        { label: 'APPSC Group 1 Examination', desc: 'Prelims & Mains Syllabus', href: '#syllabus-hubs' },
        { label: 'APPSC Group 2 Services', desc: 'Executive & Non-Executive', href: '#syllabus-hubs' },
        { label: 'APPSC Question Bank & Keys', desc: 'Download solved papers', href: '#revision-vault' },
      ],
    },
    {
      name: 'TGPSC',
      href: '#syllabus-hubs',
      dropdown: [
        { label: 'TGPSC Group 1 Services', desc: 'Official paper outline', href: '#syllabus-hubs' },
        { label: 'TGPSC Group 2 Services', desc: 'General Studies & Key', href: '#syllabus-hubs' },
        { label: 'TGPSC Notifications & Papers', desc: 'Downloadable syllabus', href: '#revision-vault' },
      ],
    },
    {
      name: 'Current Affairs',
      href: '#daily-briefing',
      dropdown: [
        { label: 'Today\'s High-Yield Briefing', desc: 'GS Mains & Prelims notes', href: '#daily-briefing' },
        { label: 'Monthly Current Affairs PDF', desc: 'Compiled digest', href: '#daily-briefing' },
        { label: 'Daily MCQ Practice Quiz', desc: 'Instant answer verification', href: '#daily-briefing' },
      ],
    },
    {
      name: 'Courses',
      href: '#live-cohorts',
    },
    {
      name: 'Study Material',
      href: '#revision-vault',
      dropdown: [
        { label: 'NCERT Foundation Notes (Class 6-12)', desc: 'Summary PDF sheets', href: '#revision-vault' },
        { label: 'Economic Survey & Budget Capsule', desc: 'Key figures & formulae', href: '#revision-vault' },
        { label: 'Micro Syllabus Sheets', desc: 'Structured topic breakdown', href: '#revision-vault' },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md text-[#0F172A] font-sans border-b border-[#E2E8F0] shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-2 sm:gap-4">
        
        {/* LEFT: Brand Logo & Title */}
        <a href="#top" className="flex items-center gap-2 sm:gap-3 shrink-0 group min-w-0">
          <img 
            src={logoSvg} 
            alt="My Syllabus Paper Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain bg-[#155EEF]/10 border border-[#155EEF]/20 rounded-xl p-1 transition-transform group-hover:scale-105 shrink-0" 
          />
          <div className="flex flex-col min-w-0">
            <span className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-[#0F172A] leading-tight group-hover:text-[#155EEF] transition-colors truncate">
              MY SYLLABUS PAPER
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-[#64748B] tracking-wide hidden sm:block truncate">
              India's Smart Exam Preparation Platform
            </span>
          </div>
        </a>

        {/* CENTER: Navigation Links (fits 1024px+ desktops & laptops) */}
        <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 font-semibold text-xs xl:text-sm">
          {navCategories.map((item, idx) => (
            <div 
              key={idx}
              className="relative group py-6"
              onMouseEnter={() => setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-0.5 xl:gap-1 px-2 lg:px-2.5 xl:px-3 py-2 rounded-lg text-[#0F172A] hover:text-[#155EEF] hover:bg-slate-100/80 transition-colors whitespace-nowrap"
              >
                <span>{item.name}</span>
                {item.dropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#155EEF] group-hover:rotate-180 transition-transform duration-200" />
                )}
              </a>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute top-full left-0 hidden group-hover:block w-72 bg-white text-[#0F172A] rounded-2xl shadow-xl border border-[#E2E8F0] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-[#E2E8F0] mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF]">
                      {item.name} Resources
                    </span>
                  </div>
                  {item.dropdown.map((sub, sIdx) => (
                    <a
                      key={sIdx}
                      href={sub.href}
                      className="block px-4 py-2.5 hover:bg-[#F8FAFC] hover:text-[#155EEF] transition-colors group/item"
                    >
                      <span className="block text-sm font-semibold text-[#0F172A] group-hover/item:text-[#155EEF]">
                        {sub.label}
                      </span>
                      <span className="block text-xs font-normal text-[#64748B] mt-0.5">
                        {sub.desc}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT: Login & Get Started */}
        <div className="hidden md:flex items-center gap-2 sm:gap-2.5 shrink-0">
          
          {/* Login Button */}
          <button
            onClick={onOpenPortal}
            className="flex items-center gap-1 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-white border border-[#E2E8F0] text-[#0F172A] font-semibold text-xs sm:text-sm rounded-xl hover:bg-[#F8FAFC] hover:border-slate-300 transition-colors shadow-sm"
          >
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#155EEF]" />
            <span>Login</span>
          </button>

          {/* Get Started Primary Button */}
          <button
            onClick={onOpenPortal}
            className="flex items-center gap-1 px-3.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

        </div>

        {/* Mobile / Tablet Controls (shows on screens below 1024px) */}
        <div className="flex lg:hidden items-center gap-1.5 shrink-0">
          <button
            onClick={onOpenPortal}
            className="px-3 py-1.5 rounded-xl bg-blue-50 text-[#155EEF] font-semibold text-xs border border-blue-200"
          >
            Login
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0F172A] hover:bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] px-4 py-4 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          {navCategories.map((item, idx) => (
            <div key={idx} className="border-b border-slate-100 last:border-none pb-1">
              <div 
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
                onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
              >
                <a href={item.href} className="flex-1">{item.name}</a>
                {item.dropdown && (
                  <ChevronDown className={`w-4 h-4 text-[#64748B] transition-transform ${activeDropdown === idx ? 'rotate-180' : ''}`} />
                )}
              </div>

              {item.dropdown && activeDropdown === idx && (
                <div className="pl-4 pr-2 py-2 space-y-1.5 bg-[#F8FAFC] rounded-xl my-1 border border-[#E2E8F0]">
                  {item.dropdown.map((sub, sIdx) => (
                    <a
                      key={sIdx}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 px-3 text-xs font-medium text-[#0F172A] hover:text-[#155EEF] rounded"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-3 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full py-3 bg-[#155EEF] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
