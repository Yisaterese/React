import React, { useState } from 'react';
import PageTemplate from "../../Component/PageTemplate";
import image from "../../assets/login.png";
import style from "./index.module.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Icon } from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';
import image1 from "../../assets/Vector.png";
import image2 from "../../assets/Vector1.png";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });

    const handleLogin = async (values, { resetForm }) => {
        setIsLoading(true);
        try {
            const payload = {
                username: values.username,
                password: values.password,
            };
            const response = await axios.post(" http://localhost:2333/api/login_user", payload);

            if (response.data.success) {
                toast.success(`Welcome back, ${values.username}!`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                resetForm();
            } else {
                toast.error('Login failed. Please try again', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('Login failed. Please try again', {
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
                        initialValues={{ username: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        {({ values, errors, touched, handleChange, handleBlur }) => (
                            <Form>
                                <div className={style.inputSection}>
                                    <div>
                                        <Field
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={style.collectInput}
                                            style={{
                                                borderColor: errors.username && touched.username ? 'red' : 'inherit',
                                            }}
                                        />
                                        {errors.username && touched.username && (
                                            <div className={style.error}>{errors.username}</div>
                                        )}
                                    </div>
                                    <div>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={style.collectInput}
                                            style={{
                                                borderColor: errors.password && touched.password ? 'red' : 'inherit',
                                            }}
                                        />
                                        {errors.password && touched.password && (
                                            <div className={style.error}>{errors.password}</div>
                                        )}
                                    </div>

                                        <div className={style.pTag}>
                                            <p>"Forgot password?"</p>
                                            <p>"Remember me"</p>
                                        </div>

                                    <div className={style.buttonTag}>
                                        <button type="submit" className={style.btn}>
                                            {isLoading ? (
                                                <div className="flex items-center justify-center">
                                                    <Icon width={24} height={24} icon={loadingLoop} />
                                                </div>
                                            ) : (
                                                'Login'
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                }
                image={image}
                image1={image1}
                image2={image2}
                headerName={"Welcome back"}
                message={"Log into your Dashboard"}
                headerClassName={style.header}
                messageClassName={style.message}
                signUpLink={"Sign up"}
                question={"Don't have an account?"}
            />
            <ToastContainer />
        </>
    );
};

export default Login;
