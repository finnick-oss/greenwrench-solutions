import { motion } from "framer-motion";
import { Phone, Leaf, Users, Award, Target } from "lucide-react";
import { SITE, PHONE_HREF } from "../constants/siteConfig";
import styles from "./About.module.css";

const values = [
  { icon: <Leaf size={24} />, title: "Eco Responsibility", desc: "Every car we recycle prevents harmful fluids and metals from entering the environment." },
  { icon: <Users size={24} />, title: "Customer First", desc: "Transparent pricing, prompt pickups, and zero-hassle documentation. Always." },
  { icon: <Award size={24} />, title: "Certified Excellence", desc: "Govt-approved facility with skilled technicians and industry-best practices." },
  { icon: <Target size={24} />, title: "Fair Pricing", desc: "We assess every vehicle honestly and pay the best market price — guaranteed." },
];

const team = [
  { name: "Kiran Patwal", role: "Founder", initial: "K" },
  { name: "Anamika Rawat", role: "Customer Relations", initial: "A" },
  { name: "Ravi", role: "Technical Lead", initial: "R" },
];

export default function About() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Delhi's Most Trusted <span>Car Recycling</span> Partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {SITE.name} has been serving Delhi NCR since {SITE.establishedYear}, committed to responsible vehicle
            disposal and sustainable recycling practices.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.storyGrid}>
            <motion.div
              className={styles.storyText}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className={styles.sectionBadge}>Our Story</span>
              <h2>From a Small Garage to Delhi NCR's Trusted Recycling Center</h2>
              <p>
                Founded in {SITE.establishedYear}, {SITE.name} was born out of a simple observation: thousands of end-of-life
                vehicles in Delhi were being abandoned, scrapped illegally, or sold for throwaway prices —
                while the environment suffered.
              </p>
              <p>
                We built a facility that combines fair pricing for vehicle owners with eco-responsible
                dismantling. Every car is carefully processed to extract and recycle up to 95% of its
                materials — from steel and aluminium to rubber and glass.
              </p>
              <p>
                Today, we're a government-registered Authorised Vehicle Scrapping Facility (AVSF) serving
                all of Delhi NCR, having recycled over {SITE.stats.carsRecycled} vehicles and counting.
              </p>
              <a href={PHONE_HREF} className={styles.ctaBtn}>
                <Phone size={18} /> Talk to Our Team
              </a>
            </motion.div>
            <motion.div
              className={styles.statsPanel}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {Object.entries(SITE.stats).map(([key, val]) => (
                <div key={key} className={styles.statBox}>
                  <span className={styles.statVal}>{val}</span>
                  <span className={styles.statLabel}>{key.replace(/([A-Z])/g, " $1").trim()}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionBadge}>What Drives Us</span>
            <h2>Our Core Values</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionBadge}>Our People</span>
            <h2>The Team Behind {SITE.name}</h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map((t, i) => (
              <motion.a
                key={t.name}
                href={PHONE_HREF}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.teamAvatar}>{t.initial}</div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
