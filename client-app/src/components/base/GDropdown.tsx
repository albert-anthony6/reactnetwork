import React, { useState } from 'react';
import { useField } from 'formik';
import {ReactComponent as CaratIcon} from '../../assets/icons/carat_icon.svg';
import {ReactComponent as XIcon} from '../../assets/icons/x_icon.svg';
import styles from '../../assets/styles/Base.module.scss';

interface Props {
    placeholder: string;
    name: string;
    options: any;
    label?: string;
}

export default function GDropdown(props: Props) {
    const [active, setActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select a category');
    const [field, meta, helpers] = useField(props.name);

    function handleBlur() {
        helpers.setTouched(true)
        if (active) setActive(false);
    }

    function toggleActive() {
        setActive(!active);
    }

    function selectOption(option: any) {
        setSelectedOption(option.text);
        helpers.setValue(option.value);
        if (active) setActive(false);
    }

    function clearSelection() {
        setSelectedOption('Select a category');
        helpers.setValue('');
    }

    return (
        <div className={meta.touched && !!meta.error ? `${styles['g-dropdown']} ${styles['g-dropdown__error']}` : styles['g-dropdown']}>
            <label>{props.label}</label>
            <div
                className={styles['select-box']}
                tabIndex={0}
                onBlur={() => handleBlur()}
            >
                <div className={styles['icon-container']}>
                    {!field.value && <CaratIcon onClick={() => toggleActive()} className={active ? `${styles['carat-icon']} ${styles['rotate']}` : styles['carat-icon']} />}
                    {field.value && <XIcon onClick={() => clearSelection()} className={styles['x-icon']} />}
                </div>
                <div className={active ? `${styles['options-container']} ${styles['active']}` : `${styles['options-container']}`}>
                    {props.options.map((option: any, idx: number) => (
                        <div onClick={() => selectOption(option)} className={styles['option']}  key={`category-${idx}`}>
                            <input type="radio" className={styles['radio']} id={option.value} name="category" />
                            <label htmlFor={option.value}>{option.text}</label>
                        </div>
                    ))}
                </div>
                <div
                    onClick={() => toggleActive()}
                    className={field.value ? `${styles['selected']}` : `${styles['selected']} ${styles['placeholder-text']}`}
                >
                    {selectedOption}
                </div>
            </div>
            {meta.touched && meta.error ? (
                <span className='btn-secondary'>{meta.error}</span>
            ) : null}
        </div>
    )
}