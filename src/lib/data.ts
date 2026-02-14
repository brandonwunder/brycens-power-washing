import fs from 'fs';
import path from 'path';
import { PricingTier, Review } from '@/types';

export function getPricingTiers(): PricingTier[] {
  const filePath = path.join(process.cwd(), 'data', 'pricing.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw);
  return data.tiers;
}

export function getReviews(): Review[] {
  const filePath = path.join(process.cwd(), 'data', 'reviews.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw);
  return data.reviews;
}
