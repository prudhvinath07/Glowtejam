import { NavBarDemo } from "@/components/NavBarDemo"
import { DemoOne } from "@/components/DemoOne"
import { BentoGridGalleryDemo } from "@/components/BentoGridGalleryDemo"
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo"
import { TestimonialsColumns } from "@/components/TestimonialsColumns"
import { Gallery4 } from "@/components/Gallery4"
import { Logo } from "@/components/Logo"
import { HeroSection } from "@/components/HeroSection"
import { FooterSection } from "@/components/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Logo */}
      <Logo />

      {/* Navigation */}
      <NavBarDemo />

      {/* Hero Section */}
      <HeroSection
        title="Welcome to GLOWTEJAM"
        subtitle="Experience the future of web development with our innovative solutions!"
      />

      {/* Case Studies Gallery Section */}
      <Gallery4 />

      {/* Bento Gallery Section */}
      <BentoGridGalleryDemo />

      {/* Testimonials Section */}
      <AnimatedTestimonialsDemo />

      {/* Testimonials Columns Section */}
      <TestimonialsColumns />

      {/* Interactive Selector Section */}
      <DemoOne />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default Index;
