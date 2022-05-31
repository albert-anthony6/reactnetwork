import React, { useEffect } from 'react';
import ActivityList from '../components/activities/ActivityList';
import ActivityFilters from '../components/activities/ActivityFilters';
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
    return <Loader content="Loading activities..." />;

  return (
    <div className={`page ${styles['activity-dashboard']}`}>
      <div className={styles['dashboard-left']}>
        <ActivityList />
      </div>
      <div className={styles['dashboard-right']}>
        <ActivityFilters />
      </div>
    </div>
  );
});
