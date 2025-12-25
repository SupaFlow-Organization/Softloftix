import React from 'react';
import { X, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="xl:mt-0 border-t relative border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tighter font-geist text-white">Softloftix</span>
            </Link>
            <p className="mt-4 text-sm max-w-md font-geist text-white/60">Enterprise-grade software development for forward-thinking companies. Quality code, scalable architecture, and reliable delivery.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-tight font-geist text-white">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><Link href="/services" className="font-geist transition hover:text-white">Web Development</Link></li>
              <li><Link href="/services" className="font-geist transition hover:text-white">Mobile Apps</Link></li>
              <li><Link href="/services" className="font-geist transition hover:text-white">Cloud Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-tight font-geist text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><Link href="/" className="font-geist transition hover:text-white">About Us</Link></li>
              <li><Link href="/" className="font-geist transition hover:text-white">Careers</Link></li>
              <li><Link href="/" className="font-geist transition hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6 border-white/10">
          <p className="text-xs font-geist text-white/40">© <span className="font-geist">{new Date().getFullYear()}</span> Softloftix Inc. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition text-white/40 hover:text-white"><X className="w-4 h-4" /></Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition text-white/40 hover:text-white"><Linkedin className="w-4 h-4" /></Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition text-white/40 hover:text-white"><Github className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;