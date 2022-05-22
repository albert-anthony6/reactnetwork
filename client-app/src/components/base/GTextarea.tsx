import React from 'react';
import { useField } from 'formik';
import styles from '../../assets/styles/Base.module.scss';

interface Props {
    placeholder: string;
    name: string;
    rows: number;
    label?: string;
}

export default function GTextarea(props: Props) {
    const [field, meta] = useField(props.name);
    return (
        <div className={meta.touched && !!meta.error ? `${styles['g-textarea']} ${styles['g-textarea__error']}` : styles['g-textarea']}>
            <label>{props.label}</label>
            <textarea {...field} {...props} />
            {meta.touched && meta.error ? (
                <span className='btn-secondary'>{meta.error}</span>
            ) : null}
        </div>
    )
}