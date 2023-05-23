import React, { FC, useState } from 'react'
import Button from '../components/AppButton'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import settings from '../constants/settings';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import validationSchema from "./validations";

const userSchema = Yup.object().shape({
	firstName: Yup.string().required('First Name is required'),
	lastName: Yup.string().required('Last Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string().required('Password is required'),
	confirmPassword: Yup.string().required('Confirm Password is required'),
	birthdate: Yup.string().required('Birthdate is required'),
	occupation: Yup.string().required('Occupation is required'),
});

const RegisterScreen: FC = () => {

	const navigate = useNavigate();

	const { handleChange, handleSubmit, handleBlur, values, isSubmitting, errors, touched } = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			birdhdate: "",
			occupation: "",
		},
		onSubmit: async (values, { resetForm, setErrors }) => {
			await new Promise((r) => setTimeout(r, 1000));
			if (values.email === "test@test.com") {
				return setErrors({ email: "Bu Email Zaten kullanımda" })
			}
			console.log(values);
			resetForm();
		},
		validationSchema,
	});


	return <>
		<Helmet>
			<meta charSet="utf-8" />
			<title>Register - {settings.titleDash}</title>
			<link rel="canonical" href={settings.siteURL} />
		</Helmet>
		<div className='w-screen min-h-screen bg-color-1 flex flex-col pb-10 md:pb-0'>
			<div className='wrapper flex flex-1 items-center justify-center'>
				<h1 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center'>
					Employee Management System - Register
				</h1>
			</div>
			<div className='wrapper flex flex-[3] items-center justify-start flex-col'>
				<form
					onSubmit={handleSubmit}
					className='w-10/12 md:9/12 lg:w-8/12 h-full'>
					<div className='grid grid-cols-2'>
						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>First Name</label>
								<input
									value={values.firstName}
									onChange={handleChange('firstName')}
									disabled={isSubmitting}
									onBlur={handleBlur('firstName')}
									className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none'
									type='text'
									autoComplete='off'
								/>
								{errors.firstName && touched.firstName && <p className="text-red-500">{errors.firstName}</p>}
							</div>
						</div>
						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Last Name</label>
								<input
									value={values.lastName}
									onChange={handleChange('lastName')}
									disabled={isSubmitting}
									onBlur={handleBlur('lastName')}
									className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='text' autoComplete='off' />
								{errors.lastName && touched.lastName && <p className="text-red-500">{errors.lastName}</p>}

							</div>
						</div>
						<div className='col-span-2 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Email</label>
								<input
									value={values.email}
									onChange={handleChange('email')}
									disabled={isSubmitting}
									onBlur={handleBlur('email')}
									className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='email' autoComplete='off' />
								{errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}
							</div>
						</div>
						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Password</label>
								<input
									value={values.password}
									onChange={handleChange('password')}
									disabled={isSubmitting}
									onBlur={handleBlur('password')}
									className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='password' autoComplete='off' />
								{errors.password && touched.password && <p className="text-red-500">{errors.password}</p>}
							</div>
						</div>

						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Password Confirm</label>
								<input
									value={values.confirmPassword}
									onChange={handleChange('confirmPassword')}
									disabled={isSubmitting}
									onBlur={handleBlur('confirmPassword')}
									className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='password' autoComplete='off' />
								{errors.confirmPassword && touched.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
							</div>
						</div>

						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Birthdate</label>
								<input
									value={values.birdhdate}
									onChange={handleChange('birdhdate')}
									disabled={isSubmitting}
									onBlur={handleBlur('birdhdate')}
									className='bg-white w-full text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='date' autoComplete='off' />
								{errors.birdhdate && touched.birdhdate && <p className="text-red-500">{errors.birdhdate}</p>}
							</div>
						</div>

						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Occupation</label>
								<select
									value={values.occupation}
									onChange={handleChange('occupation')}
									disabled={isSubmitting}
									onBlur={handleBlur('occupation')}
									className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none'>
									<option value=''>Select</option>
									<option value='1'>Developer</option>
									<option value='2'>Designer</option>
									<option value='3'>Manager</option>
								</select>
								{errors.occupation && touched.occupation && <p className="text-red-500">{errors.occupation}</p>}
							</div>
						</div>
						<Button
							type='submit'
							className='col-span-2 bg-color-3 hover:bg-color-4 text-base md:text-lg font-medium mt-4 mb-5'>Register</Button>
					</div>
				</form>
				<div>
					<p className='text-white font-medium text-base md:text-lg mb-3 tracking-wider'>Already have an account?</p>
					<Button
						onClick={() => navigate('/login')}
						className='w-full bg-color-3 hover:bg-color-4 text-base md:text-lg font-medium'>Login</Button>
				</div>
			</div>
		</div >
	</>
}

export default RegisterScreen