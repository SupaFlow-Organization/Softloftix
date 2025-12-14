'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    particlesJS: any;
  }
}

const ParticlesBackground = () => {
  useEffect(() => {
    // We can't guarantee window.particlesJS is available immediately on mount if loaded via Script strategy
    // So we rely on the Script onLoad callback, but also check here in case it's already loaded
    if (typeof window !== 'undefined' && window.particlesJS) {
      initParticles();
    }
  }, []);

  const initParticles = () => {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
      },
      retina_detect: true
    });
  };

  return (
    <>
      <Script 
        src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" 
        strategy="lazyOnload"
        onLoad={initParticles}
      />
      <div 
        className="aura-background-component -z-10 w-full h-[1040px] absolute top-0 hue-rotate-15 pointer-events-none" 
        style={{ 
          maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)' 
        }} 
        data-alpha-mask="80"
      >
        <div id="particles-js" className="absolute inset-0 -z-10"></div>
      </div>
    </>
  );
};

export default ParticlesBackground;