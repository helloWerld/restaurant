import React from 'react';
import wheel from '@../../../public/roulette_wheel.png';
import Link from 'next/link';

const Hero = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center w-full">
			<div className="flex flex-col items-start justify-center w-full lg:w-1/2 h-full px-12 py-12">
				<h1 className=" text-5xl lg:text-6xl font-bold leading-tight">
					Spin the wheel,
					<br /> Find a meal 🍔
				</h1>
				<p className=" text-lg py-6 max-w-96">
					Spin the wheel and let chance take you to your next delicious
					destination.
				</p>
				<div className="flex flex-row gap-4">
					<Link href="/spin" className="btn btn-primary">
						Spin The Wheel
					</Link>
					<Link href="auth" className="btn btn-primary btn-ghost">
						Log In / Create Account
					</Link>
				</div>
			</div>
			<div className="w-full lg:w-1/2">
				<img
					src={wheel.src}
					className="w-full h-full object-cover -mr-12 drop-shadow-lg"
				/>
			</div>
		</div>
	);
};

export default Hero;
