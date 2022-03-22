import React from 'react';
import { Activity } from '../models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';
import styles from '../assets/styles/ActivityDashboard.module.scss';

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  return (
    <div className={styles['activity-dashboard']}>
      <ActivityList activities={activities} />
      {activities[0] && <ActivityDetails activity={activities[0]} />}
    </div>
  );
}
