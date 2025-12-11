import { services } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Wind, ShieldCheck, Ruler } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  Wrench: Wrench,
  Wind: Wind,
  ShieldCheck: ShieldCheck,
  Ruler: Ruler,
};

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Comprehensive HVAC Solutions</h2>
          <p className="text-gray-600 leading-relaxed">
            We provide end-to-end services from initial design to installation and long-term maintenance, ensuring your facility operates at peak performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  );
}
