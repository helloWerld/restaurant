import React from 'react';
import wheel from '/public/roulette_wheel.png';
import Image from 'next/image';

const Roulette = () => {
	return (
		<div className="flex lg:flex-row flex-col artboard artboard-horizontal bg-primary phone-2 mx-auto">
			<div className="flex flex-col w-1/2 p-12">
				<h2>Spin The Wheel!</h2>
			</div>
			<div className="w-1/2 mt-auto">
				<Image src={wheel.src} width={500} height={100} className="h-fit" />
			</div>
		</div>
	);
};

export default Roulette;
