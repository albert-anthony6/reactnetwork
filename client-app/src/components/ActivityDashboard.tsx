import React from 'react';
import { Activity } from '../models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';
import styles from '../assets/styles/ActivityDashboard.module.scss';
import ActivityForm from './ActivityForm';

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  return (
    <div className={styles['activity-dashboard']}>
      <ActivityList activities={activities} />
      <div className={styles['dashboard-right']}>
        {activities[0] && <ActivityDetails activity={activities[0]} />}
        <ActivityForm />
      </div>
    </div>
  );
}
