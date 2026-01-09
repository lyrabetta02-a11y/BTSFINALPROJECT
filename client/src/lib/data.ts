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

export const projects = [
  {
    id: 1,
    title: "CHILLER",
    category: "HVAC System",
    image: klhkImage1,
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
    location: "Bali",
    year: "2022",
    description:
      "Integrated climate control system for a luxury beachside resort.",
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
