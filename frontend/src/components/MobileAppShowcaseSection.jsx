import React, { useState } from 'react';
import { 
  Smartphone, 
  Download, 
  Star, 
  QrCode, 
  CheckCircle2, 
  Zap, 
  Bell, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Share2,
  X
} from 'lucide-react';
import logoImg from '../assets/logo-msp.jpeg';

export default function MobileAppShowcaseSection() {
  const [showQrModal, setShowQrModal] = useState(false);
  const appPlayStoreUrl = "https://play.google.com/store/apps/details?id=com.kxquve.eemcze";

  // Official Google Play Store SVG Icon
  const PlayStoreIcon = () => (
    <svg className="w-6 h-6 shrink-0 fill-current" viewBox="0 0 512 512">
      <path d="M99.617 8.057a34.462 34.462 0 0 0-14.73 3.659 34.12 34.12 0 0 0-15.006 14.994C66.082 33.626 64 42.66 64 54.896v402.208c0 12.236 2.082 21.27 5.881 28.186 3.799 6.916 9.17 12.287 15.006 14.994 5.836 2.707 11.085 3.659 14.73 3.659 6.953 0 13.914-1.936 20.875-5.817l307.728-198.814c13.784-8.877 20.676-20.916 20.676-35.312s-6.892-26.435-20.676-35.312L120.492 13.874c-6.961-3.881-13.922-5.817-20.875-5.817zM104 60.198l240 195.802L104 451.802V60.198z" fill="currentColor" />
    </svg>
  );

  return (
    <section id="mobile-app" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Container */}
        <div className="bg-gradient-to-br from-slate-800/90 via-slate-900 to-slate-950 rounded-3xl border border-slate-700/60 shadow-2xl p-6 sm:p-10 lg:p-12 backdrop-blur-xl relative overflow-hidden">
          
          {/* Subtle Accent Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Content & Download Options (Col 7) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Badge Header */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </span>
                <span>OFFICIAL ANDROID APP NOW LIVE</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Prepare for <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">UPSC, APPSC & TGPSC</span> On The Go
                </h2>
                <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl">
                  Download the official <strong className="text-white font-semibold">My Syllabus Paper</strong> Android app to access micro-syllabus sheets, daily high-yield current affairs, topic-wise practice tests, and instant notification alerts directly on your smartphone.
                </p>
              </div>

              {/* Grid of Key App Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-blue-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Micro-Syllabus Vault</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400">Structured topic breakdowns & PYQ links</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-blue-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Daily Briefings</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400">Editorials & high-yield GS summaries</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-blue-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Instant Exam Alerts</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400">Notifications for updates & test results</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-blue-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Prelims & Mains Tests</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400">Real-time score analysis & solution keys</p>
                  </div>
                </div>
              </div>

              {/* CTA Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                
                {/* Play Store Button */}
                <a
                  href={appPlayStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02] border border-blue-400/30 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayStoreIcon />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-semibold text-blue-200 tracking-wider">GET IT ON</span>
                    <span className="text-base font-extrabold text-white leading-tight">Google Play</span>
                  </div>
                </a>

                {/* Scan QR Button */}
                <button
                  onClick={() => setShowQrModal(true)}
                  className="flex items-center gap-2.5 px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all shadow-md active:scale-95"
                >
                  <QrCode className="w-5 h-5 text-blue-400" />
                  <span>Scan QR Code</span>
                </button>

              </div>

              {/* Social Proof & Rating Metrics */}
              <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-800 text-xs sm:text-sm text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-white">4.9 / 5</span>
                  <span>(Aspirants Rating)</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span>Lightweight (Fast & Secure)</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Verified Package: <code className="text-[11px] text-blue-300 bg-slate-800 px-1.5 py-0.5 rounded">com.kxquve.eemcze</code></span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Realistic 3D Mobile Phone Interactive Mockup (Col 5) */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              
              {/* Outer Decorative Glow around Phone */}
              <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Phone Frame */}
              <div className="relative w-64 sm:w-72 bg-[#090D16] rounded-[42px] p-3 border-[4px] border-slate-700 shadow-2xl shadow-blue-900/50 hover:scale-[1.02] transition-transform duration-500">
                
                {/* Phone Speaker & Camera Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center gap-2 border border-slate-800">
                  <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60"></div>
                </div>

                {/* Inner Screen Content */}
                <div className="relative bg-slate-950 rounded-[34px] overflow-hidden border border-slate-800 text-white font-sans pt-7 pb-4 px-3.5 space-y-3.5 min-h-[460px] flex flex-col justify-between select-none">
                  
                  {/* Top Screen App Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <img src={logoImg} alt="App Icon" className="w-7 h-7 rounded-full bg-white p-0.5 border border-slate-700" />
                      <span className="text-xs font-bold text-white tracking-wide">MY SYLLABUS PAPER</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      LIVE APP
                    </span>
                  </div>

                  {/* App Screen Banner Preview */}
                  <div className="bg-gradient-to-r from-blue-900/80 to-indigo-900/80 rounded-2xl p-3 border border-blue-500/30 space-y-1.5">
                    <span className="text-[9px] font-bold tracking-widest text-blue-300 uppercase">TODAY'S SYLLABUS BRIEFING</span>
                    <h5 className="text-xs font-bold text-white leading-snug">GS Paper 3: Science & Tech + Daily MCQ Challenge</h5>
                    <div className="flex items-center justify-between text-[10px] text-blue-200 pt-1">
                      <span>Updated 10 mins ago</span>
                      <span className="text-emerald-400 font-semibold">Ready to Read →</span>
                    </div>
                  </div>

                  {/* Quick Feature Cards Inside Phone */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Exam Hubs</span>
                    
                    <div className="grid grid-cols-3 gap-1.5 text-center">
                      <div className="bg-slate-900 hover:bg-slate-800 p-2 rounded-xl border border-slate-800 transition-colors">
                        <span className="block text-[11px] font-bold text-blue-400">UPSC</span>
                        <span className="block text-[8px] text-slate-400">Civil Services</span>
                      </div>
                      <div className="bg-slate-900 hover:bg-slate-800 p-2 rounded-xl border border-slate-800 transition-colors">
                        <span className="block text-[11px] font-bold text-indigo-400">APPSC</span>
                        <span className="block text-[8px] text-slate-400">Group 1 & 2</span>
                      </div>
                      <div className="bg-slate-900 hover:bg-slate-800 p-2 rounded-xl border border-slate-800 transition-colors">
                        <span className="block text-[11px] font-bold text-sky-400">TGPSC</span>
                        <span className="block text-[8px] text-slate-400">Group 1 & 2</span>
                      </div>
                    </div>
                  </div>

                  {/* Simulated Floating Push Notification */}
                  <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-2.5 shadow-lg space-y-1 animate-pulse">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Bell className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-[10px] font-bold text-slate-200">New Notification</span>
                      </div>
                      <span className="text-[9px] text-slate-400">Now</span>
                    </div>
                    <p className="text-[10px] text-slate-300 leading-tight">
                      UPSC Prelims Micro-Syllabus PDF Sheet is ready for instant 1-tap download!
                    </p>
                  </div>

                  {/* Bottom App Screen Action Bar */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                    <a 
                      href={appPlayStoreUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl text-center shadow-md transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download App from Play Store</span>
                    </a>
                  </div>

                </div>

                {/* Bottom Home Indicator Line */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-slate-700 rounded-full" />
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* QR Code Modal Popup */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full p-6 text-center space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
              <QrCode className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">Scan to Install Mobile App</h3>
              <p className="text-xs text-slate-400">
                Point your Android camera at the QR code below to immediately open Google Play Store.
              </p>
            </div>

            {/* Generated High-Resolution SVG QR Code Representation */}
            <div className="bg-white p-4 rounded-2xl inline-block shadow-inner border border-slate-200">
              <svg className="w-48 h-48 mx-auto" viewBox="0 0 256 256">
                {/* Decorative & Realistic QR Code graphic */}
                <rect width="256" height="256" fill="#ffffff" />
                {/* Outer corners */}
                <rect x="16" y="16" width="64" height="64" fill="#0f172a" rx="8" />
                <rect x="24" y="24" width="48" height="48" fill="#ffffff" rx="4" />
                <rect x="32" y="32" width="32" height="32" fill="#155eef" rx="2" />

                <rect x="176" y="16" width="64" height="64" fill="#0f172a" rx="8" />
                <rect x="184" y="24" width="48" height="48" fill="#ffffff" rx="4" />
                <rect x="192" y="32" width="32" height="32" fill="#155eef" rx="2" />

                <rect x="16" y="176" width="64" height="64" fill="#0f172a" rx="8" />
                <rect x="24" y="184" width="48" height="48" fill="#ffffff" rx="4" />
                <rect x="32" y="192" width="32" height="32" fill="#155eef" rx="2" />

                {/* Data Matrix Dots */}
                <path fill="#0f172a" d="M96 24h16v16H96zM128 24h16v16h-16zM96 56h32v16H96zM144 56h16v32h-16zM96 88h16v32H96zM128 104h32v16h-32zM24 96h16v32H24zM56 112h32v16H56zM176 96h48v16h-48zM192 128h32v32h-32zM96 144h16v16H96zM128 144h32v16h-32zM16 144h32v16H16zM144 176h32v16h-32zM192 176h48v32h-48zM96 176h16v64H96zM128 208h48v16h-48zM176 224h32v16h-32zM224 224h16v16h-16z" />
                
                {/* Center Brand Icon */}
                <rect x="104" y="104" width="48" height="48" fill="#0f172a" rx="10" />
                <circle cx="128" cy="128" r="16" fill="#155eef" />
              </svg>
            </div>

            <div className="pt-2 flex flex-col items-center gap-2">
              <a
                href={appPlayStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-colors shadow-lg"
              >
                Open Direct Google Play Link
              </a>
              <span className="text-[11px] text-slate-500">Package: com.kxquve.eemcze</span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
