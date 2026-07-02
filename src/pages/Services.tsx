import { motion } from "framer-motion";
import {
  CarFront, Leaf, Truck, FileCheck, Shield, BadgeCheck,
  Phone, ChevronRight, Check
} from "lucide-react";
import { PHONE_HREF, SITE } from "../constants/siteConfig";
import styles from "./Services.module.css";

const services = [
  {
    icon: <CarFront size={32} />,
    title: "Old Car Buyback",
    shortDesc: "Sell your old, damaged or end-of-life car at the best market price.",
    desc: "Whether your car is old, non-functional, accident-damaged, or simply at the end of its useful life — we offer the best price in Delhi NCR. Our expert assessors evaluate your vehicle fairly and transparently.",
    features: [
      "Free vehicle assessment",
      "Best market price guarantee",
      "All car brands & models accepted",
      "Instant payment — cash or bank transfer",
      "Damaged and non-running cars accepted",
    ],
  },
  {
    icon: <Leaf size={32} />,
    title: "Eco-Friendly Recycling",
    shortDesc: "95% of every recycled vehicle is recovered and reused responsibly.",
    desc: "Our certified facility processes every vehicle to the highest environmental standards. Fluids are safely drained and treated, metals are sorted and sent to certified smelters, and plastics are responsibly handled.",
    features: [
      "Zero harmful waste to landfill",
      "Certified fluids disposal process",
      "Steel, aluminium & metals recovery",
      "Rubber and plastic recycling",
      "Pollution Control Board certified",
    ],
  },
  {
    icon: <Truck size={32} />,
    title: "Free Doorstep Pickup",
    shortDesc: "We come to you — anywhere in Delhi NCR, at your convenient time.",
    desc: "No need to tow your vehicle or arrange transport. Our team will come to your location, inspect the vehicle, and handle everything on the spot. Available 6 days a week.",
    features: [
      "Free pickup anywhere in Delhi NCR",
      "Same-day or next-day service",
      "Trained pickup team",
      "No hidden charges whatsoever",
      "Flexible timing — morning to evening",
    ],
  },
  {
    icon: <FileCheck size={32} />,
    title: "RTO Documentation",
    shortDesc: "Complete paperwork, RC cancellation & scrapping certificate handled by us.",
    desc: "Vehicle paperwork can be complex and time-consuming. We handle all RTO formalities on your behalf — Form 35, hypothecation removal, RC cancellation, and issuance of the official Scrapping Certificate.",
    features: [
      "Form 35 submission",
      "RC cancellation process",
      "Hypothecation clearance assistance",
      "Official Scrapping Certificate",
      "Tax rebate documentation support",
    ],
  },
  {
    icon: <Shield size={32} />,
    title: "Genuine Spare Parts",
    shortDesc: "Quality-tested recycled spare parts at 50–70% less than new part prices.",
    desc: "Looking for affordable genuine spare parts? Our warehouse stocks certified recycled components from dismantled vehicles. All parts are tested, graded, and sold with a warranty.",
    features: [
      "All major car brands available",
      "Quality tested & graded",
      "30-day warranty on parts",
      "50–70% cheaper than new parts",
      "Engine, body & electrical parts",
    ],
  },
  {
    icon: <BadgeCheck size={32} />,
    title: "Scrapping Certificate",
    shortDesc: "Govt-issued certificate for insurance refunds, tax benefits & legal compliance.",
    desc: "When you scrap your vehicle with us, you receive an official government-issued Scrapping Certificate. This is required for insurance refund claims, registration fee concessions on new vehicles, and tax benefits.",
    features: [
      "Official govt-issued certificate",
      "Insurance premium rebate eligibility",
      "New vehicle registration concession",
      "Road tax exemption documentation",
      "Issued within 2–3 working days",
    ],
  },
];

export default function Services() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            Everything You Need to <span>Scrap Smart</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            From buying your old car to handling all paperwork — {SITE.name} is your one-stop solution.
          </motion.p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={`${styles.serviceRow} ${i % 2 !== 0 ? styles.reverse : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.serviceVisual}>
                <div className={styles.serviceIconBig}>{s.icon}</div>
                <div className={styles.serviceNum}>0{i + 1}</div>
              </div>
              <div className={styles.serviceContent}>
                <h2>{s.title}</h2>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <ul className={styles.featureList}>
                  {s.features.map((f) => (
                    <li key={f}>
                      <Check size={16} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={PHONE_HREF} className={styles.serviceBtn}>
                  <Phone size={16} /> Enquire Now <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Need a Custom Quote?</h2>
          <p>Call us and our experts will guide you through the best option for your vehicle.</p>
          <a href={PHONE_HREF} className={styles.ctaBtn}>
            <Phone size={20} /> {SITE.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
