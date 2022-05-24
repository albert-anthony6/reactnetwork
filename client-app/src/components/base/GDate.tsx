import React from 'react';
import { useField } from 'formik';
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';
import styles from '../../assets/styles/Base.module.scss';

export default function GDate(props: Partial<ReactDatePickerProps>) {
    const [field, meta, helpers] = useField(props.name!);
    return (
        <div className={meta.touched && !!meta.error ? `${styles['g-input']} ${styles['g-input__error']}` : styles['g-input']}>
            <DatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={(value) => helpers.setValue(value)}
            />
            {meta.touched && meta.error ? (
                <span className='btn-secondary'>{meta.error}</span>
            ) : null}
        </div>
    )
}