'use client';

import React from 'react';
import { restaurantSearchHistory } from '@/data';
import RouletteModal from '@/components/modals/RouletteModal';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const History = () => {
	return (
		<div className="p-12 w-full">
			<div className="w-full flex flex-row justify-between items-center">
				<h1 className="text-2xl font-semibold">Restaurant Spin History</h1>
				<RouletteModal />
			</div>
			<div className="divider"></div>
			<div className="flex flex-col gap-4">
				{restaurantSearchHistory.map((historyEvent) => (
					<div className="group collapse bg-base-300 hover:bg-primary tracking-wide hover:shadow-lg transition duration-300">
						<input type="checkbox" />
						<div className="collapse-title pr-4 text-xl font-medium flex flex-row gap-4 w-full items-center justify-between">
							<div>
								<p className="group-hover:font-semibold">{historyEvent.name}</p>
								<p className="text-xs">
									{new Date(historyEvent?.searchedOn).toLocaleString()}
								</p>
							</div>
							<div className="flex flex-col items-end">
								<div className="rating rating-sm">
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
										defaultChecked
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
									/>
								</div>
								<p className="text-sm text-end">
									{historyEvent?.location?.address}
								</p>
							</div>
						</div>
						<div className="collapse-content flex flex-row bg-base-200">
							<div>
								<p className="mt-4">
									<span className="font-semibold">Cuisine:</span>{' '}
									{historyEvent?.cuisine}
								</p>
								<div className="divider my-2"></div>
								<p className="">
									<span className="font-semibold">Price Range:</span>{' '}
									{historyEvent.price_range}
								</p>
								<div className="divider my-2"></div>
								<p className="">
									<span className="font-semibold">Dietary Restrictions:</span>{' '}
									{historyEvent?.dietary_restrictions?.map(
										(item) => item + ', '
									)}
								</p>
							</div>
							<div className="w-full lg:w-1/2">
								<APIProvider
									apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
								>
									<Map
										className="w-64 h-64"
										defaultCenter={{
											lat: historyEvent.location.latitude,
											lng: historyEvent.location.longitude,
										}}
										defaultZoom={12}
										gestureHandling={'greedy'}
										disableDefaultUI={true}
									/>
								</APIProvider>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default History;
