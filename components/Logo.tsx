import React from 'react';
import styles from './Logo.module.css';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.logoContainer} ${className || ''}`}>
      <img 
        src="https://assets.floot.app/66130e6c-400d-42c0-80e3-3f67b09b6662/8aa53c63-4f0c-40e6-b65e-a763e88a964d.png" 
        alt="Mihrapp" 
        className={styles.logoImage}
      />
    </div>
  );
};