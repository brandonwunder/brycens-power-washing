import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center mt-[70px] px-4">
      <div className="text-center">
        <h1 className="font-heading font-bold text-6xl text-primary mb-4">404</h1>
        <p className="text-text-light text-lg mb-8">
          Page not found. Let&rsquo;s get you back on track.
        </p>
        <Button href="/" variant="primary" size="large">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
