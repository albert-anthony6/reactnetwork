import React from 'react';
import { Activity } from '../models/activity';
import styles from '../assets/styles/ActivityDetails.module.scss';

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
}

export default function ActivityDetails({
  activity,
  cancelSelectActivity,
}: Props) {
  return (
    <div className={styles['activity-details']}>
      <img
        src={require(`../assets/images/categoryImages/${activity.category}.jpg`)}
        alt={`${activity.category}.`}
      />
      <div className={styles['content']}>
        <h5>{activity.title}</h5>
        <p className={styles['date']}>{activity.date}</p>
        <p>{activity.description}</p>
        <div className={styles['action-btns']}>
          <div className={`${styles['edit']} btn-secondary`}>Edit</div>
          <div
            onClick={cancelSelectActivity}
            className={`${styles['cancel']} btn-secondary`}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}
