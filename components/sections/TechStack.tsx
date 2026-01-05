import React from 'react';
import { Atom, Blocks, Server, Smartphone, CloudCog, Database, Code, Coffee } from 'lucide-react';

const TechStack = () => {
  return (
    <section className="border-y overflow-hidden z-10 border-white/5 pt-10 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-xs font-medium text-center uppercase tracking-widest font-geist text-white/40">Powered by Modern Architecture</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {/* Repeat marquee items twice for seamless loop */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
                <Atom className="w-8 h-8 text-cyan-400" />
                <span className="font-geist font-semibold text-lg text-white">React</span>
              </div>
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
                <Blocks className="w-8 h-8 text-white" />
                <span className="font-geist font-semibold text-lg text-white">Next.js</span>
              </div>
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
                <Server className="w-8 h-8 text-green-400" />
                <span className="font-geist font-semibold text-lg text-white">Node.js</span>
              </div>
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
                <Smartphone className="w-8 h-8 text-blue-400" />
                <span className="font-geist font-semibold text-lg text-white">Flutter</span>
              </div>
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
                <CloudCog className="w-8 h-8 text-orange-400" />
                <span className="font-geist font-semibold text-lg text-white">AWS</span>
              </div>
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
                <Database className="w-8 h-8 text-indigo-400" />
                <span className="font-geist font-semibold text-lg text-white">Supabase</span>
              </div>
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
                <Code className="w-8 h-8 text-red-400" />
                <span className="font-geist font-semibold text-lg text-white">Ruby on Rails</span>
              </div>
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
                <Coffee className="w-8 h-8 text-orange-500" />
                <span className="font-geist font-semibold text-lg text-white">Java</span>
              </div>
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
                <Code className="w-8 h-8 text-yellow-400" />
                <span className="font-geist font-semibold text-lg text-white">Python</span>
              </div>
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
                <Database className="w-8 h-8 text-blue-500" />
                <span className="font-geist font-semibold text-lg text-white">PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
                <Database className="w-8 h-8 text-blue-600" />
                <span className="font-geist font-semibold text-lg text-white">MySQL</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;