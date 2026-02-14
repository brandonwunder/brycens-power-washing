import SectionWrapper from '@/components/ui/SectionWrapper';
import ServiceCard from '@/components/ui/ServiceCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  return (
    <SectionWrapper id="services">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
            Our Services
          </h2>
          <p className="text-text-light text-lg mt-3 max-w-2xl mx-auto">
            From driveways to full-property cleanings, we handle every concrete
            surface with care and precision.
          </p>
        </div>
      </AnimateOnScroll>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
