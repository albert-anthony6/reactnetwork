import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import styles from '../assets/styles/ActivityList.module.scss';
import { Link } from 'react-router-dom';
import { Activity } from '../models/activity';
import { useStore } from '../stores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons';

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;

  const [target, setTarget] = useState('');

  useEffect(() => {
    if (target) {
      deleteActivity(target);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  function handleActivityDelete(id: string) {
    setTarget(id);
  }

  return (
    <div className={styles['item']}>
      <div className={styles['header']}>
        <img
          src={require('../assets/images/user.png')}
          className={styles['user-image']}
          alt="User profile."
        />
        <div className={styles['header-content']}>
          <h5>{activity.title}</h5>
          <p>Hosted by Bob</p>
        </div>
      </div>
      <div className={styles['info']}>
        <p className={styles['date']}>
          <FontAwesomeIcon icon={faClock} />
          {activity.date}
        </p>
        <p>
          <FontAwesomeIcon icon={faLocationPin} />
          {activity.venue}
        </p>
      </div>
      <div className={styles['attendees']}>Attendees go here</div>
      <div className={styles['list-bottom']}>
        <p>{activity.description}</p>
        <Link to={`/activities/${activity.id}`}>
          <span className={`btn-primary btn-primary__teal ${styles['view']}`}>
            View
          </span>
        </Link>
        {/* <span className={`${styles['category']} btn-secondary`}>
          {activity.category}
        </span> */}
        {/* <div className={styles['action-btns']}>
          <Link to={`/activities/${activity.id}`}>
            <span className={`btn-primary btn-primary__blue ${styles['view']}`}>
              View
            </span>
          </Link>
          <span
            onClick={() => handleActivityDelete(activity.id)}
            className="btn-primary btn-primary__red"
          >
            {(!loading || (loading && target !== activity.id)) && (
              <span>Delete</span>
            )}
            {loading && target === activity.id && (
              <Loader inline={true} content="Delete" />
            )}
          </span>
        </div> */}
      </div>
    </div>
  );
}
