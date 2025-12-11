import { Link } from "wouter";
import logoImage from "@assets/generated_images/logo_for_pt_benua_teknik_solusindo.png";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImage} alt="Benua Teknik" className="h-12 w-12 object-contain brightness-0 invert" />
              <div className="flex flex-col text-white">
                <span className="font-heading font-bold text-xl leading-tight">BENUA TEKNIK</span>
                <span className="text-xs tracking-widest uppercase opacity-70">Solusindo</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Professional HVAC contractor providing world-class installation, maintenance, and design solutions for commercial and industrial clients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/"><a className="text-white/70 hover:text-accent transition-colors text-sm">Home</a></Link></li>
              <li><Link href="/about"><a className="text-white/70 hover:text-accent transition-colors text-sm">About Us</a></Link></li>
              <li><Link href="/services"><a className="text-white/70 hover:text-accent transition-colors text-sm">Services</a></Link></li>
              <li><Link href="/projects"><a className="text-white/70 hover:text-accent transition-colors text-sm">Projects</a></Link></li>
              <li><Link href="/contact"><a className="text-white/70 hover:text-accent transition-colors text-sm">Contact</a></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-white/70 text-sm">HVAC Installation</li>
              <li className="text-white/70 text-sm">Chiller Systems</li>
              <li className="text-white/70 text-sm">VRV / VRF Systems</li>
              <li className="text-white/70 text-sm">Ducting Fabrication</li>
              <li className="text-white/70 text-sm">Preventive Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Jl. HVAC Professional No. 88, Jakarta Selatan, Indonesia 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-white/70 text-sm">+62 21 555 0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-white/70 text-sm">info@benuateknik.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">© 2025 PT Benua Teknik Solusindo. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-white/50 text-xs cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="text-white/50 text-xs cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
