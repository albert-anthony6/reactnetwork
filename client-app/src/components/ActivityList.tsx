import React, { useState, useEffect } from 'react';
import { Activity } from '../models/activity';
import Loader from '../components/Loader';
import styles from '../assets/styles/ActivityList.module.scss';

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
}: Props) {
  const [target, setTarget] = useState('');

  useEffect(() => {
    if (target) {
      deleteActivity(target);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  function handleActivityDelete(id: string) {
    setTarget(id);
  }

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
                className={`btn-primary__blue ${styles['view']}`}
              >
                View
              </div>
              <div
                onClick={() => handleActivityDelete(activity.id)}
                className="btn-primary__red"
              >
                {(!submitting || (submitting && target !== activity.id)) && (
                  <span>Delete</span>
                )}
                {submitting && target === activity.id && (
                  <Loader inline={true} content="Delete" />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
