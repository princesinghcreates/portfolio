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

      {/* Floating Redesign Review Switcher Pill */}
      <aside aria-label="Redesign preview switcher" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#5C59E8] text-white shadow-2xl hover:bg-[#4d4ac7] transition-all hover:scale-105">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <a href="/preview-redesign.html" className="text-xs font-bold tracking-tight">
          Review Redesigned Site (White Theme) &rarr;
        </a>
      </aside>
    </div>
  );
}
