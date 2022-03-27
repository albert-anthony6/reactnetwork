import React from 'react';
import { useStore } from '../stores';
import styles from '../assets/styles/AppHeader.module.scss';

export default function AppHeader() {
  const { activityStore } = useStore();

  return (
    <header className={styles['app-header']}>
      <ul>
        <li className={styles['logo']}>
          <img src={require('../assets/images/logo.png')} alt="Logo." />
          <h2>ReactNetwork</h2>
        </li>
        <li>
          <a href="#">Activities</a>
        </li>
        <li>
          <div
            onClick={() => activityStore.openForm()}
            className="btn-primary__green"
          >
            Create Activity
          </div>
        </li>
      </ul>
    </header>
  );
}
