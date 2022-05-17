import React, { Fragment } from 'react';
import styles from '../../assets/styles/ActivityList.module.scss';
import { useStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <div key={group} className={styles['activity-list-container']}>
          <h5 className="subheader">{group}</h5>
          <div className={styles['activity-list']}>
            {activities.map((activity) => (
              <div className={styles['item-container']}>
                <ActivityListItem key={activity.id} activity={activity} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
});
