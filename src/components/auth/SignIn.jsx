'use client';

import React, { useState } from 'react';
import { auth } from '@/lib/firebase/firebase.config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FaGoogle, FaSpinner } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const router = useRouter();
	const provider = new GoogleAuthProvider();

	const handleSignIn = async (registrationMethod) => {
		// TODO: Add Email and password validation logic

		setLoading(true);
		switch (registrationMethod) {
			case 'email':
				console.log('Signing In with Email...');
				try {
					const userCredential = await signInWithEmailAndPassword(
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
					router.push('/dashboard');
				} catch (error) {
					alert(error);
					setLoading(false);
				}
				break;
			case 'google':
				console.log('Signing In with Google...');
				try {
					const userCredential = await signInWithPopup(auth, provider);
					const user = userCredential.user;
					console.log('USER:', user);
					console.log('USER CRED:', userCredential);
					setEmail('');
					setPassword('');
					setLoading(false);
					router.push('/dashboard');
				} catch (error) {
					alert(error);
					setLoading(false);
				}
				break;
			default:
				alert('Registration Error: Registration Method Undefined');
		}
	};

	return (
		<div className="flex flex-col h-fit w-[400px] border border-black/10 rounded-xl shadow-xl p-6 gap-4">
			<h2 className="text-xl font-semibold">Sign In</h2>

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
			<button onClick={() => handleSignIn('email')} className="btn btn-primary">
				{loading ? <FaSpinner className="animate-spin" /> : 'Sign In'}
			</button>

			<div className="divider">OR</div>

			<button
				onClick={() => handleSignIn('google')}
				className="btn btn-primary-content"
			>
				<FaGoogle />
				Sign In With Google
			</button>
			<p className="flex w-full text-sm gap-1 justify-center mt-2">
				Don't have an account yet?
				<Link className="font-semibold hover:underline" href="/auth/register">
					Register Here
				</Link>
			</p>
		</div>
	);
};

export default SignIn;
