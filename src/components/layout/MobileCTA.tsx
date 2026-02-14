'use client';

import { useState, useEffect } from 'react';

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-primary/95 backdrop-blur-sm border-t border-white/10 p-3">
      <a
        href="#contact"
        className="block w-full text-center bg-gradient-cta text-white font-heading font-bold py-3 rounded-[8px] shadow-cta"
      >
        Get a Free Quote
      </a>
    </div>
  );
}
