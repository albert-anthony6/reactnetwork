import React from 'react';
import styles from '../assets/styles/Loader.module.scss';

interface Props {
  inverted?: boolean;
  content?: string;
}

export default function Loader({
  inverted = true,
  content = 'Loading',
}: Props) {
  return (
    <div className={styles['loader-container']}>
      <div className={styles['loader']}>
        <p>{content}</p>
      </div>
    </div>
  );
}
