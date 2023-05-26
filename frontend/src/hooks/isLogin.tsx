import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useIsLogin = (user: any) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate('/home');
		} else {
			navigate('/login');
		}
	}, [user, navigate]);
};

export default useIsLogin;
