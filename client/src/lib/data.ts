import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Assets
import vrvImage from "@assets/generated_images/vrv_vrf_outdoor_ac_units.png";
import chillerImage from "@assets/generated_images/industrial_chiller_system.png";
import klhkImage1 from "@assets/generated_images/IMG-20250312-WA0003.jpg";
import klhkImage2 from "@assets/generated_images/IMG-20250312-WA0004.jpg";
import klhkImage3 from "@assets/generated_images/IMG-20250312-WA0011.jpg";
import grandInna from "@assets/generated_images/grand inna.jpeg";
import nf1 from "@assets/generated_images/nf 1.jpg";
import nf2 from "@assets/generated_images/nf 2.jpg";
import nf3 from "@assets/generated_images/nf 3.jpg";
import nf4 from "@assets/generated_images/nf 4.jpg";
import nf5 from "@assets/generated_images/nf 5.jpg";
import nf6 from "@assets/generated_images/nf 6.jpg";
import nf7 from "@assets/generated_images/nf 7.jpg";
import nf8 from "@assets/generated_images/nf 8.jpg";
import nf9 from "@assets/generated_images/nf 9.jpg";
import nf10 from "@assets/generated_images/nf 10.jpg";
import nf11 from "@assets/generated_images/nf 11.jpg";
import nf12 from "@assets/generated_images/nf 12.jpg";
import nf13 from "@assets/generated_images/nf 13.jpg";
import nf14 from "@assets/generated_images/nf 14.jpg";
import nf15 from "@assets/generated_images/nf 15.jpg";
import nf16 from "@assets/generated_images/nf 16.jpg";
import nf17 from "@assets/generated_images/nf 17.jpg";
import nf18 from "@assets/generated_images/nf 18.jpg";
import nf19 from "@assets/generated_images/nf 19.jpg";

export const projects = [
  {
    id: 1,
    title: "CHILLER",
    category: "Chiller",
    image: klhkImage1,
    gallery: [klhkImage1, klhkImage2, klhkImage3, grandInna],
    location: "Jakarta",
    year: "2024",
    description:
      "Pemasangan dan pemeliharaan sistem HVAC komprehensif untuk gedung Kementerian Lingkungan Hidup dan Kehutanan.",
  },
  {
    id: 2,
    title: "KLHK - Maintenance",
    category: "Maintenance",
    image: klhkImage3,
    gallery: [klhkImage3, klhkImage1],
    location: "Jakarta",
    year: "2024",
    description:
      "Pemeliharaan rutin dan servis berkala untuk memastikan sistem HVAC KLHK tetap prima.",
  },
  {
    id: 3,
    title: "Luxury Mall VRV System",
    category: "VRV/VRF",
    image: vrvImage,
    gallery: [vrvImage],
    location: "Surabaya",
    year: "2023",
    description:
      "High-efficiency VRV system installation for a premium shopping center.",
  },
  {
    id: 4,
    title: "Data Center Cooling",
    category: "Chiller",
    image: chillerImage,
    gallery: [chillerImage],
    location: "Jakarta",
    year: "2024",
    description:
      "Precision cooling system implementation for a Tier-4 data center.",
  },
  {
    id: 5,
    title: "Hotel Resort HVAC",
    category: "VRV/VRF",
    image: vrvImage,
    gallery: [vrvImage],
    location: "Bali",
    year: "2022",
    description:
      "Integrated climate control system for a luxury beachside resort.",
  },
  {
    id: 6,
    title: "PT NATURINDO FRESH",
    category: "HVAC System",
    image: nf1,
    gallery: [nf1, nf2, nf3, nf4, nf5, nf6, nf7, nf8, nf9, nf10, nf11, nf12, nf13, nf14, nf15, nf16, nf17, nf18, nf19],
    location: "Jakarta",
    year: "2024",
    description:
      "Pemasangan sistem HVAC untuk PT Naturindo Fresh.",
  },
];

export const services = [
  {
    title: "Installation",
    description:
      "Expert installation of Chiller, VRV/VRF, and Split systems for commercial and industrial needs.",
    icon: "Wrench",
  },
  {
    title: "Ducting Works",
    description:
      "Custom fabrication and installation of high-quality ductwork for optimal airflow efficiency.",
    icon: "Wind",
  },
  {
    title: "Maintenance",
    description:
      "Comprehensive maintenance contracts to ensure your systems run at peak efficiency year-round.",
    icon: "ShieldCheck",
  },
  {
    title: "System Design",
    description:
      "Professional HVAC engineering and design services tailored to your building's specifications.",
    icon: "Ruler",
  },
];

export const testimonials = [
  {
    name: "Budi Santoso",
    role: "Facility Manager, Grand Tower",
    content:
      "PT Benua Teknik Solusindo delivered exceptional quality on our chiller upgrade. Professional and on time.",
  },
  {
    name: "Sarah Wijaya",
    role: "Director, Metro Malls",
    content:
      "The VRV system installation was seamless. Their team is highly skilled and responsive.",
  },
];

// Product data with images and marketplace links
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string; // Will be imported from assets
  shopeeLink?: string;
  tokopediaLink?: string;
  lazadaLink?: string;
  price?: string;
}

// INSTRUCTIONS TO ADD PRODUCTS:
// 1. Upload product image to: ptbenuatekniksolusindo/attached_assets/generated_images/
// 2. Import the image at the top of this file: import productImage from "@assets/generated_images/your-image.jpg";
// 3. Add the product below with image, shopeeLink, and tokopediaLink
// 4. Example Shopee link format: "https://shopee.co.id/product-name-i.123456.7890123"
// 5. Example Tokopedia link format: "https://www.tokopedia.com/store/product-name"

// Placeholder for flange image - user needs to upload the actual image
// For now, we'll use a placeholder or you can add the image path here
export const products: Product[] = [
  {
    id: "flange-001",
    name: "Rucika Flange AW 2 Inch",
    category: "Flange",
    description: "Rucika AW 2-inch flanges are suitable for industrial piping systems. Made of high-quality materials that meet international standards.",
    // TODO: Upload flange image to attached_assets/generated_images/ and import it here
    // image: flangeImage, // Uncomment and add import when image is uploaded
    shopeeLink: "", // Add Shopee link here (e.g., "https://shopee.co.id/flange-pvc-dn40-i.123456.7890123")
    tokopediaLink: "", // Add Tokopedia link here (e.g., "https://www.tokopedia.com/store/flange-pvc-dn40")
    lazadaLink: "https://www.lazada.co.id/products/rucika-flange-aw-2-inch-i7263316147.html", // Link Lazada untuk uji coba - updated
    price: "Rp 50.000",
  },
  {
    id: "valve-001",
    name: "Gate Valve",
    category: "Valve",
    description: "Gate valve berkualitas tinggi untuk sistem pipa",
    shopeeLink: "",
    tokopediaLink: "",
    price: "Rp 150.000",
  },
  {
    id: "gasket-001",
    name: "Spiral Wound Gasket",
    category: "Gasket",
    description: "Gasket spiral wound untuk aplikasi tekanan tinggi",
    shopeeLink: "",
    tokopediaLink: "",
    price: "Rp 75.000",
  },
];
