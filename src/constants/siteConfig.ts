// ============================================================
// SITE CONFIGURATION — Edit here to update everywhere
// ============================================================

const PHONE = "7982462752";

export const SITE = {
  name: "Bhakti Auto Scrap Traders",
  tagline: "Eco-Friendly Car Recycling",
  description:
    "Delhi's most trusted car recycling & scrapping service. We give your old vehicle a second life — responsibly.",
  phone: PHONE,
  phoneDisplay: "+91 79824 62752",
  email: "bhaktitraders6@gmail.com",
  website: "www.greenwrenchsolutions.in",
  address: {
    line1: "1/138 Dakshinpuri",
    line2: "Dr Ambedkar Nagar",
    city: "New Delhi",
    full: "1/138 Dakshinpuri, Dr Ambedkar Nagar, New Delhi-110062",
  },
  mapUrl:
    "https://www.google.com/maps/place/28%C2%B031'22.3%22N+77%C2%B014'24.5%22E/@28.5228546,77.2375492,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.5228546!4d77.2401241?hl=en&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.5609444666766!2d77.23754917549678!3d28.52285457572479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMxJzIyLjMiTiA3N8KwMTQnMjQuNSJF!5e0!3m2!1sen!2sin!4v1783251882186!5m2!1sen!2sin",
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
