import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Services from '@/components/sections/Services';
import BeforeAfter from '@/components/sections/BeforeAfter';
import WhyUs from '@/components/sections/WhyUs';
import Process from '@/components/sections/Process';
import Pricing from '@/components/sections/Pricing';
import Reviews from '@/components/sections/Reviews';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <WhyUs />
      <Process />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
}
