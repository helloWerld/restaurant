'use client';

import React from 'react';
import logo from '../../../public/logo.png';
import Link from 'next/link';
import NavbarDropdown from './NavbarDropdown';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import wheel from '../../../public/wheel_icon.png';

const Navbar = () => {
	return (
		<div className="navbar bg-primary px-4">
			<div className="w-full max-w-screen-2xl flex flex-row justify-between items-center mx-auto">
				<Link
					href="/"
					className="flex items-center text-primary-content  font-medium"
				>
					<img src={logo.src} className="w-10 h-10" /> Yum Finder
				</Link>
				<div className="flex flex-row items-center gap-2">
					<Link
						href="/spin"
						className="group hover:scale-105 hover:text-base-100 flex flex-row btn btn-neutral ps-1 relative"
					>
						<img
							className="size-10 group-hover:animate-spin border-2 border-primary rounded-full"
							src={wheel.src}
						/>
						<img
							className="absolute size-3 top-1 left-8 rotate-45"
							src={logo.src}
						/>
						Spin The Wheel
					</Link>
					{/* <SearchForm /> */}
					<Link href="/search" className="btn btn-outline btn-circle">
						<FaMagnifyingGlass />
					</Link>
					<NavbarDropdown />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
