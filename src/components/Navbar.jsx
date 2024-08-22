'use client';

import React from 'react';
import logo from '../../public/icon.png';
import Link from 'next/link';

const Navbar = () => {
	const searchRestaurants = async (e) => {
		e.preventDefault();
		console.log('Searching...');
		const responseData = await fetch('/api/places', {
			// prettier-ignore
			"textQuery": 'pizza shop in wellington fl',
		});
		//const data = await responseData.json();
		console.log('response data', responseData.json());
	};
	return (
		<div className="navbar bg-primary px-4">
			<Link href="/" className="flex-1 text-primary-content  font-medium">
				<img src={logo.src} className="w-10 h-10" /> Yum Finder
			</Link>
			<div className="flex-none gap-2">
				<form
					onSubmit={searchRestaurants}
					className="md:flex flex-row join hidden"
				>
					<input
						type="text"
						placeholder="Search for a Restaurant"
						className="join-item input input-bordered w-80"
					/>
					<button type="submit" className="btn btn-secondary join-item">
						Search
					</button>
				</form>
				<div className="dropdown dropdown-end z-[100]">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="text-primary-content menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<div className="form-control md:hidden mb-4">
							<input
								type="text"
								placeholder="Search"
								className="input input-bordered w-48"
							/>
						</div>
						<input
							type="checkbox"
							value="synthwave"
							className="toggle theme-controller my-2 ms-auto "
						/>

						<li>
							<Link href="/dashboard">Profile</Link>
						</li>
						<li>
							<Link href="/development">Dev</Link>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
