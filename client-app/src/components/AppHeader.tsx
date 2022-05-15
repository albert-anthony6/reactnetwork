import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../assets/styles/AppHeader.module.scss';

export default function AppHeader() {
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
            className="btn-primary btn-primary__green"
            activeClassName=""
          >
            Create Activity
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
