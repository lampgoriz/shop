import React, {useState} from "react";
import {AuthAPI} from "../../sevices/AuthService";
import {Form, Formik} from "formik";
import * as yup from 'yup'
import {useNavigate} from "react-router";
import {setAuthToken} from "../../store/profileSlice";
import {useAppDispatch} from "../../hooks/redux";
import {ProfileAPI} from "../../sevices/ProfileService";


export const Auth = () => {

    const [setAuth, {isLoading, isError, isSuccess, data}] = AuthAPI.useGetAuthMutation()
    const {data: users} = ProfileAPI.useFetchAllUsersQuery('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    if (isSuccess && data) {
        dispatch(setAuthToken(data.token))
        navigate('/profile', {state: {username, users}})
    }

    const validationSchema = yup.object().shape({
        username: yup.string().typeError('Must to be string').required('Required'),
        password: yup.string().typeError('Must to be string').required('Required')
    })


    return (
        <div className='container'>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validateOnBlur
                onSubmit={(values, {setSubmitting, setStatus}) => {
                    setAuth({username: values.username, password: values.password})
                    setUsername(values.username)
                    setSubmitting(false)
                }}
                validationSchema={validationSchema}
            >

                {({
                      values, errors, touched,
                      handleChange, handleBlur,
                      isValid, handleSubmit, dirty, isSubmitting, status
                  }) => (
                    <Form>
                        <label htmlFor='username'>Email</label>
                        <input
                            type="text"
                            name='username'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                        />
                        {touched.username && errors.username && <p>{errors.username}</p>}

                        <label htmlFor='password'>Password</label>
                        <input
                            type="password"
                            name='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {touched.password && errors.password && <p>{errors.password}</p>}

                        <button
                            disabled={!isValid && !dirty || isSubmitting}
                            // onClick={() => handleSubmit}
                            type='submit'
                        >Log in
                        </button>
                        {status && <div>{status}</div>}
                    </Form>
                )}

            </Formik>
        </div>
    )
}