'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';

const trustBadges = [
  {
    label: 'Licensed & Insured',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'Free Estimates',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
  {
    label: 'Phoenix Metro',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden mt-[70px]"
      aria-label="AZ Concrete King hero"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(14,47,68,0.85)] z-[1]" />

      {/* Water mist */}
      <div
        className="absolute inset-0 z-[2] animate-mist-drift pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, transparent 0%, rgba(52,152,219,0.08) 25%, transparent 50%, rgba(52,152,219,0.05) 75%, transparent 100%)',
          backgroundSize: '200% 200%',
        }}
        aria-hidden="true"
      />

      {/* Water droplets */}
      <div className="absolute inset-0 z-[2] pointer-events-none" aria-hidden="true">
        {[10, 25, 40, 55, 70, 85, 15, 60].map((left, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-accent/60 rounded-full"
            style={{
              left: `${left}%`,
              animation: prefersReducedMotion
                ? 'none'
                : `spray 2s ${i * 0.3}s infinite`,
            }}
          />
        ))}
        <style>{`
          @keyframes spray {
            0% { transform: translateY(0) scale(0); opacity: 0; }
            10% { opacity: 0.8; transform: translateY(-20px) scale(1); }
            100% { transform: translateY(100vh) scale(0.5); opacity: 0; }
          }
        `}</style>
      </div>

      {/* Content */}
      <div className="relative z-[4] max-w-[750px] px-4">
        {/* Floating logo */}
        <motion.div
          className={prefersReducedMotion ? '' : 'animate-crown-float'}
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={400}
            height={200}
            className="h-[140px] md:h-[180px] lg:h-[200px] w-auto mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
            priority
            aria-hidden="true"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-white text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-6 mb-4"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Arizona&rsquo;s{' '}
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            Concrete King
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Professional power washing that transforms driveways, patios, and pool
          decks. Restore your curb appeal — see the difference pressure makes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button href="#contact" variant="cta" size="large">
            Get a Free Quote
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Button>
          <Button href="#pricing" variant="outline" size="large">
            View Pricing
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-white/85 text-sm font-heading font-semibold"
            >
              <span className="text-gold">{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Diagonal bottom edge */}
      <div
        className="absolute bottom-[-1px] left-0 right-0 h-[80px] md:h-[100px] lg:h-[120px] bg-surface z-[3]"
        style={{ clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)' }}
        aria-hidden="true"
      />
    </section>
  );
}
