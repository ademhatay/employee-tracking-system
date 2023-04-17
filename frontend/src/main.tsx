import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WelcomeScreen from './pages/WelcomeScreen'


const router = createBrowserRouter([
	{
		path: "/",
		element: <WelcomeScreen />,
	},
	{
		path: "/login",
		element: <>LOGİN</>
	},
	{
		path: "/register",
		element: <>REGISTER</>
	},
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<>
		<RouterProvider router={router} />
	</>
)
