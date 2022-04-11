import React from 'react';
import { useStore } from '../stores';
import { NavLink } from 'react-router-dom';
import styles from '../assets/styles/AppHeader.module.scss';

export default function AppHeader() {
  const { activityStore } = useStore();

  return (
    <header className={styles['app-header']}>
      <ul>
        <li>
          <NavLink
            exact
            className={styles['logo']}
            activeClassName="nav--link"
            to="/"
          >
            <img src={require('../assets/images/logo.png')} alt="Logo." />
            <h2>ReactNetwork</h2>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/activities"
            className={styles['activities']}
            activeClassName="nav--link__activities"
          >
            Activities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create-activity"
            onClick={() => activityStore.openForm()}
            className="btn-primary__green"
            activeClassName=""
          >
            Create Activity
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
