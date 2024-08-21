'use client';

import React from 'react';
import Roulette from '../Roulette';
import { FaTimes } from 'react-icons/fa';

const RouletteModal = () => {
	return (
		<>
			{/* Open the modal using document.getElementById('ID').showModal() method */}
			<button
				className="btn btn-secondary"
				onClick={() => document.getElementById('roulette_modal').showModal()}
			>
				Spin The Wheel
			</button>
			<dialog
				id="roulette_modal"
				className="modal modal-bottom overflow-x-clip"
			>
				<div className="flex modal-box w-fit max-w-11/12 overflow-visible h-fit m-auto rounded-3xl relative">
					<button
						onClick={() => document.getElementById('roulette_modal').close()}
						className="btn btn-ghost absolute top-2 left-2 z-[100]"
					>
						Close <FaTimes className="text-lg" />
					</button>
					<Roulette modal={true} />
				</div>
			</dialog>
		</>
	);
};

export default RouletteModal;
