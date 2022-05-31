import React from 'react';
import styles from '../assets/styles/ValidationErrors.module.scss';

interface Props {
    errors: any,
}

export default function ValidationErrors({errors}: Props) {
    return (
        <div className={styles["validation-errors"]}>
            {errors && (
                <ul className={styles['error-list']}>
                    {errors.map((err: any, i: any) => (
                        <li key={i}>&#8226; {err}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}