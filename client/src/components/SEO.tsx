import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/lib/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({ 
  title = "PT Benua Teknik Solusindo - HVAC Contractor Jakarta | Chiller, VRV, Ducting Installation",
  description = "Professional HVAC contractor in Jakarta, Indonesia. Specializing in chiller installation, VRV/VRF systems, ducting works, and maintenance for commercial & industrial projects.",
  keywords = "HVAC contractor Jakarta, chiller installation, VRV system, ducting works, HVAC maintenance, commercial HVAC, industrial HVAC, PT Benua Teknik Solusindo, Jakarta HVAC",
  image = "/attached_assets/logo-placeholder.png",
  url = "https://btsfinalproject.vercel.app",
  type = "website"
}: SEOProps) {
  const { language } = useLanguage();
  
  const siteTitle = language === "id" 
    ? "PT Benua Teknik Solusindo - Kontraktor HVAC Jakarta | Chiller, VRV, Ducting"
    : title;
    
  const siteDescription = language === "id"
    ? "Kontraktor HVAC profesional di Jakarta, Indonesia. Spesialisasi instalasi chiller, sistem VRV/VRF, pekerjaan ducting, dan maintenance untuk proyek komersial & industri."
    : description;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="PT Benua Teknik Solusindo" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language === "id" ? "Indonesian" : "English"} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="PT Benua Teknik Solusindo" />
      <meta property="og:locale" content={language === "id" ? "id_ID" : "en_US"} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@benuateknik" />
      <meta name="twitter:creator" content="@benuateknik" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0F146C" />
      <meta name="msapplication-TileColor" content="#0F146C" />
    </Helmet>
  );
}
