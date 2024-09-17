'use client';

import React from 'react';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase/firebase.config';

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
			<button onClick={handleLogOut}>Log Out</button>
		</li>
	);
};

export default LogOutButtonForMenu;
