import { cuisineOptions } from '@/data/cuisineOptions';
import { getLocation } from '@/functions';
import React, { useState } from 'react';
import { FaMapPin, FaSlidersH, FaTimes } from 'react-icons/fa';

const Filters = ({ setShowFilters, filters, setFilters }) => {
	return (
		<div className=" flex flex-col items-center w-full bg-base-200 rounded-3xl h-fit p-4 relative">
			<button
				onClick={() => setShowFilters(false)}
				className="btn-sm btn-circle btn-ghost absolute top-2 right-2 flex items-center justify-center"
			>
				<FaTimes />
			</button>
			<h2 className="flex flex-row  items-center gap-2 text-xl font-semibold mb-4">
				<FaSlidersH />
				Set Filters
			</h2>
			<div className="flex flex-col w-full h-full">
				<label className="text-sm font-semibold mb-2">
					{filters?.location?.circle?.center?.longitude !== null
						? `Latitude: ${filters?.location?.circle?.center?.latitude}, Longitude: ${filters?.location?.circle?.center?.longitude}`
						: 'Set Location'}
				</label>
				<div className="flex flex-col md:flex-row items-center justify-between gap-2 lg:gap-4 w-full">
					<div className="join w-full">
						<input
							type="text"
							placeholder="Ex. New York City, NY"
							className="input input-bordered w-full join-item"
						/>
						<button className="btn btn-accent join-item">Search</button>
					</div>
					<div className="flex w-full md:w-fit justify-center">
						<button
							onClick={async () => {
								const newLocation = await getLocation();
								console.log(newLocation);
								setFilters((prev) => ({
									...prev,
									location: {
										circle: {
											...prev.location.circle,
											center: {
												latitude: newLocation.latitude,
												longitude: newLocation.longitude,
											},
										},
									},
								}));
							}}
							className="btn btn-primary w-full flex-nowrap whitespace-nowrap"
						>
							<FaMapPin />
							Find Me
						</button>
					</div>
				</div>
				<div className="divider"></div>
				<label className="text-sm font-semibold mb-2">
					Search Radius{' '}
					<span className="font-normal">
						({`${Math.floor(filters.location.circle.radius / 1609)} Miles`})
					</span>
				</label>
				<div className="mt-2">
					<input
						type="range"
						min="1"
						max="30"
						value={Math.floor(filters.location.circle.radius / 1609)}
						className="range"
						onChange={(e) =>
							setFilters((prev) => ({
								...prev,
								location: {
									circle: {
										...prev.location.circle,
										radius: e.target.value * 1609,
									},
								},
							}))
						}
					/>
				</div>
				<div className="divider"></div>

				<div className="flex flex-row items-center justify-between text-sm">
					<label className="text-sm font-semibold">Cuisine</label>
					<button
						className="btn btn-ghost"
						onClick={() => {
							if (filters.cuisine.length !== 1) {
								setFilters((prev) => ({ ...prev, cuisine: ['restaurant'] }));
							}
						}}
					>
						Reset
					</button>
				</div>
				<div className="flex flex-row items-center justify-center flex-wrap gap-x-2 form-control">
					{cuisineOptions.map((cuisine) => (
						<label key={cuisine} className="cursor-pointer label w-fit gap-2">
							<span className="label-text capitalize">
								{cuisine
									.split('_')
									.join(' ')
									.replace('restaurant', '')
									.replace('shop', '')}
							</span>
							<input
								type="checkbox"
								className="toggle toggle-xs"
								checked={filters.cuisine.includes(cuisine)}
								onChange={() => {
									if (filters.cuisine.includes(cuisine)) {
										setFilters((prev) => ({
											...prev,
											cuisine: prev.cuisine.filter((item) => item !== cuisine),
										}));
									} else {
										setFilters((prev) => ({
											...prev,
											cuisine: [...prev.cuisine, cuisine],
										}));
									}
								}}
							/>
						</label>
					))}
				</div>
			</div>
		</div>
	);
};

export default Filters;
