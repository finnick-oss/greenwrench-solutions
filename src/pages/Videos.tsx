import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Eye, Clock, ExternalLink } from "lucide-react";
import { PHONE_HREF, SITE } from "../constants/siteConfig";
import styles from "./Videos.module.css";

const FEATURED_VIDEOS = [
  {
    id: "KgTt8Cz7AHM",
    category: "Recycling Process",
    title: "Car Scrapping Process - Quick Guide",
    description: "Learn how we efficiently handle car scrapping with our state-of-the-art eco-friendly process.",
    duration: "1:00",
    views: "32.4K",
    date: "May 10, 2024",
  },
  {
    id: "Jz3jmV8RaaY",
    category: "Educational",
    title: "Get Maximum Value for Your Old Car",
    description: "Discover how to maximize the value of your old vehicle through our premium scrapping service.",
    duration: "0:58",
    views: "28.1K",
    date: "May 5, 2024",
  },
  {
    id: "yG7hkDNSQDM",
    category: "Educational",
    title: "How Vehicle Recycling Works",
    description: "Step-by-step explanation of our comprehensive vehicle recycling process and environmental benefits.",
    duration: "0:55",
    views: "19.7K",
    date: "April 30, 2024",
  },
  {
    id: "01CHpW_Iv0w",
    category: "Awareness Campaigns",
    title: "Environmental Benefits of Car Scrapping",
    description: "Learn about the positive environmental impact of proper vehicle recycling through our sustainable methods.",
    duration: "0:52",
    views: "14.8K",
    date: "April 28, 2024",
  },
  {
    id: "bdh8ToO0pT4",
    category: "Educational",
    title: "Documentation Required for Scrapping",
    description: "Overview of all the necessary paperwork and documentation needed for a smooth car scrapping process.",
    duration: "0:54",
    views: "11.3K",
    date: "April 22, 2024",
  },
  {
    id: "X2MYNt5FevI",
    category: "Recycling Process",
    title: "Complete Guide to Car Scrapping Process",
    description: "Comprehensive walkthrough of our end-to-end car scrapping process from pickup to completion.",
    duration: "8:45",
    views: "25.6K",
    date: "April 15, 2024",
  },
];

const MORE_VIDEOS = [
  {
    thumbnail: "https://res.cloudinary.com/dmhabztbf/video/upload/v1760018566/WhatsApp_Video_2025-09-27_at_13.25.59_7b52d783_txwaak.jpg",
    videoUrl: "https://res.cloudinary.com/dmhabztbf/video/upload/v1760018566/WhatsApp_Video_2025-09-27_at_13.25.59_7b52d783_txwaak.mp4",
    category: "Process Overview",
    title: "Car Scrap Process Overview",
    description: "A comprehensive walkthrough of our eco-friendly car scrapping process from start to finish.",
    views: "12.5K",
    date: "Sep 27, 2025",
  },
  {
    thumbnail: "https://res.cloudinary.com/dmhabztbf/video/upload/v1760018155/WhatsApp_Video_2025-09-27_at_13.26.10_bcc7cc2f_uskgxc.jpg",
    videoUrl: "https://res.cloudinary.com/dmhabztbf/video/upload/v1760018155/WhatsApp_Video_2025-09-27_at_13.26.10_bcc7cc2f_uskgxc.mp4",
    category: "Recycling Process",
    title: "Eco-Friendly Vehicle Disposal",
    description: "See how we properly dispose of vehicles while maintaining strict environmental standards.",
    views: "9.8K",
    date: "Sep 27, 2025",
  },
  {
    thumbnail: "https://res.cloudinary.com/dmhabztbf/video/upload/v1760017940/WhatsApp_Video_2025-09-27_at_13.28.20_ab4a75c6_ebwogt.jpg",
    videoUrl: "https://res.cloudinary.com/dmhabztbf/video/upload/v1760017940/WhatsApp_Video_2025-09-27_at_13.28.20_ab4a75c6_ebwogt.mp4",
    category: "Behind the Scenes",
    title: "Dismantling and Parts Recovery",
    description: "Watch our specialized team efficiently dismantle vehicles and recover valuable parts for recycling.",
    views: "11.2K",
    date: "Sep 27, 2025",
  },
];

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<{ type: "youtube" | "mp4"; src: string } | null>(null);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Play size={14} /> Premium Video Content
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Video <span className={styles.green}>Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Watch our collection of educational videos, customer testimonials, and behind-the-scenes content about eco-friendly car recycling and sustainable practices
          </motion.p>
          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className={styles.heroStat}><Play size={16} /><span>3+ Videos To explore</span></div>
            <div className={styles.heroStat}><Clock size={16} /><span>45+ Minutes Of content</span></div>
            <div className={styles.heroStat}><Eye size={16} /><span>100K+ Views And growing</span></div>
          </motion.div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionBadge}>Featured Collection</span>
            <h2>Our <span className={styles.green}>Featured</span> Videos</h2>
            <p>Explore our hand-picked selection of the most informative and engaging videos about car scrapping and recycling</p>
          </div>

          <div className={styles.grid}>
            {FEATURED_VIDEOS.map((v) => (
              <motion.div
                key={v.id}
                className={styles.card}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.thumb} onClick={() => setActiveVideo({ type: "youtube", src: v.id })}>
                  <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} />
                  <div className={styles.playBtn}><Play size={24} fill="white" /></div>
                  <span className={styles.duration}><Clock size={12} /> {v.duration}</span>
                  <span className={styles.ytBadge}>YouTube Short</span>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.category}>{v.category}</span>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                  <div className={styles.cardMeta}>
                    <span><Eye size={13} /> {v.views}</span>
                    <a
                      href={`https://www.youtube.com/watch?v=${v.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.watchLink}
                    >
                      Watch <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Videos */}
      <section className={styles.sectionGray}>
        <div className={styles.inner}>
          <h2 className={styles.moreTitle}>More Videos</h2>
          <div className={styles.grid}>
            {MORE_VIDEOS.map((v, i) => (
              <motion.div
                key={i}
                className={styles.card}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.thumb} onClick={() => setActiveVideo({ type: "mp4", src: v.videoUrl })}>
                  <img src={v.thumbnail} alt={v.title} />
                  <div className={styles.playBtn}><Play size={24} fill="white" /></div>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.category}>{v.category}</span>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                  <div className={styles.cardMeta}>
                    <span><Eye size={13} /> {v.views}</span>
                    <span className={styles.dateTag}>{v.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className={styles.comingSoon}>
            <a href={PHONE_HREF} className={styles.comingSoonBtn}>More Videos Coming Soon</a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className={styles.lightboxInner}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setActiveVideo(null)}>
                <X size={22} />
              </button>
              {activeVideo.type === "youtube" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.src}?autoplay=1`}
                  title="Video player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <video src={activeVideo.src} controls autoPlay style={{ width: "100%", height: "100%" }} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
