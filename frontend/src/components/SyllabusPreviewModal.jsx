import React from 'react';
import { X, Download, Share2, Printer, CheckCircle, FileText, Sparkles, BookOpen } from 'lucide-react';

export default function SyllabusPreviewModal({ paper, onClose }) {
  if (!paper) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">
                {paper.category} • Official Syllabus & Paper
              </span>
              <h3 className="text-lg font-extrabold text-white leading-tight">
                {paper.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`#download-${paper.id}`}
              onClick={() => alert(`Downloading ${paper.title} PDF...`)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Paper Document Viewer */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950 text-slate-200 font-sans">
          
          {/* Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800 text-xs">
            <div>
              <span className="text-slate-500 block font-semibold">Exam Body</span>
              <span className="font-extrabold text-white">{paper.category}</span>
            </div>
            <div>
              <span className="text-slate-500 block font-semibold">File Format</span>
              <span className="font-extrabold text-emerald-400">PDF (Official Key)</span>
            </div>
            <div>
              <span className="text-slate-500 block font-semibold">Total Downloads</span>
              <span className="font-extrabold text-blue-400">{paper.downloads || '12,450+'}</span>
            </div>
            <div>
              <span className="text-slate-500 block font-semibold">Updated Year</span>
              <span className="font-extrabold text-amber-400">2026 Edition</span>
            </div>
          </div>

          {/* Paper Content Preview Box */}
          <div className="bg-white text-slate-900 rounded-xl p-6 sm:p-8 shadow-inner border border-slate-200 text-left font-serif leading-relaxed">
            
            {/* Header Document Brand */}
            <div className="text-center border-b border-slate-300 pb-4 mb-6">
              <h2 className="text-xl font-black text-red-700 tracking-wider">
                MY SYLLABUS PAPER (MSP)
              </h2>
              <p className="text-xs font-bold text-blue-700 italic">
                Official Examination Syllabus & Question Outline
              </p>
              <div className="mt-2 inline-block px-3 py-1 bg-slate-100 text-slate-800 rounded text-xs font-sans font-bold">
                {paper.title}
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-800">
              <div>
                <h4 className="font-bold text-base text-slate-900 mb-2 border-l-4 border-blue-600 pl-2">
                  1. Exam Overview & Marking Scheme
                </h4>
                <p className="text-slate-700">
                  Total Duration: 180 Minutes | Total Questions: 150 MCQs | Negative Marking: 1/3rd Mark.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-base text-slate-900 mb-2 border-l-4 border-blue-600 pl-2">
                  2. Core Syllabus Topics Covered
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Indian Polity, Constitution & Governance Framework</li>
                  <li>Indian Economy, Planning & Sustainable Development</li>
                  <li>History of India & Regional History (AP / Telangana)</li>
                  <li>General Science, Technology & Disaster Management</li>
                  <li>Current Affairs (National & International Importance)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-base text-slate-900 mb-2 border-l-4 border-blue-600 pl-2">
                  3. Recommended Reference Material & Test Series
                </h4>
                <p className="text-slate-700">
                  Complete answer keys and step-by-step video explanations available in the MSP Video Portal & Test Series section.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-center text-xs font-sans text-slate-500 flex justify-between items-center">
              <span>MSP Verified Document Code: #MSP-2026-SYL</span>
              <span>www.mysyllabuspaper.com</span>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Click Download to save the complete high-resolution PDF file.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-lg transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
