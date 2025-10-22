import React from 'react';
import { CheckCircle, TrendingUp, Award, Sparkles } from 'lucide-react';
import styles from './FeaturesSection.module.css';

const features = [
  {
    icon: <CheckCircle />,
    title: 'İbadet Takibi',
    description:
      'Günlük, haftalık ve aylık ibadetlerinizi kolayca kaydedin ve manevi disiplininizi güçlendirin.',
  },
  {
    icon: <TrendingUp />,
    title: 'Hedef Belirleme',
    description:
      'Kendinize özel manevi hedefler koyun, ilerlemenizi takip edin ve motivasyonunuzu her zaman yüksek tutun.',
  },
  {
    icon: <Award />,
    title: 'Rozet & Ödül Sistemi',
    description:
      'Ulaştığınız hedefler ve kazandığınız alışkanlıklar için özel tasarlanmış rozetlerle ödüllendirilin.',
  },
  {
    icon: <Sparkles />,
    title: 'Günlük İlham',
    description:
      'Güne ilham verici bir söz, ayet veya hadis ile başlayarak manevi farkındalığınızı artırın.',
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Neler Sunuyoruz</h2>
          <p className={styles.subtitle}>
            Manevi yolculuğunuzu kolaylaştırmak ve zenginleştirmek için
            tasarlanmış modern araçlar.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};