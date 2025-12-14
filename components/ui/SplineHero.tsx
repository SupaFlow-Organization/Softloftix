'use client';

import React from 'react';
import Script from 'next/script';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

const SplineHero = () => {
  return (
    <>
      <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js" strategy="lazyOnload" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-[-1] opacity-60">
         {/* @ts-ignore */}
         <spline-viewer url="https://prod.spline.design/6Wq1Q7sljZPOZJLl/scene.splinecode"></spline-viewer>
      </div>
    </>
  );
};

export default SplineHero;