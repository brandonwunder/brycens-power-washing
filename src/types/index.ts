export interface PricingTier {
  name: string;
  description: string;
  sqft_range: string;
  price_range: string;
  features: string[];
}

export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  iconId: string;
}
