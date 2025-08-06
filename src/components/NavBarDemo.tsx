import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Chains", url: "#chains", icon: User },
    { name: "Rings", url: "#rings", icon: Briefcase },
    { name: "Diamonds", url: "#diamonds", icon: FileText },
  ];

  return <NavBar items={navItems} />;
}
