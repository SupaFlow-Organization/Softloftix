import React from 'react';
import Contact from '@/components/sections/Contact';
import type { Metadata } from 'next';
import { Clock, Users, Code, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hire a Talent — Softloftix',
  description: 'Hire talented developers from Softloftix for your projects.',
};

export default function HireATalentPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-geist font-semibold tracking-tight text-white mb-6">
            Hire World-Class Developers
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-geist max-w-3xl mx-auto leading-relaxed">
            Access a curated pool of senior developers, designers, and engineers ready to join your team. Whether you need full-time talent, part-time expertise, or a dedicated project team, we've got you covered.
          </p>
        </div>

        {/* Hiring Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-xl font-semibold font-geist text-white mb-4">Full-Time Developers</h2>
            <p className="text-white/60 font-geist text-sm leading-relaxed mb-4">
              Dedicated developers who become an integral part of your team. Perfect for long-term projects and ongoing development needs.
            </p>
            <ul className="space-y-2 text-white/70 font-geist text-sm">
              <li>• 40+ hours per week</li>
              <li>• Direct team integration</li>
              <li>• Long-term commitment</li>
              <li>• Full project ownership</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-xl font-semibold font-geist text-white mb-4">Part-Time Developers</h2>
            <p className="text-white/60 font-geist text-sm leading-relaxed mb-4">
              Flexible engagement for specific features, maintenance, or specialized expertise. Ideal for startups and growing businesses.
            </p>
            <ul className="space-y-2 text-white/70 font-geist text-sm">
              <li>• 20-30 hours per week</li>
              <li>• Flexible scheduling</li>
              <li>• Cost-effective solution</li>
              <li>• Specialized skills on demand</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-xl font-semibold font-geist text-white mb-4">Project-Based Teams</h2>
            <p className="text-white/60 font-geist text-sm leading-relaxed mb-4">
              Complete development teams assembled for specific projects. Includes PM, developers, designers, and QA specialists.
            </p>
            <ul className="space-y-2 text-white/70 font-geist text-sm">
              <li>• Complete team setup</li>
              <li>• Fixed project scope</li>
              <li>• Defined deliverables</li>
              <li>• End-to-end execution</li>
            </ul>
          </div>
        </div>

        {/* Why Hire from Us */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold font-geist text-white mb-12 text-center">Why Hire from Softloftix?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-geist text-white mb-2">Vetted Professionals</h3>
                <p className="text-white/60 font-geist text-sm leading-relaxed">
                  Every developer in our network has been thoroughly vetted for technical skills, communication abilities, and professional work ethic. We only recommend the best.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-geist text-white mb-2">Rapid Onboarding</h3>
                <p className="text-white/60 font-geist text-sm leading-relaxed">
                  Our developers can start contributing within days, not weeks. They're familiar with modern workflows, tools, and best practices from day one.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                <Code className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-geist text-white mb-2">Diverse Skill Sets</h3>
                <p className="text-white/60 font-geist text-sm leading-relaxed">
                  From frontend specialists to backend architects, DevOps engineers to mobile developers—we have talent across the entire technology stack.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-geist text-white mb-2">Ongoing Support</h3>
                <p className="text-white/60 font-geist text-sm leading-relaxed">
                  We don't just place developers and walk away. We provide ongoing support, performance monitoring, and ensure smooth collaboration throughout the engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <Contact />
      </section>
    </div>
  );
}
