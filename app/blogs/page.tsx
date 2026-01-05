import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blogs — Softloftix',
  description: 'Latest articles, insights, and updates from Softloftix.',
};

export default function BlogsPage() {
  // Placeholder blog posts - in a real app, these would come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications: Best Practices and Patterns',
      excerpt: 'Learn how to architect React applications that can handle millions of users while maintaining code quality and developer productivity.',
      category: 'Frontend Development',
      date: 'March 15, 2024',
      readTime: '8 min read',
      featured: true,
    },
    {
      id: 2,
      title: 'The Future of Serverless Architecture: A Comprehensive Guide',
      excerpt: 'Explore how serverless computing is transforming backend development and what it means for your next project.',
      category: 'Backend Development',
      date: 'March 10, 2024',
      readTime: '12 min read',
      featured: false,
    },
    {
      id: 3,
      title: 'Mobile-First Design: Creating Exceptional User Experiences',
      excerpt: 'Discover the principles and techniques behind creating mobile applications that users love and businesses trust.',
      category: 'Mobile Development',
      date: 'March 5, 2024',
      readTime: '6 min read',
      featured: false,
    },
    {
      id: 4,
      title: 'AI Integration in Modern Web Applications: A Practical Approach',
      excerpt: 'Learn how to seamlessly integrate AI capabilities into your web applications to enhance functionality and user experience.',
      category: 'AI & Automation',
      date: 'February 28, 2024',
      readTime: '10 min read',
      featured: false,
    },
  ];

  return (
    <div className="pt-20">
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-geist font-semibold tracking-tight text-white mb-6 animate-on-scroll">
            Insights & Updates
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-geist max-w-3xl mx-auto leading-relaxed animate-on-scroll">
            Stay ahead of the curve with our latest articles on software development, technology trends, best practices, and industry insights. Written by our team of experts.
          </p>
        </div>

        {/* Featured Blog Post */}
        {blogPosts.find(post => post.featured) && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-500/20 rounded-2xl p-8 md:p-12 hover:border-indigo-500/40 transition-colors animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold font-geist uppercase tracking-wider bg-indigo-500/20 text-indigo-300 rounded-full">
                  Featured
                </span>
                <span className="text-sm text-white/60 font-geist">
                  {blogPosts.find(post => post.featured)?.category}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold font-geist text-white mb-4">
                {blogPosts.find(post => post.featured)?.title}
              </h2>
              <p className="text-lg text-white/70 font-geist mb-6 leading-relaxed">
                {blogPosts.find(post => post.featured)?.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-white/60 font-geist mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts.find(post => post.featured)?.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPosts.find(post => post.featured)?.readTime}</span>
                </div>
              </div>
              <Link 
                href="#"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold font-geist transition-colors"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold font-geist text-white mb-8 animate-on-scroll">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article 
                key={post.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/30 transition-colors animate-on-scroll"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold font-geist uppercase tracking-wider text-indigo-400">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold font-geist text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-white/60 font-geist text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-white/50 font-geist">
                  <div className="flex items-center gap-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link 
                    href="#"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-500/20 rounded-2xl p-8 md:p-12 text-center animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-semibold font-geist text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white/70 font-geist mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, tutorials, and industry insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 font-geist focus:outline-none focus:border-indigo-500/50"
            />
            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold font-geist rounded-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
