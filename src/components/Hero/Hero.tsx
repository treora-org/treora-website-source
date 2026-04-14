import { motion } from 'framer-motion';
import StardustBackground from '../ui/StardustBackground';
import styles from './Hero.module.css';

const CONTACT_EMAIL = 'treora.admin@gmail.com';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 70 } }
};

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <StardustBackground />
      <motion.div
        className={`container ${styles.inner}`}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className={styles.badge} variants={item}>
          <span className={styles.dot} />
          <span>Available for new projects</span>
        </motion.div>

        <motion.h1 className={styles.headline} variants={item}>
          <span className={styles.headlineLine}>Build. Scale.</span>
          <span className={`${styles.headlineLine} ${styles.muted}`}>Deliver —</span>
          <span className={styles.headlineLine}>Without Limits.</span>
        </motion.h1>

        <motion.p className={styles.subtext} variants={item}>
          Treora is a full-service freelance studio helping startups and businesses design,
          build, and scale high-performance digital products — fast, reliable, and results-driven.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-10 mb-20" variants={item}>
          {/* <a
            href={`mailto:${CONTACT_EMAIL}?subject=Get%20Started%20—%20Project%20Inquiry`}
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-lg border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300 text-foreground shadow-lg"
          >
            🚀 Get Started
          </a> */}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Hire%20Us%20—%20Freelance%20Inquiry`}
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-lg border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-sm text-foreground"
          >
            🚀 Hire Us
          </a>
        </motion.div>

        <motion.div className={styles.stats} variants={container}>
          {STATS.map((s) => (
            <motion.div key={s.label} className={styles.stat} variants={item}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.scrollIndicator}
        aria-hidden="true"
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, x: "-50%" }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}

const STATS = [
  { value: '3', label: 'Senior Engineers' },
  { value: '10+', label: 'Years Combined' },
  { value: 'US', label: 'Product Background' },
  { value: '∞', label: 'Cups of Coffee' },
];
