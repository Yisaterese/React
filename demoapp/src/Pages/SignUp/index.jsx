import React, { useState } from 'react';
import PageTemplate from '../../Component/PageTemplate';
import image from '../../assets/signUp.png';
import style from './index.module.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Icon } from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';

const SignUpPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Must be a valid email Address')
            .required('Email Address is required'),
        password: Yup.string()
            .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/, 'Password must contain alpha-numeric, upper case, lower case, and special characters.')
            .required('Password is required'),
        userName: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces')
            .required('Username is required')
    });

    const handleRegistration = async (values, { resetForm }) => {
        setIsLoading(true);
        try {
            const payload = {
                email: values.email,
                password: values.password,
                userName: values.userName
            };
            const response = await axios.post("http://localhost:2333/api/registerUser", payload);
          console.log( response)
            if (response.data.successful) {
                toast.success(`Hi ${values.userName}, You are now a user`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                resetForm();
            } else {
                toast.error('Registration failed. Please try again', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            console.error('Error during Registration:', error);
            toast.error('Registration failed. Please try again', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <PageTemplate
                form={
                    <Formik
                        initialValues={{email: '', password: '', userName: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleRegistration}
                    >
                        {({ values, errors, touched, handleChange, handleBlur }) => (
                            <Form>
                                <div className={style.inputTag}>
                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    style={{
                                                        borderColor: errors.email && touched.email ? 'red' : 'inherit',
                                                    }}
                                                />
                                                {errors.email && touched.email&& (
                                                    <div className={style.error}>{errors.email}</div>
                                                )}
                                            </div>
                                            <div>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder="Enter password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    style={{
                                                        borderColor: errors.password && touched.password ? 'red' : 'inherit',
                                                    }}
                                                />
                                                {errors.password && touched.password && (
                                                    <div className={style.error}>{errors.password}</div>
                                                )}
                                            </div>
                                            <div>
                                                <Field
                                                    type="userName"
                                                    name="userName"
                                                    placeholder="Enter userName"
                                                    value={values.userName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    style={{
                                                        borderColor: errors.userName && touched.userNamae? 'red' : 'inherit',
                                                    }}
                                                />
                                                {errors.userName && touched.userName && (
                                                    <div className={style.error}>{errors.userName}</div>
                                                )}
                                            </div>
                                            <div className={style.btn}>
                                                <button type="submit" className={style.btn}>
                                                    {isLoading ? (
                                                        <div className="flex items-center justify-center">
                                                            <Icon width={24} height={24} icon={loadingLoop} />
                                                        </div>
                                                    ) : (
                                                        'Submit'
                                                    )}
                                                </button>
                                            </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                }
                image={image}
                headerName={"Welcome!"}
                message={"Sign up by entering the information below"}
                heading={"Sign Up"}
                buttonText={"Sign-up"}
                headerClassName={style.header}
                messageClassName={style.message}
                reminder2={"Log in"}
                reminder1={"Already have an account?"}
            />
            <ToastContainer />
        </>
    );
};

export default SignUpPage;
