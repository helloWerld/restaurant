'use client';

import React, { useState } from 'react';
import {
	LuMapPin,
	LuDollarSign,
	LuClock,
	LuUtensils,
	LuStar,
	LuXCircle,
} from 'react-icons/lu';
import MapImgPlaceholder from '../../../public/mapplaceholder.jpg';
import { useAppContext } from '@/context/context-provider';
import Image from 'next/image';

const RestaurantDetailsModal = () => {
	const [showMap, setShowMap] = useState(false);
	const { appData } = useAppContext();
	const { winner } = appData;

	// default restaurant data
	const defaultRestaurant = {
		name: 'Delicious Bites',
		location: '123 Foodie St, Somewhere, CA 90210',
		price: 3,
		rating: 4.5,
		cuisine: 'Italian',
		hours: 'Mon-Sat: 11:00 AM - 10:00 PM, SUN: 12:00 PM - 9:00 PM',
	};

	// use default if no restuarant provided
	// const { name, location, price, rating, cuisine, hours } = defaultRestaurant;

	const {
		displayName,
		rating,
		priceLevel,
		primaryType,
		photos,
		formattedAddress,
	} = winner;

	return (
		<dialog
			id="restaurant_modal"
			className="modal modal-bottom sm:modal-middle"
		>
			<div className="modal-box">
				<h3 className="font-bold text-2xl">{displayName?.text}</h3>
				<Image
					src={`https://places.googleapis.com/v1/${photos?.[0]?.name}/media?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&maxWidthPx=600&maxHeightPx=400`}
					width={500}
					height={500}
					className="w-full h-64 object-cover rounded-xl my-2"
					alt={`Image of ${displayName?.text}`}
				/>
				<div className="mt-4 space-y-4">
					<div className="flex items-center space-x-2">
						<LuMapPin className="h-5 w-5 text-gray-500" />
						<span>{formattedAddress}</span>
					</div>
					<div className="flex items-center space-x-2">
						<LuDollarSign className="h-5 w-5 text-gray-500" />
						<span>
							{priceLevel === 'PRICE_LEVEL_INEXPENSIVE'
								? '$'
								: priceLevel === 'PRICE_LEVEL_MODERATE'
								? '$$'
								: priceLevel === 'PRICE_LEVEL_EXPENSIVE'
								? '$$$'
								: 'N/A'}
						</span>
					</div>
					<div className="flex items-center space-x-2">
						<LuStar className="h-5 w-5 text-gray-500" />
						<span>{rating} / 5</span>
					</div>
					<div className="flex items-center space-x-2">
						<LuUtensils className="h-5 w-5 text-gray-500" />
						<span className="capitalize">
							{primaryType?.split('_')?.join(' ')}
						</span>
					</div>
					<div className="flex items-center space-x-2">
						<LuClock className="h-5 w-5 text-gray-500" />
						<span>
							{'Mon-Sat: 11:00 AM - 10:00 PM, SUN: 12:00 PM - 9:00 PM'}
						</span>
					</div>
				</div>
				<div className="mt-6 flex flex-row items-center justify-between">
					<button
						onClick={() => setShowMap(!showMap)}
						className="btn w-40 h-auto"
					>
						{showMap ? 'Hide Map' : 'Get Directions'}
					</button>

					<div className="modal-action">
						<form method="dialog">
							<button className="btn w-40 h-auto">
								<LuXCircle className="h-5 w-5 text-gray-500" /> close
							</button>
						</form>
					</div>
				</div>
				{showMap && (
					<div className="mt-4 h-64 bg-gray-200 rounded-md overflow-hidden">
						<img
							src={MapImgPlaceholder.src}
							alt="Map"
							className="w-full h-full object-cover"
						/>
					</div>
				)}
			</div>
		</dialog>
	);
};

export default RestaurantDetailsModal;
