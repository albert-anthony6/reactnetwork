import React from 'react';
import styles from '../assets/styles/AppHeader.module.scss';

interface Props {
  openForm: () => void;
}

export default function AppHeader({ openForm }: Props) {
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
          <div onClick={openForm} className="btn-primary__green">
            Create Activity
          </div>
        </li>
      </ul>
    </header>
  );
}
