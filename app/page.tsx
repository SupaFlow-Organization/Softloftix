'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Problem from '@/components/sections/Problem';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Process from '@/components/sections/Process';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Home() {
  // Initialize scroll animation logic
  useScrollAnimation();

  return (
    <div className="h-full overflow-y-auto w-full transition-opacity duration-500 relative scroll-smooth">
      <Navbar />
      
      <header className="relative">
        <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
          <Hero />
        </div>
      </header>
      
      <TechStack />
      <Problem />
      <Services />
      <Work />
      <Process />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
