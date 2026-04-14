import { motion } from 'framer-motion';
import styles from './Services.module.css';

interface Service {
  number: string;
  title: string;
  description: string;
  bullets: string[];
}

const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Web Development',
    description: 'High-performance websites and web applications built with the modern stack.',
    bullets: ['React, Next.js & Vite', 'Responsive & modern UI/UX', 'SEO-optimized builds'],
  },
  {
    number: '02',
    title: 'App Development',
    description: 'Flutter mobile apps that run natively on Android and iOS with real-time capabilities.',
    bullets: ['Flutter mobile apps (Android & iOS)', 'Real-time features (chat, streaming, dashboards)', 'Scalable architecture'],
  },
  {
    number: '03',
    title: 'Backend & APIs',
    description: 'Robust server infrastructure and secure, scalable API systems.',
    bullets: ['Supabase / Firebase / Node.js', 'Secure authentication & database design', 'Payment integrations (Stripe)'],
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description: 'Clean, conversion-focused designs that put users first.',
    bullets: ['Clean, conversion-focused designs', 'Interactive prototypes', 'User-first experience'],
  },
  {
    number: '05',
    title: 'Custom Solutions',
    description: 'Bespoke platforms and systems tailored exactly to your business workflow.',
    bullets: ['SaaS platforms', 'Admin dashboards', 'Automation systems'],
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
          <h2 className={styles.title}>What We Do</h2>
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

function ServiceRow({ number, title, description, bullets, last }: Service & { last: boolean }) {
  return (
    <motion.div className={`${styles.row} ${last ? styles.rowLast : ''}`} variants={item}>
      <span className={styles.number}>{number}</span>
      <div className={styles.content}>
        <h3 className={styles.rowTitle}>{title}</h3>
        <p className={styles.rowDesc}>{description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {bullets.map(b => (
            <li key={b} className="text-xs font-mono text-foreground/50 border border-current/20 rounded-full px-3 py-1">{b}</li>
          ))}
        </ul>
      </div>
      <div className={styles.arrow}>→</div>
    </motion.div>
  );
}
