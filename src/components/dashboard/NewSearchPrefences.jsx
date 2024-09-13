'use client';

import { getLocation } from '@/functions';
import React, { useState } from 'react';
import { FaMapPin } from 'react-icons/fa';

const NewSearchPrefences = () => {
	const [location, setLocation] = useState({
		latitude: null,
		longitude: null,
	});

	return (
		<div className="flex flex-col w-full border bg-base-200 min-h-80 rounded-lg mb-8 mt-4 p-6">
			<h2 className="text-lg font-semibold">+ Add New Search Preference</h2>
			<div className="divider"></div>
			<label className="text-sm">
				{location?.longitude != null
					? `Latitude: ${location?.latitude}, Longitude: ${location?.longitude}`
					: 'Manually Set Location'}
			</label>
			<div className="flex flex-col md:flex-row items-center justify-between gap-2 w-full min-h-20">
				<div className="join w-full">
					<input
						type="text"
						placeholder="Ex. New York City, NY"
						className="input input-bordered w-full join-item"
					/>
					<button className="btn btn-accent join-item">Set Location</button>
				</div>
				<div className="divider md:divider-horizontal ms:ms-auto">OR</div>
				<div className="flex w-full md:w-fit justify-center">
					<button
						onClick={async () => {
							const newLocation = await getLocation();
							console.log(newLocation);
							setLocation(newLocation);
							//setLocation(newLocation);
						}}
						className="btn btn-primary w-full flex-nowrap whitespace-nowrap"
					>
						<FaMapPin />
						Locate Me
					</button>
				</div>
			</div>
			<div className="divider"></div>
			<div>Basic Filters</div>
			<div className="divider"></div>
			<div>Advanced Filters</div>
			<div className="divider"></div>
			<div className="flex flex-row gap-4">
				<button className="btn btn-info w-32 rounded-lg">Save</button>
				<button className="btn btn-ghost w-32 rounded-lg">Clear</button>
			</div>
		</div>
	);
};

export default NewSearchPrefences;
