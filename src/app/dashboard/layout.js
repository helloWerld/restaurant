import Link from 'next/link';
import React from 'react';
import {
	FaUserEdit,
	FaSlidersH,
	FaSearchLocation,
	FaThumbsUp,
	FaHistory,
} from 'react-icons/fa';

const NavLinks = [
	{
		name: 'Profile Information',
		icon: <FaUserEdit />,
		href: '/dashboard',
	},
	{
		name: 'Search Preferences',
		icon: <FaSlidersH />,
		href: '/dashboard/preferences',
	},
	{
		name: 'Spin History',
		icon: <FaHistory />,
		href: '/dashboard/history',
	},
	{ name: 'Reviews', icon: <FaThumbsUp />, href: '/dashboard/reviews' },
];

const layout = ({ children }) => {
	return (
		<div className="flex flex-col lg:flex-row w-full min-h-screen">
			<div className="flex flex-row items-center justify-around lg:hidden w-full h-fit bg-base-200 text-base-content">
				{NavLinks.map((link, index) => (
					<Link
						href={link.href}
						key={index}
						className="group flex justify-center hover:bg-base-300 rounded-lg cursor-pointer w-full h-full py-4"
					>
						<div className="text-3xl transition duration-200 group-hover:scale-105 group-active:scale-95">
							{link.icon}
						</div>
					</Link>
				))}
			</div>
			<div className="drawer lg:drawer-open w-min">
				<input
					id="dashboard-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-side">
					<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-6 gap-2">
						{/* Sidebar content here */}
						{NavLinks.map((link, index) => (
							<li key={index} className="flex flex-row gap-0">
								<Link href={link.href}>
									<span className="text-2xl p-2">{link.icon}</span>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			{children}
		</div>
	);
};

export default layout;
