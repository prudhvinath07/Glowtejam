import { NavBarDemo } from "@/components/NavBarDemo"
import { DemoOne } from "@/components/DemoOne"
import { BentoGridGalleryDemo } from "@/components/BentoGridGalleryDemo"
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo"
import { TestimonialsColumns } from "@/components/TestimonialsColumns"
import { Gallery4 } from "@/components/Gallery4"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Logo */}
      <div className="fixed top-6 left-8 z-50">
        <div className="text-2xl font-bold text-primary bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border shadow-lg">
          GLOWTEJAM
        </div>
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
      
      {/* Testimonials Columns Section */}
      <TestimonialsColumns />
      
      {/* Case Studies Gallery Section */}
      <Gallery4 />
      
      {/* Footer Section */}
      <Footer
        companyName="Your Amazing Company"
        companyDescription="Stay connected with us for the latest updates, exclusive offers, and innovative solutions."
        contactInfo={{
          address: "123 Innovation Street, Suite 100",
          city: "Tech City, TC 12345",
          phone: "(555) 123-4567",
          email: "hello@yourcompany.com"
        }}
        socialLinks={{
          facebook: "https://facebook.com/yourcompany",
          twitter: "https://twitter.com/yourcompany",
          instagram: "https://instagram.com/yourcompany",
          linkedin: "https://linkedin.com/company/yourcompany"
        }}
        quickLinks={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/contact" }
        ]}
        onNewsletterSubmit={async (email: string) => {
          // Replace with your newsletter API
          console.log('Newsletter subscription:', email);
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
        }}
      />
    </div>
  );
};

export default Index;
