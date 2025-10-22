import React from 'react';
import styles from './MobileAppMockup.module.css';

export const MobileAppMockup = () => {
  return (
    <div className={styles.mockupContainer}>
      <div className={`${styles.phone} ${styles.phone1}`}>
        <div className={styles.phoneFrame}>
          <div className={styles.notch}></div>
          <div className={styles.screen}>
            <div className={styles.screenContent}>
              {/* Placeholder content */}
              <div className={styles.mockHeader}></div>
              <div className={styles.mockContent}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.phone} ${styles.phone2}`}>
        <div className={styles.phoneFrame}>
          <div className={styles.notch}></div>
          <div className={styles.screen}>
            <div className={styles.screenContent}>
              <div className={styles.mockHeader}></div>
              <div className={styles.mockContent}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.phone} ${styles.phone3}`}>
        <div className={styles.phoneFrame}>
          <div className={styles.notch}></div>
          <div className={styles.screen}>
            <div className={styles.screenContent}>
              <div className={styles.mockHeader}></div>
              <div className={styles.mockContent}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};