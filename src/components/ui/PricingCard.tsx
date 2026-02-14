import { PricingTier } from '@/types';
import Button from './Button';

interface PricingCardProps {
  tier: PricingTier;
  featured?: boolean;
}

export default function PricingCard({ tier, featured = false }: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-lg p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        featured
          ? 'border-2 border-gold border-t-4 shadow-gold'
          : 'border border-border/50 shadow-sm'
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary font-heading font-bold text-xs px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="font-heading font-bold text-xl text-primary mb-2">
        {tier.name}
      </h3>
      <p className="text-text-light text-sm mb-4">{tier.description}</p>
      <p className="font-heading font-bold text-2xl text-secondary mb-1">
        {tier.price_range}
      </p>
      <p className="text-text-light text-xs mb-6">{tier.sqft_range}</p>
      <ul className="text-left mb-8 space-y-3">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-text border-b border-surface-alt pb-3 last:border-0"
          >
            <svg
              className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button href="#contact" variant={featured ? 'cta' : 'primary'}>
        Get a Quote
      </Button>
    </div>
  );
}
