import { ReactNode } from 'react';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  alt?: boolean;
  className?: string;
  narrow?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  alt = false,
  className = '',
  narrow = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${alt ? 'bg-surface-alt' : 'bg-surface'} ${className}`}
    >
      <div className={`max-w-site mx-auto px-4 md:px-8 ${narrow ? 'max-w-4xl' : ''}`}>
        {children}
      </div>
    </section>
  );
}
