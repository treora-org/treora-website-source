import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services',  href: '#services'  },
  { label: 'About',     href: '#about'     },
  { label: 'Contact',   href: '#contact'   },
];

const CONTACT_EMAIL = 'hello@treora.dev';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoText}>Treora</span>
          <span className={styles.logoDot}>.</span>
        </a>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={`mailto:${CONTACT_EMAIL}?subject=Let's%20Talk%20—%20Project%20Inquiry`} className={styles.ctaBtn}>
            Let's Talk
          </a>
        </nav>
        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={styles.bar} /><span className={styles.bar} /><span className={styles.bar} />
        </button>
      </div>
    </header>
  );
}
