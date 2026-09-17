import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactAddressSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', exam: 'UPSC CSE 2026', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E8F0] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Left Aligned Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            CAMPUS & GUIDANCE HUB
          </span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Visit Our Hyderabad Campus & Guidance Hub
          </h2>
          <p className="mt-3 text-base lg:text-lg text-[#64748B] font-normal leading-relaxed">
            Connect with our academic counselors or visit our state-of-the-art offline study center in Hitec City.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: Dark Information Panel */}
          <div className="lg:col-span-5 bg-[#0F172A] text-white rounded-2xl p-8 lg:p-10 flex flex-col justify-between space-y-8 shadow-xl">
            
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5B800] bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded">
                  OFFLINE GUIDANCE HUB
                </span>
                <h3 className="text-2xl font-bold text-white mt-3">MSP Hyderabad Campus</h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300 font-normal">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#155EEF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold mb-0.5">Address:</strong>
                    <span>Plot No. 102, Knowledge Park, Cyber Hills, Hitec City, Hyderabad, Telangana – 500081</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <div>
                    <strong className="block text-white font-semibold mb-0.5">WhatsApp Support:</strong>
                    <a href="https://wa.me/917013923933?text=Hi%20My%20Syllabus%20Paper%2C%20I%20want%20to%20know%20more%20about%20your%20courses%20and%20exam%20preparation." target="_blank" rel="noreferrer" className="text-green-400 font-semibold hover:underline transition-colors">+91 70139 23933</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#155EEF] shrink-0" />
                  <div>
                    <strong className="block text-white font-semibold mb-0.5">Phone:</strong>
                    <a href="tel:+917013923933" className="hover:text-white transition-colors">+91 70139 23933</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#155EEF] shrink-0" />
                  <div>
                    <strong className="block text-white font-semibold mb-0.5">Email:</strong>
                    <a href="mailto:support@mysyllabuspaper.com" className="hover:text-white transition-colors">support@mysyllabuspaper.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#155EEF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold mb-0.5">Opening Hours:</strong>
                    <span>Monday – Saturday: 8:00 AM – 8:00 PM (Sunday Closed)</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#155EEF] hover:bg-white hover:text-[#0F172A] text-white font-bold text-sm rounded-xl transition-all shadow-md"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* RIGHT: Contact / Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2E8F0] p-8 lg:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">Request Academic Guidance & Counseling</h3>
              <p className="text-xs text-[#64748B] mt-1 mb-6">
                Fill out the form below to receive a personalized study plan and free syllabus sheet pack.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-[#16A34A] space-y-2 text-center animate-in fade-in duration-300">
                  <CheckCircle2 className="w-10 h-10 mx-auto text-[#16A34A]" />
                  <h4 className="text-lg font-bold text-[#0F172A]">Enquiry Sent Successfully!</h4>
                  <p className="text-xs text-[#64748B]">Our senior academic counselor will call you back within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. K. Suresh Kumar"
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-3 px-4 text-xs text-[#0F172A] focus:outline-none focus:border-[#155EEF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-3 px-4 text-xs text-[#0F172A] focus:outline-none focus:border-[#155EEF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="suresh@gmail.com"
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-3 px-4 text-xs text-[#0F172A] focus:outline-none focus:border-[#155EEF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">Target Examination *</label>
                      <select
                        value={form.exam}
                        onChange={(e) => setForm({ ...form, exam: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-3 px-4 text-xs text-[#0F172A] focus:outline-none focus:border-[#155EEF]"
                      >
                        <option value="UPSC CSE 2026">UPSC Civil Services 2026</option>
                        <option value="APPSC Group 1 & 2">APPSC Group 1 & Group 2</option>
                        <option value="TGPSC Group 1 & 2">TGPSC Group 1 & Group 2</option>
                        <option value="Combo All State Exams">Combo State PSC & UPSC</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">Your Query / Message</label>
                    <textarea
                      rows="3"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Specify your exam batch requirement or questions..."
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-3 px-4 text-xs text-[#0F172A] focus:outline-none focus:border-[#155EEF]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#155EEF] hover:bg-[#0F172A] text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
