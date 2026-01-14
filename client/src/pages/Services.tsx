import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import {
  Wrench,
  Wind,
  ShieldCheck,
  Ruler,
  ShoppingCart,
  Cog,
  CheckCircle2,
  Phone,
} from "lucide-react";

const iconMap = {
  Wrench: Wrench,
  Wind: Wind,
  ShieldCheck: ShieldCheck,
  Ruler: Ruler,
  ShoppingCart: ShoppingCart,
  Cog: Cog,
  CheckCircle2: CheckCircle2,
};

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.items.installation.title"),
      description: t("services.items.installation.desc"),
      icon: "Wrench"
    },
    {
      title: t("services.items.ducting.title"),
      description: t("services.items.ducting.desc"),
      icon: "Wind"
    },
    {
      title: t("services.items.maintenance.title"),
      description: t("services.items.maintenance.desc"),
      icon: "ShieldCheck"
    },
    {
      title: t("services.items.design.title"),
      description: t("services.items.design.desc"),
      icon: "Ruler"
    },
    {
      title: t("services.items.procurement.title"),
      description: t("services.items.procurement.desc"),
      icon: "ShoppingCart"
    },
    {
      title: t("services.items.fabrication.title"),
      description: t("services.items.fabrication.desc"),
      icon: "Cog"
    },
    {
      title: t("services.items.quality.title"),
      description: t("services.items.quality.desc"),
      icon: "CheckCircle2"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-6">
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">
            {t("services.badge")}
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            {t("services.pageTitle")}
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">
            {t("services.pageSubtitle")}
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              {t("services.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("services.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group rounded-none bg-gray-50/50">
                    <CardHeader className="pt-8 pb-4">
                      <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl font-heading font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            {t("services.cta.title")}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            {t("services.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-none h-14 px-8 font-medium">
                {t("services.cta.button")}
              </Button>
            </Link>
            <a
              href="https://wa.me/6282130820228"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-none h-14 px-8 font-medium bg-transparent">
                <Phone className="w-4 h-4 mr-2" />
                {t("nav.whatsapp")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
