import React, { useEffect } from 'react';
import ActivityList from './ActivityList';
import styles from '../assets/styles/ActivityDashboard.module.scss';
import Loader from '../components/Loader';
import { useStore } from '../stores';
import { observer } from 'mobx-react-lite';

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities, activityRegistry.size]);

  if (activityStore.loadingInitial)
    return <Loader content="Loading Activities" />;

  return (
    <div className={styles['activity-dashboard']}>
      <div className={styles['dashboard-left']}>
        <ActivityList />
      </div>
      <div className={styles['dashboard-right']}>
        <h2>Activity Filters</h2>
      </div>
    </div>
  );
});
