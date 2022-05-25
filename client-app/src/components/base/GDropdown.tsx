import React, { useState } from 'react';
import { useField } from 'formik';
import {ReactComponent as CaratIcon} from '../../assets/icons/carat_icon.svg';
import {ReactComponent as XIcon} from '../../assets/icons/x_icon.svg';
import styles from '../../assets/styles/Base.module.scss';
import { useEffect } from 'react';

interface Props {
    placeholder: string;
    name: string;
    options: any;
    label?: string;
}

export default function GDropdown(props: Props) {
    const [active, setActive] = useState(false);
    const [menuOptions, setMenuOptions] = useState(props.options);
    const [search, setSearch] = useState('');
    const [selectedOption, setSelectedOption] = useState('Select a category');
    const [field, meta, helpers] = useField(props.name);

    useEffect(() => {
        // When the dropdown closes, clear the search input box
        if (!active && search) {
            setSearch('');
        }
        handleFilterChange();
    }, [active, search])

    function handleBlur(e: any) {
        helpers.setTouched(true)
        // If clicked amywhere outside of the element
        if (!e.currentTarget.contains(e.relatedTarget)) {
            if (active) setActive(false);
        }
    }

    function handleFilterFocus() {
        helpers.setTouched(false)
    }

    function handleFilterChange() {
        const filteredMenuOptions = props.options.filter((option: any) => {
            return option.value.toLowerCase().includes(search.toLowerCase())
        });
        setMenuOptions(filteredMenuOptions);
    }

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
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
                onBlur={(e) => handleBlur(e)}
            >
                <div className={styles['icon-container']}>
                    {!field.value && (
                        <CaratIcon
                            onClick={() => toggleActive()}
                            className={active ? `${styles['carat-icon']} ${styles['rotate']}` : styles['carat-icon']}
                        />
                    )}
                    {field.value && <XIcon onClick={() => clearSelection()} className={styles['x-icon']} />}
                </div>
                <div className={active ? `${styles['options-container']} ${styles['active']}` : `${styles['options-container']}`}>
                    {menuOptions.map((option: any, idx: number) => (
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
                    {field.value || selectedOption}
                </div>
                <div className={styles['search-box']}>
                    <input onChange={(e) => handleSearchChange(e)} onFocus={() => handleFilterFocus()} value={search} type="text" placeholder="Start Typing..." />
                </div>
            </div>
            {meta.touched && meta.error ? (
                <span className='btn-secondary'>{meta.error}</span>
            ) : null}
        </div>
    )
}