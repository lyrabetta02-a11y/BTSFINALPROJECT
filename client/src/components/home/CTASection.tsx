import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your HVAC Project?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Get a free consultation and quote within 24 hours. Limited slots available this month!
          </p>
          
          {/* Urgency Indicator */}
          <div className="bg-yellow-400 text-primary px-4 py-2 rounded-full inline-block mb-8 font-semibold">
            ⚠️ Only 3 Free Consultation Slots Left This Month!
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none rounded-none px-8 h-14 text-base font-medium">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none px-8 h-14 text-base font-medium bg-transparent">
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Response Time: &lt;2 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Free Site Survey</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Best Price Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
