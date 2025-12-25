import React from 'react';
import Pricing from '@/components/sections/Pricing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Softloftix',
  description: 'Transparent engagement models: MVP Build, Growth Scale, and Enterprise Scale packages.',
};

export default function PricingPage() {
  return (
    <div className="pt-20">
      <Pricing />
    </div>
  );
}

