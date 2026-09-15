import React, { useState } from 'react';
import { X, Clock, CheckCircle2, AlertCircle, Award, RotateCcw } from 'lucide-react';

export default function DemoTestModal({ testInfo, onClose }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      q: 'Which Article of the Indian Constitution empowers the Governor to promulgate Ordinances during recess of Legislature?',
      options: ['Article 213', 'Article 123', 'Article 356', 'Article 161'],
      correct: 0,
      exp: 'Article 213 empowers the Governor to promulgate ordinances when the state legislature is not in session.',
    },
    {
      id: 2,
      q: 'With reference to APPSC Group 1 Syllabus, the Telangana Movement and State Formation encompasses which timeline?',
      options: ['1948 - 2014', '1956 - 2014', '1969 - 2014', '1972 - 2014'],
      correct: 1,
      exp: 'The phase from the Gentleman’s Agreement of 1956 to the enactment of the AP Reorganisation Act 2014.',
    },
    {
      id: 3,
      q: 'What is the primary objective of Fiscal Policy in India?',
      options: [
        'Regulation of Money Supply',
        'Economic Growth, Price Stability & Employment',
        'Managing Foreign Exchange Reserves',
        'Direct Control of Stock Exchanges',
      ],
      correct: 1,
      exp: 'Fiscal policy uses government revenue and expenditure to monitor and influence the nation’s economic growth.',
    },
  ];

  const handleSelectOption = (optIndex) => {
    if (submitted) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQ]: optIndex });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        score += 1;
      }
    });
    return score;
  };

  if (!testInfo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              📝 Interactive Demo Test Engine • MSP
            </span>
            <h3 className="text-lg font-extrabold text-white">
              {testInfo.title || 'APPSC / TGPSC Sample Practice Test'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-slate-950">
          
          {!submitted ? (
            <div>
              {/* Question Progress Header */}
              <div className="flex items-center justify-between bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-800 text-xs font-bold text-slate-300 mb-6">
                <span>Question {currentQ + 1} of {questions.length}</span>
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Clock className="w-4 h-4" />
                  <span>Time Left: 14:45</span>
                </div>
              </div>

              {/* Question Text */}
              <h4 className="text-base sm:text-lg font-bold text-white mb-4">
                Q{currentQ + 1}. {questions[currentQ].q}
              </h4>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentQ].options.map((opt, oIdx) => {
                  const isSelected = selectedAnswers[currentQ] === oIdx;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(oIdx)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-blue-600 border-blue-400 text-white shadow-lg'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700'
                      }`}
                    >
                      <span>{opt}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-white bg-white/20' : 'border-slate-600'}`}>
                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Footer */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  disabled={currentQ === 0}
                  onClick={() => setCurrentQ(currentQ - 1)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Previous
                </button>

                {currentQ < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQ(currentQ + 1)}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    onClick={() => setSubmitted(true)}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold uppercase tracking-wider rounded-lg transition-colors shadow-lg"
                  >
                    Submit Test Now
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                <Award className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">Test Completed!</h3>
                <p className="text-slate-400 text-xs mt-1">Here is your Instant Score & Detailed Answer Key</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-sm mx-auto">
                <span className="text-xs font-bold text-slate-500 uppercase block">Your Score</span>
                <span className="text-4xl font-black text-emerald-400">
                  {calculateScore()} / {questions.length}
                </span>
                <span className="text-xs text-slate-400 block mt-1">
                  Accuracy: {Math.round((calculateScore() / questions.length) * 100)}%
                </span>
              </div>

              <div className="text-left space-y-4 pt-4 border-t border-slate-800">
                <h4 className="font-bold text-sm text-white">Explanations & Solution Key:</h4>
                {questions.map((q, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1">
                    <p className="font-bold text-slate-200">Q{idx + 1}: {q.q}</p>
                    <p className="text-emerald-400 font-semibold">Correct Answer: {q.options[q.correct]}</p>
                    <p className="text-slate-400 text-[11px]">{q.exp}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentQ(0);
                  setSelectedAnswers({});
                }}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Demo Test</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
