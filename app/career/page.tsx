import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Users, Code, Zap, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Career — Softloftix',
  description: 'Join the Softloftix team and build amazing products together.',
};

export default function CareerPage() {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'We\'re looking for an experienced full-stack developer to join our team and work on cutting-edge projects.',
    },
    {
      id: 2,
      title: 'React Native Mobile Developer',
      department: 'Mobile',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our mobile team and help build cross-platform applications that millions of users rely on.',
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Help us scale our infrastructure and ensure seamless deployments across all our projects.',
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create beautiful, intuitive interfaces that users love. Work closely with developers to bring designs to life.',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Competitive Salary',
      description: 'We offer competitive compensation packages that reflect your skills and experience.',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work when you\'re most productive. We trust you to manage your time effectively.',
    },
    {
      icon: MapPin,
      title: 'Remote First',
      description: 'Work from anywhere. We\'re a distributed team that values results over location.',
    },
    {
      icon: Code,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, books, and certifications to keep your skills sharp.',
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with talented, supportive colleagues who are passionate about what they do.',
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Comprehensive health insurance and wellness programs to keep you healthy and happy.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-geist font-semibold tracking-tight text-white mb-6">
            Build Your Career with Us
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-geist max-w-3xl mx-auto leading-relaxed">
            Join a team of passionate engineers, designers, and innovators who are shaping the future of digital products. At Softloftix, you'll work on challenging projects, learn from the best, and grow your career.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold font-geist text-white mb-12 text-center">Why Join Softloftix?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold font-geist text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/60 font-geist text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold font-geist text-white mb-12 text-center">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((position) => (
              <div 
                key={position.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold font-geist text-white mb-2">
                      {position.title}
                    </h3>
                    <p className="text-white/60 font-geist text-sm mb-3">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 font-geist">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{position.type}</span>
                      </div>
                      <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded">
                        {position.department}
                      </span>
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold font-geist rounded-lg transition-all shrink-0 text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-500/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold font-geist text-white mb-8 text-center">Our Culture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold font-geist text-white mb-4">What We Value</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
                  <p className="text-white/70 font-geist text-sm leading-relaxed">
                    <strong className="text-white">Excellence:</strong> We strive for perfection in everything we do, from code quality to client communication.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
                  <p className="text-white/70 font-geist text-sm leading-relaxed">
                    <strong className="text-white">Collaboration:</strong> We believe the best solutions come from diverse perspectives working together.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
                  <p className="text-white/70 font-geist text-sm leading-relaxed">
                    <strong className="text-white">Growth:</strong> We invest in our team's professional development and encourage continuous learning.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold font-geist text-white mb-4">What You'll Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
                  <p className="text-white/70 font-geist text-sm leading-relaxed">
                    Work on challenging projects that push the boundaries of what's possible.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
                  <p className="text-white/70 font-geist text-sm leading-relaxed">
                    Collaborate with talented colleagues and learn from industry experts.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
                  <p className="text-white/70 font-geist text-sm leading-relaxed">
                    Contribute to open-source projects and share your knowledge with the community.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold font-geist text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-white/70 font-geist mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's start a conversation.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold font-geist rounded-lg transition-all shadow-[0_4px_12px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_16px_rgba(99,102,241,0.4)]"
          >
            Send Us Your Resume
          </Link>
        </div>
      </section>
    </div>
  );
}
