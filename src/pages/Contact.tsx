import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronRight } from "lucide-react";
import { SITE, PHONE_HREF, WHATSAPP_HREF } from "../constants/siteConfig";
import styles from "./Contact.module.css";

const contactMethods = [
  {
    icon: <Phone size={28} />,
    title: "Call Us",
    detail: SITE.phoneDisplay,
    sub: "Mon–Sat, 9AM–7PM",
    href: PHONE_HREF,
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: <MessageCircle size={28} />,
    title: "WhatsApp",
    detail: SITE.phoneDisplay,
    sub: "Quick responses on WhatsApp",
    href: WHATSAPP_HREF,
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: <Mail size={28} />,
    title: "Email Us",
    detail: SITE.email,
    sub: "We reply within 24 hours",
    href: `mailto:${SITE.email}`,
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: <MapPin size={28} />,
    title: "Visit Us",
    detail: SITE.address.line1,
    sub: SITE.address.line2,
    href: SITE.mapUrl,
    color: "#16a34a",
    bg: "#f0fdf4",
  },
];

const faqs = [
  {
    q: "How do I get a quote for my old car?",
    a: "Simply call or WhatsApp us with your car's make, model, year and condition. We'll give you an instant quote.",
  },
  {
    q: "Is the pickup really free?",
    a: "Yes, 100% free doorstep pickup anywhere in Delhi NCR. No hidden charges.",
  },
  {
    q: "How long does the whole process take?",
    a: "From call to pickup is usually within 24 hours. RTO documents are processed within 2–3 working days.",
  },
  {
    q: "What documents do I need?",
    a: "You need the RC Book, your ID proof (Aadhar/PAN), and any loan clearance certificate if applicable.",
  },
  {
    q: "Do you accept accident-damaged cars?",
    a: "Yes! We accept all conditions — old, non-running, flooded, fire-damaged, or accident vehicles.",
  },
  {
    q: "What is a Scrapping Certificate and why do I need it?",
    a: "It's an official govt document confirming your vehicle was responsibly recycled. It helps claim insurance refunds and concessions on new vehicle registration.",
  },
];

export default function Contact() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.span className={styles.badge} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            Contact Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            We're Here to <span>Help You</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Reach us on call, WhatsApp, or visit our facility in Rohini, Delhi.
          </motion.p>
        </div>
      </section>

      {/* Contact methods */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.cardsGrid}>
            {contactMethods.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={styles.contactCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(22,163,74,0.12)" }}
              >
                <span className={styles.contactIcon} style={{ background: c.bg, color: c.color }}>
                  {c.icon}
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p className={styles.contactDetail}>{c.detail}</p>
                  <p className={styles.contactSub}>{c.sub}</p>
                </div>
                <ChevronRight size={20} className={styles.arrow} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Map + hours */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <div className={styles.mapHoursGrid}>
            <motion.div
              className={styles.mapBox}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Find Us</h2>
              <p className={styles.address}>
                <MapPin size={16} /> {SITE.address.full}
              </p>
              <div className={styles.mapFrame}>
                <iframe
                  title="GreenWrench Location"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address.full)}&output=embed`}
                  width="100%"
                  height="320"
                  style={{ border: 0, borderRadius: 12 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <a href={SITE.mapUrl} target="_blank" rel="noreferrer" className={styles.directionBtn}>
                <MapPin size={16} /> Get Directions
              </a>
            </motion.div>

            <motion.div
              className={styles.hoursBox}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Working Hours</h2>
              <div className={styles.hoursList}>
                {[
                  ["Monday – Friday", "9:00 AM – 7:00 PM", true],
                  ["Saturday", "9:00 AM – 6:00 PM", true],
                  ["Sunday", "10:00 AM – 2:00 PM", false],
                ].map(([day, hours, open]) => (
                  <div key={day as string} className={styles.hoursRow}>
                    <div>
                      <Clock size={15} />
                      <span>{day}</span>
                    </div>
                    <div className={styles.hoursRight}>
                      <span>{hours}</span>
                      <span className={`${styles.hoursStatus} ${open ? styles.open : styles.limited}`}>
                        {open ? "Open" : "Limited"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.quickContact}>
                <p>Need immediate assistance?</p>
                <a href={PHONE_HREF} className={styles.callNow}>
                  <Phone size={18} /> Call Now: {SITE.phoneDisplay}
                </a>
                <a href={WHATSAPP_HREF} className={styles.waBtn} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionBadge}>FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq, i) => (
              <motion.a
                key={i}
                href={PHONE_HREF}
                className={styles.faqCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
