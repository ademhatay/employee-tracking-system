import React, { FC } from 'react'
import Button from '../components/AppButton'
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import settings from '../constants/settings';

const WelcomeScreen: FC = () => {

	const navigate = useNavigate();
	return <>
		<Helmet>
			<meta charSet="utf-8" />
			<title>Welcome - {settings.titleDash}</title>
			<meta name="description" content="Welcome to Employee Management System" />
			<link rel="canonical" href={settings.siteURL} />
		</Helmet>
		<div className='w-screen h-screen bg-color-1 flex flex-col'>
			<div className='wrapper flex flex-1 items-center justify-center'>
				<h1 className='text-white font-bold text-3xl md:text-5xl text-center'>
					Employee Management System
				</h1>
			</div>
			<div className='wrapper flex flex-1 pb-10 flex-col md:flex-row'>
				<div className='flex flex-1 justify-center'>
					<Button onClick={() => navigate("/login")} className='w-10/12 bg-color-3 hover:bg-color-4 text-2xl md:text-5xl font-medium border-b-2 rounded-none rounded-t-md'>
						Login
					</Button>
				</div>
				<div className='flex flex-1 justify-center'>
					<Button onClick={() => navigate("/register")} className='w-10/12 bg-color-3 hover:bg-color-4 text-2xl md:text-5xl font-medium  rounded-none rounded-b-md border-t-2'>Register</Button>
				</div>
			</div>
		</div>
	</>
}

export default WelcomeScreen