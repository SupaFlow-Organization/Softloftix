'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="sm:pt-16 md:pt-32 md:pb-16 text-center max-w-5xl z-10 mr-auto ml-auto pt-16 pb-20 relative">
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 animate-fadeSlideIn opacity-0 text-indigo-300">
        <span className="relative flex h-2 w-2"> 
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span> 
        </span>
        <span className="text-xs font-medium font-geist uppercase tracking-wide">Accepting New Projects</span> 
      </div>
      <h1 className="sm:text-6xl md:text-7xl animate-fadeSlideIn [animation-delay:200ms] text-5xl tracking-tighter font-geist opacity-0 max-w-4xl mr-auto ml-auto font-semibold leading-[1.1]">
        Engineering the Future<br /> of <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Digital Products.</span>
      </h1>
      <p className="sm:text-lg animate-fadeSlideIn [animation-delay:300ms] text-base font-normal font-geist max-w-2xl mt-6 mr-auto ml-auto leading-relaxed text-white/60 opacity-0">
        Softloftix builds scalable web applications, native mobile experiences, and enterprise cloud solutions. We turn complex requirements into elegant code.
      </p>
      <div className="flex flex-col sm:flex-row animate-fadeSlideIn [animation-delay:400ms] mt-10 gap-x-4 gap-y-4 items-center justify-center opacity-0">
        <Link 
          href="/contact" 
          className="group relative inline-flex min-w-[160px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] overflow-hidden font-semibold tracking-tight rounded-full pt-[14px] pr-[24px] pb-[14px] pl-[24px] items-center justify-center hover:text-white bg-white text-black"
        >
          <span className="relative z-10 font-medium rounded-full font-geist text-black">Start Building</span>
        </Link>
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-base font-medium border rounded-full pt-3.5 pr-6 pb-3.5 pl-6 backdrop-blur font-geist transition-all hover:bg-white/10 text-white/90 bg-white/5 border-white/10 cursor-pointer"
        >
          Explore Services 
          <ArrowDown className="w-4 h-4 text-white/50" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
