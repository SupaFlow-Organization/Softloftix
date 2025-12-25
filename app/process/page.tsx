import React from 'react';
import Process from '@/components/sections/Process';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process — Softloftix',
  description: 'Our agile methodology: From concept to code with rapid delivery.',
};

export default function ProcessPage() {
  return (
    <div className="pt-20">
      <Process />
    </div>
  );
}

