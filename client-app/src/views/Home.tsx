import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={`page ${styles['home']}`}>
      <div className={styles['logo']}>
        <img
          src={require('../assets/images/logo.png')}
          alt="React Network Logo."
        />
        <h2>ReactNetwork</h2>
      </div>
      <h5>Welcome to ReactNetwork</h5>
      <Link to="/activities" className="btn-secondary btn-secondary__white">
        Take me to the Activities!
      </Link>
    </div>
  );
}
