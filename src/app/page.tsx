import DistractionSection from "@/components/modules/DistractionSection";
import HeroSection from "@/components/modules/HeroSection";
import IntroducingSection from "@/components/modules/IntroducingSection";
import Testimonials from "@/components/modules/Testimonials";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <DistractionSection />
      <Testimonials />
      <IntroducingSection />
    </main>
  );
}
