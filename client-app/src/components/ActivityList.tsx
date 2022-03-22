import React from 'react';
import { Activity } from '../models/activity';
import styles from '../assets/styles/ActivityList.module.scss';

interface Props {
  activities: Activity[];
}

export default function ActivityList({ activities }: Props) {
  return (
    <div className={styles['activity-list']}>
      {activities.map((activity) => (
        <div className={styles['item']} key={activity.id}>
          <h5>{activity.title}</h5>
          <div className={styles['date']}>{activity.date}</div>
          <div>{activity.description}</div>
          <div>{activity.venue}</div>
          <div className={styles['list-bottom']}>
            <div className="btn-secondary">{activity.category}</div>
            <div className="btn-primary__blue">View</div>
          </div>
        </div>
      ))}
    </div>
  );
}
