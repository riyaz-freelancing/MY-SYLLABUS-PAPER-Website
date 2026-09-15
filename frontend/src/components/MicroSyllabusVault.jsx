import React from 'react';
import { Download, FileText, Calendar, Filter, ArrowRight, BookOpen } from 'lucide-react';

export default function MicroSyllabusVault({ onDownload }) {
  const resources = [
    {
      title: 'UPSC CSE Prelims GS Paper 1 Micro-Syllabus Sheet',
      exam: 'UPSC CSE',
      category: 'Micro Syllabus',
      updated: 'Sept 2026',
      fileType: 'PDF (2.4 MB)',
      pdfName: 'UPSC_CSE_GS1_Micro_Syllabus.pdf',
    },
    {
      title: 'APPSC Group 1 Mains GS 1-5 Detailed Topic Breakdown',
      exam: 'APPSC Group 1',
      category: 'Micro Syllabus',
      updated: 'Aug 2026',
      fileType: 'PDF (3.1 MB)',
      pdfName: 'APPSC_Group1_Mains_Syllabus.pdf',
    },
    {
      title: 'TGPSC Group 2 Services Complete General Studies Notes',
      exam: 'TGPSC Group 2',
      category: 'Revision Notes',
      updated: 'Sept 2026',
      fileType: 'PDF (4.8 MB)',
      pdfName: 'TGPSC_Group2_GS_Notes.pdf',
    },
    {
      title: '10 Years Solved UPSC Prelims PYQ Bank with Verified Key',
      exam: 'UPSC CSE',
      category: 'Previous Year Papers',
      updated: '2015-2025 Solved',
      fileType: 'PDF (6.2 MB)',
      pdfName: 'UPSC_10Yr_Solved_PYQ.pdf',
    },
    {
      title: 'Monthly Current Affairs Digest (Jan - Aug 2026 Compilation)',
      exam: 'All Exams',
      category: 'Current Affairs PDFs',
      updated: 'Sept 2026 Edition',
      fileType: 'PDF (8.5 MB)',
      pdfName: 'MSP_Monthly_CA_Digest.pdf',
    },
    {
      title: 'UPSC GS Mains Model Answer Writing Framework & Checklist',
      exam: 'UPSC Mains',
      category: 'Mains Resources',
      updated: 'Sept 2026',
      fileType: 'PDF (1.9 MB)',
      pdfName: 'UPSC_Mains_Answer_Framework.pdf',
    },
  ];

  return (
    <section id="revision-vault" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-[#E2E8F0] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Left Aligned Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            DOWNLOADABLE STUDY MATERIALS
          </span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Study Material & Revision Vault
          </h2>
          <p className="mt-3 text-base lg:text-lg text-[#64748B] font-normal leading-relaxed">
            Free micro-syllabus sheets, NCERT summaries, previous year papers, and current affairs PDFs.
          </p>
        </div>

        {/* Clean Resource List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md hover:border-[#155EEF] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Exam & Category Badges */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-[#155EEF] border border-blue-100">
                    {item.exam}
                  </span>
                  <span className="text-[11px] font-semibold text-[#64748B] bg-slate-100 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#155EEF] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* File Metadata */}
                <div className="flex items-center justify-between text-xs text-[#64748B] pt-2 border-t border-[#E2E8F0]">
                  <span>Updated: {item.updated}</span>
                  <span className="font-semibold text-[#0F172A]">{item.fileType}</span>
                </div>

              </div>

              {/* Download Action Button */}
              <div className="pt-5 mt-4">
                <button
                  onClick={() => onDownload(item.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#F8FAFC] hover:bg-[#155EEF] text-[#0F172A] hover:text-white font-bold text-xs rounded-xl border border-[#E2E8F0] transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Sheet</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
