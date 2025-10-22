import React from 'react';
import styles from './AboutSection.module.css';
import { MihrabDoor } from './MihrabDoor';

export const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Hikayemiz</h2>
          <p className={styles.text}>
            Mihrapp, kutsal gelenekleri modern tasarımla birleştirerek manevi
            yolculuğunuzda size eşlik etmek için doğdu. Misyonumuz, dijital
            çağın olanaklarını kullanarak, kullanıcılarımızın manevi rutinler
            oluşturmasına ve sürdürmesine yardımcı olmaktır.
          </p>
          <p className={styles.text}>Siyahın sükûneti, altının hikmetiyle birleşiyor; zaman ötesi bir huzur doğuyor. Mihrapp, geçmişin manevi izlerini bugünün zarafetiyle birleştirerek, kalbinize modern bir mihrap sunar. Her detayında huzur, her dokunuşunda anlam saklı. Her detayı, size hem işlevsel hem de ilham verici bir deneyim sunmak için özenle tasarladık.</p>
        </div>
        <div className={styles.doorContainer}>
          <MihrabDoor />
        </div>
      </div>
    </section>
  );
};