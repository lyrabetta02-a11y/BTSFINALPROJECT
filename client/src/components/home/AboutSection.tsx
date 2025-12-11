import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ductingImage from "@assets/generated_images/industrial_hvac_ducting_installation.png";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "Certified HVAC Engineers",
    "ISO 9001 Compliant Processes",
    "10+ Years of Experience",
    "24/7 Emergency Support"
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src={ductingImage} 
                alt="HVAC Technician" 
                className="w-full shadow-2xl rounded-sm"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-4 border-accent z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 z-0 rounded-full blur-3xl" />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">About Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Leading the Way in Climate Control Engineering
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At PT Benua Teknik Solusindo, we combine technical expertise with a commitment to quality. Our mission is to provide energy-efficient and reliable HVAC solutions that create comfortable and productive environments for our clients.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From skyscrapers to industrial plants, our team brings precision engineering and luxury service standards to every project we undertake.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-8">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
