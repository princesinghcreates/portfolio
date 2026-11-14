import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import TopHeaderTab from './components/TopHeaderTab';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DoubleMarquee from './components/DoubleMarquee';
import PracticeSection from './components/PracticeSection';
import WorksSection from './components/WorksSection';
import CorkboardSection from './components/CorkboardSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ConnectSection from './components/ConnectSection';
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
      
      {/* Harron-Style Top Tab with Curved Wings */}
      <TopHeaderTab onOpenContact={() => onOpenContact()} />

      {/* Floating Pill Navbar */}
      <Navbar onOpenContact={() => onOpenContact()} />

      <main>
        {/* Hero Section with Live Clock, Inline Media Pills & Role Rotator */}
        <Hero onOpenContact={() => onOpenContact()} />

        {/* Double Angled Typographic Marquee */}
        <DoubleMarquee />

        {/* 01 // Practice & Disciplines (Video Editing Prioritized, SaaS UI, AI Workflows) */}
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

        {/* 04 // How We Work (4-Step Creative Pipeline) */}
        <ProcessSection />

        {/* 05 // About Prince Singh (Bio, Toolchain, Philosophy) */}
        <AboutSection onOpenContact={() => onOpenContact()} />

        {/* 06 // Testimonials (Client Trust & Direct Feedback) */}
        <TestimonialsSection />

        {/* 07 // FAQs (Turnaround, Retainers, Deliverables) */}
        <FaqSection onOpenContact={() => onOpenContact()} />

        {/* 08 // Let's Connect & Giant Footer */}
        <ConnectSection onOpenContact={() => onOpenContact()} />
      </main>
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
      onBack={() => navigate('/')}
      onOpenContact={onOpenContact}
    />
  );
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('');

  const openContact = (service = 'SaaS UI & Explainer Motion') => {
    setDefaultService(service);
    setContactOpen(true);
  };

  const closeContact = () => {
    setContactOpen(false);
  };

  return (
    <BrowserRouter>
      <SmoothScroll>
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

        {/* Universal Contact Modal */}
        <ContactModal 
          isOpen={contactOpen} 
          onClose={closeContact} 
          defaultService={defaultService}
        />
      </SmoothScroll>
    </BrowserRouter>
  );
}
