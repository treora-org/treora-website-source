import { motion } from 'framer-motion';
import styles from './About.module.css';

const DIFFERENTIATORS = [
  {
    title: 'Startup-Ready.',
    desc: 'Whether you\'re launching your first product or scaling operations — we bring clarity, speed, and execution.',
  },
  {
    title: 'Technical Expertise.',
    desc: 'We combine deep engineering knowledge with creative execution to deliver solutions that actually work at scale.',
  },
  {
    title: 'User-Focused.',
    desc: 'Every line of code is built around your users\' needs — modern, scalable, and beautiful by design.',
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
              Who We Are
            </h2>
            <p className={styles.body}>
              At Treora, we combine technical expertise with creative execution to deliver
              impactful digital solutions. We specialize in building modern, scalable, and
              user-focused applications tailored to your business needs.
            </p>
            <p className={styles.body}>
              Whether you're a startup launching your first product or a business scaling
              operations — we bring clarity, speed, and execution.
            </p>
            <div className={styles.companies}>
              <span className={styles.companiesLabel}>Specializing in</span>
              <div className={styles.tags}>
                {['Web Development', 'Mobile Apps', 'SaaS', 'Backend & APIs', 'UI/UX Design'].map(t => (
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
