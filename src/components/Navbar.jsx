import React from 'react';
import logo from '../../public/icon.png';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className="navbar bg-primary px-4">
			<Link href="/" className="flex-1">
				<img src={logo.src} className="w-10 h-10" /> Yum Finder
			</Link>
			<div className="flex-none gap-2">
				<div className="hidden md:form-control">
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
							<img
								alt="Tailwind CSS Navbar component"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<div className="form-control md:hidden mb-4">
							<input
								type="text"
								placeholder="Search"
								className="input input-bordered w-48"
							/>
						</div>
						<li>
							<Link href="/dashboard" className="justify-between">
								Profile
							</Link>
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
