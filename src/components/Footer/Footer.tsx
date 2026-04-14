import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const CONTACT_EMAIL = 'treora.admin@gmail.com';

export default function Footer() {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>Treora.</div>
        <p className={styles.copy}>© {new Date().getFullYear()} Treora. Three engineers. One standard.</p>
        <div className={styles.links}>
          <a href="#expertise" className={styles.link}>Expertise</a>
          <a href="#services" className={styles.link}>Services</a>
          <a href="#about" className={styles.link}>About</a>
          <a href={`mailto:${CONTACT_EMAIL}?subject=Project%20Inquiry%20via%20Treora.dev`} className={styles.link}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </motion.footer>
  );
}
