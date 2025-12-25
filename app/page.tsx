import React from 'react';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Problem from '@/components/sections/Problem';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <header className="relative">
        <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
          <Hero />
        </div>
      </header>
      
      <TechStack />
      <Problem />
      <Stats />
      <Testimonials />
    </>
  );
}
