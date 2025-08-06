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
      companyDescription="Exquisite jewelry for every occasion. Handcrafted with passion, designed for eternity."
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
        { label: "Collections", href: "#collections" },
        { label: "About Us", href: "#about" },
        { label: "Contact", href: "#contact" },
        { label: "Blog", href: "/blog" },
      ]}
      onNewsletterSubmit={handleNewsletterSubmit}
    />
  );
};

export { FooterSection };
