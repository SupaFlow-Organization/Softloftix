import React from 'react';
import Work from '@/components/sections/Work';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio — Softloftix',
  description: 'Our portfolio of successful projects and case studies.',
};

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-geist font-semibold tracking-tight text-white mb-6 animate-on-scroll">
            Our Work Speaks for Itself
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-geist max-w-3xl mx-auto leading-relaxed animate-on-scroll">
            Every project in our portfolio represents a unique challenge solved, a business goal achieved, and a relationship built on trust. Explore our recent deployments and see how we've helped companies transform their digital presence.
          </p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm animate-on-scroll">
            <div className="text-3xl md:text-4xl font-bold font-geist text-indigo-400 mb-2">50+</div>
            <div className="text-sm text-white/60 font-geist">Projects Delivered</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm animate-on-scroll">
            <div className="text-3xl md:text-4xl font-bold font-geist text-indigo-400 mb-2">98%</div>
            <div className="text-sm text-white/60 font-geist">Client Satisfaction</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm animate-on-scroll">
            <div className="text-3xl md:text-4xl font-bold font-geist text-indigo-400 mb-2">15+</div>
            <div className="text-sm text-white/60 font-geist">Industries Served</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm animate-on-scroll">
            <div className="text-3xl md:text-4xl font-bold font-geist text-indigo-400 mb-2">24/7</div>
            <div className="text-sm text-white/60 font-geist">Support Available</div>
          </div>
        </div>

        {/* Featured Projects */}
        <Work />

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-500/20 rounded-2xl p-8 md:p-12 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-semibold font-geist text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/70 font-geist mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with cutting-edge technology and proven expertise.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold font-geist rounded-lg transition-all shadow-[0_4px_12px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_16px_rgba(99,102,241,0.4)]"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
