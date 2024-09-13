import React from 'react';
import Image from 'next/image';
import { placesTextSearch } from '@/functions';

const SearchResults = async ({ searchParams }) => {
	try {
		const searchData = await placesTextSearch(searchParams.query, 5);
		return (
			<div className="flex flex-col p-12 max-w-screen-2xl mx-auto">
				<div className="flex flex-row justify-between items-center">
					<h2 className="text-xl mb-8">
						<span className="font-semibold">Search Results for</span> "
						{searchParams.query}"
					</h2>
				</div>
				<div>
					{searchData?.places?.map((data) => {
						const starRating = parseFloat(Math.floor(data.rating * 2) / 2);
						return (
							<div
								key={data.id}
								className="flex flex-row border-y border-y-base-300 hover:bg-base-200 py-4 gap-2 sm:gap-4"
							>
								<div>
									<Image
										src={`https://places.googleapis.com/v1/${data.photos[0].name}/media?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&maxWidthPx=600&maxHeightPx=400`}
										width={600}
										height={400}
										className="w-72 h-48 object-cover"
										alt={`Image of ${data.name}`}
									/>
								</div>
								<div className="flex flex-col justify-between w-full p-4">
									<div className="flex flex-row flex-wrap w-full  justify-between">
										<div className="mb-2">
											<h2 className="text-2xl font-semibold">
												{data.displayName.text}
											</h2>
											<address>{data.formattedAddress}</address>
										</div>
										<div className="flex flex-row item-center gap-1 sm:flex-col text-end">
											<div className="rating rating-sm rating-half">
												{[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(
													(value, i) => (
														<input
															key={i}
															type="radio"
															name={data.reference}
															className={`mask mask-star-2 ${
																i % 2 == 0 ? 'mask-half-1' : 'mask-half-2'
															} bg-yellow-500`}
															defaultChecked={starRating === value}
														/>
													)
												)}
											</div>
											<p className="hidden lg:block font-semibold mt-1">
												{data.rating} Stars
											</p>
											<p className="hidden lg:block text-sm">
												{data?.userRatingCount} Reviews
											</p>
										</div>
									</div>
									<div className="flex flex-row mt-2">
										<p>
											<span className="font-semibold">Open Now:</span>{' '}
											{data?.opening_hours?.open_now ? 'Yes' : 'No'}
										</p>
										<div className="divider divider-horizontal"></div>
										<p>
											<span className="font-semibold">Price: </span> {''}
											{'$'.repeat(data.price_level)}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	} catch (error) {
		return <div>Unabled to retrieve results: {error.message}</div>;
	}
};

export default SearchResults;
