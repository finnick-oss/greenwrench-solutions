// ============================================================
// SITE CONFIGURATION — Edit here to update everywhere
// ============================================================

const PHONE = "0000000000";

export const SITE = {
  name: "Bhakti Auto Scrap Traders",
  tagline: "Eco-Friendly Car Recycling",
  description:
    "Delhi's most trusted car recycling & scrapping service. We give your old vehicle a second life — responsibly.",
  phone: PHONE,
  phoneDisplay: "+91 00000 00000",
  email: "test@greenwrenchsolutions.in",
  website: "www.greenwrenchsolutions.in",
  address: {
    line1: "Test Location, Block A",
    line2: "Test City – 000000",
    city: "Test City",
    full: "Test Location, Block A, Test City, 000000",
  },
  mapUrl:
    "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggCECMYJzIGCAAQRRg8MgYIARBFGDkyBggCECMYJzIGCAMQRRg8MgYIBBBFGEEyBggFEEUYQTIGCAYQRRhBMgYIBxBFGDzSAQg2OTI4ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KRH0dYtEAQ05MRueIj3s_yvL&daddr=F+-+25/117,+Pocket+25,+Sector+7,+Rohini,+Delhi,+110085",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.123!2d77.1234!3d28.7234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcbaf2fecec7d9b1b!2sF-25%2F117%2C+Pocket+25%2C+Sector+7%2C+Rohini%2C+Delhi%2C+110085!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
  socialLinks: {
    whatsapp: `https://wa.me/91${PHONE}`,
    facebook: "#",
    instagram: "#",
  },
  establishedYear: 2021,
  stats: {
    carsRecycled: "15,000+",
    happyCustomers: "12,000+",
    yearsExperience: "5+",
    citiesServed: "5+",
  },
};

export const PHONE_HREF = `tel:${SITE.phone}`;
export const WHATSAPP_HREF = `https://wa.me/91${SITE.phone}`;

/** WhatsApp link that opens a chat with a pre-filled message */
export const getWhatsAppHref = (message: string) =>
  `${WHATSAPP_HREF}?text=${encodeURIComponent(message)}`;
