import { motion } from 'framer-motion';
import styles from './Services.module.css';

interface Service {
  number: string;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Product Development',
    description:
      'Take an idea from 0 to launch. We handle architecture decisions, technical implementation, and delivery — so you don\'t have to babysit.',
  },
  {
    number: '02',
    title: 'MVP Sprints',
    description:
      'Need something fast? We run tight, focused sprints to validate your concept with a working product. Weeks, not months.',
  },
  {
    number: '03',
    title: 'Technical Consulting',
    description:
      'Stuck on an architecture problem, a scaling issue, or a tech stack decision? We\'ll bring a senior engineering lens to your problem.',
  },
  {
    number: '04',
    title: 'Team Augmentation',
    description:
      'Need extra bandwidth on an existing team? We slot in and work like we\'re in-house — same standards, less overhead.',
  },
  {
    number: '05',
    title: 'AI Feature Integration',
    description:
      'LLMs, recommendation systems, intelligent search. We\'ve shipped AI features into production and know what it takes to make them work.',
  },
  {
    number: '06',
    title: 'Cloud Architecture',
    description:
      'AWS infrastructure designed for scale. Migration, cost optimization, observability — whatever state your cloud is in, we improve it.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 60 } }
};

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionTag}>// services</span>
          <h2 className={styles.title}>How we engage</h2>
        </motion.div>

        <motion.div 
          className={styles.list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          {SERVICES.map((service, index) => (
            <ServiceRow key={service.number} {...service} last={index === SERVICES.length - 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceRow({ number, title, description, last }: Service & { last: boolean }) {
  return (
    <motion.div className={`${styles.row} ${last ? styles.rowLast : ''}`} variants={item}>
      <span className={styles.number}>{number}</span>
      <div className={styles.content}>
        <h3 className={styles.rowTitle}>{title}</h3>
        <p className={styles.rowDesc}>{description}</p>
      </div>
      <div className={styles.arrow}>→</div>
    </motion.div>
  );
}
