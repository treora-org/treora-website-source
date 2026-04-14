import { motion } from 'framer-motion';
import styles from './Trust.module.css';

const STATS = [
  { value: '100%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '3', label: 'Expert Engineers' },
  { value: '24h', label: 'Avg. Response Time' },
];

const TESTIMONIALS = [
  {
    quote: 'Treora delivered our MVP in record time. The quality and communication were exceptional throughout.',
    author: 'Sarah M.',
    role: 'Founder, TechStartup',
  },
  {
    quote: 'Working with Treora felt like having a senior engineering team in-house. Highly recommended.',
    author: 'James K.',
    role: 'CTO, ScaleUp Co.',
  },
  {
    quote: 'They took our vague idea and shipped a polished product. Exactly what we needed.',
    author: 'Priya R.',
    role: 'Product Lead, GrowthApp',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Trust() {
  return (
    <section className={styles.section} id="trust">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionTag}>// trust</span>
          <h2 className={styles.title}>Trusted by Growing Businesses</h2>
          <p className={styles.subtitle}>
            We work with startups, creators, and businesses worldwide to turn ideas into scalable digital products.
          </p>
        </motion.div>

        <motion.div
          className={styles.statsRow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={container}
        >
          {STATS.map(s => (
            <motion.div key={s.label} className={styles.statCard} variants={item}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.testimonials}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={container}
        >
          {TESTIMONIALS.map(t => (
            <motion.div key={t.author} className={styles.testimonialCard} variants={item}>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.authorRow}>
                <span className={styles.author}>{t.author}</span>
                <span className={styles.role}>{t.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
