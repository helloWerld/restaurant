'use client';

import React from 'react';
import logo from '../../public/icon.png';
import { useAppContext } from '@/context/theme-provider';
import donut from '../../public/donut.gif';

const Navbar = () => {
	const { appData } = useAppContext();
	return (
		<div className="navbar bg-primary px-4">
			<div className="flex-1">
				<img src={logo.src} className="w-10 h-10" /> Yum Finder
			</div>
			<div className="flex-none gap-2">
				<div className="form-control">
					<input
						type="text"
						placeholder="Search for a Restaurant"
						className="input input-bordered w-80"
					/>
				</div>
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							{appData?.user?.photoURL === null ? (
								<img alt="User Profile Image" src={donut.src} />
							) : (
								<img alt="User Profile Image" src={appData?.user?.photoURL} />
							)}
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<li>{appData?.user?.email}</li>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
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
