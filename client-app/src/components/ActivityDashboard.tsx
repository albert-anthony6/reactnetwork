import React, { useEffect } from 'react';
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';
import styles from '../assets/styles/ActivityDashboard.module.scss';
import ActivityForm from './ActivityForm';
import Loader from '../components/Loader';
import { useStore } from '../stores';
import { observer } from 'mobx-react-lite';

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <Loader />;

  return (
    <div className={styles['activity-dashboard']}>
      <ActivityList />
      <div className={styles['dashboard-right']}>
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />}
      </div>
    </div>
  );
});
