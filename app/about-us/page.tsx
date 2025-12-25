import React from 'react';
import type { Metadata } from 'next';
import { Code, Users, Target, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Softloftix',
  description: 'Learn about Softloftix and our mission to build exceptional digital products.',
};

export default function AboutUsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-geist font-semibold tracking-tight text-white mb-6">
            Engineering Excellence,<br />One Line of Code at a Time
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-geist max-w-3xl mx-auto leading-relaxed">
            At Softloftix, we don't just write code—we architect digital solutions that drive business growth, enhance user experiences, and stand the test of time.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-semibold font-geist text-white mb-4">Our Mission</h2>
            <p className="text-white/70 font-geist leading-relaxed">
              To empower businesses with world-class software solutions that are scalable, secure, and maintainable. We believe that exceptional code is the foundation of successful digital products, and we're committed to delivering nothing less than excellence.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-semibold font-geist text-white mb-4">Our Vision</h2>
            <p className="text-white/70 font-geist leading-relaxed">
              To become the most trusted software development partner for forward-thinking companies worldwide. We envision a future where every business has access to enterprise-grade technology that accelerates innovation and drives sustainable growth.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold font-geist text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold font-geist text-white mb-3">Code Quality</h3>
              <p className="text-white/60 font-geist text-sm leading-relaxed">
                We write clean, maintainable code that follows industry best practices. Every function is tested, every component is documented, and every commit is reviewed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold font-geist text-white mb-3">Client Success</h3>
              <p className="text-white/60 font-geist text-sm leading-relaxed">
                Your success is our success. We work as an extension of your team, understanding your business goals and delivering solutions that drive measurable results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold font-geist text-white mb-3">Innovation</h3>
              <p className="text-white/60 font-geist text-sm leading-relaxed">
                We stay ahead of the curve by continuously learning and adopting cutting-edge technologies. Innovation isn't optional—it's embedded in everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-500/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold font-geist text-white mb-8 text-center">Why Choose Softloftix?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold font-geist text-white mb-2">50+ Successful Projects</h3>
                <p className="text-white/60 font-geist text-sm leading-relaxed">
                  We've delivered enterprise-grade solutions across fintech, healthcare, e-commerce, and SaaS industries, each one built to scale and perform.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold font-geist text-white mb-2">98% Client Retention</h3>
                <p className="text-white/60 font-geist text-sm leading-relaxed">
                  Our commitment to quality and ongoing support has earned us long-term partnerships with clients who trust us with their most critical projects.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold font-geist text-white mb-2">Full-Stack Expertise</h3>
                <p className="text-white/60 font-geist text-sm leading-relaxed">
                  From frontend interfaces to backend infrastructure, we handle every layer of your application with equal expertise and attention to detail.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold font-geist text-white mb-2">Agile Methodology</h3>
                <p className="text-white/60 font-geist text-sm leading-relaxed">
                  We work in two-week sprints, delivering testable builds regularly. You're always in the loop, and you always know what's happening next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
