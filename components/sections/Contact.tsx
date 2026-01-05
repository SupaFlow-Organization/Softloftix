'use client';

import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const Contact = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section className="relative py-16" id="contact">
      {/* CTA Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-950/40 to-black/60 py-10 px-8 md:py-14 md:px-12 text-center animate-on-scroll backdrop-blur-sm">
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-geist font-semibold tracking-tight text-white">
              Ready to stop leaving money on the table?
            </h2>
            <p className="mt-3 text-sm sm:text-base font-geist text-white/60">
              Let's see how we can fix the issues that are holding you back from driving more revenue today!
            </p>
          </div>
        </div>
      </div>

      {/* Cal.com Calendar */}
      <div id="calendar" className="max-w-7xl mx-auto px-6" style={{ minHeight: '600px' }}>
        <Cal
          namespace="30min"
          calLink="softloftix-gm6yt3/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </section>
  );
};

export default Contact;
