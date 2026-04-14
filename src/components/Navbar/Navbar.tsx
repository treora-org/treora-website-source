import { useState, useEffect } from 'react';
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider";
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

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          <img src={logoPeaks} alt="Treora Peaks" className="h-6 w-auto mr-2 dark:invert transition-all" />
          <span className={styles.logoText}>Treora</span>
          <span className={styles.logoDot}>.</span>
        </a>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''} flex items-center`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a 
            href={`mailto:${CONTACT_EMAIL}?subject=Let's%20Talk%20—%20Project%20Inquiry`} 
            className="text-sm font-semibold rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:scale-105 px-6 py-2 transition-all duration-300 text-foreground"
          >
            Let's Talk
          </a>
        </nav>
        
        <div className="flex items-center gap-2 md:gap-4 ml-auto md:ml-0">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black dark:text-white flex items-center justify-center cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={styles.bar} /><span className={styles.bar} /><span className={styles.bar} />
          </button>
        </div>
      </div>
    </header>
  );
}
