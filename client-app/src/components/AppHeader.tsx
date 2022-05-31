import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from '../stores/index';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/styles/AppHeader.module.scss';

export default observer(function AppHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { userStore: { user, logout } } = useStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (e.target !== dropdownRef.current && e.target !== dropdownRef.current?.children[0]) {
        setShowDropdown(false);
      }
    }

    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);
  }, [])

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

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
            <img
              src={require('../assets/images/logo.png')}
              alt="React Network Logo."
            />
            <h1>ReactNetwork</h1>
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
            to="/errors"
            className={styles['errors']}
            activeClassName="nav--link__errors"
          >
            Errors
          </NavLink>
        </li>
        <li className={styles['create-activity']}>
          <NavLink
            to="/create-activity"
            className="btn-primary btn-primary__green"
            activeClassName=""
          >
            Create Activity
          </NavLink>
        </li>
        <li className={styles['user']}>
          <img 
            src={user?.image || require('../assets/images/user.png')} alt="User."
          />
          <div ref={dropdownRef} onClick={() => toggleDropdown()} className={styles['dropdown']}>
            {user?.displayName} <FontAwesomeIcon icon={faCaretDown} />
          </div>
          {showDropdown && (
            <ul className={styles['dropdown-options']}>
              <li>
                <NavLink to={`/profile/${user?.username}`} activeClassName="">
                  <FontAwesomeIcon icon={faUser} /> My Profile
                </NavLink>
              </li>
              <li onClick={logout}><FontAwesomeIcon icon={faPowerOff} /> Logout</li>
            </ul>
          )}
        </li>
      </ul>
    </header>
  );
})
