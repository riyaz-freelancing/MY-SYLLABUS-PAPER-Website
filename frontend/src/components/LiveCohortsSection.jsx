import React from 'react';
import { ArrowRight, Star, Clock, Users, CheckCircle2, PlayCircle, BookOpen } from 'lucide-react';

export default function LiveCohortsSection({ onEnroll }) {
  const popularCourses = [
    {
      id: 'upsc-course',
      badge: 'UPSC CSE 2026',
      badgeColor: 'bg-blue-50 text-[#155EEF] border-blue-200',
      title: 'UPSC Prelims Foundation Program',
      instructor: 'Dr. R. Sharma (Ex-Civil Servant) & Faculty Team',
      duration: '12 Months Live Batch',
      students: '4,250 Aspirants',
      rating: '4.9',
      price: '₹14,999',
      originalPrice: '₹24,999',
      imageBg: 'from-blue-600 to-indigo-900',
      highlights: ['GS Papers 1-4 Complete Syllabus', 'Daily Mains Answer Writing', 'NCERT Summary Notes PDF'],
    },
    {
      id: 'appsc-course',
      badge: 'APPSC GROUP 1 & 2',
      badgeColor: 'bg-emerald-50 text-[#16A34A] border-emerald-200',
      title: 'APPSC Group 1 & Group 2 Complete Course',
      instructor: 'K. Venkatesh Sir (State Exam Expert)',
      duration: '8 Months Comprehensive',
      students: '3,800 Aspirants',
      rating: '4.9',
      price: '₹9,999',
      originalPrice: '₹18,999',
      imageBg: 'from-emerald-600 to-teal-900',
      highlights: ['AP History, Economy & Welfare Schemes', 'Telugu & English Medium Notes', 'Full Prelims & Mains Test Series'],
    },
    {
      id: 'tgpsc-course',
      badge: 'TGPSC GROUP 1 & 2',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      title: 'TGPSC Group 1 & Group 2 Preparation',
      instructor: 'S. Telangana Reddy & Senior Faculty',
      duration: '8 Months Live & Recorded',
      students: '2,950 Aspirants',
      rating: '4.8',
      price: '₹9,999',
      originalPrice: '₹18,999',
      imageBg: 'from-purple-600 to-slate-900',
      highlights: ['Telangana Movement & State Economy', 'General Studies Special Modules', 'PYQ Solution Booklet'],
    },
  ];

  const signatureCohorts = [
    {
      title: 'UPSC 2027 Foundation Program',
      exam: 'UPSC CSE 2027',
      duration: '2-Year Integrated Batch',
      mode: 'Live Interactive + Mentorship',
    },
    {
      title: 'APPSC Group 1 & 2 Complete Program',
      exam: 'APPSC Services',
      duration: '1-Year Master Cohort',
      mode: 'Prelims + Mains Integrated',
    },
    {
      title: 'TGPSC Group 1 & 2 Complete Program',
      exam: 'TGPSC Services',
      duration: '1-Year Master Cohort',
      mode: 'Full Paper Syllabus Coverage',
    },
    {
      title: 'Weekend CSAT & Current Affairs Program',
      exam: 'All Civil Services',
      duration: '6 Months Weekend Batch',
      mode: 'Live Saturday & Sunday',
    },
  ];

  return (
    <section id="live-cohorts" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E8F0] font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* SECTION 1: POPULAR COURSES */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              ACADEMIC MARKETPLACE
            </span>
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] tracking-tight leading-tight">
              Popular Courses
            </h2>
            <p className="mt-3 text-base lg:text-lg text-[#64748B] font-normal leading-relaxed">
              Structured video lectures, study notes & test series led by experienced faculties.
            </p>
          </div>

          {/* 3 Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md hover:border-[#155EEF] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Course Image Area */}
                  <div className={`h-48 bg-gradient-to-tr ${course.imageBg} p-6 flex flex-col justify-between text-white relative`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                        {course.badge}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full">
                        <Star className="w-3.5 h-3.5 fill-slate-950" />
                        <span>{course.rating}</span>
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-200 mb-1">
                        <PlayCircle className="w-4 h-4 text-[#F5B800]" />
                        <span>HD Video Lectures + Notes</span>
                      </div>
                      <h4 className="text-lg font-bold text-white line-clamp-2 leading-snug">
                        {course.title}
                      </h4>
                    </div>
                  </div>

                  {/* Course Content Info */}
                  <div className="p-6 space-y-4">
                    <div className="text-xs text-[#64748B] space-y-1">
                      <div>Instructor: <strong className="text-[#0F172A] font-semibold">{course.instructor}</strong></div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#155EEF]" />
                          <span>{course.duration}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[#155EEF]" />
                          <span>{course.students}</span>
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 pt-3 border-t border-[#E2E8F0]">
                      {course.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-medium text-[#0F172A]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Course Price & CTA */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-baseline gap-2 pt-3 border-t border-[#E2E8F0]">
                    <span className="text-2xl font-extrabold text-[#0F172A]">{course.price}</span>
                    <span className="text-xs text-[#64748B] line-through">{course.originalPrice}</span>
                  </div>
                  <button
                    onClick={() => onEnroll(course.title)}
                    className="w-full py-3 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: SIGNATURE PROGRAMS & LIVE COHORTS */}
        <div className="pt-8 border-t border-[#E2E8F0]">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              LIVE MENTORSHIP BATCHES
            </span>
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] tracking-tight leading-tight">
              Signature Programs & Live Cohorts
            </h2>
            <p className="mt-3 text-base lg:text-lg text-[#64748B] font-normal leading-relaxed">
              Comprehensive live batch guidance for multi-year civil services aspirants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureCohorts.map((prog, pIdx) => (
              <div 
                key={pIdx}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#155EEF] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white text-[#155EEF] border border-[#E2E8F0] inline-block">
                    {prog.exam}
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] leading-snug">
                    {prog.title}
                  </h3>
                  <div className="text-xs text-[#64748B] space-y-1">
                    <div>Duration: <span className="font-semibold text-[#0F172A]">{prog.duration}</span></div>
                    <div>Format: <span className="font-semibold text-[#0F172A]">{prog.mode}</span></div>
                  </div>
                </div>

                <button
                  onClick={() => onEnroll(prog.title)}
                  className="w-full mt-6 py-2.5 bg-white hover:bg-[#155EEF] text-[#0F172A] hover:text-white font-bold text-xs rounded-xl border border-[#E2E8F0] transition-colors shadow-sm"
                >
                  Join Live Cohort
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
