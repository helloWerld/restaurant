'use client';

import React from 'react';
import restaurantData from '../../data/restaurantdata';
import RestaurantCard from '../cards/RestaurantCard';
import { useAppContext } from '@/context/context-provider';

const RestaurantList = () => {
	const { appData } = useAppContext();
	const { spin_results } = appData;
	return (
		<>
			{spin_results.length > 0 && (
				<h2 className="text-xl -mb-4">Nearby Search Results</h2>
			)}
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto gap-4 mt-0">
				{spin_results?.map((restaurant) => (
					<RestaurantCard
						key={restaurant?.id}
						name={restaurant?.displayName?.text}
						cuisine={restaurant?.primaryType?.split('_').join(' ')}
						rating={restaurant?.rating}
						priceRange={restaurant.priceLevel}
						photo={restaurant?.photos[0]?.name}
						// website={restaurant.option}
					/>
				))}
			</div>
		</>
	);
};

export default RestaurantList;
