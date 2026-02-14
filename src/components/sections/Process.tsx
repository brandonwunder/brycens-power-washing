import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Button from '@/components/ui/Button';

const steps = [
  {
    number: '1',
    title: 'Request a Quote',
    description:
      'Tell us about your project using the form below or give us a call. We respond within 24 hours.',
  },
  {
    number: '2',
    title: 'We Confirm Details',
    description:
      'We review your project scope, confirm pricing, and schedule a time that works for you.',
  },
  {
    number: '3',
    title: 'Concrete Restored',
    description:
      'We show up on time, transform your surfaces, and leave your property looking like new.',
  },
];

export default function Process() {
  return (
    <SectionWrapper alt>
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
            How It Works
          </h2>
          <p className="text-text-light text-lg mt-3 max-w-2xl mx-auto">
            Three simple steps to spotless concrete.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto mb-12">
        {steps.map((step, i) => (
          <AnimateOnScroll key={step.number} delay={i * 0.15}>
            <div className="text-center relative">
              {/* Connector line (desktop only, not on last item) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-[2px] bg-border" />
              )}
              <div className="relative z-10 w-12 h-12 mx-auto mb-4 bg-secondary text-white rounded-full flex items-center justify-center font-heading font-bold text-lg">
                {step.number}
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll>
        <div className="text-center">
          <Button href="#contact" variant="cta" size="large">
            Start Your Free Quote
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Button>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
