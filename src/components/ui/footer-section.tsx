import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter, Mail, Phone, MapPin } from "lucide-react"

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
  onNewsletterSubmit?: (email: string) => void;
}

function Footerdemo({
  companyName = "Your Company",
  companyDescription = "Join our newsletter for the latest updates and exclusive offers.",
  contactInfo = {
    address: "123 Innovation Street",
    city: "Tech City, TC 12345",
    phone: "(123) 456-7890",
    email: "hello@example.com"
  },
  socialLinks = {},
  quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" }
  ],
  onNewsletterSubmit
}: FooterProps) {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  React.useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)
  }, [])

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    try {
      if (onNewsletterSubmit) {
        await onNewsletterSubmit(email)
      } else {
        // Default behavior - you can replace with your API call
        console.log('Newsletter subscription:', email)
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      }
      setEmail("")
      // You could show a success message here
    } catch (error) {
      console.error('Newsletter subscription failed:', error)
      // You could show an error message here
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-muted-foreground">
              {companyDescription}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pr-12 backdrop-blur-sm"
                required
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isSubmitting || !email.trim()}
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe to newsletter</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block transition-colors hover:text-primary focus:text-primary focus:outline-none"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-3 text-sm not-italic">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <div>
                  <p>{contactInfo.address}</p>
                  <p>{contactInfo.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex flex-wrap gap-3">
              <TooltipProvider>
                {socialLinks.facebook && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-950"
                        asChild
                      >
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                          <Facebook className="h-4 w-4" />
                          <span className="sr-only">Follow us on Facebook</span>
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {socialLinks.twitter && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-sky-50 hover:border-sky-200 dark:hover:bg-sky-950"
                        asChild
                      >
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Follow us on Twitter</span>
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {socialLinks.instagram && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-pink-50 hover:border-pink-200 dark:hover:bg-pink-950"
                        asChild
                      >
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-4 w-4" />
                          <span className="sr-only">Follow us on Instagram</span>
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {socialLinks.linkedin && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-950"
                        asChild
                      >
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">Connect with us on LinkedIn</span>
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect with us on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-4 text-sm">
            <a
              href="/privacy"
              className="transition-colors hover:text-primary focus:text-primary focus:outline-none"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="transition-colors hover:text-primary focus:text-primary focus:outline-none"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="transition-colors hover:text-primary focus:text-primary focus:outline-none"
            >
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }