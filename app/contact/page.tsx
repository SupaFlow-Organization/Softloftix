import React from 'react';
import Contact from '@/components/sections/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Softloftix',
  description: 'Book a strategy call with Softloftix to discuss your project.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}

