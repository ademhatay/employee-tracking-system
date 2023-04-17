import React, { FC } from 'react'
import Button from '../components/AppButton'
import { useNavigate } from "react-router-dom";

const WelcomeScreen: FC = () => {

	const navigate = useNavigate();

	return <>
		<div className='w-screen h-screen bg-color-1 flex flex-col'>
			<div className='wrapper flex flex-1 items-center justify-center'>
				<h1 className='text-white font-bold text-3xl md:text-5xl lg:text-8xl text-center'>
					Employee Management System
				</h1>
			</div>
			<div className='wrapper flex flex-1 pb-10'>
				<div className='flex flex-1 justify-center'>
					<Button onClick={() => navigate("/login")} className='w-10/12 bg-color-2 hover:bg-color-3 text-2xl md:text-5xl font-medium'>Login</Button>
				</div>
				<div className='flex flex-1 justify-center'>
					<Button onClick={() => navigate("/register")} className='w-10/12 bg-color-2 hover:bg-color-3 text-2xl md:text-5xl font-medium'>Register</Button>
				</div>
			</div>
		</div>
	</>
}

export default WelcomeScreen