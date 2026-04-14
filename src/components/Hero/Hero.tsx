import styles from './Hero.module.css';

const CONTACT_EMAIL = 'hello@treora.dev';

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.grid} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          <span>Available for new projects</span>
        </div>
        <h1 className={styles.headline}>
          <span className={styles.headlineLine}>We build</span>
          <span className={`${styles.headlineLine} ${styles.muted}`}>products</span>
          <span className={styles.headlineLine}>that ship.</span>
        </h1>
        <p className={styles.subtext}>
          Three engineers from US product companies — fullstack, mobile, and cloud.
          We bring the same speed and quality standards from our day jobs to your business.
        </p>
        <div className={styles.actions}>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Start%20a%20Project%20—%20Inquiry`}
            className={styles.primaryBtn}
          >
            Start a project
          </a>
          <a href="#about" className={styles.secondaryBtn}>Who we are →</a>
        </div>
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}

const STATS = [
  { value: '3',   label: 'Senior Engineers'   },
  { value: '10+', label: 'Years Combined'     },
  { value: 'US',  label: 'Product Background' },
  { value: '∞',   label: 'Cups of Coffee'     },
];
