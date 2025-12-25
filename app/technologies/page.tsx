import React from 'react';
import TechStack from '@/components/sections/TechStack';
import type { Metadata } from 'next';
import { Globe, Smartphone, Server, Database, Cloud, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technologies — Softloftix',
  description: 'Modern technologies and frameworks we use to build exceptional software.',
};

export default function TechnologiesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-geist font-semibold tracking-tight text-white mb-6">
            Built with Modern Technology
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-geist max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge frameworks, languages, and tools to build applications that are fast, scalable, and maintainable. Our tech stack evolves with industry standards, ensuring your software stays ahead of the curve.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold font-geist text-white mb-4">Frontend Technologies</h2>
            <p className="text-white/60 font-geist text-sm leading-relaxed mb-4">
              We build responsive, performant user interfaces using modern frameworks and libraries.
            </p>
            <ul className="space-y-2">
              <li className="text-white/70 font-geist text-sm">• React & Next.js</li>
              <li className="text-white/70 font-geist text-sm">• TypeScript</li>
              <li className="text-white/70 font-geist text-sm">• Tailwind CSS</li>
              <li className="text-white/70 font-geist text-sm">• Vue.js & Nuxt</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-xl font-semibold font-geist text-white mb-4">Mobile Development</h2>
            <p className="text-white/60 font-geist text-sm leading-relaxed mb-4">
              Native and cross-platform mobile applications that deliver exceptional user experiences.
            </p>
            <ul className="space-y-2">
              <li className="text-white/70 font-geist text-sm">• Flutter</li>
              <li className="text-white/70 font-geist text-sm">• React Native</li>
              <li className="text-white/70 font-geist text-sm">• Swift & Kotlin</li>
              <li className="text-white/70 font-geist text-sm">• Progressive Web Apps</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-xl font-semibold font-geist text-white mb-4">Backend & APIs</h2>
            <p className="text-white/60 font-geist text-sm leading-relaxed mb-4">
              Robust server-side architecture and RESTful APIs built for performance and scalability.
            </p>
            <ul className="space-y-2">
              <li className="text-white/70 font-geist text-sm">• Node.js & Express</li>
              <li className="text-white/70 font-geist text-sm">• Python & Django</li>
              <li className="text-white/70 font-geist text-sm">• GraphQL</li>
              <li className="text-white/70 font-geist text-sm">• Microservices Architecture</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-xl font-semibold font-geist text-white mb-4">Databases</h2>
            <p className="text-white/60 font-geist text-sm leading-relaxed mb-4">
              We choose the right database for your use case, from SQL to NoSQL solutions.
            </p>
            <ul className="space-y-2">
              <li className="text-white/70 font-geist text-sm">• PostgreSQL & MySQL</li>
              <li className="text-white/70 font-geist text-sm">• MongoDB</li>
              <li className="text-white/70 font-geist text-sm">• Redis</li>
              <li className="text-white/70 font-geist text-sm">• Supabase & Firebase</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-6">
              <Cloud className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-xl font-semibold font-geist text-white mb-4">Cloud & DevOps</h2>
            <p className="text-white/60 font-geist text-sm leading-relaxed mb-4">
              Scalable cloud infrastructure and automated deployment pipelines for seamless operations.
            </p>
            <ul className="space-y-2">
              <li className="text-white/70 font-geist text-sm">• AWS & Azure</li>
              <li className="text-white/70 font-geist text-sm">• Docker & Kubernetes</li>
              <li className="text-white/70 font-geist text-sm">• CI/CD Pipelines</li>
              <li className="text-white/70 font-geist text-sm">• Serverless Architecture</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-pink-400" />
            </div>
            <h2 className="text-xl font-semibold font-geist text-white mb-4">AI & Automation</h2>
            <p className="text-white/60 font-geist text-sm leading-relaxed mb-4">
              Integrating AI capabilities and automation to enhance functionality and reduce operational costs.
            </p>
            <ul className="space-y-2">
              <li className="text-white/70 font-geist text-sm">• OpenAI & LLM Integration</li>
              <li className="text-white/70 font-geist text-sm">• Custom AI Solutions</li>
              <li className="text-white/70 font-geist text-sm">• Workflow Automation</li>
              <li className="text-white/70 font-geist text-sm">• Machine Learning Models</li>
            </ul>
          </div>
        </div>

        {/* Tech Stack Component */}
        <TechStack />
      </section>
    </div>
  );
}
