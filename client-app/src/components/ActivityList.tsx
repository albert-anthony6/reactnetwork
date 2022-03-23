import React from 'react';
import { Activity } from '../models/activity';
import styles from '../assets/styles/ActivityList.module.scss';

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <div className={styles['activity-list']}>
      {activities.map((activity) => (
        <div className={styles['item']} key={activity.id}>
          <h5>{activity.title}</h5>
          <p className={styles['date']}>{activity.date}</p>
          <p>{activity.description}</p>
          <p>{activity.venue}</p>
          <div className={styles['list-bottom']}>
            <div className={`${styles['category']} btn-secondary`}>
              {activity.category}
            </div>
            <div className={styles['action-btns']}>
              <div
                onClick={() => selectActivity(activity.id)}
                className="btn-primary__blue"
              >
                View
              </div>
              <div
                onClick={() => deleteActivity(activity.id)}
                className="btn-primary__red"
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
