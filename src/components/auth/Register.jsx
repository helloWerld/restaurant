'use client';

import React, { useState } from 'react';
import { auth } from '@/lib/firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FaSpinner } from 'react-icons/fa';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const handleRegister = async () => {
		// TODO: Add Email and password validation logic
		setLoading(true);
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			console.log('USER:', user);
			console.log('USER CRED:', userCredential);
			setEmail('');
			setPassword('');
			setLoading(false);
		} catch (error) {
			alert(error);
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col h-fit w-[400px] border border-black/10 rounded-xl shadow-xl p-6 gap-4">
			<h2 className="text-xl font-semibold">Register</h2>

			<label className="input input-bordered flex items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="h-4 w-4 opacity-70"
				>
					<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
					<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
				</svg>
				<input
					type="email"
					className="grow"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>

			<label className="input input-bordered flex items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="h-4 w-4 opacity-70"
				>
					<path
						fillRule="evenodd"
						d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
						clipRule="evenodd"
					/>
				</svg>
				<input
					type="password"
					className="grow"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>
			<button onClick={handleRegister} className="btn btn-primary">
				{loading ? (
					<FaSpinner className="animate-spin" />
				) : (
					'Register New Account'
				)}
			</button>
		</div>
	);
};

export default Register;
