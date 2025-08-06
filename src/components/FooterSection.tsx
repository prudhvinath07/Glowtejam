import { Footer } from "@/components/Footer";

const FooterSection = () => {
  const handleNewsletterSubmit = async (email: string) => {
    // Replace with your newsletter API
    console.log("Newsletter subscription:", email);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <Footer
      companyName="GLOWTEJAM"
      companyDescription="Stay connected with us for the latest updates, exclusive offers, and innovative solutions."
      contactInfo={{
        address: "Hyderabad",
        city: "",
        phone: "( +91 ) 630-993 5016",
        email: "glowtejam@gmail.com",
      }}
      socialLinks={{
        facebook: "https://facebook.com/glowtejam",
        twitter: "https://twitter.com/glowtejam",
        instagram: "https://instagram.com/glowtejam",
        linkedin: "https://linkedin.com/company/glowtejam",
      }}
      quickLinks={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ]}
      onNewsletterSubmit={handleNewsletterSubmit}
    />
  );
};

export { FooterSection };
