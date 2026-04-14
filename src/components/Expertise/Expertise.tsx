import styles from './Expertise.module.css';

interface ExpertiseItem {
  tag: string;
  title: string;
  description: string;
  skills: string[];
}

const EXPERTISE: ExpertiseItem[] = [
  {
    tag: '01',
    title: 'Fullstack\nDevelopment',
    description:
      'End-to-end web application development. From database schema to pixel-perfect UI — we own the whole stack and ship complete features.',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST & GraphQL', 'Next.js'],
  },
  {
    tag: '02',
    title: 'Mobile\nEngineering',
    description:
      'Cross-platform mobile apps built in Flutter. One codebase, native performance on iOS and Android. Proven in production at scale.',
    skills: ['Flutter', 'Dart', 'iOS', 'Android', 'State Management', 'Native Integrations'],
  },
  {
    tag: '03',
    title: 'Cloud &\nInfrastructure',
    description:
      'AWS-first cloud architecture. We design, deploy, and maintain scalable infrastructure that grows with your product.',
    skills: ['AWS', 'Terraform', 'Docker', 'CI/CD', 'Serverless', 'Observability'],
  },
  {
    tag: '04',
    title: 'E-Commerce\n& AI',
    description:
      "Deep experience integrating AI into commerce flows and building intelligent product features. We've shipped both at US product companies.",
    skills: ['LLM Integration', 'Stripe', 'Recommendation Engines', 'Search', 'Analytics', 'A/B Testing'],
  },
];

export default function Expertise() {
  return (
    <section className={styles.section} id="expertise">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionTag}>// expertise</span>
          <h2 className={styles.title}>What we're built for</h2>
          <p className={styles.subtitle}>
            Not a generalist shop. We go deep in the areas where shipping fast actually matters.
          </p>
        </div>

        <div className={styles.grid}>
          {EXPERTISE.map((item) => (
            <ExpertiseCard key={item.tag} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseCard({ tag, title, description, skills }: ExpertiseItem) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.cardTag}>{tag}</span>
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
    </article>
  );
}
