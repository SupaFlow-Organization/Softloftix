'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Check, Users, Briefcase } from 'lucide-react';

const Pricing = () => {

  return (
    <section className="sm:p-8 sm:ml-8 sm:mr-8 sm:mb-10 mt-10 mr-8 mb-10 ml-8 pt-6 pr-6 pb-6 pl-6" id="pricing">
      <div className="relative">
        {/* Header */}
        <div className="relative max-w-5xl mx-auto text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 border-white/10 text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
            <span className="text-xs font-normal font-geist">Investment</span>
          </div>
          <h2 className="text-[40px] sm:text-6xl leading-[0.95] mt-4 font-geist tracking-tighter text-white">Transparent Engagement Models.</h2>
          <p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto font-geist text-white/70">
            Choose a model that fits your growth stage. No hidden costs.
          </p>
        </div>
        {/* Plans Grid */}
        <div className="relative max-w-[1400px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Tier 1: MVP */}
          <article className="relative overflow-hidden rounded-2xl border backdrop-blur-xl p-8 animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300 border-white/10 bg-white/5">
            <div className="relative flex flex-col gap-1 mb-6">
              <h3 className="text-lg font-medium tracking-tight font-geist text-white">The MVP Build</h3>
              <p className="text-xs font-geist text-white/50">For Startups & Validating Ideas.</p>
            </div>
            <div className="relative mb-6">
              <div className="flex items-end gap-1">
                <p className="text-3xl lg:text-4xl font-geist tracking-tighter text-white">$4,999</p>
                <span className="text-xs mb-1.5 font-geist uppercase tracking-wide text-white/40">/ starting</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-geist bg-white/5 border-white/10 text-white/70">
                <Clock className="w-3 h-3" />
                3-4 Weeks
              </div>
            </div>
            <ul className="space-y-4 flex-1 mb-8">
              <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" /><span className="text-sm font-geist text-white/80">Core Feature Development</span></li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" /><span className="text-sm font-geist text-white/80">Web or Mobile Application</span></li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" /><span className="text-sm font-geist text-white/80">Basic Database Setup</span></li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" /><span className="text-sm font-geist text-white/80">Post-launch Bug Fixes</span></li>
            </ul>
            <Link 
              href="/contact" 
              className="w-full inline-flex items-center justify-center h-10 rounded-lg text-xs font-medium transition font-geist border bg-white/10 text-white hover:bg-white/20 border-white/10 cursor-pointer"
            >
              Start MVP
            </Link>
          </article>
          {/* Tier 2: Dedicated Team (Featured) */}
          <article className="relative overflow-hidden rounded-2xl border border-indigo-500/30 backdrop-blur-xl p-8 animate-on-scroll flex flex-col h-full shadow-[0_0_40px_-10px_rgba(79,70,229,0.2)] ring-1 ring-indigo-500/20 bg-indigo-900/10">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(79, 70, 229, 0.15), transparent 70%)' }}></div>
            <div className="relative flex flex-col gap-1 mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-tight font-geist text-white">Growth Partner</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider font-geist text-indigo-950 bg-indigo-400">Popular</span>
              </div>
              <p className="text-xs font-geist text-indigo-200/60">Scale-ups & Product Revamps.</p>
            </div>
            <div className="relative mb-6">
              <div className="flex items-end gap-1">
                <p className="text-3xl lg:text-4xl font-geist tracking-tighter text-white">$9,999</p>
                <span className="text-xs mb-1.5 font-geist uppercase tracking-wide text-white/40">/ mo</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-geist text-indigo-200">
                <Users className="w-3 h-3" />
                Retainer Model
              </div>
            </div>
            <ul className="space-y-4 flex-1 mb-8">
              <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" /><span className="text-sm font-medium font-geist text-white">Dedicated PM + 2 Developers</span></li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" /><span className="text-sm font-medium font-geist text-white">Bi-Weekly Sprints & Releases</span></li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" /><span className="text-sm font-medium font-geist text-white">Cloud Architecture Design</span></li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" /><span className="text-sm font-medium font-geist text-white">Priority Support (Slack Access)</span></li>
            </ul>
            <Link 
              href="/contact" 
              className="w-full inline-flex items-center justify-center h-10 rounded-lg text-xs font-semibold hover:bg-indigo-500 transition font-geist shadow-[0_0_20px_rgba(79,70,229,0.3)] bg-indigo-600 text-white cursor-pointer"
            >
              Hire Team
            </Link>
          </article>
          {/* Tier 3: Enterprise */}
          <article className="relative overflow-hidden rounded-2xl border backdrop-blur-xl p-8 animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300 border-white/10 bg-white/5">
            <div className="relative flex flex-col gap-1 mb-6">
              <h3 className="text-lg font-medium tracking-tight font-geist text-white">Enterprise</h3>
              <p className="text-xs font-geist text-white/50">Corporate & Legacy Modernization.</p>
            </div>
            <div className="relative mb-6">
              <div className="flex items-end gap-1">
                <p className="text-3xl lg:text-4xl font-geist tracking-tighter text-white">Custom</p>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-geist bg-white/5 border-white/10 text-white/70">
                <Briefcase className="w-3 h-3" />
                Tailored Scope
              </div>
            </div>
            <ul className="space-y-4 flex-1 mb-8">
              <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" /><span className="text-sm font-geist text-white/80">Full Digital Transformation</span></li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" /><span className="text-sm font-geist text-white/80">Security Audits & Compliance</span></li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" /><span className="text-sm font-geist text-white/80">SLA-Backed Support</span></li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" /><span className="text-sm font-geist text-white/80">On-premise Solutions</span></li>
            </ul>
            <Link 
              href="/contact" 
              className="w-full inline-flex items-center justify-center h-10 rounded-lg text-xs font-medium transition font-geist border bg-white/10 text-white hover:bg-white/20 border-white/10 cursor-pointer"
            >
              Contact Sales
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
