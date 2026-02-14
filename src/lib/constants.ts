import { NavItem, ServiceCategory } from '@/types';

export const COMPANY = {
  name: 'AZ Concrete King',
  phone: '(555) 123-4567',
  email: 'info@azconcreteking.com',
  tagline: 'Professional Concrete Power Washing',
  location: 'Phoenix Metro Area, Arizona',
} as const;

export const SERVICE_AREAS = [
  'Phoenix',
  'Scottsdale',
  'Mesa',
  'Tempe',
  'Chandler',
  'Gilbert',
] as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#before-after' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceCategory[] = [
  {
    title: 'Driveways',
    description: 'Remove oil stains, tire marks, and years of buildup. Restore your driveway to like-new condition.',
    iconId: 'driveway',
  },
  {
    title: 'Patios',
    description: 'Bring back the beauty of your outdoor living space. Safe on pavers, stamped concrete, and slabs.',
    iconId: 'patio',
  },
  {
    title: 'Pool Decks',
    description: 'Clean and brighten pool surrounds without harsh chemicals. Safe for all pool deck surfaces.',
    iconId: 'pool',
  },
  {
    title: 'Walkways',
    description: 'Eliminate dirt, mold, and discoloration from paths and entryways. Improve curb appeal instantly.',
    iconId: 'walkway',
  },
  {
    title: 'Full Property',
    description: 'Complete concrete refresh for your entire property. Our most comprehensive package for total transformation.',
    iconId: 'property',
  },
];

export const BUSINESS_HOURS = {
  weekday: 'Monday - Friday: 7:00 AM - 6:00 PM',
  saturday: 'Saturday: 8:00 AM - 4:00 PM',
  sunday: 'Sunday: Closed',
} as const;
