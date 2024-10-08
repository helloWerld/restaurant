import React from 'react';
import RestaurantList from '@/components/lists/RestaurantList';
import RestaurantDetailsModal from '@/components/modals/RestaurantDetailsModal';
import Roulette from '@/components/wheel/Roulette';

const Spin = () => {
	return (
		<div className="min-h-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-start py-12 lg:pt-20 overflow-x-clip gap-8">
			<RestaurantDetailsModal />
			<Roulette />
			<RestaurantList />
		</div>
	);
};

export default Spin;
