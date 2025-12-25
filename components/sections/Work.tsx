'use client';

import React from 'react';
import Link from 'next/link';

const Work = () => {

  return (
    <section className="py-24 border-t relative border-white/5" id="work">
      <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="">
            <p className="text-sm font-medium font-geist animate-on-scroll uppercase tracking-wider text-indigo-400">Case Studies</p>
            <h2 className="text-3xl sm:text-5xl font-geist tracking-tighter animate-on-scroll mt-2 text-white">Recent Deployments</h2>
          </div>
          <Link 
            href="/contact" 
            className="hidden sm:inline-flex text-sm transition font-geist border-b pb-0.5 text-white/60 hover:text-white border-white/20 hover:border-white cursor-pointer"
          >
            View all projects →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-2xl border animate-on-scroll border-white/10 bg-white/5">
            <div className="aspect-video w-full bg-gradient-to-br relative overflow-hidden from-indigo-900/40 to-black">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2666&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t to-transparent from-black via-black/80">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider backdrop-blur rounded font-geist text-white bg-white/20">Fintech</span>
                  <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider backdrop-blur rounded font-geist text-white bg-white/10">React Native</span>
                </div>
                <h3 className="text-2xl font-semibold font-geist mb-2 text-white">Vaulted Finance App</h3>
                <p className="text-sm font-geist text-white/70">Secure mobile banking solution with biometric auth and real-time crypto trading features.</p>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-2xl border animate-on-scroll border-white/10 bg-white/5">
            <div className="aspect-video w-full bg-gradient-to-br relative overflow-hidden from-emerald-900/40 to-black">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2666&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t to-transparent from-black via-black/80">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider backdrop-blur rounded font-geist text-white bg-white/20">Healthcare</span>
                  <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider backdrop-blur rounded font-geist text-white bg-white/10">Next.js + Python</span>
                </div>
                <h3 className="text-2xl font-semibold font-geist mb-2 text-white">MediCore Dashboard</h3>
                <p className="text-sm font-geist text-white/70">HIPAA-compliant patient management system with AI-driven diagnostic assistance tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
