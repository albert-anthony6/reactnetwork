import React from 'react';
import Loader from '../components/Loader';
import styles from '../assets/styles/ActivityDetails.module.scss';
import { useStore } from '../stores';

export default function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;

  if (!activity) return <Loader />;

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
          <div
            onClick={() => openForm(activity.id)}
            className={`${styles['edit']} btn-secondary`}
          >
            Edit
          </div>
          <div
            onClick={cancelSelectedActivity}
            className={`${styles['cancel']} btn-secondary`}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}
