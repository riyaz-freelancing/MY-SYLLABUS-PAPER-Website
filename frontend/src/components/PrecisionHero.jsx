import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Zap, 
  Flame, 
  FileText, 
  Check, 
  Sparkles,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function PrecisionHero({ onOpenDiagnostic }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 'upsc',
      badge: "INDIA'S SMART EXAM PREPARATION PLATFORM",
      badgeColor: 'bg-blue-50 text-[#155EEF] border-blue-200',
      titlePrefix: 'Prepare Smarter. ',
      highlight: 'Crack',
      titleSuffix: ' UPSC CSE 2026.',
      description: 'Structured courses, daily current affairs, test series, study materials and personal mentorship — everything serious aspirants need in one place.',
      ctaText: 'Explore Courses',
      ctaHref: '#live-cohorts',
      trackerTitle: 'UPSC CSE GS Prelims Tracker',
      trackerPercent: '76%',
      trackerTopics: '1,250 Topics Mastered',
      trackerQuestions: '15,000+ Solved Questions',
      quizTitle: 'Daily Prelims MCQ Quiz #142',
      alertText: 'All-India UPSC Prelims Mock #5 starts Tomorrow at 10:00 AM',
    },
    {
      id: 'appsc',
      badge: 'APPSC STATE SPECIALIST HUB',
      badgeColor: 'bg-emerald-50 text-[#16A34A] border-emerald-200',
      titlePrefix: 'Cracking APPSC Exams is ',
      highlight: 'Predictable',
      titleSuffix: ' & Structured.',
      description: 'Official AP History, Economy & State Reorganisation micro-syllabus sheets with 10 years solved PYQ keys for guaranteed success.',
      ctaText: 'Explore APPSC Syllabi',
      ctaHref: '#syllabus-hubs',
      trackerTitle: 'APPSC Group 1 Syllabus Tracker',
      trackerPercent: '88%',
      trackerTopics: '950 Topics Mastered',
      trackerQuestions: '8,400+ Solved Questions',
      quizTitle: 'AP History & Economy Daily Quiz #88',
      alertText: 'APPSC Group 2 Solved Paper Key & Analysis Added',
    },
    {
      id: 'tgpsc',
      badge: 'TGPSC STATE EXAM VAULT',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      titlePrefix: 'Master Telangana State Services with ',
      highlight: 'High-Yield',
      titleSuffix: ' Notes.',
      description: 'Complete breakdown of Telangana Movement, State Economy, Policy Framework & General Studies with instant PDF downloads.',
      ctaText: 'Explore TGPSC Syllabi',
      ctaHref: '#syllabus-hubs',
      trackerTitle: 'TGPSC Group 1 Master Tracker',
      trackerPercent: '82%',
      trackerTopics: '880 Topics Mastered',
      trackerQuestions: '9,200+ Solved Questions',
      quizTitle: 'Telangana Movement Special Quiz #64',
      alertText: 'Free TGPSC Mock Test Available Today',
    },
    {
      id: 'super50',
      badge: 'LIVE INTERACTIVE MENTORSHIP',
      badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
      titlePrefix: 'Join Super 50 Batch with ',
      highlight: 'Daily Guidance',
      titleSuffix: ' & Mains Writing.',
      description: 'Personalized 1-on-1 faculty guidance, daily Mains model answer evaluations, and comprehensive test series till final selection.',
      ctaText: 'View Super 50 Cohort',
      ctaHref: '#live-cohorts',
      trackerTitle: 'Super 50 Mains Answer Writing',
      trackerPercent: '94%',
      trackerTopics: '450+ Model Answers',
      trackerQuestions: '120+ Full Length Tests',
      quizTitle: 'Mains GS Paper 2 Daily Evaluation #92',
      alertText: '15 MSP Students Cleared Top 50 Ranks 2025',
    },
  ];

  // Guaranteed continuous auto-scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const activeSlide = heroSlides[currentSlide];

  return (
    <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] font-sans relative overflow-hidden">
      
      {/* Container - aligned with 1280px grid */}
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Dynamic Auto-Scrolling Slide Content with smooth transition key */}
        <div key={currentSlide} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full min-h-[440px] sm:min-h-[480px] animate-in fade-in duration-300">
          
          {/* LEFT COLUMN: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Small Label Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold tracking-wide ${activeSlide.badgeColor}`}>
              <Sparkles className="w-3.5 h-3.5 text-[#F5B800]" />
              <span className="truncate">{activeSlide.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#0F172A] tracking-tight leading-[1.18]">
              {activeSlide.titlePrefix}
              <span className="text-[#155EEF] relative inline-block">
                {activeSlide.highlight}
              </span>
              {activeSlide.titleSuffix}
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-[#64748B] font-normal leading-relaxed max-w-xl">
              {activeSlide.description}
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href={activeSlide.ctaHref}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all active:scale-95 group"
              >
                <span>{activeSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenDiagnostic}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-slate-50 font-bold text-sm sm:text-base rounded-xl shadow-sm transition-all"
              >
                <Zap className="w-4 h-4 text-[#F5B800] fill-[#F5B800]" />
                <span>Take Free Test</span>
              </button>
            </div>

            {/* Trust Checkmarks Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 text-xs sm:text-sm font-semibold text-[#0F172A]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#16A34A] shrink-0 stroke-[3]" />
                <span>Expert-led preparation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#16A34A] shrink-0 stroke-[3]" />
                <span>Daily practice</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#16A34A] shrink-0 stroke-[3]" />
                <span>Structured learning</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#16A34A] shrink-0 stroke-[3]" />
                <span>Personalized mentorship</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Realistic MSP Product Interface Card */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-xl p-4 sm:p-6 space-y-4 sm:space-y-5 text-left relative overflow-hidden">
              
              {/* Product Card Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#155EEF]/10 text-[#155EEF] font-bold flex items-center justify-center text-xs shrink-0">
                    MSP
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] truncate">Aspirant Study Dashboard</h3>
                    <p className="text-[11px] sm:text-xs text-[#64748B] truncate">{activeSlide.trackerTitle}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-[#16A34A] border border-emerald-200 text-[10px] sm:text-xs font-bold flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
                  <span>Active Streak: 42 Days</span>
                </span>
              </div>

              {/* Course Progress Module */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#0F172A]">Micro-Syllabus Progress</span>
                  <span className="text-[#155EEF]">{activeSlide.trackerPercent} Completed</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#155EEF] h-full rounded-full transition-all duration-700 shadow"
                    style={{ width: activeSlide.trackerPercent }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-1">
                  <span>{activeSlide.trackerTopics}</span>
                  <span>{activeSlide.trackerQuestions}</span>
                </div>
              </div>

              {/* 2-Grid Live Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Today's Quiz Widget */}
                <div className="p-3.5 sm:p-4 rounded-xl border border-[#E2E8F0] bg-white space-y-2 hover:border-[#155EEF] transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-bold text-[#64748B] uppercase tracking-wider">Today's Practice</span>
                    <span className="p-1 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">Live</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-snug truncate">{activeSlide.quizTitle}</h4>
                  <p className="text-[11px] sm:text-xs text-[#64748B] line-clamp-2">10 High-yield questions with detailed explanations</p>
                  <button 
                    onClick={onOpenDiagnostic}
                    className="w-full mt-1 py-2 bg-blue-50 text-[#155EEF] font-bold text-xs rounded-lg hover:bg-[#155EEF] hover:text-white transition-colors"
                  >
                    Start Quiz Now
                  </button>
                </div>

                {/* Current Affairs Widget */}
                <div className="p-3.5 sm:p-4 rounded-xl border border-[#E2E8F0] bg-white space-y-2 hover:border-[#155EEF] transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-bold text-[#64748B] uppercase tracking-wider">Daily Briefing</span>
                    <span className="p-1 rounded bg-blue-100 text-[#155EEF] text-[10px] font-bold">PDF Ready</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-snug truncate">Editorial Analysis & GS Mapping</h4>
                  <p className="text-[11px] sm:text-xs text-[#64748B] truncate">Economic Survey & Bilateral Trade Review</p>
                  <a 
                    href="#daily-briefing"
                    className="block text-center mt-1 py-2 bg-slate-100 text-[#0F172A] font-bold text-xs rounded-lg hover:bg-[#0F172A] hover:text-white transition-colors"
                  >
                    Read Daily Briefing
                  </a>
                </div>

              </div>

              {/* Test Series Live Assessment Alert */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 min-w-0">
                  <Flame className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-semibold text-amber-950 text-[11px] sm:text-xs truncate">
                    {activeSlide.alertText}
                  </span>
                </div>
                <button 
                  onClick={onOpenDiagnostic}
                  className="px-3 py-1.5 bg-[#F5B800] text-slate-950 rounded-lg font-bold hover:bg-yellow-400 shrink-0 shadow-sm text-xs self-start sm:self-auto"
                >
                  Register Free
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Slide Carousel Controls (Dots & Arrows) */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2">
            {heroSlides.map((slide, sIdx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(sIdx)}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === sIdx 
                    ? 'w-10 bg-[#155EEF]' 
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                title={`Go to slide ${sIdx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">


            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                className="p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-[#155EEF] hover:text-white transition-colors shadow-sm"
                title="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                className="p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-[#155EEF] hover:text-white transition-colors shadow-sm"
                title="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Announcement Strip at Hero Bottom */}
        <div className="bg-[#0F172A] text-slate-300 text-xs py-3 px-5 rounded-2xl border border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 font-medium">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#155EEF] text-white text-[11px] font-bold uppercase tracking-wider shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>Announcement</span>
            </span>
            <span className="text-slate-200 font-semibold">
              Admissions Open for UPSC, APPSC & TGPSC — Start Your Preparation Today
            </span>
          </div>
          <div className="flex items-center gap-5 text-slate-400 font-medium text-xs shrink-0">
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
    </section>
  );
}
