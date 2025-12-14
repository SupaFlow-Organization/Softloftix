'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Layers, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const scrollContainer = document.querySelector('.overflow-y-auto');
      if (scrollContainer) {
        setIsScrolled(scrollContainer.scrollTop > 50);
      }
    };

    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', checkMobile);
      };
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavClick = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);
    const scrollContainer = document.querySelector('.overflow-y-auto');
    
    if (targetElement && scrollContainer) {
      const navbarHeight = 100;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      scrollContainer.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  }, []);

  const scrollToTop = useCallback(() => {
    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, []);

  // Calculate responsive widths
  const getNavWidth = () => {
    if (isMobile) {
      return isScrolled ? 'calc(100% - 24px)' : 'calc(100% - 32px)';
    }
    return isScrolled ? '95%' : '800px';
  };

  const getMaxWidth = () => {
    if (isMobile) {
      return '100%';
    }
    return isScrolled ? '1152px' : '800px';
  };

  return (
    <>
      {/* Floating Navbar Container */}
      <nav 
        className="fixed left-1/2 z-50"
        style={{
          transform: 'translateX(-50%)',
          top: isScrolled ? '8px' : (isMobile ? '12px' : '24px'),
          width: getNavWidth(),
          maxWidth: getMaxWidth(),
          transition: 'top 0.6s cubic-bezier(0.22, 1, 0.36, 1), width 0.6s cubic-bezier(0.22, 1, 0.36, 1), max-width 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Main Pill Container */}
        <div 
          className="flex items-center justify-between border rounded-full backdrop-blur-2xl"
          style={{
            padding: isMobile 
              ? (isScrolled ? '10px 16px' : '10px 14px')
              : (isScrolled ? '14px 32px' : '12px 24px'),
            gap: isMobile ? '12px' : (isScrolled ? '32px' : '24px'),
            backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.85)' : 'rgba(30, 27, 75, 0.6)',
            borderColor: isScrolled ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.1)',
            boxShadow: isScrolled 
              ? '0 8px 40px rgba(99, 102, 241, 0.15), 0 0 0 1px rgba(99, 102, 241, 0.1)' 
              : '0 8px 32px rgba(0, 0, 0, 0.3)',
            transition: 'padding 0.6s cubic-bezier(0.22, 1, 0.36, 1), gap 0.6s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Logo */}
          <Link 
            href="/" 
            onClick={scrollToTop} 
            scroll={false}
            className="flex items-center gap-2 cursor-pointer group shrink-0"
          >
            <div 
              className="flex items-center justify-center rounded-lg"
              style={{
                width: isMobile ? '28px' : (isScrolled ? '36px' : '32px'),
                height: isMobile ? '28px' : (isScrolled ? '36px' : '32px'),
                backgroundColor: isScrolled ? 'rgb(99, 102, 241)' : 'rgba(99, 102, 241, 0.2)',
                border: isScrolled ? 'none' : '1px solid rgba(99, 102, 241, 0.3)',
                transition: 'width 0.6s cubic-bezier(0.22, 1, 0.36, 1), height 0.6s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1), border 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              <Layers 
                className={isMobile ? "w-4 h-4" : "w-5 h-5"}
                style={{
                  color: isScrolled ? 'white' : 'rgb(129, 140, 248)',
                  transition: 'color 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />
            </div>
            <span 
              className="font-semibold tracking-tight font-geist text-white"
              style={{
                fontSize: isMobile ? '14px' : '18px',
              }}
            >
              Softloftix
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link 
              href="#solutions" 
              onClick={() => handleNavClick('solutions')}
              scroll={false}
              className="px-4 py-2 text-sm font-medium font-geist text-white/70 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5"
            >
              Services
            </Link>
            <Link 
              href="#pricing" 
              onClick={() => handleNavClick('pricing')}
              scroll={false}
              className="px-4 py-2 text-sm font-medium font-geist text-white/70 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5"
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
              onClick={() => handleNavClick('faq')}
              scroll={false}
              className="px-4 py-2 text-sm font-medium font-geist text-white/70 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5"
            >
              FAQs
            </Link>
            <Link 
              href="#work" 
              onClick={() => handleNavClick('work')}
              scroll={false}
              className="px-4 py-2 text-sm font-medium font-geist text-white/70 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5"
            >
              Case Studies
            </Link>
          </div>

          {/* CTA Button */}
          <Link 
            href="#contact" 
            onClick={() => handleNavClick('contact')}
            scroll={false}
            className="hidden sm:flex items-center gap-2 text-sm font-semibold font-geist rounded-full cursor-pointer shrink-0 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              padding: isScrolled ? '10px 24px' : '10px 20px',
              backgroundColor: isScrolled ? 'rgb(99, 102, 241)' : 'white',
              color: isScrolled ? 'white' : 'black',
              boxShadow: isScrolled 
                ? '0 0 20px rgba(99, 102, 241, 0.4)' 
                : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              transition: 'padding 0.6s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1), color 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.15s ease',
            }}
          >
            Book a Call
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden inline-flex items-center justify-center rounded-full text-white transition-all"
            style={{
              width: isMobile ? '36px' : '40px',
              height: isMobile ? '36px' : '40px',
              backgroundColor: isMobileMenuOpen ? 'rgba(99, 102, 241, 0.3)' : 'rgba(255, 255, 255, 0.1)',
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`
            md:hidden absolute top-full left-0 right-0 mt-3
            bg-black/95 backdrop-blur-2xl
            border border-indigo-500/20
            rounded-2xl
            shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(99,102,241,0.1)]
            overflow-hidden
            ${isMobileMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-3 pointer-events-none'
            }
          `}
          style={{
            transition: 'opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <div className="p-3 flex flex-col gap-0.5">
            <Link 
              href="#solutions" 
              onClick={() => handleNavClick('solutions')}
              scroll={false}
              className="px-4 py-3 text-[15px] font-medium font-geist text-white/80 hover:text-white hover:bg-indigo-500/15 rounded-xl transition-colors cursor-pointer active:bg-indigo-500/20"
            >
              Services
            </Link>
            <Link 
              href="#pricing" 
              onClick={() => handleNavClick('pricing')}
              scroll={false}
              className="px-4 py-3 text-[15px] font-medium font-geist text-white/80 hover:text-white hover:bg-indigo-500/15 rounded-xl transition-colors cursor-pointer active:bg-indigo-500/20"
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
              onClick={() => handleNavClick('faq')}
              scroll={false}
              className="px-4 py-3 text-[15px] font-medium font-geist text-white/80 hover:text-white hover:bg-indigo-500/15 rounded-xl transition-colors cursor-pointer active:bg-indigo-500/20"
            >
              FAQs
            </Link>
            <Link 
              href="#work" 
              onClick={() => handleNavClick('work')}
              scroll={false}
              className="px-4 py-3 text-[15px] font-medium font-geist text-white/80 hover:text-white hover:bg-indigo-500/15 rounded-xl transition-colors cursor-pointer active:bg-indigo-500/20"
            >
              Case Studies
            </Link>
            <div className="pt-2 mt-2 border-t border-indigo-500/20">
              <Link 
                href="#contact" 
                onClick={() => handleNavClick('contact')}
                scroll={false}
                className="flex items-center justify-center gap-2 px-4 py-3.5 bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white text-[15px] font-semibold font-geist rounded-xl transition-all cursor-pointer shadow-[0_4px_12px_rgba(99,102,241,0.3)]"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
