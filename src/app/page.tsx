import { HeroSection } from "@/components/sections/hero";
import { GallerySection } from "@/components/sections/gallery";
import { SpecialtiesSection } from "@/components/sections/specialties";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GallerySection />
      <SpecialtiesSection />
    </main>
  );
}
