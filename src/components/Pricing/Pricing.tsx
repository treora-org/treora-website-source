import { motion } from 'framer-motion';
import styles from './Pricing.module.css';

const PLANS = [
  {
    name: 'Starter',
    tagline: 'For small projects',
    features: ['Single-page or small web app', 'Up to 2 weeks delivery', 'Mobile responsive', 'Basic SEO', '1 revision round', 'Email support'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    tagline: 'For growing businesses',
    features: ['Full product development', 'Ongoing sprint-based work', 'Web + Mobile (Flutter)', 'Backend & database', 'Auth & payments', 'Priority support'],
    cta: 'Start Project',
    highlighted: true,
  },
  {
    name: 'Custom',
    tagline: 'Tailored solutions',
    features: ['SaaS or complex platform', 'Dedicated team setup', 'Custom architecture', 'Full DevOps & CI/CD', 'Long-term partnership', 'Dedicated Slack channel'],
    cta: 'Let\'s Talk',
    highlighted: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CONTACT_EMAIL = 'treora.admin@gmail.com';

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionTag}>// pricing</span>
          <h2 className={styles.title}>Simple & Transparent Pricing</h2>
          <p className={styles.subtitle}>
            No hidden fees. No surprises. Just straightforward pricing tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={container}
        >
          {PLANS.map(plan => (
            <motion.div
              key={plan.name}
              className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}
              variants={item}
            >
              {plan.highlighted && <span className={styles.badge}>Most Popular</span>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.tagline}>{plan.tagline}</p>
              <div className={styles.divider} />
              <ul className={styles.features}>
                {plan.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(plan.name + ' Plan — Inquiry')}`}
                className={`${styles.cta} ${plan.highlighted ? styles.ctaPrimary : styles.ctaSecondary}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
