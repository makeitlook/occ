import AboutPreview from "@/components/AboutPreview/AboutPreview";
import GalleryPreview from "@/components/GalleryPreview/GalleryPreview";
import HeroCarousel from "@/components/HeroSection/HeroSection";
import ServicesOverview from "@/components/ServicesOverview/ServicesOverview";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <AboutPreview />
      <ServicesOverview />
      <GalleryPreview />
      <TestimonialsSection />
    </div>
  );
}
