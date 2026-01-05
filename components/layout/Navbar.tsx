'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layers, Menu, X } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const scrollContainer = document.querySelector('.overflow-y-auto');
      if (scrollContainer) {
        // Show background immediately when scrolling starts (threshold: 0px)
        setIsScrolled(scrollContainer.scrollTop > 0);
      }
    };

    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      // Check initial scroll position
      handleScroll();
      
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const scrollContainer = document.querySelector('.overflow-y-auto');
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, 100);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Navbar Container */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(99, 102, 241, 0.1)' : 'none',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              onClick={handleLinkClick}
              className="flex items-center gap-2 cursor-pointer group shrink-0"
            >
              <div 
                className="flex items-center justify-center rounded-lg"
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'rgb(99, 102, 241)',
                }}
              >
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold tracking-tight font-geist text-white text-lg">
                Softloftix
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link 
                href="/" 
                onClick={handleLinkClick}
                className={`text-sm font-semibold font-geist transition-colors cursor-pointer ${
                  isActive('/') && pathname === '/'
                    ? 'text-indigo-400' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Home
              </Link>
              
              <Link 
                href="/about-us" 
                onClick={handleLinkClick}
                className={`text-sm font-semibold font-geist transition-colors cursor-pointer ${
                  isActive('/about-us')
                    ? 'text-indigo-400' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                About Us
              </Link>

              <Link 
                href="/services" 
                onClick={handleLinkClick}
                className={`text-sm font-semibold font-geist transition-colors cursor-pointer ${
                  isActive('/services')
                    ? 'text-indigo-400' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Services
              </Link>

              <Link 
                href="/technologies" 
                onClick={handleLinkClick}
                className={`text-sm font-semibold font-geist transition-colors cursor-pointer ${
                  isActive('/technologies')
                    ? 'text-indigo-400' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Technologies
              </Link>

              <Link 
                href="/portfolio" 
                onClick={handleLinkClick}
                className={`text-sm font-semibold font-geist transition-colors cursor-pointer ${
                  isActive('/portfolio')
                    ? 'text-indigo-400' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Portfolio
              </Link>

              <Link 
                href="/hire-a-talent" 
                onClick={handleLinkClick}
                className={`text-sm font-semibold font-geist transition-colors cursor-pointer ${
                  isActive('/hire-a-talent')
                    ? 'text-indigo-400' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Hire a Talent
              </Link>

              <Link 
                href="/career" 
                onClick={handleLinkClick}
                className={`text-sm font-semibold font-geist transition-colors cursor-pointer ${
                  isActive('/career')
                    ? 'text-indigo-400' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Career
              </Link>
      </div>

            {/* CTA Button */}
            <Link 
              href="/contact" 
              onClick={handleLinkClick}
              className="hidden lg:flex items-center justify-center px-6 py-2.5 text-sm font-semibold font-geist rounded-lg cursor-pointer shrink-0 hover:scale-[1.02] active:scale-[0.98] transition-all"
              style={{
                backgroundColor: 'rgb(99, 102, 241)',
                color: 'white',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
              }}
            >
              Book a Call
            </Link>

            {/* Mobile Menu Button */}
      <button 
              className="lg:hidden inline-flex items-center justify-center rounded-lg text-white transition-all p-2"
              style={{
                backgroundColor: isMobileMenuOpen ? 'rgba(99, 102, 241, 0.3)' : 'rgba(255, 255, 255, 0.1)',
              }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
          </div>
        </div>

      {/* Mobile Menu Dropdown */}
        <div 
          className={`
            lg:hidden
            bg-black/95 backdrop-blur-2xl
            border-t border-indigo-500/20
            overflow-hidden
            ${isMobileMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0'
            }
          `}
          style={{
            transition: 'max-height 0.3s ease, opacity 0.3s ease',
          }}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            <Link 
              href="/" 
              onClick={handleLinkClick}
              className={`px-4 py-3 text-[15px] font-semibold font-geist rounded-lg transition-colors cursor-pointer ${
                isActive('/') && pathname === '/'
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-white/80 hover:text-white hover:bg-indigo-500/10'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about-us" 
              onClick={handleLinkClick}
              className={`px-4 py-3 text-[15px] font-semibold font-geist rounded-lg transition-colors cursor-pointer ${
                isActive('/about-us')
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-white/80 hover:text-white hover:bg-indigo-500/10'
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              onClick={handleLinkClick}
              className={`px-4 py-3 text-[15px] font-semibold font-geist rounded-lg transition-colors cursor-pointer ${
                isActive('/services')
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-white/80 hover:text-white hover:bg-indigo-500/10'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/technologies" 
              onClick={handleLinkClick}
              className={`px-4 py-3 text-[15px] font-semibold font-geist rounded-lg transition-colors cursor-pointer ${
                isActive('/technologies')
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-white/80 hover:text-white hover:bg-indigo-500/10'
              }`}
            >
              Technologies
            </Link>
            <Link 
              href="/portfolio" 
              onClick={handleLinkClick}
              className={`px-4 py-3 text-[15px] font-semibold font-geist rounded-lg transition-colors cursor-pointer ${
                isActive('/portfolio')
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-white/80 hover:text-white hover:bg-indigo-500/10'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              href="/hire-a-talent" 
              onClick={handleLinkClick}
              className={`px-4 py-3 text-[15px] font-semibold font-geist rounded-lg transition-colors cursor-pointer ${
                isActive('/hire-a-talent')
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-white/80 hover:text-white hover:bg-indigo-500/10'
              }`}
            >
              Hire a Talent
            </Link>
            <Link 
              href="/career" 
              onClick={handleLinkClick}
              className={`px-4 py-3 text-[15px] font-semibold font-geist rounded-lg transition-colors cursor-pointer ${
                isActive('/career')
                  ? 'text-indigo-400 bg-indigo-500/10' 
                  : 'text-white/80 hover:text-white hover:bg-indigo-500/10'
              }`}
            >
              Career
            </Link>
            <div className="pt-2 mt-2 border-t border-indigo-500/20">
              <Link 
                href="/contact" 
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 px-4 py-3.5 bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white text-[15px] font-semibold font-geist rounded-lg transition-all cursor-pointer shadow-[0_4px_12px_rgba(99,102,241,0.3)]"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
    </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
