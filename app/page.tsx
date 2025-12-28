import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import InteractiveDemoSection from '@/components/sections/InteractiveDemoSection';
import TechStackSection from '@/components/sections/TechStackSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <InteractiveDemoSection />
      <TechStackSection />
      <CTASection />
      <Footer />
    </main>
  );
}
