import CTASection from '@/components/cta-section';
import FAQ from '@/components/faq';
import Features from '@/components/features';
import Hero from '@/components/hero';
import Pricing from '@/components/pricing';
import Steps from '@/components/steps';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Steps />
      <Pricing />
      <CTASection />
      <FAQ />
    </main>
  );
}
