import React from 'react';
import Register from '@/components/auth/Register';
import { notFound } from 'next/navigation';
import SignIn from '@/components/auth/SignIn';
import LogOut from '@/components/auth/LogOut';

const Auth = ({ params }) => {
	console.log('PARAMS', params);
	const authType = params.type;

	if (authType === 'signin') {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen">
				<SignIn />
			</div>
		);
	}
	if (authType === 'register') {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen">
				<Register />
			</div>
		);
	}
	if (authType === 'logout') {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen">
				<LogOut />
			</div>
		);
	} else {
		notFound();
	}
};

export default Auth;
