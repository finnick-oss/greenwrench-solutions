import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { PHONE_HREF, SITE } from "../constants/siteConfig";
import styles from "./Gallery.module.css";

const categories = ["All", "Recycling Process", "Facility", "Before & After", "Team"];

const galleryItems = [
  { cat: "Recycling Process", label: "Vehicle Dismantling", color: "#dcfce7", icon: "🔧" },
  { cat: "Facility", label: "Main Processing Hall", color: "#f0fdf4", icon: "🏭" },
  { cat: "Before & After", label: "Sedan Recycling", color: "#dcfce7", icon: "🚗" },
  { cat: "Team", label: "Our Expert Team", color: "#f0fdf4", icon: "👷" },
  { cat: "Recycling Process", label: "Parts Sorting", color: "#bbf7d0", icon: "♻️" },
  { cat: "Facility", label: "Spare Parts Warehouse", color: "#dcfce7", icon: "🏪" },
  { cat: "Before & After", label: "SUV Disassembly", color: "#f0fdf4", icon: "🚙" },
  { cat: "Team", label: "Customer Handover", color: "#bbf7d0", icon: "🤝" },
  { cat: "Recycling Process", label: "Metal Crushing", color: "#f0fdf4", icon: "⚙️" },
  { cat: "Facility", label: "Documentation Office", color: "#dcfce7", icon: "📋" },
  { cat: "Before & After", label: "Truck Recycling", color: "#bbf7d0", icon: "🚚" },
  { cat: "Team", label: "Pickup in Action", color: "#f0fdf4", icon: "🚐" },
];

export default function Gallery() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.span className={styles.badge} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            Our Gallery
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            See <span>Our Work</span> In Action
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            A look inside {SITE.name}'s eco-friendly recycling facility in Rohini, Delhi.
          </motion.p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.filterRow}>
            {categories.map((cat, i) => (
              <motion.span
                key={cat}
                className={`${styles.filterTag} ${cat === "All" ? styles.active : ""}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {cat}
              </motion.span>
            ))}
          </div>

          <div className={styles.grid}>
            {galleryItems.map((item, i) => (
              <motion.a
                key={i}
                href={PHONE_HREF}
                className={styles.card}
                style={{ background: item.color }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
              >
                <div className={styles.cardEmoji}>{item.icon}</div>
                <div className={styles.cardOverlay}>
                  <span className={styles.cardCat}>{item.cat}</span>
                  <span className={styles.cardLabel}>{item.label}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className={styles.note}>
            <p>Want to visit our facility in person?</p>
            <a href={PHONE_HREF} className={styles.noteBtn}>
              <Phone size={16} /> Book a Visit: {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
