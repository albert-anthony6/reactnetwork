import React from 'react';
import styles from '../assets/styles/Loader.module.scss';

interface Props {
  inverted?: boolean;
  content?: string;
  inline?: boolean;
}

// inline loaders are used within containers such as buttons

export default function Loader({
  inverted = true,
  content = 'Loading',
  inline = false,
}: Props) {
  return (
    <div
      className={
        inline ? styles['inline-loader-container'] : styles['loader-container']
      }
    >
      <div className={styles['loader']}>{!inline && <p>{content}</p>}</div>
      {/* p tag used to populate hidden content within container */}
      {inline && <p>{content}</p>}
    </div>
  );
}
