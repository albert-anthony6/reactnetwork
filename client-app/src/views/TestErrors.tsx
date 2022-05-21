import React from 'react';
import axios from 'axios';
import styles from '../assets/styles/TestErrors.module.scss';

export default function TestErrors() {
    const baseUrl = 'http://localhost:5000/api/'

    function handleNotFound() {
        axios.get(baseUrl + 'buggy/not-found').catch(err => console.log(err.response));
    }

    function handleBadRequest() {
        axios.get(baseUrl + 'buggy/bad-request').catch(err => console.log(err.response));
    }

    function handleServerError() {
        axios.get(baseUrl + 'buggy/server-error').catch(err => console.log(err.response));
    }

    function handleUnauthorised() {
        axios.get(baseUrl + 'buggy/unauthorised').catch(err => console.log(err.response));
    }

    function handleBadGuid() {
        axios.get(baseUrl + 'activities/notaguid').catch(err => console.log(err.response));
    }

    function handleValidationError() {
        axios.post(baseUrl + 'activities', {}).catch(err => console.log(err.response));
    }

    return (
        <div className={`page ${styles['test-errors']}`}>
            <div className={styles["content"]}>
                <h1>Test Error component</h1>
                <div className={styles['button-group']}>
                    <span onClick={handleNotFound} className="btn-secondary">Not Found</span>
                    <span onClick={handleBadRequest} className="btn-secondary">Bad Request</span>
                    <span onClick={handleValidationError} className="btn-secondary">Validation Error</span>
                    <span onClick={handleServerError} className="btn-secondary">Server Error</span>
                    <span onClick={handleUnauthorised} className="btn-secondary">Unauthorized</span>
                    <span onClick={handleBadGuid} className="btn-secondary">Bad Guid</span>
                </div>
            </div>
        </div>
    )
}