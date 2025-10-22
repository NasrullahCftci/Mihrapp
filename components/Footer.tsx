import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import { Logo } from './Logo';
import { Input } from './Input';
import { Button } from './Button';
import styles from './Footer.module.css';

// TikTok icon (not available in lucide)
const TikTokIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

// X (Twitter) icon
const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <Logo />
            <p className={styles.tagline}>Dijital çağda ruhunuzu besleyin.</p>
            <div className={styles.socials}>
              <a
                href="https://www.youtube.com/@Mihrapp.Social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={styles.socialLink}
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.facebook.com/Mihrapp.Play/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/mihrapp.social/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/MihrappSocial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className={styles.socialLink}
              >
                <XIcon />
              </a>
              <a
                href="https://www.tiktok.com/@mihrapp.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className={styles.socialLink}
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
          <div className={styles.newsletter}>
            <h3 className={styles.footerHeading}>Gelişmelerden haberdar olun</h3>
            <form className={styles.signupForm}>
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                className={styles.emailInput}
              />
              <Button type="submit" className={styles.signupButton}>
                Abone Ol
              </Button>
            </form>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>© 2025 Mihrapp. Tüm hakları saklıdır.</p>
          <div className={styles.footerLinks}>
            <Link to="/privacy-policy" className={styles.footerLink}>Gizlilik Politikası</Link>
            <Link to="/terms-of-service" className={styles.footerLink}>Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};