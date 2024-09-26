import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegStar } from 'react-icons/fa6';
import { TbWorldWww } from 'react-icons/tb';

const RestaurantCard = ({ name, cuisine, rating, priceRange, photo }) => {
	return (
		<article className="card w-96 rounded-xl border border-base-300 hover:shadow-lg cursor-pointer">
			<figure>
				<Image
					src={`https://places.googleapis.com/v1/${photo}/media?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&maxWidthPx=600&maxHeightPx=400`}
					width={500}
					height={500}
					className="w-full h-64 object-cover rounded-t-xl"
					alt={`Image of ${name}`}
				/>
			</figure>
			<div className="card-body bg-base-200 p-4 rounded-b-xl">
				<h2 className="card-title w-full">{name}</h2>
				<p className="-mt-2 capitalize">{cuisine}</p>
				<div className="flex ms-auto gap-2">
					<div className=" text-sm font-semibold badge badge-secondary">
						{rating} Stars
					</div>
					<div className="badge badge-secondary">
						{priceRange === 'PRICE_LEVEL_INEXPENSIVE'
							? '$'
							: priceRange === 'PRICE_LEVEL_MODERATE'
							? '$$'
							: priceRange === 'PRICE_LEVEL_EXPENSIVE'
							? '$$$'
							: 'N/A'}
					</div>
				</div>
				<div className="divider m-0 p-0"></div>
				<div className="card-actions flex flex-row">
					<button className="btn btn-outline">Get Directions</button>
					<button className="btn btn-primary grow">View Details</button>
				</div>
			</div>
		</article>
	);
};

export default RestaurantCard;
