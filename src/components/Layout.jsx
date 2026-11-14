import React from 'react';
import { useLocation } from 'react-router-dom';
import TopHeaderTab from './TopHeaderTab';
import Navbar from './Navbar';
import ConnectSection from './ConnectSection';

export default function Layout({ children, onOpenContact }) {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/projects/');

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-[#5c59e8] selection:text-white flex flex-col justify-between">
      {/* Top Header Tab */}
      <TopHeaderTab onOpenContact={() => onOpenContact()} />

      {/* Floating Pill Navbar */}
      <Navbar onOpenContact={() => onOpenContact()} />

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Universal Footer: Renders across Home, Case Studies, and all routes */}
      <ConnectSection onOpenContact={() => onOpenContact()} />
    </div>
  );
}
