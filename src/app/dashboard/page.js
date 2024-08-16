import Image from 'next/image';
import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const user = {
	name: 'Russell',
	profile_image:
		'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
};

const Dashboard = () => {
	return (
		<div className="p-12">
			<h1 className="text-xl font-semibold">Welcome {user?.name}!</h1>
			<div className="mt-4">
				<Image
					src={user.profile_image}
					width={250}
					height={250}
					alt="Profile picture"
					className="w-40 h-40 rounded-lg"
				/>
				<button className="btn btn-primary mt-4">
					<FaPencilAlt />
					Edit Profile Image
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
