import React, { FC, useEffect, useState } from 'react'
import Button from '../components/AppButton'
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import settings from '../constants/settings';
import { loginSchema } from './validations';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/slices/UserSlice';
import useIsLogin from '../hooks/isLogin';

const LoginScreen: FC = () => {

	const navigate = useNavigate();


	const dispatch = useDispatch<any>();

	const { user } = useSelector((state: any) => state.user);

	useIsLogin(user);



	const { handleChange, handleSubmit, handleBlur, values, isSubmitting, errors, touched } = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: async (values, { resetForm, setErrors }) => {
			dispatch(loginUser(values));
		},
		validationSchema: loginSchema
	});

	return <>
		<Helmet>
			<meta charSet="utf-8" />
			<title>Login - {settings.titleDash}</title>
			<link rel="canonical" href={settings.siteURL} />
		</Helmet>
		<div className='w-screen h-screen bg-color-1 flex flex-col'>
			<div className='wrapper flex flex-1 items-center justify-center'>
				<h1 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center'>
					Employee Management System - Login
				</h1>
			</div>
			<div className='wrapper flex flex-[3] items-center justify-start flex-col'>
				<form onSubmit={handleSubmit} className='w-8/12 md:6/12 lg:w-5/12'>
					<div className='flex flex-col my-5'>
						<label className='text-white font-medium text-base md:text-lg mb-1'>Email</label>
						<input
							value={values.email}
							onChange={handleChange('email')}
							disabled={isSubmitting}
							onBlur={handleBlur('email')}
							className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none'
							type='email'
							autoComplete='off' />
						{
							errors.email && touched.email && (
								<div className='text-red-500 text-sm font-medium'>{errors.email}</div>
							)
						}
					</div>
					<div className='flex flex-col my-5'>
						<label className='text-white font-medium text-base md:text-lg mb-1'>Password</label>
						<input
							value={values.password}
							onChange={handleChange('password')}
							disabled={isSubmitting}
							onBlur={handleBlur('password')}
							className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none'
							type='password'
							autoComplete='off' />
						{
							errors.password && touched.password && (
								<div className='text-red-500 text-sm font-medium'>{errors.password}</div>
							)
						}
					</div>
					<div className='flex flex-col my-5'>
						<Button onClick={() => handleSubmit} className='w-full bg-color-3 hover:bg-color-4 text-lg md:text-xl font-medium'>Login</Button>
					</div>
				</form>
				<div>
					<p className='text-white font-medium text-base md:text-lg mb-3 tracking-wider'>Don't have an account?</p>
					<Button onClick={() => navigate('/register')} className='w-full bg-color-3 hover:bg-color-4 text-base md:text-lg font-medium'>Create Account</Button>
				</div>
			</div>
		</div>
	</>
}

export default LoginScreen