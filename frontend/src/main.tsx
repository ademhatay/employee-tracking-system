import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Welcome, Login, Register } from './pages'



const router = createBrowserRouter([
	{
		path: "/",
		element: <Welcome />,
	},
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "register",
		element: <Register />,
	},
	{
		path: "home",
		element: <>HOME</>,
	},
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<>
		<RouterProvider router={router} />
	</>
)
