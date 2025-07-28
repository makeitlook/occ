import AboutPreview from "@/components/AboutPreview/AboutPreview";
import AnimatedDiv from "@/components/AnimatedDiv/AnimatedDiv";
import GalleryPreview from "@/components/GalleryPreview/GalleryPreview";
import HeroCarousel from "@/components/HeroSection/HeroSection";
import PageLayout from "@/components/Layouts/PageLayout";
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
