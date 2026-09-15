import React, { useState } from 'react';
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
    setPortalModalOpen(true);
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
    </div>
  );
}
