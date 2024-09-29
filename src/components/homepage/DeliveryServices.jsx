import React from 'react';
import { LuMousePointerClick } from 'react-icons/lu';

import grubhub from '../../../public/grubhub.png';
import doordash from '../../../public/doordash.png';
import ubereats from '../../../public/ubereats.png';

const DeliveryServices = () => {
	const deliveryServices = [
		{
			name: 'Grubhub',
			imageURL: grubhub.src,
		},
		{
			name: 'Doordash',
			imageURL: doordash.src,
		},
		{
			name: 'Uber Eats',
			imageURL: ubereats.src,
		},
	];
	return (
		<div className="flex flex-row gap-x-4 p-12 md:p-8 w-full border-y-2 text-base-100 border-neutral/10 bg-gradient-to-br from-neutral/80 via-neutral to-neutral/70 h-fit z-[5] items-center justify-around relative px-24 md:px-48">
			<div className="absolute left-2 bottom-1 flex flex-col font-semibold">
				<LuMousePointerClick className="absolute top-0 left-14 text-xl" />
				<p className="text-xl">Enjoy</p>
				<p className="text-xs -mt-1">One-click ordering from...</p>
			</div>
			{deliveryServices.map((service) => (
				<img
					alt={`Image of ${service?.name} `}
					src={service.imageURL}
					className="w-24 md:w-32"
				/>
			))}
		</div>
	);
};

export default DeliveryServices;
