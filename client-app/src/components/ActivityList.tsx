import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import styles from '../assets/styles/ActivityList.module.scss';
import { useStore } from '../stores';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { deleteActivity, activitiesByDate, loading } = activityStore;

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
      {activitiesByDate.map((activity) => (
        <div className={styles['item']} key={activity.id}>
          <h5>{activity.title}</h5>
          <p className={styles['date']}>{activity.date}</p>
          <p>{activity.description}</p>
          <p>{activity.venue}</p>
          <div className={styles['list-bottom']}>
            <span className={`${styles['category']} btn-secondary`}>
              {activity.category}
            </span>
            <div className={styles['action-btns']}>
              <Link to={`/activities/${activity.id}`}>
                <span className={`btn-primary__blue ${styles['view']}`}>
                  View
                </span>
              </Link>
              <span
                onClick={() => handleActivityDelete(activity.id)}
                className="btn-primary__red"
              >
                {(!loading || (loading && target !== activity.id)) && (
                  <span>Delete</span>
                )}
                {loading && target === activity.id && (
                  <Loader inline={true} content="Delete" />
                )}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});
