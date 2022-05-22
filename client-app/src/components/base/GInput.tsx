import React from 'react';
import { useField } from 'formik';
import styles from '../../assets/styles/Base.module.scss';

interface Props {
    placeholder: string;
    name: string;
    label?: string;
}

export default function GInput(props: Props) {
    const [field, meta] = useField(props.name);
    return (
        <div className={meta.touched && !!meta.error ? `${styles['g-input']} ${styles['g-input__error']}` : styles['g-input']}>
            <label>{props.label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <span className='btn-secondary'>{meta.error}</span>
            ) : null}
        </div>
    )
}