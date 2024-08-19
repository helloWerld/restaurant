'use client';

import Image from 'next/image';
import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { user } from '@/data';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const Dashboard = () => {
	const { name, email, profile_image, location, created_at, updated_at } = user;
	return (
		<div className="p-12">
			<h1 className="text-2xl font-semibold">Welcome {name.split(' ')[0]}!</h1>
			<div className="flex flex-row flex-wrap mt-8">
				<div className="flex flex-col gap-4 justify-center w-fit">
					<Image
						src={profile_image}
						width={250}
						height={250}
						alt="Profile picture"
						className="w-44 h-44 rounded-lg"
					/>
					<button className="btn btn-primary mt-4">
						<FaPencilAlt />
						Edit Profile Image
					</button>
				</div>
				<div className="divider divider-horizontal hidden md:flex"></div>
				<div className="flex flex-col my-8 gap-4 justify-center">
					<p>
						<span className="font-semibold text-lg">Name: </span>
						{name}
					</p>
					<p>
						<span className="font-semibold text-lg">Email: </span>
						{email}
					</p>
					<p>
						<span className="font-semibold text-lg">Created: </span>
						{new Date(created_at).toLocaleDateString()}
					</p>
					<p>
						<span className="font-semibold text-lg">Last Updated: </span>
						{new Date(updated_at).toLocaleDateString()}
					</p>
					<p>
						<span className="font-semibold text-lg">Default Location: </span>
						{location.address}
					</p>
				</div>
				<div className="flex flex-col justify-center gap-4 my-8 xl:m-8 rounded-xl overflow-clip">
					<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
						<Map
							className="w-[80vw] h-[80vw] lg:w-96 lg:h-80"
							defaultCenter={{
								lat: location.latitude,
								lng: location.longitude,
							}}
							defaultZoom={12}
							gestureHandling={'greedy'}
							disableDefaultUI={true}
						/>
					</APIProvider>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
