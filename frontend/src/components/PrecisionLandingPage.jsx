import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import NoticeBar from './NoticeBar';
import HeaderNav from './HeaderNav';
import PrecisionHero from './PrecisionHero';
import StatsCounterBar from './StatsCounterBar';
import TargetedExamHubs from './TargetedExamHubs';
import DailyBriefingSection from './DailyBriefingSection';
import TestSeriesSection from './TestSeriesSection';
import LiveCohortsSection from './LiveCohortsSection';
import MicroSyllabusVault from './MicroSyllabusVault';
import MentorsSection from './MentorsSection';
import TestimonialsSection from './TestimonialsSection';
import EditorialInsightsSection from './EditorialInsightsSection';
import ContactAddressSection from './ContactAddressSection';
import FinalCtaBanner from './FinalCtaBanner';
import SiteFooter from './SiteFooter';

import SyllabusPreviewModal from './SyllabusPreviewModal';
import DemoTestModal from './DemoTestModal';
import AuthModal from './AuthModal';

export default function PrecisionLandingPage() {
  const [activePreview, setActivePreview] = useState(null);
  const [activeTest, setActiveTest] = useState(null);
  const [portalModalOpen, setPortalModalOpen] = useState(false);

  const handleOpenDiagnostic = () => {
    setActiveTest({ title: 'UPSC / APPSC / TGPSC Free Diagnostic Test' });
  };

  const handleEnroll = (planName) => {
    const text = planName 
      ? encodeURIComponent(`Hi My Syllabus Paper, I am interested in enrolling for ${planName}. Please guide me with enrollment and fee details.`)
      : encodeURIComponent('Hi My Syllabus Paper, I want to enroll in your exam preparation program.');
    window.open(`https://wa.me/917013923933?text=${text}`, '_blank');
  };

  const handleDownload = (sheetTitle) => {
    alert(`Downloading ${sheetTitle}... File will be saved to your device.`);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#155EEF] selection:text-white flex flex-col pt-[72px]">
      {/* 1. Header Navbar */}
      <HeaderNav 
        onOpenAuth={handleOpenDiagnostic} 
        onOpenPortal={() => setPortalModalOpen(true)}
      />

      {/* 3. Hero Section (Production Quality Two-Column) */}
      <PrecisionHero onOpenDiagnostic={handleOpenDiagnostic} />

      {/* 4. Trust Statistics Bar (5-Column Horizontal Text Blocks) */}
      <StatsCounterBar />

      {/* 5. Exam Preparation ("Choose Your Exam" - 3 Equal Cards) */}
      <TargetedExamHubs onPreview={(paper) => setActivePreview(paper)} />

      {/* 6. Current Affairs ("Current Affairs That Keep You Exam Ready" - 4-Column Grid) */}
      <DailyBriefingSection onDownloadPdf={() => handleDownload('Today Editorial Analysis PDF')} />

      {/* 7. All-India Prelims & Mains Test Series */}
      <TestSeriesSection onEnroll={handleEnroll} />

      {/* 8. Popular Courses & Signature Programs */}
      <LiveCohortsSection onEnroll={handleEnroll} />

      {/* 9. Study Material & Revision Vault */}
      <MicroSyllabusVault onDownload={handleDownload} />

      {/* 10. Mentorship ("Learn From Experience. Prepare With Direction.") */}
      <MentorsSection onBookSession={handleOpenDiagnostic} />

      {/* 11. Results / Success Stories ("From MSP Aspirants to Serving Officers") */}
      <TestimonialsSection />

      {/* 12. Strategy Guides & Editorial Insights */}
      <EditorialInsightsSection />

      {/* 13. Visit Our Hyderabad Campus & Guidance Hub */}
      <ContactAddressSection />

      {/* 14. Final CTA Banner */}
      <FinalCtaBanner onOpenDiagnostic={handleOpenDiagnostic} />

      {/* 15. Complete Site Footer */}
      <SiteFooter />

      {/* Interactive Modals */}
      {activePreview && (
        <SyllabusPreviewModal 
          paper={activePreview} 
          onClose={() => setActivePreview(null)} 
        />
      )}

      {activeTest && (
        <DemoTestModal 
          testInfo={activeTest} 
          onClose={() => setActiveTest(null)} 
        />
      )}

      {/* Login / Registration / Admin Portal Modal */}
      <AuthModal 
        isOpen={portalModalOpen}
        onClose={() => setPortalModalOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button (Official Squircle Icon) */}
      <a
        href="https://wa.me/917013923933?text=Hi%20My%20Syllabus%20Paper%2C%20I%20want%20to%20know%20more%20about%20your%20courses%20and%20exam%20preparation."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border border-white/30 cursor-pointer"
        title="Chat with us on WhatsApp (+91 7013923933)"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.705 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
        </svg>
      </a>
    </div>
  );
}
