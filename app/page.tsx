import { ContactSection } from "@/app/components/landing/contact-section";
import { FeaturesSection } from "@/app/components/landing/features-section";
import { HeroSection } from "@/app/components/landing/hero-section";


export default function Home() {
  return (
    <main className=" bg-[#121212] text-white">
      <div className="mx-auto flex w-full max-w-295 flex-col gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <HeroSection />
        <FeaturesSection />
        <ContactSection />
      </div>
    </main>
  );
}
