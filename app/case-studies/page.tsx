import React from 'react';
import Work from '@/components/sections/Work';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies — Softloftix',
  description: 'Recent deployments and case studies showcasing our work.',
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      <Work />
    </div>
  );
}

