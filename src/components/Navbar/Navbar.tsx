import { useState, useEffect } from 'react';
import { Moon, Sun, X, Menu } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import logoPeaks from '../../assets/logo.svg';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

const CONTACT_EMAIL = 'treora.admin@gmail.com';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#top" className={styles.logo} onClick={close}>
          <img src={logoPeaks} alt="Treora Peaks" className={`${styles.logoImg} dark:invert`} />
          <span className={styles.logoText}>Treora</span>
          <span className={styles.logoDot}>.</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Let's%20Talk%20—%20Project%20Inquiry`}
            className={styles.ctaBtn}
          >
            Let's Talk
          </a>
        </nav>

        {/* Right controls */}
        <div className={styles.controls}>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className={styles.mobileOverlay} onClick={close}>
          <nav className={styles.mobileNav} onClick={(e) => e.stopPropagation()}>
            <div className={styles.mobileHeader}>
              <a href="#top" className={styles.logo} onClick={close}>
                <img src={logoPeaks} alt="Treora Peaks" className={`${styles.logoImg} dark:invert`} />
                <span className={styles.logoText}>Treora</span>
                <span className={styles.logoDot}>.</span>
              </a>
              <button className={styles.closeBtn} onClick={close} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <div className={styles.mobileLinks}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={close}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Let's%20Talk%20—%20Project%20Inquiry`}
              className={styles.mobileCta}
              onClick={close}
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
