import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone, ArrowRight, CarFront, FileText, MapPin, Wrench, Award,
  BadgeCheck, Star, ChevronRight, Leaf, Shield, Clock, Sprout
} from "lucide-react";
import { SITE, PHONE_HREF, WHATSAPP_HREF } from "../constants/siteConfig";
import VehicleSearch from "../components/VehicleSearch";
import styles from "./Home.module.css";

const services = [
  { icon: <CarFront size={26} />, title: "Old Car Buyback", desc: "Get the best price for your old, damaged or end-of-life vehicle. Instant quote & payment." },
  { icon: <Leaf size={26} />, title: "Eco Recycling", desc: "Environmentally responsible dismantling. 95% of every vehicle recycled, zero landfill." },
  { icon: <MapPin size={26} />, title: "Free Pickup", desc: "We come to you — anywhere in Delhi NCR. No charges, no hassle, just hand over the keys." },
  { icon: <FileText size={26} />, title: "RTO Documentation", desc: "Complete paperwork handled by us. Form 35, cancellation of RC — we do it all." },
  { icon: <Wrench size={26} />, title: "Genuine Spare Parts", desc: "Certified recycled parts available at unbeatable prices. Quality tested, warranty provided." },
  { icon: <Award size={26} />, title: "Certified Process", desc: "Govt-approved scrapping facility. Scrapping certificate issued for tax & insurance benefits." },
];

const steps = [
  { no: "01", title: "Get a Quote", desc: "Call or WhatsApp us with your vehicle details for an instant free quote." },
  { no: "02", title: "Paperwork", desc: "We handle all RTO formalities — Form 35, RC cancellation and hypothecation clearance." },
  { no: "03", title: "Instant Payment & Certificate", desc: "Receive cash/bank transfer on the spot along with a government-approved scrapping certificate." },
  { no: "04", title: "Free Pickup", desc: "Schedule a convenient time and we'll pick up the vehicle from your doorstep." },
];

const testimonials = [
  { name: "Rajesh Kumar", loc: "Rohini", rating: 5, text: "Excellent service! Got a great price for my old Maruti. The pickup was free and paperwork was handled within 2 days." },
  { name: "Priya Sharma", loc: "Pitampura", rating: 5, text: "Very professional team. They came on time, gave a fair price and sorted the RTO papers too. Highly recommended!" },
  { name: "Amit Verma", loc: "Shalimar Bagh", rating: 5, text: "I was worried about the documentation but they handled everything. The process was smooth and transparent." },
];

const whyUs = [
  { icon: <Sprout size={20} />, title: "Eco-Certified", desc: "Pollution Control Board certified facility" },
  { icon: <BadgeCheck size={20} />, title: "Govt Approved", desc: "Registered vehicle scrapping center" },
  { icon: <Clock size={20} />, title: "Same Day Service", desc: "Quick turnaround within 24 hours" },
  { icon: <Shield size={20} />, title: "Best Price Guarantee", desc: "We match any verified quote" },
];

export default function Home() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.glow1} />
          <div className={styles.glow2} />
        </div>

        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.heroBadgeDot} />
            <span className={styles.red}>DELHI NCR</span>&nbsp;CAR RECYCLING SERVICE
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Turn Your <span className={styles.green}>Old Car</span> Into <span className={styles.green}>Instant Cash</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {SITE.name} — {SITE.tagline}. Free pickup across Delhi NCR,
            instant payment, and complete RTO documentation handled by us.
          </motion.p>

          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <a href={PHONE_HREF} className={styles.btnPrimary}>
              <Phone size={18} />
              Call Now: {SITE.phoneDisplay}
            </a>
            <a href={WHATSAPP_HREF} className={styles.btnSecondary} target="_blank" rel="noreferrer">
              WhatsApp Us <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            {Object.entries(SITE.stats).map(([key, val]) => (
              <div key={key} className={styles.stat}>
                <span className={styles.statVal}>{val}</span>
                <span className={styles.statKey}>{key.replace(/([A-Z])/g, " $1").trim()}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className={styles.strip}>
        <div className={styles.stripInner}>
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.stripItem}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className={styles.stripIcon}>{item.icon}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VEHICLE SEARCH */}
      <VehicleSearch />

      {/* SERVICES */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.badge}>WHAT WE DO</span>
            <h2 className={styles.servicesHeading}>Our Services</h2>
            <p>From picking up your old vehicle to completing all paperwork — we handle everything.</p>
          </motion.div>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <motion.a
                key={s.title}
                href={PHONE_HREF}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(22,163,74,0.12)" }}
              >
                <span className={styles.sIcon}>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ChevronRight size={16} className={styles.sArrow} />
              </motion.a>
            ))}
          </div>

          <div className={styles.centerCta}>
            <Link to="/services" className={styles.outlineBtn}>
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.sectionGray}>
        <div className={styles.inner}>
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.badge}>SIMPLE PROCESS</span>
            <h2>How It Works</h2>
            <p>4 easy steps to scrap your vehicle and get paid</p>
          </motion.div>

          <div className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <motion.div
                key={step.no}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className={styles.stepNo}>{step.no}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.centerCta}>
            <a href={PHONE_HREF} className={styles.solidBtn}>
              <Phone size={17} /> Get Free Quote Now
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.badge}>CUSTOMER REVIEWS</span>
            <h2>What Our Customers Say</h2>
          </motion.div>

          <div className={styles.reviewsGrid}>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className={styles.reviewCard}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={styles.stars}>
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} size={15} fill="#fbbf24" stroke="none" />
                  ))}
                </div>
                <p className={styles.reviewText}>"{t.text}"</p>
                <div className={styles.reviewer}>
                  <span className={styles.avatar}>{t.name[0]}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.loc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Scrap Your Old Vehicle?</h2>
            <p>Get an instant quote and free pickup. We serve all Delhi NCR areas.</p>
            <div className={styles.ctaBtns}>
              <a href={PHONE_HREF} className={styles.ctaGreen}>
                <Phone size={18} /> Call: {SITE.phoneDisplay}
              </a>
              <a href={WHATSAPP_HREF} className={styles.ctaOutline} target="_blank" rel="noreferrer">
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
