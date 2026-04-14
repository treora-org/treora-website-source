import { motion } from 'framer-motion';
import styles from './Process.module.css';

const STEPS = [
  { step: '01', title: 'Discovery', desc: 'We start by understanding your goals, requirements, audience, and technical constraints in depth.' },
  { step: '02', title: 'Planning', desc: 'We define a clear roadmap, milestones, and timeline so you always know what\'s happening next.' },
  { step: '03', title: 'Development', desc: 'Fast, clean execution. We ship iteratively with regular updates — no surprises, no delays.' },
  { step: '04', title: 'Delivery', desc: 'Rigorous testing, performance optimization, and seamless deployment to your production environment.' },
  { step: '05', title: 'Support', desc: 'We don\'t disappear after launch. Ongoing improvements, bug fixes, and feature additions as you grow.' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};
const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionTag}>// process</span>
          <h2 className={styles.title}>How We Work</h2>
          <p className={styles.subtitle}>
            A clear, collaborative process from kickoff to launch — and beyond.
          </p>
        </motion.div>

        <motion.div
          className={styles.steps}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={container}
        >
          {STEPS.map((s, i) => (
            <motion.div key={s.step} className={styles.stepRow} variants={item}>
              <div className={styles.stepLeft}>
                <span className={styles.stepNum}>{s.step}</span>
                {i < STEPS.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
