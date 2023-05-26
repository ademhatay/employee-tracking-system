import * as React from 'react';
import QRCode from 'qrcode.react';

interface Props {
	value: string;
	size?: number;
	bgColor?: string;
	fgColor?: string;
	level?: 'L' | 'M' | 'Q' | 'H';
}

const QRCodeComponent: React.FC<Props> = ({
	value,
	size = 128,
	bgColor = '#FFFFFF',
	fgColor = '#000000',
	level = 'L',
}) => {
	return (
		<QRCode
			value={value}
			size={size}
			bgColor={bgColor}
			fgColor={fgColor}
			level={level}
		/>
	);
};

export default QRCodeComponent;
