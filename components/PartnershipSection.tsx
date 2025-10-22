import React from 'react';
import { Button } from './Button';
import { Mail, Phone } from 'lucide-react';
import styles from './PartnershipSection.module.css';

export const PartnershipSection = () => {
  return (
    <section id="partnership" className={styles.partnership}>
      <div className={styles.container}>
        <h2 className={styles.title}>İşbirliği & Partnerlik</h2>
        <p className={styles.description}>Mihrapp, manevi teknoloji alanında benzersiz bir marka kimliği ve premium görsel estetiği ile modern bir kitleye hitap etmektedir. Markamızın gücünü ve vizyonunu paylaşarak büyümek bizimle iş ortaklığı yapmak isterseniz sizinle tanışmaktan mutluluk duyarız.</p>
        <div className={styles.contactButtons}>
          <Button asChild size="lg" className={styles.emailButton}>
            <a href="mailto:bilgi@mihrapp.com.tr">
              <Mail size={20} />
              bilgi@mihrapp.com.tr
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className={styles.phoneButton}>
            <a href="tel:+905541312451">
              <Phone size={20} />
              +90 554 131 24 51
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};