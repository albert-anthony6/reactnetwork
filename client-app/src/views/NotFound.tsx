import React from 'react';
import styles from '../assets/styles/NotFound.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className={`page ${styles["not-found"]}`}>
            <div className={styles["content"]}>
                <FontAwesomeIcon icon={faSearch} />
                <h2>Oops - we've looked everywhere and could not find this.</h2>
                <Link to="/activities">
                <span className="btn-primary btn-primary__blue">Return to activities page</span>
                </Link>
            </div>
        </div>
    )
}