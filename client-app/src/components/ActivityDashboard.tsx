import React from 'react';
import { Activity } from '../models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';
import styles from '../assets/styles/ActivityDashboard.module.scss';
import ActivityForm from './ActivityForm';

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
}

export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
}: Props) {
  return (
    <div className={styles['activity-dashboard']}>
      <ActivityList activities={activities} selectActivity={selectActivity} />
      <div className={styles['dashboard-right']}>
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm closeForm={closeForm} activity={selectedActivity} />
        )}
      </div>
    </div>
  );
}
