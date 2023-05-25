import React, { FC, useState } from 'react'
import Button from '../components/AppButton'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import settings from '../constants/settings';
import { useFormik } from 'formik';
import { registerSchema } from './validations';

const RegisterScreen: FC = () => {

	const navigate = useNavigate();

	const register = async (values: any) => {
		const res = await fetch("http://localhost:5000/api/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				'Accept': 'application/json'
			},
			body: JSON.stringify(values)
		})
		const data = await res.json()
		try {
			if (data) {
				localStorage.setItem("user", JSON.stringify(data.user))
				navigate("/home")
			} else {
				console.log(data);
			}
		} catch (error) {
			alert(error)
		}
	}

	const { handleChange, handleSubmit, handleBlur, values, isSubmitting, errors, touched } = useFormik({
		initialValues: {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			confirmPassword: "",
			birthdate: "",
			occupation: "",
		},
		onSubmit: async (values, { resetForm, setErrors }) => {

			console.log(values);
			register(values);
			resetForm();
		},
		validationSchema: registerSchema
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
									value={values.first_name}
									onChange={handleChange('first_name')}
									disabled={isSubmitting}
									onBlur={handleBlur('first_name')}
									className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none'
									type='text'
									autoComplete='on'
								/>
								{errors.first_name && touched.first_name && <p className="text-red-500">{errors.first_name}</p>}
							</div>
						</div>
						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Last Name</label>
								<input
									value={values.last_name}
									onChange={handleChange('last_name')}
									disabled={isSubmitting}
									onBlur={handleBlur('last_name')}
									className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='text' autoComplete='on' />
								{errors.last_name && touched.last_name && <p className="text-red-500">{errors.last_name}</p>}

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
									className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='email' autoComplete='on' />
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
									className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='password' autoComplete='on' />
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
									className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='password' autoComplete='on' />
								{errors.confirmPassword && touched.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
							</div>
						</div>

						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Birthdate</label>
								<input
									value={values.birthdate}
									onChange={handleChange('birthdate')}
									disabled={isSubmitting}
									onBlur={handleBlur('birthdate')}
									className='bg-white w-full text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='date' autoComplete='on' />
								{errors.birthdate && touched.birthdate && <p className="text-red-500">{errors.birthdate}</p>}
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
							disabled={isSubmitting}
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