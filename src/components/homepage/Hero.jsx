import React from 'react';
import wheel from '@../../../public/roulette_wheel.png';
import Link from 'next/link';
import logo from '@../../../public/logo.png';
import wheel_icon from '@../../../public/wheel_icon.png';

const Hero = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center w-full h-fit">
			<div className="flex flex-col items-start justify-center w-full lg:w-1/2 px-12 py-12">
				<h1 className=" text-5xl lg:text-6xl font-bold leading-tight">
					Spin the wheel,
					<br /> Find a meal 🍔
				</h1>
				<p className=" text-lg py-6 max-w-96">
					Spin the wheel and let chance take you to your next delicious
					destination.
				</p>
				<div className="flex flex-row gap-4">
					<Link
						href="/spin"
						className="hidden group hover:scale-105 md:flex flex-row btn btn-primary ps-1 relative"
					>
						<img
							className="size-10 group-hover:animate-spin border-2 border-primary rounded-full"
							src={wheel_icon.src}
						/>
						<img
							className="absolute size-3 top-1 left-8 rotate-45"
							src={logo.src}
						/>
						Spin The Wheel
					</Link>
					<Link href="/auth/register" className="btn btn-primary btn-ghost">
						Create Account / Log In
					</Link>
				</div>
			</div>
			<div className="w-full lg:w-1/2 z-1">
				<img
					src={wheel.src}
					className="w-full h-full object-cover -mr-12 drop-shadow-lg"
				/>
			</div>
		</div>
	);
};

export default Hero;
