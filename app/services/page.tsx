import React from 'react';
import Services from '@/components/sections/Services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Softloftix',
  description: 'Full-cycle development services: Web applications, mobile engineering, backend & cloud solutions.',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
    </div>
  );
}

