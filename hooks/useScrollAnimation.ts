'use client';

import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });

    const observeElements = () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        // Check if element is already in viewport
        const rect = el.getBoundingClientRect();
        const scrollContainer = document.querySelector('.overflow-y-auto') || window;
        const containerHeight = scrollContainer === window ? window.innerHeight : (scrollContainer as HTMLElement).clientHeight;
        
        // If element is already visible, animate it immediately
        if (rect.top < containerHeight && rect.bottom > 0 && !el.classList.contains('animate')) {
          el.classList.add("animate");
        } else if (!el.classList.contains('animate')) {
          observer.observe(el);
        }
      });
    };

    // Initial observation with a small delay to ensure DOM is ready
    setTimeout(() => {
      observeElements();
    }, 50);

    // Re-observe on route changes (using MutationObserver to watch for DOM changes)
    const mutationObserver = new MutationObserver(() => {
      setTimeout(() => {
        observeElements();
      }, 50);
    });

    const scrollContainer = document.querySelector('.overflow-y-auto') || document.body;
    mutationObserver.observe(scrollContainer, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};