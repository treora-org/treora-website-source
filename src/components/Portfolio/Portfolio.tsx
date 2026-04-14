import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

const PROJECTS = [
  {
    icon: '📱',
    title: 'Live Streaming App',
    tags: ['Flutter', 'RTMP', 'Real-time'],
    description: 'A high-performance mobile streaming platform enabling live video broadcasting with real-time chat, viewer dashboards, and RTMP protocol integration.',
  },
  {
    icon: '💳',
    title: 'Stripe Payment System',
    tags: ['React', 'Supabase', 'Stripe'],
    description: 'A fully integrated payment system with subscription billing, one-time payments, webhooks, and a clean admin dashboard for revenue tracking.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    description: 'A data-rich business intelligence platform featuring real-time charts, KPI tracking, user segmentation, and automated reporting workflows.',
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

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionTag}>// portfolio</span>
          <h2 className={styles.title}>Recent Work</h2>
          <p className={styles.subtitle}>A selection of projects we've shipped for clients worldwide.</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={container}
        >
          {PROJECTS.map((project) => (
            <motion.article key={project.title} className={styles.card} variants={item}>
              <div className={styles.cardIcon}>{project.icon}</div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
