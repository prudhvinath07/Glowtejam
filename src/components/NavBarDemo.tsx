import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Chains", url: "#about", icon: User },
    { name: "Rings", url: "#projects", icon: Briefcase },
    { name: "Diamonds", url: "#resume", icon: FileText },
  ];

  return <NavBar items={navItems} />;
}
