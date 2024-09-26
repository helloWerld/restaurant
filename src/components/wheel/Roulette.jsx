'use client';

import React, { useState, useRef, useEffect } from 'react';
//import { Wheel } from 'react-custom-roulette';
import logo from '../../../public/logo.png';
import { FaSlidersH } from 'react-icons/fa';
import Confetti from 'react-confetti';
import { getLocation, placesNearbySearch } from '@/functions';
import dynamic from 'next/dynamic';
import Filters from './Filters';
import { useAppContext } from '@/context/context-provider';

const Wheel = dynamic(
	() => import('react-custom-roulette').then((mod) => mod.Wheel),
	{
		ssr: false,
	}
);

// const data = [
// 	{ option: 'Starlight Bistro' },
// 	{ option: 'Rocky Ridge Pizza' },
// 	{ option: 'Sunset Diner' },
// 	{ option: 'Blue Lagoon Grill' },
// 	{ option: 'Crimson Oak Eatery' },
// 	{ option: 'Golden Gate Sushi' },
// 	{ option: 'Emerald Bay Tacos' },
// 	{ option: 'Ivory Coast Café' },
// 	{ option: 'Maple Grove BBQ' },
// ];

const Roulette = ({ modal }) => {
	const { appData, setAppData } = useAppContext();
	const [filters, setFilters] = useState({
		location: {
			circle: {
				center: {
					latitude: 37.7937,
					longitude: -122.3965,
				},
				radius: 25000,
			},
		},
		cuisine: [],
	});
	const [mustSpin, setMustSpin] = useState(false);
	const [showFilters, setShowFilters] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const [winner, setWinner] = useState(null);
	const [windowSize, setWindowSize] = useState({
		innerWidth: 0,
		innerHeight: 0,
	});
	const [restaurantsList, setRestaurantsList] = useState([
		{ option: 'Starlight Bistro' },
		{ option: 'Rocky Ridge Pizza' },
		{ option: 'Sunset Diner' },
		{ option: 'Blue Lagoon Grill' },
		{ option: 'Crimson Oak Eatery' },
		{ option: 'Golden Gate Sushi' },
		{ option: 'Emerald Bay Tacos' },
		{ option: 'Ivory Coast Café' },
		{ option: 'Maple Grove BBQ' },
	]);
	const audioRef = useRef();

	useEffect(() => {
		setWindowSize({
			innerWidth: window.innerWidth,
			innerHeight: window.innerHeight,
		});
	}, []);

	const handleSpinClick = async () => {
		console.log('spin');

		// Resets winning number to null
		setPrizeNumber(null);

		// Check for user's location
		if (!mustSpin) {
			let searchFilters;
			if (
				filters.location.circle.center.latitude === null ||
				filters.location.circle.center.longitude === null
			) {
				const newLocation = await getLocation();
				console.log(newLocation);
				searchFilters = {
					...filters,
					location: {
						circle: {
							...filters?.location?.circle,
							center: {
								latitude: newLocation?.latitude,
								longitude: newLocation?.longitude,
							},
						},
					},
				};
			} else {
				searchFilters = filters;
			}

			const response = await placesNearbySearch(searchFilters);
			console.log('SEARCH RESULTS:', response);
			let data = [];
			response?.places?.forEach((place) =>
				data.push({
					option: place?.displayName?.text,
				})
			);
			console.log('DATA', data);

			setRestaurantsList(data);
			setAppData((prev) => ({ ...prev, spin_results: response?.places }));

			audioRef.current.pause();
			audioRef.current.currentTime = 0;

			const newPrizeNumber = data ? Math.floor(Math.random() * data.length) : 0;
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
					confettiSource={{ x: 0, y: 0, w: windowSize.innerWidth, h: 0 }}
					width={windowSize.width}
					height={windowSize.height}
					recycle={false}
					numberOfPieces={1000}
					onConfettiComplete={() => setShowConfetti(false)}
				/>
			)}
			<div className="flex flex-col lg:flex-row lg:gap-12 justify-between w-fit lg:w-full lg:max-w-screen-lg bg-base-300 rounded-3xl p-4">
				{!showFilters && (
					<div className=" flex flex-col justify-center w-full bg-base-200 rounded-3xl p-8">
						<div>
							<h1 className="text-4xl lg:text-5xl w-full font-semibold">
								Spin The Wheel!
							</h1>
							<h2 className="lg:text-lg mt-2">
								Start the wheel to select your next meal...
							</h2>
							<div className="flex flex-row gap-2 items-center mt-4 z-40">
								<button
									disabled={mustSpin}
									onClick={() => handleSpinClick()}
									className="btn btn-secondary"
								>
									Spin The Wheel
								</button>
								<button
									onClick={() => setShowFilters((prev) => !prev)}
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
				)}
				{!showFilters && (
					<div className="whitespace-normal flex items-center justify-center scale-95 lg:scale-125 w-fit drop-shadow-2xl rounded-full bg-primary ">
						<Wheel
							className="overflow-clip"
							spinDuration={0.35}
							mustStartSpinning={mustSpin}
							prizeNumber={prizeNumber}
							data={restaurantsList}
							onStopSpinning={() => {
								setMustSpin(false);
								setWinner(restaurantsList[prizeNumber].option || 'Error');
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
							fontWeight={'normal'}
							fontSize={
								restaurantsList
									? Math.floor(20 - restaurantsList?.length / 1.3)
									: 0
							}
							pointerProps={{
								src: logo.src,
								style: { rotate: '45deg', margin: '15px' },
							}}
							disableInitialAnimation={false}
						/>
					</div>
				)}
				{showFilters && (
					<Filters
						setShowFilters={setShowFilters}
						filters={filters}
						setFilters={setFilters}
					/>
				)}
			</div>
		</>
	);
};

export default Roulette;
