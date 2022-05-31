import React from 'react';
import GInput from './base/GInput';
import { ErrorMessage, Form, Formik } from 'formik';
import { useStore } from '../stores';
import Loader from '../components/Loader';
import { observer } from 'mobx-react-lite';
import * as Yup from 'yup';
import styles from '../assets/styles/LoginForm.module.scss';

export default observer(function RegisterForm() {
    const {userStore} = useStore();
    return (
        <div className={styles['register-form']}>
            <h3>Sign up to ReactNetwork</h3>
            <Formik
                initialValues={{displayName: '', username: '', email: '', password: '', error: null}}
                onSubmit={(values, {setErrors}) => userStore.register(values).catch(() =>
                    setErrors({error: 'Invalid email or password'}))}
                validationSchema={Yup.object({
                    displayName: Yup.string().required(),
                    username: Yup.string().required(),
                    email: Yup.string().required().email(),
                    password: Yup.string().required(),
                })}
            >
                {({handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                    <Form onSubmit={handleSubmit} autoComplete="off">
                        <GInput name="displayName" placeholder="Display Name" />
                        <GInput name="username" placeholder="Username" />
                        <GInput name="email" placeholder="Email" />
                        <GInput name="password" placeholder="Password" type="password" />
                        <ErrorMessage 
                            name="error" render={() => <span className="btn-secondary btn-secondary__error">{errors.error}</span>}
                        />
                        <button
                            type="submit"
                            className={`${isSubmitting || !isValid || !dirty ? 'disabled btn-primary btn-primary__green' : 'btn-primary btn-primary__green'}`}
                        >
                            {!isSubmitting && <span>Register</span>}
                            {isSubmitting && <Loader inline={true} content="Register" />}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
})