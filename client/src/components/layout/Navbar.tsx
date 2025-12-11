import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/generated_images/logo_for_pt_benua_teknik_solusindo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logoImage} alt="Benua Teknik" className="h-10 w-10 object-contain" />
            <div className={`flex flex-col ${scrolled ? "text-primary" : "text-white"}`}>
              <span className="font-heading font-bold text-lg leading-tight tracking-wide">BENUA TEKNIK</span>
              <span className="text-[10px] tracking-widest uppercase opacity-80">Solusindo</span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location === link.href
                    ? "text-accent"
                    : scrolled
                    ? "text-foreground"
                    : "text-white/90"
                }`}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button
            size="sm"
            className="bg-accent hover:bg-accent/90 text-white border-none font-medium"
          >
            <Phone className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={`text-base font-medium py-2 border-b border-gray-100 ${
                  location === link.href ? "text-primary" : "text-gray-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button className="w-full bg-primary text-white mt-2">Contact Us</Button>
        </div>
      )}
    </nav>
  );
}
