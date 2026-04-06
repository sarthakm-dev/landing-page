import { ContactSection } from "@/app/components/landing/ContactSection";
import { FeaturesSection } from "@/app/components/landing/FeaturesSection";
import { HeroSection } from "./components/landing/HeroSection";
import BusinessSection from "./components/landing/BusinessSection";

export default function Home() {
  return (
    <main className=" bg-(--color-background) text-white">
      <div className="mx-auto flex w-full max-w-295 flex-col px-4 py-4 sm:px-6 lg:px-8">
        <HeroSection />
        <FeaturesSection />
        <BusinessSection/>
        <ContactSection />
      </div>
    </main>
  );
}
