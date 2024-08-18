'use client';

import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

const data = [
	{ option: 'Starlight Bistro' },
	{ option: 'Rocky Ridge Pizza' },
	{ option: 'Sunset Diner' },
	{ option: 'Blue Lagoon Grill' },
	{ option: 'Crimson Oak Eatery' },
	{ option: 'Golden Gate Sushi' },
	{ option: 'Emerald Bay Tacos' },
	{ option: 'Ivory Coast Café' },
	{ option: 'Maple Grove BBQ' },
	{ option: 'Silver Spoon Deli' },
	{ option: 'Copperfield Cantina' },
	{ option: 'Amber Waves Bakery' },
	{ option: 'Velvet Rose Bistro' },
	{ option: 'Sapphire Sky Burgers' },
	{ option: 'Crystal River Steakhouse' },
];

const Roulette = () => {
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);

	const handleSpinClick = () => {
		if (!mustSpin) {
			const newPrizeNumber = Math.floor(Math.random() * data.length);
			setPrizeNumber(newPrizeNumber);
			setMustSpin(true);
		}
	};

	return (
		<div className="artboard artboard-horizontal phone-5 bg-primary flex flex-row rounded-3xl">
			<div className="p-8 flex flex-col items-start justify-center w-1/2">
				<h1 className="text-5xl w-full font-semibold">Spin The Wheel!</h1>
				<h2 className="text-lg mt-2">
					Start the wheel to select your next meal
				</h2>

				<button onClick={handleSpinClick} className="btn btn-secondary mt-4">
					Spin The Wheel
				</button>
			</div>
			<div className="flex w-1/2 relative">
				<div className="absolute -bottom-24 -right-24">
					<Wheel
						mustStartSpinning={mustSpin}
						prizeNumber={prizeNumber}
						data={data}
						onStopSpinning={() => {
							setMustSpin(false);
						}}
						backgroundColors={['#65c3c8', '#ef9fbc', '#6b2f89']}
						outerBorderWidth={10}
						innerRadius={1}
						fontSize={12}
						outerBorderColor={'#291334'}
						radiusLineColor={'#291334'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Roulette;
