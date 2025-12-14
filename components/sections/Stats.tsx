import React from 'react';

const Stats = () => {
  return (
    <section className="py-12 border-b relative bg-white/[0.01] border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
          <div className="animate-on-scroll">
            <p className="text-4xl md:text-5xl font-bold font-geist tracking-tighter text-white">50+</p>
            <p className="text-xs uppercase tracking-widest mt-2 font-geist text-white/40">Projects Shipped</p>
          </div>
          <div className="animate-on-scroll">
            <p className="text-4xl md:text-5xl font-bold font-geist tracking-tighter text-white">98%</p>
            <p className="text-xs uppercase tracking-widest mt-2 font-geist text-white/40">Client Retention</p>
          </div>
          <div className="animate-on-scroll">
            <p className="text-4xl md:text-5xl font-bold font-geist tracking-tighter text-white">4.9</p>
            <p className="text-xs uppercase tracking-widest mt-2 font-geist text-white/40">Clutch Rating</p>
          </div>
          <div className="animate-on-scroll">
            <p className="text-4xl md:text-5xl font-bold font-geist tracking-tighter text-white">24/7</p>
            <p className="text-xs uppercase tracking-widest mt-2 font-geist text-white/40">Support Active</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;