import { Review } from '@/types';
import StarRating from './StarRating';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const dateFormatted = new Date(review.date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="relative bg-white border border-border/50 border-l-4 border-l-secondary rounded-lg p-6 pt-8 shadow-sm">
      <span
        className="absolute top-2 left-4 text-4xl font-serif text-secondary/30 leading-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <StarRating rating={review.rating} />
      <p className="italic text-text mt-4 mb-4 leading-relaxed">
        {review.text}
      </p>
      <p className="font-heading font-semibold text-primary">{review.name}</p>
      <p className="text-text-light text-sm">
        {review.location} &middot; {dateFormatted}
      </p>
    </div>
  );
}
