import { motion } from 'framer-motion';
import styles from './Expertise.module.css';

interface ExpertiseItem {
  tag: string;
  title: string;
  description: string;
  skills: string[];
}

const EXPERTISE: ExpertiseItem[] = [
  {
    tag: '⚡',
    title: 'Fast\nDelivery',
    description: 'No delays, no excuses. We move at startup pace — because that\'s the only pace that matters when you\'re building.',
    skills: ['Agile sprints', 'Rapid prototyping', 'Iterative releases', 'CI/CD pipelines'],
  },
  {
    tag: '🧠',
    title: 'Problem Solving\nApproach',
    description: 'We don\'t just write code — we solve business problems. Every technical decision is tied to a real outcome.',
    skills: ['Systems thinking', 'Architecture reviews', 'Tech consulting', 'Root cause analysis'],
  },
  {
    tag: '🎯',
    title: 'Business-Focused\nSolutions',
    description: 'We build for results. Every feature, every screen, every API endpoint is designed to drive your business forward.',
    skills: ['KPI-driven builds', 'Conversion optimization', 'Growth-ready architecture', 'Market fit focus'],
  },
  {
    tag: '🔒',
    title: 'Clean &\nScalable Code',
    description: 'Production-grade code that scales. Security, performance, and maintainability — baked in from day one, not bolted on.',
    skills: ['TypeScript', 'Code reviews', 'Testing coverage', 'Security best practices'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Expertise() {
  return (
    <section className={styles.section} id="expertise">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionTag}>// why treora</span>
          <h2 className={styles.title}>Why Clients Choose Treora</h2>
          <p className={styles.subtitle}>
            Not just developers — strategic partners who care about your outcome as much as you do.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          {EXPERTISE.map((exp) => (
            <ExpertiseCard key={exp.tag} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ExpertiseCard({ tag, title, description, skills }: ExpertiseItem) {
  return (
    <motion.article className={styles.card} variants={item}>
      <div className={styles.cardTop}>
        <span className={styles.cardTag} style={{ fontSize: '1.5rem' }}>{tag}</span>
        <div className={styles.cardAccentLine} />
      </div>
      <h3 className={styles.cardTitle}>
        {title.split('\n').map((line, i) => (
          <span key={i} className={styles.cardTitleLine}>{line}</span>
        ))}
      </h3>
      <p className={styles.cardDesc}>{description}</p>
      <ul className={styles.skillList}>
        {skills.map((s) => (
          <li key={s} className={styles.skill}>{s}</li>
        ))}
      </ul>
    </motion.article>
  );
}
