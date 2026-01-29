import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-primary text-white py-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+62 21-1234-5678</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>info@benuatekniksolusindo.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Jakarta, Indonesia</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon-Fri: 8AM-5PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
