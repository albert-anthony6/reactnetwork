import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from '../../../assets/styles/ActivityDetailedHeader.module.scss';
import { Activity } from '../../../models/activity';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

interface Props {
  activity: Activity;
}

export default observer(function ActivityDetailedHeader({ activity }: Props) {
  return (
    <div className={styles['activity-detailed-header']}>
      <img
        src={require(`../../../assets/images/category-images/${activity.category}.jpg`)}
        alt="Activity Details."
      />
      <div className={styles['content']}>
        <h5>{activity.title}</h5>
        <p>{format(activity.date!, 'dd MMM yyyy')}</p>
        <p>
          Hosted by <strong>Bob</strong>
        </p>
      </div>
      <div className={styles['bottom']}>
        <div>
          <span className={`btn-primary btn-primary__teal ${styles['join']}`}>
            Join Activity
          </span>
          <span className="btn-secondary btn-secondary__filled">
            Cancel attendance
          </span>
        </div>
        <Link to={`/manage/${activity.id}`}>
          <span className="btn-primary btn-primary__orange">Manage Event</span>
        </Link>
      </div>
    </div>
  );
});
