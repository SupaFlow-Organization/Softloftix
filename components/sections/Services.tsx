'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Smartphone, Server } from 'lucide-react';

const Services = () => {

  return (
    <section className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-20 pl-6 relative" id="solutions">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div className="">
          <p className="text-sm font-medium font-geist animate-on-scroll uppercase tracking-wider text-indigo-400">Our Expertise</p>
          <h2 className="text-3xl sm:text-5xl font-geist tracking-tighter animate-on-scroll mt-2 text-white">Full-Cycle Development</h2>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">
        {/* Card 1: Web */}
        <div className="relative overflow-hidden rounded-2xl border animate-on-scroll group hover:bg-white/[0.07] transition-all duration-300 md:col-span-1 hover:border-indigo-500/30 border-white/10 bg-white/5">
          <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium tracking-tight font-geist text-white">Web Applications</h3>
            <p className="mt-3 text-sm font-geist leading-relaxed text-white/60">High-performance React & Next.js applications. SEO-optimized, accessible, and designed to convert. We build PWAs that feel like native apps.</p>
          </div>
        </div>
        {/* Card 2: Mobile */}
        <div className="relative overflow-hidden rounded-2xl border animate-on-scroll group hover:bg-white/[0.07] transition-all duration-300 md:col-span-1 hover:border-indigo-500/30 border-white/10 bg-white/5">
          <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-6 h-6 text-indigo-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium tracking-tight font-geist text-white">Mobile Engineering</h3>
            <p className="mt-3 text-sm font-geist leading-relaxed text-white/60">Native and cross-platform (Flutter/React Native) solutions. We handle everything from architecture to App Store submission.</p>
          </div>
        </div>
        {/* Card 3: Backend */}
        <div className="relative overflow-hidden rounded-2xl border animate-on-scroll group hover:bg-white/[0.07] transition-all duration-300 md:col-span-1 hover:border-indigo-500/30 border-white/10 bg-white/5">
          <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Server className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium tracking-tight font-geist text-white">Backend & Cloud</h3>
            <p className="mt-3 text-sm font-geist leading-relaxed text-white/60">Robust APIs, database design, and serverless architecture. We ensure your infrastructure scales automatically as you grow.</p>
          </div>
        </div>
        {/* Feature: Integration/AI */}
        <div className="group relative overflow-hidden rounded-2xl border md:col-span-3 animate-on-scroll mt-0 hover:border-indigo-500/40 transition-colors border-white/10 bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-r to-transparent z-10 from-black via-black/80"></div>
          <div className="absolute right-0 top-0 h-full w-full md:w-2/3 bg-[url(https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2940&auto=format&fit=crop)] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700"></div>
          <div className="p-8 sm:p-12 relative z-20 h-full flex flex-col justify-center max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-medium font-geist uppercase tracking-wide border-indigo-400/30 bg-indigo-400/10 text-indigo-300">Enterprise Solution</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-geist tracking-tighter text-white">AI & Automation Integration</h3>
            <p className="mt-4 text-base sm:text-lg font-geist leading-relaxed text-white/70">Future-proof your business. We integrate LLMs, custom chatbots, and automated workflows directly into your existing software ecosystem to reduce operational costs.</p>
            <div className="mt-8 flex gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-sm font-medium border border-indigo-500 rounded-lg px-5 py-2.5 hover:bg-indigo-500 transition font-geist shadow-lg text-white bg-indigo-600 shadow-indigo-900/20 cursor-pointer"
              >
                Consult with an Architect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
