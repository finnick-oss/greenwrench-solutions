import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE, PHONE_HREF, WHATSAPP_HREF } from "../constants/siteConfig";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Car Scrapping",
  "Vehicle Recycling",
  "Old Car Buyback",
  "Free Vehicle Pickup",
  "Spare Parts",
  "RTO Documentation",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span>🔧</span>
              <span><span className={styles.green}>Green</span>Wrench Solutions</span>
            </Link>
            <p className={styles.tagline}>{SITE.tagline}</p>
            <p className={styles.desc}>{SITE.description}</p>
            <div className={styles.socials}>
              <a href={WHATSAPP_HREF} className={`${styles.socialBtn} ${styles.wa}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a href={PHONE_HREF} className={`${styles.socialBtn} ${styles.call}`}>
                <Phone size={18} /> Call Us
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4>Our Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s}><a href={PHONE_HREF}>{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact Us</h4>
            <div className={styles.contactItems}>
              <a href={PHONE_HREF} className={styles.contactItem}>
                <Phone size={16} />
                <span>{SITE.phoneDisplay}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className={styles.contactItem}>
                <Mail size={16} />
                <span>{SITE.email}</span>
              </a>
              <a href={SITE.mapUrl} target="_blank" rel="noreferrer" className={styles.contactItem}>
                <MapPin size={16} />
                <span>{SITE.address.line1},<br />{SITE.address.line2}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Serving Delhi NCR since {SITE.establishedYear}</p>
        </div>
      </div>
    </footer>
  );
}
