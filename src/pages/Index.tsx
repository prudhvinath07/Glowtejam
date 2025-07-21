import { NavBarDemo } from "@/components/NavBarDemo"
import { DemoOne } from "@/components/DemoOne"
import { BentoGridGalleryDemo } from "@/components/BentoGridGalleryDemo"
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo"
import logo from "@/assets/logo.png"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Logo */}
      <div className="fixed top-4 left-4 z-50">
        <img src={logo} alt="Logo" className="w-12 h-12" />
      </div>
      
      {/* Navigation */}
      <NavBarDemo />
      
      {/* Hero Section with Background */}
      <div 
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your App</h1>
          <p className="text-xl md:text-2xl text-white/90">Beautiful tubelight navbar above!</p>
        </div>
      </div>
      
      {/* Interactive Selector Section */}
      <DemoOne />
      
      {/* Bento Gallery Section */}
      <BentoGridGalleryDemo />
      
      {/* Testimonials Section */}
      <AnimatedTestimonialsDemo />
    </div>
  );
};

export default Index;
