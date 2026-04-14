import { motion } from 'framer-motion';
import styles from './About.module.css';

const DIFFERENTIATORS = [
  {
    title: 'We ship.',
    desc: 'Not in six months. We move at product-company pace because that\'s the only pace we know.',
  },
  {
    title: 'No juniors.',
    desc: 'Every engineer on your project is senior. No handoffs to someone learning on your dime.',
  },
  {
    title: 'Quality isn\'t a phase.',
    desc: 'Tests, code review, observability — baked in from the start, not bolted on before launch.',
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <motion.div 
          className={styles.layout}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div className={styles.left} variants={fadeUp}>
            <span className={styles.sectionTag}>// about</span>
            <h2 className={styles.title}>
              Engineers who've done it before.
            </h2>
            <p className={styles.body}>
              We're three engineers working at US-based product companies — building and shipping
              software used by real users at real scale. Freelancing is our way of applying those
              same standards to smaller teams who deserve the same level of engineering.
            </p>
            <p className={styles.body}>
              We've worked across e-commerce platforms, AI-integrated tools, and consumer
              mobile products. We know what it takes to go from spec to production without
              the drama.
            </p>
            <div className={styles.companies}>
              <span className={styles.companiesLabel}>Backgrounds in</span>
              <div className={styles.tags}>
                {['E-Commerce', 'SaaS', 'FinTech', 'Consumer Apps', 'AI Products'].map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.right} variants={fadeUp}>
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className={styles.diffItem}>
                <div className={styles.diffDot} />
                <div>
                  <h3 className={styles.diffTitle}>{d.title}</h3>
                  <p className={styles.diffDesc}>{d.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
