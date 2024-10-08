import React from 'react';
import filterImage from '../../../public/filters.webp';
import spinImage from '../../../public/spin.webp';
import orderImage from '../../../public/directions-order.webp';

const HowItWorks = () => {
	return (
		<div className="flex flex-col p-12 ">
			<div className=" mt-12 w-fit rounded-xl">
				<h2 className="text-5xl font-semibold">How it works...</h2>
				<p className="w-3/4">
					Set your preferences, spin the wheel for a restaurant, then get
					directions or order online—it's that easy!
				</p>
			</div>
			<div className="flex flex-col xl:flex-row gap-8 mx-auto mt-16 w-full items-center justify-between">
				<div className="card bg-base-100 w-full xl:w-1/3 shadow-xl">
					<figure>
						<img src={filterImage.src} alt="Set Filters" />
					</figure>
					<div className="card-body p-8">
						<h2 className="card-title font-bold text-2xl">Step 1</h2>
						<h3 className="font-medium -mt-2 text-xl">
							Set Filters & Location
						</h3>
						<p className="xl:text-sm">
							Tailor your dining experience by setting filters that match your
							preferences. Whether it's narrowing down cuisine types, budget, or
							distance, you have full control.
						</p>
					</div>
				</div>
				<div className="card bg-base-100 w-full xl:w-1/3 shadow-xl">
					<figure>
						<img src={spinImage.src} alt="Spin The Wheel" />
					</figure>
					<div className="card-body p-8">
						<h2 className="card-title font-bold text-2xl">Step 2</h2>
						<h3 className="font-medium -mt-2 text-xl">Spin the Wheel</h3>
						<p className="xl:text-sm">
							Take the guesswork out of choosing where to eat! Give the wheel a
							spin, and let it randomly select a restaurant from your customized
							list of favorites.
						</p>
					</div>
				</div>
				<div className="card bg-base-100 w-full xl:w-1/3 shadow-xl">
					<figure>
						<img src={orderImage.src} alt="Get Directions" />
					</figure>
					<div className="card-body p-8">
						<h2 className="card-title font-bold text-2xl">Step 3</h2>
						<h3 className="font-medium -mt-2 text-xl">
							Get Directions / Order Online
						</h3>
						<p className="xl:text-sm">
							Choose to get directions and navigate to your restaurant or if
							you're in the mood for staying in, place an online order and enjoy
							your meal delivered right to your door.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
