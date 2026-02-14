import SectionWrapper from '@/components/ui/SectionWrapper';
import PricingCard from '@/components/ui/PricingCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { getPricingTiers } from '@/lib/data';

export default function Pricing() {
  const tiers = getPricingTiers();

  return (
    <SectionWrapper id="pricing">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
            Transparent Pricing
          </h2>
          <p className="text-text-light text-lg mt-3 max-w-2xl mx-auto">
            Honest pricing for every job size. No hidden fees, no surprises.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
        {tiers.map((tier, i) => (
          <AnimateOnScroll key={tier.name} delay={i * 0.1}>
            <PricingCard tier={tier} featured={i === 1} />
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
