import { Footer } from "@/components/Footer";

const FooterSection = () => {
  const handleNewsletterSubmit = async (email: string) => {
    // Replace with your newsletter API
    console.log('Newsletter subscription:', email);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <Footer
      companyName="GLOWTEJAM"
      companyDescription="Stay connected with us for the latest updates, exclusive offers, and innovative solutions."
      contactInfo={{
        address: "123 Innovation Street, Suite 100",
        city: "Tech City, TC 12345",
        phone: "(555) 123-4567",
        email: "hello@glowtejam.com"
      }}
      socialLinks={{
        facebook: "https://facebook.com/glowtejam",
        twitter: "https://twitter.com/glowtejam",
        instagram: "https://instagram.com/glowtejam",
        linkedin: "https://linkedin.com/company/glowtejam"
      }}
      quickLinks={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" }
      ]}
      onNewsletterSubmit={handleNewsletterSubmit}
    />
  );
};

export { FooterSection };