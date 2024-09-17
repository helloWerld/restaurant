'use client';

import React, { useState } from 'react';
import { user } from '@/data';
import { FaCaretDown, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import NewSearchPrefences from '@/components/dashboard/NewSearchPrefences';

const Preferences = () => {
	const [showNewSearchPreference, setShowNewSearchPreference] = useState(false);
	const { name, preferences } = user;
	return (
		<div className="p-12 w-full">
			<h1 className="text-2xl font-semibold">
				{name.split(' ')[0]}'s Search Preferences{' '}
				<button
					onClick={() => setShowNewSearchPreference((prev) => !prev)}
					className="btn btn-circle bg-primary hover:bg-secondary text-xl ms-4"
				>
					{showNewSearchPreference ? '-' : '+'}
				</button>
			</h1>
			{showNewSearchPreference && <NewSearchPrefences />}
			<div className="w-full xl:w-1/2 flex flex-col gap-6 my-8">
				{preferences.map((preference, index) => (
					<div
						key={index}
						className="group collapse bg-base-300 hover:bg-primary tracking-wide hover:shadow-lg transition duration-300"
					>
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium flex flex-row items-center justify-between">
							<p className="group-hover:font-semibold">{preference.name}</p>
							<div className="flex flex-row gap-4 -mr-6">
								<div className="btn btn-md btn-circle hover:bg-info hover:border-info-content/10  z-30 text-lg">
									<FaPencilAlt />
								</div>
								<div className="btn btn-sm btn-circle hover:bg-error hover:border-red-500 hover:text-white z-30 text-lg">
									<FaTrashAlt />
								</div>
							</div>
						</div>
						<div className="collapse-content bg-base-200">
							<p className="mt-4">
								<span className="font-semibold">Cuisine:</span>{' '}
								{preference.cuisine.join(', ')}
							</p>
							<div className="divider my-2"></div>
							<p className="">
								<span className="font-semibold">Price Range:</span>{' '}
								{preference.price_range}
							</p>
							<div className="divider my-2"></div>
							<p className="">
								<span className="font-semibold">Dietary Restrictions:</span>{' '}
								{preference.dietary_restrictions.join(', ')}
							</p>
							<div className="divider my-2"></div>
							<p className="">
								<span className="font-semibold">Favorite Resturants:</span>
							</p>
							<div className=" flex flex-row flex-wrap mt-4 gap-2">
								{preference?.favorite_restaurants?.map((restaurant) => (
									<div
										key={restaurant.name}
										className="bg-base-300 flex flex-col py-2 px-4 rounded-lg w-fit border border-secondary"
									>
										<h3 className="font-semibold text-lg">{restaurant.name}</h3>
										<p>{restaurant.location}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Preferences;
