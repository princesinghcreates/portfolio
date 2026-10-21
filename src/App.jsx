import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import WhoAmISection from './components/WhoAmISection';
import ServicesSection from './components/ServicesSection';
import VoiceOfPrinceSection from './components/VoiceOfPrinceSection';
import StatsSection from './components/StatsSection';
import ExperienceSection from './components/ExperienceSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import PostersModal from './components/PostersModal';
import CustomCursor from './components/CustomCursor';
import ProjectPage from './components/ProjectPage';
import SmoothScroll from './components/SmoothScroll';

// Main Landing Page Component
function HomePage({ onOpenContact, onOpenPosters }) {
  const navigate = useNavigate();

  return (
    <>
      <Navbar onOpenContact={() => onOpenContact()} />
      <main>
        {/* Hero Section */}
        <Hero onOpenContact={() => onOpenContact()} />

        {/* 01 //About Me */}
        <WhoAmISection />

        {/* 02 //Portfolio */}
        <PortfolioSection 
          onSelectProject={(proj) => {
            navigate(`/projects/${proj.id}`);
            window.scrollTo(0, 0);
          }} 
          onOpenPosters={onOpenPosters}
        />

        {/* 03 //Services */}
        <ServicesSection onOpenContact={(srv) => onOpenContact(srv)} />

        {/* 04 //Voice Of Prince */}
        <VoiceOfPrinceSection />

        {/* 05 //Stats */}
        <StatsSection />

        {/* 06 //Experience */}
        <ExperienceSection />

        {/* 07 //FAQ */}
        <FaqSection onOpenContact={() => onOpenContact()} />

        {/* Let's Work Together & Giant Prince Footer */}
        <ContactSection onOpenContact={() => onOpenContact()} />
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
      onNavigateHome={() => {
        navigate('/');
        window.scrollTo(0, 0);
      }}
      onNavigateProject={(projId) => {
        navigate(`/projects/${projId}`);
        window.scrollTo(0, 0);
      }}
      onOpenContact={onOpenContact}
    />
  );
}

export default function App() {
  const [postersOpen, setPostersOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Brand Identity');

  // Anti-Theft & Download Protection for Media
  useEffect(() => {
    // Disable right-click globally
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable dragging on images and videos
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
        return false;
      }
    };

    // Disable Inspect / Save Keyboard Shortcuts
    const handleKeyDown = (e) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      // Ctrl+S / Cmd+S (Save)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        return false;
      }
      // Ctrl+U / Cmd+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+I / Cmd+Option+I / Ctrl+Shift+C / Ctrl+Shift+J (DevTools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'C' || e.key === 'c' || e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const openContact = (serviceName) => {
    if (serviceName && typeof serviceName === 'string') {
      setSelectedService(serviceName);
    }
    setContactModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black relative">
        {/* Momentum Smooth Scrolling with Deceleration */}
        <SmoothScroll isPaused={contactModalOpen || postersOpen} />

        {/* Smooth Custom Cursor (Desktop) */}
        <CustomCursor />

        {/* Route Definitions */}
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenContact={openContact} 
                onOpenPosters={() => setPostersOpen(true)} 
              />
            } 
          />
          <Route 
            path="/projects/:id" 
            element={
              <ProjectRouteWrapper onOpenContact={openContact} />
            } 
          />
          {/* Fallback to homepage */}
          <Route 
            path="*" 
            element={
              <HomePage 
                onOpenContact={openContact} 
                onOpenPosters={() => setPostersOpen(true)} 
              />
            } 
          />
        </Routes>

        {/* Interactive Modals */}
        <ContactModal 
          isOpen={contactModalOpen} 
          onClose={() => setContactModalOpen(false)} 
          defaultService={selectedService}
        />

        <PostersModal 
          isOpen={postersOpen} 
          onClose={() => setPostersOpen(false)} 
        />
      </div>
    </BrowserRouter>
  );
}
