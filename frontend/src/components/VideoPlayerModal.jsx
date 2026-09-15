import React, { useState } from 'react';
import { X, Play, Pause, Volume2, Maximize, CheckCircle2, BookOpen, MessageCircle } from 'lucide-react';

export default function VideoPlayerModal({ video, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                🎥 Video Explanation & Class • MSP Portal
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-white">
                {video.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Main Video Viewport */}
          <div className="lg:col-span-8 bg-black flex flex-col justify-between relative min-h-[280px] sm:min-h-[380px]">
            
            {/* Mock Player Screen */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 p-6 text-center">
              <div 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-red-600/90 hover:bg-red-500 text-white flex items-center justify-center shadow-xl shadow-red-600/40 cursor-pointer transform hover:scale-110 transition-transform mb-4"
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
              </div>
              <p className="text-sm font-bold text-white max-w-md">
                {video.title}
              </p>
              <span className="text-xs text-slate-400 mt-1">
                Faculty: {video.instructor || 'Senior IAS Faculty Mentors'}
              </span>
            </div>

            {/* Video Controls Bar */}
            <div className="relative z-10 bg-slate-950/90 backdrop-blur-md px-4 py-3 border-t border-slate-800 flex items-center justify-between gap-4 text-slate-300">
              <button 
                onClick={() => setIsPlaying(!isPlaying)} 
                className="hover:text-white"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
                <div className="w-2/5 h-full bg-red-600 rounded-full"></div>
              </div>

              <span className="text-xs font-mono text-slate-400">14:20 / 45:00</span>
              <Volume2 className="w-5 h-5 hover:text-white cursor-pointer" />
              <Maximize className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>

          </div>

          {/* Side Transcript & Chapter Bookmarks */}
          <div className="lg:col-span-4 bg-slate-900 p-5 border-l border-slate-800 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Video Timestamps & Topics</span>
              </h4>

              <div className="space-y-2 text-xs">
                {[
                  { time: '00:00', label: 'Overview of Paper Structure' },
                  { time: '05:30', label: 'Key APPSC Group 1 Syllabus Topics' },
                  { time: '14:20', label: 'Detailed Explanation of Q1 - Q15' },
                  { time: '28:45', label: 'Answer Writing Tips for Mains' },
                  { time: '38:10', label: 'Model Solution Breakdown' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-lg border transition-colors cursor-pointer flex items-center justify-between ${
                      idx === 2 
                        ? 'bg-blue-600/20 border-blue-500 text-blue-200 font-bold' 
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[11px] text-blue-400">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-center">
              <button 
                onClick={() => alert("Connecting to mentor doubt chat...")}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask Doubts To Faculty</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
