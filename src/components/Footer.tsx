import { Footerdemo } from "@/components/ui/footer-section";

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  contactInfo?: {
    address: string;
    city: string;
    phone: string;
    email: string;
  };
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  quickLinks?: Array<{
    label: string;
    href: string;
  }>;
  onNewsletterSubmit?: (email: string) => Promise<void>;
}

function Footer(props: FooterProps) {
  return (
    <div className="w-full">
      <Footerdemo {...props} />
    </div>
  );
}

export { Footer };