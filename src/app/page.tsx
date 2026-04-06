import Curriculum from "@/components/modules/Curriculum";
import DistractionSection from "@/components/modules/DistractionSection";
import HeroSection from "@/components/modules/HeroSection";
import IntroducingSection from "@/components/modules/IntroducingSection";
import Testimonials from "@/components/modules/Testimonials";
import Work from "@/components/modules/Work";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <DistractionSection />
      <Work />
      <Curriculum />
      <Testimonials />
      <IntroducingSection />
    </main>
  );
}
