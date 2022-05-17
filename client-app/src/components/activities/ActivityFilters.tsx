import React from 'react';
import styles from '../../assets/styles/ActivityFilters.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';

export default function ActivityFilters() {
  return (
    <>
      <div className={styles['activity-filters']}>
        <div className={styles['header']}>
          <FontAwesomeIcon icon={faFilter} /> Filters
        </div>
        <div className={styles['filter-option']}>All Activities</div>
        <div className={styles['filter-option']}>I'm going</div>
        <div className={styles['filter-option']}>I'm hosting</div>
      </div>
      <Calendar />
    </>
  );
}
