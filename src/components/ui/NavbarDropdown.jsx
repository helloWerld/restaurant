import Link from 'next/link';
import React from 'react';
import { useAppContext } from '@/context/context-provider';
import LogOutButtonForMenu from '../auth/LogOutButtonForMenu';

const NavbarDropdown = () => {
	const { appData } = useAppContext();
	const { user } = appData;
	return (
		<details className="dropdown dropdown-end">
			<summary className="btn btn-outline btn-circle avatar overflow-clip mt-1">
				<img
					alt="User Profile Image"
					src={
						user?.photoURL ||
						`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`
					}
				/>
			</summary>
			<ul className="menu dropdown-content bg-base-200 rounded-box z-[1] w-60 shadow-lg mt-4 p-0">
				<div className="bg-primary flex justify-end w-full p-2 rounded-t-xl">
					{user?.email}
				</div>
				<div className="flex flex-row items-center w-full gap-2 justify-end mx-auto py-1 pe-2 bg-secondary">
					<svg
						className="swap-off h-5 w-5 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
					</svg>
					<input
						type="checkbox"
						value="synthwave"
						className="toggle theme-controller "
					/>
					<svg
						className="swap-on h-5 w-5 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
					</svg>
				</div>
				<div className="my-2 mx-1 flex flex-col gap-2">
					<li>
						<Link href="/spin">Spin The Wheel</Link>
					</li>
					<li>
						<Link href="/search">Search Restaurants</Link>
					</li>
					{user?.uid ? (
						<>
							<li>
								<Link href="/dashboard">Dashboard</Link>
							</li>
							<LogOutButtonForMenu />
						</>
					) : (
						<>
							<li>
								<Link href="/auth/register">Create Your Account</Link>
							</li>
							<li>
								<Link href="/auth/signin">Log In</Link>
							</li>
						</>
					)}
				</div>
			</ul>
		</details>
	);
};

export default NavbarDropdown;
