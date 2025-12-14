import React from 'react';

const Process = () => {
  return (
    <section className="py-24 bg-white/[0.02] border-y relative border-white/5">
      <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter text-white">From Concept to Code</h2>
          <p className="mt-4 font-geist text-white/60">Our agile methodology ensures rapid delivery without technical debt.</p>
        </div>
        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent border-t border-dashed border-white/20"></div>
          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center animate-on-scroll group">
            <div className="w-16 h-16 rounded-2xl border border-indigo-500 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_30px_rgba(99,102,241,0.25)] bg-black">
              <span className="text-xl font-bold font-geist text-indigo-400">01</span>
            </div>
            <h3 className="text-xl font-medium font-geist mb-2 text-white">Discovery & UI/UX</h3>
            <p className="text-sm font-geist leading-relaxed max-w-xs text-white/60">We map user journeys and define technical requirements. Wireframing and prototyping to ensure alignment.</p>
          </div>
          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center animate-on-scroll group">
            <div className="w-16 h-16 rounded-2xl border border-indigo-500 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_30px_rgba(99,102,241,0.25)] bg-black">
              <span className="text-xl font-bold font-geist text-indigo-400">02</span>
            </div>
            <h3 className="text-xl font-medium font-geist mb-2 text-white">Sprint Development</h3>
            <p className="text-sm font-geist leading-relaxed max-w-xs text-white/60">Two-week agile sprints. You get testable builds every fortnight. Continuous integration ensures stability.</p>
          </div>
          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center animate-on-scroll group">
            <div className="w-16 h-16 rounded-2xl border border-indigo-500 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_30px_rgba(99,102,241,0.25)] bg-black">
              <span className="text-xl font-bold font-geist text-indigo-400">03</span>
            </div>
            <h3 className="text-xl font-medium font-geist mb-2 text-white">Launch & Scale</h3>
            <p className="text-sm font-geist leading-relaxed max-w-xs text-white/60">Deployment to cloud infrastructure. We set up monitoring, analytics, and provide ongoing maintenance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;