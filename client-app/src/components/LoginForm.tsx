import React from 'react';
import GInput from './base/GInput';
import { ErrorMessage, Form, Formik } from 'formik';
import { useStore } from '../stores';
import Loader from '../components/Loader';
import styles from '../assets/styles/LoginForm.module.scss';
import { observer } from 'mobx-react-lite';

export default observer(function LoginForm() {
    const {userStore} = useStore();
    return (
        <div className={`page ${styles['login-form']}`}>
            <Formik
                initialValues={{email: '', password: '', error: null}}
                onSubmit={(values, {setErrors}) => userStore.login(values).catch(() =>
                    setErrors({error: 'Invalid email or password'}))}
            >
                {({handleSubmit, isSubmitting, errors}) => (
                    <Form onSubmit={handleSubmit} autoComplete="off">
                        <GInput name="email" placeholder="Email" />
                        <GInput name="password" placeholder="Password" type="password" />
                        <ErrorMessage 
                            name="error" render={() => <span className="btn-secondary btn-secondary__error">{errors.error}</span>}
                        />
                        <button type="submit" className="btn-primary btn-primary__green">
                            {!isSubmitting && <span>Login</span>}
                            {isSubmitting && <Loader inline={true} content="Login" />}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
})