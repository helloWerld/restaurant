import Roulette from '@/components/wheel/Roulette';
import React from 'react';

const Spin = () => {
	return (
		<div className="min-h-screen flex flex-col items-center pt-12 lg:pt-64 overflow-x-clip">
			<Roulette />
		</div>
	);
};

export default Spin;
