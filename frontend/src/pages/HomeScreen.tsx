import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import QRCodeComponent from '../components/QrCodeComponent';
import useIsLogin from '../hooks/isLogin';
import Button from '../components/AppButton';
import { useDispatch } from 'react-redux';
import { saveCheckInOut } from '../store/slices/CheckSlices';
import { useNavigate } from 'react-router-dom';
import CheckInOut from '../components/CheckInOut';
import { logoutUser } from '../store/slices/UserSlice';

interface Props {
	// props here
}

const HomeScreen: React.FC<Props> = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch<any>();
	const { user } = useSelector((state: any) => state.user);

	useEffect(() => {
		if (user) {
			dispatch(saveCheckInOut(user?.user?.id));
		} else {
			navigate('/login');
		}
	}, [user, dispatch]);

	const { checkInOut, error } = useSelector((state: any) => state.check);


	const [showQR, setShowQR] = useState({
		checkIn: false,
		checkOut: false
	});

	useIsLogin(user)

	const userToCheckOut = user?.user?.id;

	const lastCheckIn = checkInOut.filter((item: any) => item.user_id === userToCheckOut).sort((a: any, b: any) => b.id - a.id)[0];


	return <>
		{
			user?.user && <div>
				<h1 className="text-xl text-center">Welcome {user?.user?.first_name}</h1>
				<table className="table-auto">
					<thead>
						<tr>
							<th className="px-4 py-2">user_id</th>
							<th className="px-4 py-2">birthdate</th>
							<th className="px-4 py-2">email</th>
							<th className="px-4 py-2">first_name</th>
							<th className="px-4 py-2">last_name</th>
							<th className="px-4 py-2">role</th>
							<th className="px-4 py-2">occupation</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border px-4 py-2">{user?.user?.id}</td>
							<td className="border px-4 py-2">{new Date(user?.user?.birthdate).toLocaleString(
								'tr-TR',
								{
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								}
							)}</td>
							<td className="border px-4 py-2">{user?.user?.email}</td>
							<td className="border px-4 py-2">{user?.user?.first_name}</td>
							<td className="border px-4 py-2">{user?.user?.last_name}</td>
							<td className="border px-4 py-2">{user?.user?.role}</td>
							<td className="border px-4 py-2">{user?.user?.occupation}</td>
						</tr>
					</tbody>
				</table>


				<div>
					<Button
						onClick={() => dispatch(logoutUser())}
						className="bg-red-500"
					>
						Logout
					</Button>
				</div>

				<div className="flex container w-screen">
					<div className="flex-1">
						<table className="table-auto">
							<thead>
								<tr>
									<th className="px-4 py-2">id</th>
									<th className="px-4 py-2">user_id</th>
									<th className="px-4 py-2">Check-in</th>
									<th className="px-4 py-2">Check-out</th>
									<th className="px-4 py-2">Total Hours</th>
								</tr>
							</thead>
							<tbody>
								<CheckInOut checkInOut={checkInOut} />
							</tbody>
						</table>
						{
							error && <div className="text-red-500">{error}</div>
						}
					</div>
					<div className="flex-1 flex">
						<div className="w-1/2 flex flex-col">
							<Button
								onClick={() => setShowQR({ ...showQR, checkIn: !showQR.checkIn })}
								className={`w-1/2  ${showQR.checkIn ? 'bg-green-500' : 'bg-red-500'}`}
							>Check-in</Button>
							<div className={`w-1/2 mt-5 ${showQR.checkIn ? 'inline-block' : 'hidden'}`}>

								<QRCodeComponent
									value={`http://192.168.1.125:5000/api/checkin/${user?.user?.id}`}
									size={200}
									level="H"
								/>
							</div>

						</div>

						<div className="w-1/2 flex flex-col">
							<Button
								onClick={() => setShowQR({ ...showQR, checkOut: !showQR.checkOut })}
								className={`w-1/2 ${showQR.checkOut ? 'bg-green-500' : 'bg-red-500'}`}
							>Check-out</Button>

							<div className={`w-1/2 mt-5 ${showQR.checkOut ? 'inline-block' : 'hidden'}`}>
								<QRCodeComponent
									value={`http://192.168.1.125:5000/api/checkout/${user?.user?.id}/${lastCheckIn?.id}`}
									size={200}
									level="H"
								/>
							</div>
						</div>
					</div>
				</div>

			</div>
		}
	</>;
};

export default HomeScreen;