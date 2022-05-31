import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores';
import LoginForm from '../components/LoginForm';
import styles from '../assets/styles/Home.module.scss';
import RegisterForm from '../components/RegisterForm';

export default observer(function Home() {
  const { userStore, modalStore } = useStore();
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
        <>
          <span onClick={() => modalStore.openModal(<LoginForm />)}
            className="btn-secondary btn-secondary__white"
          >
            Login!
          </span>
          <span onClick={() => modalStore.openModal(<RegisterForm />)}
            className="btn-secondary btn-secondary__white"
          >
            Register!
          </span>
        </>
      )}
    </div>
  );
})
