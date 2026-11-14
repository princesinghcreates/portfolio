import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import DoubleMarquee from './components/DoubleMarquee';
import PracticeSection from './components/PracticeSection';
import WorksSection from './components/WorksSection';
import CorkboardSection from './components/CorkboardSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import ContactModal from './components/ContactModal';
import ReactiveCursor from './components/ReactiveCursor';
import Preloader from './components/Preloader';
import ProjectPage from './components/ProjectPage';
import SmoothScroll from './components/SmoothScroll';

// Main Landing Page Component (Harron-Inspired Redesign)
function HomePage({ onOpenContact }) {
  const navigate = useNavigate();

  return (
    <>
      <Preloader />
      <ReactiveCursor />
      
      {/* Hero Section with Live Clock, Inline Showreel Pill & Confident Positioning */}
      <Hero onOpenContact={() => onOpenContact()} />

      {/* Double Angled Typographic Marquee */}
      <DoubleMarquee />

      {/* 01 // Practice & Disciplines (Video Editing Prioritized, SaaS UI, Motion) */}
      <PracticeSection onOpenContact={(srv) => onOpenContact(srv)} />

      {/* 02 // Selected Works (Reels, SaaS Motion, Brand Identity, Packaging) */}
      <WorksSection 
        onSelectProject={(proj) => {
          navigate(`/projects/${proj.id}`);
          window.scrollTo(0, 0);
        }} 
      />

      {/* 03 // Studio Corkboard (Interactive Pinboard with Real Posters & Notes) */}
      <CorkboardSection />

      {/* 04 // How We Work (4-Step Creative Pipeline with Expanded Negative Space) */}
      <ProcessSection />

      {/* 05 // About Prince Singh (Bio, Toolchain, Philosophy) */}
      <AboutSection onOpenContact={() => onOpenContact()} />

      {/* 06 // FAQs (Turnaround, Retainers, Deliverables) */}
      <FaqSection onOpenContact={() => onOpenContact()} />
    </>
  );
}

// Project Route Wrapper
function ProjectRouteWrapper({ onOpenContact }) {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <ProjectPage
      projectId={id}
      onNavigateHome={() => navigate('/')}
      onNavigateProject={(projId) => navigate(`/projects/${projId}`)}
      onOpenContact={onOpenContact}
    />
  );
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('');

  const openContact = (service = 'Narrative & Documentary Video Editing') => {
    setDefaultService(service);
    setContactOpen(true);
  };

  const closeContact = () => {
    setContactOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-[#5c59e8] selection:text-white relative">
        <SmoothScroll isPaused={contactOpen} />
        
        {/* Global Layout wrapping all routes: Universal Header Tab, Navbar, and Footer */}
        <Layout onOpenContact={openContact}>
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenContact={openContact}
                />
              } 
            />
            <Route 
              path="/projects/:id" 
              element={
                <ProjectRouteWrapper 
                  onOpenContact={openContact}
                />
              } 
            />
          </Routes>
        </Layout>

        {/* Universal Contact Modal */}
        <ContactModal 
          isOpen={contactOpen} 
          onClose={closeContact} 
          defaultService={defaultService}
        />
      </div>
    </BrowserRouter>
  );
}
