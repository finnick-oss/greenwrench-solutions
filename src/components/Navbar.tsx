import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { SITE, PHONE_HREF } from "../constants/siteConfig";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Videos", path: "/videos" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={styles.inner}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <span className={styles.logoIcon}>🔧</span>
            <span className={styles.logoText}>
              <span className={styles.logoGreen}>Green</span>Wrench
            </span>
          </Link>

          {/* Desktop links */}
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`${styles.link} ${location.pathname === link.path ? styles.active : ""}`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.span className={styles.underline} layoutId="nav-underline" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href={PHONE_HREF} className={styles.ctaBtn}>
            <Phone size={16} />
            <span>{SITE.phoneDisplay}</span>
          </a>

          {/* Mobile toggle */}
          <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.path}
                  className={`${styles.mobileLink} ${location.pathname === link.path ? styles.mobileLinkActive : ""}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <a href={PHONE_HREF} className={styles.mobileCta}>
              <Phone size={18} /> Call Now: {SITE.phoneDisplay}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
