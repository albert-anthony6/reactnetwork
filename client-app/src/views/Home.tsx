import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores';
import styles from '../assets/styles/Home.module.scss';

export default observer(function Home() {
  const {userStore} = useStore();
  return (
    <div className={`page ${styles['home']}`}>
      <div className={styles['logo']}>
        <img
          src={require('../assets/images/logo.png')}
          alt="React Network Logo."
        />
        <h2>ReactNetwork</h2>
      </div>
      {userStore.isLoggedIn ? (
        <>
          <h5>Welcome to ReactNetwork</h5>
          <Link to="/activities" className="btn-secondary btn-secondary__white">
            Go to Activities!
          </Link>
        </>
      ) : (
        <Link to="/login" className="btn-secondary btn-secondary__white">
          Login!
        </Link>
      )}
    </div>
  );
})
