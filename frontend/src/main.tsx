import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Welcome, Login, Register, Home } from './pages'
import { Provider } from 'react-redux'
import store from './store/store'

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
		element: <Home />,
	},
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</>
)
