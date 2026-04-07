import { ContactSection } from "@/app/components/landing/ContactSection";
import { FeaturesSection } from "@/app/components/landing/FeaturesSection";
import { HeroSection } from "./components/landing/HeroSection";
import BusinessSection from "./components/landing/BusinessSection";

export default function Home() {
  return (
    <main className=" bg-(--color-background) text-white overflow-hidden">
      <div className="mx-auto flex min-w-full  flex-col">
        <HeroSection />
        <FeaturesSection />
        <BusinessSection/>
        <ContactSection />
      </div>
    </main>
  );
}
