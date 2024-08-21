'use client';

import React, { useState, useRef } from 'react';
import { Wheel } from 'react-custom-roulette';
import { default as icon } from '../../public/icon.png';
import { FaSlidersH } from 'react-icons/fa';
import Confetti from 'react-confetti';

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
];

const Roulette = ({ modal }) => {
	const [mustSpin, setMustSpin] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const [winner, setWinner] = useState(null);
	const audioRef = useRef();

	const handleSpinClick = () => {
		setPrizeNumber(null);
		console.log('spin');
		if (!mustSpin) {
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
			const newPrizeNumber = Math.floor(Math.random() * data.length);
			setPrizeNumber(newPrizeNumber);
			setMustSpin(true);
			audioRef.current.play();
		}
	};

	return (
		<>
			<audio ref={audioRef}>
				<source src="/winner.mp3" type="audio/mp3" />
			</audio>
			{!modal && showConfetti && (
				<Confetti
					confettiSource={{ x: 0, y: 0, w: window.innerWidth, h: 0 }}
					width={window.width}
					height={window.height}
					recycle={false}
					numberOfPieces={1000}
					onConfettiComplete={() => setShowConfetti(false)}
				/>
			)}
			<div className="flex flex-col lg:flex-row lg:gap-12 justify-between w-fit lg:max-h-96 lg:w-full lg:max-w-screen-lg bg-base-300 rounded-3xl p-4">
				<div className=" flex flex-col justify-center w-full bg-base-200 rounded-3xl p-8">
					<div>
						<h1 className="text-4xl lg:text-5xl w-full font-semibold">
							Spin The Wheel!
						</h1>
						<h2 className="lg:text-lg mt-2">
							Start the wheel to select your next meal...
						</h2>
						<div className="flex flex-row gap-2 items-center mt-4 z-40">
							<button onClick={handleSpinClick} className="btn btn-secondary">
								Spin The Wheel
							</button>
							<button
								onClick={() => alert('Add Filters')}
								className="btn btn-ghost"
							>
								<FaSlidersH /> Filters
							</button>
						</div>
					</div>
					{(mustSpin || winner) && (
						<>
							<div className="divider"></div>
							<div className="w-full rounded-xl p-6 bg-primary text-base-100 shadow-lg">
								<p className=" text-primary-content">
									And the winner is
									{!winner ? (
										<span className="loading loading-dots loading-xs -mb-2"></span>
									) : (
										'...'
									)}
								</p>
								<h3 className="text-2xl lg:text-3xl font-semibold text-primary-content">
									{winner}
								</h3>
							</div>
						</>
					)}
				</div>
				<div className="flex items-center justify-center scale-95 lg:scale-125 w-fit drop-shadow-2xl rounded-full bg-primary ">
					<Wheel
						spinDuration={0.35}
						mustStartSpinning={mustSpin}
						prizeNumber={prizeNumber}
						data={data}
						onStopSpinning={() => {
							setMustSpin(false);
							setWinner(data[prizeNumber].option);
							setShowConfetti(true);
						}}
						backgroundColors={[
							'#bde0fe',
							'#a2d2ff',
							'#88b8ff',
							'#cdb4db',
							'#ffc8dd',
						]}
						innerRadius={0}
						innerBorderWidth={35}
						innerBorderColor="#291334"
						outerBorderWidth={20}
						outerBorderColor={'#291334'}
						radiusLineWidth={0.5}
						fontSize={Math.floor(18 - data.length / 2)}
						pointerProps={{
							src: icon.src,
							style: { rotate: '45deg', margin: '15px' },
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default Roulette;
