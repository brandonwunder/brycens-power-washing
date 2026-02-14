'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NAV_ITEMS, COMPANY } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[70px] z-50 transition-shadow duration-300 bg-primary ${
        hasScrolled ? 'shadow-lg' : ''
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-site mx-auto px-4 md:px-8 flex items-center justify-between h-full">
        <a href="#" className="flex items-center" aria-label={COMPANY.name}>
          <Image
            src="/images/logo.png"
            alt={COMPANY.name}
            width={180}
            height={45}
            className="h-[45px] w-auto"
            priority
          />
        </a>

        <button
          className="flex flex-col gap-[5px] p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block w-[25px] h-[3px] bg-white rounded-sm transition-transform duration-300 ${
              isOpen ? 'translate-y-[8px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-[25px] h-[3px] bg-white rounded-sm transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-[25px] h-[3px] bg-white rounded-sm transition-transform duration-300 ${
              isOpen ? '-translate-y-[8px] -rotate-45' : ''
            }`}
          />
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-4 py-2 text-white font-heading font-semibold text-sm rounded-[8px] hover:bg-white/10 transition-colors duration-150"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-primary shadow-lg md:hidden">
            <ul className="py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 text-white font-heading font-semibold hover:bg-primary-dark transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
