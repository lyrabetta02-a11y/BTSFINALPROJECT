import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactInfo from "@/components/layout/ContactInfo";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import Services from "@/components/home/Services";
import ProjectGallery from "@/components/projects/ProjectGallery";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background">
        <ContactInfo />
        <Navbar />
        
        <Hero />
        
        <AboutSection />
        
        <Services />

      {/* Recent Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">{t("projects.badge")}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{t("projects.title")}</h2>
            </div>
            <Link href="/projects">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none rounded-none h-14 px-8 font-medium">
                {t("projects.viewAll")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          <ProjectGallery />
        </div>
      </section>

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* CTA Section */}
        <CTASection />

      <Footer />
      </div>
    </>
  );
}
