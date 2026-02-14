import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const pillars = [
  {
    title: 'Premium Equipment',
    description:
      'We use commercial-grade, surface-calibrated pressure washers that deliver consistent results consumer machines cannot match.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2C12 2 8 6 8 10a4 4 0 008 0c0-4-4-8-4-8z" />
        <path d="M12 14v4m-2 2h4" />
      </svg>
    ),
  },
  {
    title: 'Surface-Safe Technique',
    description:
      'Every surface gets the right PSI and nozzle angle. We protect your concrete from etching, pitting, and damage.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Clear Pricing',
    description:
      'No surprises, no hidden fees. You get an honest quote before we start, and that is the price you pay.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Reliable Scheduling',
    description:
      'We show up on time and finish on schedule. Your property, your timeline, no excuses.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <SectionWrapper>
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
            Why Arizona Homeowners Choose Us
          </h2>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
        {pillars.map((pillar, i) => (
          <AnimateOnScroll key={pillar.title} delay={i * 0.1}>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center">
                {pillar.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-primary mb-1">
                  {pillar.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
