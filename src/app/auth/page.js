import Link from 'next/link';
import React from 'react';

const AuthSelect = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="flex flex-col text-center h-fit w-[400px] border border-black/10 rounded-xl shadow-xl p-6 gap-4">
				<p className="font-semibold text-xl">New to Yum Finder?</p>
				<Link
					href="/auth/register"
					className="btn btn-primary-content hover:bg-primary mt-2"
				>
					Create Your Account
				</Link>
				<div className="divider">OR</div>
				<p>Already have an account?</p>
				<Link
					href="/auth/signin"
					className="btn btn-primary-content hover:bg-primary"
				>
					Sign In
				</Link>
			</div>
		</div>
	);
};

export default AuthSelect;
