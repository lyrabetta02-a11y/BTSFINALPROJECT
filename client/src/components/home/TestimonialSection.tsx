import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Facility Manager, Grand Tower Jakarta",
      content: "PT Benua Teknik Solusindo delivered exceptional quality on our chiller upgrade. Professional, on-time, and within budget. Highly recommended!",
      rating: 5,
      project: "Chiller Installation - 500 Ton"
    },
    {
      name: "Sarah Wijaya", 
      role: "Director, Metro Malls Group",
      content: "The VRV system installation was seamless. Their team is highly skilled and responsive. Our energy costs dropped 30% after the upgrade.",
      rating: 5,
      project: "VRV System - 3 Malls"
    },
    {
      name: "Ahmad Rahman",
      role: "Operations Manager, IndoTech Factory",
      content: "Reliable HVAC maintenance service. They keep our production running smoothly with minimal downtime. Excellent technical support.",
      rating: 5,
      project: "HVAC Maintenance - 5 Years Contract"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies in Jakarta for HVAC solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-accent/20 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic relative z-10">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Project Info */}
              <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {testimonial.project}
              </div>

              {/* Author */}
              <div>
                <div className="font-semibold text-primary">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>50+ 5-Star Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>95% Repeat Business</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
