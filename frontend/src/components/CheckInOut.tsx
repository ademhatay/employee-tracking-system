import React from 'react';

interface Props {
	checkInOut: object[];
}

const CheckInOut: React.FC<Props> = ({ checkInOut }) => {

	return <>
		{
			checkInOut ? checkInOut?.map((item: any) => {
				const checkIn = new Date(item.check_in);
				const checkOut = new Date(item.check_out);
				const duration = checkOut.getTime() - checkIn.getTime();

				const hours = Math.floor(duration / (1000 * 60 * 60));
				const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((duration % (1000 * 60)) / 1000);

				const formattedDuration = `${hours} saat ${minutes} dakika ${seconds} saniye`;

				return (
					<tr key={item.id}>
						<td className="border px-4 py-2">{item.id}</td>
						<td className="border px-4 py-2">{item.user_id}</td>
						<td className="border px-4 py-2">{checkIn.toLocaleString(
							'tr-TR',
							{
								hour12: false,
								timeZone: 'Europe/Istanbul',
								hour: 'numeric',
								minute: 'numeric',
								day: 'numeric',
								month: 'numeric',
							}
						)}</td>
						<td className="border px-4 py-2">{item.check_out ? checkOut.toLocaleString(
							'tr-TR',
							{
								hour12: false,
								timeZone: 'Europe/Istanbul',
								hour: 'numeric',
								minute: 'numeric',
								day: 'numeric',
								month: 'numeric',
							}
						) : 'null'}</td>
						<td className="border px-4 py-2">{item.check_out ? formattedDuration : 'null'}</td>
					</tr>
				);
			}) : (
				<div>
					loading...
				</div>
			)
		}
	</>
};

export default CheckInOut;