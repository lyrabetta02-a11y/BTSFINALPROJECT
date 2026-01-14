import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/lib/LanguageContext";
import { products } from "@/lib/data";

export default function Products() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-6">
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">
            {t("productsPage.badge")}
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            {t("productsPage.title")}
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">
            {t("productsPage.subtitle")}
          </p>
        </div>
      </div>

      {/* Products */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-heading font-bold">
            {t("services.cta.title")}
          </h2>
          <p className="text-white/80 max-w-2xl">
            {t("services.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 rounded-none px-6">
                {t("productsPage.ctaLabel")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
