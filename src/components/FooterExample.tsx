import { Footer } from "@/components/Footer";

// Example usage of the Footer component with your website's information
function FooterExample() {
  const handleNewsletterSubmit = async (email: string) => {
    // Replace this with your actual newsletter subscription logic
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        throw new Error('Subscription failed');
      }
      
      // Show success message
      console.log('Successfully subscribed:', email);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      throw error; // Re-throw to handle in the component
    }
  };

  return (
    <Footer
      companyName="TechFlow Solutions"
      companyDescription="Stay updated with our latest innovations and exclusive offers. Join thousands of satisfied customers."
      contactInfo={{
        address: "456 Innovation Drive, Suite 200",
        city: "San Francisco, CA 94105",
        phone: "(555) 123-4567",
        email: "contact@techflow.com"
      }}
      socialLinks={{
        facebook: "https://facebook.com/techflow",
        twitter: "https://twitter.com/techflow",
        instagram: "https://instagram.com/techflow",
        linkedin: "https://linkedin.com/company/techflow"
      }}
      quickLinks={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "/careers" }
      ]}
      onNewsletterSubmit={handleNewsletterSubmit}
    />
  );
}

export { FooterExample };