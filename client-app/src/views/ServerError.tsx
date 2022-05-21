import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from '../assets/styles/ServerError.module.scss';
import { useStore } from '../stores';

export default observer(function ServerError() {
    const {commonStore} = useStore();
    return (
        <div className={`page ${styles["server-error"]}`}>
            <h1>Server Error</h1>
            <h3>{commonStore.error?.message}</h3>
            {commonStore.error?.details &&
                <div className={styles["stack-trace"]}>
                    <h4>Stack trace</h4>
                    <p>{commonStore.error.details}</p>
                </div>
            }
        </div>
    )
})