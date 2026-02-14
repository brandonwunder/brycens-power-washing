import { ServiceCategory } from '@/types';
import AnimateOnScroll from './AnimateOnScroll';

const icons: Record<string, React.ReactNode> = {
  driveway: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
    </svg>
  ),
  patio: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 20h16M4 20V10m16 10V10M4 10l8-6 8 6M8 14h.01M12 14h.01M16 14h.01" />
    </svg>
  ),
  pool: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M2 18c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1M2 22c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1M6 12V4m12 8V4" />
    </svg>
  ),
  walkway: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0H3m10 0l4 4m-4-4l4-4M3 16l-2 4m2-4l-2-4" />
    </svg>
  ),
  property: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
};

interface ServiceCardProps {
  service: ServiceCategory;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <AnimateOnScroll delay={index * 0.1}>
      <div className="group bg-white rounded-lg p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-lg hover:border-l-4 hover:border-l-secondary transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="w-12 h-12 flex items-center justify-center text-secondary mb-4">
          {icons[service.iconId]}
        </div>
        <h3 className="font-heading font-bold text-lg text-primary mb-2">
          {service.title}
        </h3>
        <p className="text-text-light text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </AnimateOnScroll>
  );
}
