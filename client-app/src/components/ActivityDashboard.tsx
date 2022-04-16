import React, { useEffect } from 'react';
import ActivityList from './ActivityList';
import styles from '../assets/styles/ActivityDashboard.module.scss';
import Loader from '../components/Loader';
import { useStore } from '../stores';
import { observer } from 'mobx-react-lite';

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <Loader />;

  return (
    <div className={styles['activity-dashboard']}>
      <ActivityList />
      <div className={styles['dashboard-right']}>
        <h2>Activity Filters</h2>
      </div>
    </div>
  );
});
