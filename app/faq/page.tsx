import React from 'react';
import FAQ from '@/components/sections/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Softloftix',
  description: 'Frequently asked questions about our services, pricing, and development process.',
};

export default function FAQPage() {
  return (
    <div className="pt-20">
      <FAQ />
    </div>
  );
}

