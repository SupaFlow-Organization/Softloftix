'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  
  // Initialize scroll animation logic
  useScrollAnimation();

  useEffect(() => {
    // Scroll to top on route change
    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'instant' });
    }
    
    // Re-trigger scroll animations after a short delay to ensure elements are rendered
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.animate)');
      elements.forEach((el) => {
        // Force a re-check by temporarily removing and re-adding the class
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate');
        }
      });
    }, 100);
  }, [pathname]);

  return (
    <div className="overflow-y-auto w-full transition-opacity duration-500 relative scroll-smooth" style={{ height: '100vh', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;

