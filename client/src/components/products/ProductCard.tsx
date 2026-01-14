import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-none bg-white group overflow-hidden">
        {/* Product Image */}
        <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
              <ShoppingCart className="w-16 h-16 text-gray-400" />
            </div>
          )}
          {product.price && (
            <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-sm text-sm font-semibold">
              {product.price}
            </div>
          )}
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                {product.category}
              </span>
              <h3 className="text-xl font-heading font-semibold text-primary mt-1 group-hover:text-accent transition-colors">
                {product.name}
              </h3>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 flex flex-col h-full">
          <div className="flex-1">
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Order Buttons */}
          <div className="flex flex-col gap-2 mt-4">
            {product.lazadaLink && (
              <a
                href={product.lazadaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  className="w-full bg-[#0F146C] hover:bg-[#0a0f52] text-white rounded-none font-medium"
                  size="sm"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Beli di Lazada
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </a>
            )}
            {product.shopeeLink && (
              <a
                href={product.shopeeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-none font-medium"
                  size="sm"
                  variant={product.lazadaLink ? "outline" : "default"}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Beli di Shopee
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </a>
            )}
            {product.tokopediaLink && (
              <a
                href={product.tokopediaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white rounded-none font-medium"
                  size="sm"
                  variant={(product.lazadaLink || product.shopeeLink) ? "outline" : "default"}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Beli di Tokopedia
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </a>
            )}
            {!product.lazadaLink && !product.shopeeLink && !product.tokopediaLink && (
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-none font-medium"
                size="sm"
                disabled
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Hubungi untuk Order
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
