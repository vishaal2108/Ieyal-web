import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { COMPANY } from '@/data/company';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <Outlet />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href={COMPANY.contact.whatsappMsg}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
      
      {/* Ensures scroll position is restored on navigation */}
      <ScrollRestoration />
    </div>
  );
};

export default App;
