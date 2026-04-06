import DistractionSection from "@/components/modules/DistractionSection";
import IntroducingSection from "@/components/modules/IntroducingSection";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <DistractionSection />
      <IntroducingSection />
    </main>
  );
}
