'use client';

import React from 'react';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase/firebase.config';
import { FaSignOutAlt } from 'react-icons/fa';

const LogOutButtonForMenu = () => {
	const router = useRouter();
	const handleLogOut = async () => {
		try {
			await signOut(auth);
			router.push('/');
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<li>
			<button onClick={handleLogOut}>
				<FaSignOutAlt className="text-lg" />
				Log Out
			</button>
		</li>
	);
};

export default LogOutButtonForMenu;
