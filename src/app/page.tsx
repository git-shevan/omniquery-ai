import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import NewWorldSection from '@/components/NewWorldSection';
import AccessSection from '@/components/AccessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CapabilitiesSection />
      <NewWorldSection />
      <AccessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}