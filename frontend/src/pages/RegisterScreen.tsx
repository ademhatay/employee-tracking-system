import React, { FC } from 'react'
import Button from '../components/AppButton'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import settings from '../constants/settings'


const RegisterScreen: FC = () => {

	const navigate = useNavigate();

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
				<form className='w-10/12 md:9/12 lg:w-8/12 h-full'>
					<div className='grid grid-cols-2'>
						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>First Name</label>
								<input className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='text' autoComplete='off' />
							</div>
						</div>
						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Last Name</label>
								<input className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='text' autoComplete='off' />
							</div>
						</div>
						<div className='col-span-2 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Email</label>
								<input className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='email' autoComplete='off' />
							</div>
						</div>
						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Password</label>
								<input className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='password' autoComplete='off' />
							</div>
						</div>

						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Password Confirm</label>
								<input className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='password' autoComplete='off' />
							</div>
						</div>

						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Birthdate</label>
								<input className='bg-white w-full text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none' type='date' autoComplete='off' />
							</div>
						</div>

						<div className='col-span-2 md:col-span-1 px-5'>
							<div className='flex flex-col my-3'>
								<label className='text-white font-medium text-base md:text-lg mb-1'>Occupation</label>
								<select className='bg-white text-color-6 text-lg md:text-xl font-medium rounded-md p-2 border-0 outline-none'>
									<option value=''>Select</option>
									<option value='1'>Developer</option>
									<option value='2'>Designer</option>
									<option value='3'>Manager</option>
								</select>
							</div>
						</div>
						<Button className='col-span-2 bg-color-3 hover:bg-color-4 text-base md:text-lg font-medium mt-4 mb-5'>Register</Button>
					</div>
				</form>
				<div>
					<p className='text-white font-medium text-base md:text-lg mb-3 tracking-wider'>Already have an account?</p>
					<Button onClick={() => navigate("/login")} className='w-full bg-color-3 hover:bg-color-4 text-base md:text-lg font-medium'>Login</Button>
				</div>
			</div>
		</div>
	</>
}

export default RegisterScreen