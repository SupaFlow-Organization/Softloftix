import React from 'react';
import { Quote } from 'lucide-react';

const Problem = () => {
  return (
    <section id="expertise" className="relative py-24 border-b bg-white/[0.02] border-white/5">
      <div className="sm:px-6 lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6 text-center">
        <h2 className="text-xs font-semibold tracking-wider uppercase font-geist animate-on-scroll text-indigo-400">The Softloftix Standard</h2>
        <h3 className="mt-4 text-3xl sm:text-5xl font-geist tracking-tighter animate-on-scroll leading-tight text-white">
          Stop Settling for <br />Spaghetti Code.
        </h3>
        <div className="mt-10 relative border rounded-2xl p-8 sm:p-12 animate-on-scroll text-left bg-neutral-900/50 border-white/10">
          <div className="absolute -top-4 -left-4 bg-indigo-500 rounded-xl p-3 shadow-lg shadow-indigo-500/20">
            <Quote className="text-white" />
          </div>
          <p className="relative text-lg sm:text-xl font-geist leading-relaxed text-white/80">
            "Your software is your most valuable asset, yet most agencies treat it like a temporary gig. At Softloftix, we engineer systems that are secure, scalable, and maintainable. We don't just write code; we build intellectual property that drives valuation."
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold">SL</div>
            <div>
              <p className="text-sm font-medium font-geist text-white">Engineering Team</p>
              <p className="text-xs font-geist text-white/50">Softloftix HQ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;