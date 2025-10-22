import React from 'react';
import styles from './MihrabDoor.module.css';

export const MihrabDoor = () => {
  return (
    <div className={styles.doorContainer}>
      <div className={styles.door}>
        <svg
          viewBox="0 0 240 320"
          className={styles.doorSvg}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simple arched door outline - rounded rectangle with curved top */}
          <path
            d="M 30 320 L 30 110 Q 30 20, 120 20 Q 210 20, 210 110 L 210 320"
            className={styles.doorOutline}
            fill="none"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
};