import SectionWrapper from '@/components/ui/SectionWrapper';
import ReviewCard from '@/components/ui/ReviewCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { getReviews } from '@/lib/data';

export default function Reviews() {
  const reviews = getReviews().slice(0, 3);

  return (
    <SectionWrapper id="reviews" alt>
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
            What Our Customers Say
          </h2>
          <p className="text-text-light text-lg mt-3 max-w-2xl mx-auto">
            Real feedback from Arizona homeowners we have served.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {reviews.map((review, i) => (
          <AnimateOnScroll key={review.name} delay={i * 0.1}>
            <ReviewCard review={review} />
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll>
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="text-secondary font-heading font-semibold hover:text-secondary-dark transition-colors duration-150"
          >
            Ready to join them? Get your free quote &rarr;
          </a>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
