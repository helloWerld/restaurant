'use client';

import React from 'react';
import logo from '../../../public/logo.png';
import Link from 'next/link';
import SearchForm from './SearchForm';

const Navbar = () => {
	return (
		<div className="navbar bg-primary px-4">
			<Link href="/" className="flex-1 text-primary-content  font-medium">
				<img src={logo.src} className="w-10 h-10" /> Yum Finder
			</Link>
			<div className="flex-none gap-2">
				<Link href="/spin" className="btn btn-outline">
					Spin The Wheel!
				</Link>
				<SearchForm />
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