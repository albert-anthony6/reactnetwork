import React from 'react';
import styles from '../../../assets/styles/ActivityDetailedSidebar.module.scss';

export default function ActivityDetailedSidebar() {
  return (
    <div className={styles['activity-detailed-sidebar']}>
      <div className={styles['header']}>3 People Going</div>
      <div className={styles['content']}>
        <div className={styles['people-container']}>
          <div className={styles['host']}>host</div>
          <img
            src={require('../../../assets/images/user.png')}
            alt="User Avatar."
          />
          <div className={styles['person']}>
            <div className={styles['name']}>Bob</div>
            <div className={styles['following']}>Following</div>
          </div>
        </div>
        <div className={styles['people-container']}>
          <img
            src={require('../../../assets/images/user.png')}
            alt="User Avatar."
          />
          <div className={styles['person']}>
            <div className={styles['name']}>Turok</div>
            <div className={styles['following']}>Following</div>
          </div>
        </div>
        <div className={styles['people-container']}>
          <img
            src={require('../../../assets/images/user.png')}
            alt="User Avatar."
          />
          <div className={styles['person']}>
            <div className={styles['name']}>Vanessa</div>
          </div>
        </div>
      </div>
    </div>
  );
}
