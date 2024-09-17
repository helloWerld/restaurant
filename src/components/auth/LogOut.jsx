'use client';

import React, { useState } from 'react';
import { auth } from '@/lib/firebase/firebase.config';
import { signOut } from 'firebase/auth';
import { FaSpinner } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LogOut = () => {
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const handleLogOut = async () => {
		setLoading(true);
		try {
			await signOut(auth);
			setLoading(false);
			router.push('/');
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className="flex flex-col h-fit w-[400px] border border-black/10 rounded-xl shadow-xl p-6 gap-4">
			<h2 className="text-xl font-semibold">Log Out</h2>
			<p className="text-center">
				You are currently signed in as{' '}
				<span className="font-semibold">{auth?.currentUser?.email}</span>
			</p>
			<button onClick={handleLogOut} className="btn btn-primary-content">
				{loading ? <FaSpinner className="animate-spin" /> : 'Log Out'}
			</button>
		</div>
	);
};

export default LogOut;
