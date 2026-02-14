'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    []
  );

  const handleMouseDown = useCallback(() => setIsDragging(true), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) updatePosition(e.clientX);
    };
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        updatePosition(e.touches[0].clientX);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 2));
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 2));
  };

  return (
    <SectionWrapper id="before-after" alt>
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
            See the Transformation
          </h2>
          <p className="text-text-light text-lg mt-3 max-w-2xl mx-auto">
            Drag the slider to reveal the power of professional concrete
            cleaning.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <div
          ref={containerRef}
          className="relative max-w-[800px] mx-auto rounded-lg overflow-hidden shadow-lg cursor-col-resize select-none"
          role="img"
          aria-label="Before and after comparison of concrete power washing"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After image (full background) */}
          <div className="relative w-full aspect-[800/500] bg-[#D5D8DC]">
            <div className="absolute inset-0 flex items-center justify-center text-[#333] font-heading font-bold text-xl">
              After &mdash; Clean Concrete
            </div>
            <span className="absolute bottom-4 right-4 px-3 py-1 bg-secondary text-white font-heading font-bold text-xs uppercase rounded-[8px] pointer-events-none z-[5]">
              After
            </span>
          </div>

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 z-[2] overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div className="w-full h-full bg-[#8B7355] flex items-center justify-center text-white font-heading font-bold text-xl">
              Before &mdash; Dirty Concrete
            </div>
            <span className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 text-white font-heading font-bold text-xs uppercase rounded-[8px] pointer-events-none z-[5]">
              Before
            </span>
          </div>

          {/* Handle */}
          <div
            className="absolute top-0 bottom-0 z-10 flex items-center justify-center -translate-x-1/2"
            style={{ left: `${position}%` }}
            role="slider"
            aria-label="Comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            <div className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
            <div className="relative z-[11] w-12 h-12 bg-white border-[3px] border-secondary rounded-full flex items-center justify-center text-secondary shadow-md hover:scale-110 transition-transform duration-150">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="-ml-3">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
