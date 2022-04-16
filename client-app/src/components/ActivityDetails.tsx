import React, { useEffect } from 'react';
import Loader from '../components/Loader';
import styles from '../assets/styles/ActivityDetails.module.scss';
import { useStore } from '../stores';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <Loader />;

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
          <Link to={`/manage/${activity.id}`}>
            <span className={`${styles['edit']} btn-secondary`}>Edit</span>
          </Link>
          <Link to="/activities">
            <span className={`${styles['cancel']} btn-secondary`}>Cancel</span>
          </Link>
        </div>
      </div>
    </div>
  );
});
