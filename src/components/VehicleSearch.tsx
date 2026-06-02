import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Search, MessageCircle, ArrowRight } from "lucide-react";
import { VEHICLE_DATA, YEARS } from "../constants/vehicleData";
import { PHONE_HREF, SITE } from "../constants/siteConfig";
import styles from "./VehicleSearch.module.css";

export default function VehicleSearch() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [showCta, setShowCta] = useState(false);

  const selectedMake = VEHICLE_DATA.find((m) => m.name === make);
  const selectedModel = selectedMake?.models.find((m) => m.name === model);
  const availableFuels = selectedModel?.fuelTypes ?? [];

  const handleMakeChange = (v: string) => {
    setMake(v); setModel(""); setFuel(""); setShowCta(false);
  };
  const handleModelChange = (v: string) => {
    setModel(v); setFuel(""); setShowCta(false);
  };

  const isComplete = make && model && year && fuel && vehicleNo.trim().length >= 4;

  // Build WhatsApp message with all details
  const buildWhatsAppLink = () => {
    const msg = [
      `Hello GreenWrench Solutions! I want to scrap my vehicle.`,
      ``,
      `🚗 Vehicle Details:`,
      `• Make: ${make}`,
      `• Model: ${model}`,
      `• Year: ${year}`,
      `• Fuel Type: ${fuel}`,
      `• Vehicle Number: ${vehicleNo.toUpperCase()}`,
      ``,
      `Please provide the best scrap price and pickup details. Thank you!`,
    ].join("\n");
    return `https://wa.me/91${SITE.phone}?text=${encodeURIComponent(msg)}`;
  };

  const handleGetQuote = () => {
    if (isComplete) setShowCta(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.badge}>
            <Search size={14} />
            Get Vehicle Quote
          </span>
          <h2>Find Out What Your Car Is Worth</h2>
          <p>Fill in your vehicle details and connect with our team for the best price</p>
        </div>

        <div className={styles.card}>
          <div className={styles.grid}>
            {/* Make */}
            <div className={styles.field}>
              <label>Car Make / Brand</label>
              <div className={styles.selectWrap}>
                <select value={make} onChange={(e) => handleMakeChange(e.target.value)}>
                  <option value="">Select Make</option>
                  {VEHICLE_DATA.map((m) => (
                    <option key={m.name} value={m.name}>{m.name}</option>
                  ))}
                </select>
                <ChevronDown size={16} className={styles.selectIcon} />
              </div>
            </div>

            {/* Model */}
            <div className={styles.field}>
              <label>Car Model</label>
              <div className={styles.selectWrap}>
                <select value={model} onChange={(e) => handleModelChange(e.target.value)} disabled={!make}>
                  <option value="">Select Model</option>
                  {(selectedMake?.models ?? []).map((m) => (
                    <option key={m.name} value={m.name}>{m.name}</option>
                  ))}
                </select>
                <ChevronDown size={16} className={styles.selectIcon} />
              </div>
            </div>

            {/* Year */}
            <div className={styles.field}>
              <label>Year of Manufacture</label>
              <div className={styles.selectWrap}>
                <select value={year} onChange={(e) => { setYear(e.target.value); setShowCta(false); }} disabled={!model}>
                  <option value="">Select Year</option>
                  {YEARS.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
                <ChevronDown size={16} className={styles.selectIcon} />
              </div>
            </div>

            {/* Fuel */}
            <div className={styles.field}>
              <label>Fuel Type</label>
              <div className={styles.selectWrap}>
                <select value={fuel} onChange={(e) => { setFuel(e.target.value); setShowCta(false); }} disabled={!model}>
                  <option value="">Select Fuel Type</option>
                  {availableFuels.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
                <ChevronDown size={16} className={styles.selectIcon} />
              </div>
            </div>
          </div>

          {/* Vehicle Number — full width row */}
          <div className={styles.vehicleNoRow}>
            <div className={styles.field}>
              <label>Vehicle Registration Number</label>
              <div className={styles.inputWrap}>
                <span className={styles.platePrefix}>🇮🇳</span>
                <input
                  type="text"
                  value={vehicleNo}
                  onChange={(e) => { setVehicleNo(e.target.value.toUpperCase()); setShowCta(false); }}
                  placeholder="e.g. DL 01 AB 1234"
                  maxLength={13}
                  className={styles.vehicleInput}
                  disabled={!fuel}
                />
              </div>
              <span className={styles.fieldHint}>We use this to verify your vehicle details</span>
            </div>
          </div>

          <div className={styles.actions}>
            <motion.button
              className={`${styles.quoteBtn} ${!isComplete ? styles.disabled : ""}`}
              onClick={handleGetQuote}
              disabled={!isComplete}
              whileHover={isComplete ? { scale: 1.02 } : {}}
              whileTap={isComplete ? { scale: 0.98 } : {}}
            >
              <Search size={18} />
              Get Quote Now
              <ArrowRight size={18} />
            </motion.button>
          </div>

          {/* CTA — no price, just contact options */}
          <AnimatePresence>
            {showCta && isComplete && (
              <motion.div
                className={styles.result}
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className={styles.resultInner}>
                  <div className={styles.resultLeft}>
                    <div className={styles.resultCar}>
                      <span className={styles.resultCarIcon}>🚗</span>
                      <div>
                        <strong>{year} {make} {model}</strong>
                        <span className={styles.fuelTag}>{fuel}</span>
                        <span className={styles.plateTag}>{vehicleNo}</span>
                      </div>
                    </div>
                    <p className={styles.resultMsg}>
                      Great! Your vehicle details are ready. Connect with our team now to get the <strong>best scrap price</strong> — we'll call you back within minutes.
                    </p>
                    <p className={styles.perks}>✓ Free Pickup &nbsp;·&nbsp; ✓ Instant Payment &nbsp;·&nbsp; ✓ RTO Docs Handled</p>
                  </div>
                  <div className={styles.resultRight}>
                    <a href={buildWhatsAppLink()} className={styles.waBtn} target="_blank" rel="noreferrer">
                      <MessageCircle size={20} />
                      WhatsApp for Quote
                    </a>
                    <a href={PHONE_HREF} className={styles.callBtn}>
                      <Phone size={20} />
                      Call: {SITE.phoneDisplay}
                    </a>
                    <p className={styles.responseTime}>⚡ Typical response: under 5 minutes</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.brands}>
          <p>We accept all makes:</p>
          <div className={styles.brandTags}>
            {VEHICLE_DATA.slice(0, 10).map((b) => (
              <button key={b.name} className={styles.brandTag} onClick={() => handleMakeChange(b.name)}>
                {b.name}
              </button>
            ))}
            <span className={styles.brandMore}>+{VEHICLE_DATA.length - 10} more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
